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
        <a className="flex flex-col flex-1 col-span-3 p-8 transition bg-white shadow-2xl rounded-3xl hover:cursor-pointer" href={href}>
            <div className="relative h-full">
                <Image className="absolute" src={imageSrc ?? "https://source.unsplash.com/_KsnSQoKhUQ"} layout="fill" objectFit="cover" />
            </div>

            {children}

        </a>
    )
}
