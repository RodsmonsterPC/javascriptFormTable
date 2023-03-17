export default {
  myCard: (name, img, origin, id) => {
    let card = document.createElement("div");
    card.classList.add(..."card bg-dark text-white".split(" "));
    card.setAttribute("id", id);
    let image = document.createElement("img");
    image.classList.add(..."card-img-top img-container".split(" "));
    image.setAttribute("src", img);
    let cBody = document.createElement("div");
    cBody.classList.add("card-body");
    let title = document.createElement("h5");
    title.classList.add("card-name");
    title.textContent = name;
    let originH5 = document.createElement("h5");
    originH5.classList.add("card-origin");
    originH5.textContent = origin;

    let link = document.createElement("a");
    link.setAttribute("href", `RickMorty/detailCharacter.html?productId=${id}`);
    link.textContent = "Detalles";
    cBody.append(title, originH5, link);
    card.append(image, cBody);
    return card;
  },
};
