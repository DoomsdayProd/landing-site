<script setup lang="ts">
defineProps<{
  lines: string[]
}>()
</script>

<template>
  <div class="data-stream">
    <div class="stream-content">
      <div v-for="(line, index) in lines" 
           :key="index" 
           class="data-line">{{ line }}</div>
    </div>
  </div>
</template>

<style scoped>
.data-stream {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid #4a9eff;
  border-radius: 0.5rem;
}

.data-line {
  font-family: monospace;
  color: #4a9eff;
  margin: 0.5rem 0;
  animation: dataFade 2s infinite;
}

@keyframes dataFade {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>