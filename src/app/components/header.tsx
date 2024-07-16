import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm  text-primary-foreground">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image src="/jd-logo.svg" alt="JD Comedouros" width={70} height={70} />
        <span className="sr-only">JD Comedouros</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/about"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-800 "
          prefetch={false}
        >
          Sobre
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-800 "
          prefetch={false}
        >
          Produtos
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-800 "
          prefetch={false}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};
