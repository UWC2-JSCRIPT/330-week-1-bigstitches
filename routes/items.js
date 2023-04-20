const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');
// const itemArray = itemDao.getAll();

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll());
  next();
});
/*
router.get("/:id", (req, res, next) => {
  const reqID = req.params.id;
  let index = -1;

  const indexPromise = new Promise((resolve, reject) => {
    index = itemArray.findIndex(each => each.id === reqID);

    if (index != -1) {
      resolve(index);
    } else {
      reject('Bad Call');
    }
  })

  indexPromise.then(
    (index) => {
      console.log(`${itemArray[index].id}: ${itemArray[index].field}`);
      res.json(itemArray[index]);
      res.sendStatus(200);
    },
    (err) => {
      res.statusCode = 404;
      res.sendStatus(404);
      console.log(err);
    }
  )
  next();
});
*/
router.get("/:id", (req, res, next) => {
  // console.log("HERERERE");
  // res.json(itemDao.getById(req.params.id));
  // console.log((itemDao.getById(req.params.id)));
  /*
  itemDao.getById(req.params.id)
    .then(()=>console.log('here'))
    .catch(()=>console.log('there'))
  */
  /*
  itemDao.getById(req.params.id)
    .then( () => {
      res.json(itemDao.getById(req.params.id))
      res.sendStatus(200)
    })
    .catch( () => {
      res.sendStatus(404)
    })
  */
  if (itemDao.getById(req.params.id) === undefined) {
    res.sendStatus(404);
  } else {
    res.json(itemDao.getById(req.params.id));
    res.sendStatus(200);
  }
  next();
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
  next();
});

router.put("/:id", async(req, res, next) => {
  try {
    // console.log(req.params);
    // console.log(`id`);
    // const index = itemArray.findIndex(i=>i.id==req.params.id);
    // itemDao.getAll().splice(index, 1);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(501);
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
    console.log(e);
    res.sendStatus(501);
  }
  next();
});


module.exports = router;
