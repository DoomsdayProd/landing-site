<div class="guide-container">
  <div class="neon-grid"></div>
  <div class="guide-header">
    <div class="neon-text">NEON STYLE</div>
    <div class="neon-line"></div>
  </div>

  <AccordionItem type="neon" title="Style Overview" icon="💫" status="ACTIVE">
    <div class="style-info">
      <p>The Neon style features vibrant, glowing elements with electric blue accents and smooth animations.</p>
      <div class="features-list">
        <div class="feature">✓ Neon glow effects</div>
        <div class="feature">✓ Electric blue accents</div>
        <div class="feature">✓ Pulsing animations</div>
        <div class="feature">✓ Gradient overlays</div>
      </div>
    </div>
  </AccordionItem>

  <div class="demo-section">
    <h2>Style Demo</h2>
    <div class="demo-grid">
      <div class="demo-card">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>Energy Level</h3>
        </div>
        <div class="card-content">
          <div class="energy-meter">
            <div class="meter-fill"></div>
          </div>
          <div class="energy-value">92%</div>
        </div>
      </div>
      <div class="demo-card">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>Power Output</h3>
        </div>
        <div class="card-content">
          <div class="power-grid">
            <div class="power-line"></div>
            <div class="power-line"></div>
            <div class="power-line"></div>
          </div>
          <div class="power-value">1.21 GW</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.guide-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000033, #000066);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.neon-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridPulse 4s ease infinite;
}

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.neon-text {
  font-size: 3rem;
  color: #00e5ff;
  text-shadow: 
    0 0 5px #00e5ff,
    0 0 10px #00e5ff,
    0 0 20px #00e5ff;
  margin: 0;
}

.neon-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  margin: 2rem auto;
  width: 200px;
  animation: linePulse 2s infinite;
}

.style-info {
  padding: 1rem;
  background: rgba(0, 229, 255, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 229, 255, 0.2);
}

.features-list {
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
}

.feature {
  padding: 0.5rem;
  background: rgba(0, 229, 255, 0.1);
  border-radius: 0.25rem;
  font-family: monospace;
  color: #00e5ff;
}

.demo-section {
  margin-top: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.demo-card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.status-light {
  width: 8px;
  height: 8px;
  background: #00e5ff;
  border-radius: 50%;
  animation: glow 2s infinite;
}

.energy-meter {
  height: 4px;
  background: rgba(0, 229, 255, 0.2);
  border-radius: 2px;
  margin: 1rem 0;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  width: 92%;
  background: #00e5ff;
  animation: energyPulse 2s infinite;
}

.energy-value {
  font-family: monospace;
  color: #00e5ff;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #00e5ff;
}

.power-grid {
  display: grid;
  gap: 0.5rem;
  margin: 1rem 0;
}

.power-line {
  height: 2px;
  background: #00e5ff;
  animation: powerFlow 2s infinite;
}

.power-value {
  font-family: monospace;
  color: #00e5ff;
  text-align: center;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #00e5ff;
}

@keyframes gridPulse {
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
}

@keyframes linePulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

@keyframes glow {
  0% { box-shadow: 0 0 5px #00e5ff; }
  50% { box-shadow: 0 0 20px #00e5ff; }
  100% { box-shadow: 0 0 5px #00e5ff; }
}

@keyframes energyPulse {
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
}

@keyframes powerFlow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>
