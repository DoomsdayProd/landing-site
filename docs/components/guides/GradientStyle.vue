
<template>
  <div class="gradient-guide">
    <div class="gradient-bg"></div>
    <div class="header">
      <h1>GRADIENT GUIDE</h1>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.gradient-guide {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    rgba(255, 107, 107, 0.2),
    rgba(78, 205, 196, 0.2)
  );
  filter: blur(20px);
  animation: gradientMove 10s ease infinite;
}

h1 {
  color: white;
  text-align: center;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@keyframes gradientMove {
  0% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -20px); }
  100% { transform: translate(0, 0); }
}
</style>
