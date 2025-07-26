<div class="guide-container">
  <div class="glitch-overlay"></div>
  <div class="guide-header">
    <div class="glitch-text" data-text="GLITCH STYLE">GLITCH STYLE</div>
    <div class="glitch-line"></div>
  </div>

  <AccordionItem type="cyber" title="Style Overview" icon="🎭" status="UNSTABLE">
    <div class="style-info">
      <p>The Glitch style creates a distorted, corrupted aesthetic with digital artifacts and RGB shifts.</p>
      <div class="features-list">
        <div class="feature">✓ RGB shift effects</div>
        <div class="feature">✓ Digital artifacts</div>
        <div class="feature">✓ Scan line glitches</div>
        <div class="feature">✓ Corrupted elements</div>
      </div>
    </div>
  </AccordionItem>

  <div class="demo-section">
    <h2>Style Demo</h2>
    <div class="demo-grid">
      <div class="demo-card">
        <div class="card-header">
          <div class="glitch-icon"></div>
          <h3 class="glitch-small" data-text="SYSTEM ERROR">SYSTEM ERROR</h3>
        </div>
        <div class="card-content">
          <div class="error-display">
            <div class="error-code">ERR_MEMORY_CORRUPT</div>
            <div class="error-progress">
              <div class="progress-bar"></div>
            </div>
            <div class="error-message">ATTEMPTING RECOVERY...</div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <div class="card-header">
          <div class="glitch-icon"></div>
          <h3 class="glitch-small" data-text="DATA STREAM">DATA STREAM</h3>
        </div>
        <div class="card-content">
          <div class="data-stream">
            <div class="stream-line">0xDEADBEEF</div>
            <div class="stream-line">0xC0FFEE</div>
            <div class="stream-line">0xFEEDBACK</div>
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
  background: #1a1a1a;
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0px,
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 2px
  );
  animation: scanline 10s linear infinite;
  pointer-events: none;
}

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.glitch-text {
  font-size: 3rem;
  color: #fff;
  position: relative;
  animation: textGlitch 3s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip: rect(0, 900px, 0, 0);
}

.glitch-text::before {
  text-shadow: -2px 0 #ff0000;
  animation: glitch-1 2s infinite linear alternate-reverse;
}

.glitch-text::after {
  text-shadow: 2px 0 #00ff00;
  animation: glitch-2 3s infinite linear alternate-reverse;
}

.glitch-line {
  height: 2px;
  background: #fff;
  margin: 2rem auto;
  width: 200px;
  position: relative;
  overflow: hidden;
}

.glitch-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff);
  animation: lineGlitch 2s infinite;
}

.style-info {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.feature {
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  font-family: monospace;
  position: relative;
  overflow: hidden;
}

.feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer 2s infinite;
}

.demo-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.glitch-small {
  color: #fff;
  font-size: 1.2rem;
  position: relative;
  animation: smallGlitch 4s infinite;
}

.error-display {
  text-align: center;
  font-family: monospace;
}

.error-code {
  color: #ff0000;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  animation: errorBlink 1s infinite;
}

.error-progress {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 1rem 0;
}

.progress-bar {
  height: 100%;
  background: #ff0000;
  width: 50%;
  animation: progressGlitch 3s infinite;
}

.error-message {
  color: #fff;
  opacity: 0.7;
  animation: messageBlink 2s infinite;
}

.data-stream {
  font-family: monospace;
  color: #00ff00;
}

.stream-line {
  padding: 0.5rem 0;
  animation: streamGlitch 3s infinite;
}

@keyframes scanline {
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}

@keyframes glitch-1 {
  0% { clip: rect(20px, 900px, 20px, 0); }
  20% { clip: rect(20px, 900px, 30px, 0); }
  40% { clip: rect(30px, 900px, 40px, 0); }
  60% { clip: rect(40px, 900px, 50px, 0); }
  80% { clip: rect(50px, 900px, 60px, 0); }
  100% { clip: rect(60px, 900px, 70px, 0); }
}

@keyframes glitch-2 {
  0% { clip: rect(15px, 900px, 15px, 0); }
  20% { clip: rect(25px, 900px, 25px, 0); }
  40% { clip: rect(35px, 900px, 35px, 0); }
  60% { clip: rect(45px, 900px, 45px, 0); }
  80% { clip: rect(55px, 900px, 55px, 0); }
  100% { clip: rect(65px, 900px, 65px, 0); }
}

@keyframes lineGlitch {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes errorBlink {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

@keyframes progressGlitch {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(50%) scaleX(1.5); }
  100% { transform: translateX(100%); }
}

@keyframes messageBlink {
  0% { opacity: 0.7; }
  50% { opacity: 0.3; }
  100% { opacity: 0.7; }
}

@keyframes streamGlitch {
  0% { transform: translateX(0); }
  10% { transform: translateX(-5px); }
  20% { transform: translateX(5px); }
  30% { transform: translateX(-3px); }
  40% { transform: translateX(3px); }
  50% { transform: translateX(0); }
}
</style>