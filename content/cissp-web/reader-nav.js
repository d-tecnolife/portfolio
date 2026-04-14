(function () {
  const currentPath = window.location.pathname;
  const rootPath = currentPath.startsWith("/OEBPS/") ? ".." : ".";
  const pages = [
    "/index.html",
    "/OEBPS/cover.html",
    "/OEBPS/toc.html",
    "/OEBPS/why_book.html",
    "/OEBPS/exam.html",
    "/OEBPS/mindset.html",
    "/OEBPS/ata.html",
    "/OEBPS/note_book.html",
    "/OEBPS/intro.html",
    "/OEBPS/chap01.html",
    "/OEBPS/chap02.html",
    "/OEBPS/chap03.html",
    "/OEBPS/chap03b.html",
    "/OEBPS/chap04.html",
    "/OEBPS/chap05.html",
    "/OEBPS/chap06.html",
    "/OEBPS/chap07.html",
    "/OEBPS/chap08.html",
    "/OEBPS/ref.html",
    "/OEBPS/acro.html",
    "/OEBPS/index.html",
    "/OEBPS/proven.html",
    "/OEBPS/desti.html",
    "/OEBPS/last.html"
  ];

  const normalize = (path) => {
    if (path === "/") return "/index.html";
    return path.replace(/\/+$/, "");
  };

  const index = pages.indexOf(normalize(currentPath));
  const previous = index > 0 ? pages[index - 1] : null;
  const next = index >= 0 && index < pages.length - 1 ? pages[index + 1] : null;

  const style = document.createElement("style");
  style.textContent = `
    body { padding-top: 4.5rem !important; }
    .reader-nav {
      position: fixed;
      top: 0.75rem;
      right: 0.75rem;
      z-index: 9999;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: flex-end;
      max-width: min(92vw, 44rem);
    }
    .reader-nav a,
    .reader-nav button {
      appearance: none;
      border: 1px solid #394453;
      background: rgba(18, 23, 29, 0.92);
      color: #eef3f8 !important;
      text-decoration: none !important;
      border-radius: 999px;
      padding: 0.55rem 0.9rem;
      font: 600 0.95rem/1.1 system-ui, sans-serif;
      cursor: pointer;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24);
      backdrop-filter: blur(8px);
    }
    .reader-nav a:hover,
    .reader-nav button:hover {
      background: rgba(37, 48, 61, 0.96);
    }
    .reader-nav .reader-nav-primary {
      background: rgba(62, 154, 162, 0.96);
      border-color: rgba(62, 154, 162, 0.96);
    }
    .reader-nav .reader-nav-primary:hover {
      background: rgba(74, 179, 188, 0.98);
    }
    @media (max-width: 640px) {
      body { padding-top: 7.5rem !important; }
      .reader-nav {
        left: 0.75rem;
        right: 0.75rem;
        justify-content: center;
      }
      .reader-nav a,
      .reader-nav button {
        flex: 1 1 auto;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement("nav");
  nav.className = "reader-nav";
  nav.setAttribute("aria-label", "Reader navigation");

  const items = [
    { href: `${rootPath}/index.html`, label: "Home" },
    { href: `${rootPath}/OEBPS/cover.html`, label: "Cover" },
    { href: `${rootPath}/OEBPS/toc.html`, label: "Contents", primary: true }
  ];

  if (previous) items.push({ href: `${rootPath}${previous}`, label: "Previous" });
  if (next) items.push({ href: `${rootPath}${next}`, label: "Next" });

  items.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    if (item.primary) link.className = "reader-nav-primary";
    nav.appendChild(link);
  });

  const topButton = document.createElement("button");
  topButton.type = "button";
  topButton.textContent = "Top";
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  nav.appendChild(topButton);

  document.body.prepend(nav);
})();
