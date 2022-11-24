import React, { ReactElement } from "react";
import { MeLayout } from "../../components/Layouts/MeLayout";
import { NextPageWithLayout } from "../_app";

const Me: NextPageWithLayout = () => {
    return (
        <div className="flex flex-col px-4 mx-auto max-w-7xl">
            <section className="h-screen bg-gray-500"></section>
        </div>
    )
}

Me.getLayout = function getLayout(page: ReactElement) {
    return (
        <MeLayout>{page}</MeLayout>
    )
}

export default Me;

