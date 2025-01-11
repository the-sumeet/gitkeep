import { MongoClient, ServerApiVersion } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';
import { MONGODB_NAME } from './constants';

const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function connectToDb() {
    try {
        await client.connect();
        return client.db(MONGODB_NAME);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

export default client.db()

export const parseObjId = (record: any) => {
    if (record && record._id) {
        record._id = record._id.toString();
    }
    return record;
}
