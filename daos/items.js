const uuid = require('uuid');

const itemsModel = require('../models/items');

module.exports = {};


module.exports.getAll = () => {
  return itemsModel.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete
  return itemsModel.getById(itemId);
}

module.exports.deleteById = async (itemId) => {
    // TODO: complete
    return itemsModel.items;
}

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete
    if (itemsModel.getById(itemId) === undefined) {
      console.log('undefined');
    } else {
      console.log('defined');
    }
    
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}