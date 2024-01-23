import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div
      className="relative w-full max-w-[600px] max-lg:hidden
    "
    >
      <div
        className="background-light800_darkgradient
      relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4"
      >
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Seach globally"
          className="placeholder
          background-light800_dark300 border-none shadow-none outline-none text-dark300_light700"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;