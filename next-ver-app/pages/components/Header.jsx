import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  //navbar menuItems are defined (Array of objects)
  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "About us",
      url: "/about",
    },
  ];
  return (
    <header
      className={`w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-10 trasition ease-in-out duration-500`}
    >
      <div className="max-w-7xl mx-auto ">
        <div
          className={`flex max-w-screen-xl py-10 mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-indigo-400 pr-8"
          >
            NextPortfolio
          </Link>

          <nav>
            <ul className="flex items-center justify-start">
              {menuItems.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
