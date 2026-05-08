const { Rating, User, Store } = require("../models");
const { Sequelize } = require("sequelize");

exports.dashboard = async (req, res) => {
    const ratings = await Rating.findAll({
        include: [User, Store],
    });

    const avg = await Rating.findOne({
        attributes: [[Sequelize.fn("AVG", Sequelize.col("rating")), "avgRating"]],
    });

    res.json({ ratings, avg });
};