const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a user into collection', async () => {
    const users = db.collection('test.users');

    const mockUser = { _id: 222, Email: "testemail22", Username: "tester22", ProfilePicture: "imageurl22", Password: "pass22", SecurityEnablement: true}
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 222});
    expect(insertedUser).toEqual(mockUser);
    
  });
});
