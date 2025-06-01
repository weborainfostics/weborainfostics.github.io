window.addEventListener("load", () => {
  const intro = document.querySelector(".intro");
  const mainContent = document.querySelector(".main-content");

  // Intro fade out after animation
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none"; // prevent interaction
  }, 3000); // based on your animation timing

  // Show main content after that
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.add("visible");
    document.body.style.overflow = "auto"; // scroll enable
  }, 3500);
});


