const { Store, Rating } = require("../models");

exports.getStores = async (req, res) => {
    const stores = await Store.findAll();
    res.json(stores);
};

exports.submitRating = async (req, res) => {
    const { storeId, rating } = req.body;

    const existing = await Rating.findOne({
        where: {
            UserId: req.user.id,
            StoreId: storeId,
        },
    });

    if (existing) {
        existing.rating = rating;
        await existing.save();
        return res.json(existing);
    }

    const newRating = await Rating.create({
        rating,
        UserId: req.user.id,
        StoreId: storeId,
    });

    res.json(newRating);
};