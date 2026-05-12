import fs from 'fs';
const path = 'src/data/lessons.ts';
let content = fs.readFileSync(path, 'utf8');

// Replace "Search on Google: 'X' for Y" with "Visual Idea: X"
content = content.replace(/Search on Google: '([^']+)'[^"]*/g, "Visual Idea: $1.");

// Add title backgrounds if they don't exist
content = content.replace(
  `backgroundImage: "https://images.unsplash.com/photo-1532187875605-2fe35f743e72?auto=format&fit=crop&q=80&w=1200",`,
  `backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Scanning_Tunneling_Microscopy_image_of_DNA.jpg",`
);

content = content.replace(
  `backgroundImage: "https://cdn.dribbble.com/userupload/20017899/file/original-45309eba9403d111757e5e86ce2427ba.gif",`,
  `backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/4/45/MtRedoubtedit1.jpg",`
);

fs.writeFileSync(path, content);
console.log("Fixed visualSuggestions!");
