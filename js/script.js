document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
});
function welcomeMessage() {
  let username = prompt("Masukkan nama Anda:");
  if (username) {
    document.getElementById("welcome-user").innerText = username;
  }
}
function validateForm() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let message = document.getElementById("message").value;
  if (name === "" || dob === "" || !gender || message === "") {
    alert("Semua field harus diisi!");
    return;
  }
  document.getElementById("out-name").innerText = name;
  document.getElementById("out-dob").innerText = dob;
  document.getElementById("out-gender").innerText = gender.value;
  document.getElementById("out-message").innerText = message;

  let now = new Date();
  document.getElementById("current-time").innerText = now.toString();
  alert("Form berhasil dikirim!");
  document.getElementById("contact-form").reset();
}
