const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const targetId = link.getAttribute("href");

    if (targetId && targetId.startsWith("#") && targetId.length > 1) {
      e.preventDefault();

      navLinks.forEach(function (l) {
        l.classList.remove("active");
        l.classList.remove("active-link");
      });

      link.classList.add("active");

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

const orderBtn = document.querySelector(".order-btn, .btn-order");

if (orderBtn) {
  orderBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let toast = document.querySelector(".demo-toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.className = "demo-toast";
      toast.textContent = "Thank you for ordering! ♡";
      document.body.appendChild(toast);
    }

    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 3000);
  });
}

function exploreMenu() {
  window.location.href = "menu.html";
}

function learnMore() {
  window.location.href = "menu.html";
}