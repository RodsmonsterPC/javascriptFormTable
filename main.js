let inputsFields = document.querySelectorAll("#person-form input");
let bottomSave = document.querySelector("#save-button");
let arrayPeople = [];
let data = {};

inputsFields.forEach((fieldsData) => {
  fieldsData.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    data[property] = value;
  });
});
bottomSave.addEventListener("click", () => {
  arrayPeople.push(data);
  let table = document.getElementById("people-wrapper");
  table.innerHTML = "";
  arrayPeople.forEach((person) => {
    let { nombre, Apellido, correo } = person;

    let peopleRow = document.createElement("tr");

    let tdName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let eraseBottom = document.createElement(`button`);

    let nameInfo = document.createTextNode(nombre);
    let lastNameInfo = document.createTextNode(Apellido);
    let emailInfo = document.createTextNode(correo);

    tdName.appendChild(nameInfo);
    tdLastName.appendChild(lastNameInfo);
    tdEmail.appendChild(emailInfo);

    peopleRow.append(tdName, tdLastName, tdEmail, eraseBottom);

    document.getElementById("people-wrapper").appendChild(peopleRow);
  });

  data = {};
});
