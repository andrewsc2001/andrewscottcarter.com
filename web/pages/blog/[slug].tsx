import BlockContent from "@sanity/block-content-to-react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import client, { urlFor } from "../../client";
import AuthorBlock from "../../components/AuthorBlock";
import Footer from "../../components/Footer";
import { NextLinkButton } from "../../components/LinkButton";
import Navbar from "../../components/Navbar";
import styles from "../../styles/BlogPost.module.css";

export default function BlogPost({
  title,
  author,
  categories,
  mainImage,
  body,
  summary,
  publishedAt,
}: any) {
  return (
    <>
      <Head>
        <title>{`${author.name} | ${title}`}</title>
        <meta name="description" content={summary} />
        <meta name="author" content={author} />
      </Head>
      <Navbar />
      <div
        className={styles.mainImage}
        style={{
          backgroundImage: `url("${urlFor(mainImage?.asset).url()}")`,
        }}
      />
      <article className={styles.article}>
        <h1>{title}</h1>
        <div className={styles.categories}>
          {categories.map((cat: any) => (
            <NextLinkButton small href={"/categories/" + cat.title}>
              {cat.title}
            </NextLinkButton>
          ))}
        </div>
        <AuthorBlock
          imgUrl={urlFor(author.image).size(100, 100).url()!}
          date={new Date(publishedAt)}
          name={author.name}
        />
        <BlockContent blocks={body} />
      </article>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params ?? { slug: "" };
  const res = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      author->,
      categories[]->,
      body,
      mainImage,
      summary,
      publishedAt
    }`,
    { slug }
  );

  return { props: res };
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await client.fetch(`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug?.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
