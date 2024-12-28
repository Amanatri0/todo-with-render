const { Module } = require("module");
const mongoose = require("mongoose");
const { title } = require("process");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;
mongoose.connect("");

const Users = new Schema({
  email: String,
  password: String,
  fullName: String,
  duration: Date.now(toString),
});

const Todos = new Schema({
  userId: ObjectId,
  title: String,
  value: Boolean,
});

const UserModel = mongoose.model("user", Users);
const TodoModel = mongoose.model("user", Todos);

module.exports = {
  UserModel,
  TodoModel,
};
