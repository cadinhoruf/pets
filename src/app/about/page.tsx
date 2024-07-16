import Image from "next/image";
import dog from "../../assets/dog.png";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function About() {
  return (
    <main className="flex-1">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Sobre a Empresa de Comedouros
              </div>
              <h1 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Sobre Nós
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Gostaríamos de lhe apresentar a JD Pets, uma renomada empresa
                produtora de comedouros de alumínio, especializada em fornecer
                soluções duráveis e inovadoras para o setor de alimentação de
                animais. Há mais de 3 anos no mercado, temos orgulho de oferecer
                uma ampla gama de comedouros de alta qualidade, fabricados com
                os melhores materiais e tecnologias disponíveis.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={dog}
              alt="JD Comedouros"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-baseline">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl">
                Nossa História
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A JD Comedouros foi fundada em 2010 por dois amigos, John e
                David, que compartilhavam uma paixão por criar produtos
                divertidos e inovadores para animais de estimação. Eles
                começaram com um pequeno negócio de venda de comedouros
                personalizados e, com o tempo, expandiram para oferecer uma
                ampla gama de acessórios e brinquedos para pets.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl">
                Nossa Missão
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                No JD Comedouros, nossa missão é trazer alegria e diversão para
                a vida dos animais de estimação e seus donos. Acreditamos que os
                comedouros podem melhorar a qualidade de vida dos pets,
                estimulando sua atividade física e mental. Nos esforçamos para
                criar produtos inovadores e de alta qualidade que promovam o
                bem-estar. Estamos confiantes de que nossa linha de comedouros
                de alumínio pode agregar valor à sua empresa e atender às
                necessidades de seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl">
                Nossos Valores Fundamentais
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossos comedouros são projetados para atender às necessidades
                específicas de seus animais de estimação, garantindo uma
                experiência de alimentação segura, eficiente e confortável.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-baseline space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl">
                Nossa Equipe
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trabalhamos incansavelmente para desenvolver produtos inovadores
                que tragam diversão e alegria para os pets e seus donos. Somos
                um time diversificado, unido pela nossa paixão em melhorar a
                vida dos animais de estimação.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
