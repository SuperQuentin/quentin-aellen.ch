import notion, { getPageMetaData } from "./notion";

import { NotionToMarkdown } from "notion-to-md";
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getBlogArticles() {
  const posts = await notion.databases.query({
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

  const allArticles = posts.results;

  return allArticles.map((article) => {
    return getPageMetaData(article);
  });
}

export async function getBlogArticle(slug: string) {
  const posts = await notion.databases.query({
    database_id: `${process.env.NOTION_BLOG_DATABASE_ID}`,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const page = posts.results[0];
  const metadata = getPageMetaData(page);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return {
    metadata,
    markdown: mdString,
  };
}
