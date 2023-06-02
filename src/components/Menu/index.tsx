import React from "react";

import { Logo } from "@/components/Logo";
import { Search, ShoppingCart, UserCircle2, AlignLeft } from "lucide-react";
import { Button } from "../Button";
import Link from "next/link";

const Menu = () => {
  const login = false;

  return (
    <menu className="flex justify-between items-center gap-8 relative p-2">
      <div className="flex gap-[40px] items-center">
        <div className="hidden md:block w-[24px] h-[24px] text-white cursor-pointer">
          <AlignLeft />
        </div>
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Logo variant="white" size="normal" hideOnMobile />
        </div>

        <ul className="flex gap-[40px] items-center text-base font-medium text-white md:hidden">
          <li className="border-b-[3px] border-b-primary pb-[3px]">
            <Link href="">Home</Link>
          </li>
          <li className="border-b-[3px] border-b-primary pb-[3px]">
            <Link href="">Explore</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-[30px] items-center md:gap-[20px]">
        <div className="w-[24px] h-[24px] text-white cursor-pointer">
          <Search />
        </div>
        <div className="w-[24px] h-[24px] text-white cursor-pointer">
          <ShoppingCart />
        </div>

        {login ? (
          <div className="flex gap-[15px] items-center md:hidden">
            <div className="w-[24px] h-[24px] text-white cursor-pointer">
              <UserCircle2 />
            </div>
            <p className="text-white">Renato</p>
          </div>
        ) : (
          <Button size="medium" className="md:hidden">
            Sign In
          </Button>
        )}
      </div>
    </menu>
  );
};

export { Menu };
