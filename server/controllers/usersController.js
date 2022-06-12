const usersDbModel = require('../models/Users')

exports.addUsers = async (req, res) => {
    const usersObj = new usersDbModel(req.body);
    await usersObj.save().then(() => {
        res.status(200).json({ usersObj });
    }).catch((err) => {
        res.status(400).json({ msg: err });
    })
};

exports.getUsers = async (req, res) => {
    usersDbModel.find().then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};