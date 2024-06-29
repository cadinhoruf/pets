/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZjPUGFtxMcQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm  text-primary-foreground">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src="/jd-logo.svg"
            alt="JD Comedouros"
            width={70}
            height={70}
          />
          <span className="sr-only">JD Comedouros</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 lg:mb-20">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Comedouros de Qualidade para seu Melhor Amigo
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Na JD Comedouros, nós nos dedicamos a criar comedouros
                    duráveis, práticos e elegantes para o seu cão. Nossos
                    produtos são projetados com amor e atenção aos detalhes para
                    garantir a saúde e o bem-estar do seu pet.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-800 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                    prefetch={false}
                  >
                    Conheça Nossos Produtos
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sobre a JD Comedouros
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="400"
                  height="400"
                  alt="Cachorro 2D"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://generated.vusercontent.net/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Produto 3D"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                  <img
                    src="https://generated.vusercontent.net/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Produto 3D"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Comedouros Feitos com Amor
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossos comedouros são projetados com atenção aos detalhes para
                  garantir a segurança e o conforto do seu cão. Feitos com
                  materiais de alta qualidade, eles são duráveis e fáceis de
                  limpar.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="550"
                height="310"
                alt="Produto"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Materiais Duráveis</h3>
                      <p className="text-muted-foreground">
                        Nossos comedouros são feitos com materiais de alta
                        qualidade, garantindo longa vida útil.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Design Elegante</h3>
                      <p className="text-muted-foreground">
                        Nossos comedouros são projetados para combinar com
                        qualquer decoração.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Fácil Limpeza</h3>
                      <p className="text-muted-foreground">
                        Nossos comedouros são fáceis de limpar, mantendo seu pet
                        saudável e feliz.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Conheça Nossos Comedouros
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore nossa linha de comedouros de alta qualidade e encontre o
                perfeito para o seu cão.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Compre Agora
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
        <p className="text-xs">
          &copy; 2024 JD Comedouros. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Termos de Uso
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
