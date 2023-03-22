const BASE_URL = `https://kodemia-24g-default-rtdb.firebaseio.com/products/.json`;

export default {
  productInfo: async () => {
    let response = await fetch(`${BASE_URL}`);

    let data = await response.json();

    return data;
  },
};
