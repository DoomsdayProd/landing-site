<template>
  <div class="minimal-guide">
    <div class="header">
      <h1>MINIMAL GUIDE</h1>
      <div class="accent-line"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.minimal-guide {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.minimal-guide:hover {
  transform: translateY(-5px);
}

.accent-line {
  height: 2px;
  background: linear-gradient(90deg, #5b86e5, #36d1dc);
  margin: 1rem 0;
  width: 50px;
  transition: width 0.3s ease;
}

.minimal-guide:hover .accent-line {
  width: 100px;
}

h1 {
  color: #333;
  font-size: 1.5rem;
  margin: 0;
}
</style>
