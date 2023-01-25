import { Client, LogLevel } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
});

export function getPageMetaData(post: any) {
  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return {
        ...tag,
        color: getColor(tag.color),
      };
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    cover: post.cover.external?.url ?? post.cover.file?.url,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: post.last_edited_time,
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
}

export function getColor(color: string) {
  switch (color) {
    case "pink":
      color = "#f30b9e";
      break;
    case "green":
      color = "#0bf31b";
      break;
    case "red":
      color = "#f30b0b";
      break;
    default:
      color = "#F39d0b";
  }

  return color;
}

export default notion;
