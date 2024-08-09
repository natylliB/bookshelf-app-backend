const { addBookHandler, getAllBooksHandler, getBookDetailByIdHandler, changeBookDetailByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: changeBookDetailByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
]

module.exports = routes;