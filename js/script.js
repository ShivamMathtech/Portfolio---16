var typed = new Typed("#element", {
  strings: ["WEB DEVELOPER.", "UI/UX DEVELOPER", "ANDROID DEVLOPER"],
  typeSpeed: 50,
  loop: true,
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link-1");
  const contents = document.querySelectorAll(".content");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");

      contents.forEach((content) => {
        if (content.id === target) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });
  });
});
