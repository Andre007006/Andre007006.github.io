const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");

menuBtn.addEventListener("click", () => {
  const isMenuVisible = menuNav.style.display === "block";
  menuNav.style.display = isMenuVisible ? "none" : "block";
});


document.addEventListener("DOMContentLoaded", function () {
  const artikelItems = document.querySelectorAll(".artikel-item");
  artikelItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.05)";
      item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
      item.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bagikanBtns = document.querySelectorAll(".bagikan-btn");

  bagikanBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = btn.parentElement;
      parent.classList.toggle("active");
    });
  });

  // Tutup ikon jika klik di luar
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".bagikan")) {
      document.querySelectorAll(".bagikan").forEach((bagikan) => {
        bagikan.classList.remove("active");
      });
    }
  });
});

