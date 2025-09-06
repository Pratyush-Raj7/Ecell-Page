const textArray = [
  "Fueling Innovation",
  "Driving Entrepreneurship",
  "Building Startups at NMIT",
];
let i = 0,
  j = 0,
  isDeleting = false;

function type() {
  const currentText = textArray[i];
  document.getElementById("typing-text").textContent = currentText.substring(
    0,
    j
  );

  if (!isDeleting && j < currentText.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % textArray.length;
    setTimeout(type, 1000);
  }
}
type();

const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("form-message").textContent =
    "✅ Thank you! We received your feedback.";
  form.reset();
});

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.innerHTML = document.body.classList.contains("light-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
