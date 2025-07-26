```vue
<script setup>
defineProps({
  tier: {
    type: String,
    required: true
  },
  details: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div 
    class="tier-card"
    :class="{ active: isActive }"
    :data-tier="tier"
  >
    <div class="tier-glow"></div>
    <div class="tier-content">
      <div class="tier-icon">{{ details.icon }}</div>
      <h3>{{ tier.charAt(0).toUpperCase() + tier.slice(1) }}</h3>
      <ul class="feature-list">
        <li v-for="feature in details.features" :key="feature">
          <span class="check">✓</span>
          {{ feature }}
        </li>
      </ul>
      <PricingButton :tier="tier" :icon="details.icon" />
    </div>
    <div class="scan-line"></div>
  </div>
</template>

<style scoped>
.tier-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00e5ff;
  border-radius: 1rem;
  padding: 1.25rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tier-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.3);
}

.tier-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tier-card:hover .tier-glow {
  opacity: 1;
}

.tier-content {
  position: relative;
  z-index: 1;
}

.tier-icon {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0;
  color: #a8b2c3;
  border-bottom: 1px solid rgba(0, 229, 255, 0.1);
  font-size: 0.9rem;
}

.check {
  color: #00e5ff;
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

.tier-card:hover .scan-line {
  opacity: 0.5;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
</style>
```