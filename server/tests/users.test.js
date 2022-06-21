import axios from "axios";
import request from "supertest";
import { createUser } from '../controllers/usersController';
jest.mock("axios");
const User = require('../models/Users');

const db = require('./testDB.js');
beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

const request = testClient(createUser);

describe('CREATE & GET by ID users tests', () => {
    it('Create User Test', async done => {
        const payload = new User({
            _id: 999,
            Username: "UnitTestUser",
            ProfilePicture: "thisIsAURLString",
            Password: "Password",
            SecurityEnablement: false
        });

        const res = await request
            .post("http://localhost:8080/users/createUser")
            .set({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            })
            .send(JSON.stringify(payload));
        expect(res.status).toBe(200);
        expect(res.body.Username).toEqual({
            name: 'UnitTestUser',
        });
        // Create user
        // axios.post(`http://localhost:8080/users/createUser`, testUser).then(res => {
        //     axios.get('http://localhost:8080/users/getUserByID', res.body._id).then((testUserDB) => {
        //         console.log(testUserDB);
        //         expect(testUserDB._id).toBe(999);
        //         done()
        //     });
        // });
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