import React, { ReactElement } from "react"
import Head from 'next/head'

export const BlogLayout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Head>
                <title>Quentin Aellen</title>
                <meta name="description" content="Quentin Aellen portfolio blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen bg-blue-300">
                <div className="grid grid-cols-12 grid-rows-2 mx-auto max-w-7xl">
                    {children}
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}   