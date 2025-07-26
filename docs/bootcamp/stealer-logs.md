# Stealer Logs: Just the Surface

<div class="hero-container">
  <div class="matrix-bg"></div>
  <div class="hero-content">
    <div class="glitch-text" data-text="STEALER LOGS">STEALER LOGS</div>
    <div class="cyber-subtitle">Advanced Data Analysis</div>
    <div class="pulse-line"></div>
  </div>
</div>

## Types of Data

<div class="data-grid">
  <InteractiveDataCard
    title="Cookies"
    icon="🍪"
    description="Browser cookie data containing session and authentication information"
    :items="[
      'Session cookies',
      'Persistence cookies',
      'Authentication data',
      'Encrypted credentials'
    ]"
    :details="{
      description: 'Browser cookies contain valuable session data and authentication tokens that can be used to hijack active sessions.',
      risks: [
        'Session hijacking possible',
        'Stored credentials exposure',
        'Authentication bypass',
        'Persistent access'
      ],
      tips: [
        'Check expiration dates',
        'Validate cookie integrity',
        'Test session persistence',
        'Monitor for encryption'
      ]
    }"
  />

  <InteractiveDataCard
    title="Logins"
    icon="🔑"
    description="Stored login credentials for various platforms and services"
    :items="[
      'Email credentials',
      'Social media accounts',
      'Banking logins',
      'E-commerce platforms'
    ]"
    :details="{
      description: 'Stored login credentials can provide access to various accounts and services.',
      risks: [
        'Account takeover',
        'Identity theft',
        'Financial fraud',
        'Data breach'
      ],
      tips: [
        'Verify credential validity',
        'Check for 2FA',
        'Test login attempts',
        'Monitor for patterns'
      ]
    }"
  />

  <InteractiveDataCard
    title="Sessions"
    icon="🔄"
    description="Active session data and authentication tokens"
    :items="[
      'Active sessions',
      'Authentication tokens',
      'Session persistence',
      'Token validation'
    ]"
    :details="{
      description: 'Session data allows access to active user sessions without requiring login credentials.',
      risks: [
        'Session persistence',
        'Token reuse',
        'Access escalation',
        'Lateral movement'
      ],
      tips: [
        'Check token validity',
        'Test session duration',
        'Monitor for expiration',
        'Validate permissions'
      ]
    }"
  />

  <InteractiveDataCard
    title="Wallets"
    icon="💰"
    description="Cryptocurrency wallet data and private keys"
    :items="[
      'Wallet files',
      'Private keys',
      'Seed phrases',
      'Transaction history'
    ]"
    :details="{
      description: 'Cryptocurrency wallet data can provide access to digital assets and transaction history.',
      risks: [
        'Asset theft',
        'Transaction monitoring',
        'Key compromise',
        'Wallet takeover'
      ],
      tips: [
        'Verify wallet balance',
        'Check transaction logs',
        'Test key validity',
        'Monitor for activity'
      ]
    }"
  />
</div>

## Required Tools

<div class="tools-grid">
  <ToolCard
    icon="🔧"
    title="EditThisCookie"
    description="Browser extension for cookie management and analysis"
  />
  <ToolCard
    icon="📦"
    title="WinRAR"
    description="File compression and archive management utility"
  />
  <ToolCard
    icon="📝"
    title="Notepad++"
    description="Advanced text editor for log analysis"
  />
</div>

<style>
.hero-container {
  background: linear-gradient(45deg, #000, #1a1a1a);
  padding: 4rem 2rem;
  margin: 2rem 0;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
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
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.glitch-text {
  font-size: 3rem;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
  position: relative;
}

.cyber-subtitle {
  font-size: 1.5rem;
  color: #00e5ff;
  margin-top: 1rem;
}

.pulse-line {
  height: 2px;
  background: #00ff00;
  margin: 2rem auto;
  width: 200px;
  animation: pulse 2s infinite;
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes pulse {
  0% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(1.5); opacity: 0.5; }
  100% { transform: scaleX(1); opacity: 1; }
}
</style>
