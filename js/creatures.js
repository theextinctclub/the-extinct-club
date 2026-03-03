/* ═══════════════════════════════════════════════════════════
   $EXTINCT — NFT CREATURE SVG DATA
   The Extinct Club | creatures.js
   Stores SVG silhouette paths for all species cards
═══════════════════════════════════════════════════════════ */

'use strict';

/**
 * CREATURE_DATA — Array of all NFT card species data
 * Each object contains: id, epoch, epochLabel, name, svgPath, traits, rarity
 */
const CREATURE_DATA = [

  {
    id: 'woolly-mammoth',
    epoch: 'IV',
    epochLabel: 'Epoch IV — Pleistocene',
    epochSignal: 'Epoch IV',
    name: 'Woolly Mammoth',
    rarity: 'rare',
    traits: [
      { label: 'Rare',           type: 'rare'   },
      { label: 'Tundra Adaptive',type: 'common' },
      { label: 'Ice Age',        type: 'common' },
    ],
    svgViewBox: '0 0 120 120',
    svgContent: `
      <path d="M85 105 C85 105 83 80 80 72 C77 64 71 60 68 57 C65 54 65 48 68 45 C71 42 77 40 79 36 C81 32 78 28 75 26 C70 23 64 24 60 28 C57 31 56 35 54 38 C51 42 46 44 43 44 C37 44 31 39 25 38 C20 37 15 40 13 44 C11 48 13 54 15 59 C17 63 20 66 20 70 C20 76 16 80 13 84 C10 89 10 96 10 105 Z" fill="rgba(212,197,169,0.7)"/>
      <path d="M54 38 C50 43 42 52 35 62 C31 68 30 74 32 79" stroke="rgba(212,197,169,0.6)" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M60 28 C56 31 50 38 44 46 C38 54 36 62 38 69" stroke="rgba(212,197,169,0.5)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M25 44 C24 50 23 57 24 63 C25 69 27 74 26 80" stroke="rgba(212,197,169,0.55)" stroke-width="4" stroke-linecap="round" fill="none"/>
      <rect x="12" y="90" width="8" height="15" rx="2" fill="rgba(212,197,169,0.65)"/>
      <rect x="23" y="88" width="8" height="17" rx="2" fill="rgba(212,197,169,0.65)"/>
      <rect x="70" y="89" width="8" height="16" rx="2" fill="rgba(212,197,169,0.65)"/>
      <rect x="81" y="90" width="8" height="15" rx="2" fill="rgba(212,197,169,0.65)"/>
      <circle cx="77" cy="38" r="3" fill="rgba(255,159,28,0.5)"/>
    `
  },

  {
    id: 'dodo',
    epoch: 'V',
    epochLabel: 'Epoch V — Holocene',
    epochSignal: 'Epoch V',
    name: 'Dodo',
    rarity: 'common',
    traits: [
      { label: 'Common',        type: 'common' },
      { label: 'Island Endemic',type: 'common' },
      { label: 'Ghost Seq.',    type: 'ghost'  },
    ],
    svgViewBox: '0 0 120 120',
    svgContent: `
      <ellipse cx="55" cy="75" rx="30" ry="28" fill="rgba(212,197,169,0.65)"/>
      <ellipse cx="60" cy="42" rx="18" ry="16" fill="rgba(212,197,169,0.65)"/>
      <path d="M72 40 C80 37 90 42 88 50 C86 57 78 55 72 50" fill="rgba(212,197,169,0.7)"/>
      <path d="M55 60 C53 67 52 72 54 78" stroke="rgba(212,197,169,0.4)" stroke-width="3" fill="none"/>
      <rect x="42" y="100" width="9" height="18" rx="3" fill="rgba(212,197,169,0.6)"/>
      <rect x="56" y="100" width="9" height="18" rx="3" fill="rgba(212,197,169,0.6)"/>
      <path d="M30 70 C20 65 18 72 25 76 C22 78 22 83 30 80" fill="rgba(212,197,169,0.45)"/>
      <path d="M80 65 C90 62 92 68 85 72" fill="rgba(212,197,169,0.45)"/>
      <circle cx="66" cy="38" r="3" fill="rgba(255,159,28,0.5)"/>
    `
  },

  {
    id: 'spinosaurus',
    epoch: 'III',
    epochLabel: 'Epoch III — Mesozoic',
    epochSignal: 'Epoch III',
    name: 'Spinosaurus',
    rarity: 'legendary',
    traits: [
      { label: 'Legendary',    type: 'legend' },
      { label: 'Aquatic Hunter',type: 'rare'  },
      { label: 'Forbidden Lab', type: 'rare'  },
    ],
    svgViewBox: '0 0 120 120',
    svgContent: `
      <path d="M15 90 L22 65 L35 55 L50 50 L65 48 L80 45 L95 50 L102 62 L100 75 L92 85 L80 92 L65 95 L50 94 L35 90 Z" fill="rgba(212,197,169,0.6)"/>
      <path d="M35 55 L30 25 M50 50 L45 18 M65 48 L62 15 M80 45 L78 22 M95 50 L95 30" stroke="rgba(212,197,169,0.55)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M30 25 L45 18 L62 15 L78 22 L95 30" stroke="rgba(212,197,169,0.35)" stroke-width="1.5" fill="none"/>
      <path d="M15 90 C8 88 4 80 6 72 C8 65 14 62 20 68" fill="rgba(212,197,169,0.55)"/>
      <path d="M100 62 L112 55 L110 62 L102 65" fill="rgba(212,197,169,0.6)"/>
      <rect x="38" y="90" width="10" height="25" rx="3" fill="rgba(212,197,169,0.55)"/>
      <rect x="60" y="92" width="10" height="23" rx="3" fill="rgba(212,197,169,0.55)"/>
      <path d="M80 68 L90 80 L84 82 L76 72" fill="rgba(212,197,169,0.45)"/>
      <circle cx="96" cy="58" r="4" fill="rgba(255,159,28,0.5)"/>
    `
  },

  {
    id: 'sea-scorpion',
    epoch: 'I',
    epochLabel: 'Epoch I — Paleozoic',
    epochSignal: 'Epoch I',
    name: 'Giant Sea Scorpion',
    rarity: 'rare',
    traits: [
      { label: 'Rare',         type: 'rare'   },
      { label: 'Ancient Signal',type: 'common'},
      { label: 'Ghost Seq.',   type: 'ghost'  },
    ],
    svgViewBox: '0 0 120 120',
    svgContent: `
      <ellipse cx="60" cy="65" rx="22" ry="30" fill="rgba(212,197,169,0.65)"/>
      <ellipse cx="60" cy="38" rx="18" ry="14" fill="rgba(212,197,169,0.7)"/>
      <path d="M38 55 C25 48 18 52 20 60 C22 68 32 68 38 62" fill="rgba(212,197,169,0.55)"/>
      <path d="M82 55 C95 48 102 52 100 60 C98 68 88 68 82 62" fill="rgba(212,197,169,0.55)"/>
      <path d="M60 95 C58 102 56 108 58 114 C60 118 62 114 64 108 C66 102 64 96 60 95 Z" fill="rgba(212,197,169,0.6)"/>
      <path d="M58 114 C55 118 52 116 54 112 C56 109 58 111 58 114Z" fill="rgba(212,197,169,0.5)"/>
      <path d="M42 60 L28 55 M42 65 L24 65 M42 70 L28 75 M78 60 L92 55 M78 65 L96 65 M78 70 L92 75" stroke="rgba(212,197,169,0.5)" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="52" cy="36" r="4" fill="rgba(255,159,28,0.5)"/>
      <circle cx="68" cy="36" r="4" fill="rgba(255,159,28,0.5)"/>
    `
  },

  {
    id: 'thylacine',
    epoch: 'V',
    epochLabel: 'Epoch V — Holocene',
    epochSignal: 'Epoch V',
    name: 'Thylacine',
    rarity: 'rare',
    traits: [
      { label: 'Rare',          type: 'rare'   },
      { label: 'Last of Kind',  type: 'rare'   },
      { label: 'Ghost Seq.',    type: 'ghost'  },
    ],
    svgViewBox: '0 0 120 120',
    svgContent: `
      <path d="M90 85 C90 85 88 70 85 62 C82 54 76 50 68 46 C65 44 60 40 55 38 C48 35 40 36 35 40 C28 45 25 55 26 64 C27 72 32 78 30 85 L30 105 Z" fill="rgba(212,197,169,0.65)"/>
      <path d="M85 62 C90 55 98 52 102 58 C105 63 100 70 92 68" fill="rgba(212,197,169,0.6)"/>
      <path d="M90 85 L90 105" stroke="rgba(212,197,169,0.6)" stroke-width="6" stroke-linecap="round"/>
      <path d="M90 105 C94 112 100 115 102 110" stroke="rgba(212,197,169,0.55)" stroke-width="5" stroke-linecap="round" fill="none"/>
      <rect x="32" y="90" width="9" height="18" rx="3" fill="rgba(212,197,169,0.6)"/>
      <rect x="46" y="88" width="9" height="20" rx="3" fill="rgba(212,197,169,0.6)"/>
      <rect x="68" y="90" width="9" height="18" rx="3" fill="rgba(212,197,169,0.6)"/>
      <rect x="80" y="88" width="9" height="20" rx="3" fill="rgba(212,197,169,0.6)"/>
      <path d="M42 48 L38 40 M50 44 L48 35 M58 42 L58 33" stroke="rgba(212,197,169,0.35)" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="98" cy="56" r="4" fill="rgba(255,159,28,0.5)"/>
    `
  },

  {
    id: 'gorgonopsid',
    epoch: 'II',
    epochLabel: 'Epoch II — Permian-Triassic',
    epochSignal: 'Epoch II',
    name: 'Gorgonopsid',
    rarity: 'legendary',
    traits: [
      { label: 'Legendary',    type: 'legend' },
      { label: 'Apex Predator',type: 'rare'   },
      { label: 'Ghost Seq.',   type: 'ghost'  },
    ],
    svgViewBox: '0 0 120 120',
    svgContent: `
      <path d="M15 88 C15 88 18 72 22 64 C26 56 34 50 44 46 C52 43 62 44 70 48 C80 53 86 62 88 72 C90 80 88 88 88 88 Z" fill="rgba(212,197,169,0.65)"/>
      <path d="M88 72 C96 65 108 65 110 74 C112 82 104 88 96 85 L88 88" fill="rgba(212,197,169,0.6)"/>
      <path d="M110 74 L116 68 M113 78 L118 76" stroke="rgba(212,197,169,0.5)" stroke-width="2" stroke-linecap="round"/>
      <path d="M15 88 C10 82 8 74 12 68 C15 63 20 64 22 68" fill="rgba(212,197,169,0.55)"/>
      <rect x="28" y="88" width="10" height="22" rx="3" fill="rgba(212,197,169,0.6)"/>
      <rect x="44" y="86" width="10" height="24" rx="3" fill="rgba(212,197,169,0.6)"/>
      <rect x="62" y="86" width="10" height="24" rx="3" fill="rgba(212,197,169,0.6)"/>
      <rect x="76" y="88" width="10" height="22" rx="3" fill="rgba(212,197,169,0.6)"/>
      <circle cx="108" cy="68" r="5" fill="rgba(255,159,28,0.55)"/>
      <circle cx="108" cy="68" r="2.5" fill="rgba(255,159,28,0.8)"/>
    `
  },

];


