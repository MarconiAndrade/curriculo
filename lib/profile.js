export const profile = {
  name: "Marconi Andrade",
  initials: "MA",
  role: "Desenvolvedor Full Stack e Estudante de Tecnologia",
  location: "Recife, PE",
  email: "marconiandradefilho@gmail.com",
  githubUser: "MarconiAndrade",
  github: "https://github.com/MarconiAndrade",
  linkedin: "https://www.linkedin.com/in/marconi-andrade-4636ab2a5/",
  summary:
    "Desenvolvedor em formação, com foco em criação de interfaces modernas, organização de código, integração com APIs e construção de aplicações web utilizando React e Next.js.",
  about:
    "Sou um profissional em desenvolvimento na área de tecnologia, com interesse em front-end, aplicações web, integração com APIs e boas práticas de desenvolvimento. Busco criar soluções úteis, organizadas e com boa experiência para o usuário.",
  objective:
    "Atuar em projetos de desenvolvimento web, evoluindo minhas habilidades em React, Next.js, JavaScript, consumo de APIs, componentização e criação de interfaces responsivas.",
};

export const highlights = [
  { value: "API", title: "GitHub integrada" },
  { value: "Next", title: "App Router" },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "JAVA",
  "Git",
  "GitHub",
  "APIs REST",
  "Responsividade",
  "Componentização",
  "SQL",
  "VS Code",
];

export const modulesUsed = [
  {
    name: "Next.js",
    description: "Framework React utilizado para rotas, estrutura do App Router e criação da API interna.",
  },
  {
    name: "React",
    description: "Biblioteca utilizada para componentização das telas, cards, timeline, navbar e integração dinâmica.",
  },
  {
    name: "CSS Global",
    description: "Arquivo globals.css com layout responsivo, animações, gradientes, cards e estilo visual do currículo.",
  },
  {
    name: "API Route",
    description: "Rota /api/github responsável por consultar a API pública do GitHub no servidor.",
  },
  {
    name: "Fetch API",
    description: "Usada para consumir os dados dos repositórios públicos e exibir os projetos dinamicamente.",
  },
  {
    name: "lucide-react",
    description: "Biblioteca de ícones utilizada para melhorar a aparência visual dos botões e cards.",
  },
  {
    name: "App Router",
    description: "Sistema de rotas baseado na pasta app, com páginas separadas para Home, Sobre, Experiências e Projetos.",
  },
  {
    name: "JavaScript Modules",
    description: "Arquivo lib/profile.js centraliza as informações do currículo para facilitar manutenção.",
  },
];

export const academicExperience = [
  {
    period: "Atual",
    title: "Tecnólogo em Sistemas para Internet",
    place: "UNICAP",
    description:
      "Formação acadêmica com foco em desenvolvimento de software, lógica de programação, banco de dados e criação de soluções digitais.",
    points: [
      "Desenvolvimento de aplicações web com HTML, CSS, JavaScript e React.",
      "Estudos de banco de dados, modelagem e consultas.",
      "Projetos acadêmicos envolvendo integração, regras de negócio e organização de código.",
    ],
  },
  {
    period: "Projetos acadêmicos",
    title: "Aplicações Web",
    place: "UNICAP",
    description:
      "Criação de projetos práticos para consolidar conceitos de programação, integração e desenvolvimento em nuvem.",
    points: [
      "Construção de interfaces responsivas.",
      "Uso de VS Code, Git e GitHub no fluxo de desenvolvimento.",
      "Prática com Salesforce, Apex, triggers e deploy para org.",
    ],
  },
];

export const professionalExperience = [
  {
    period: "Atual",
    title: "Desenvolvedor em formação",
    place: "Projetos pessoais e acadêmicos",
    description:
      "Atuação prática no desenvolvimento de aplicações web, páginas institucionais, portfólios e sistemas simples.",
    points: [
      "Criação de páginas responsivas com foco em usabilidade.",
      "Consumo de APIs REST e exibição dinâmica de dados.",
      "Organização de componentes reutilizáveis em React/Next.js.",
    ],
  },
  {
    period: "Experiência prática",
    title: "Projeto com Salesforce",
    place: "Estudos e laboratório",
    description:
      "Desenvolvimento de automações, classes Apex, triggers e testes em ambiente Salesforce.",
    points: [
      "Criação de serviços para registro de erros.",
      "Testes práticos em org Salesforce.",
      "Deploy e conexão do VS Code com ambiente Salesforce.",
    ],
  },
];

export const manualProjects = [
  {
    title: "Currículo Online com Next.js",
    status: "Em destaque",
    description:
      "Site de currículo com múltiplas páginas, layout moderno, componentes reutilizáveis e integração com a API do GitHub.",
    stack: ["Next.js", "React", "CSS", "GitHub API"],
  },
  {
    title: "MedConnect Salesforce",
    status: "Acadêmico",
    description:
      "Projeto acadêmico com foco em Salesforce, automações, Apex, triggers e estruturação de regras de negócio.",
    stack: ["Salesforce", "Apex", "VS Code"],
  },
  {
    title: "Portfólio Web",
    status: "Front-end",
    description:
      "Página de apresentação profissional com seções de habilidades, contato, experiências e projetos.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
