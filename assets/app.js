/* =========================================================
   JP Papers — comportamento do site
   ========================================================= */

/* ---------- Contador para a época de exames ---------- */
function startCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const target = new Date(EXAM_DATE).getTime();
  const pad = (n) => String(n).padStart(2, "0");

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) { el.textContent = "Session open"; return; }
    const days = Math.floor(diff / 86400000);
    el.textContent = `${days} days ${pad(Math.floor(diff % 86400000 / 3600000))}:` +
                     `${pad(Math.floor(diff % 3600000 / 60000))}:${pad(Math.floor(diff % 60000 / 1000))}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- Totais ---------- */
function totals() {
  const files = SUBJECTS.reduce((n, s) => n + s.files.length, 0);
  const f = document.getElementById("total-files");
  const s = document.getElementById("total-subjects");
  if (f) f.textContent = files;
  if (s) s.textContent = SUBJECTS.length;
}

/* ---------- Cartão de disciplina ---------- */
function subjectCard(subject) {
  const terms = [...new Set(subject.files.map((f) => f.term))].length;
  const el = document.createElement("a");
  el.className = "card";
  el.href = `subject.html?subject=${subject.slug}`;
  el.innerHTML = `
    <span class="card-code">${GROUPS[subject.group].toUpperCase()}</span>
    <h3>${subject.name}</h3>
    <p>${subject.blurb}</p>
    <span class="card-meta">
      <span>${subject.files.length} test${subject.files.length === 1 ? "" : "s"} &middot; ${terms} term${terms === 1 ? "" : "s"}</span>
      <span>Open &rarr;</span>
    </span>`;
  return el;
}

/* ---------- Biblioteca: pesquisa e filtros ---------- */
function initLibrary() {
  const mount = document.getElementById("subject-grid");
  if (!mount) return;

  const search = document.getElementById("search");
  const chips = Array.from(document.querySelectorAll(".chip"));
  let group = "all";

  const apply = () => {
    const q = (search?.value || "").trim().toLowerCase();
    const list = SUBJECTS.filter((s) => {
      const inGroup = group === "all" || s.group === group;
      const inText = !q ||
        s.name.toLowerCase().includes(q) ||
        s.files.some((f) =>
          f.name.toLowerCase().includes(q) ||
          f.type.toLowerCase().includes(q) ||
          f.term.toLowerCase().includes(q));
      return inGroup && inText;
    });

    mount.innerHTML = "";
    if (!list.length) {
      mount.innerHTML = '<p class="empty">Nothing matches that. Try a subject name, a term, or a test type like PSA.</p>';
      return;
    }
    list.forEach((s) => mount.appendChild(subjectCard(s)));
  };

  search?.addEventListener("input", apply);
  chips.forEach((chip) => chip.addEventListener("click", () => {
    chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
    chip.setAttribute("aria-pressed", "true");
    group = chip.dataset.group;
    apply();
  }));

  apply();
}

/* ---------- Página de uma disciplina ---------- */
function initSubjectPage() {
  const mount = document.getElementById("subject-page");
  if (!mount) return;

  const slug = new URLSearchParams(location.search).get("subject");
  const subject = SUBJECTS.find((s) => s.slug === slug);

  if (!subject) {
    mount.innerHTML = `
      <p class="eyebrow">Not found</p>
      <h1>That subject isn't here</h1>
      <p class="lead">The link may be out of date. Go back to the library and pick a subject from the list.</p>
      <div class="actions"><a class="btn" href="resources.html">Back to resources</a></div>`;
    return;
  }

  document.title = `${subject.name} | JP Papers`;

  /* agrupar por período, do mais recente para o mais antigo */
  const terms = [...new Set(subject.files.map((f) => f.term))].sort().reverse();

  const blocks = terms.map((term) => {
    const rows = subject.files.filter((f) => f.term === term).map((f) => `
      <li>
        <span class="name">${f.name}</span>
        <span class="tag">${f.type}</span>
        <a class="dl" href="${f.url}" target="_blank" rel="noopener">Open &nearr;</a>
      </li>`).join("");
    return `<h3 class="term-head">${term}</h3><ul class="papers">${rows}</ul>`;
  }).join("");

  mount.innerHTML = `
    <p class="eyebrow">${GROUPS[subject.group]} &middot; ${subject.files.length} tests</p>
    <h1>${subject.name}</h1>
    <p class="lead">${subject.blurb}</p>
    ${blocks}
    <p class="note" style="margin-top:2rem">
      Documents open in Google Docs. If you get a permission screen, request access
      with your school email.
    </p>
    <div class="actions"><a class="btn btn-ghost" href="resources.html">&larr; All subjects</a></div>`;
}

/* ---------- Atualizações ---------- */
function renderUpdates(limit) {
  const mount = document.getElementById("updates");
  if (!mount) return;
  const list = limit ? UPDATES.slice(0, limit) : UPDATES;
  mount.innerHTML = list.map((u) => {
    const label = new Date(u.date + "T00:00:00")
      .toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    return `<article class="update">
      <time datetime="${u.date}">${label}</time>
      <h3>${u.title}</h3>
      <p>${u.body}</p>
    </article>`;
  }).join("");
}

/* ---------- Arranque ---------- */
document.addEventListener("DOMContentLoaded", () => {
  startCountdown();
  totals();
  initLibrary();
  initSubjectPage();
  renderUpdates(document.body.dataset.updates === "all" ? 0 : 3);
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
