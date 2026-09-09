// ============================================================
// MANGANAI - Mock Data Layer
// ============================================================
// All data is stored here for clean separation from UI.
// Replace mock values with API calls when backend is ready.
// ============================================================

const mockData = {
  // ----------------------------------------------------------
  // TEST CASE 01: Dulhapur
  // ----------------------------------------------------------
  testCase01: {
    id: 'testCase01',
    label: 'TEST CASE 01',
    name: 'Dulhapur',
    state: 'Madhya Pradesh',
    tag: 'Known Geological Area',
    tagType: 'known', // 'known' or 'ai'
    priority: 'High',
    coords: { lat: '22.69° N', lon: '80.22° E' },
    prospectivity: 'High',
    score: 84,
    priorityBadge: 'HIGH PRIORITY',
    description: 'The area shows strong similarity with geological and environmental characteristics associated with manganese-bearing regions.',
    explorationNote: 'Potential zone identified for further exploration.',
    validation: {
      text: 'Manganese occurrence previously reported in this region through geological investigation.',
      note: 'Note: Geological reference data was NOT used during prediction.'
    },
    indicators: {
      ndvi: { value: '0.42', label: 'Vegetation Index', sublabel: '(NDVI)' },
      ndmi: { value: '0.31', label: 'Moisture Index', sublabel: '(NDMI)' },
      lst: { value: '29.4 °C', label: 'Land Surface Temp', sublabel: '(LST)' },
      elevation: { value: '642 m', label: 'Terrain Elevation', sublabel: '' },
      spectral: { value: '86 %', label: 'Spectral Similarity', sublabel: '' },
      terrain: { value: 'Moderate', label: 'Terrain Ruggedness', sublabel: '' }
    },
    areaInfo: {
      location: 'Dulhapur, Madhya Pradesh',
      aoi: '~ 25 sq. km',
      landCover: 'Mixed Vegetation',
      geological: 'Gondite / Phyllite'
    },
    insights: [
      'High vegetation and moisture characteristics similar to known manganese zones.',
      'Spectral signature closely matches training patterns.',
      'Region exhibits favourable geological and terrain conditions.'
    ],
    // IMAGE PLACEHOLDERS - Replace paths with your actual images
    // Card thumbnail: small satellite preview (~200x120px)
    cardImage: 'images/map-dulhapur.png',
    // Map image: main satellite/heatmap view (~800x500px)
    mapImage: 'images/map-dulhapur.png',
    mapAOILabel: 'AOI-01'
  },

  // ----------------------------------------------------------
  // TEST CASE 02: Bhagoli-Hirapur
  // ----------------------------------------------------------
  testCase02: {
    id: 'testCase02',
    label: 'TEST CASE 02',
    name: 'Bhagoli – Hirapur',
    state: 'Madhya Pradesh',
    tag: 'Known Geological Area',
    tagType: 'known',
    priority: 'High',
    coords: { lat: '23.14° N', lon: '80.05° E' },
    prospectivity: 'High',
    score: 78,
    priorityBadge: 'HIGH PRIORITY',
    description: 'This region displays geological signatures consistent with manganese-rich formations, supported by terrain and spectral analysis.',
    explorationNote: 'Potential zone identified for further exploration.',
    validation: {
      text: 'Manganese deposits have been previously documented in the Bhagoli-Hirapur belt through GSI surveys.',
      note: 'Note: Geological reference data was NOT used during prediction.'
    },
    indicators: {
      ndvi: { value: '0.38', label: 'Vegetation Index', sublabel: '(NDVI)' },
      ndmi: { value: '0.27', label: 'Moisture Index', sublabel: '(NDMI)' },
      lst: { value: '31.2 °C', label: 'Land Surface Temp', sublabel: '(LST)' },
      elevation: { value: '588 m', label: 'Terrain Elevation', sublabel: '' },
      spectral: { value: '81 %', label: 'Spectral Similarity', sublabel: '' },
      terrain: { value: 'Moderate', label: 'Terrain Ruggedness', sublabel: '' }
    },
    areaInfo: {
      location: 'Bhagoli – Hirapur, Madhya Pradesh',
      aoi: '~ 30 sq. km',
      landCover: 'Sparse Vegetation / Scrubland',
      geological: 'Manganese Ore / Laterite'
    },
    insights: [
      'Spectral signatures indicate iron-manganese oxide enrichment in surface layers.',
      'Terrain profile aligns with typical manganese-bearing geological formations.',
      'Moisture and vegetation indices fall within expected ranges for mineralized zones.'
    ],
    cardImage: 'images/map-bhagoli.png',
    mapImage: 'images/map-bhagoli.png',
    mapAOILabel: 'AOI-02'
  },

  // ----------------------------------------------------------
  // CANDIDATE 01
  // ----------------------------------------------------------
  candidate01: {
    id: 'candidate01',
    label: 'CANDIDATE 01',
    name: 'Candidate Area 1',
    state: 'Madhya Pradesh',
    tag: 'AI Identified',
    tagType: 'ai',
    priority: 'Medium',
    coords: { lat: '22.45° N', lon: '79.88° E' },
    prospectivity: 'Medium',
    score: 67,
    priorityBadge: 'MEDIUM PRIORITY',
    description: 'AI model identified moderate prospectivity signals in this region based on spectral and environmental indicators.',
    explorationNote: 'Recommended for preliminary ground survey and validation.',
    validation: {
      text: 'No prior geological survey data available for this location. This is a purely AI-generated candidate.',
      note: 'Note: This area requires field validation to confirm AI predictions.'
    },
    indicators: {
      ndvi: { value: '0.35', label: 'Vegetation Index', sublabel: '(NDVI)' },
      ndmi: { value: '0.22', label: 'Moisture Index', sublabel: '(NDMI)' },
      lst: { value: '32.1 °C', label: 'Land Surface Temp', sublabel: '(LST)' },
      elevation: { value: '510 m', label: 'Terrain Elevation', sublabel: '' },
      spectral: { value: '72 %', label: 'Spectral Similarity', sublabel: '' },
      terrain: { value: 'Low', label: 'Terrain Ruggedness', sublabel: '' }
    },
    areaInfo: {
      location: 'Candidate Area 1, Madhya Pradesh',
      aoi: '~ 18 sq. km',
      landCover: 'Agricultural / Fallow Land',
      geological: 'Schist / Quartzite'
    },
    insights: [
      'Moderate spectral correlation with known manganese-bearing formations.',
      'Land surface temperature and moisture patterns suggest sub-surface mineral activity.',
      'Further ground-truth validation recommended before detailed exploration.'
    ],
    cardImage: 'images/map-candidate1.png',
    mapImage: 'images/map-candidate1.png',
    mapAOILabel: 'AOI-C1'
  },

  // ----------------------------------------------------------
  // CANDIDATE 02
  // ----------------------------------------------------------
  candidate02: {
    id: 'candidate02',
    label: 'CANDIDATE 02',
    name: 'Candidate Area 2',
    state: 'Madhya Pradesh',
    tag: 'AI Identified',
    tagType: 'ai',
    priority: 'Medium',
    coords: { lat: '22.91° N', lon: '80.55° E' },
    prospectivity: 'Medium',
    score: 61,
    priorityBadge: 'MEDIUM PRIORITY',
    description: 'Moderate prospectivity detected through multi-band spectral analysis and terrain feature extraction.',
    explorationNote: 'Recommended for preliminary ground survey and validation.',
    validation: {
      text: 'No independent geological reference exists for this location. AI-generated prediction based on satellite data only.',
      note: 'Note: This area requires field validation to confirm AI predictions.'
    },
    indicators: {
      ndvi: { value: '0.29', label: 'Vegetation Index', sublabel: '(NDVI)' },
      ndmi: { value: '0.19', label: 'Moisture Index', sublabel: '(NDMI)' },
      lst: { value: '33.8 °C', label: 'Land Surface Temp', sublabel: '(LST)' },
      elevation: { value: '475 m', label: 'Terrain Elevation', sublabel: '' },
      spectral: { value: '68 %', label: 'Spectral Similarity', sublabel: '' },
      terrain: { value: 'Low', label: 'Terrain Ruggedness', sublabel: '' }
    },
    areaInfo: {
      location: 'Candidate Area 2, Madhya Pradesh',
      aoi: '~ 22 sq. km',
      landCover: 'Dry Deciduous Forest',
      geological: 'Gneiss / Schist'
    },
    insights: [
      'Terrain features show partial overlap with manganese-prospective geological units.',
      'Spectral similarity is above threshold but below high-confidence level.',
      'Environmental indicators suggest possible mineral presence warranting field investigation.'
    ],
    cardImage: 'images/map-candidate2.png',
    mapImage: 'images/map-candidate2.png',
    mapAOILabel: 'AOI-C2'
  }
};

