/**
 * ============================================================
 *  ALPHA PRIME SOLUÇÕES DIGITAIS — CONFIGURAÇÃO CENTRAL DO SITE
 * ============================================================
 * Este é o único lugar que precisa ser editado para atualizar
 * textos, preços, contatos, serviços, projetos e FAQ do site.
 * Nenhuma dessas informações está espalhada pelo HTML/CSS.
 *
 * Campos marcados com "EDITAR" são placeholders e devem ser
 * substituídos pelos dados reais da empresa.
 * ============================================================
 */

window.SITE_CONFIG = {

  company: {
    name: "Alpha Prime Soluções Digitais",
    shortName: "Alpha Prime",
    tagline: "Ideias que geram resultados",
    foundingYear: 2026,
    // EDITAR: número real com DDI+DDD, apenas dígitos (usado em todos os links de WhatsApp)
    whatsapp: "5511999999999",
    whatsappDisplay: "(11) 99999-9999",
    // EDITAR: e-mail real de contato
    email: "contato@alphaprimedigital.com.br",
    // EDITAR: usuário do Instagram (sem @)
    instagram: "alphaprime.digital",
    // EDITAR: cidade/região de atuação, se quiser exibir
    location: "Atendimento em todo o Brasil · 100% remoto",
    logo: "assets/img/logo-icon.png",
    favicon: "assets/img/favicon-32.png",
  },

  // Mensagem padrão pré-preenchida ao abrir o WhatsApp pelos botões gerais do site
  whatsappDefaultMessage: "Olá! Vim pelo site da Alpha Prime e gostaria de saber mais sobre a criação de um site.",

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    eyebrow: "Sites · Design · Estratégia Digital",
    title: "Sua presença digital começa aqui.",
    subtitle: "Criamos sites, identidades e soluções digitais para transformar ideias e negócios em marcas mais profissionais.",
    ctaPrimary: { label: "Quero criar meu site", href: "#contato" },
    ctaSecondary: { label: "Ver projetos", href: "#projetos" },
  },

  // Indicadores — números editáveis. Substitua pelos números reais assim que disponíveis.
  stats: [
    { value: 15, suffix: "+", label: "Sites desenvolvidos" },
    { value: 30, suffix: "+", label: "Projetos criativos" },
    { value: 6, suffix: "+", label: "Áreas atendidas" },
  ],

  services: [
    {
      icon: "code",
      title: "Criação de Sites",
      description: "Sites modernos, rápidos, responsivos e personalizados.",
      anchor: "criacao-de-sites",
    },
    {
      icon: "layout",
      title: "Landing Pages",
      description: "Páginas focadas em apresentação, divulgação e conversão.",
      anchor: "landing-pages",
    },
    {
      icon: "cart",
      title: "Loja Virtual",
      description: "Estruturas completas para empresas que querem vender pela internet.",
      anchor: "loja-virtual",
    },
    {
      icon: "brand",
      title: "Identidade Visual",
      description: "Criação de identidade visual para tornar sua marca reconhecível.",
      anchor: "identidade-visual",
    },
    {
      icon: "palette",
      title: "Design Gráfico",
      description: "Artes para redes sociais, materiais promocionais e comunicação visual.",
      anchor: "design-grafico",
    },
    {
      icon: "social",
      title: "Social Media",
      description: "Criação de conteúdos visuais para fortalecer sua presença nas redes.",
      anchor: "social-media",
    },
    {
      icon: "kit",
      title: "Media Kit",
      description: "Apresentações profissionais para artistas, influenciadores e marcas.",
      anchor: "media-kit",
    },
  ],

  process: [
    { number: "01", title: "Conversa", description: "Entendemos seu negócio, objetivo e necessidades." },
    { number: "02", title: "Planejamento", description: "Definimos estrutura, conteúdo e direção visual." },
    { number: "03", title: "Desenvolvimento", description: "Criamos e desenvolvemos o projeto." },
    { number: "04", title: "Revisão", description: "Você analisa o projeto e solicita ajustes." },
    { number: "05", title: "Publicação", description: "Colocamos seu site no ar." },
  ],

  differentials: [
    { icon: "spark", title: "Design personalizado", description: "Seu projeto não precisa parecer igual ao de todo mundo." },
    { icon: "devices", title: "Responsivo", description: "Experiência adaptada para celular, tablet e computador." },
    { icon: "bolt", title: "Performance", description: "Estrutura pensada para carregamento rápido." },
    { icon: "search", title: "SEO", description: "Estrutura preparada para mecanismos de busca." },
    { icon: "chat", title: "Atendimento direto", description: "Comunicação simples e sem burocracia." },
    { icon: "check", title: "Projeto completo", description: "Da ideia à publicação." },
  ],

  // Preços — fáceis de editar. Valores "a partir de".
  pricing: [
    {
      name: "Landing Page",
      price: 500,
      priceLabel: "A partir de",
      description: "Ideal para:",
      features: ["Profissionais", "Pequenos negócios", "Campanhas", "Divulgação de serviços"],
      highlight: false,
    },
    {
      name: "Site Institucional",
      price: 900,
      priceLabel: "A partir de",
      description: "Ideal para:",
      features: ["Empresas", "Profissionais", "Prestadores de serviço", "Marcas"],
      highlight: true,
    },
    {
      name: "Site Completo",
      price: 1500,
      priceLabel: "A partir de",
      description: "Ideal para:",
      features: ["Projetos com estrutura mais completa", "Múltiplas páginas", "Conteúdo aprofundado", "Integrações"],
      highlight: false,
    },
    {
      name: "Loja Virtual",
      price: 2000,
      priceLabel: "A partir de",
      description: "Ideal para:",
      features: ["Venda de produtos online", "Catálogo completo", "Carrinho e pagamento", "Gestão de pedidos"],
      highlight: false,
    },
  ],

  about: {
    title: "Tecnologia, design e estratégia em um só lugar.",
    paragraphs: [
      "A Alpha Prime Soluções Digitais nasceu para ajudar empresas, profissionais e marcas a construírem uma presença digital mais profissional.",
      "Unimos design, tecnologia e estratégia para criar experiências digitais que representam cada negócio de forma única.",
    ],
  },

  faq: [
    {
      q: "Quanto custa criar um site?",
      a: "O valor varia de acordo com o tipo de projeto. Trabalhamos com landing pages a partir de R$ 500, sites institucionais a partir de R$ 900, sites completos a partir de R$ 1.500 e lojas virtuais a partir de R$ 2.000. O orçamento final depende das necessidades específicas do seu projeto.",
    },
    {
      q: "Quanto tempo leva para criar um site?",
      a: "O prazo depende da complexidade do projeto e da agilidade no envio de conteúdos e feedbacks. Após a conversa inicial, alinhamos um prazo estimado antes de iniciar o desenvolvimento.",
    },
    {
      q: "O site funciona no celular?",
      a: "Sim. Todos os projetos são desenvolvidos de forma responsiva, com a experiência adaptada para celular, tablet e computador.",
    },
    {
      q: "Vocês fazem manutenção?",
      a: "Sim, oferecemos suporte e manutenção sob consulta. Fale com a gente para entender as opções disponíveis para o seu projeto.",
    },
    {
      q: "Posso solicitar alterações no projeto?",
      a: "Sim. Durante a etapa de revisão você pode solicitar ajustes antes da publicação. Alterações após a entrega podem ser combinadas conforme o escopo do projeto.",
    },
    {
      q: "Vocês registram domínio e hospedam o site?",
      a: "Podemos orientar e auxiliar no registro de domínio e na hospedagem. Consulte as condições no momento do orçamento.",
    },
    {
      q: "O site é otimizado para o Google?",
      a: "Sim, todos os projetos são estruturados com boas práticas de SEO (títulos, descrições, hierarquia de conteúdo e desempenho), o que ajuda o site a ser bem indexado pelos mecanismos de busca.",
    },
  ],

  /**
   * PROJETOS
   * Cada projeto pode ter os campos abaixo. Campos ausentes
   * simplesmente não são exibidos na página do projeto.
   *  slug          -> usado para o arquivo em /projetos/<slug>.html
   *  name          -> nome do projeto
   *  category      -> categoria exibida no card
   *  status        -> "real" ou "conceito"
   *  shortDescription
   *  client, objective, solution, gallery[], tech[], link
   */
  projects: [
    {
      slug: "jessica-gonzales",
      name: "Jessica Gonzales",
      category: "Site profissional · Artista",
      status: "real",
      shortDescription: "Site profissional desenvolvido para apresentação e fortalecimento de marca artística.",
      link: "https://jessicagonzales.com.br/",
      coverImage: "assets/img/project-jessica-gonzales.jpg",
      mockup: "artist",
    },
    {
      slug: "rosa-mistika",
      name: "Rosa Místika Loja",
      category: "E-commerce",
      status: "real",
      shortDescription: "Loja virtual estruturada para apresentação e venda de produtos online.",
      mockup: "ecommerce",
    },
    {
      slug: "jessy-portilla",
      name: "Jessy Portilla",
      category: "Site personalizado · Artista",
      status: "real",
      shortDescription: "Site personalizado desenvolvido para apresentação profissional de carreira artística.",
      link: "https://jessyportilla.com.br/",
      coverImage: "assets/img/project-jessy-portilla.jpg",
      mockup: "artist2",
    },
    {
      slug: "case-conceito",
      name: "Vértice Studio",
      category: "Site institucional · Conceito",
      status: "conceito",
      shortDescription: "Projeto conceito criado para demonstrar a estrutura completa de um case da Alpha Prime.",
      client: "Projeto conceito (demonstrativo)",
      objective: "Apresentar um estúdio criativo fictício de forma profissional, com foco em credibilidade e captação de novos clientes.",
      solution: "Desenvolvimento de site institucional com identidade visual própria, seções de serviços, portfólio e formulário de contato direto, priorizando performance e navegação simples.",
      gallery: [
        { mockup: "concept-home", label: "Página inicial" },
        { mockup: "concept-services", label: "Seção de serviços" },
        { mockup: "concept-mobile", label: "Versão mobile" },
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      mockup: "concept-home",
    },
  ],

};
