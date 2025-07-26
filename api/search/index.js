import { searchDatabase, getSearchCount } from '../../lib/search/service';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, query, limit = 50, skip = 0 } = req.query;

  if (!type || !query) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const [results, total] = await Promise.all([
      searchDatabase(type, query, { limit: Number(limit), skip: Number(skip) }),
      getSearchCount(type, query)
    ]);

    res.status(200).json({
      results,
      total,
      hasMore: total > (Number(skip) + results.length)
    });
  } catch (error) {
    console.error('Search failed:', error);
    res.status(500).json({ error: 'Search failed' });
  }
}