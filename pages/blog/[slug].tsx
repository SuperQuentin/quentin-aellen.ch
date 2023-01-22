import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { BlogLayout } from "../../components/Layouts/BlogLayout";
import { getBlogArticle, getBlogArticles } from "../../lib/blog/articles";
import { NextPageWithLayout } from "../_app";

const BlogArticle: NextPageWithLayout = (props: any) => {
  return (
    <div className="col-span-12">
      <article className="prose lg:prose-xl">
        <ReactMarkdown>{props.article.markdown}</ReactMarkdown>
      </article>
    </div>
  );
};

BlogArticle.getLayout = function getLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

export const getStaticProps = async ({ params }: any) => {
  const article = await getBlogArticle(params.slug);

  return {
    props: {
      article: article,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const articles = await getBlogArticles();
  const paths = articles.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default BlogArticle;
