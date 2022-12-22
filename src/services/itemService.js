export async function getAllItems() {
  try {
    const response = await fetch("http://localhost:3000/items");
    console.log("type of ,", response.json());
    return await response.json();
  } catch (error) {
    return error; //[];
  }
}

export async function getAllItemsPromise() {
  fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((data) => {
      return data; //data is an array.
    });
}