// Order of areas for rendering
const areaOrder = ['testCase01', 'testCase02', 'candidate01', 'candidate02'];

// ============================================================
// IMAGE LOCATIONS GUIDE
// ============================================================
// Place the following images in the /images folder:
//
// HEADER:
//   images/header-bg.jpg       - Earth from space / satellite view (1920x200px)
//
// AREA CARDS (thumbnails):
//   images/card-dulhapur.jpg    - Satellite thumbnail for Dulhapur (~200x120px)
//   images/card-bhagoli.jpg     - Satellite thumbnail for Bhagoli (~200x120px)
//   images/card-candidate1.jpg  - Satellite thumbnail for Candidate 1 (~200x120px)
//   images/card-candidate2.jpg  - Satellite thumbnail for Candidate 2 (~200x120px)
//
// MAP VIEWS (main map area):
//   images/map-dulhapur.jpg     - Heatmap/satellite overlay for Dulhapur (~800x500px)
//   images/map-bhagoli.jpg      - Heatmap/satellite overlay for Bhagoli (~800x500px)
//   images/map-candidate1.jpg   - Heatmap/satellite overlay for Candidate 1 (~800x500px)
//   images/map-candidate2.jpg   - Heatmap/satellite overlay for Candidate 2 (~800x500px)
//
// FOOTER:
//   images/footer-landscape.jpg - Forest/landscape image for footer area (~400x250px)
//
// LOGO:
//   images/logo.png             - MANGANAI logo icon (~40x40px, transparent PNG)
// ============================================================
