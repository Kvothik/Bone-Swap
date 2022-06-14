const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');


// Connect to db
module.exports.connect = async () => {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    mongoose.connect(uri, mongooseOpts);
}


// d/c from db 
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
}

// clear test data from db
module.exports.clearDatabase = async () => {
    const collections = mongoose.connections.collections;
    for (const key in collections){
        const collection = collections[key];
        await collection.deleteMany();
    }
}