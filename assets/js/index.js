document.addEventListener("DOMContentLoaded", () => {
  console.log("La page a chargé");

  const modal = document.getElementById("modal");
  const form = document.getElementById("contact");

  document.getElementById("get-form").addEventListener("click", (event) => {
    modal.classList.add("hidden-form");
  });

  document.getElementById("close-button").addEventListener("click", (event) => {
    modal.classList.remove("hidden-form");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response);

    console.log(data);
  });
});
