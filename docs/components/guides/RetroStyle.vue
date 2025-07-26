
<template>
  <div class="retro-guide">
    <div class="scanlines"></div>
    <div class="header">
      <h1 class="retro-text">RETRO GUIDE</h1>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.retro-guide {
  background: #000;
  border: 1px solid #ff6b6b;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  font-family: 'Courier New', monospace;
}

.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.5) 51%
  );
  background-size: 100% 4px;
  animation: scanline 10s linear infinite;
  pointer-events: none;
}

.retro-text {
  color: #ff6b6b;
  text-align: center;
  text-shadow: 2px 2px #000;
  animation: textFlicker 2s infinite;
}

@keyframes scanline {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

@keyframes textFlicker {
  0% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.3; }
  94% { opacity: 1; }
  100% { opacity: 1; }
}
</style>
