import Image, { ImageProps } from "next/image";
import Link from "next/link";

export type LogoProps = {
  url: string;
} & ImageProps;

export const Logo = (props: LogoProps) => {
  return (
    <Link href={props.url}>
      <a
        target="_blank"
        className="p-3 transition bg-white shadow-xl rounded-xl hover:scale-105"
      >
        <Image
          className=""
          width="128"
          height="128"
          objectFit="scale-down"
          alt={props.alt ?? "beautiful tool icon"}
          {...props}
        />
      </a>
    </Link>
  );
};
