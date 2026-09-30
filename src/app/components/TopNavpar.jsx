"use client";
import Link from "next/link";
import Icons from "./Icons";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
export default function TopNavpar() {
  const search = useRef();
  const rouret = useRouter();
  const searchItem = () => {
    const searched = search.current.value;
    rouret(`/recipes/searched/${searched}`);
  };
  return (
    <nav className="bg-white w-full h-15 flex justify-between gap-2 items-center text-[#253D4E] p-4">
      <Link href="/">
        <Image src="/logo1.png" width={86} height={26} alt="logo" />
      </Link>
      <div className="max-w-60 flex h-8">
        <input
          placeholder="Saerch for recipes..."
          className="bg-[#F3F3F3] p-3 text-[#253D4E] flex-0 rounded-l-xl"
          ref={search}
        />
        <button
          onClick={() => {
            searchItem();
          }}
          className="bg-[#509E2F] flex justify-center items-center w-30 text-white rounded-r-xl"
        >
          <Icons name="search" color="white" />
        </button>
      </div>
      <div>
        <Link
          href="/recipes"
          className="flex justify-center items-center me-2.5 hover:text-[#509E2F]"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}
