import Image, { ImageProps } from "next/image";

export type LogoProps = ImageProps;

export const Logo = (props: LogoProps) => {
  return (
    <div className="p-3 transition bg-white shadow-xl rounded-xl hover:scale-105">
      <Image
        className=""
        width="128"
        height="128"
        objectFit="scale-down"
        alt={props.alt ?? "beautiful tool icon"}
        {...props}
      />
    </div>
  );
};
