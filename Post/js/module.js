export default {
  createList: (textTitle, id) => {
    let textList = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.textContent = textTitle;
    anchor.setAttribute("href", `./postDetail.html?postId=${id}`);

    textList.append(anchor);

    return textList;
  },

  createPost: (title, body) => {
    let divContainer = document.createElement("div");

    let divInfo = document.createElement("div");
    let titleText = document.createElement("h5");
    titleText.textContent = title;

    let bodyText = document.createElement("p");
    bodyText.textContent = body;

    divInfo.append(titleText, bodyText);
    divContainer.appendChild(divInfo);
    return divContainer;
  },
};
