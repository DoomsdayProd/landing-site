
import { getCollection } from '../../config/database'

export async function searchDatabase(type: string, query: string, options = { limit: 50, skip: 0 }) {
  const collection = await getCollection()

  return await collection
    .find({ [type]: { $regex: query, $options: 'i' } })
    .sort({ date: -1 })
    .skip(options.skip)
    .limit(options.limit)
    .toArray()
}

export async function getSearchCount(type: string, query: string) {
  const collection = await getCollection()

  return await collection.countDocuments({ 
    [type]: { $regex: query, $options: 'i' }
  })
}
