import { GetStaticProps, GetStaticPropsContext } from "next";
import client, { urlFor } from "../client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Mochi.module.css";

type MochiProps = {
  photos: {
    name: string;
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
  }[];
};

export default function Mochi({ photos }: MochiProps) {
  return (
    <>
      <Navbar />
      <section className={styles.catphotos}>
        <h1>Mochi</h1>
        <div className={styles.gallery}>
          {photos.map((photo) => (
            <div>
              <img src={urlFor(photo.image).width(500).url()!} />
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await client.fetch(`*[_type == "cat"]{name, description, image}`);

  return { props: { photos: res } };
};
