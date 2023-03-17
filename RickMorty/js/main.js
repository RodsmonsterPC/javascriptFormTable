import { getCharacters } from "./api.js";
import createCard from "./module.js";
const printCard = async () => {
  const response = await getCharacters();
  const rickCharacters = response["results"];
  for (const key in rickCharacters) {
    let { image, name, origin, id } = rickCharacters[key];

    document
      .querySelector("#container-charcaters")
      .appendChild(createCard.myCard(name, image, origin.name, id));
  }
};

printCard();
