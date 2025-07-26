<div class="hologram-container">
  <div class="hologram-overlay"></div>
  
  <div class="hologram-header">
    <div class="header-title">MEGABONANZA</div>
    <div class="header-status">
      <div class="status-ring"></div>
      <span>SYSTEM ACTIVE</span>
    </div>
  </div>

  <div class="data-modules">
    <div class="module">
      <div class="module-grid"></div>
      <div class="module-content">
        <h3>Target Parameters</h3>
        <div class="data-row">
          <span class="label">URL</span>
          <span class="value">megabonanza.com</span>
        </div>
        <div class="data-row">
          <span class="label">Type</span>
          <span class="value">E-Commerce</span>
        </div>
        <div class="data-row">
          <span class="label">Region</span>
          <span class="value">Global</span>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="module-grid"></div>
      <div class="module-content">
        <h3>Payment Methods</h3>
        <div class="data-row">
          <span class="label">Cards</span>
  <div class="payment-icons">
    <span class="payment-icon" title="Visa">💳</span>
    <span class="payment-icon" title="Mastercard">💳</span>
    <span class="payment-icon" title="Amex">💳</span>
  </div>
</div>
        <div class="data-row">
          <span class="label">Digital</span>
          <span class="value">PayPal, Crypto</span>
        </div>
        <div class="data-row">
          <span class="label">Gift Cards</span>
          <span class="value">Available</span>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="module-grid"></div>
      <div class="module-content">
        <h3>Requirements</h3>
        <div class="data-row">
          <span class="label">Profile</span>
          <span class="value">Clean</span>
        </div>
        <div class="data-row">
          <span class="label">Proxy</span>
          <span class="value">Required</span>
        </div>
        <div class="data-row">
          <span class="label">Browser</span>
          <span class="value">Fresh</span>
        </div>
      </div>
    </div>
  </div>

  <div class="process-flow">
    <div class="process-step">
      <div class="step-indicator">01</div>
      <div class="step-details">
        <h3>System Initialization</h3>
        <p>Configure clean environment with required parameters</p>
        <div class="step-tags">
          <span class="tag">Setup</span>
          <span class="tag">Config</span>
        </div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-indicator">02</div>
      <div class="step-details">
        <h3>Payment Verification</h3>
        <p>Process payment method verification and setup</p>
        <div class="step-tags">
          <span class="tag">Verify</span>
          <span class="tag">Secure</span>
        </div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-indicator">03</div>
      <div class="step-details">
        <h3>Gift Card Acquisition</h3>
        <p>Execute gift card purchase and secure codes</p>
        <div class="step-tags">
          <span class="tag">Purchase</span>
          <span class="tag">Extract</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.hologram-container {
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #001133);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #00e5ff;
}

.hologram-overlay {
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
  pointer-events: none;
}

.hologram-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.header-title {
  font-size: 3rem;
  color: #00e5ff;
  text-shadow: 
    0 0 5px #00e5ff,
    0 0 10px #00e5ff;
  font-family: monospace;
  letter-spacing: 4px;
}

.header-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: #00e5ff;
  font-family: monospace;
}

.status-ring {
  width: 12px;
  height: 12px;
  border: 2px solid #00e5ff;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.data-modules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.module {
  background: rgba(0, 229, 255, 0.05);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.module-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px);
  background-size: 10px 10px;
  pointer-events: none;
}

.module-content h3 {
  color: #00e5ff;
  margin: 0 0 1.5rem 0;
  font-family: monospace;
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 229, 255, 0.2);
  font-family: monospace;
}

.data-row:last-child {
  border-bottom: none;
}

.data-row .label {
  color: rgba(0, 229, 255, 0.7);
}

.data-row .value {
  color: #00e5ff;
}

.process-flow {
  display: grid;
  gap: 2rem;
}

.process-step {
  background: rgba(0, 229, 255, 0.05);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
}

.step-indicator {
  font-size: 2rem;
  font-weight: bold;
  color: #00e5ff;
  font-family: monospace;
  opacity: 0.5;
}

.step-details h3 {
  color: #00e5ff;
  margin: 0 0 0.5rem 0;
  font-family: monospace;
}

.step-details p {
  color: rgba(0, 229, 255, 0.7);
  margin: 0 0 1rem 0;
}

.step-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00e5ff;
  font-family: monospace;
}

@keyframes hologramGrid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
</style>