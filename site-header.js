(function () {
  const navigation = `
    <nav class="association-nav" aria-label="Navigation de l'association">
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li class="dropdown"><a href="index.html#association">L'association MVEUCS.44</a>
          <ul class="dropdown-menu">
            <li><a href="presentation.html">Pr&eacute;sentation</a></li>
            <li><a href="valeurs.html">Nos valeurs</a></li>
            <li><a href="actions.html">Nos actions</a></li>
          </ul>
        </li>
        <li class="dropdown"><a href="action-logement.html">Dossiers administratifs</a>
          <ul class="dropdown-menu">
            <li><a href="action-logement.html">Pr&eacute;sentation</a></li>
          </ul>
        </li>
        <li class="dropdown"><a href="actualites.html">Actualit&eacute;s</a>
          <ul class="dropdown-menu">
            <li><a href="actualites.html">Toutes les Actualit&eacute;s</a></li>
            <li><a href="infos-semaine.html">Infos semaine</a></li>
          </ul>
        </li>
        <li class="dropdown"><a href="permanence-mveucs44.html">Permanence MVEUCS44</a>
          <ul class="dropdown-menu">
            <li><a href="permanence-mveucs44.html">Pr&eacute;sentation</a></li>
            <li><a href="calendrier-permanences.html">Calendrier de nos permanences</a></li>
          </ul>
        </li>
      </ul>
    </nav>`;

  const style = document.createElement("style");
  style.textContent = `
    main article h1 { font-size: 2rem !important; }
    main article h2 { font-size: 1.5rem !important; }
    main article h3 { font-size: 1.2rem !important; }
    main article p, main article li { font-size: 0.95rem !important; line-height: 1.2; }
    .association-nav { background: #FE9063; padding: 0 12px; }
    .association-nav > ul { display: flex; justify-content: center; list-style: none; margin: 0; padding: 0; }
    .association-nav li { margin: 0; padding: 0; font-size: inherit; line-height: normal; }
    .association-nav a { display: block; color: #B36A5E !important; font-weight: 600; padding: 9px 22px; text-decoration: none; }
    .association-nav .dropdown { position: relative; }
    .association-nav .dropdown-menu { display: none; position: absolute; left: 0; top: 100%; min-width: 220px; z-index: 10; list-style: none; margin: 0; padding: 0; background: #fff; box-shadow: 0 6px 16px #0003; }
    .association-nav .dropdown-menu a { color: #145b7d !important; padding: 12px 16px; }
    .association-nav .dropdown:hover .dropdown-menu, .association-nav .dropdown:focus-within .dropdown-menu { display: block; }
    @media (max-width: 700px) {
      .association-nav { overflow-x: auto; padding: 0 8px; }
      .association-nav > ul { justify-content: flex-start; }
      .association-nav a { padding: 9px 14px; white-space: nowrap; }
    }
  `;
  document.head.appendChild(style);

  const oldLabel = document.querySelector(".site-section-label");
  if (oldLabel) oldLabel.outerHTML = navigation;

  const existingNav = document.querySelector(".association-nav");
  if (existingNav && !existingNav.querySelector('a[href="index.html"]')) {
    existingNav.querySelector("ul")?.insertAdjacentHTML(
      "afterbegin",
      '<li><a href="index.html">Accueil</a></li>'
    );
  }

  document.querySelectorAll('.association-nav a[href="action-logement.html"]').forEach((link) => {
    if (link.textContent.trim() === "Action Logement") {
      link.textContent = "Dossiers administratifs";
    }
  });

  document.querySelectorAll('.association-nav a[href="action-logement.html#informations"]').forEach((link) => {
    link.closest("li")?.remove();
  });
})();
