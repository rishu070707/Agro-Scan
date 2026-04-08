export const DISEASES = [
  { name: 'Leaf Blight (Bacterial)', crop:'Soybean', severity:'medium', conf:95,
    treatment: ['Apply copper-based bactericide every 7–10 days','Remove & destroy infected leaves immediately','Avoid overhead irrigation to reduce leaf wetness','Maintain proper plant spacing for air circulation'],
    info: ['Caused by Xanthomonas bacteria entering through leaf pores','Symptoms: water-soaked lesions turning brown with yellow halos','Spreads rapidly in warm, humid conditions (25–30°C)','Most damaging during flowering and pod-filling stages'],
    prevention: ['Use certified disease-free seeds each season','Rotate crops — avoid soybean on same field for 2 years','Apply preventive copper spray at planting','Monitor weather alerts for high-humidity windows']
  },
  { name: 'Powdery Mildew', crop:'Wheat', severity:'low', conf:95,
    treatment: ['Apply sulfur-based fungicide at first sign of infection','Spray neem oil solution (3% concentration) weekly','Prune dense foliage to improve air circulation','Avoid excess nitrogen fertilization'],
    info: ['Fungal disease caused by Erysiphe graminis','White powdery coating appears on leaves & stems','Thrives in dry weather with high humidity nights','Reduces photosynthesis and grain quality'],
    prevention: ['Plant resistant wheat varieties','Avoid excessive nitrogen application','Ensure adequate plant spacing','Scout fields weekly during susceptible growth stages']
  },
  { name: 'Late Blight (Phytophthora)', crop:'Tomato', severity:'high', conf:95,
    treatment: ['Immediately apply metalaxyl + mancozeb fungicide','Remove and burn all visibly infected plant parts','Rotate crops — avoid planting same species next season','Apply preventive copper spray to healthy neighbouring plants'],
    info: ['Caused by water mold Phytophthora infestans','Causes dark brown lesions on leaves, stems, and fruit','Spreads explosively under cool, moist conditions','Can devastate an entire crop within days if untreated'],
    prevention: ['Plant certified disease-free transplants only','Use resistant tomato varieties','Ensure good drainage; avoid waterlogged soil','Apply preventive fungicide 2 weeks before typical outbreak season']
  },
  { name: 'Rice Blast', crop:'Rice', severity:'high', conf:95,
    treatment: ['Apply tricyclazole or isoprothiolane fungicide','Drain fields and allow soil to dry briefly','Avoid excess nitrogen in blast-prone periods','Spray at boot stage and heading for best control'],
    info: ['Caused by fungus Magnaporthe oryzae','Diamond-shaped lesions with gray centers on leaves','Can also attack nodes, neck, and panicle causing "neck blast"','One of the most destructive rice diseases worldwide'],
    prevention: ['Use blast-resistant rice varieties','Balance nitrogen fertilizer — avoid excess','Maintain proper water management in paddy fields','Remove infected crop residues after harvest']
  },
  { name: 'No Disease Detected', crop:'', severity:'low', conf:95,
    treatment: ['Continue regular crop monitoring','Maintain optimal irrigation schedule','Apply balanced NPK fertilizer as per soil test','Document healthy baseline for future comparison'],
    info: ['Crop appears healthy — no visible disease lesions','Leaf color, texture and structure are within normal range','Good chlorophyll density detected across scan area','Continue current crop management practices'],
    prevention: ['Maintain current management practices','Scout fields weekly as a preventive habit','Keep field records for seasonal pattern analysis','Store any unused seeds in cool, dry conditions']
  },
];

export const HISTORY_DATA = [
  { id: 1, date:'27 Mar 2026', crop:'Soybean', disease:'Leaf Blight', severity:'medium', conf:91, status:'Treated' },
  { id: 2, date:'25 Mar 2026', crop:'Wheat',   disease:'Powdery Mildew', severity:'low', conf:87, status:'Monitoring' },
  { id: 3, date:'22 Mar 2026', crop:'Tomato',  disease:'Late Blight', severity:'high', conf:95, status:'Treated' },
  { id: 4, date:'20 Mar 2026', crop:'Rice',    disease:'Rice Blast', severity:'high', conf:88, status:'Treated' },
  { id: 5, date:'18 Mar 2026', crop:'Soybean', disease:'No Disease', severity:'low', conf:98, status:'Healthy' },
  { id: 6, date:'15 Mar 2026', crop:'Wheat',   disease:'Leaf Rust', severity:'medium', conf:83, status:'Monitoring' },
  { id: 7, date:'12 Mar 2026', crop:'Tomato',  disease:'No Disease', severity:'low', conf:96, status:'Healthy' },
];

