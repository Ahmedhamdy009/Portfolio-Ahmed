// Script to generate geometric brand SVGs for Ahmed Hamdy
// Refined with Restrained Coral Accent
const fs = require('fs');
const path = require('path');

// 1. Monogram SVG (Dark mode / Coral Accent)
const monogramSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="ahAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5A36"/>
      <stop offset="100%" stop-color="#E04424"/>
    </linearGradient>
    <linearGradient id="ahMetallicDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <linearGradient id="ahGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5A36" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#E04424" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background Squircle Shield -->
  <rect x="4" y="4" width="92" height="92" rx="22" fill="#12151D" stroke="rgba(255, 90, 54, 0.22)" stroke-width="1.5" />
  
  <!-- Subtle inner radial glow -->
  <circle cx="50" cy="50" r="38" fill="url(#ahGlow)" />

  <!-- Monogram Mark: Precision Geometric A + H Construction -->
  <g id="monogram-glyph">
    <!-- Left diagonal leg of 'A' -->
    <path d="M 24 78 L 46 22 C 47 19.5 49 18 51.5 18 C 54 18 55.5 19.5 56 22 L 56 78" 
          stroke="url(#ahMetallicDark)" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" />
    
    <!-- Right leg of 'H' -->
    <line x1="76" y1="22" x2="76" y2="78" 
          stroke="url(#ahAccentGrad)" stroke-width="7.5" stroke-linecap="round" />

    <!-- Unified Horizontal Crossbar connecting A and H -->
    <path d="M 33 54 L 76 54" 
          stroke="url(#ahAccentGrad)" stroke-width="7" stroke-linecap="round" />

    <!-- Architectural Accent Vertex Dot / Precision Node -->
    <circle cx="51.5" cy="18" r="4.2" fill="#FF5A36" />
  </g>
</svg>`;

// 2. Monogram SVG (Light mode version)
const monogramLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="ahAccentGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E04424"/>
      <stop offset="100%" stop-color="#C53416"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="22" fill="#FFFFFF" stroke="rgba(224, 68, 36, 0.2)" stroke-width="1.5" />
  <circle cx="50" cy="50" r="38" fill="rgba(224, 68, 36, 0.05)" />
  <g id="monogram-glyph-light">
    <path d="M 24 78 L 46 22 C 47 19.5 49 18 51.5 18 C 54 18 55.5 19.5 56 22 L 56 78" 
          stroke="#111827" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="76" y1="22" x2="76" y2="78" 
          stroke="url(#ahAccentGradLight)" stroke-width="7.5" stroke-linecap="round" />
    <path d="M 33 54 L 76 54" 
          stroke="url(#ahAccentGradLight)" stroke-width="7" stroke-linecap="round" />
    <circle cx="51.5" cy="18" r="4.2" fill="#E04424" />
  </g>
</svg>`;

// 3. Full Brand Lockup Logo (Navbar & Header & Business)
const fullLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="logoAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5A36"/>
      <stop offset="100%" stop-color="#E04424"/>
    </linearGradient>
  </defs>
  
  <!-- Left Monogram Icon (48x48) -->
  <g transform="translate(6, 6) scale(0.48)">
    <rect x="4" y="4" width="92" height="92" rx="22" fill="#12151D" stroke="rgba(255, 90, 54, 0.25)" stroke-width="2" />
    <path d="M 24 78 L 46 22 C 47 19.5 49 18 51.5 18 C 54 18 55.5 19.5 56 22 L 56 78" 
          stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="76" y1="22" x2="76" y2="78" 
          stroke="url(#logoAccent)" stroke-width="8" stroke-linecap="round" />
    <path d="M 33 54 L 76 54" 
          stroke="url(#logoAccent)" stroke-width="7.5" stroke-linecap="round" />
    <circle cx="51.5" cy="18" r="4.5" fill="#FF5A36" />
  </g>

  <!-- Typography Wordmark with Sora & Manrope aesthetic -->
  <text x="68" y="29" fill="#F3F5F7" font-family="'Sora', 'Plus Jakarta Sans', system-ui, sans-serif" font-size="18.5" font-weight="700" letter-spacing="0.5">AHMED HAMDY</text>
  <text x="68" y="46" fill="#8E98A8" font-family="'Manrope', -apple-system, sans-serif" font-size="9.5" font-weight="500" letter-spacing="1.5">WORDPRESS &amp; FRONTEND DEV</text>
</svg>`;

// 4. Favicon (Clean 32x32)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
  <rect width="32" height="32" rx="8" fill="#07080B"/>
  <path d="M 7 25 L 15 7 C 15.5 6 16.5 6 17 7 L 17 25" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="24" y1="7" x2="24" y2="25" stroke="#FF5A36" stroke-width="2.6" stroke-linecap="round"/>
  <line x1="10" y1="17" x2="24" y2="17" stroke="#FF5A36" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="16" cy="6.5" r="1.5" fill="#FF5A36"/>
</svg>`;

fs.writeFileSync(path.join(__dirname, 'assets', 'monogram.svg'), monogramSvg.trim());
fs.writeFileSync(path.join(__dirname, 'assets', 'monogram-light.svg'), monogramLightSvg.trim());
fs.writeFileSync(path.join(__dirname, 'assets', 'logo.svg'), fullLogoSvg.trim());
fs.writeFileSync(path.join(__dirname, 'assets', 'favicon.svg'), faviconSvg.trim());

console.log('Brand SVGs regenerated with restrained coral accent!');
