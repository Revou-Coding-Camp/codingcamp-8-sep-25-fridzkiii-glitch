document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");
  if (name && email && message) {
    status.classList.remove("hidden");
    status.textContent = "✅ Message sent successfully!";
    status.classList.add("text-green-600");
    this.reset();
  } else {
    status.classList.remove("hidden");
    status.textContent = "⚠️ Please fill in all fields!";
    status.classList.add("text-red-600");
  }
});
