import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 lg:mb-20">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Comedouros de Qualidade para seu Melhor Amigo
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Na JD Comedouros, nós nos dedicamos a criar comedouros duráveis,
                práticos e elegantes para o seu pet. Nossos produtos são
                projetados com amor e atenção aos detalhes para garantir a saúde
                e o bem-estar do seu pet.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[500px]:flex-row">
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
        </div>
      </div>
    </section>
  );
};
