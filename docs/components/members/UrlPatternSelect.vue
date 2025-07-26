<script setup>
import { ref } from 'vue'

const patterns = [
  { id: 'main', label: 'Main Domain', example: 'domain.com' },
  { id: 'subdomain', label: 'Subdomain', example: 'sub.domain.com' },
  { id: 'path', label: 'Specific Path', example: 'https://domain.com/account/' },
  { id: 'custom', label: 'Custom (inc. ports)', example: 'https://domain.com:8080' }
]

const selectedPattern = ref('main')

defineEmits(['select'])
</script>

<template>
  <div class="pattern-select">
    <div class="patterns-grid">
      <div 
        v-for="pattern in patterns" 
        :key="pattern.id"
        class="pattern-card"
        :class="{ active: selectedPattern === pattern.id }"
        @click="selectedPattern = pattern.id"
      >
        <div class="pattern-header">
          <div class="pattern-icon">🔍</div>
          <h3>{{ pattern.label }}</h3>
        </div>
        <code class="pattern-example">{{ pattern.example }}</code>
        <div class="pattern-overlay"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern-select {
  margin-bottom: 1rem;
}

.patterns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.pattern-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.pattern-card:hover {
  transform: translateY(-2px);
  border-color: #00e5ff;
}

.pattern-card.active {
  border-color: #00e5ff;
  background: rgba(0, 229, 255, 0.1);
}

.pattern-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.pattern-icon {
  font-size: 1.2rem;
}

.pattern-header h3 {
  margin: 0;
  font-size: 1rem;
  color: #00e5ff;
}

.pattern-example {
  display: block;
  font-family: monospace;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00e5ff;
  opacity: 0;
  animation: scan 2s linear infinite;
}

.pattern-card.active .pattern-overlay {
  opacity: 0.5;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
</style>