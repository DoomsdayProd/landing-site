<script setup lang="ts">
const props = defineProps<{
  title: string
  icon: string
  description: string
  items: string[]
}>()
</script>

<template>
  <div class="data-card">
    <div class="card-glow"></div>
    <div class="card-header">
      <span class="card-icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
    </div>
    <p class="description">{{ description }}</p>
    <ul class="data-list">
      <li v-for="(item, index) in items" :key="index" class="data-item">
        <div class="item-content">{{ item }}</div>
        <div class="scan-line"></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.data-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.data-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.data-card:hover .card-glow {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-icon {
  font-size: 1.5rem;
}

.description {
  color: #a8b2c3;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.data-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.data-item {
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.data-item:last-child {
  border-bottom: none;
}

.item-content {
  position: relative;
  z-index: 1;
  color: #a8b2c3;
  transition: color 0.3s ease;
}

.data-item:hover .item-content {
  color: #00ff00;
}

.scan-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  animation: scanLine 2s linear infinite;
  opacity: 0;
}

.data-item:hover .scan-line {
  opacity: 1;
}

@keyframes scanLine {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>