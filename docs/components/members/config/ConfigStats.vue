<script setup>
import { computed } from 'vue'

const props = defineProps({
  stats: {
    type: Object,
    required: true
  }
})

const totalConfigs = computed(() => 
  Object.values(props.stats).reduce((sum, config) => sum + config.total, 0)
)
</script>

<template>
  <div class="stats-container">
    <div class="total-stats">
      <div class="total-number">{{ totalConfigs }}</div>
      <div class="total-label">Total Configs Available</div>
    </div>
    <div class="stats-grid">
      <div v-for="(data, type) in stats" :key="type" class="stat-item">
        <span class="stat-name">{{ type }}:</span>
        <span class="stat-value">{{ data.total }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-container {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.total-stats {
  text-align: center;
  margin-bottom: 1.5rem;
}

.total-number {
  font-size: 3rem;
  color: #00ff00;
  font-weight: bold;
  text-shadow: 0 0 10px #00ff00;
}

.total-label {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.25rem;
}

.stat-name {
  color: #666;
}

.stat-value {
  color: #00ff00;
  font-family: monospace;
  font-weight: bold;
}
</style>