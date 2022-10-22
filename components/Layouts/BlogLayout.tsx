import React, { ReactElement } from "react"
import Head from 'next/head'
import Image from "next/image"

export const BlogLayout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Head>
                <title>Quentin Aellen</title>
                <meta name="description" content="Quentin Aellen portfolio blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen space-y-4 bg-blue-300">
                <div className="relative z-0 h-48 md:mb-12 md:h-96">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <Image className="absolute rounded-t-3xl -z-20" src={"https://source.unsplash.com/_KsnSQoKhUQ"} layout="fill" objectFit="cover" />

                    <div className="flex flex-col-reverse h-full px-4 py-6 mx-auto max-w-7xl">
                        <h1 className="text-6xl font-bold text-white">Blog</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-4 mx-auto md:grid-rows-2 md:grid md:grid-cols-12 max-w-7xl">
                    {children}
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}   