// Toggle dark mode
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// // Contact form submission placeholder
// document.getElementById('contactForm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   alert("Message sent (not really — this is front-end only).");
// });


const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const sublist = btn.nextElementSibling;
    sublist.style.display = sublist.style.display === "block" ? "none" : "block";
  });
});


    function toggleExperience() {
      const details = document.getElementById('experienceDetails');
      const button = document.querySelector('.expand-btn');
      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
      } else {
        details.style.display = 'none';
        button.textContent = 'Show Details';
      }
    }
