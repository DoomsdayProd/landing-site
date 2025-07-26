<div class="modern-container">
  <div class="guide-header">
    <div class="logo">
      <img src="https://logo.clearbit.com/hellofresh.com" alt="HelloFresh" class="company-logo">
    </div>
    <div class="header-content">
      <h1>HelloFresh E-Gift Cards</h1>
      <div class="meta-tags">
        <span class="tag success">Active</span>
        <span class="tag info">Gift Cards</span>
        <span class="tag warning">USA Only</span>
      </div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-card">
      <div class="card-icon">🎯</div>
      <div class="card-content">
        <h3>Target Info</h3>
        <ul>
          <li>Domain: hellofresh.com</li>
          <li>Type: Food Delivery</li>
          <li>Region: United States</li>
        </ul>
      </div>
    </div>
    <div class="info-card">
      <div class="card-icon">💳</div>
      <div class="card-content">
        <h3>Payment Methods</h3>
        <ul>
          <li>Credit Cards</li>
          <li>PayPal</li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </div>
    <div class="info-card">
      <div class="card-icon">⚙️</div>
      <div class="card-content">
        <h3>Requirements</h3>
        <ul>
          <li>Clean Browser</li>
          <li>USA Proxy</li>
          <li>Valid Cards</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="steps-container">
    <div class="step">
      <div class="step-number">01</div>
      <div class="step-content">
        <h3>Account Creation</h3>
        <p>Create new account with clean profile</p>
        <div class="step-notes">
          <span class="note">Use fresh email</span>
          <span class="note">Enable 2FA</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <div class="step-content">
        <h3>Payment Setup</h3>
        <p>Add payment method with matching info</p>
        <div class="step-notes">
          <span class="note">Match billing</span>
          <span class="note">Verify card</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <div class="step-content">
        <h3>Gift Card Purchase</h3>
        <p>Purchase digital gift card</p>
        <div class="step-notes">
          <span class="note">Save codes</span>
          <span class="note">Check balance</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.modern-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.guide-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.company-logo {
  width: 100px;
  height: 100px;
  border-radius: 1rem;
  object-fit: contain;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content h1 {
  margin: 0 0 1rem 0;
  background: linear-gradient(120deg, #00ff00, #00e5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.meta-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.tag.success { background: rgba(0, 255, 0, 0.1); color: #00ff00; }
.tag.info { background: rgba(0, 229, 255, 0.1); color: #00e5ff; }
.tag.warning { background: rgba(255, 255, 0, 0.1); color: #ffff00; }

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-card {
  background: var(--vp-c-bg-alt);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  transition: transform 0.2s;
}

.info-card:hover {
  transform: translateY(-2px);
}

.card-icon {
  font-size: 2rem;
}

.card-content h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-brand);
}

.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-content li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--vp-c-border);
}

.card-content li:last-child {
  border-bottom: none;
}

.steps-container {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-alt);
  border-radius: 1rem;
  transition: transform 0.2s;
}

.step:hover {
  transform: translateX(10px);
}

.step-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--vp-c-brand);
  opacity: 0.5;
}

.step-content h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-brand);
}

.step-content p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
}

.step-notes {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.note {
  padding: 0.25rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
</style>