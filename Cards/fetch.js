import { getUser, getFriends, deleteFriend, createFriend } from "./api.js";
import createCard from './module.js';

const renderUsers = ( async() => {
  const response = await getUser();
  const usersList = response['results'];
  for (const key in usersList) {
    let { gender, name, dob, picture, nat, id} = usersList[key];
    let fullName = `${name.first} ${name.last}`
    document.querySelector('#container-users')
    .appendChild(createCard.myCard(fullName, gender, picture.large, 'Añadir amigo', dob.date, nat, createFriend, id.value));
  }
});
renderUsers();

const renderFriends = ( async() => {
  const response = await getFriends();
  console.log(response);
  for (const key in response) {
    let { gender, name, dob, src, nat } = response[key];
    console.log(key);
    document.querySelector('#container-friends')
    .appendChild(createCard.myCardFriend(name, gender, src, 'Eliminar Amigo', dob, nat, deleteFriend, key));
  }
});
renderFriends();

