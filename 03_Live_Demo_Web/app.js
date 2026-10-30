const pool = [
  { cat: 'movies', name: 'Blade Runner 2049', score: 0.94, desc: 'Neo-Noir Cyberpunk Aesthetic | High-Dimensional Visual Affinity' },
  { cat: 'dining', name: 'Ginza Omakase Tsukiji', score: 0.91, desc: 'Artisanal Edomae Technique | Precision Craftsmanship Vector' },
  { cat: 'movies', name: 'Akira (1988)', score: 0.89, desc: 'Cybernetic Dystopian Masterpiece | Neo-Tokyo Cultural Anchor' },
  { cat: 'fashion', name: 'Acronym J1A-GT Techwear Parka', score: 0.88, desc: 'Waterproof Ergonomic Architecture | Modular Utility Manifold' },
  { cat: 'music', name: 'Vangelis — Tears in Rain ( Analog Synth )', score: 0.86, desc: 'Atmospheric CS-80 Harmonic Progression | Nocturnal Tempo' },
  { cat: 'dining', name: 'Milanese Single-Origin Espresso Roastery', score: 0.82, desc: 'High-Extraction 9-Bar Artisan Roast | Northern Italian Heritage' },
  { cat: 'music', name: 'Ryuichi Sakamoto — Async', score: 0.79, desc: 'Minimalist Electro-Acoustic Texture | Ambient Architecture' },
  { cat: 'fashion', name: 'Fast Casual Mass Streetwear', score: 0.58, desc: 'Commercial Baseline (Pruned when Damping >= 0.60)' }
];

const dampSlider = document.getElementById('damping');
const dampVal = document.getElementById('damp-val');
const runBtn = document.getElementById('run-btn');
const resultsBox = document.getElementById('results');
const intentInput = document.getElementById('intent');

dampSlider.oninput = () => {
  dampVal.textContent = parseFloat(dampSlider.value).toFixed(2);
  render();
};

function render() {
  const threshold = parseFloat(dampSlider.value);
  const cats = Array.from(document.querySelectorAll('.cat-group input:checked')).map(el => el.value);
  resultsBox.innerHTML = '';
  const filtered = pool.filter(p => cats.includes(p.cat) && p.score >= threshold).sort((a, b) => b.score - a.score);
  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'res-card';
    div.innerHTML = `<div class="res-hdr"><strong>${item.name}</strong><span class="score">AFFINITY ${(item.score * 100).toFixed(0)}%</span></div><p>${item.desc} | Category: ${item.cat.toUpperCase()}</p>`;
    resultsBox.appendChild(div);
  });
  document.getElementById('m-lat').textContent = (34 + Math.random() * 14).toFixed(1) + ' ms';
}

document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    intentInput.value = btn.getAttribute('data-query');
    render();
  });
});

document.querySelectorAll('.cat-group input').forEach(cb => {
  cb.addEventListener('change', render);
});

runBtn.onclick = render;
render();

// Copy 3-Line Reproduction Command
const copyBtn = document.getElementById('copy-repro-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const cmdText = document.getElementById('repro-cmd').textContent;
    try {
      await navigator.clipboard.writeText(cmdText);
      copyBtn.textContent = '✅ COPIED TO CLIPBOARD!';
      setTimeout(() => { copyBtn.textContent = '📋 COPY 3-LINE REPRODUCTION COMMAND'; }, 2200);
    } catch (_) {
      copyBtn.textContent = '✅ READY TO COPY ABOVE';
    }
  });
}

// Light-dismiss Image Modal Zoom
const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModalBtn = document.getElementById('close-modal-btn');

document.querySelectorAll('.zoomable-img').forEach(img => {
  img.addEventListener('click', () => {
    if (modal && modalImg) {
      modalImg.src = img.src;
      modalCaption.textContent = img.alt || 'Architecture Blueprint Preview';
      modal.showModal();
    }
  });
});

if (closeModalBtn && modal) {
  closeModalBtn.addEventListener('click', () => modal.close());
}
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}
