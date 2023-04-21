const uuid = require('uuid');

const itemsModel = require('../models/items');

module.exports = {};

module.exports.getAll = () => {
  return itemsModel.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete
  const index = itemsModel.items.findIndex(i=>i.id==itemId);
  return itemsModel.items[index];
}

module.exports.deleteById = async (itemId) => {
  // TODO: complete
  const index = itemsModel.items.findIndex(i=>i.id==itemId);
  return itemsModel.items[index];
}

module.exports.updateById = async (itemId, newObj) => {
  // TODO: complete
  const index = itemsModel.items.findIndex(i=>i.id==itemId);
  const objCombined = {...itemsModel.items[index], ...newObj};
  return objCombined;
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}