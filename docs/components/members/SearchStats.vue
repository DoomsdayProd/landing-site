<script setup>
defineProps({
  total: Number,
  type: String
})
</script>

<template>
  <div class="search-stats">
    <div class="stat">
      <span class="label">Results:</span>
      <span class="value">{{ total }}</span>
    </div>
    <div class="stat">
      <span class="label">Type:</span>
      <span class="value">{{ type.toUpperCase() }}</span>
    </div>
  </div>
</template>

<style scoped>
.search-stats {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.label {
  color: #666;
}

.value {
  color: #00e5ff;
  font-family: monospace;
  font-weight: bold;
}
</style>