const User = require('../models/Users');
const { createUsers, getUsers, getUserByID, updateUserByID, deleteUserByID } = require('../controllers/usersController');

const db = require('./testDB.js');
beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

// describe('GET users tests', () => {
//     it('First Test', async done => {
//         const result = await numberFunc(10)
//         expect(result.word).toBe("ten")
//         expect(result.number).toBeGreaterThan(10)
//         done()
//     })
//     it('Second Test', async done => {
//         const result = await numberFunc()
//         expect(result).toBeNull()
//         done()
//     })
// })

describe('CREATE users tests', () => {
    it('Create User Test', async done => {
        const testUser = new User({
            ID: 999,
            Username: "UnitTestUser",
            ProfilePicture: "thisIsAURLString",
            Password: "Password",
            SecurityEnablement: false
        });
        await createUsers(testUser.ID, testUser.Username, testUser.ProfilePicture, testUser.Password, testUser.SecurityEnablement);
        const testUserDB = await User.findById(testUser.ID);
        expect(testUserDB.ID).toBe(999);
        done()
    })
})

// describe('UPDATE users tests', () => {
//     it('First Test', async done => {
//         const result = await numberFunc(10)
//         expect(result.word).toBe("ten")
//         expect(result.number).toBeGreaterThan(10)
//         done()
//     })
//     it('Second Test', async done => {
//         const result = await numberFunc()
//         expect(result).toBeNull()
//         done()
//     })
// })

// describe('DELETE users tests', () => {
//     it('First Test', async done => {
//         const result = await numberFunc(10)
//         expect(result.word).toBe("ten")
//         expect(result.number).toBeGreaterThan(10)
//         done()
//     })
//     it('Second Test', async done => {
//         const result = await numberFunc()
//         expect(result).toBeNull()
//         done()
//     })
// })