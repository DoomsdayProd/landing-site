<div class="minimal-container">
  <div class="hero-section">
    <h1 class="fade-in">Minimal Style</h1>
    <div class="accent-line"></div>
  </div>

  <div class="demo-section">
    <div class="demo-grid">
      <div class="demo-card" data-tilt>
        <div class="card-content">
          <span class="icon">✨</span>
          <h3>Clean Design</h3>
          <p>Emphasizing content through simplicity</p>
        </div>
        <div class="hover-effect"></div>
      </div>
      <div class="demo-card" data-tilt>
        <div class="card-content">
          <span class="icon">🎨</span>
          <h3>White Space</h3>
          <p>Strategic use of negative space</p>
        </div>
        <div class="hover-effect"></div>
      </div>
      <div class="demo-card" data-tilt>
        <div class="card-content">
          <span class="icon">📐</span>
          <h3>Typography</h3>
          <p>Clear hierarchical structure</p>
        </div>
        <div class="hover-effect"></div>
      </div>
    </div>
  </div>

  <div class="interactive-section">
    <div class="color-palette">
      <div class="color-swatch" style="--color: #ffffff">
        <span class="color-label">Primary</span>
      </div>
      <div class="color-swatch" style="--color: #f5f5f5">
        <span class="color-label">Secondary</span>
      </div>
      <div class="color-swatch" style="--color: #e0e0e0">
        <span class="color-label">Accent</span>
      </div>
    </div>
  </div>
</div>

<style>
.minimal-container {
  padding: 4rem 2rem;
  background: #ffffff;
  border-radius: 1rem;
  margin: 2rem 0;
  color: #333;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.accent-line {
  width: 50px;
  height: 2px;
  background: #333;
  margin: 2rem auto;
  transition: width 0.3s ease;
}

.minimal-container:hover .accent-line {
  width: 100px;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.demo-card {
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.demo-card:hover {
  transform: perspective(1000px) translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}

.card-content {
  position: relative;
  z-index: 1;
}

.hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.demo-card:hover .hover-effect {
  opacity: 1;
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.color-palette {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.color-swatch {
  width: 100px;
  height: 100px;
  background: var(--color);
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color-swatch:hover {
  transform: translateY(-5px);
}

.color-label {
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  color: #666;
  white-space: nowrap;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .minimal-container {
    padding: 2rem 1rem;
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }

  .color-palette {
    flex-direction: column;
    align-items: center;
  }
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const cards = document.querySelectorAll('[data-tilt]')
  
  cards.forEach(card => {
    card.addEventListener('mousemove', handleTilt)
    card.addEventListener('mouseleave', resetTilt)
  })
})

function handleTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  
  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale3d(1.05, 1.05, 1.05)
  `
}

function resetTilt(e) {
  const card = e.currentTarget
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
}
</script>