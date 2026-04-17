import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-4 items-center cursor-pointer">
      <Image
        width={40}
        height={40}
        src="/images/logo-transparent.svg"
        alt="Nepal Hemp Collective logo"
        className="object-cover scale-300 opacity-80 group-hover:opacity-100 transition round-sm"
      />

      <div className="uppercase">
        <p className="text-secondary tracking-wider font-serif">Nepal Hemp</p>
        <p className="text-secondary text-[12px] tracking-widest font-serif">
          Collective
        </p>
      </div>
    </Link>
  );
};

export default Logo;
