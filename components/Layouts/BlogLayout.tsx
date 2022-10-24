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

                    <div className="relative flex flex-col-reverse h-full px-4 py-6 mx-auto max-w-7xl">
                        <a className="absolute p-1 text-white transition hover:bg-white hover:text-black rounded-xl -left-12" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </a>
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