/* ===== SMOOTH SCROLL ===== */

document.querySelector("nav").addEventListener("click", function(event) {

  // Only handle anchor links
  if (event.target.tagName === "A") {

    const targetId = event.target.getAttribute("href");

    // Only smooth scroll for links that point to sections
    if (targetId && targetId.startsWith("#")) {

      event.preventDefault();

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }

    }

  }

});


/* ===== SKILLS HOVER EFFECT ===== */

const skillBadges = document.querySelectorAll(".skill");

skillBadges.forEach(skill => {

  skill.addEventListener("mouseenter", () => {
    skill.style.backgroundColor = "white";
    skill.style.color = "#00adb5";
  });

  skill.addEventListener("mouseleave", () => {
    skill.style.backgroundColor = "#00adb5";
    skill.style.color = "white";
  });

});

