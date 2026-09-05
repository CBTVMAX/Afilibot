# Alpha Prime Soluções Digitais

Site institucional premium da Alpha Prime Soluções Digitais — portfólio, vitrine de serviços e página de conversão de clientes.

## Estrutura

```
index.html                 Página principal (todas as seções)
projetos/                  Páginas individuais de cada case do portfólio
  jessica-gonzales.html
  rosa-mistika.html
  jessy-portilla.html
  case-conceito.html       Exemplo demonstrativo (marcado como "Projeto conceito")
css/style.css              Design system completo (cores, tipografia, componentes, responsivo)
js/config.js               ÚNICO arquivo com os dados editáveis do site (ver abaixo)
js/main.js                 Interações, renderização dinâmica e formulário de contato
js/project-detail.js       Renderiza a página individual de cada projeto do portfólio
assets/img/                Logo, favicon e imagem de compartilhamento (Open Graph)
robots.txt, sitemap.xml    SEO básico
```

Site 100% estático (HTML/CSS/JS puro), sem dependências de build — pode ser hospedado em qualquer servidor estático (GitHub Pages, Netlify, Vercel, cPanel, etc).

## Como editar o conteúdo

Todas as informações de negócio ficam centralizadas em **`js/config.js`**:

- Nome da empresa, WhatsApp, e-mail, Instagram
- Números da seção de credibilidade
- Serviços, diferenciais e etapas do processo
- Planos e preços
- Perguntas frequentes (FAQ)
- Projetos do portfólio (incluindo campos opcionais: cliente, objetivo, solução, galeria, tecnologias e link do site)

Basta alterar os valores desse arquivo — nenhum outro arquivo precisa ser tocado para atualizar textos, preços ou contatos.

### Adicionando um novo projeto ao portfólio

1. Adicione um novo objeto ao array `projects` em `js/config.js` com um `slug` único.
2. Copie um dos arquivos em `projetos/*.html`, renomeie para `<slug>.html` e ajuste `data-project-slug`, `<title>` e `<meta name="description">`.
3. Campos não informados (ex.: `link`, `gallery`, `tech`) simplesmente não são exibidos na página do projeto.

### WhatsApp

O número usado em todos os botões de WhatsApp do site vem de `company.whatsapp` (formato `55DDDNÚMERO`, apenas dígitos) em `js/config.js` — não está hardcoded em nenhum componente.
