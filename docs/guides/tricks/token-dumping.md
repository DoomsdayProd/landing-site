<div class="guide-container">
  <div class="cyber-grid"></div>
  <div class="guide-header">
    <div class="neon-text">TOKEN EXTRACTION</div>
    <div class="cyber-line"></div>
  </div>
  <TokenScanner ref="scanner" @token-found="handleTokenFound" />
  <TokenInput 
    v-if="showInput"
    @token-submitted="handleTokenSubmit"
    @close="showInput = false"
  />

  <div class="button-group">
    <button class="cyber-button" @click="startScan">
      <span class="button-icon">🔍</span>
      Scan for Tokens
    </button>
    <button class="cyber-button" @click="showInput = !showInput">
      <span class="button-icon">✏️</span>
      Enter Token
    </button>
  </div>
  <TokenDecoder 
    ref="decoder"
    :token="currentToken"
    @decode-complete="handleDecodeComplete"
  />
</div>

<script setup>
import { ref } from 'vue'

const scanner = ref(null)
const decoder = ref(null)
const showInput = ref(false)
const currentToken = ref('')

const startScan = async () => {
  currentToken.value = ''
  await scanner.value?.scanForTokens()
}

const handleTokenFound = (token) => {
  currentToken.value = token
}

const handleTokenSubmit = (token) => {
  currentToken.value = token
  showInput.value = false
}

const handleDecodeComplete = () => {
  // Handle decode completion if needed
}
</script>

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

.button-group {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.cyber-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  font-family: monospace;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cyber-button:hover {
  background: rgba(0, 255, 0, 0.1);
  transform: translateY(-2px);
}

.button-icon {
  font-size: 1.2rem;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>
