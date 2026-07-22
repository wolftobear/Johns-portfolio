/* ===== SMOOTH SCROLL ===== */

document.querySelector("nav").addEventListener("click", function (event) {

  if (event.target.tagName === "A") {

    const targetId = event.target.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {

      event.preventDefault();

      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });

    }

  }

});


/* ===== SKILLS HOVER EFFECT ===== */

const skillBadges = document.querySelectorAll(".skill");

skillBadges.forEach(function (skill) {

  skill.addEventListener("mouseenter", function () {
    skill.style.backgroundColor = "white";
    skill.style.color = "#00adb5";
  });

  skill.addEventListener("mouseleave", function () {
    skill.style.backgroundColor = "#00adb5";
    skill.style.color = "white";
  });

});


/* ===== PROJECT HOVER ===== */
function hoverSkill(projectId, skillIds, color) {

  const project = document.getElementById(projectId);

  project.addEventListener("mouseenter", function () {

    skillIds.forEach(function(id) {
      const skill = document.getElementById(id);
      skill.style.backgroundColor = "white";
      skill.style.color = color;
    });

  });

  project.addEventListener("mouseleave", function () {

    skillIds.forEach(function(id) {
      const skill = document.getElementById(id);
      skill.style.backgroundColor = "#00adb5";
      skill.style.color = "white";
    });

  });

}
hoverSkill("weatherProject", ["jsSkill", "htmlSkill", "cssSkill"], "#00adb5");

hoverSkill("rpsProject", ["cppSkill"], "#ff6b00");

hoverSkill("todoProject", ["htmlSkill", "cssSkill", "jsSkill"], "#7b2cbf");
