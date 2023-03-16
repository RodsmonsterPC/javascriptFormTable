/*https://randomuser.me/ 

https://randomuser.me/api/?results=50&inc=gender,name,nat,dob,picture,phone

https://kodemia-24g-default-rtdb.firebaseio.com/equipo2/amigos/.json*/

const getUser = async () => {
  let response = await fetch(
    `https://randomuser.me/api/?results=50&inc=gender,name,nat,dob,picture,phone/.json`
  );

  let data = await response.json();
  return data;
};

const getFriends = async () => {
  let response = await fetch(
    `https://kodemia-24g-default-rtdb.firebaseio.com/equipo2/amigos/.json`
  );

  let data = await response.json();
  return data;
};

const deleteFriend = async (keyFriend) => {
  let response = await fetch(
    `https://kodemia-24g-default-rtdb.firebaseio.com/equipo2/amigos/${keyFriend}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  return data;
};

const createFriend = async (userInfo) => {
  let response = await fetch(
    `https://kodemia-24g-default-rtdb.firebaseio.com/equipo2/amigos/.json`,
    {
      method: "POST",
      body: JSON.stringify(userInfo),
    }
  );

  let data = await response.json();
  return data;
};

export { getUser, getFriends, deleteFriend, createFriend };