export default {
  myCard: (name, gender, src, btntxt, dod, nat, buttonFunction, id) => {
    let card = document.createElement("div");
    card.classList.add(..."card bg-dark text-white".split(" "));
    card.setAttribute('id', id);
    let image = document.createElement("img");
    image.classList.add(..."card-img-top img-container".split(" "));
    image.setAttribute("src", src);
    let cBody = document.createElement("div");
    cBody.classList.add("card-body");
    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = name;
    let genderH5 = document.createElement("h5");
    genderH5.classList.add("card-gender");
    genderH5.textContent = gender;
    let listGroup = document.createElement("ul");
    listGroup.classList.add(..."list-group list-group-flush".split(" "));
    let liBirth = document.createElement("li");
    liBirth.classList.add(..."list-group-item bg-dark text-white".split(" "));
    let dates = moment(dod).format("Do MMM  YY");
    liBirth.textContent = dates;
    let liNat = document.createElement("li");
    liNat.classList.add("list-group-item", "bg-dark", "text-white", "fw-bold", "d-flex", "align-items-center");
    liNat.textContent = nat;
    let button = document.createElement("button");
    button.classList.add(..."btn btn-primary".split(" "));
    button.textContent = btntxt;

    button.addEventListener("click", () => buttonFunction({name, gender, src, dod, nat, id}));
    listGroup.append(liBirth, liNat);
    cBody.append(title, genderH5, listGroup, button);
    card.append(image, cBody);
    return card;
  },
  myCardFriend: (name, gender, src, btntxt, dod, nat, buttonFunction, key) => {
    let card = document.createElement("div");
    card.classList.add(..."card bg-dark text-white".split(" "));
    card.setAttribute('id', key);
    let image = document.createElement("img");
    image.classList.add(..."card-img-top img-container".split(" "));
    image.setAttribute("src", src);
    let cBody = document.createElement("div");
    cBody.classList.add("card-body");
    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = name;
    let genderH5 = document.createElement("h5");
    genderH5.classList.add("card-gender");
    genderH5.textContent = gender;
    let listGroup = document.createElement("ul");
    listGroup.classList.add(..."list-group list-group-flush".split(" "));
    let liBirth = document.createElement("li");
    liBirth.classList.add(..."list-group-item bg-dark text-white".split(" "));
    let dates = moment(dod).format("Do MMM  YY");
    liBirth.textContent = dates;
    let liNat = document.createElement("li");
    liNat.classList.add("list-group-item", "bg-dark", "text-white", "fw-bold", "d-flex", "align-items-center");
    liNat.textContent = nat;
    let button = document.createElement("button");
    button.classList.add(..."btn btn-primary".split(" "));
    button.textContent = btntxt;

    button.addEventListener("click", () => buttonFunction(key));
    listGroup.append(liBirth, liNat);
    cBody.append(title, genderH5, listGroup, button);
    card.append(image, cBody);
    return card;
  },
};
