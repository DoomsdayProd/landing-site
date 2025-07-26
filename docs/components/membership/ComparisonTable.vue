```vue
<script setup>
defineProps({
  tiers: {
    type: Object,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="comparison-table" :class="{ active: isVisible }">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th v-for="(tier, key) in tiers" :key="key">
            {{ key.charAt(0).toUpperCase() + key.slice(1) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tool Access</td>
          <td>Basic</td>
          <td>Advanced</td>
          <td>Full</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td>Daily Checks</td>
          <td>50</td>
          <td>200</td>
          <td>500</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td>Support Level</td>
          <td>Community</td>
          <td>Priority</td>
          <td>24/7</td>
          <td>Direct</td>
        </tr>
        <tr>
          <td>Custom Solutions</td>
          <td>❌</td>
          <td>❌</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.comparison-table {
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease;
}

.comparison-table.active {
  max-height: 500px;
  margin-top: 2rem;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 0.75rem;
  text-align: center;
  border: 1px solid rgba(0, 229, 255, 0.1);
  font-size: 0.9rem;
}

.comparison-table th {
  background: rgba(0, 229, 255, 0.1);
  color: #00e5ff;
}
</style>
```