import Link from "next/link";

export const Footer = () => {
  return (
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
        <p className="text-xs">
          &copy; 2024 JD Comedouros. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/terms-service"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Termos de Uso
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Política de Privacidade
          </Link>
        </nav>
      </footer>
  );
};
