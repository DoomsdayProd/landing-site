<script setup lang="ts">
defineProps<{
  modelValue: 'url' | 'login' | 'password'
}>();

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="search-filters">
    <label class="filter-option">
      <input 
        type="radio" 
        value="url"
        :checked="modelValue === 'url'"
        @change="$emit('update:modelValue', 'url')"
      >
      <span>URL</span>
    </label>
    <label class="filter-option">
      <input 
        type="radio" 
        value="login"
        :checked="modelValue === 'login'"
        @change="$emit('update:modelValue', 'login')"
      >
      <span>Login</span>
    </label>
    <label class="filter-option">
      <input 
        type="radio" 
        value="password"
        :checked="modelValue === 'password'"
        @change="$emit('update:modelValue', 'password')"
      >
      <span>Password</span>
    </label>
  </div>
</template>

<style scoped>
.search-filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  color: #00e5ff;
  cursor: pointer;
}

.filter-option input {
  display: none;
}

.filter-option input:checked + span {
  color: #fff;
}
</style>