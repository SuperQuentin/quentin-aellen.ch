import React, { ReactElement, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const BlogLayout = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Head>
        <title>Quentin Aellen</title>
        <meta name="description" content="Quentin Aellen portfolio blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen space-y-4 bg-orange-100">
        <div className="relative z-0 h-48 md:mb-12 md:h-96">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black -z-30"></div>

          {loading ? (
            <Image
              className="absolute z-0 rounded-t-3xl animate-pulse"
              src="/images/lazy_blur_big.jpg"
              layout="fill"
              objectFit="cover"
              alt={"lazy cover image"}
            />
          ) : (
            <></>
          )}

          <Image
            className="absolute -z-20"
            src={
              children.props.article?.metadata.cover ??
              "https://source.unsplash.com/_KsnSQoKhUQ"
            }
            layout="fill"
            objectFit="cover"
            alt="Blog banner"
            onLoadingComplete={() => {
              setLoading(false);
            }}
          />

          <div className="relative flex flex-col-reverse h-full px-10 py-6 mx-auto max-w-7xl">
            <div className="flex flex-row-reverse items-end justify-between ">
              <Link
                href={children.props.article ? "/blog/" : "/"}
                title={children.props.article ? "Blog" : "Welcome page"}
              >
                <a className="flex items-center p-1 text-white transition md:space-x-1 h-fit w-fit hover:bg-white hover:text-black rounded-xl">
                  {children.props.article ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                      </svg>

                      <span className="hidden md:block">Back</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      <span className="hidden md:block">Home</span>
                    </>
                  )}
                </a>
              </Link>
              <h1 className="text-2xl font-bold text-white truncate md:text-4xl lg:text-6xl">
                {children.props.article?.metadata.title ?? "Blog"}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-10 mx-auto md:grid-rows-2 md:grid md:grid-cols-12 max-w-7xl">
          {children}
        </div>
      </main>
      <footer></footer>
    </>
  );
};
