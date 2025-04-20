(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/step1.js
  window.Webflow ||= [];
  window.Webflow.push(() => {
    document.querySelectorAll(".ef_toggle-dropdown_head").forEach(
      (toggle) => toggle.addEventListener("click", (event) => event.currentTarget.classList.toggle("is-open"))
    );
  });
})();
//# sourceMappingURL=step1.js.map
