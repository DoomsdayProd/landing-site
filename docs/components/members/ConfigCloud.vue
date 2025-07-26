<script setup>
import ConfigGrid from './config/ConfigGrid.vue'
import ConfigStats from './config/ConfigStats.vue'

const configs = {
  openbullet: { total: 312, updated: '2024-01-20', icon: '🎯' },
  silverbullet: { total: 156, updated: '2024-01-19', icon: '⚡' },
  openbullet2: { total: 267, updated: '2024-01-20', icon: '🚀' },
  bas: { total: 213, updated: '2024-01-18', icon: '🌐' },
  bltools: { total: 281, updated: '2024-01-19', icon: '🛠️' }
}
</script>

<template>
  <div class="config-cloud">
    <div class="cloud-header">
      <div class="matrix-bg"></div>
      <h1 class="neon-text">CONFIG CLOUD</h1>
      <div class="cyber-line"></div>
    </div>

    <ConfigStats :stats="configs" />
    <ConfigGrid :configs="configs" />
  </div>
</template>

<style scoped>
.config-cloud {
  margin-top: 4rem;
}

.cloud-header {
  position: relative;
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;
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
}

.neon-text {
  position: relative;
  font-size: 2.5rem;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
  margin: 0;
}

.cyber-line {
  position: relative;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 1rem auto;
  width: 200px;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>