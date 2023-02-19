const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();


// create user
router.post("/users", (req, res) => {
  try {
    if (!req.body.name || !req.body.date || !req.body.task) {
      res.status(400).send({ message: 'Invalid username or password.' });
      return;
    }
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while creating the account.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }

});


// get a user
router.get("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    userSchema
      .findById(id)

      .then((data) => { res.status(200).send(data); })


      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving the account.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }

});


// get all users
router.get("/users/", (req, res) => {
  try {
    userSchema
      .find()

      .then((data) => { res.status(200).send(data); })


      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving the account.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }

});













// update a user
router.put("/users/:id", (req, res) => {


  try {
    const { id } = req.params;

    const { name, age, email, city, state, task, date, listToDo } = req.body;

    userSchema
      .updateOne({ _id: id }, { $set: { name, age, email, city, state, task, date, listToDo } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));

  } catch (err) {
    res.status(500).json(err);
  }

});


















// delete a user
router.delete("/users/:id", (req, res) => {

  try {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (err) {
    res.status(500).json(err);
  }

});









module.exports = router;