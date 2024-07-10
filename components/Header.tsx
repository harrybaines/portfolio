import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-lg font-semibold">
            harrybaines
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="https://www.cal.com/harrybaines/">
            <Button>Book a call</Button>
          </a>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
