export default {
  name: "branchBlog",
  title: "Branch Blog Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
      validation: Rule => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "branch",
      title: "Branch",
      type: "reference",
      to: [{ type: "branch" }],
      validation: Rule => Rule.required(),
    },

    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary shown on the blog list",
    },

    {
      name: "content",
      title: "Post Content",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],

  orderings: [
    {
      title: "Newest First",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};