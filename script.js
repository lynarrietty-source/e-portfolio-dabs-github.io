document.addEventListener("DOMContentLoaded", () => {
  // Animated text
  const words = ["Developer", "Student"];
  let i = 0;
  const text = document.getElementById("animated-text");

  if (text) {
    setInterval(() => {
      i = (i + 1) % words.length;
      text.textContent = words[i];
    }, 2000);
  }

  // Fade-in sections on scroll
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));

  // Navigation scroll highlight
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Scroll to section
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Update active link
      navLinks.forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
const skills = document.querySelectorAll(".skill-fill");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width =
          entry.target.style.width ||
          entry.target.getAttribute("style").match(/width: (\d+)%/)[1] + "%";
      }
    });
  },
  { threshold: 0.5 }
);
skills.forEach((skill) => skillObserver.observe(skill));

document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-fill, .soft-skill-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute("data-width");
          entry.target.style.width = width;
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
});
