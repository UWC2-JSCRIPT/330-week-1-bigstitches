const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll());
  next();
});

router.get("/:id", (req, res, next) => {
  const index = itemDao.getAll().findIndex(i=>i.id==req.params.id);
  if (index === undefined || index === -1) {
    res.sendStatus(404);
  } else {
    res.json(itemDao.getAll()[index]);
    res.sendStatus(200);
  }
  next();
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
  next();
});

router.put("/:id", (req, res, next) => {
  const index = itemDao.getAll().findIndex(i=>i.id==req.params.id);
  // if the requested id exists then update the field and add the new value
  // else do nothing
  if (index === undefined || index === -1) {
    res.sendStatus(200);
  } else {
    for (const itm in req.body) {
      if (itm != 'id') {
        itemDao.getAll()[index][itm] = req.body[itm];
      }
    };
    res.json(itemDao.getAll()[index]);
    res.sendStatus(200);
  }
  next();
});

router.delete("/:id", async(req, res, next) => {
  try {
    const index = itemDao.getAll().findIndex(i=>i.id==req.params.id);
    itemDao.getAll().splice(index, 1);
    itemDao.deleteById()
    res.sendStatus(200);
  } catch (e) {
    // console.log(e);
    res.sendStatus(501);
  }
  next();
});


module.exports = router;

