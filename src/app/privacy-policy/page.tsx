import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Política de Privacidade
        </h1>
        <p className="mb-4">
          A JD Comedouros coleta informações pessoais que você fornece
          diretamente, como nome, endereço de e-mail, endereço postal, número de
          telefone e informações de pagamento. Também coletamos informações
          automaticamente, como endereço IP, tipo de navegador e páginas
          acessadas em nosso site.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Uso das Informações
        </h2>
        <p className="mb-4">
          As informações coletadas são usadas para fornecer e melhorar nossos
          serviços, processar transações, enviar comunicações, melhorar a
          segurança do site e cumprir obrigações legais.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Compartilhamento de Informações
        </h2>
        <p className="mb-4">
          A JD Comedouros não vende, aluga ou compartilha suas informações
          pessoais com terceiros, exceto conforme necessário para fornecer
          nossos serviços, cumprir obrigações legais ou proteger nossos
          direitos.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Segurança das Informações
        </h2>
        <p className="mb-4">
          Tomamos medidas razoáveis para proteger suas informações pessoais
          contra acesso, uso ou divulgação não autorizados. No entanto, nenhuma
          transmissão de dados pela internet ou método de armazenamento
          eletrônico é 100% seguro.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Cookies
        </h2>
        <p className="mb-4">
          Usamos cookies para melhorar a experiência do usuário, analisar o
          tráfego do site e personalizar o conteúdo. Você pode configurar seu
          navegador para recusar cookies, mas isso pode limitar algumas
          funcionalidades do site.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Direitos dos Usuários
        </h2>
        <p className="mb-4">
          Você tem o direito de acessar, corrigir ou excluir suas informações
          pessoais. Para exercer esses direitos, entre em contato conosco
          através das informações fornecidas abaixo.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Contato
        </h2>
        <p className="mb-4">
          Se você tiver alguma dúvida sobre esta política de privacidade, entre
          em contato conosco através do e-mail: contato@jdcomedouros.com.br.
        </p>
        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">
          Alterações na Política de Privacidade
        </h2>
        <p className="mb-4">
          Podemos atualizar esta política de privacidade periodicamente.
          Quaisquer mudanças serão publicadas nesta página, e a data da última
          atualização será revisada na parte superior desta política.
        </p>
      </div>
      <Footer />
    </>
  );
}
