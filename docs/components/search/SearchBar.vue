<script setup lang="ts">
const props = defineProps<{
  type: string
  query: string
}>()

const emit = defineEmits(['update:query', 'search'])

const handleSearch = () => {
  emit('search')
}
</script>

<template>
  <div class="search-bar">
    <input 
      :value="query"
      @input="e => emit('update:query', (e.target as HTMLInputElement).value)"
      type="text"
      :placeholder="`Search by ${type}...`"
      @keyup.enter="handleSearch"
    >
    <button @click="handleSearch">
      <span>🔍</span>
    </button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.search-bar input {
  flex: 1;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  font-family: monospace;
}

.search-bar button {
  padding: 0.75rem 1.5rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-bar button:hover {
  background: rgba(0, 255, 0, 0.2);
}
</style>