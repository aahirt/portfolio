// Toggle dark mode
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Contact form submission placeholder
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent (not really — this is front-end only).");
});


const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const sublist = btn.nextElementSibling;
    sublist.style.display = sublist.style.display === "block" ? "none" : "block";
  });
});