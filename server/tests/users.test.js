import axios from "axios";
jest.mock("axios");
const User = require('../models/Users');

const db = require('./testDB.js');
beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe('CREATE & GET by ID users tests', () => {
    it('Create User Test', async done => {
        const testUser = new User({
            // _id: 999,
            Username: "UnitTestUser",
            ProfilePicture: "thisIsAURLString",
            Password: "Password",
            SecurityEnablement: false
        });
        // Create user
        axios.post(`http://localhost:8080/users/createUser`, testUser).then(res => {
            axios.get('http://localhost:8080/users/getUserByID', res.body._id).then((testUserDB) => {
                console.log(testUserDB);
                // expect(testUserDB._id).toBe(999);
                done()
            });
        });
        // createUser(testUser).then((data) => {
        //     // Get user that was created
        //     getUserByID(testUser._id).then((testUserDB) => {
        //         console.log(testUserDB);
        //         // expect(testUserDB._id).toBe(999);
        //         done()
        //     });
        // });
    })
})

// functions
// async function getUserByID(data) {
//     try {
//         const res = await fetch('http://localhost:8080/users/getUserByID', {
//             method: 'GET',
//             headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         });
//         return await res.json();
//     } catch (err) { console.log(err); }
// }

// async function createUser(data) {
//     try {
//         const res = await fetch('http://localhost:8080/users/createUser', {
//             method: 'POST',
//             headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         });
//         return await res.json();
//     } catch (err) { console.log(err); }
// }