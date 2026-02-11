function setPressed(buttons, activeId) {
  buttons.forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.recipe === activeId ? "true" : "false");
  });
}

function showRecipe(id) {
  document.querySelectorAll(".recipe").forEach(r => {
    r.hidden = r.id !== id;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll("[data-recipe].chip"));
  const products = Array.from(document.querySelectorAll("[data-recipe].product"));

  // Default
  showRecipe("dragon");
  setPressed(buttons, "dragon");

  // Klick på recept-knapparna
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.recipe;
      setPressed(buttons, id);
      showRecipe(id);
      document.getElementById("recept").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Klick på produktkort
  products.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.recipe;
      setPressed(buttons, id);
      showRecipe(id);
      document.getElementById("recept").scrollIntoView({ behavior: "smooth" });
    });
  });
});
