/**
 * Renderiza a página individual de um projeto do portfólio.
 * O slug do projeto vem de <body data-project-slug="...">.
 * Campos ausentes no config simplesmente não são renderizados.
 */
(function () {
  "use strict";

  const CFG = window.SITE_CONFIG;
  if (!CFG) return;

  const slug = document.body.getAttribute("data-project-slug");
  const project = CFG.projects.find((p) => p.slug === slug);
  const root = document.getElementById("project-root");
  if (!root) return;

  if (!project) {
    root.innerHTML = `<div class="container section-pad"><p>Projeto não encontrado.</p><a class="btn-ghost link-blue" href="../index.html#projetos">Voltar ao portfólio</a></div>`;
    return;
  }

  function mockupMarkup(kind) {
    if (kind === "concept-mobile") {
      return `<div class="mockup-cover mockup-${kind}"><div class="mc-frame"><div class="mc-bar"><i></i><i></i><i></i></div><div class="mc-body"><div class="mc-line" style="width:70%"></div><div class="mc-line" style="width:45%"></div><div class="mc-block"></div></div></div></div>`;
    }
    if (kind === "ecommerce" || kind === "concept-services") {
      return `<div class="mockup-cover mockup-${kind}"><div class="mc-frame"><div class="mc-bar"><i></i><i></i><i></i></div><div class="mc-body"><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div></div></div></div>`;
    }
    return `<div class="mockup-cover mockup-${kind}"><div class="mc-frame"><div class="mc-bar"><i></i><i></i><i></i></div><div class="mc-body"><div class="mc-line" style="width:55%"></div><div class="mc-line" style="width:35%"></div><div class="mc-block"></div></div></div></div>`;
  }

  const badge =
    project.status === "conceito"
      ? '<span class="badge badge-concept">Projeto conceito</span>'
      : '<span class="badge badge-real">Case real</span>';

  document.title = `${project.name} — Portfólio Alpha Prime`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", project.shortDescription);

  let sectionsHtml = "";
  if (project.client) {
    sectionsHtml += `<div class="project-section"><h2>Cliente</h2><p>${project.client}</p></div>`;
  }
  if (project.objective) {
    sectionsHtml += `<div class="project-section"><h2>Objetivo</h2><p>${project.objective}</p></div>`;
  }
  if (project.solution) {
    sectionsHtml += `<div class="project-section"><h2>Solução desenvolvida</h2><p>${project.solution}</p></div>`;
  }
  if (!sectionsHtml) {
    sectionsHtml = `<div class="project-section"><h2>Sobre o projeto</h2><p>${project.shortDescription}</p></div>`;
  }

  let galleryHtml = "";
  if (project.gallery && project.gallery.length) {
    galleryHtml = `<div class="project-gallery">${project.gallery
      .map(
        (g) => `<figure>
          ${mockupMarkup(g.mockup)}
          <figcaption>${g.label}</figcaption>
        </figure>`
      )
      .join("")}</div>`;
  }

  let techHtml = "";
  if (project.tech && project.tech.length) {
    techHtml = `<div class="side-card">
      <h4>Tecnologias</h4>
      <div class="tag-list">${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`;
  }

  let linkHtml = "";
  if (project.link) {
    linkHtml = `<div class="side-card">
      <h4>Site do projeto</h4>
      <a class="btn btn-secondary btn-block" href="${project.link}" target="_blank" rel="noopener">Visualizar site</a>
    </div>`;
  }

  const others = CFG.projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  root.innerHTML = `
    <section class="project-hero">
      <div class="container">
        <div class="project-breadcrumb reveal">
          <a href="../index.html">Início</a>
          <span>/</span>
          <a href="../index.html#projetos">Projetos</a>
          <span>/</span>
          <span>${project.name}</span>
        </div>
        <div class="project-meta-row reveal">
          ${badge}
          <span class="portfolio-category">${project.category}</span>
        </div>
        <h1 class="project-title reveal">${project.name}</h1>
        <p class="project-lead reveal">${project.shortDescription}</p>
        <div class="project-cover reveal">${mockupMarkup(project.mockup)}</div>
      </div>
    </section>

    <section class="project-body">
      <div class="container">
        <div class="project-columns">
          <div class="project-main">
            ${sectionsHtml}
            ${galleryHtml}
          </div>
          <aside class="project-sidebar">
            <div class="side-card">
              <h4>Categoria</h4>
              <p style="color:var(--text-muted);font-size:14px;">${project.category}</p>
            </div>
            ${techHtml}
            ${linkHtml}
            <div class="side-card">
              <h4>Gostou do resultado?</h4>
              <a class="btn btn-primary btn-block" data-wa-link data-wa-message="Olá! Vi o projeto ${project.name} no portfólio da Alpha Prime e gostaria de conversar sobre o meu." href="#">Solicitar orçamento</a>
            </div>
          </aside>
        </div>

        <div class="other-projects">
          <div class="section-head align-left reveal">
            <span class="eyebrow">Mais projetos</span>
            <h2 class="section-title">Continue explorando o portfólio</h2>
          </div>
          <div class="portfolio-grid" id="other-projects-grid"></div>
        </div>
      </div>
    </section>
  `;

  const otherGrid = document.getElementById("other-projects-grid");
  if (otherGrid) {
    otherGrid.innerHTML = others
      .map((p) => {
        const b =
          p.status === "conceito"
            ? '<span class="badge badge-concept">Projeto conceito</span>'
            : '<span class="badge badge-real">Case real</span>';
        return `
        <a href="${p.slug}.html" class="portfolio-card reveal">
          <div class="portfolio-cover">${b}${mockupMarkup(p.mockup)}</div>
          <div class="portfolio-body">
            <span class="portfolio-category">${p.category}</span>
            <h3>${p.name}</h3>
            <p>${p.shortDescription}</p>
            <span class="btn-ghost link-blue">Ver projeto</span>
          </div>
        </a>`;
      })
      .join("");
  }
})();
