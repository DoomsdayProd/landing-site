# Gradient Style Guide

<div class="guide-container">
  <div class="gradient-orbs">
    <div class="orb primary"></div>
    <div class="orb secondary"></div>
    <div class="orb accent"></div>
  </div>
  
  <div class="guide-header">
    <h1 class="gradient-text">Gradient Style</h1>
    <div class="gradient-line"></div>
  </div>

  <div class="interactive-palette">
    <div class="palette-header">
      <h2>Interactive Color Palette</h2>
      <p>Click to copy gradient values</p>
    </div>
    <div class="gradient-grid">
      <div class="gradient-card" data-gradient="linear-gradient(45deg, #FF6B6B, #4ECDC4)" @click="copyGradient">
        <div class="gradient-preview sunset"></div>
        <div class="gradient-info">
          <span class="gradient-name">Sunset Breeze</span>
          <code class="gradient-value">linear-gradient(45deg, #FF6B6B, #4ECDC4)</code>
        </div>
        <div class="copy-indicator">Copied!</div>
      </div>
      <div class="gradient-card" data-gradient="linear-gradient(45deg, #A8E6CF, #FFD3B6)" @click="copyGradient">
        <div class="gradient-preview pastel"></div>
        <div class="gradient-info">
          <span class="gradient-name">Pastel Dream</span>
          <code class="gradient-value">linear-gradient(45deg, #A8E6CF, #FFD3B6)</code>
        </div>
        <div class="copy-indicator">Copied!</div>
      </div>
      <div class="gradient-card" data-gradient="linear-gradient(45deg, #00B4DB, #0083B0)" @click="copyGradient">
        <div class="gradient-preview ocean"></div>
        <div class="gradient-info">
          <span class="gradient-name">Ocean Depths</span>
          <code class="gradient-value">linear-gradient(45deg, #00B4DB, #0083B0)</code>
        </div>
        <div class="copy-indicator">Copied!</div>
      </div>
    </div>
  </div>

  <div class="gradient-showcase">
    <div class="showcase-item">
      <div class="morph-gradient"></div>
      <h3>Morphing Gradients</h3>
      <p>Smooth transitions between colors</p>
    </div>
    <div class="showcase-item">
      <div class="pulse-gradient"></div>
      <h3>Pulsing Effects</h3>
      <p>Dynamic gradient animations</p>
    </div>
    <div class="showcase-item">
      <div class="wave-gradient"></div>
      <h3>Wave Patterns</h3>
      <p>Flowing gradient movements</p>
    </div>
  </div>

  <div class="gradient-examples">
    <div class="example-buttons">
      <button class="gradient-button primary">Primary Action</button>
      <button class="gradient-button secondary">Secondary Action</button>
      <button class="gradient-button accent">Accent Action</button>
    </div>
    <div class="example-cards">
      <div class="gradient-effect-card">
        <div class="card-content">
          <h3>Hover Effects</h3>
          <p>Interactive gradient transitions</p>
        </div>
      </div>
      <div class="gradient-effect-card">
        <div class="card-content">
          <h3>Glow Effects</h3>
          <p>Dynamic gradient shadows</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script setup>
const copyGradient = (event) => {
  const gradient = event.currentTarget.dataset.gradient
  navigator.clipboard.writeText(gradient)
  
  const indicator = event.currentTarget.querySelector('.copy-indicator')
  indicator.classList.add('show')
  setTimeout(() => {
    indicator.classList.remove('show')
  }, 2000)
}
</script>

<style>
.guide-container {
  position: relative;
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.gradient-orbs {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  animation: float 20s infinite;
}

.orb.primary {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  top: -100px;
  left: -100px;
}

.orb.secondary {
  width: 250px;
  height: 250px;
  background: linear-gradient(45deg, #A8E6CF, #FFD3B6);
  bottom: -50px;
  right: -50px;
  animation-delay: -5s;
}

.orb.accent {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #00B4DB, #0083B0);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -10s;
}

.guide-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.gradient-text {
  font-size: 3rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.gradient-line {
  height: 3px;
  background: linear-gradient(90deg, transparent, #FF6B6B, #4ECDC4, transparent);
  margin: 1rem auto;
  width: 200px;
  animation: shimmer 3s infinite;
}

.gradient-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.gradient-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.gradient-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.gradient-preview {
  height: 150px;
  transition: all 0.3s ease;
}

.gradient-preview.sunset {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
}

.gradient-preview.pastel {
  background: linear-gradient(45deg, #A8E6CF, #FFD3B6);
}

.gradient-preview.ocean {
  background: linear-gradient(45deg, #00B4DB, #0083B0);
}

.gradient-info {
  padding: 1rem;
}

.gradient-name {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.gradient-value {
  font-size: 0.8rem;
  color: #666;
}

.copy-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.copy-indicator.show {
  opacity: 1;
  transform: translateY(0);
}

.gradient-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.showcase-item {
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.morph-gradient {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  animation: morphGradient 10s infinite;
}

.pulse-gradient {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #A8E6CF, #FFD3B6);
  animation: pulseGradient 3s infinite;
}

.wave-gradient {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #00B4DB, #0083B0);
  animation: waveGradient 5s infinite;
}

.example-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.gradient-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gradient-button.primary {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
}

.gradient-button.secondary {
  background: linear-gradient(45deg, #A8E6CF, #FFD3B6);
}

.gradient-button.accent {
  background: linear-gradient(45deg, #00B4DB, #0083B0);
}

.gradient-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.example-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.gradient-effect-card {
  padding: 2rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.gradient-effect-card:hover {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  transform: translateY(-5px);
}

.gradient-effect-card:hover .card-content {
  color: white;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(10px, -10px); }
  50% { transform: translate(-5px, 15px); }
  75% { transform: translate(-15px, -5px); }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes morphGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulseGradient {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes waveGradient {
  0% { clip-path: circle(50% at 50% 50%); }
  50% { clip-path: circle(45% at 50% 50%); }
  100% { clip-path: circle(50% at 50% 50%); }
}

@media (max-width: 768px) {
  .gradient-grid,
  .gradient-showcase,
  .example-cards {
    grid-template-columns: 1fr;
  }

  .example-buttons {
    flex-direction: column;
  }

  .gradient-text {
    font-size: 2rem;
  }
}
</style>
