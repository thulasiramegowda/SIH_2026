// ============================================================
// MANGANAI Dashboard - Application Logic
// ============================================================
// Handles UI interactions, data binding, and state management.
// Data is sourced from data.js (mockData object).
// ============================================================

(function () {
  'use strict';

  // ----------------------------------------------------------
  // STATE
  // ----------------------------------------------------------
  let selectedArea = 'testCase01';
  let selectedLayer = 'Satellite';

  // ----------------------------------------------------------
  // INIT
  // ----------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    renderAreaCards();
    updateDashboard(selectedArea);
    bindLayerControls();
    bindSidebarNav();
  });

  // ----------------------------------------------------------
  // RENDER AREA CARDS
  // ----------------------------------------------------------
  function renderAreaCards() {
    const container = document.getElementById('area-cards');
    if (!container) return;

    container.innerHTML = areaOrder.map(key => {
      const d = mockData[key];
      const typeClass = d.tagType === 'known' ? 'known' : 'ai';
      const isActive = key === selectedArea ? 'active' : '';

      return `
        <div class="area-card ${typeClass} ${isActive}" data-area="${key}" role="button" tabindex="0">
          <div class="area-card-info">
            <div class="area-card-label">${d.label}</div>
            <div class="area-card-name">
              <svg viewBox="0 0 24 24" fill="none" stroke="${d.tagType === 'known' ? '#10b981' : '#38bdf8'}" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${d.name}
            </div>
            <div class="area-card-state">${d.state}</div>
            <div class="area-card-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${d.tagType === 'known'
                  ? '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>'
                  : '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'
                }
              </svg>
              ${d.tag}
            </div>
          </div>
          <div class="area-card-thumb">
            <img src="${d.cardImage}" alt="${d.name} satellite view" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\'area-card-thumb-placeholder\'><svg width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'#38bdf8\' stroke-width=\'1\'><rect x=\'3\' y=\'3\' width=\'18\' height=\'18\' rx=\'2\'/><circle cx=\'8.5\' cy=\'8.5\' r=\'1.5\'/><path d=\'M21 15l-5-5L5 21\'/></svg></div>'" />
          </div>
          <span class="area-card-arrow">&#8250;</span>
        </div>
      `;
    }).join('');

    // Bind click events
    container.querySelectorAll('.area-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedArea = card.dataset.area;
        updateDashboard(selectedArea);
        updateCardStates();
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  function updateCardStates() {
    document.querySelectorAll('.area-card').forEach(card => {
      card.classList.toggle('active', card.dataset.area === selectedArea);
    });
  }

  // ----------------------------------------------------------
  // UPDATE DASHBOARD
  // ----------------------------------------------------------
  function updateDashboard(areaKey) {
    const d = mockData[areaKey];
    if (!d) return;

    updateMap(d);
    updateAnalysis(d);
    updateIndicators(d);
    updateAreaInfo(d);
    updateInsights(d);
  }

  // ----------------------------------------------------------
  // MAP
  // ----------------------------------------------------------
  function updateMap(d) {
    // Location badge
    const locName = document.getElementById('map-loc-name');
    const locCoords = document.getElementById('map-loc-coords');
    if (locName) locName.textContent = `${d.name}, ${d.state}`;
    if (locCoords) locCoords.textContent = `${d.coords.lat}, ${d.coords.lon}`;

    // AOI marker
    const aoiLabel = document.getElementById('map-aoi-label');
    if (aoiLabel) aoiLabel.textContent = d.mapAOILabel;

    // Map image
    const mapImg = document.getElementById('map-main-image');
    const mapPlaceholder = document.getElementById('map-placeholder');
    if (mapImg) {
      mapImg.src = d.mapImage;
      mapImg.alt = `Satellite map of ${d.name}`;
      mapImg.onerror = function () {
        this.style.display = 'none';
        if (mapPlaceholder) mapPlaceholder.style.display = 'block';
      };
      mapImg.onload = function () {
        this.style.display = 'block';
        if (mapPlaceholder) mapPlaceholder.style.display = 'none';
      };
    }

    // Prospectivity legend highlight
    document.querySelectorAll('.map-legend-item').forEach(item => {
      const level = item.dataset.level;
      item.style.opacity = level === d.prospectivity.toLowerCase() ? '1' : '0.5';
    });
  }

  // ----------------------------------------------------------
  // ANALYSIS PANEL
  // ----------------------------------------------------------
  function updateAnalysis(d) {
    // Score ring
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (d.score / 100) * circumference;
    const ringFill = document.getElementById('score-ring-fill');
    if (ringFill) {
      ringFill.style.strokeDasharray = circumference;
      ringFill.style.strokeDashoffset = offset;

      // Color based on score
      if (d.score >= 75) {
        ringFill.style.stroke = '#22c55e';
      } else if (d.score >= 50) {
        ringFill.style.stroke = '#f59e0b';
      } else {
        ringFill.style.stroke = '#ef4444';
      }
    }

    // Score text
    const scoreVal = document.getElementById('score-value');
    if (scoreVal) scoreVal.innerHTML = `${d.score}<span> / 100</span>`;

    const scoreLabel = document.getElementById('score-label');
    if (scoreLabel) {
      scoreLabel.textContent = d.priorityBadge.replace(' PRIORITY', ' Priority');
      scoreLabel.className = 'score-label ' + d.prospectivity.toLowerCase();
    }

    // Priority badge
    const badge = document.getElementById('priority-badge');
    if (badge) {
      badge.textContent = d.priorityBadge;
      badge.className = 'priority-badge ' + d.prospectivity.toLowerCase();
    }

    // Description
    const desc = document.getElementById('analysis-desc');
    if (desc) desc.textContent = d.description;

    // Exploration note
    const expNote = document.getElementById('exploration-note-text');
    if (expNote) expNote.textContent = d.explorationNote;

    // Validation
    const valText = document.getElementById('validation-text');
    if (valText) valText.textContent = d.validation.text;

    const valNote = document.getElementById('validation-note');
    if (valNote) valNote.textContent = d.validation.note;
  }

  // ----------------------------------------------------------
  // INDICATORS
  // ----------------------------------------------------------
  function updateIndicators(d) {
    const indicators = d.indicators;
    const keys = ['ndvi', 'ndmi', 'lst', 'elevation', 'spectral', 'terrain'];

    keys.forEach(key => {
      const valEl = document.getElementById(`ind-val-${key}`);
      if (valEl) valEl.textContent = indicators[key].value;

      const barEl = document.getElementById(`ind-bar-${key}`);
      if (barEl) {
        let percent = 0;
        const val = indicators[key].value;
        switch (key) {
          case 'ndvi': percent = parseFloat(val) * 100; break;
          case 'ndmi': percent = parseFloat(val) * 100; break;
          case 'lst': percent = Math.min(100, (parseFloat(val) / 50) * 100); break;
          case 'elevation': percent = Math.min(100, (parseFloat(val) / 1000) * 100); break;
          case 'spectral': percent = parseFloat(val); break;
          case 'terrain':
            const terrainMap = { 'Low': 30, 'Moderate': 60, 'High': 90 };
            percent = terrainMap[val] || 50;
            break;
        }
        barEl.style.width = percent + '%';
      }
    });
  }

  // ----------------------------------------------------------
  // AREA INFO
  // ----------------------------------------------------------
  function updateAreaInfo(d) {
    const fields = [
      { id: 'info-location', value: d.areaInfo.location },
      { id: 'info-aoi', value: d.areaInfo.aoi },
      { id: 'info-landcover', value: d.areaInfo.landCover },
      { id: 'info-geological', value: d.areaInfo.geological }
    ];

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      if (el) el.textContent = f.value;
    });
  }

  // ----------------------------------------------------------
  // KEY INSIGHTS
  // ----------------------------------------------------------
  function updateInsights(d) {
    const container = document.getElementById('insights-list');
    if (!container) return;

    container.innerHTML = d.insights.map(text => `
      <div class="insight-item animate-in">
        <div class="insight-dot"></div>
        <div class="insight-text">${text}</div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------
  // LAYER CONTROLS
  // ----------------------------------------------------------
  function bindLayerControls() {
    document.querySelectorAll('.layer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedLayer = btn.dataset.layer;
        document.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // In production, this would switch map tile layers
        updateLayerDisplay(selectedLayer);
      });
    });
  }

  function updateLayerDisplay(layer) {
    const mapPlaceholder = document.getElementById('map-placeholder');
    if (!mapPlaceholder) return;

    const gradients = {
      'Satellite': 'radial-gradient(ellipse at 55% 55%, rgba(239, 68, 68, 0.25) 0%, rgba(245, 158, 11, 0.15) 25%, rgba(16, 185, 129, 0.1) 50%, transparent 70%), linear-gradient(180deg, #0c1020 0%, #111832 100%)',
      'NDVI': 'radial-gradient(ellipse at 55% 55%, rgba(16, 185, 129, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, rgba(5, 46, 22, 0.3) 60%, transparent 80%), linear-gradient(180deg, #041a0e 0%, #0a1f12 100%)',
      'Terrain': 'radial-gradient(ellipse at 55% 55%, rgba(139, 92, 42, 0.3) 0%, rgba(120, 113, 108, 0.2) 30%, rgba(68, 64, 60, 0.2) 60%, transparent 80%), linear-gradient(180deg, #1c1917 0%, #0c0a09 100%)',
      'False Color': 'radial-gradient(ellipse at 55% 55%, rgba(239, 68, 68, 0.35) 0%, rgba(168, 85, 247, 0.2) 30%, rgba(59, 130, 246, 0.2) 60%, transparent 80%), linear-gradient(180deg, #1e1b4b 0%, #0f0a2e 100%)'
    };

    mapPlaceholder.style.background = gradients[layer] || gradients['Satellite'];
  }

  // ----------------------------------------------------------
  // SIDEBAR NAVIGATION
  // ----------------------------------------------------------
  function bindSidebarNav() {
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const target = item.dataset.section;
        if (target) {
          const section = document.getElementById(target);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

})();
