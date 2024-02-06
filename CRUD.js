/* https://github.com/Israel2709/24js */
let inputsFields = document.querySelectorAll("#person-form input");
let bottomSave = document.querySelector("#save-button");
let data = {};
console.log("hola")
const getKoders = async () => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/Rodolfo/koders/.json"
  );
  let data = await response.json();
  return data;
};

const createKoder = async (koderObject) => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/Rodolfo/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(koderObject),
    }
  );
  let data = await response.json();

  return data;
};
const resetForm = () => {
  document.querySelectorAll(`#person-form input`).forEach((element) => {
    element.value = "";
  });
};

inputsFields.forEach((fieldsData) => {
  fieldsData.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    data[property] = value;
  });
});

bottomSave.addEventListener("click", () => {
  createKoder(data);
  resetForm();
});
