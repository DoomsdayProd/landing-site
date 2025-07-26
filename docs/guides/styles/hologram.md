<div class="guide-container">
  <div class="hologram-grid"></div>
  <div class="guide-header">
    <div class="hologram-text">HOLOGRAM STYLE</div>
    <div class="hologram-line"></div>
  </div>

  <AccordionItem type="hologram" title="Style Overview" icon="🌐" status="ACTIVE">
    <div class="style-info">
      <p>The Hologram style creates a futuristic interface with 3D perspective effects and translucent elements.</p>
      <div class="features-list">
        <div class="feature">✓ 3D perspective effects</div>
        <div class="feature">✓ Translucent overlays</div>
        <div class="feature">✓ Grid animations</div>
        <div class="feature">✓ Holographic elements</div>
      </div>
    </div>
  </AccordionItem>

  <div class="demo-section">
    <h2>Style Demo</h2>
    <div class="demo-grid">
      <div class="demo-card">
        <div class="card-header">
          <div class="holo-icon"></div>
          <h3>System Analysis</h3>
        </div>
        <div class="card-content">
          <div class="analysis-grid">
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
          </div>
          <div class="analysis-data">
            <div class="data-row">Alpha: <span>98.2%</span></div>
            <div class="data-row">Beta: <span>87.5%</span></div>
            <div class="data-row">Gamma: <span>92.1%</span></div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <div class="card-header">
          <div class="holo-icon"></div>
          <h3>Network Status</h3>
        </div>
        <div class="card-content">
          <div class="network-display">
            <div class="network-ring"></div>
            <div class="network-data">ONLINE</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.guide-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #001a33, #003366);
  border-radius: 1rem;
  margin: 2rem 0;
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

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.hologram-text {
  font-size: 3rem;
  color: #00e5ff;
  text-shadow: 0 0 10px #00e5ff;
  margin: 0;
  opacity: 0.8;
}

.hologram-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  margin: 2rem auto;
  width: 200px;
  opacity: 0.8;
}

.style-info {
  padding: 1rem;
  background: rgba(0, 229, 255, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 229, 255, 0.2);
  backdrop-filter: blur(10px);
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
  background: rgba(0, 229, 255, 0.05);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform: perspective(1000px) rotateX(5deg);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.holo-icon {
  width: 20px;
  height: 20px;
  border: 2px solid #00e5ff;
  border-radius: 50%;
  position: relative;
}

.holo-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background: #00e5ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: iconPulse 2s infinite;
}

.analysis-grid {
  display: grid;
  gap: 0.5rem;
  margin: 1rem 0;
}

.grid-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  animation: gridScan 2s infinite;
}

.analysis-data {
  font-family: monospace;
  color: #00e5ff;
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
}

.network-display {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.network-ring {
  width: 80px;
  height: 80px;
  border: 2px solid #00e5ff;
  border-radius: 50%;
  position: relative;
  animation: ringRotate 4s linear infinite;
}

.network-ring::before,
.network-ring::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 70%;
  border: 2px solid #00e5ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.network-data {
  font-family: monospace;
  color: #00e5ff;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #00e5ff;
}

@keyframes hologramGrid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}

@keyframes iconPulse {
  0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
  100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
}

@keyframes gridScan {
  0% { transform: scaleX(0); opacity: 0; }
  50% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(0); opacity: 0; }
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>