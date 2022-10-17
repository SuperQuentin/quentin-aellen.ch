import React, { ReactElement } from "react"
import Head from 'next/head'

export const WelcomeLayout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Head>
                <title>Quentin Aellen</title>
                <meta name="description" content="Quentin Aellen portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-blue-300">
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}