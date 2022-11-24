import React, { ReactElement, useEffect, useState } from "react"
import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"

export const MeLayout = ({ children }: { children: ReactElement }) => {

    return (
        <>
            <Head>
                <title>Quentin Aellen</title>
                <meta name="description" content="Quentin Aellen portfolio page about myself" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen bg-blue-300">
                <section className="w-full h-screen">
                    <div className="relative z-0 w-full h-full">
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <Image className="absolute -z-20" alt="cat" src="/images/cat.jpg" layout="fill" objectFit="cover" />
                        <div className="h-full mx-auto text-white max-w-7xl">
                            <div className="flex items-center justify-between h-full">
                                <div>
                                    <h1 className="max-w-xl text-3xl font-bold">Quentin Aellen</h1>
                                </div>
                                <div>
                                    <div>blablabla lorem ipsum</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}   