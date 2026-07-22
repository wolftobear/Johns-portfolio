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

const weatherProject = document.getElementById("weatherProject");
const rpsProject = document.getElementById("rpsProject");
const todoProject = document.getElementById("todoProject");

const jsSkill = document.getElementById("jsSkill");
const cppSkill = document.getElementById("cppSkill");
const htmlSkill = document.getElementById("htmlSkill");

// Weather App -> JavaScript

weatherProject.addEventListener("mouseenter", function () {
    jsSkill.style.backgroundColor = "white";
    jsSkill.style.color = "#00adb5";
});

weatherProject.addEventListener("mouseleave", function () {
    jsSkill.style.backgroundColor = "#00adb5";
    jsSkill.style.color = "white";
});


// Rock Paper Scissors -> C++

rpsProject.addEventListener("mouseenter", function () {
    cppSkill.style.backgroundColor = "white";
    cppSkill.style.color = "#ff6b00";
});

rpsProject.addEventListener("mouseleave", function () {
    cppSkill.style.backgroundColor = "#00adb5";
    cppSkill.style.color = "white";
});


// To Do List -> HTML

todoProject.addEventListener("mouseenter", function () {
    htmlSkill.style.backgroundColor = "white";
    htmlSkill.style.color = "#7b2cbf";
});

todoProject.addEventListener("mouseleave", function () {
    htmlSkill.style.backgroundColor = "#00adb5";
    htmlSkill.style.color = "white";
});
