import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Navbar = () => {
  return (
    <nav className="flexBetween py-3 relative z-3 shadow">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          className="flex ml-14"
        />
      </Link>

      <ul className="hidden h-full gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer
              pb-0.7 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden mr-12">
        <Button
          type="submit"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
