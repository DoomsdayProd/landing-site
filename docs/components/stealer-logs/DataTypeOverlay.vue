<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
  title: string
  icon: string
  details: {
    description: string
    risks: string[]
    tips: string[]
  }
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <div class="overlay" :class="{ active: isOpen }" @click.self="emit('close')">
    <div class="overlay-content">
      <button class="close-btn" @click="emit('close')">×</button>
      
      <div class="overlay-header">
        <span class="header-icon">{{ icon }}</span>
        <h3>{{ title }}</h3>
      </div>
      
      <p class="description">{{ details.description }}</p>
      
      <div class="details-section">
        <div class="risks">
          <h4>⚠️ Security Risks</h4>
          <ul>
            <li v-for="(risk, index) in details.risks" :key="index">
              {{ risk }}
            </li>
          </ul>
        </div>
        
        <div class="tips">
          <h4>💡 Analysis Tips</h4>
          <ul>
            <li v-for="(tip, index) in details.tips" :key="index">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="scan-line"></div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.overlay-content {
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid #00ff00;
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  position: relative;
  overflow: hidden;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #00ff00;
  font-size: 1.5rem;
  cursor: pointer;
}

.overlay-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.header-icon {
  font-size: 2rem;
}

.description {
  color: #a8b2c3;
  margin-bottom: 2rem;
}

.details-section {
  display: grid;
  gap: 2rem;
}

.risks h4, .tips h4 {
  color: #00ff00;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.risks ul, .tips ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.risks li, .tips li {
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
  color: #a8b2c3;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  animation: scanLine 2s linear infinite;
}

@keyframes scanLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(300%); }
}
</style>