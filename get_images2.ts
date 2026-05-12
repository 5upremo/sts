const fetchWikiImage = async (query: string) => {
  try {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(query)}`);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId !== "-1" && pages[pageId].original) {
      return pages[pageId].original.source;
    }
  } catch (e) { }
  return null;
}
const run = async () => {
  console.log("Radiation:", await fetchWikiImage("Radiation-warning-symbol"));
  console.log("WW1Gas:", await fetchWikiImage("Gas_mask"));
  console.log("Anthrax Labs:", await fetchWikiImage("Centers_for_Disease_Control_and_Prevention"));
  console.log("ChemicalPlant:", await fetchWikiImage("Chemical_plant"));
  console.log("MushroomCloud:", await fetchWikiImage("Mushroom_cloud"));
  console.log("Nuclear_Testing:", await fetchWikiImage("Operation_Castle"));
  console.log("Buckyball:", await fetchWikiImage("Buckminsterfullerene"));
  console.log("Solar:", await fetchWikiImage("Solar_cell"));
  console.log("Hydrophobic:", await fetchWikiImage("Lotus_effect"));
  console.log("FutureCity:", await fetchWikiImage("Sustainable_city"));
}
run();
