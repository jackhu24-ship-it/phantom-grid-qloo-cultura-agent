const pool = [
  { cat: 'movies', name: 'Blade Runner 2049', score: 0.94, desc: 'Neo-Noir Cyberpunk Aesthetic' },
  { cat: 'movies', name: 'Akira (1988)', score: 0.89, desc: 'Cybernetic Dystopian Masterpiece' },
  { cat: 'dining', name: 'Ginza Omakase Tsukiji', score: 0.91, desc: 'Artisanal Edomae Technique' },
  { cat: 'dining', name: 'Milanese Roastery Bar', score: 0.82, desc: 'High-Extraction Single Origin' },
  { cat: 'fashion', name: 'Technical Shell Parka', score: 0.88, desc: 'Waterproof Ergonomic Architecture' },
  { cat: 'fashion', name: 'Fast Casual Streetwear', score: 0.58, desc: 'Commercial Baseline' }
];

const dampSlider = document.getElementById('damping');
const dampVal = document.getElementById('damp-val');
const runBtn = document.getElementById('run-btn');
const resultsBox = document.getElementById('results');

dampSlider.oninput = () => { dampVal.textContent = dampSlider.value; };

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
  document.getElementById('m-lat').textContent = (35 + Math.random() * 20).toFixed(1) + ' ms';
}

runBtn.onclick = render;
render();
