import notion, { getPageMetaData } from "./notion";

export async function getBlogArticles() {
  const post = await notion.databases.query({
    database_id: `${process.env.NOTION_BLOG_DATABASE_ID}`,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const allArticles = post.results;

  return allArticles.map((article) => {
    return getPageMetaData(article);
  });
}
