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
  console.log("Radiation:", await fetchWikiImage("Hazard_symbol"));
  console.log("Mongol:", await fetchWikiImage("Siege_of_Caffa"));
  console.log("Biolab:", await fetchWikiImage("Biosafety_level"));
  console.log("Chemical:", await fetchWikiImage("Chemical_weapon"));
  console.log("Nerve:", await fetchWikiImage("VX_(nerve_agent)"));
  console.log("Mustard:", await fetchWikiImage("Mustard_gas"));
  console.log("DirtyBomb:", await fetchWikiImage("Dirty_bomb"));
  console.log("UN:", await fetchWikiImage("United_Nations"));
  
  console.log("Nanomedicine:", await fetchWikiImage("Nanomedicine"));
  console.log("Nanorobotics:", await fetchWikiImage("Nanorobotics"));
  console.log("Nanoelectronics:", await fetchWikiImage("Nanoelectronics"));
  console.log("GreenEnergy:", await fetchWikiImage("Renewable_energy"));
  console.log("GreyGoo:", await fetchWikiImage("Gray_goo"));
}
run();
