document.addEventListener("DOMContentLoaded", () => {
  console.log("La page a chargé");

  const modal = document.getElementById("modal");

  document.getElementById("get-form").addEventListener("click", (event) => {
    modal.classList.add("hidden-form");
  });
});
