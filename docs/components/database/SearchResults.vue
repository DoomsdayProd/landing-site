<script setup lang="ts">
defineProps<{
  results: Array<{
    url?: string;
    login?: string;
    password?: string;
    date: string;
  }>;
  loading: boolean;
}>();
</script>

<template>
  <div class="search-results">
    <div v-if="loading" class="loading-state">
      <div class="scanner"></div>
      <p>SCANNING DATABASE...</p>
    </div>
    
    <div v-else-if="results.length === 0" class="no-results">
      <p>No results found</p>
    </div>
    
    <div v-else class="results-grid">
      <div v-for="result in results" 
           :key="result.url || result.login" 
           class="result-card">
        <div class="result-header">
          <span v-if="result.url" class="url">{{ result.url }}</span>
          <span v-if="result.login" class="login">{{ result.login }}</span>
          <span class="date">{{ result.date }}</span>
        </div>
        <div class="scan-line"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-results {
  margin-top: 2rem;
}

.loading-state {
  text-align: center;
  padding: 2rem;
  color: #00e5ff;
}

.scanner {
  width: 100%;
  height: 2px;
  background: #00e5ff;
  animation: scan 2s linear infinite;
}

.results-grid {
  display: grid;
  gap: 1rem;
}

.result-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  overflow: hidden;
}

.result-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.url, .login {
  color: #00e5ff;
  font-family: monospace;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00e5ff;
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>