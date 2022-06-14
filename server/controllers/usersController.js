const usersDbModel = require('../models/Users')

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

exports.getUserByID = async (req, res) => {
    usersDbModel.findById(req.body).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

// exports.getUser = async (req, res) => {
//     let usersDB = await usersDbModel.find();
//     try {
//       if (usersDB.length < 1) {
//         return res.status(404).json({
//           error: "No users was found in DB"
//         });
//       }
//       return res.json(usersDB);
//     } catch (err) {
//       return res.status(500).json({
//         error: "Something went wrong"
//       });
//     }
//   };

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