import { Children, ReactElement } from "react";

import Image from 'next/image';

import clsx from 'clsx';

export enum GradientOrientation {
    Up = "bg-gradient-to-t",
    Down = "bg-gradient-to-b",
    Left = "bg-gradient-to-l",
    Right = "bg-gradient-to-r"
}

interface CardProps {
    children: ReactElement;
    href: string;
    title: string;
    imageSrc?: string;
    gradientOrientation?: GradientOrientation;
}

export const Card = (props: CardProps) => {

    const { children, href, title, imageSrc, gradientOrientation } = props;

    return (
        <a className="flex flex-col flex-1 col-span-4 transition bg-white shadow-2xl rounded-3xl hover:cursor-pointer" href={href} title={title}>
            <div className="relative h-40">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <Image className="absolute rounded-t-3xl" src={imageSrc ?? "https://source.unsplash.com/_KsnSQoKhUQ"} layout="fill" objectFit="cover" />
            </div>

            <div className="relative z-0 px-5 pt-3 pb-6 space-y-2">
                <div className="absolute inset-0 z-10 rounded-b-3xl bg-gradient-to-t from-white to-transparent"></div>
                <h2 className="text-2xl font-bold truncate">{title}</h2>
                <div className="h-16 overflow-hidden md:h-36 ">
                    {children}
                </div>
            </div>
        </a>
    )
}
