import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import client, { urlFor } from "../client";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import WideCard from "../components/WideCard";
import styles from "../styles/Home.module.css";

type HomeProps = {
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
  jobs: {
    startedAt: string;
    finishedOn: string;
    name: string;
    title: string;
    description: string;
    image: {
      asset: {
        _ref: string;
      };
    };
    href: string;
  }[];
};

export default function Home({ author, jobs }: HomeProps) {
  return (
    <>
      <Head>
        <title>Andrew Carter</title>
        <meta
          name="description"
          content="Andrew Carter, Software Engineer | Full Stack Developer"
        />
        <meta name="author" content="Andrew Carter" />
      </Head>
      <Navbar />
      <section className={styles.hero}>
        <img
          src={urlFor(author.image).size(250, 250).url()!}
          alt={author.name}
        />
        <div>
          <h1 className="teal">Andrew Carter</h1>
          <p>Software Engineer | Full Stack Developer</p>
          <p>BS Computer Science, University of Texas at Dallas, 2023</p>
          <div className={styles.heroButtons}>
            <LinkButton href="mailto:andrew@andrewscottcarter.com">
              Email me!
            </LinkButton>
            <LinkButton href="mailto:technorover@gmail.com">Resume</LinkButton>
          </div>
        </div>
      </section>

      <section className={styles.work}>
        <h1 className="pale-yellow">Work History</h1>
        {jobs.map((job) => (
          <WideCard
            imgUrl={urlFor(job.image).width(200).url()!}
            alt={job.name}
            href={job.href}
            title={`${job.name} | ${job.title}, ${new Date(
              job.startedAt
            ).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
            })} - ${new Date(job.finishedOn).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
            })}`}
          >
            <p>{job.description}</p>
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
  const author = await client.fetch(
    `*[_type == "author" && slug.current == $slug][0]{name, image}`,
    { slug: "andrewcarter" }
  );

  const jobs = await client.fetch(
    `*[_type == "job"]|order(startedAt desc) {name, title, startedAt, finishedOn, image, href, description}`
  );

  return { props: { author, jobs } };
};
