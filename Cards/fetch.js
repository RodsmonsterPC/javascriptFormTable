import { getUser, getFriends, deleteFriend, createFriend } from "./api.js";

const renderUsers = ( async() => {
  const response = await getUser();
  const usersList = response['results'];
  for (const key in usersList) {
    let { gender, name, dob, picture, nat} = usersList[key];
    console.log(`${gender} ${name.first} ${dob.date} ${picture.large} ${nat}`);
    //función para crear tarjetas 
    //ejemplo
    //createCards(gender, name.first, dob.date, picture.large, nat)
    document.querySelector('#container-users').appendChild(/*Funcion createCard*/);
  }
});
renderUsers();
