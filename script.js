// AOS animation
AOS.init({ duration: 1000, once: true });

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusDiv.textContent = "⏳ Sending...";
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      statusDiv.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusDiv.textContent = "❌ Something went wrong. Try again.";
    }
  } catch {
    statusDiv.textContent = "⚠️ Network error. Please check your connection.";
  }
});

// Scroll reveal
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Smooth zoom click
document.querySelectorAll(".zoomable").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.transform = "scale(1.12)";
    item.style.transition = "0.4s ease";
    setTimeout(() => {
      item.style.transform = "scale(1)";
    }, 400);
  });
});