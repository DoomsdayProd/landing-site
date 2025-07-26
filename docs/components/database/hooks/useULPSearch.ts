import { ref } from 'vue';
import type { ULPResult, SearchType } from '../types';
import { searchULP } from '../services/ulpService';

export function useULPSearch() {
  const results = ref<ULPResult[]>([]);
  const isLoading = ref(false);
  const error = ref('');

  async function search(type: SearchType, query: string) {
    if (!query.trim()) return;
    
    isLoading.value = true;
    error.value = '';
    
    try {
      results.value = await searchULP(type, query);
    } catch (err) {
      console.error('Search failed:', err);
      error.value = 'Search failed. Please try again.';
      results.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  return {
    results,
    isLoading,
    error,
    search
  };
}
