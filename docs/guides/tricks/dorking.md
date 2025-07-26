<script setup>
import DorkOperator from './components/DorkOperator.vue'
import SearchPattern from './components/SearchPattern.vue'
</script>

<div class="guide-container">
  <div class="cyber-grid"></div>
  <div class="guide-header">
    <div class="neon-text">DORKING<br>MASTERY</div>
    <div class="cyber-line"></div>
  </div>
  <div class="guide-content">
    <AccordionItem type="cyber" title="Basic Operators" icon="🔍" status="ACTIVE">
      <div class="operators-grid">
        <DorkOperator 
          operator="site:"
          description="Limit search to specific domain"
        />
        <DorkOperator 
          operator="inurl:"
          description="Search in URL path"
        />
        <DorkOperator 
          operator="filetype:"
          description="Search for file types"
        />
        <DorkOperator 
          operator="intitle:"
          description="Search in page title"
        />
      </div>
    </AccordionItem>
    <AccordionItem type="neon" title="Advanced Patterns" icon="⚡" status="PRO">
      <div class="patterns-grid">
        <SearchPattern
          title="Database Files"
          query="filetype:sql intext:password"
          :notes="['Check permissions', 'Verify data']"
        />
        <SearchPattern
          title="Config Files" 
          query="filetype:env OR filetype:cfg"
          :notes="['Test access', 'Check contents']"
        />
        <SearchPattern
          title="Admin Panels"
          query="inurl:admin intitle:login"
          :notes="['Verify endpoints', 'Test security']"
        />
      </div>
    </AccordionItem>
    <AccordionItem type="hologram" title="Security Notice" icon="🔒" status="WARNING">
      <div class="security-notice">
        <p>Always maintain proper OPSEC when using these techniques.</p>
        <div class="notice-tags">
          <span class="tag">Verify Access</span>
          <span class="tag">Use Protection</span>
          <span class="tag">Stay Legal</span>
        </div>
      </div>
    </AccordionItem>
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

.operators-grid,
.patterns-grid {
  display: grid;
  gap: 1rem;
}

.security-notice {
  padding: 1rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 0.5rem;
}

.notice-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #ff0000;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>
