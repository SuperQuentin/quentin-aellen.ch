import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../components/Layouts/BlogLayout";
import { Card } from "../../components/Blog/Card";
import { getBlogArticles } from "../../lib/blog/articles";

const Blog: NextPageWithLayout = ({ articles }: any) => {
  return (
    <>
      {articles ? (
        articles.map((article: any) => {
          return (
            <Card
              key={article.id}
              href={"/blog/" + article.slug}
              title={article.title}
              tags={article.tags}
              imageSrc={article.cover}
            >
              <div>{article.description}</div>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getBlogArticles();

  return {
    props: {
      articles: data,
    },
    revalidate: 60,
  };
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default Blog;
