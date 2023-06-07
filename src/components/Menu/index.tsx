"use client";
import React, { useState } from "react";

import { Logo } from "@/components/Logo";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserCircle2Icon,
  AlignLeftIcon,
  XIcon,
  ChevronDownIcon,
} from "lucide-react";
import { Button } from "../Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuProps {
  userName?: string;
}

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <menu
      data-testid="menu"
      className="flex justify-between items-center gap-8 relative p-2"
    >
      <div className="flex gap-[4.0rem] items-center">
        <AlignLeftIcon
          aria-label="Open Menu"
          className="hidden md:block w-[2.4rem] h-[2.4rem] text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Logo variant="white" size="normal" hideOnMobile data-testid="logo" />
        </div>

        <ul className="flex gap-[4.0rem] items-center text-base font-medium text-white md:hidden">
          <li>
            <Link
              href=""
              className="relative no-underline after:absolute hover:after:content-[''] hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary hover:after:animate-menuLinkAnimation"
            >
              Home
            </Link>
          </li>
          <li className="relative no-underline after:absolute hover:after:content-[''] hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary hover:after:animate-menuLinkAnimation">
            <Link href="">Explore</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-[3.0rem] items-center md:gap-[2.0rem]">
        <SearchIcon
          aria-label="Search"
          className="w-[2.4rem] h-[2.4rem] text-white cursor-pointer"
        />
        <ShoppingCartIcon
          aria-label="Open Shopping Cart"
          className="w-[2.4rem] h-[2.4rem] text-white cursor-pointer"
        />

        {!!userName ? (
          <div className="flex items-center md:hidden" data-testid="userArea">
            <UserCircle2Icon
              className="w-[2.4rem] h-[2.4rem] text-white cursor-pointer mr-[1.4rem]"
              aria-label="User Avatar"
            />
            <p className="text-white text-base font-medium capitalize">
              {userName}
            </p>
            <ChevronDownIcon
              className="w-[2.4rem] h-[2.4rem] text-gray cursor-pointer ml-[0.9rem]"
              aria-label="Open Dropdown Menu"
            />
          </div>
        ) : (
          <Button
            size="medium"
            className="md:hidden"
            role="button"
            aria-label="Sign In Button"
          >
            Sign In
          </Button>
        )}
      </div>
      <nav
        aria-hidden={!isOpen}
        role="navigation"
        className={cn(
          "hidden md:flex flex-col justify-between absolute top-0 left-0 bottom-0 right-0 h-screen bg-white py-[3.85rem] px-[3.05rem] opacity-0 overflow-hidden pointer-events-none transition-opacity duration-300 ease-in-out",
          {
            "opacity-1": isOpen,
            "pointer-events-auto": isOpen,
          }
        )}
      >
        <XIcon
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="w-[1.8rem] h-[1.8rem] text-black cursor-pointer self-end"
        />

        <ul className="flex flex-col gap-[4.0rem] items-center text-lg font-medium text-black">
          <li className="">
            <Link
              href=""
              className={cn(
                "relative no-underline text-center after:absolute hover:after:content-[''] hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary hover:after:animate-menuLinkAnimation"
              )}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href=""
              className={cn(
                "relative no-underline text-center after:absolute hover:after:content-[''] hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary hover:after:animate-menuLinkAnimation"
              )}
            >
              Explore
            </Link>
          </li>
          {!!userName && (
            <>
              <li className="">
                <Link
                  href=""
                  className={cn(
                    "relative no-underline text-center after:absolute hover:after:content-[''] hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary hover:after:animate-menuLinkAnimation"
                  )}
                >
                  My account
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className={cn(
                    "relative no-underline text-center after:absolute hover:after:content-[''] hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary hover:after:animate-menuLinkAnimation"
                  )}
                >
                  Wishlist
                </Link>
              </li>
            </>
          )}
        </ul>

        {!userName ? (
          <div
            className="flex flex-col items-center gap-[12px]"
            data-testid="registerBox"
          >
            <Button size="large" fullWidth>
              Log in now
            </Button>
            <span className="font-medium text-xs">or</span>
            <Link
              href=""
              className="text-primary font-medium text-base border-b-[0.2rem] border-primary w-fit"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div />
        )}
      </nav>
    </menu>
  );
};

export { Menu };
