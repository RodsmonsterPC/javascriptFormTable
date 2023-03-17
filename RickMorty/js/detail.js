import { getCharacter } from "./api.js";

let urlParams = new URLSearchParams(window.location.search);
let characterId = urlParams.get("productId");

const getCharacterId = async () => {
  let characterData = await getCharacter(characterId);
  console.log(characterData);
  let { name, status, species, type, gender, image } = characterData;
  console.log(name);
  document.getElementById("img-character").setAttribute("src", image);
  document.querySelector(".character-name").textContent = name;
  document.querySelector(".character-status").textContent = status;
  document.querySelector(".character-species").textContent = species;
  document.querySelector(".character-type").textContent = type;
  document.querySelector(".character-gender").textContent = gender;
};

getCharacterId();
