<script setup lang="ts">
import { ref } from 'vue'
import SearchFilters from './SearchFilters.vue'
import SearchResults from './SearchResults.vue'
import { searchULP } from './DatabaseService'
import type { ULPResult } from './types'

const searchQuery = ref('')
const searchType = ref<'url' | 'login' | 'password'>('url')
const results = ref<ULPResult[]>([])
const isLoading = ref(false)
const error = ref('')

async function handleSearch() {
  if (!searchQuery.value.trim()) return
  
  isLoading.value = true
  error.value = ''
  
  try {
    results.value = await searchULP(searchType.value, searchQuery.value)
  } catch (err) {
    console.error('Search failed:', err)
    error.value = 'Search failed. Please try again.'
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
      <h1 class="neon-text">ULP DATABASE SEARCH</h1>
      <div class="cyber-line"></div>
    </div>

    <div class="search-container">
      <SearchFilters v-model="searchType" />
      
      <div class="search-bar">
        <input 
          v-model="searchQuery"
          type="text"
          :placeholder="`Search by ${searchType}...`"
          @keyup.enter="handleSearch"
        >
        <button @click="handleSearch" :disabled="isLoading">
          <span v-if="!isLoading">🔍</span>
          <span v-else class="loading">⚡</span>
        </button>
      </div>

      <div v-if="error" class="error-message">{{ error }}</div>

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

.search-bar {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.search-bar input {
  flex: 1;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  font-family: monospace;
}

.search-bar button {
  padding: 0.75rem 1.5rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-bar button:hover:not(:disabled) {
  background: rgba(0, 255, 0, 0.2);
}

.error-message {
  color: #ff0000;
  text-align: center;
  padding: 1rem;
  font-family: monospace;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>