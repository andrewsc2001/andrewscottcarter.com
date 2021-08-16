import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = sanityClient({
  projectId: "m18rufg9", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2021-03-25",
  useCdn: false, // `false` if you want to ensure fresh data
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export default client;
