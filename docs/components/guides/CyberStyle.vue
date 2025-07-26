
<template>
  <div class="cyber-guide">
    <div class="matrix-bg"></div>
    <div class="header">
      <div class="glitch-text" data-text="CYBER GUIDE">CYBER GUIDE</div>
      <div class="scan-line"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.cyber-guide {
  background: #000;
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: matrixScroll 20s linear infinite;
}

.glitch-text {
  font-size: 2rem;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
  position: relative;
  animation: glitch 1s infinite;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00ff00;
  animation: scan 2s linear infinite;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes glitch {
  0% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(2deg); }
  60% { transform: skew(-1deg); }
  80% { transform: skew(3deg); }
  100% { transform: skew(0deg); }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(1000%); }
}
</style>
