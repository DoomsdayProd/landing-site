// Database search service
export async function searchULPData(type: 'url' | 'login' | 'password', query: string) {
  try {
    const response = await fetch(`/api/ulp/search?type=${type}&query=${query}`);
    if (!response.ok) {
      throw new Error('Search failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
}