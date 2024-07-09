"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "about",
  //   path: "/about",
  // },
  // {
  //   name: "work",
  //   path: "/work",
  // },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${link.path === pathname &&
              "border-b-2 dark:text-accent dark:border-accent"
              } capitalize font-medium dark:hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
