/**
 * Alpha Prime Soluções Digitais — Scripts principais
 * Lê tudo de window.SITE_CONFIG (js/config.js) e nunca fixa
 * dados de negócio diretamente aqui.
 */
(function () {
  "use strict";

  const CFG = window.SITE_CONFIG;
  if (!CFG) return;

  const waLink = (message) => {
    const text = encodeURIComponent(message || CFG.whatsappDefaultMessage);
    return `https://wa.me/${CFG.company.whatsapp}?text=${text}`;
  };

  /* ---------------- Icons ---------------- */
  const ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    brand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3c2.3 0 4.2-1.9 4.2-4.2C21.5 6 17.2 2 12 2z"/></svg>',
    social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/></svg>',
    kit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/></svg>',
    devices: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="14" height="10" rx="1"/><line x1="2" y1="17" x2="16" y2="17"/><rect x="18" y="8" width="4" height="9" rx="1"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    whatsapp: '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.65 4.55 1.78 6.44L3 29l7.72-2.72a12.9 12.9 0 0 0 5.3 1.13h.01c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.65 3 16.02 3zm0 22a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-4.58 1.62 1.53-4.66-.24-.38A9.94 9.94 0 0 1 6 15.02C6 9.5 10.5 5 16.02 5c5.51 0 10 4.5 10 10.02 0 5.51-4.49 9.98-10 9.98zm5.44-7.47c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  };

  /* ---------------- Header ---------------- */
  function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        mobileNav.classList.toggle("open");
      });
      mobileNav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          toggle.classList.remove("open");
          mobileNav.classList.remove("open");
        })
      );
    }
  }

  /* ---------------- Populate site-wide info ---------------- */
  function populateGlobals() {
    document.querySelectorAll("[data-wa-link]").forEach((el) => {
      const msg = el.getAttribute("data-wa-message") || CFG.whatsappDefaultMessage;
      el.href = waLink(msg);
      el.target = "_blank";
      el.rel = "noopener";
    });
    document.querySelectorAll("[data-company-name]").forEach((el) => (el.textContent = CFG.company.name));
    document.querySelectorAll("[data-company-short]").forEach((el) => (el.textContent = CFG.company.shortName));
    document.querySelectorAll("[data-wa-display]").forEach((el) => (el.textContent = CFG.company.whatsappDisplay));
    document.querySelectorAll("[data-email]").forEach((el) => {
      el.textContent = CFG.company.email;
      if (el.tagName === "A") el.href = `mailto:${CFG.company.email}`;
    });
    document.querySelectorAll("[data-instagram-link]").forEach((el) => {
      el.href = `https://instagram.com/${CFG.company.instagram}`;
      el.target = "_blank";
      el.rel = "noopener";
    });
    document.querySelectorAll("[data-instagram-handle]").forEach((el) => (el.textContent = `@${CFG.company.instagram}`));
    document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
    document.querySelectorAll("[data-location]").forEach((el) => (el.textContent = CFG.company.location));
  }

  /* ---------------- Nav ---------------- */
  function renderNav() {
    const desktop = document.getElementById("nav-desktop");
    const mobile = document.getElementById("nav-mobile");
    if (desktop) {
      desktop.innerHTML = CFG.nav.map((n) => `<a href="${n.href}">${n.label}</a>`).join("");
    }
    if (mobile) {
      mobile.innerHTML = CFG.nav.map((n) => `<a href="${n.href}">${n.label}</a>`).join("");
    }
  }

  /* ---------------- Stats ---------------- */
  function renderStats() {
    const el = document.getElementById("stats-grid");
    if (!el) return;
    el.innerHTML = CFG.stats
      .map(
        (s) => `
      <div class="stat reveal">
        <div class="stat-value" data-count="${s.value}" data-suffix="${s.suffix || ""}">0${s.suffix || ""}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
      )
      .join("");
  }

  function animateCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const duration = 1200;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
  }

  /* ---------------- Services ---------------- */
  function renderServices() {
    const el = document.getElementById("services-grid");
    if (!el) return;
    el.innerHTML = CFG.services
      .map(
        (s) => `
      <div class="service-card reveal">
        <div class="service-icon">${ICONS[s.icon] || ""}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <a href="#contato" class="btn-ghost link-blue" data-wa-message="Olá! Tenho interesse no serviço de ${s.title}.">
          Saiba mais ${ICONS.arrow}
        </a>
      </div>`
      )
      .join("");
  }

  /* ---------------- Portfolio ---------------- */
  function mockupMarkup(kind) {
    if (kind === "concept-mobile") {
      return `<div class="mockup-cover mockup-${kind}"><div class="mc-frame"><div class="mc-bar"><i></i><i></i><i></i></div><div class="mc-body"><div class="mc-line" style="width:70%"></div><div class="mc-line" style="width:45%"></div><div class="mc-block"></div></div></div></div>`;
    }
    if (kind === "ecommerce" || kind === "concept-services") {
      return `<div class="mockup-cover mockup-${kind}"><div class="mc-frame"><div class="mc-bar"><i></i><i></i><i></i></div><div class="mc-body"><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div><div class="mc-block"></div></div></div></div>`;
    }
    return `<div class="mockup-cover mockup-${kind}"><div class="mc-frame"><div class="mc-bar"><i></i><i></i><i></i></div><div class="mc-body"><div class="mc-line" style="width:55%"></div><div class="mc-line" style="width:35%"></div><div class="mc-block"></div></div></div></div>`;
  }

  function renderPortfolio() {
    const el = document.getElementById("portfolio-grid");
    if (!el) return;
    el.innerHTML = CFG.projects
      .map((p) => {
        const badge =
          p.status === "conceito"
            ? '<span class="badge badge-concept">Projeto conceito</span>'
            : '<span class="badge badge-real">Case real</span>';
        return `
        <a href="projetos/${p.slug}.html" class="portfolio-card reveal">
          <div class="portfolio-cover">
            ${badge}
            ${mockupMarkup(p.mockup)}
          </div>
          <div class="portfolio-body">
            <span class="portfolio-category">${p.category}</span>
            <h3>${p.name}</h3>
            <p>${p.shortDescription}</p>
            <span class="btn-ghost link-blue">Ver projeto ${ICONS.arrow}</span>
          </div>
        </a>`;
      })
      .join("");
  }

  /* ---------------- Process ---------------- */
  function renderProcess() {
    const el = document.getElementById("process-grid");
    if (!el) return;
    el.innerHTML = `<div class="process-line"></div>` +
      CFG.process
        .map(
          (s) => `
      <div class="process-step reveal">
        <div class="process-num">${s.number}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>`
        )
        .join("");
  }

  /* ---------------- Differentials ---------------- */
  function renderDifferentials() {
    const el = document.getElementById("diff-grid");
    if (!el) return;
    el.innerHTML = CFG.differentials
      .map(
        (d) => `
      <div class="diff-card reveal">
        <div class="diff-icon">${ICONS[d.icon] || ""}</div>
        <h3>${d.title}</h3>
        <p>${d.description}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------- Pricing ---------------- */
  function currency(v) {
    return v.toLocaleString("pt-BR");
  }

  function renderPricing() {
    const el = document.getElementById("pricing-grid");
    if (!el) return;
    el.innerHTML = CFG.pricing
      .map(
        (p) => `
      <div class="price-card reveal ${p.highlight ? "highlight" : ""}">
        ${p.highlight ? '<span class="price-tag">Mais procurado</span>' : ""}
        <h3>${p.name}</h3>
        <div class="price-amount">
          <span class="from">${p.priceLabel}</span>
          <span class="value">R$ ${currency(p.price)}<small>,00</small></span>
        </div>
        <div class="price-desc">${p.description}</div>
        <ul class="price-features">
          ${p.features.map((f) => `<li>${ICONS.check}${f}</li>`).join("")}
        </ul>
        <a href="#" class="btn btn-secondary btn-block" data-wa-link data-wa-message="Olá! Quero fechar o plano ${p.name} (${p.priceLabel.toLowerCase()} R$ ${currency(p.price)},00).">Fechar plano</a>
      </div>`
      )
      .join("");
  }

  /* ---------------- FAQ ---------------- */
  function renderFaq() {
    const el = document.getElementById("faq-list");
    if (!el) return;
    el.innerHTML = CFG.faq
      .map(
        (f, i) => `
      <div class="faq-item reveal" data-index="${i}">
        <button class="faq-question" aria-expanded="false">
          <span>${f.q}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <div class="faq-answer"><p>${f.a}</p></div>
      </div>`
      )
      .join("");

    el.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        el.querySelectorAll(".faq-item.open").forEach((openItem) => {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-answer").style.maxHeight = null;
          openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((i) => observer.observe(i));
  }

  /* ---------------- Contact form ---------------- */
  function buildWhatsappMessage(data) {
    const lines = [
      "Olá! Vim pelo site da Alpha Prime e gostaria de solicitar um orçamento.",
      "",
      `Nome: ${data.nome}`,
      `E-mail: ${data.email}`,
      `WhatsApp: ${data.whatsapp}`,
      `Tipo de projeto: ${data.tipo}`,
      data.orcamento ? `Orçamento estimado: ${data.orcamento}` : null,
      "",
      `Mensagem: ${data.mensagem}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = document.getElementById("form-status");

    function setStatus(kind, text) {
      status.className = `form-status show ${kind}`;
      status.textContent = text;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      if (!data.nome || !data.whatsapp || !data.mensagem) {
        setStatus("error", "Preencha nome, WhatsApp e mensagem para continuar.");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      setStatus("loading", "Enviando sua solicitação...");

      // Sem backend próprio: encaminhamos a solicitação formatada para o WhatsApp.
      // Para integrar com um backend/CRM real, substitua este bloco por um fetch()
      // para o endpoint desejado antes do redirecionamento.
      window.setTimeout(() => {
        setStatus("success", "Tudo certo! Vamos te redirecionar para o WhatsApp para finalizar o contato.");
        submitBtn.disabled = false;
        const message = buildWhatsappMessage(data);
        window.open(waLink(message), "_blank", "noopener");
        form.reset();
      }, 700);
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    initHeader();
    populateGlobals();
    renderStats();
    renderServices();
    renderPortfolio();
    renderProcess();
    renderDifferentials();
    renderPricing();
    renderFaq();
    initContactForm();
    populateGlobals(); // re-run for dynamically injected [data-wa-link] elements
    initReveal();
    animateCounters();
  });
})();
