"use client";
import { Pagination } from "@/components/ui/pagination";
import { Link } from "lucide-react";
import { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />

      <main className="container mx-auto py-8 px-4 md:px-6">
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Comedouros Pesados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6">
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Grande"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Grande
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade para pets de grande porte.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Grande"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Grande
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade para pets de grande porte.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Grande"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Grande
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade para pets de grande porte.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Comedouros Pequenos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6">
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Pequeno"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Pequeno
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade para pets de pequeno porte.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Pequeno"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Pequeno
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade para pets de pequeno porte.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Pequeno"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Pequeno
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade para pets de pequeno porte.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Comedouros Antiformiga
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6">
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Antiformiga"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Antiformiga
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade com proteção antiformiga.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Antiformiga"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Antiformiga
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade com proteção antiformiga.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img
                      src="/placeholder.svg"
                      alt="Comedouro Antiformiga"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        Comedouro Antiformiga
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        Comedouro de alta qualidade com proteção antiformiga.
                      </p>
                      <Button className="mt-4" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
