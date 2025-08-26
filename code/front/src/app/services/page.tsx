import Projects from "../components/Projects";
import { CheckCircle, Star, Zap, ArrowRight } from "lucide-react";

// src/app/services/page.tsx
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section - ATENÇÃO */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
            Seu Negócio Merece um Site que Vende por Você
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Transforme visitantes em clientes com sites de alta conversão
            desenvolvidos por um especialista em qualidade e performance
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <div className="flex items-center justify-center">
              <Star
                className="text-yellow-400 mr-2"
                fill="currentColor"
                size={20}
              />
              <span className="text-sm">+50 Projetos Entregues</span>
            </div>
            <div className="flex items-center justify-center">
              <Zap className="text-green-400 mr-2" size={20} />
              <span className="text-sm">Sites que Carregam em Menos de 2s</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="text-blue-400 mr-2" size={20} />
              <span className="text-sm">Garantia de 30 Dias</span>
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            Solicitar Orçamento Grátis
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Social Proof - INTERESSE */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Porque Empresas Escolhem Meus Serviços
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Não é apenas sobre criar sites bonitos, é sobre construir
            ferramentas que geram resultados reais para o seu negócio
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-800 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3">Conversão Otimizada</h3>
              <p className="text-gray-300">
                Estratégias comprovadas para transformar visitantes em clientes,
                com taxas de conversão acima da média do mercado
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3">Performance de Elite</h3>
              <p className="text-gray-300">
                Sites ultrarrápidos que melhoram o SEO e reduzem a taxa de
                rejeição, carregando em menos de 2 segundos
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3">Suporte Contínuo</h3>
              <p className="text-gray-300">
                Não te abandono após a entrega. Suporte técnico e orientação
                para maximizar seus resultados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESEJO - Serviços com foco em benefícios */}
      <section className="py-16 px-4 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Serviços que Impulsionam Seu Negócio
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Escolha a solução perfeita para suas necessidades e orçamento
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-900 p-8 rounded-xl relative">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-bl-lg rounded-tr-xl">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">
                Site Institucional Premium
              </h3>
              <p className="text-gray-300 mb-6">
                Presença digital profissional que converte visitantes em leads
                qualificados
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Design responsivo e moderno
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Otimizado para mecanismos de busca
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Integração com redes sociais
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Formulário de contato inteligente
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Painel administrativo fácil de usar
                </li>
              </ul>
              <div className="text-3xl font-bold mb-4">R$ 1.997</div>
              <div className="text-gray-400 text-sm mb-6">ou 6x de R$ 349</div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Quero Este Plano
              </button>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border-2 border-green-500 transform scale-105">
              <h3 className="text-2xl font-bold mb-4 text-green-300">
                E-commerce Completo
              </h3>
              <p className="text-gray-300 mb-6">
                Loja virtual completa para vender produtos e serviços 24/7
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Catálogo de produtos ilimitado
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Carrinho de compras e checkout
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Integração com gateways de pagamento
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Sistema de gestão de pedidos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Relatórios de vendas e analytics
                </li>
              </ul>
              <div className="text-3xl font-bold mb-4">R$ 3.497</div>
              <div className="text-gray-400 text-sm mb-6">ou 12x de R$ 319</div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Quero Este Plano
              </button>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-green-300">
                Solução Personalizada
              </h3>
              <p className="text-gray-300 mb-6">
                Desenvolvimento sob medida para necessidades específicas do seu
                negócio
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Análise detalhada do seu negócio
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Desenvolvimento de funcionalidades exclusivas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Integrações com APIs e sistemas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Treinamento da equipe
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                  Suporte técnico prioritário
                </li>
              </ul>
              <div className="text-3xl font-bold mb-4">Sob Consulta</div>
              <div className="text-gray-400 text-sm mb-6">
                Orçamento personalizado
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos - PROVAS SOCIAIS */}
      <Projects />

      {/* AÇÃO - Call to Action Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar sua Presença Digital?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Agende uma consultoria gratuita de 30 minutos e descubra como posso
            ajudar seu negócio a alcançar mais clientes através de um site de
            alta performance
          </p>

          <div className="bg-zinc-800 p-8 rounded-xl mb-10">
            <h3 className="text-2xl font-bold mb-4">
              O que você recebe na consultoria:
            </h3>
            <ul className="text-gray-300 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                Análise do seu site atual (se tiver)
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                Estratégia personalizada para seu negócio
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                Projeção de prazos e investimento
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />{" "}
                Resposta para todas suas dúvidas
              </li>
            </ul>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Agendar Consultoria Gratuita
          </button>

          <p className="text-gray-400 text-sm mt-6">
            Sem compromisso • Sem complicação • 100% Gratuito
          </p>
        </div>
      </section>
    </div>
  );
}
