let book1 = {
  id: 1,
  author: "Ion",
  name: "Amintiri",
  collection: "Copii",
};
let boogEdited = {
  author: "Ion",
  name: "Vise",
  collection: "Maturi",
};
function get() {
  fetch("http://localhost:3000/books", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
function post(book) {
  fetch("http://localhost:3000/books", {
    method: "POST",
    body: JSON.stringify(book),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
function put(book, id) {
  fetch(`http://localhost:3000/books/${id}`, {
    method: "PUT",
    body: JSON.stringify(book),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
function remove(id) {
  fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

post(book1);
get();
put(boogEdited, 1);
remove(1);
get();
