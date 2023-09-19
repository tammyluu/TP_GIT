const forme = document.querySelector("form");

forme.addEventListener("submit", function(event) {
  event.preventDefault();

  const immatriculation = document.querySelector("input[name=immatriculation]").value;

  if (immatriculation === "") {
    alert("Veuillez saisir une immatriculation");
  } else if (!immatriculation.match(/^[0-9]{3} [A-Z]{2}$/)) {
    alert("L'immatriculation est invalide");
  } else {
    // ...
  }
});
const formes = document.querySelector("form");

formes.addEventListener("submit", function(event) {
  event.preventDefault();

  const immatriculation = document.querySelector("input[name=immatriculation]").value;

  if (immatriculation === "") {
    alert("Veuillez saisir une immatriculation");
  } else {
    // ...

    // Affiche le ticket
    const ticket = document.querySelector(".ticket");
    ticket.innerHTML = `
      Immatriculation : ${immatriculation}
    `;
  }
});
