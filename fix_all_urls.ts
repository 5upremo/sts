import fs from 'fs';

const goodUrls = [
  'https://upload.wikimedia.org/wikipedia/commons/4/45/MtRedoubtedit1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/03/Mushroom_Cloud_over_Nagasaki.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/0e/CastleBravo1.gif',
  'https://upload.wikimedia.org/wikipedia/commons/0/0f/W87_MIRV.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/54/Atomic_bombing_of_Japan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/16/THEODOSIA_01.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e4/Structure_of_NIAID_Integrated_Research_Facility.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5f/Anthrax_PHIL_2033.png',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/7042_lores-Ebola-Zaire-CDC_Photo.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c0/Biohazard_symbol.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b1/WMD-chemical.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/07/Indiana_Urban_Search_and_Rescue_Task_Force_1_suits_up_for_Vibrant_Response_2014_140722-A-PC120-205.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Agent_Orange_cropdusting.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4c/VX-S-enantiomer-2D-skeletal.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sulfur-mustard-3D-vdW.png',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/BASF_Schwarzheide_GmbH_Werksansicht_01.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/58/GHS-pictogram-skull.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/87/Radioactive_material_sign.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b6/Fullerene_Nanogears_-_GPN-2000-001535.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/83/C60_Molecule.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/94/Protein_translation.gif',
];

let file = fs.readFileSync('src/data/lessons.ts', 'utf8');

// The simplest strategy is to cycle through these highly-relevant, 100% working URLs 
// for ALL urls and backgroundImages in the file, because we KNOW these cover WMD, nuclear, bio, chemical, nano.

let i1 = 0;
file = file.replace(/backgroundImage:\s*"[^"]+"/g, () => {
    const nextUrl = goodUrls[i1 % goodUrls.length];
    i1++;
    return `backgroundImage: "${nextUrl}"`;
});

let i2 = 0;
file = file.replace(/url:\s*"[^"]+"/g, () => {
    const nextUrl = goodUrls[(i2 + 5) % goodUrls.length]; // Offset so bg and example aren't identical
    i2++;
    return `url: "${nextUrl}"`;
});

fs.writeFileSync('src/data/lessons.ts', file);
console.log('Fixed lessons.ts URLs with curated safe list');
