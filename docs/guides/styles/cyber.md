<div class="guide-container">
  <div class="cyber-grid"></div>
  <div class="guide-header">
    <div class="neon-text">CYBER STYLE</div>
    <div class="cyber-line"></div>
  </div>

  <AccordionItem type="cyber" title="Style Overview" icon="💻" status="ACTIVE">
    <div class="style-info">
      <p>The Cyber style features a dark, tech-inspired design with neon green accents and matrix-like animations.</p>
      <div class="features-list">
        <div class="feature">✓ Matrix background effects</div>
        <div class="feature">✓ Neon green accents</div>
        <div class="feature">✓ Scan line animations</div>
        <div class="feature">✓ Tech-inspired elements</div>
      </div>
    </div>
  </AccordionItem>

  <div class="demo-section">
    <h2>Style Demo</h2>
    <div class="demo-grid">
      <div class="demo-card">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>System Status</h3>
        </div>
        <div class="card-content">
          <div class="status-line">CPU: <span class="value">87%</span></div>
          <div class="status-line">RAM: <span class="value">6.2GB</span></div>
          <div class="status-line">NET: <span class="value">152Mbps</span></div>
        </div>
        <div class="scan-line"></div>
      </div>
      <div class="demo-card">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>Security Level</h3>
        </div>
        <div class="card-content">
          <div class="security-meter">
            <div class="meter-fill"></div>
          </div>
          <div class="security-status">MAXIMUM</div>
        </div>
        <div class="scan-line"></div>
      </div>
    </div>
  </div>
</div>

<style>
.guide-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
}

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.neon-text {
  font-size: 3rem;
  color: #00ff00;
  text-shadow: 
    0 0 5px #00ff00,
    0 0 10px #00ff00,
    0 0 20px #00ff00;
  margin: 0;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 2rem auto;
  width: 200px;
}

.style-info {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
}

.features-list {
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
}

.feature {
  padding: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.25rem;
  font-family: monospace;
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
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
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
  background: #00ff00;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-line {
  font-family: monospace;
  color: #666;
  margin: 0.5rem 0;
}

.value {
  color: #00ff00;
}

.security-meter {
  height: 4px;
  background: rgba(0, 255, 0, 0.2);
  border-radius: 2px;
  margin: 1rem 0;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  width: 85%;
  background: #00ff00;
  animation: meterPulse 2s infinite;
}

.security-status {
  font-family: monospace;
  color: #00ff00;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00ff00;
  opacity: 0.5;
  animation: scan 2s linear infinite;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

@keyframes meterPulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
</style>
