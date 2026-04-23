// ASD Static Site - Shared JS
document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", () => navList.classList.toggle("open"));
  }

  // Portfolio filter buttons
  const filterBtns = document.querySelectorAll(".filter-bar button");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Form submit (no-op demo)
  document.querySelectorAll("form").forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = f.querySelector("button[type=submit]");
      if (btn) {
        const original = btn.textContent;
        btn.textContent = "تم الإرسال ✓";
        btn.disabled = true;
        setTimeout(() => { btn.textContent = original; btn.disabled = false; f.reset(); }, 2000);
      }
    });
  });
});
