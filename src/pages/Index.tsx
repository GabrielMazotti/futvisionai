import { Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero / Header Section */}
      <section className="bg-white py-12 text-center">
        <div className="mx-auto max-w-3xl px-6">
          {/* Logo Icon */}
          <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 shadow-lg">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 rounded-lg border-2 border-amber-700/40" />
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-amber-700/30" />
              <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-amber-700/30" />
              <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded border border-amber-700/30" />
              <div className="absolute left-[15%] top-[15%] h-[70%] w-[70%] rotate-45 rounded border border-amber-700/20" />
            </div>
          </div>

          <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            APP LANA COMERCIO DE PRODUTOS ALIMENTICIOS LTDA
          </h1>
          <p className="text-xl font-bold text-gray-900">48.417.954/0001-20</p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900">
            NOSSA MISSÃO:
          </h2>
          <p className="mb-4 text-left font-bold text-gray-900">
            Missão da App Lana Comércio de Produtos Alimentícios LTDA (Milky Moo):
          </p>
          <p className="text-left italic text-gray-900 leading-relaxed">
            "Proporcionar momentos de felicidade e sabor através de produtos alimentícios de alta
            qualidade, oferecendo uma experiência única aos nossos clientes. Buscamos inovar no
            segmento de alimentação, com atendimento personalizado, ingredientes selecionados e um
            compromisso constante com a excelência. Nossa missão é transformar cada visita em uma
            experiência memorável, unindo qualidade, criatividade e paixão pela gastronomia."
          </p>
        </div>
      </section>

      {/* Contato Banner */}
      <section className="py-8" style={{ backgroundColor: "hsl(205, 100%, 15%)" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">CONTATO:</p>
            <p className="font-bold text-white">Telefone: (61) 9282-9084</p>
            <p className="mt-2 font-bold text-white">
              E-mail: alexandrelana565@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Instagram className="h-10 w-10 text-white" />
            <span className="font-bold text-white">INSTAGRAM.</span>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-gray-900">
            QUEM SOMOS?
          </h2>

          <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
            <h3 className="mb-6 text-center text-lg font-bold text-gray-900">
              Sobre a App Lana Comércio de Produtos Alimentícios LTDA (Milky Moo)
            </h3>

            <p className="mb-6 text-center font-bold text-gray-900 leading-relaxed">
              A App Lana Comércio de Produtos Alimentícios LTDA, registrada sob o CNPJ
              48.417.954/0001-20 e conhecida pelo nome fantasia Milky Moo, é uma empresa que atua
              no segmento de lanchonetes, casas de chá, de sucos e similares, localizada em Belo
              Horizonte, MG. Com foco em qualidade e inovação, oferecemos produtos alimentícios que
              encantam e proporcionam experiências únicas aos nossos clientes.
            </p>

            <p className="mb-6 text-center font-bold text-gray-900 leading-relaxed">
              Nossa atividade principal é o comércio de produtos alimentícios no formato de
              lanchonete, além do comércio varejista de suvenires, bijuterias e artesanatos. Nos
              destacamos pela qualidade dos nossos produtos, atendimento diferenciado e ambiente
              acolhedor, sempre buscando superar as expectativas dos nossos clientes.
            </p>

            <p className="mb-6 text-center font-bold text-gray-900 leading-relaxed">
              Localizada na Av Cristiano Machado, 11833, Loja Sebo3082 Nivel Piso L 3, Vila
              Cloris, Belo Horizonte-MG (CEP 31.744-007), nossa empresa é referência em alimentação
              de qualidade, proporcionando uma experiência profissional e confiável. Valorizamos a
              transparência, a criatividade e a satisfação do cliente, garantindo que cada visita
              seja especial.
            </p>

            <p className="text-center font-bold text-gray-900 leading-relaxed">
              Na Milky Moo, acreditamos que a alimentação é uma forma poderosa de conectar pessoas e
              criar memórias. Por isso, nosso compromisso vai além do produto: queremos ajudar
              nossos clientes a viverem momentos inesquecíveis com sabor e qualidade.
            </p>

            <hr className="my-8 border-gray-200" />

            {/* Produtos e Serviços */}
            <h3 className="mb-6 text-center text-lg font-extrabold text-gray-900">
              Produtos e Serviços Disponíveis:
            </h3>
            <div className="space-y-2 text-center font-bold text-gray-900">
              <p>✔ Lanchonete – Produtos alimentícios de alta qualidade e sabor único.</p>
              <p>✔ Milkshakes e Bebidas – Variedade de sabores e combinações exclusivas.</p>
              <p>✔ Comércio Varejista – Suvenires, bijuterias e artesanatos.</p>
              <p>✔ Atendimento Personalizado – Experiência diferenciada para cada cliente.</p>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Informações da Empresa */}
            <h3 className="mb-6 text-center text-lg font-extrabold text-gray-900">
              Informações da Empresa:
            </h3>
            <ul className="space-y-1 text-center font-bold text-gray-900">
              <li>• Razão Social: APP LANA COMERCIO DE PRODUTOS ALIMENTICIOS LTDA</li>
              <li>• Nome Fantasia: MILKY MOO</li>
              <li>• CNPJ: 48.417.954/0001-20</li>
              <li>
                • Endereço: Av Cristiano Machado, 11833, Loja Sebo3082 Nivel Piso L 3, Vila
                Cloris, Belo Horizonte-MG
              </li>
              <li>• CEP: 31.744-007</li>
              <li>• Telefone: (61) 9282-9084</li>
              <li>• E-mail: alexandrelana565@gmail.com</li>
            </ul>

            <hr className="my-8 border-gray-200" />

            {/* Localização */}
            <h3 className="mb-4 text-center text-lg font-extrabold text-gray-900">
              Localização e Contato:
            </h3>
            <p className="text-center font-bold text-gray-900">
              📍 Endereço: Av Cristiano Machado, 11833, Loja Sebo3082 Nivel Piso L 3, Vila Cloris,
              Belo Horizonte-MG, CEP 31.744-007
            </p>
            <p className="mb-6 text-center font-bold text-gray-900">
              📞 Telefone/WhatsApp: (61) 9282-9084
            </p>

            <hr className="my-8 border-gray-200" />

            <p className="text-center font-bold text-gray-900 leading-relaxed">
              Na App Lana Comércio de Produtos Alimentícios LTDA (Milky Moo), estamos prontos para
              proporcionar momentos incríveis através dos nossos produtos. Entre em contato e
              descubra o sabor que encanta! 🍦🥤
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white py-10 text-center">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Fale comigo:</h2>
        <a
          href="https://wa.me/5561992829084"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg px-10 py-3 text-lg font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "hsl(205, 100%, 15%)" }}
        >
          CONVERSAR AGORA
        </a>
      </section>
    </div>
  );
};

export default Index;
