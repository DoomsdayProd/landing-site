import { MongoClient } from 'mongodb';
import type { ULPResult } from './types';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

if (!uri) {
  throw new Error('Please define MONGODB_URI environment variable');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function searchULP(type: 'url' | 'login' | 'password', query: string): Promise<ULPResult[]> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('ulp_data');

    const results = await collection
      .find({ [type]: { $regex: query, $options: 'i' } })
      .sort({ date: -1 })
      .limit(50)
      .toArray();

    return results as ULPResult[];
  } catch (error) {
    console.error('Database search failed:', error);
    throw error;
  }
}

export async function getULPCount(): Promise<number> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    return await db.collection('ulp_data').countDocuments();
  } catch (error) {
    console.error('Failed to get ULP count:', error);
    throw error;
  }
}

export default clientPromise;
