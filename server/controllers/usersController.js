const usersDbModel = require('../models/Users');
const currentSessionUser = ["Sampson01"];

//Create
exports.createUser = async (req, res) => {
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

exports.getUserByID = async (req, res) => {
    console.log(req.body._id);
    usersDbModel.find().then(data => res.json(data.filter(user => user._id == res.body._id)));
    // .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
//     console.log(req.body);
//         usersDbModel.findOne(req.body).then(data => res.json(data))
//         .catch(err => res.status(404).json({ nodatafound: 'No data found getUserByID' }));
};

// UPDATE
exports.updateUserByID = async (req, res) => {
    usersDbModel.findByIdAndUpdate(req.body._id,  {ProfilePicture: req.body.ProfilePicture}).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
    usersDbModel.findByIdAndUpdate(req.body._id,  {Username: req.body.Username}).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
    usersDbModel.findByIdAndUpdate(req.body._id,  {Password: req.body.Password}).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
    usersDbModel.findByIdAndUpdate(req.body._id,  {Email: req.body.Email}).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};
// DELETE
exports.deleteUserByID = async (req, res) => {
    usersDbModel.findByIdAndDelete(req.body.id).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};
