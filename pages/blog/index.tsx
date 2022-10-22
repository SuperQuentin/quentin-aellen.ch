import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../components/Layouts/BlogLayout";
import { Card } from "../../components/Blog/Card";

const Blog: NextPageWithLayout = () => {
    return (
        <>
            <Card href="#" title="l'article du futur t'as vu c'est trop bien voilà c'est tous pour mois">
                <div>Fry, you can't just sit here in the dark listening to classical music. Leela, Bender, we're going grave robbing. There's one way and only one way to determine if an animal is intelligent. Dissect its brain!

                    You mean while I'm sleeping in it? Eeeee! Now say "nuclear wessels"! Is today's hectic lifestyle making you tense and impatient? When will that be? And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!</div>
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