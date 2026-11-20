const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// MOCK DATA - EXACTLY MATCHING THE REFERENCE
const areas = [
  {
    id: 'dulhapur',
    name: 'Dulhapur',
    state: 'Madhya Pradesh',
    type: 'known',
    typeLabel: 'Known Geological Area',
    testCase: 'TEST CASE 01',
    score: 84,
    priority: 'HIGH',
    priorityColor: 'emerald',
    coordinates: '22.69° N, 80.22° E',
    areaSize: '~ 25 sq. km',
    landCover: 'Mixed Vegetation',
    geological: 'Gondite / Phyllite',
    terrain: 'Moderate',
    ndvi: 0.42,
    ndmi: 0.31,
    lst: '29.4 °C',
    elevation: '642 m',
    rainfall: '29 mm',
    spectralSimilarity: '86 %',
    description: 'The area shows strong similarity with geological and environmental characteristics associated with manganese-bearing regions.',
    validation: 'Manganese occurrence previously reported in this region through geological investigation.',
    insights: [
      'High vegetation and moisture characteristics similar to known manganese zones.',
      'Spectral signature closely matches training patterns.',
      'Region exhibits favourable geological and terrain conditions.'
    ]
  },
  {
    id: 'bhagoli',
    name: 'Bhagoli – Hirapur',
    state: 'Madhya Pradesh',
    type: 'known',
    typeLabel: 'Known Geological Area',
    testCase: 'TEST CASE 02',
    score: 79,
    priority: 'HIGH',
    priorityColor: 'emerald',
    coordinates: '22.85° N, 80.75° E',
    areaSize: '~ 20 sq. km',
    landCover: 'Scrub Forest',
    geological: 'Gondite / Phyllite',
    terrain: 'Moderate',
    ndvi: 0.38,
    ndmi: 0.28,
    lst: '30.1 °C',
    elevation: '580 m',
    rainfall: '32 mm',
    spectralSimilarity: '79 %',
    description: 'The area shows moderate similarity with geological and environmental characteristics associated with manganese-bearing regions.',
    validation: 'Manganese occurrence previously reported in this region through geological investigation.',
    insights: [
      'Moderate vegetation and moisture characteristics.',
      'Spectral signature shows reasonable match with known zones.',
      'Favorable terrain conditions for exploration.'
    ]
  },
  {
    id: 'candidate1',
    name: 'Candidate Area 1',
    state: 'Madhya Pradesh',
    type: 'candidate',
    typeLabel: 'AI Identified',
    testCase: 'CANDIDATE 01',
    score: 72,
    priority: 'MEDIUM',
    priorityColor: 'yellow',
    coordinates: '23.10° N, 81.90° E',
    areaSize: '~ 15 sq. km',
    landCover: 'Agricultural',
    geological: 'Phyllite / Schist',
    terrain: 'Low',
    ndvi: 0.35,
    ndmi: 0.25,
    lst: '31.2 °C',
    elevation: '520 m',
    rainfall: '35 mm',
    spectralSimilarity: '72 %',
    description: 'AI-identified candidate area with moderate prospectivity potential.',
    validation: 'Area prioritized based on satellite-derived characteristics.',
    insights: [
      'Moderate spectral similarity with known patterns.',
      'Favorable terrain characteristics identified.',
      'Further investigation recommended.'
    ]
  },
  {
    id: 'candidate2',
    name: 'Candidate Area 2',
    state: 'Madhya Pradesh',
    type: 'candidate',
    typeLabel: 'AI Identified',
    testCase: 'CANDIDATE 02',
    score: 58,
    priority: 'MEDIUM',
    priorityColor: 'yellow',
    coordinates: '23.25° N, 82.05° E',
    areaSize: '~ 18 sq. km',
    landCover: 'Agricultural / Open',
    geological: 'Schist / Granite',
    terrain: 'Low',
    ndvi: 0.30,
    ndmi: 0.20,
    lst: '32.5 °C',
    elevation: '480 m',
    rainfall: '38 mm',
    spectralSimilarity: '58 %',
    description: 'Candidate area with moderate to low prospectivity potential.',
    validation: 'Area prioritized based on satellite-derived characteristics.',
    insights: [
      'Lower spectral similarity with known patterns.',
      'Terrain conditions are less favorable.',
      'Additional investigation recommended with caution.'
    ]
  }
];

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('pages/dashboard', { 
    areas: areas,
    selected: areas[0],
    title: 'MANGANAI - Satellite Intelligence'
  });
});

app.get('/area/:id', (req, res) => {
  const selected = areas.find(a => a.id === req.params.id) || areas[0];
  res.render('pages/dashboard', { 
    areas: areas,
    selected: selected,
    title: 'MANGANAI - Satellite Intelligence'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 MANGANAI running at http://localhost:${PORT}`);
  console.log(`📊 ${areas.length} areas loaded`);
});