const { User, Store, Rating } = require("../models");

exports.dashboard = async (req, res) => {
    const users = await User.count();
    const stores = await Store.count();
    const ratings = await Rating.count();

    res.json({ users, stores, ratings });
};

exports.addStore = async (req, res) => {
    const store = await Store.create(req.body);
    res.json(store);
};

exports.addUser = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
};

exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

exports.getStores = async (req, res) => {
    const stores = await Store.findAll();
    res.json(stores);
};