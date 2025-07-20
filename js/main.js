document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS Animation Library
  AOS.init({
    offset: 120,
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Preloader
  const preloader = document.querySelector(".preloader");
  window.addEventListener("load", function () {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  });

  // Image Loading Animation
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", function () {
        this.classList.add("loaded");
      });
    }
  });

  // Header Scroll Effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Back to Top Button
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });

  backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu after clicking
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  // Service Item Hover Effect
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.querySelector(".service-hover").style.opacity = "1";
      this.querySelector(".service-hover").style.transform = "translateY(0)";
    });

    item.addEventListener("mouseleave", function () {
      this.querySelector(".service-hover").style.opacity = "0";
      this.querySelector(".service-hover").style.transform = "translateY(20px)";
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For demonstration, we'll just show an alert
      alert(`شكراً ${name} على تواصلك معنا! سنرد عليك قريباً على ${email}`);

      // Reset form
      contactForm.reset();
    });
  }

  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      // Here you would typically send the email to a server
      // For demonstration, we'll just show an alert
      alert(`شكراً على اشتراكك في نشرتنا البريدية! تم تسجيل ${email} بنجاح`);

      // Reset form
      emailInput.value = "";
    });
  }

  // Initialize Bootstrap Tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
