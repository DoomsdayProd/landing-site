<script setup lang="ts">
const props = defineProps<{
  title: string
  query: string
  notes: string[]
}>()
</script>

<template>
  <div class="search-pattern">
    <div class="pattern-header">
      <h4>{{ title }}</h4>
      <code>{{ query }}</code>
    </div>
    <div class="pattern-notes">
      <span v-for="note in notes" :key="note" class="note">{{ note }}</span>
    </div>
  </div>
</template>

<style scoped>
.search-pattern {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
  transition: all 0.3s ease;
}

.search-pattern:hover {
  transform: translateY(-5px);
  border-color: #00ff00;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.pattern-header code {
  display: block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.25rem;
  color: #00ff00;
  font-family: monospace;
}

.pattern-notes {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.note {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00ff00;
}
</style>
