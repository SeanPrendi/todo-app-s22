import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

// const mongooseOpts = {
//     useNewUrlParser: true,
//     autoReconnect: true,
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 1000,
//     poolSize: 10,
// };

// const mongod = new MongoMemoryServer(mongooseOpts);
const testDB = new MongoMemoryServer();

/**
 * Connect to mock memory db.
 */
export const connect = async () => {
    await testDB.start();
    const uri = await testDB.getUri();
    await mongoose.connect(uri);
}

/**
 * Close db connection
 */
export const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await testDB.stop();
}

/**
 * Delete db collections
 */
export const clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
}