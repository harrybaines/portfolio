import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import { Button } from "./ui/button";
import ProfileImg from "/public/assets/me.jpg";

export default function Header() {
  return (
    <div className="mt-8">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src={ProfileImg} alt="harrybaines" width={30} height={30} className="rounded-full" />
            <h1 className="text-lg font-semibold">
              Harry Baines
            </h1>
          </Link>

          {/* desktop nav & hire me button */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <a href="https://www.cal.com/harrybaines/">
              <Button size={'sm'}>Book a call</Button>
            </a>
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};