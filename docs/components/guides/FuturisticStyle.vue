
<template>
  <div class="futuristic-guide">
    <div class="hex-grid"></div>
    <div class="header">
      <h1>FUTURISTIC GUIDE</h1>
      <div class="tech-line"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.futuristic-guide {
  background: #0a0a1a;
  border: 1px solid #4a9eff;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hex-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 0 L45 0 L60 30 L45 60 L15 60' fill='none' stroke='rgba(74, 158, 255, 0.1)'/%3E%3C/svg%3E");
  animation: hexRotate 20s linear infinite;
}

h1 {
  color: #4a9eff;
  text-align: center;
  position: relative;
}

.tech-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #4a9eff, transparent);
  margin: 1rem auto;
  width: 200px;
  position: relative;
}

.tech-line::before {
  content: '';
  position: absolute;
  top: -3px;
  left: 50%;
  width: 10px;
  height: 8px;
  background: #4a9eff;
  transform: translateX(-50%);
  animation: pulse 2s infinite;
}

@keyframes hexRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>
