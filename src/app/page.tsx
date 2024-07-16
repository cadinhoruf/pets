import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import Link from "next/link";
import Image from "next/image";
import comedouros from "../assets/comedouros.png";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-5 text-primary">
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
              <Image
                width="550"
                height="310"
                src={comedouros}
                alt="Comedouros"
                className="bg-transparent"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Materiais Duráveis</h3>
                      <p className="text-muted-foreground">
                        Feitos com alumínio, material de alta qualidade,
                        garantindo longa vida útil.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Design Elegante</h3>
                      <p className="text-muted-foreground">
                        Projetados para combinar com qualquer decoração.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Fácil Limpeza</h3>
                      <p className="text-muted-foreground">
                        Fáceis de limpar, mantendo seu pet saudável e feliz.
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
                perfeito para o seu pet.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Conferir
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6 items-center justify-center">
            <div className="grid items-center justify-center gap-4 text-center md:grid-cols-2 lg:gap-12">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Onde estamos localizados
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ficamos localizados em Campinas - SP
                </p>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Rua dos bobos, 10
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
