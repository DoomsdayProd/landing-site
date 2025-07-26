<script setup lang="ts">
const props = defineProps<{
  operator: string
  description: string
}>()
</script>

<template>
  <div class="dork-operator">
    <code>{{ operator }}</code>
    <span>{{ description }}</span>
  </div>
</template>

<style scoped>
.dork-operator {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
  transition: all 0.3s ease;
}

.dork-operator:hover {
  transform: translateX(10px);
  border-color: #00ff00;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

code {
  color: #00ff00;
  font-family: monospace;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.25rem;
}
</style>
