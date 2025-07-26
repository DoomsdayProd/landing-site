<script setup>
defineProps({
  results: Array,
  loading: Boolean
})
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
      <div v-for="result in results" :key="result.url" class="result-card">
        <div class="result-header">
          <span class="url">{{ result.url }}</span>
          <span class="date">{{ result.date }}</span>
        </div>
        <div class="result-content">
          <div class="data-row">
            <span class="label">Login:</span>
            <span class="value">{{ result.login }}</span>
          </div>
          <div class="data-row">
            <span class="label">Password:</span>
            <span class="value">{{ result.password }}</span>
          </div>
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

.url {
  color: #00e5ff;
  font-family: monospace;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.data-row {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 229, 255, 0.1);
}

.label {
  color: #666;
  width: 80px;
}

.value {
  color: #00e5ff;
  font-family: monospace;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00e5ff;
  opacity: 0;
  animation: scan 2s linear infinite;
}

.result-card:hover .scan-line {
  opacity: 0.5;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
</style>