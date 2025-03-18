window.Webflow ||= [];
window.Webflow.push(() => {
  // TOGGLE CLASS ON DROPDOWN
  document
    .querySelectorAll('.ef_toggle-dropdown_head')
    .forEach((toggle) =>
      toggle.addEventListener('click', (event) => event.currentTarget.classList.toggle('is-open'))
    );
  // TOGGLE CLASS ON DROPDOWN
});
