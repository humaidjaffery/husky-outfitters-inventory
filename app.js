const viewButtons = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view");
const panelButtons = document.querySelectorAll("[data-panel]");
const panels = document.querySelectorAll(".panel");

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewButtons.forEach((item) => item.classList.remove("is-active"));
    views.forEach((view) => view.classList.remove("is-visible"));
    button.classList.add("is-active");
    document.getElementById(`${button.dataset.view}-view`).classList.add("is-visible");
  });
});

panelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    panelButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    panels.forEach((panel) => panel.classList.remove("is-visible"));
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");
    document.getElementById(button.dataset.panel).classList.add("is-visible");
  });
});

document.getElementById("inventory-search").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  document.querySelectorAll("#inventory-body tr").forEach((row) => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
});

const checkoutDialog = document.getElementById("checkout-dialog");
document.getElementById("open-checkout").addEventListener("click", () => checkoutDialog.showModal());
checkoutDialog.addEventListener("click", (event) => {
  if (event.target === checkoutDialog) checkoutDialog.close();
});
