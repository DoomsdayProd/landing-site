import { clientPromise, dbName } from '../config/connection';
import type { ULPResult, SearchType } from '../types';

export async function searchULP(type: SearchType, query: string): Promise<ULPResult[]> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('ulp_data');

    return await collection
      .find({ [type]: { $regex: query, $options: 'i' } })
      .sort({ date: -1 })
      .limit(50)
      .toArray() as ULPResult[];
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