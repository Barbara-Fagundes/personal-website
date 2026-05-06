const buttons = Array.from(document.querySelectorAll(".mode-button"));
const profileCards = Array.from(document.querySelectorAll(".profile-card"));
const validModes = new Set(["hybrid", "academic", "industry"]);

function applyMode(mode) {
  const nextMode = validModes.has(mode) ? mode : "hybrid";
  document.body.dataset.mode = nextMode;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === nextMode);
  });

  profileCards.forEach((card) => {
    const panelMode = card.dataset.panel;
    const shouldHighlight = nextMode !== "hybrid" && panelMode === nextMode;
    const shouldDim = nextMode !== "hybrid" && panelMode !== nextMode;

    card.classList.toggle("is-highlighted", shouldHighlight);
    card.classList.toggle("is-dimmed", shouldDim);
  });

  window.location.hash = nextMode === "hybrid" ? "" : nextMode;
}

const hashMode = window.location.hash.replace("#", "");
applyMode(hashMode);

buttons.forEach((button) => {
  button.addEventListener("click", () => applyMode(button.dataset.mode));
});
