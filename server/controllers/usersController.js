const usersDbModel = require('../models/Users');
const currentSessionUser = ["tester2"];

//Create
exports.createUsers = async (req, res) => {
    const usersObj = new usersDbModel(req.body);
    await usersObj.save().then(() => {
        res.status(200).json({ usersObj });
    }).catch((err) => {
        console.log(err);
    })
};

// GET
exports.getUsers = async (req, res) => {
    usersDbModel.find().then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

// GET
exports.getCurrentUser = async (req, res) => {
    usersDbModel.find().then(data => {
        const index = data.findIndex(object => {
            return object.Username === currentSessionUser[0]
        })
        res.json(data[index])})
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

// exports.getUserByID = async (req, res) => {
//     console.log(usersDbModel.findById(req.body));
//     usersDbModel.findById(req.body).then(data => res.json(data))
//     .catch(err => res.status(404).json({ nodatafound: 'Hello' }));
// };
// UPDATE
exports.updateUserByID = async (req, res) => {
    usersDbModel.findByIdAndUpdate(req.body.id, res.body).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};
// DELETE
exports.deleteUserByID = async (req, res) => {
    usersDbModel.findByIdAndDelete(req.body.id).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};
