import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WideCard from "../../components/WideCard";
import styles from "../../styles/BlogHome.module.css";
import client, { urlFor } from "../../client";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { DecorativeButton } from "../../components/LinkButton";

type BlogHomeProps = {
  posts: {
    author: {
      name: string;
      slug: {
        current: string;
      };
    };
    categories: {
      title: string;
    }[];
    thumbnail: {
      asset: {
        url: string;
      };
    };
    publishedAt: string;
    slug: {
      current: string;
    };
    summary: string;
    title: string;
  }[];
};

export default function BlogHome({ posts }: BlogHomeProps) {
  return (
    <>
      <Head>
        <title>Andrew Carter | Blog</title>
      </Head>
      <Navbar />
      <section className={styles.blog}>
        <h1 className="pale-yellow">Blog</h1>
        {posts.map((post) => (
          <WideCard
            href={`/blog/${post.slug.current}`}
            imgUrl={urlFor(post.thumbnail).width(200).url()!}
            title={post.title}
          >
            <p>
              {new Date(post.publishedAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className={styles.categories}>
              {post.categories.map((category) => (
                <DecorativeButton small>{category.title}</DecorativeButton>
              ))}
            </div>
            <p>{post.summary}</p>
          </WideCard>
        ))}
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await client.fetch(
    `*[_type == "post" && publishedAt < now()]|order(publishedAt desc) {title, summary, publishedAt, categories[]->{title}, slug, thumbnail, author->{name, slug}}`
  );

  return { props: { posts: res } };
};
