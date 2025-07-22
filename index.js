// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const service = formData.get("service");

  // Simple validation
  if (!name || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  // Show success message
  alert(
    `Thank you ${name}! Your inquiry has been received. We will contact you within 24 hours to discuss your ${
      service || "project"
    } requirements.`
  );

  // Reset form
  this.reset();
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
  }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    if (target > 100) {
      element.textContent = Math.floor(current) + "+";
    } else {
      element.textContent = Math.floor(current) + "%";
    }
  }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector(
          ".stat-number, .about-stat-number"
        );
        if (statNumber && !statNumber.classList.contains("animated")) {
          statNumber.classList.add("animated");
          const text = statNumber.textContent;
          const number = parseInt(text.replace(/[^0-9]/g, ""));
          animateCounter(statNumber, number);
        }
      }
    });
  },
  { threshold: 0.5 }
);

document
  .querySelectorAll(".hero-stats .stat, .about-stat-card")
  .forEach((stat) => {
    statsObserver.observe(stat);
  });

// Mobile menu toggle (for future implementation)
const mobileMenuToggle = document.createElement("div");
mobileMenuToggle.className = "mobile-menu-toggle";
mobileMenuToggle.innerHTML = "☰";
mobileMenuToggle.style.display = "none";
mobileMenuToggle.style.fontSize = "1.5rem";
mobileMenuToggle.style.cursor = "pointer";
mobileMenuToggle.style.color = "#1e293b";

// Add mobile menu functionality
if (window.innerWidth <= 768) {
  document.querySelector("nav").appendChild(mobileMenuToggle);
  mobileMenuToggle.style.display = "block";

  mobileMenuToggle.addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "100%";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.background = "white";
    navLinks.style.padding = "1rem";
    navLinks.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  });
}


