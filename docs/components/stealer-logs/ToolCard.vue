<script setup lang="ts">
const props = defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="tool-card">
    <div class="tool-icon">{{ icon }}</div>
    <div class="tool-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="tool-overlay">
      <div class="overlay-grid"></div>
    </div>
  </div>
</template>

<style scoped>
.tool-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.2);
}

.tool-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.tool-content {
  position: relative;
  z-index: 1;
}

.tool-content h3 {
  color: #00e5ff;
  margin: 0 0 0.5rem 0;
}

.tool-content p {
  color: #a8b2c3;
  margin: 0;
}

.tool-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.overlay-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 10px 10px;
  animation: gridScroll 20s linear infinite;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(10px, 10px); }
}
</style>