import Head from "next/head";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import WideCard from "../components/WideCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Carter</title>
      </Head>
      <Navbar />
      <section className={styles.hero}>
        <img src="profile.jpg" alt="Andrew Carter" />
        <div>
          <h1 className="teal">Andrew Carter</h1>
          <p>Software Engineer | Full Stack Developer</p>
          <p>BS Computer Science, University of Texas at Dallas, 2023</p>
          <div className={styles.heroButtons}>
            <LinkButton href="mailto:technorover@gmail.com">
              Email me!
            </LinkButton>
            <LinkButton href="mailto:technorover@gmail.com">Resume</LinkButton>
          </div>
        </div>
      </section>

      <section className={styles.work}>
        <h2 className="pale-yellow">Work History</h2>
        <WideCard
          imgUrl="minterelogo.png"
          alt="Mintere"
          href="https://mintere.com"
          title="Mintere | Founder, CTO Feb 2020 - Aug 2021"
        >
          <p>
            Founded a social media marketing startup with highschool classmates
            targeting small businesses. Most of our original clients were
            real-estate agents looking for someone to manage their social media
            presence. When the COVID-19 shutdowns happened, these clients were
            hit especially hard, forcing them to close down or cut costs and
            forcing us to pivot into web development. Today, we have worked with
            several companies of various sizes, from an individual lawyer to an
            architectural consulting firm.
          </p>
        </WideCard>

        <WideCard
          imgUrl="moolahulogo.png"
          alt="Moolah U"
          href="https://moolahu.com"
          title="Moolah U | App Developer, Summer 2019"
        >
          <p>
            Worked with a small fintech startup through the early stages of
            their acceptance into the MassChallenge incubator. Work included
            developing a mobile banking and budgeting app marketed towards
            parents looking to give their children experience with money at a
            young age as well as developing the backend for that app. Worked
            with one other developer
          </p>
        </WideCard>
      </section>
      <Footer />
    </>
  );
}
