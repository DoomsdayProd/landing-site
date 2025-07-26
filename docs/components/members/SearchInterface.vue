<script setup>
import { ref } from 'vue'
import SearchFilters from './SearchFilters.vue'
import SearchResults from './SearchResults.vue'
import SearchStats from './SearchStats.vue'
import UrlPatternSelect from './UrlPatternSelect.vue'

const searchQuery = ref('')
const searchType = ref('url')
const urlPattern = ref('main')
const results = ref([])
const isLoading = ref(false)

const handleSearch = async () => {
  isLoading.value = true
  // Simulate search delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  results.value = [
    { url: 'example.com', login: 'user@mail.com', password: '********', date: '2024-01-20' },
    { url: 'test.com', login: 'admin@mail.com', password: '********', date: '2024-01-19' }
  ]
  isLoading.value = false
}

const handlePatternSelect = (pattern) => {
  urlPattern.value = pattern
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
      <UrlPatternSelect 
        v-if="searchType === 'url'"
        @select="handlePatternSelect"
      />
      
      <div class="search-bar">
        <input 
          v-model="searchQuery"
          type="text"
          :placeholder="searchType === 'url' ? 'Enter URL...' : 'Enter search query...'"
          @keyup.enter="handleSearch"
        >
        <button @click="handleSearch" :disabled="isLoading">
          <span v-if="!isLoading">🔍</span>
          <span v-else class="loading">⚡</span>
        </button>
      </div>

      <SearchFilters v-model="searchType" />
      <SearchStats :total="results.length" :type="searchType" />
      <SearchResults 
        :results="results" 
        :loading="isLoading"
      />
    </div>
  </div>
</template>

<style>
/* Previous styles remain unchanged */
</style>
