<script setup>
defineProps({
  configs: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="config-grid">
    <div v-for="(data, type) in configs" :key="type" class="config-card">
      <div class="card-header">
        <span class="icon">{{ data.icon }}</span>
        <h3>{{ type.toUpperCase() }}</h3>
      </div>
      <div class="card-stats">
        <div class="stat">
          <span class="label">Total:</span>
          <span class="value">{{ data.total }}</span>
        </div>
        <div class="stat">
          <span class="label">Updated:</span>
          <span class="value">{{ data.updated }}</span>
        </div>
      </div>
      <button class="download-btn">
        <span class="btn-icon">⬇️</span>
        Download Latest
      </button>
      <div class="scan-line"></div>
    </div>
  </div>
</template>

<style scoped>
.config-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.config-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.config-card:hover {
  transform: translateY(-5px);
  border-color: #00ff00;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.icon {
  font-size: 1.5rem;
}

.card-header h3 {
  margin: 0;
  color: #00ff00;
  font-family: monospace;
}

.card-stats {
  margin-bottom: 1.5rem;
}

.stat {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
}

.label {
  color: #666;
}

.value {
  color: #00ff00;
  font-family: monospace;
}

.download-btn {
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  font-family: monospace;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-2px);
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00ff00;
  opacity: 0;
  animation: scan 2s linear infinite;
}

.config-card:hover .scan-line {
  opacity: 0.5;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
</style>