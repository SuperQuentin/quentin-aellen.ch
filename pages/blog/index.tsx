import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../components/Layouts/BlogLayout";
import { Card } from "../../components/Blog/Card";

const Blog: NextPageWithLayout = () => {
    return (
        <Card href="#">
            <div>test</div>
        </Card>
    )
}

Blog.getLayout = function getLayout(page: ReactElement) {
    return (
        <BlogLayout>{page}</BlogLayout>
    )
}

export default Blog;