/* ══════════════════════
   RENDER NFT CARDS
   Dynamically builds cards from CREATURE_DATA
══════════════════════ */
const renderNFTCards = () => {
  const grid = document.getElementById('nftGrid');
  if (!grid) return;

  grid.innerHTML = CREATURE_DATA.map((creature, index) => `
    <div class="nft-card reveal ${index > 0 ? `reveal-delay-${Math.min(index, 4)}` : ''}">
      <div class="card-visual">
        <svg class="creature-silhouette" viewBox="${creature.svgViewBox}" fill="none" aria-label="${creature.name} silhouette">
          ${creature.svgContent}
        </svg>
        <div class="card-scan"></div>
        <div class="card-reveal">
          <div class="reveal-signal">⬡ Ghost DNA Signal<br>Detected — ${creature.epochSignal}</div>
          <div class="reveal-cta">Deploy $EXTINCT to Resurrect</div>
        </div>
        <div class="card-status"><span class="status-dot"></span> Dormant Shard</div>
      </div>
      <div class="card-info">
        <div class="card-epoch">${creature.epochLabel}</div>
        <div class="card-name">${creature.name}</div>
        <div class="card-traits">
          ${creature.traits.map(t => `<span class="trait trait-${t.type}">${t.label}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
};


/* ══════════════════════
   INIT
══════════════════════ */
document.addEventListener('DOMContentLoaded', renderNFTCards);
