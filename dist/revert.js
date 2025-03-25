(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/revert.js
  window.addEventListener("popstate", function() {
    document.querySelector("form").reset();
  });
})();
//# sourceMappingURL=revert.js.map
