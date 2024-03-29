import React, { ReactElement } from "react";
import { MeLayout } from "../../components/Layouts/MeLayout";
import { Logo } from "../../components/Me/Logo";
import { NextPageWithLayout } from "../_app";

import css from "../../public/images/tools/CSS_3.svg";

import toolsLogo from "../../assets/images/tools.json";

const Me: NextPageWithLayout = () => {
  return (
    <>
      <section className="flex flex-col-reverse px-4 mx-auto space-y-4 space-y-reverse max-w-7xl md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1 h-full px-8 py-6 rounded-3xl bg-neutral-100">
          <h2 className="pb-2 text-xl font-bold capitalize">Tools</h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 ">
            {toolsLogo.map(({ name, alt, path, url }) => {
              return <Logo key={name} alt={alt} src={path} url={url} />;
            })}
          </div>
        </div>
        <div className="h-full px-8 py-6 md:w-4/12 rounded-3xl bg-neutral-100">
          <h2 className="text-xl font-bold capitalize">Intérêt</h2>
        </div>
      </section>
      <section className="flex flex-col px-4 mx-auto space-y-4 max-w-7xl md:flex-row md:space-x-8 md:space-y-0">
        <div className="h-full px-8 py-6 rounded-3xl bg-neutral-100">
          <h2 className="mb-4 text-xl font-bold capitalize">Dernier projets</h2>

          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="px-8 py-4 bg-green-500 rounded-2xl aspect-video md:aspect-[3/4]">
              Card content
            </div>
            <div className="px-8 py-4 bg-green-500 rounded-2xl aspect-video md:aspect-[3/4]">
              Card content
            </div>
            <div className="px-8 py-4 bg-green-500 rounded-2xl aspect-video md:aspect-[3/4]">
              Card content
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Me.getLayout = function getLayout(page: ReactElement) {
  return <MeLayout>{page}</MeLayout>;
};

export default Me;
