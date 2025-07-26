<div class="guide-container">
  <div class="scanlines"></div>
  <div class="guide-header">
    <div class="retro-text" data-text="RETRO STYLE">RETRO STYLE</div>
    <div class="crt-flicker"></div>
  </div>

  <AccordionItem type="cyber" title="Style Overview" icon="📺" status="ONLINE">
    <div class="style-info">
      <p>The Retro style emulates classic computer terminals and CRT displays with scanlines and phosphor effects.</p>
      <div class="features-list">
        <div class="feature">✓ CRT scan lines</div>
        <div class="feature">✓ Phosphor glow</div>
        <div class="feature">✓ Screen flicker</div>
        <div class="feature">✓ Terminal aesthetics</div>
      </div>
    </div>
  </AccordionItem>

  <div class="demo-section">
    <h2>Style Demo</h2>
    <div class="demo-grid">
      <div class="demo-card">
        <div class="card-header">
          <div class="terminal-prompt">></div>
          <h3>SYSTEM STATUS</h3>
        </div>
        <div class="card-content">
          <div class="terminal-output">
            <div class="output-line">MEMORY OK</div>
            <div class="output-line">CPU NORMAL</div>
            <div class="output-line">DISK READY</div>
            <div class="cursor">_</div>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <div class="card-header">
          <div class="terminal-prompt">></div>
          <h3>DIAGNOSTICS</h3>
        </div>
        <div class="card-content">
          <div class="diagnostic-grid">
            <div class="grid-cell active"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell active"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell active"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell active"></div>
            <div class="grid-cell"></div>
          </div>
          <div class="diagnostic-text">SCAN COMPLETE</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.guide-container {
  position: relative;
  padding: 2rem;
  background: #001100;
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  font-family: 'Courier New', monospace;
}

.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.5) 51%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: scanline 10s linear infinite;
}

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.retro-text {
  font-size: 3rem;
  color: #33ff33;
  text-shadow: 2px 2px #001100;
  margin: 0;
  animation: textFlicker 2s infinite;
}

.crt-flicker {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(51, 255, 51, 0.03);
  pointer-events: none;
  animation: crtFlicker 0.15s infinite;
}

.style-info {
  padding: 1rem;
  background: rgba(51, 255, 51, 0.1);
  border: 1px solid #33ff33;
  border-radius: 0.5rem;
}

.feature {
  padding: 0.5rem;
  background: rgba(51, 255, 51, 0.1);
  border: 1px solid #33ff33;
  margin: 0.5rem 0;
  color: #33ff33;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.demo-card {
  background: #001100;
  border: 1px solid #33ff33;
  padding: 1.5rem;
  position: relative;
}

.terminal-prompt {
  color: #33ff33;
  animation: blink 1s infinite;
}

.terminal-output {
  margin-top: 1rem;
}

.output-line {
  color: #33ff33;
  margin: 0.5rem 0;
}

.cursor {
  color: #33ff33;
  animation: blink 1s infinite;
}

.diagnostic-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
}

.grid-cell {
  aspect-ratio: 1;
  border: 1px solid #33ff33;
  background: rgba(51, 255, 51, 0.1);
}

.grid-cell.active {
  background: #33ff33;
  animation: cellPulse 2s infinite;
}

.diagnostic-text {
  color: #33ff33;
  text-align: center;
  margin-top: 1rem;
  animation: textFlicker 2s infinite;
}

@keyframes scanline {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

@keyframes textFlicker {
  0% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.3; }
  94% { opacity: 1; }
  100% { opacity: 1; }
}

@keyframes crtFlicker {
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes cellPulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* CRT effect on hover */
.demo-card:hover {
  animation: crtOff 0.15s linear;
}

@keyframes crtOff {
  0% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.02); filter: brightness(1.5); }
  100% { transform: scale(1); filter: brightness(1); }
}

@media (max-width: 768px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
  
  .retro-text {
    font-size: 2rem;
  }
}
</style>