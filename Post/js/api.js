const getTitle = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");

  let data = await response.json();
  return data;
};

const getPost = async (id) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  let data = await response.json();

  return data;
};

export { getTitle, getPost };
