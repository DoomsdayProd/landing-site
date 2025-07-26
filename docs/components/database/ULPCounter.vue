<script setup lang="ts">
import { ref, onMounted } from 'vue'

const count = ref(1337420)
const lastUpdated = ref('1/3/2025')
const dbStatus = ref({
  connected: true,
  name: 'ULP_MASTER_DB',
  status: 'ONLINE'
})

const loading = ref(true)
const error = ref('')

async function fetchDBStatus() {
  try {
    // In production this would fetch from real API
    loading.value = false
  } catch (err) {
    error.value = 'Failed to fetch database status'
    console.error(err)
  }
}

onMounted(() => {
  fetchDBStatus()
})
</script>

<template>
  <div class="ulp-counter">
    <div v-if="loading" class="loading">
      <div class="scan-line"></div>
      INITIALIZING DATABASE CONNECTION...
    </div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="counter-container">
      <div class="status-section">
        <div class="status-indicator" :class="{ active: dbStatus.connected }">
          <div class="pulse-ring"></div>
        </div>
        <div class="status-info">
          <div class="db-name">{{ dbStatus.name }}</div>
          <div class="db-status">{{ dbStatus.status }}</div>
        </div>
      </div>

      <div class="count-section">
        <div class="count-label">ULP Database Lines</div>
        <div class="count-value">{{ count.toLocaleString() }}</div>
        <div class="count-updated">Last Updated: {{ lastUpdated }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ulp-counter {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.counter-container {
  display: grid;
  gap: 1.5rem;
}

.status-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.5rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
  background: #ff0000;
  border-radius: 50%;
  position: relative;
}

.status-indicator.active {
  background: #00ff00;
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border: 2px solid #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.db-name {
  color: #00ff00;
  font-family: monospace;
  font-size: 0.9rem;
}

.db-status {
  color: #00ff00;
  font-family: monospace;
  font-weight: bold;
}

.count-section {
  text-align: center;
}

.count-label {
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.count-value {
  color: #00ff00;
  font-size: 2.5rem;
  font-family: monospace;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  margin: 0.5rem 0;
}

.count-updated {
  color: #666;
  font-size: 0.8rem;
  font-family: monospace;
}

.loading {
  color: #00ff00;
  font-family: monospace;
  text-align: center;
}

.scan-line {
  height: 2px;
  background: #00ff00;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: scan 2s linear infinite;
}

.error {
  color: #ff0000;
  font-family: monospace;
  text-align: center;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}
</style>