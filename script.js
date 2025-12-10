document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("hello-button");

  if (!button) return;

  button.addEventListener("click", () => {
    alert("Hello from your minimal website demo!");
  });
});