export const LIBRARY = [
  { id: 1, name:'Leaf Blight (Bacterial)', crop:'Soybean', type:'Bacterial', severity:'medium', icon:'🌿', symptoms:'Water-soaked lesions turning brown, yellow halos.', cause:'Xanthomonas bacteria. Spreads via water & tools.', treatment:'Copper bactericide, remove infected leaves.' },
  { id: 2, name:'Powdery Mildew', crop:'Wheat', type:'Fungal', severity:'low', icon:'🌾', symptoms:'White powdery coating on leaves, yellowing.', cause:'Erysiphe graminis. Cool nights & dry weather.', treatment:'Sulfur or neem oil spray, reduce nitrogen.' },
  { id: 3, name:'Late Blight', crop:'Tomato', type:'Oomycete', severity:'high', icon:'🍅', symptoms:'Dark brown lesions, white mold on undersides, rapid collapse.', cause:'Phytophthora infestans. Cool, moist conditions.', treatment:'Metalaxyl + mancozeb, remove infected parts.' },
  { id: 4, name:'Rice Blast', crop:'Rice', type:'Fungal', severity:'high', icon:'🌱', symptoms:'Diamond-shaped gray lesions, neck rot.', cause:'Magnaporthe oryzae. High humidity & excess N.', treatment:'Tricyclazole fungicide, drain fields.' },
  { id: 5, name:'Leaf Rust', crop:'Wheat', type:'Fungal', severity:'medium', icon:'🌾', symptoms:'Orange-brown pustules on upper leaf surface.', cause:'Puccinia triticina. Wind-dispersed spores.', treatment:'Propiconazole fungicide, resistant varieties.' },
  { id: 6, name:'Bacterial Canker', crop:'Tomato', type:'Bacterial', severity:'medium', icon:'🍅', symptoms:'Wilting, whitish stem lesions, bird-eye fruit spots.', cause:'Clavibacter michiganensis. Infected seed.', treatment:'Copper spray, certified disease-free seed.' },
  { id: 7, name:'Sheath Blight', crop:'Rice', type:'Fungal', severity:'medium', icon:'🌱', symptoms:'Oval lesions on sheaths, gray-brown borders.', cause:'Rhizoctonia solani. High humidity, dense planting.', treatment:'Hexaconazole spray, reduce plant density.' },
  { id: 8, name:'Crown Rot', crop:'Wheat', type:'Fungal', severity:'high', icon:'🌾', symptoms:'Brown base discolouration, wilting, white heads.', cause:'Fusarium species. Soil and crop residue.', treatment:'Seed treatment with triticonazole, crop rotation.' },
];

export const EXPERTS = [
  { id: 1, name:'Dr. Priya Sharma', title:'Plant Pathologist', org:'ICAR — New Delhi', spec:'Fungal & Bacterial Diseases', rating:4.9, reviews:128, avail:true, avatar:'P' },
  { id: 2, name:'Dr. Arun Mehta', title:'Crop Scientist', org:'Punjab Agri University', spec:'Wheat & Rice Systems', rating:4.7, reviews:94, avail:true, avatar:'A' },
  { id: 3, name:'Dr. Sunita Rao', title:'Agronomy Expert', org:'ICRISAT — Hyderabad', spec:'Soybean & Legumes', rating:4.8, reviews:112, avail:false, avatar:'S' },
  { id: 4, name:'Dr. Rajiv Kumar', title:'Soil Scientist', org:'IARI — New Delhi', spec:'Soil Health & Nutrients', rating:4.6, reviews:76, avail:true, avatar:'R' },
  { id: 5, name:'Dr. Kavitha Nair', title:'Entomologist', org:'KAU — Kerala', spec:'Pest Management', rating:4.9, reviews:145, avail:false, avatar:'K' },
  { id: 6, name:'Dr. Vikram Patel', title:'Irrigation Engineer', org:'CWRDM — Gujarat', spec:'Water Stress & Drought', rating:4.5, reviews:61, avail:true, avatar:'V' },
];

export const NOTIF_OPTS = [
  { id:'n1', label:'Disease alerts via email', val:true },
  { id:'n2', label:'Weekly crop health summary', val:true },
  { id:'n3', label:'Expert reply notifications', val:true },
  { id:'n4', label:'New disease in my region', val:false },
  { id:'n5', label:'Product & feature updates', val:false },
];
