# Guide Title

<div class="hero-section">
  <div class="cyber-grid"></div>
  <div class="guide-header">
    <div class="neon-text">GUIDE TITLE</div>
    <div class="cyber-line"></div>
  </div>
</div>

## Overview

<AccordionItem type="cyber" title="Quick Info" icon="ℹ️" status="GUIDE">
  <div class="info-grid">
    <div class="info-item">
      <span class="label">Difficulty</span>
      <span class="value">Intermediate</span>
    </div>
    <div class="info-item">
      <span class="label">Time Required</span>
      <span class="value">30 minutes</span>
    </div>
    <div class="info-item">
      <span class="label">Prerequisites</span>
      <span class="value">Basic knowledge</span>
    </div>
  </div>
</AccordionItem>

## Requirements

<div class="requirements-grid">
  <Card title="Tools Required" icon="🛠️">
    <ul>
      <li>Tool 1</li>
      <li>Tool 2</li>
    </ul>
  </Card>

  <Card title="Setup Needed" icon="⚙️">
    <ul>
      <li>Setup step 1</li>
      <li>Setup step 2</li>
    </ul>
  </Card>
</div>

## Step-by-Step Guide

<div class="steps-container">
  <div class="step">
    <div class="step-number">01</div>
    <div class="step-content">
      <h3>First Step</h3>
      <p>Step description</p>
      <div class="step-notes">
        <span class="note">Important note</span>
      </div>
    </div>
  </div>
  
  <!-- Add more steps as needed -->
</div>

## Security Notice

::: warning OPSEC
Security warning message here
:::

<style>
/* Base styles */
.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  margin: 2rem 0;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  position: relative;
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

/* Add more styles as needed */

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>
