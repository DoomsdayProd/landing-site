# Futuristic Guide

<template>
  <div class="guide-container">
    <div class="hex-grid"></div>
    <div class="header">
      <h1>FUTURISTIC GUIDE</h1>
      <div class="tech-line"></div>
    </div>

    <div class="tech-grid">
      <div class="tech-card" data-augmented>
        <div class="card-frame"></div>
        <div class="card-content">
          <div class="tech-icon">⚡</div>
          <h3>Neural Interface</h3>
          <p>Advanced human-machine interaction</p>
        </div>
        <div class="card-overlay"></div>
      </div>
      <div class="tech-card" data-augmented>
        <div class="card-frame"></div>
        <div class="card-content">
          <div class="tech-icon">🔮</div>
          <h3>Quantum Core</h3>
          <p>Next-gen processing power</p>
        </div>
        <div class="card-overlay"></div>
      </div>
      <div class="tech-card" data-augmented>
        <div class="card-frame"></div>
        <div class="card-content">
          <div class="tech-icon">🌐</div>
          <h3>Holo Display</h3>
          <p>3D projection interface</p>
        </div>
        <div class="card-overlay"></div>
      </div>
    </div>

    <div class="data-stream">
      <div class="stream-content">
        <div class="data-line">INITIALIZING NEURAL NETWORK</div>
        <div class="data-line">QUANTUM PROCESSORS ONLINE</div>
        <div class="data-line">ESTABLISHING SECURE CONNECTION</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.guide-container {
  position: relative;
  padding: 2rem;
  background: #0a0a1a;
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  color: #4a9eff;
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

.header {
  text-align: center;
  position: relative;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3rem;
  color: #4a9eff;
  text-shadow: 0 0 10px rgba(74, 158, 255, 0.5);
  margin: 0;
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

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.tech-card {
  position: relative;
  padding: 2rem;
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid #4a9eff;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(74, 158, 255, 0.3);
}

.card-frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #4a9eff;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  animation: frameGlitch 2s infinite;
}

.tech-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.data-stream {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid #4a9eff;
  border-radius: 0.5rem;
}

.data-line {
  font-family: monospace;
  color: #4a9eff;
  margin: 0.5rem 0;
  animation: dataFade 2s infinite;
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

@keyframes frameGlitch {
  0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  5% { clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%); }
  10% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}

@keyframes dataFade {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>
