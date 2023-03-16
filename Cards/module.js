export default {
  myCard: (name, gender, src, btntxt, buttonFunction, dod, nat) => {
    let card = document.createElement("div");
    card.classList.add(..."card bg-dark text-white".split(" "));
    let image = document.createElement("img");
    image.classList.add(..."card-img-top img-container".split(" "));
    image.setAttribute("src", src);
    let cBody = document.createElement("div");
    cBody.classList.add("card-body");
    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = name;
    let gender = document.createElement("h5");
    title.classList.add("card-gender");
    title.textContent = gender;
    let listGroup = document.createElement("ul");
    listGroup.classList.add(..."list-group list-group-flush".split(" "));
    let liBirth = document.createElement("li");
    liBirth.classList.add(..."list-group-item bg-dark text-white".split(" "));
    let liNat = document.createElement("li");
    liNat.textContent = nat;
    let dates = moment(dod).format("Do MMM  YY");
    liNat.classList.add(
      ..."list-group-item bg-dark text-white fw-bold d-flex align-items-center".split(
        " "
      )
    );
    let button = document.createElement("button");
    button.classList.add(..."btn btn-primary".split(" "));
    button.textContent = btntxt;

    button.addEventListener("click", () => buttonFunction);
    listGroup.append(liBirth, liNat, dates);
    cBody.append(listGroup, button);
    card.append(image, cBody);
    return card;
  },
};
