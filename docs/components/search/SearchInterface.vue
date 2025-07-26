```vue
<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import SearchResults from './SearchResults.vue'
import SearchFilters from './SearchFilters.vue'
import { searchDatabase } from '../../../lib/search/service'

const query = ref('')
const searchType = ref('url')
const results = ref([])
const isLoading = ref(false)

const handleSearch = async () => {
  if (!query.value.trim()) return
  
  isLoading.value = true
  try {
    results.value = await searchDatabase(searchType.value, query.value)
  } catch (err) {
    console.error('Search failed:', err)
    results.value = []
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="search-interface">
    <div class="search-header">
      <div class="matrix-bg"></div>
      <h1 class="neon-text">DATABASE SEARCH</h1>
      <div class="cyber-line"></div>
    </div>

    <div class="search-container">
      <SearchFilters 
        :type="searchType"
        @update:type="searchType = $event"
      />
      
      <SearchBar
        :type="searchType"
        :query="query"
        @update:query="query = $event"
        @search="handleSearch"
      />

      <SearchResults 
        :results="results"
        :loading="isLoading"
      />
    </div>
  </div>
</template>

<style scoped>
.search-interface {
  position: relative;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: matrixScroll 20s linear infinite;
  pointer-events: none;
}

.search-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.neon-text {
  font-size: 3rem;
  color: #00ff00;
  text-shadow: 
    0 0 5px #00ff00,
    0 0 10px #00ff00,
    0 0 20px #00ff00;
  margin: 0;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 1rem auto;
  width: 200px;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>
```