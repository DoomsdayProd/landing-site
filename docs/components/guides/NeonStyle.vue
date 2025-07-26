
<template>
  <div class="neon-guide">
    <div class="header">
      <h1 class="neon-text">NEON GUIDE</h1>
      <div class="neon-line"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.neon-guide {
  background: linear-gradient(45deg, #000022, #001133);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
}

.neon-text {
  color: #00e5ff;
  text-shadow: 
    0 0 5px #00e5ff,
    0 0 10px #00e5ff,
    0 0 20px #00e5ff;
  text-align: center;
  animation: neonPulse 2s infinite;
}

.neon-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  margin: 1rem auto;
  width: 200px;
  animation: neonPulse 2s infinite alternate;
}

@keyframes neonPulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}
</style>
