import { byId } from"../utils/dom.js"; 

(function initIndexPage() {
  if (!window._electronApiDeclared) window._electronApiDeclared = true;

  console.log("[index] script loaded"); // sanity check

  const startBtn = byId<HTMLButtonElement>("startBtn");
  if (!startBtn) {
    console.warn("[index] #startBtn not found");
    return;
  }

  const welcomeDiv = byId<HTMLDivElement>("welcome");
  const storedPseudo = localStorage.getItem("pseudo");
  const storedAvatar = localStorage.getItem("avatar");

  if (welcomeDiv) {
    if (storedPseudo && storedAvatar) {
      welcomeDiv.innerHTML = `
        <img src="${storedAvatar}" class="w-16 h-16 rounded-full mx-auto mb-2" alt="Avatar" />
        <h2 class="text-xl font-bold">Bienvenue, ${storedPseudo} !</h2>
      `;
    } else {
      welcomeDiv.innerHTML = `<h2 class="text-xl font-bold">Bienvenue sur Pomodoro Minutor !</h2>`;
    }
  }

  startBtn.addEventListener("click", () => {
    console.log("[index] Bouton Commencer cliqué !");
    startBtn.textContent = "Loading..."; // visual proof
    try {
      if (!storedPseudo || !storedAvatar) {
        window.electronAPI?.navigate("register.html");
      } else {
        window.electronAPI?.navigate("timer.html");
      }
    } catch (err) {
      console.error("[index] navigate error:", err);
    }
  });
})();
