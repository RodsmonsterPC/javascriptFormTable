let inputsInfo = document.querySelectorAll("#form-user input");
let buttonLogin = document.querySelector("#login-button");

let data = {};

inputsInfo.forEach((fieldsData) => {
  fieldsData.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    data[property] = value;
  });
});

const submitForm = () => {
  let { correo, password } = data;
  correo && password
    ? localStorage.setItem("token", "newUser")
    : alert("llena todos los campos");
};

buttonLogin.addEventListener("click", () => submitForm());
