/* =========================================================
   JP Papers — modo escuro
   Carregado no <head> para o tema ficar aplicado antes da
   primeira pintura (sem flash branco).
   ========================================================= */
(function () {
  var KEY = "jp-theme";
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  }

  /* escolha guardada > preferência do sistema > claro */
  apply(saved() || (mq && mq.matches ? "dark" : "light"));

  /* enquanto ninguém escolher à mão, segue o sistema */
  if (mq && mq.addEventListener) {
    mq.addEventListener("change", function (e) {
      if (!saved()) apply(e.matches ? "dark" : "light");
    });
  }

  function wire() {
    var buttons = document.querySelectorAll(".theme-toggle");
    Array.prototype.forEach.call(buttons, function (btn) {
      function sync() {
        var dark = root.getAttribute("data-theme") === "dark";
        btn.setAttribute("aria-pressed", String(dark));
        var label = dark ? "Switch to light mode" : "Switch to dark mode";
        btn.setAttribute("aria-label", label);
        btn.setAttribute("title", label);
      }
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply(next);
        Array.prototype.forEach.call(buttons, function (b) {
          b.setAttribute("aria-pressed", String(next === "dark"));
          var l = next === "dark" ? "Switch to light mode" : "Switch to dark mode";
          b.setAttribute("aria-label", l);
          b.setAttribute("title", l);
        });
      });
      sync();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
