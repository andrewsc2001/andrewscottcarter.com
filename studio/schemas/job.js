export default {
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Job Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "href",
      title: "Link",
      type: "url",
    },
    {
      name: "startedAt",
      title: "Started On",
      type: "datetime",
    },
    {
      name: "finishedOn",
      title: "Finished On",
      type: "datetime",
    },
  ],
};
