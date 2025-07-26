
<template>
  <div class="hologram-guide">
    <div class="hologram-grid"></div>
    <div class="header">
      <h1 class="hologram-text">HOLOGRAM GUIDE</h1>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.hologram-guide {
  background: rgba(0, 10, 20, 0.9);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hologram-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: hologramGrid 10s linear infinite;
}

.hologram-text {
  color: #00e5ff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
}

@keyframes hologramGrid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}
</style>
