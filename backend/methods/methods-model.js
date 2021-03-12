const books = [];
function findAll() {
  return books;
}
function add(body) {
  for (var i = 0; i < books.length; i++) {
    if (books[i].id === body.id) {
      return { status: 403, value: "Id already exist" };
    }
  }
  const book = {
    id: body.id,
    author: body.author,
    name: body.name,
    release: new Date(),
    collection: body.collection,
  };
  books.push(book);
  return { status: 200, value: book };
}
function edit(req) {
  if (!Number(req.params.id)) {
    return { status: 400, value: "Invalid Id" };
  }
  const body = {
    author: req.body.author,
    name: req.body.name,
    collection: req.body.collection,
  };
  const book = books.find((_book) => _book.id === Number(req.params.id));

  if (book !== undefined && book !== null) {
    Object.assign(book, body);
    return { status: 200, value: book };
  }
  return { status: 404, value: "This id does not exist" };
}
function remove(req) {
  const book = books.findIndex((_book) => _book.id === Number(req.params.id));
  if (book === -1) {
    return { status: 200, value: "deleted : true" };
  }
  books.splice(book, 1);
  return { status: 200, value: "deleted : true" };
}

module.exports = { findAll, add, edit, remove };
