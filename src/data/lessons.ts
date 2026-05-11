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
        speakerNotes: "Good morning/afternoon class. Today we are diving into one of the most serious topics in modern security: Weapons of Mass Destruction, or WMDs. These aren't just powerful bombs; they represent a fundamental shift in how humanity can destroy itself. We'll explore the four main types—Biological, Chemical, Nuclear, and Radiological—and look at the devastating footprint they leave on both human lives and the planet. I want you to pay close attention to the word bank on the slide: biowarfare and chemical weapons. By the end of this session, I expect you to be able to argue for specific policies to keep our world safe from these threats.",
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
        speakerNotes: "Before we look at the 'Types,' let's define our terms. A weapon is generally a tool for fighting or defense. But according to Laura Reed, a WMD is different because it is 'indiscriminate.' Think about that word. It means it doesn't choose its target. A sniper rifle hits a specific person; a WMD destroys an entire city—soldiers, children, and environment alike. It creates a scale of destruction that standard military force simply cannot match. It’s also important to note that a WMD isn’t just the 'stuff' inside; it’s also the 'delivery system'—the planes or missiles needed to get that payload to its target.",
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
        speakerNotes: "We generally group WMDs into four categories, often remembered by the acronym CBRN. First, Biological—using 'living' pathogens like viruses or bacteria. Second, Chemical—using toxic 'man-made' substances like mustard gas. Third, Nuclear—the big one, using the power of the atom itself through fission. And fourth, Radiological—often called 'dirty bombs.' They don't explode with nuclear force, but they use regular explosives to spray radioactive 'trash' everywhere, poisoning the area for years. Each has a different 'signature' of destruction, which we will explore one by one.",
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
        speakerNotes: "WMDs are not modern inventions. As early as 429 BC, the Spartans were essentially using 'chemical warfare' by burning sulfur to create toxic fumes. In the Middle Ages, the Mongols famously catapulted plague-ridden corpses over the walls of Caffa—a clear use of a biological agent to win a siege. And even in more recent history, during the colonization of the Americas, smallpox-infected blankets were given to native tribes, proving that microbes can be deadlier than any sword or bullet.",
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
        speakerNotes: "The 20th century turned WMDs into industrial-scale slaughter. World War I was arguably the 'Chemist's War,' where soldiers were introduced to the horrors of chlorine and mustard gas. During World War II, we saw the absolute dark side of science: Japan's Unit 731 conducted horrific biological trials on human subjects, and the Nazi regime used Zyklon B gas to commit genocide in concentration camps. This era ended with the 1945 atomic bombings of Hiroshima and Nagasaki, which forced the world to realize that we had finally invented a way to erase cities in seconds.",
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
        speakerNotes: "Even after the horrors of WWII, WMD use continued. The Vietnam War saw massive use of chemical defoliants like Agent Orange, which had long-term ecological and health effects. In the 80s, the world watched in horror as Iraq used deadly nerve agents against Iran, and even against its own Kurdish civilian population in Halabja. These events led to international outcries and the push for global bans like the Chemical Weapons Convention, which over 80 nations have now agreed to.",
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
        speakerNotes: "Let's look closer at Biological threats. Smallpox is the 'classic' bioweapon. It’s a Category A threat because it spreads through the air and kills a high percentage of those it infects. Although declared eradicated in 1977, samples are kept in high-security labs because the risk of someone 're-releasing' it is a major security concern. Then there's Anthrax. Its 'spores' are like armored seeds—they stay alive in soil for decades. If inhaled, anthrax is incredibly lethal; just 100 kilograms could theoretically kill millions of people in a large city.",
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
        speakerNotes: "Ebola and the Plague represent two different types of biological terror. Ebola causes hemorrhagic fever—essentially making a person bleed internally and externally. It has a terrifyingly high death rate but requires direct contact with bodily fluids to spread. On the other hand, the Plague—the 'Black Death' of the 1300s—can be spread through the air in its 'pneumonic' form. This makes it a perfect bioweapon candidate for someone wanting to cause mass casualties quickly without needing much technology.",
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
        speakerNotes: "Biology can be weaponized in even more subtle ways. Botulinum toxin is arguably the most poisonous substance known to man—it blocks nerve signals, causing total paralysis. But we must also consider 'Agricultural Warfare.' Imagine a country's rice supply destroyed by a engineered fungus like Rice Blast, or cattle wiped out by Rinderpest. You wouldn't need to kill a single person directly to destroy a nation; you just have to starve them. This is why bio-security covers both human and environmental health.",
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
        speakerNotes: "Chemical weapons are 'synthetic' agents. Their effectiveness depends heavily on physics—wind direction, temperature, and how they are turned into a mist or gas. We group them by how they attack the body. Choking agents attack the lungs; Blister agents burn the skin and internal airways; and Nerve agents—the deadliest—attack the electrical wiring of the brain. The 1997 global ban was a huge step, but as we’ve seen in recent conflicts, countries or terror groups still find ways to manufacture these toxic compounds.",
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
        speakerNotes: "Modern nerve agents like Sarin and VX are the stuff of nightmares. Sarin is colorless and odorless—you wouldn't even know it was there until you started suffocating because your chest muscles stopped working. Soman is even more persistent. But the 'king' of chemical lethality is VX. It's a sticky liquid that doesn't evaporate easily. It's 100 times more deadly than Sarin. A drop on your skin is enough to cause total paralysis and death within minutes because it shuts down the enzyme that tells your muscles to relax.",
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
        speakerNotes: "History has seen many variations of these chemicals. Tabun was the first nerve gas ever manufactured. Zyklon B, though a pesticide, became the primary tool of the Holocaust because it is a hydrogen cyanide crystalline structure that releases gas when it hits the air. And we can't forget Mustard Agents from WWI. They aren't always designed to kill instantly; they are designed to incapacitate. They cause massive, painful chemical burns and blisters, filling the lungs with fluid and making soldiers unable to fight or move for weeks.",
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
        speakerNotes: "Nuclear weapons are the ultimate WMD. There are two ways to get this energy: Fission, which is splitting a heavy atom like Uranium or Plutonium, and Fusion, which is forcing light atoms together—the same process that powers the sun. Fusion bombs, or H-bombs, are significantly more powerful than the A-bombs dropped in 1945. To put it in perspective, a fusion bomb is usually 10 to 100 times more explosive than a fission bomb. Today, about 30,000 of these weapons exist globally, enough to destroy civilization many times over.",
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
        speakerNotes: "The damage from a nuclear bomb comes in four waves. First, the blast wave literally crushes structures. Next, the thermal radiation burns everything within sight of the explosion. Third, the immediate radiation penetrates deep into cells. Finally, 'fallout'—radioactive dust—can travel hundreds of miles, poisoning land and water long after the blast is over. Long after the war is over, the fallout continues to kill.",
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
        speakerNotes: "Don't confuse a Radiological weapon with a Nuclear bomb. A 'Dirty Bomb' is basically a regular explosive—like a car bomb—surrounded by radioactive hospital or industrial waste. It doesn't create a nuclear explosion. Instead, it uses the blast to scatter radiation over several city blocks. The goal here isn't mass killing—it’s 'Mass Disruption.' It creates terror, shuts down the economy, and makes a city center uninhabitable for years because the cleanup is so difficult and dangerous.",
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
        speakerNotes: "To wrap up Lesson 4, remember that WMDs are defined by their scale and their inability to distinguish between a soldier and a civilian. We’ve seen how they have evolved from diseased bodies in the Middle Ages to the atomic age. Today, international treaties like the CWC and NPT are our best defenses, but the technology still exists. As students, I want you to think about: Is it possible to truly ban something once it has been invented? How do we regulate those who refuse to sign treaties? Take a moment to answer the assessment questions on the slide.",
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
        speakerNotes: "Welcome to Lesson 6. We are moving from the scale of the 'Massive' to the scale of the 'Minute.' Nanotechnology is the science of the extremely small, and it is arguably the most revolutionary technology of our generation. It’s not just about smaller gadgets; it’s about a new way of building our world, atom by atom. Today we will define what 'nano' really is, look at the tools that let us see this invisible world, and discuss how these tiny machines might someday live inside our bodies or power our homes.",
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
        speakerNotes: "To understand 'nano,' think about a human hair. A single hair is roughly 25,000 nanometers wide. We are working at a scale where we can manipulate individual atoms. At this level, the physical properties of materials change—gold might turn red, and insulators might become conductors. This scale allows us to build 'Nanorobots'—tiny surgical machines that could potentially travel through your bloodstream to find and kill cancer cells individually, or 'Nanomachines' that can manufacture materials with zero waste.",
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
        speakerNotes: "Richard Feynman is the 'godfather' of nanotech, having predicted in 1959 that we would someday be able to arrange atoms individually. He famously said, 'There is plenty of room at the bottom.' It wasn't until 1981, with the invention of the STM, that we could finally 'see' and manipulate atoms directly. Modern funding really exploded at the turn of the millennium when governments realized whoever masters nanotech masters the future of industry.",
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
        speakerNotes: "These three figures—Feynman, Taniguchi, and Drexler—built the foundation of the field. Feynman provided the vision of manipulating matter by 'one atom or one molecule.' Taniguchi gave it a name and technical definition. and Drexler brought the concept of 'molecular manufacturing' to the mainstream, imagining a world where machines build themselves atom by atom, creating a 'living' factory at the scale of a cell.",
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
        speakerNotes: "You can't see a nanometer with a regular microscope. You need the Atomic Force Microscope (AFM) or the Scanning Tunneling Microscope (STM). These don't use light; they use physical probes that 'feel' the surface of atoms, much like a blind person uses a cane. The AFM can magnify things up to 100 million times! Besides the tools, we have new materials like Carbon Nanotubes, which are incredibly strong and light, and Graphene, a sheet of carbon just one atom thick that could revolutionize how we build sensors and computers.",
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
        speakerNotes: "In medicine, nanotech allows for precision that was previously impossible. Imagine a robot smaller than a red blood cell that can swim through your arteries, find a cancer cell, and deliver a toxin directly to it without harming healthy tissue. This is the promise of nanomedicine. These 'Nanorobots' could also monitor your brain-wave activity, fix chemical imbalances, or even repair your DNA if you have a genetic disease. This is the future of 'Precision Medicine.'",
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
        speakerNotes: "In your pocket right now is a device powered by nanotech. Nanoelectronics allow us to cram billions of transistors onto a single chip, making your phone faster and lighter while using less power. But the environmental impact is even more exciting. Iron nanoparticles can 'eat' pollution in our water supplies, and silicon nanowires are making solar cells cheaper and more efficient. We're even mixing nanotubes into the epoxy of wind turbine blades to make them lighter and stronger, allowing them to spin in less wind and generate more green energy.",
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
        speakerNotes: "Nanotechnology is already in your home. Have you ever bought socks that don't smell? Those often contain silver nanoparticles that kill bacteria. Or 'hydrophobic' fabrics that water just bounces off of? Those use a nano-textured surface. In sports, carbon nanotubes are used to make tennis rackets stronger and golf shafts lighter for better swing quality. Even tennis balls are now coated internally with a nano-material to stop air from leaking out, meaning they stay 'bouncy' much longer. It’s making our everyday products smarter and more durable.",
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
        speakerNotes: "But with great power comes great risk. Because nanoparticles are so small, they can bypass our body's natural filters, entering through the lungs or skin and potentially damaging our cells in ways we don't yet understand. There are also national security risks: 'Nano-bombs' or self-replicating viruses. And then there's the 'Gray Goo' scenario—the theoretical fear that self-replicating nanobots might accidentally consume all biomass on Earth. This is why we need strong political and ethical regulations as this technology matures.",
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
        speakerNotes: "To conclude Lesson 6, we've seen that the nanoworld is where science meets engineering at the most fundamental level. We've gone from Feynman's 1959 vision to a world where nano-medicines and nano-electronics are reality. The benefits are clear, but we must stay vigilant about the health and security risks. Nanotech will likely be the defining technology of the next 50 years. As you review the assessment questions, think about how this technology might change your own career in the future.",
        visualSuggestion: "A final summary slide with a high-tech, futuristic aesthetic.",
        engagementElement: {
          question: "Which US president significantly funded nanotech research with $500M in the year 2000?",
          answer: "President Bill Clinton."
        }
      }
    ]
  }
];
