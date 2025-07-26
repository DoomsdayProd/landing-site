<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="tech-card" data-augmented>
    <div class="card-frame"></div>
    <div class="card-content">
      <div class="tech-icon">{{ icon }}</div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="card-overlay"></div>
  </div>
</template>

<style scoped>
.tech-card {
  position: relative;
  padding: 2rem;
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid #4a9eff;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(74, 158, 255, 0.3);
}

.card-frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #4a9eff;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  animation: frameGlitch 2s infinite;
}

.tech-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

@keyframes frameGlitch {
  0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  5% { clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%); }
  10% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}
</style>