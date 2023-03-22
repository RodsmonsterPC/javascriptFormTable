import { getTitle } from "./api.js";
import list from "./module.js";

const printList = async () => {
  let response = await getTitle();

  let listTitles = response;

  listTitles.forEach((element) => {
    let { title, id } = element;

    document.getElementById("list-post").append(list.createList(title, id));
  });
};

printList();
