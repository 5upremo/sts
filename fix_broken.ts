import fs from 'fs';
let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

const replacements: Record<string, string> = {
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/NPT_Participation.svg": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1200",
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Fat_Man_on_Trailer.jpg": "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&q=80&w=1200",
  "https://upload.wikimedia.org/wikipedia/commons/2/23/Clostridium_botulinum_01.jpg": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
};

let commonsCount = 0;
content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/\/\//g, () => {
    commonsCount++;
    return commonsCount === 1 ? "https://images.unsplash.com/photo-1534341908-0130f1469e76?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200";
});

for (const [key, value] of Object.entries(replacements)) {
  content = content.replace(key, value);
}

fs.writeFileSync('src/data/lessons.ts', content);
console.log('Fixed URLs');
