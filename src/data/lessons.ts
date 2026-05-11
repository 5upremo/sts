export interface Slide {
  id: string;
  title: string;
  onSlideText: string[];
  speakerNotes: string;
  visualSuggestion: string;
  engagementElement: {
    question: string;
    answer: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  slides: Slide[];
}

export const LESSONS: Lesson[] = [
  {
    id: "wmd",
    title: "Lesson 4: Weapons of Mass Destruction",
    slides: [
      {
        id: "intro",
        title: "Introduction: Weapons of Mass Destruction",
        onSlideText: [
          "Content Standard: Understanding the implications of Weapons of Mass Destruction (WMD).",
          "Learning Outcomes:",
          "1. Discuss different kinds of WMD.",
          "2. Identify effects of WMD on humans and environment.",
          "3. Propose actions/policies to regulate WMD use.",
          "Word Bank: biowarfare, chemical weapon of mass destruction."
        ],
        speakerNotes: "Welcome to Lesson 4. Today we'll define and analyze Weapons of Mass Destruction. Our goal is to understand not just what they are, but their devastating impacts on both humanity and our global environment. By the end, you'll be challenged to think about policy and regulation.",
        visualSuggestion: "A title slide with a somber, high-contrast silhouette of a mushroom cloud or a biohazard symbol to set the tone.",
        engagementElement: {
          question: "Without looking yet, what are the three main categories of WMD you've heard of?",
          answer: "Usually Nuclear, Biological, and Chemical."
        }
      },
      {
        id: "discussion-1",
        title: "Defining Weapons and WMDs",
        onSlideText: [
          "Weapon: A device designed to be used in fighting an enemy to cause bodily harm or defend oneself.",
          "Weapon making is part of a country's activity; it is a symbol of strength and power.",
          "WMD Characteristics (Laura Reed):",
          "1. Ability to produce large-scale destruction.",
          "2. Indiscriminate attack: They affect usually the civilians.",
          "Major Types: Nuclear, Chemical warfare agents, Biological warfare agents.",
          "Other components: Radiological materials, missile technology, delivery systems (aircraft, ballistic missiles)."
        ],
        speakerNotes: "According to Cambridge University Press, a weapon is for harm or defense. However, WMDs are a distinct class. Laura Reed emphasizes two factors: the scale of destruction and their indiscriminate nature. Unlike precision strikes, WMDs often devastate civilian populations. We also must consider how they are delivered—using missiles or aircraft.",
        visualSuggestion: "A diagram showing a standard weapon vs. the wide-reaching impact area of a WMD to illustrate 'indiscriminate attack'.",
        engagementElement: {
          question: "What is the primary difference between a conventional weapon and a WMD according to the text?",
          answer: "WMDs produce large-scale destruction and do not choose their targets (affecting civilians)."
        }
      },
      {
        id: "four-kinds",
        title: "Four Kinds of WMD",
        onSlideText: [
          "1. Biological WMD: Uses harmful biological agents (pathogenic microorganisms or neurotoxins like viruses/bacteria) to cause death/disease.",
          "2. Chemical WMD: Contains toxic chemical compounds (chlorine gas, mustard gas) intended to kill or injure.",
          "3. Nuclear WMD: Releases massive energy by splitting atoms (fission) of highly enriched uranium or plutonium.",
          "4. Radiological WMD: 'Dirty bombs' that spread dangerous radioactive materials using conventional explosives."
        ],
        speakerNotes: "We categorize WMDs into four distinct groups. Biological weapons use living organisms or their toxins. Chemical weapons use synthetic or natural chemical agents. Nuclear weapons are the most powerful ever created, relying on fission. Radiological weapons don't use nuclear fusion/fission but rather spread radioactive particles via regular explosions.",
        visualSuggestion: "A 2x2 grid with icons for each: a DNA helix (Bio), a gas mask (Chemical), an atom (Nuclear), and a 'caution' symbol with particles spreading (Radiological).",
        engagementElement: {
          question: "Which type of WMD is often referred to as a 'dirty bomb'?",
          answer: "Radiological weapon of mass destruction."
        }
      },
      {
        id: "history-1",
        title: "History of WMD (Ancient to 18th Century)",
        onSlideText: [
          "429 BC (Spartan): Toxic fumes from burnt pitch and sulphur (Chemical).",
          "256 AD (Persia): Sulphur crystals and bitumen used against Romans (Chemical).",
          "960-1279 AD (China): Arsenic smoke used in battle (Chemical).",
          "1346-1347 (Mongol): Plague-contaminated corpses catapulted over Caffa walls (Biological).",
          "1456 (Serbia): Poison-dipped rags ignited to create toxic clouds (Biological).",
          "1710 (Russia): Plague-infected corpses hurled over Reval walls (Biological).",
          "1754-1767 (Britain): Smallpox-contaminated blankets given to native tribes (Biological)."
        ],
        speakerNotes: "WMDs are not modern inventions. As early as 429 BC, Spartans used chemical fumes. The Mongols used 'biological warfare' by literally throwing diseased bodies over city walls during the Siege of Caffa. Perhaps most infamously, the use of smallpox-infected blankets during the French-Indian Wars showed an early, brutal understanding of contagion as a weapon.",
        visualSuggestion: "A timeline graphic mapping these events from BC to the 18th century.",
        engagementElement: {
          question: "How did the Mongols use biological warfare in 1346?",
          answer: "By catapulting plague-contaminated corpses over the walls of Caffa."
        }
      },
      {
        id: "history-2",
        title: "History of WMD (20th Century: WWI & WWII)",
        onSlideText: [
          "1914-1918 (WWI): First use of tear gas (France/Germany) and chlorine gas (England/France/Germany).",
          "1918 (Germany): Anthrax and Glanders used to infect livestock; chemical shells used against US.",
          "1937-1940 (Japan): Inception of 'Unit 731'; human experiments; plague-carrying fleas dropped on China.",
          "1942 (Germany): Nazis use Zyklon B (hydrogen cyanide) in gas chambers for mass murder.",
          "1945 (Germany): Sewage-poisoning of reservoirs; (US): Atomic bombs dropped on Hiroshima and Nagasaki."
        ],
        speakerNotes: "The 20th century saw a massive escalation. WWI was 'the chemist's war' with widespread gas use. Japan's 'Unit 731' conducted horrific biological experiments on human prisoners. The Holocaust utilized Zyklon B for industrial-scale murder. Finally, 1945 marked the only combat use of nuclear weapons in history, changing global politics forever.",
        visualSuggestion: "Black and white archival-style photos of a WWI gas mask and the Hiroshima mushroom cloud.",
        engagementElement: {
          question: "What was the name of the chemical agent used by Nazis in concentration camp gas chambers?",
          answer: "Zyklon B (hydrogen cyanide)."
        }
      },
      {
        id: "history-3",
        title: "History of WMD (Post-WWII to 1980s)",
        onSlideText: [
          "1962-1970 (Vietnam): US use of tear gas and defoliants like Agent Orange.",
          "1963-1967 (Yemen): Chemical weapons used by Egypt.",
          "1970s (Rhodesia): Anthrax and cholera used against guerrilla rebels.",
          "1975-1983 (Cold War): Alleged use of 'Yellow Rain' (mycotoxins) in Laos/Kampuchea by Soviet-backed forces.",
          "1983-1988 (Iraq): Mustard gas, hydrogen cyanide, and Tabun used against Iran and the Kurds."
        ],
        speakerNotes: "Even after the horrors of WWII, WMD use continued. The Vietnam War saw massive use of chemical defoliants like Agent Orange, which had long-term ecological and health effects. In the 80s, the Iran-Iraq war saw some of the most concentrated use of chemical weapons, including against civilian Kurdish populations.",
        visualSuggestion: "A map highlighting chemical warfare hotspots in Yemen, SE Asia, Rhodesia, and the Middle East.",
        engagementElement: {
          question: "What chemical defoliant was used during the Vietnam War?",
          answer: "Agent Orange."
        }
      },
      {
        id: "bio-warfare-1",
        title: "Biological Warfare: Smallpox & Anthrax",
        onSlideText: [
          "Biowarfare: Use of contagious diseases/pathogens.",
          "1. Smallpox (Variola virus):",
          "   - Symptoms: High fever, body aches, rash with fluid-filled bumps turning to scabs.",
          "   - Classification: CDC Category A due to high mortality and air transmission.",
          "   - Eradication: WHO mass vaccination (1967) declared eradicated by 1977.",
          "2. Anthrax (Bacillus anthracis):",
          "   - Survival: Spores can live in soil for years; deadly when inhaled.",
          "   - Potency: 100kg can kill over 3M people; death within 7 days.",
          "   - History: 2001 US Senate/media mail attacks."
        ],
        speakerNotes: "Biological weapons are particularly terrifying because they can spread invisibly. Smallpox, now eradicated in the wild but kept in labs, is a Category A threat. Anthrax is even more resilient; its spores can survive for decades in soil. A small amount of anthrax powder can have a catastrophic death toll if dispersed correctly.",
        visualSuggestion: "Microscope imagery of Variola virus and Bacillus anthracis.",
        engagementElement: {
          question: "When was Smallpox officially declared eradicated worldwide?",
          answer: "1977 (following the 1967 WHO vaccination campaign)."
        }
      },
      {
        id: "bio-warfare-2",
        title: "Deadly Pathogens: Ebola & Plague",
        onSlideText: [
          "3. Ebola Virus: Causes hemorrhagic fevers with severe internal/external bleeding.",
          "   - Transmission: Contact with blood or bodily fluids.",
          "   - History: 1970s Zaire/Sudan; outbreaks in Africa/Europe/US.",
          "4. Plague (Yersinia pestis): 'Black Death'",
          "   - Strains: Bubonic (spread by fleas/rats) and Pneumonic (airborne).",
          "   - Severity: Pneumonic plague mortality is 50-90% if untreated.",
          "   - Symptoms: Swollen glands (buboes), fever, chills, bloody mucus."
        ],
        speakerNotes: "Ebola is known for its high mortality rate and the 'hemorrhagic' nature of the disease. The Plague, which killed half of Europe in the 14th century, remains a bioweapon threat today, especially the pneumonic version which spreads through the air and can kill nearly everyone infected if not treated immediately.",
        visualSuggestion: "A diagram of the plague transmission cycle: Rats -> Fleas -> Humans.",
        engagementElement: {
          question: "Which form of plague is more dangerous as a bioweapon because it spreads through the air?",
          answer: "Pneumonic plague."
        }
      },
      {
        id: "bio-warfare-3",
        title: "Other Biological Threats",
        onSlideText: [
          "5. Tularemia (Rabbit Fever): One of the most infectious bacteria; only a few organisms needed to cause disease.",
          "6. Botulinum Toxin: Produced by Clostridium botulinum; one of the most poisonous substances known.",
          "   - Effects: Blurred vision, paralysis, respiratory failure.",
          "7. Rice Blast: Fungus targeting crops; can cause severe hunger in poor countries.",
          "8. Rinderpest (Cattle Plague): Virus affecting ruminant animals; leads to dehydration and death.",
          "9. Nipah Virus: 1999 Malaysia outbreak; 50% mortality rate; neurological symptoms."
        ],
        speakerNotes: "Beyond human pathogens, bioweapons can target food supplies. Rice Blast and Rinderpest are 'agricultural weapons' designed to cause famine and economic collapse. Meanwhile, Botulinum toxin is so potent that it can cause total paralysis and death from respiratory failure within 24 to 72 hours.",
        visualSuggestion: "Photos of rice plants with grayish lesions and a diseased cattle specimen.",
        engagementElement: {
          question: "Which biological agent is known as one of the most poisonous substances on Earth?",
          answer: "Botulinum toxin."
        }
      },
      {
        id: "chemical-warfare-1",
        title: "Chemical WMDs: Characteristics & Effects",
        onSlideText: [
          "Chemical WMD: Toxic chemicals causing death, injury, or sensory irritation.",
          "Regulation: 1997 global chemical weapons ban ratified by US Senate (over 80 nations).",
          "Effectiveness factors: Freshness, purity, weather, wind direction, dissemination method.",
          "Common Symptoms:",
          " - Choking, respiratory failure, skin irritation.",
          " - Choking agents, blister agents, nerve agents.",
          " - Headaches, palpitations, vomiting, convulsions."
        ],
        speakerNotes: "Chemical weapons are often weather-dependent. Wind direction and purity levels determine their lethality. We distinguish them by their effects: nerve agents attack the nervous system, blister agents burn the skin and lungs, and choking agents prevent breathing. The 1997 treaty was a landmark in trying to eliminate these from global arsenals.",
        visualSuggestion: "A graphic of a gas mask with labels for the different types of agents (Nerve, Blister, Choking).",
        engagementElement: {
          question: "What determines the effectiveness of a chemical weapon during deployment?",
          answer: "Freshness, purity, weather conditions, wind direction, and dissemination means."
        }
      },
      {
        id: "chemical-agents-1",
        title: "Common Chemical Agents (Sarin, Soman, VX)",
        onSlideText: [
          "1. Sarin (GB): Colorless, odorless nerve gas; interferes with signaling in nervous system (suffocation).",
          "2. Soman: Combination of Sarin and Lewisite; colorless liquid (browns if aged); more deadly than Sarin.",
          "3. VX: O-ethyl S-diisopropylaminomethyl methylphosphonothiolate.",
          "   - Brownish liquid, odorless vapors.",
          "   - 100 times more deadly than Sarin.",
          "   - Causes paralysis and respiratory failure."
        ],
        speakerNotes: "Nerve agents like Sarin and VX are the pinnacle of chemical lethality. VX is 100 times more deadly than Sarin; even a tiny drop on the skin can be fatal. These substances are designed to overstimulate the nervous system until the body's muscles—including those for breathing—simply stop working.",
        visualSuggestion: "A table comparing the toxicity levels of Sarin vs. VX.",
        engagementElement: {
          question: "Which chemical agent is described as being 100 times more deadly than Sarin?",
          answer: "VX."
        }
      },
      {
        id: "chemical-agents-2",
        title: "Tabun, Zyklon B, and Mustard Agents",
        onSlideText: [
          "4. Tabun: Colorless/brownish liquid; odorless as vapor; first of the nerve gases to be manufactured.",
          "5. Zyklon B: Crystalline hydrogen cyanide; used in Nazi gas chambers; smells like bitter almonds.",
          "6. Mustard Agents: Blister agents; cause large blisters on skin/lungs.",
          "   - Odors: Garlic, onions, or mustard.",
          "   - Sulfur mustard is heavier than air and settles in low-lying areas."
        ],
        speakerNotes: "Mustard agents were infamous in WWI. They are 'persistent,' meaning they stay in the environment for a long time. They are heavier than air, so they settle in trenches and low ground. Zyklon B, while used as a 'weapon' by the Nazis, was technically a pesticide repurposed for mass execution.",
        visualSuggestion: "Archival drawing of soldiers in a trench showing how heavy gases sink.",
        engagementElement: {
          question: "Where does sulfur mustard gas tend to settle since it is heavier than air?",
          answer: "In low-lying areas."
        }
      },
      {
        id: "nuclear-wmd-1",
        title: "Nuclear Weapons: Fusion and Fission",
        onSlideText: [
          "Nuclear Weapons: Release massive energy by splitting/fusing atoms.",
          "Global Inventory: ~30,000 nuclear weapons currently exist.",
          "Two Main Types:",
          "1. Fission: Atoms are split (Plutonium/Uranium). Releases extra neutrons, triggering a chain reaction.",
          "2. Fusion (Hydrogen Bombs): Atoms are fused together (Deuterium/Tritium).",
          "   - Occurs in the sun; requires extreme heat/pressure.",
          "   - 10 to 100 times more explosive than fission bombs."
        ],
        speakerNotes: "Nuclear weapons are in a class of their own. Fission bombs (A-bombs) split heavy atoms. Fusion bombs (H-bombs) fuse light atoms together, replicating the engine of the sun. H-bombs are significantly more powerful, and theoretical physics suggests there is no upper limit to how large a fusion explosion can be.",
        visualSuggestion: "A diagram showing the difference between an atom splitting (Fission) and atoms joining (Fusion).",
        engagementElement: {
          question: "Which type of nuclear reaction is more powerful: Fission or Fusion?",
          answer: "Fusion (often 10 to 100 times more explosive)."
        }
      },
      {
        id: "nuclear-effects",
        title: "Devastating Effects of Nuclear Weapons",
        onSlideText: [
          "1. Blast: Shock wave equivalent to thousands of pounds of pressure (30 psi can crush humans/buildings).",
          "2. Thermal Radiation: High-intensity heat/light; creates a fireball; ignites skin/materials at great distances.",
          "3. Direct Radiation: Gamma, alpha, beta particles, and neutrons. Can pass through solid objects.",
          "4. Fallout: Radioactive particles propelled into the blast cloud that fall back to earth, contaminated by radiation. Carried by wind for miles."
        ],
        speakerNotes: "The damage from a nuclear bomb comes in four waves. First, the blast wave literally crushes structures. Next, the thermal radiation burns everything within sight of the explosion. Third, the immediate radiation penetrates deep into cells. Finally, 'fallout'—radioactive dust—can travel hundreds of miles, poisoning land and water long after the blast is over.",
        visualSuggestion: "A sequence of four icons illustrating Blast, Heat, Radiation, and Dust clouds.",
        engagementElement: {
          question: "What do we call the radioactive particles that fall back to Earth after a nuclear explosion?",
          answer: "Fallout."
        }
      },
      {
        id: "radiological-dirty-bombs",
        title: "Radiological Weapons (Dirty Bombs)",
        onSlideText: [
          "Radiological Weapon of Mass Disruption vs. Destruction.",
          "Composition: Radioactive material (radium, etc.) wrapped around conventional explosives (dynamite).",
          "Goal: Spread toxic radiation to create terror and render areas uninhabitable.",
          "Comparison: Much smaller scale than a nuclear detonation; intended for mass disruption rather than mass killings.",
          "Historical Note: Workers licking radium brushes for watch faces suffered bone cancer (example of radiation danger)."
        ],
        speakerNotes: "It is important to distinguish 'Dirty Bombs' from Nuclear Bombs. A dirty bomb doesn't cause a nuclear explosion; it uses dynamite to spray radioactive waste. While the initial blast might only kill a few people, the radiation creates a long-term 'exclusion zone' and massive public panic, which is why they are called weapons of mass disruption.",
        visualSuggestion: "An illustration of a 'Dirty Bomb' showing radioactive material dispersed by a regular explosive vs. a nuclear mushroom cloud.",
        engagementElement: {
          question: "What is the primary goal of a radiological weapon?",
          answer: "To spread toxic radiation and cause mass disruption/terror."
        }
      },
      {
        id: "summary-lesson-4",
        title: "Lesson Summary & Assessment",
        onSlideText: [
          "Summary:",
          " - WMDs are distinguished by scale and indiscriminate impact.",
          " - Categories: Biological, Chemical, Nuclear, Radiological.",
          " - History shows a long lineage of use from ancient times to the modern era.",
          " - Global treaties (Geneva Protocol, CWC) aim to regulate and ban these weapons.",
          "Final Assessment Check:",
          " 1. Define WMD in your own words.",
          " 2. Compare the lethality of Sarin vs VX.",
          " 3. Explain the long-term impact of Fallout."
        ],
        speakerNotes: "We've covered the dark history and technical details of these weapons. From plague-infested corpses to the hydrogen bomb, the scale of destruction has only grown. The international community continues to struggle with the regulation and total elimination of these stocks to ensure human survival.",
        visualSuggestion: "A collage of the different WMD icons we've used throughout the deck.",
        engagementElement: {
          question: "Why are WMDs considered 'indiscriminate'?",
          answer: "Because they cannot be limited to military targets and inevitably affect civilians on a large scale."
        }
      }
    ]
  },
  {
    id: "nanotech",
    title: "Lesson 6: Nanotechnology",
    slides: [
      {
        id: "nt-intro",
        title: "Introduction to Nanotechnology",
        onSlideText: [
          "Content Standard: Understanding the meaning, uses, and significance of Nanotechnology.",
          "Learning Outcomes:",
          "1. State the meaning of Nanotechnology.",
          "2. Describe its development and importance to society.",
          "3. Describe key devices (AFM, STM).",
          "4. Understand implications (Health, Environment, Privacy).",
          "Word Bank: nanorobot, nanomedicine, nanomachine, nanoelectronics."
        ],
        speakerNotes: "Welcome to Lesson 6. We're shifting from the scale of mass destruction to the scale of the unimaginably small. Nanotechnology is changing everything from the medicine we take to the way we power our cars.",
        visualSuggestion: "A zoomed-in image of a microchip or a molecular model.",
        engagementElement: {
          question: "What does the prefix 'nano-' usually imply in terms of size?",
          answer: "Extremely small (one-billionth)."
        }
      },
      {
        id: "nt-definition",
        title: "Defining the Nanoscale",
        onSlideText: [
          "Nanotechnology: Field of science dealing with developing and innovating tools/machines at the scale of atoms and molecules.",
          "Nanometer (nm): One-billionth (1/1,000,000,000) of a meter.",
          "Visual Scale:",
          " - Diameter of a hydrogen atom: ~0.1 nm.",
          " - Average human hair: 25,000 nm wide.",
          "Nanomachine: Tiny machine capable of doing human tasks at nano level.",
          "Nanorobot: Miniature 'surgeons' implanted in the body to diagnose/treat disorders."
        ],
        speakerNotes: "To understand 'nano,' think about a human hair. A single hair is roughly 25,000 nanometers wide. We are working at a scale where we can manipulate individual atoms. At this level, the physical properties of materials change—gold might turn red, and insulators might become conductors.",
        visualSuggestion: "A scale comparison chart showing a human hair, a red blood cell, a DNA strand, and an atom.",
        engagementElement: {
          question: "How many nanometers wide is the average human hair?",
          answer: "About 25,000 nanometers."
        }
      },
      {
        id: "nt-history",
        title: "Brief History of Nanotechnology",
        onSlideText: [
          "1959: Dr. Richard Feynman presents 'There is Plenty of Room at the Bottom'. Envisioned building tiny factories and machines.",
          "1974: Norio Taniguchi coins the term 'nanotechnology' at University of Tokyo.",
          "1981: Invention of Scanning Tunneling Microscope (STM).",
          "1985: Discovery of Fullerene (C60).",
          "1991: Dr. Sumio Iijima develops carbon nanotubes at NEC.",
          "1998: US National Science and Technology Council (NSTC) realizes benefits.",
          "2000: President Bill Clinton funds research with $500M."
        ],
        speakerNotes: "Richard Feynman is the 'godfather' of nanotech, having predicted in 1959 that we would someday be able to arrange atoms individually. It wasn't until 1981, with the invention of the STM, that we could finally 'see' and manipulate atoms directly. Modern funding really exploded at the turn of the millennium.",
        visualSuggestion: "A portrait of Richard Feynman alongside a timeline of these key dates.",
        engagementElement: {
          question: "Who coined the term 'nanotechnology' and in what year?",
          answer: "Norio Taniguchi in 1974."
        }
      },
      {
        id: "nt-pioneers",
        title: "Nanotechnology Pioneers",
        onSlideText: [
          "Richard Feynman: Nobel Prize winner (Quantum Physics); described manipulating atoms by 'one atom or one molecule'.",
          "Norio Taniguchi: Defined nanotech as the processing of separation, consolidation, and deformation of materials.",
          "Eric Drexler: Popularized molecular nanotechnology (MNT) in the 70s/80s; wrote 'Nanosystems' (1992).",
          "Kim Eric Drexler (Born 1955): American engineer who distinguished nano-ideas from other scientists."
        ],
        speakerNotes: "These three figures built the foundation of the field. Feynman provided the vision, Taniguchi gave it a name and technical definition, and Drexler brought the concept of 'molecular manufacturing' to the mainstream, imagining a world where machines build themselves atom by atom.",
        visualSuggestion: "Side-by-side portraits of Feynman, Taniguchi, and Drexler.",
        engagementElement: {
          question: "What is the name of the book written by Eric Drexler in 1991/1992?",
          answer: "Nanosystems: Molecular Machinery Manufacturing and Computation."
        }
      },
      {
        id: "nt-key-devices",
        title: "Key Devices: AFM and STM",
        onSlideText: [
          "Atomic Force Microscope (AFM): Uses a probe to analyze surfaces with up to 100,000,000 times magnification. Can produce 3D images of surfaces at the atomic level.",
          "Scanning Tunneling Microscope (STM): Scanning probes that launched nanotechnology. Can conduct electricity; requires special temperatures.",
          "Carbon Nanotubes: Cylindrical allotropes of carbon; highest strength-to-weight ratio (used in light spacecrafts).",
          "Graphene: One-atom-thick sheet of carbon; high electrical resistance changes when other molecules attach (useful for sensors)."
        ],
        speakerNotes: "Without the AFM and STM, nanotechnology wouldn't exist. These aren't like regular microscopes; they 'feel' the surface of atoms using physical probes. Carbon nanotubes and Graphene are the 'super materials' of the nano-world, offering incredible strength and unique electrical properties.",
        visualSuggestion: "An image of an AFM machine and a molecular model of a carbon nanotube.",
        engagementElement: {
          question: "How many times can an Atomic Force Microscope (AFM) magnify a surface?",
          answer: "Up to 100,000,000 times."
        }
      },
      {
        id: "nt-apps-medicine",
        title: "Applications: Nanomedicine",
        onSlideText: [
          "Nanomachines/Nanorobots:",
          " - Equipped with wireless transmitters to travel through blood/lymph.",
          " - Monitor pulse, brain-wave activity, and chemical imbalances.",
          " - Repair damaged cells or assist damaged structures.",
          " - Repair genetic deficiencies by altering DNA molecules.",
          " - Remove blockages in arteries.",
          "Other uses: Activity monitors, targeted chemotherapy, nebulizers, insulin pumps."
        ],
        speakerNotes: "In medicine, nanotech allows for precision that was previously impossible. Imagine a robot smaller than a red blood cell that can swim through your arteries, find a cancer cell, and deliver a toxin directly to it without harming healthy tissue. This is the promise of nanomedicine.",
        visualSuggestion: "A conceptual illustration of a nanorobot inside a blood vessel interacting with cells.",
        engagementElement: {
          question: "What can nanorobots do to assist people with genetic deficiencies?",
          answer: "They can help correct genetic deficiencies by altering or replacing DNA molecules."
        }
      },
      {
        id: "nt-apps-electronics-env",
        title: "Applications: Electronics and Environment",
        onSlideText: [
          "Electronics (Nanoelectronics):",
          " - Reduce weight and power consumption.",
          " - Increased memory density; flexible/bendable mobile devices (Nokia Research Center).",
          " - Transistors on a wafer: faster processors and lower costs.",
          "Environment:",
          " - Iron nanoparticles decompose organic solvents in water.",
          " - Silver nanoclusters used as catalysts for cleaner plastic production.",
          " - Nanotube-mixed epoxy for lighter, stronger windmill blades.",
          " - Solar cells using silicon nanowire for cheaper energy."
        ],
        speakerNotes: "Electronics are getting smaller and more efficient thanks to nano-sized transistors. On the environmental front, nanotech offers new ways to clean water and generate green energy. Silicon nanowires could make solar power cheaper than coal or oil by improving efficiency at a lower cost.",
        visualSuggestion: "Pictures of flexible phone prototypes and high-efficiency wind turbines.",
        engagementElement: {
          question: "How are nanotubes used to improve wind energy?",
          answer: "They are mixed with epoxy to produce lighter but stronger windmill blades for greater electricity output."
        }
      },
      {
        id: "nt-apps-consumer-sport",
        title: "Applications: Consumer and Sporting Goods",
        onSlideText: [
          "Consumer Products:",
          " - Silver nanoparticles in fabrics destroy odor-causing bacteria.",
          " - Skin care products with better penetration.",
          " - Lithium-ion batteries with nano-based electrodes for electric cars.",
          " - Flame retardant foam; dirt/stain repellent 'hydrophobic' fabrics.",
          "Sporting Goods:",
          " - Carbon nanotubes in tennis raquets (increased strength/control).",
          " - Golf club shafts with nano-particles for improved swing quality.",
          " - Reduced air leaks in tennis balls."
        ],
        speakerNotes: "You likely already use nanotechnology. If you have 'stain-proof' pants or 'odor-resistant' socks, those are often treated with nanoparticles. Lithium-ion batteries in EVs use nanotech to charge faster and last longer. Even tennis rackets are now reinforced at the molecular level for better performance.",
        visualSuggestion: "An image showing water beading off a hydrophobic fabric and a high-performance tennis racket.",
        engagementElement: {
          question: "What is the purpose of silver nanoparticles in clothing fabrics?",
          answer: "To help destroy odor-causing bacteria, making the clothes odor-resistant."
        }
      },
      {
        id: "nt-impact-health-security",
        title: "The Impact of Nanotechnology (Risks & Societal)",
        onSlideText: [
          "Health Risks: Nanoparticles can enter via skin, nose, or lungs and damage cells if they enter the bloodstream.",
          "National Security: 'Nano-bombs' with self-multiplying viruses; 'Gray Goo' scenario where nanorobots consume all living matter.",
          "Social/Cultural: Faster communication leading to chaos; traditional practices being refused by millennials.",
          "Economy: Huge investment required; 20-50 years for full commercialization.",
          "Politics: Need for regulation (synthetic drugs, high-powered weapons) and environmental laws."
        ],
        speakerNotes: "Nanotech isn't without risks. The 'Gray Goo' theory is a famous nightmare where self-replicating nanobots consume the Earth's biomass. On a more realistic level, we don't fully know the long-term health effects of inhaling tiny particles. Regulation is crucial to ensure these tools are used for good rather than for untraceable weapons or surveillance.",
        visualSuggestion: "A conceptual 'Gray Goo' illustration vs. a chart of nano-regulation laws.",
        engagementElement: {
          question: "What is the 'Gray Goo' scenario?",
          answer: "A hypothetical scenario where self-replicating nanomachines go out of control and consume all living matter on Earth."
        }
      },
      {
        id: "summary-lesson-6",
        title: "Lesson Summary & Assessment",
        onSlideText: [
          "Summary:",
          " - Nanoscale is one-billionth of a meter.",
          " - Key pioneers include Feynman, Taniguchi, and Drexler.",
          " - AFM and STM allow us to work at the atomic level.",
          " - Applications span medicine, electronics, energy, and consumer goods.",
          " - Risks include health, security, and the need for political regulation.",
          "Final Assessment Check:",
          " 1. How long is a nanometer relative to a human hair?",
          " 2. Name two environmental applications of nanotech.",
          " 3. Why is political regulation necessary for nanotechnology?"
        ],
        speakerNotes: "As we've seen, nanotechnology is the next industrial revolution. It offers incredible benefits but requires careful oversight. We must balance the excitement of 'limitless' potential with the ethical and safety concerns of manipulating the building blocks of life itself.",
        visualSuggestion: "A final summary slide with a high-tech, futuristic aesthetic.",
        engagementElement: {
          question: "Which US president significantly funded nanotech research with $500M in the year 2000?",
          answer: "President Bill Clinton."
        }
      }
    ]
  }
];
