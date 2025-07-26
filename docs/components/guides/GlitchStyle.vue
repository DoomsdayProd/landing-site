
<template>
  <div class="glitch-guide">
    <div class="header">
      <h1 class="glitch-text" data-text="GLITCH GUIDE">GLITCH GUIDE</h1>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.glitch-guide {
  background: #1a1a1a;
  border: 2px solid #ff00ff;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
}

.glitch-text {
  color: #ff00ff;
  text-align: center;
  position: relative;
  animation: glitch 0.3s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  color: #00ff00;
  animation: glitch 0.3s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-2px);
  opacity: 0.7;
}

.glitch-text::after {
  color: #ff0000;
  animation: glitch 0.3s infinite alternate-reverse;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  transform: translate(2px);
  opacity: 0.7;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
</style>
