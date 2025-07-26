<div class="cyber-container">
  <div class="matrix-bg"></div>
  
  <div class="cyber-header">
    <div class="neon-text" data-text="FANATICS">FANATICS</div>
    <div class="cyber-line"></div>
    <div class="status-bar">
      <div class="status-item">
        <span class="label">STATUS</span>
        <span class="value">ACTIVE</span>
      </div>
      <div class="status-item">
        <span class="label">SUCCESS</span>
        <span class="value">98.5%</span>
      </div>
      <div class="status-item">
        <span class="label">REGION</span>
        <span class="value">GLOBAL</span>
      </div>
    </div>
  </div>

  <div class="cyber-grid">
    <div class="grid-item">
      <div class="item-header">
        <span class="icon">🎯</span>
        <h3>Target Data</h3>
      </div>
      <div class="item-content">
        <div class="data-line">Domain: <span class="highlight">fanatics.com</span></div>
        <div class="data-line">Type: <span class="highlight">Sports Retail</span></div>
        <div class="data-line">Security: <span class="highlight">Medium</span></div>
      </div>
    </div>
    <div class="grid-item">
      <div class="item-header">
        <span class="icon">💳</span>
        <h3>Payment Info</h3>
      </div>
      <div class="item-content">
        <div class="data-line">Cards: <span class="highlight">All Major</span></div>
        <div class="data-line">PayPal: <span class="highlight">Enabled</span></div>
        <div class="data-line">Gift Cards: <span class="highlight">Digital</span></div>
      </div>
    </div>
    <div class="grid-item">
      <div class="item-header">
        <span class="icon">⚙️</span>
        <h3>Requirements</h3>
      </div>
      <div class="item-content">
        <div class="data-line">Browser: <span class="highlight">Clean</span></div>
        <div class="data-line">Proxy: <span class="highlight">Required</span></div>
        <div class="data-line">Cards: <span class="highlight">Fresh</span></div>
      </div>
    </div>
  </div>

  <div class="cyber-steps">
    <div class="step">
      <div class="step-header">
        <div class="step-number">01</div>
        <h3>System Access</h3>
      </div>
      <div class="step-content">
        <p>Initialize clean system with required parameters</p>
        <div class="step-tags">
          <span class="tag">Clean Browser</span>
          <span class="tag">Fresh Profile</span>
        </div>
      </div>
      <div class="step-scanner"></div>
    </div>
    <div class="step">
      <div class="step-header">
        <div class="step-number">02</div>
        <h3>Payment Config</h3>
      </div>
      <div class="step-content">
        <p>Configure payment methods and verification</p>
        <div class="step-tags">
          <span class="tag">Card Setup</span>
          <span class="tag">AVS Match</span>
        </div>
      </div>
      <div class="step-scanner"></div>
    </div>
    <div class="step">
      <div class="step-header">
        <div class="step-number">03</div>
        <h3>Execute Order</h3>
      </div>
      <div class="step-content">
        <p>Process gift card purchase and secure codes</p>
        <div class="step-tags">
          <span class="tag">Purchase</span>
          <span class="tag">Secure Codes</span>
        </div>
      </div>
      <div class="step-scanner"></div>
    </div>
  </div>
</div>

<style>
.cyber-container {
  padding: 2rem;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #00ff00;
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
  pointer-events: none;
}

.cyber-header {
  text-align: center;
  margin-bottom: 3rem;
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
  position: relative;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 1rem auto;
  width: 200px;
}

.status-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.status-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.status-item .label {
  color: #666;
  font-size: 0.8rem;
  font-family: monospace;
}

.status-item .value {
  color: #00ff00;
  font-size: 1.2rem;
  font-family: monospace;
  font-weight: bold;
}

.cyber-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.grid-item {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.item-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.item-header h3 {
  margin: 0;
  color: #00ff00;
}

.data-line {
  font-family: monospace;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
}

.highlight {
  color: #00e5ff;
}

.cyber-steps {
  display: grid;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.step {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.step-number {
  font-size: 2rem;
  font-weight: bold;
  color: #00ff00;
  opacity: 0.5;
  font-family: monospace;
}

.step-content p {
  color: #a8b2c3;
  margin: 0 0 1rem 0;
}

.step-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00ff00;
}

.step-scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  animation: scan 2s linear infinite;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(300%); }
}
</style>