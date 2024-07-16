
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import React from "react";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Termos de Serviço
        </h1>
        <p className="mb-4">
          Ao acessar e utilizar o site da JD Comedouros, você concorda em
          cumprir e ser legalmente obrigado pelos termos e condições descritos
          abaixo. Se você não concordar com esses termos, por favor, não utilize
          o site.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Alterações nos Termos
        </h2>
        <p className="mb-4">
          A JD Comedouros se reserva o direito de modificar estes termos a
          qualquer momento. As alterações entrarão em vigor imediatamente após a
          publicação no site. Recomendamos que você revise regularmente os
          termos para estar ciente de quaisquer mudanças.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Uso do Site
        </h2>
        <p className="mb-4">
          Você concorda em usar o site apenas para fins legais e de acordo com
          os termos estabelecidos. Você não pode usar o site de maneira que
          possa danificar, desabilitar, sobrecarregar ou prejudicar o
          funcionamento do site ou interferir no uso de qualquer outra parte.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Propriedade Intelectual
        </h2>
        <p className="mb-4">
          Todo o conteúdo, incluindo, mas não limitado a, texto, gráficos,
          logotipos, ícones, imagens, clipes de áudio, downloads digitais e
          software, é propriedade da JD Comedouros e está protegido por leis de
          direitos autorais.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Limitação de Responsabilidade
        </h2>
        <p className="mb-4">
          A JD Comedouros não será responsável por quaisquer danos diretos,
          indiretos, incidentais, consequenciais ou punitivos resultantes do uso
          ou incapacidade de usar este site.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Indenização
        </h2>
        <p className="mb-4">
          Você concorda em indenizar e isentar a JD Comedouros, seus diretores,
          funcionários e afiliados de qualquer reivindicação ou demanda,
          incluindo honorários advocatícios, feita por qualquer terceiro devido
          ou decorrente de seu uso do site.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Legislação Aplicável
        </h2>
        <p className="mb-4">
          Estes termos são regidos e interpretados de acordo com as leis do
          Brasil. Você concorda em se submeter à jurisdição exclusiva dos
          tribunais localizados no Brasil para resolver quaisquer disputas
          decorrentes destes termos.
        </p>
      </div>
      <Footer />
    </>
  );
}
