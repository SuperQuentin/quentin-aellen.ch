import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../components/Layouts/BlogLayout";
import { Card } from "../../components/Blog/Card";

const Blog: NextPageWithLayout = () => {
    return (
        <>
            <Card href="#" title="l'article du futur t'as vu c'est trop bien voilà c'est tous pour mois">
                <div></div>
            </Card>

            <Card href="#" title="l'article du futur">
                <div>test</div>
            </Card>

            <Card href="#" title="l'article du futur">
                <div>test</div>
            </Card>
        </>
    )
}

Blog.getLayout = function getLayout(page: ReactElement) {
    return (
        <BlogLayout>{page}</BlogLayout>
    )
}

export default Blog;