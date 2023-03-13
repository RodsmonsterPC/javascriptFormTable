let inputsFields = document.querySelectorAll("#person-form input");
let bottomSave = document.querySelector("#save-button");
let arrayPeople = [];
let data = {};
let counter = 1;

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
  arrayPeople.forEach((person, index) => {
    let { nombre, Apellido, correo } = person;
    let idLoc = counter;
    let peopleRow = document.createElement("tr");
    peopleRow.id = "row-" + idLoc;

    let tdName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let eraseButton = document.createElement("button");
    eraseButton.type = "button";
    eraseButton.value = "delete";
    eraseButton.innerText = "Eliminar";
    eraseButton.className = "erase-button";
    eraseButton.onclick = () => {
      document.getElementById(peopleRow.id).remove();
      arrayPeople.splice(index, 1);
    };

    let nameInfo = document.createTextNode(nombre);
    let lastNameInfo = document.createTextNode(Apellido);
    let emailInfo = document.createTextNode(correo);

    tdName.appendChild(nameInfo);
    tdLastName.appendChild(lastNameInfo);
    tdEmail.appendChild(emailInfo);

    peopleRow.append(tdName, tdLastName, tdEmail, eraseButton);

    document.getElementById("people-wrapper").appendChild(peopleRow);
    counter++;
  });

  data = {};
});
