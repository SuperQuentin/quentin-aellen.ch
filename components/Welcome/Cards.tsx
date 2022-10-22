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
    imageSrc?: string;
    gradientOrientation?: GradientOrientation;
}

export const Card = (props: CardProps) => {

    const { children, href, imageSrc, gradientOrientation } = props;

    return (
        <a className="relative z-0 flex-1 p-8 transition shadow-2xl group rounded-3xl hover:scale-95 active:scale-90 hover:-rotate-2 hover:cursor-pointer" href={href}>
            <div className="absolute inset-0 -z-20 rounded-3xl">
                <div className={clsx("absolute inset-0 transition -z-20 from-transparent via-transparent to-black group-hover:to-orange-500 opacity-60 rounded-3xl", gradientOrientation?.toString() ?? GradientOrientation.Down.toString())}></div>
                <Image className="rounded-3xl -z-30" src={imageSrc ?? "https://source.unsplash.com/_KsnSQoKhUQ"} layout="fill" objectFit="cover" />
            </div>

            {children}

        </a>
    )
}
