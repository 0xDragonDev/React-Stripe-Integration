const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Stripe');

const paginatedList = require('./paginatedList');

methods.list = paginatedList;

module.exports = methods;
