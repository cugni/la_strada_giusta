/* ------------------------------------------------------------------
   La Strada Giusta — game configuration & i18n strings
   Coordinates are normalised to the rug (0–1 on each axis).
------------------------------------------------------------------- */

window.GAME = {
  // The school sits at the Park Güell-ish mansion in the upper-left
  // of the rug — that area stands in for Sarrià / Carrer Setantí.
  school: { x: 0.105, y: 0.215 },

  // 16 kid pickup points, scattered across visible houses on the rug.
  stops: [
    { id:  1, x: 0.420, y: 0.055, name: "Sagrada Família" },
    { id:  2, x: 0.510, y: 0.095, name: "Gràcia" },
    { id:  3, x: 0.610, y: 0.135, name: "Glòries" },
    { id:  4, x: 0.880, y: 0.330, name: "Camp Nou" },
    { id:  5, x: 0.785, y: 0.330, name: "Sant Martí" },
    { id:  6, x: 0.660, y: 0.305, name: "Cattedrale" },
    { id:  7, x: 0.495, y: 0.405, name: "Eixample Nord" },
    { id:  8, x: 0.318, y: 0.355, name: "Arc de Triomf" },
    { id:  9, x: 0.060, y: 0.450, name: "Sarrià Ovest" },
    { id: 10, x: 0.270, y: 0.460, name: "Sant Antoni" },
    { id: 11, x: 0.410, y: 0.545, name: "Eixample Sud" },
    { id: 12, x: 0.515, y: 0.500, name: "La Pedrera" },
    { id: 13, x: 0.850, y: 0.510, name: "Diagonal Mar" },
    { id: 14, x: 0.455, y: 0.775, name: "Plaça Espanya" },
    { id: 15, x: 0.330, y: 0.775, name: "Poble Sec" },
    { id: 16, x: 0.205, y: 0.870, name: "Port Vell" },
  ],

  // Pool of possible traffic-jam centres. We pick 3 at random each run.
  jamPool: [
    { x: 0.30, y: 0.22 }, { x: 0.55, y: 0.30 },
    { x: 0.40, y: 0.50 }, { x: 0.70, y: 0.45 },
    { x: 0.50, y: 0.65 }, { x: 0.30, y: 0.58 },
    { x: 0.20, y: 0.40 }, { x: 0.65, y: 0.55 },
    { x: 0.60, y: 0.18 }, { x: 0.45, y: 0.68 },
  ],
  jamRadius: 0.055,

  // Bus depot pool — each bus starts from a random one of these.
  // Coordinates are on dry land of the rug, away from water.
  depotPool: [
    { x: 0.30, y: 0.20 }, { x: 0.55, y: 0.20 }, { x: 0.74, y: 0.18 },
    { x: 0.86, y: 0.42 }, { x: 0.30, y: 0.42 }, { x: 0.45, y: 0.42 },
    { x: 0.65, y: 0.58 }, { x: 0.40, y: 0.62 }, { x: 0.58, y: 0.60 },
    { x: 0.74, y: 0.68 }, { x: 0.20, y: 0.55 }, { x: 0.18, y: 0.30 },
  ],

  // AFA palette: red, blue, gold (one per bus, max 3).
  busColors:   ["#e62d38", "#00537d", "#f7a700"],
  busColorsSoft:["#fde0e1", "#d9e6ee", "#fdeac1"],

  capacity:      8,     // kids per bus
  timeBudget:    60,    // seconds per run
  speed:         0.048, // normalised units per second
  jamSlow:       0.45,  // multiplier inside a jam
  pickupRadius:  0.028, // route must pass within this of a stop
  schoolRadius:  0.045, // bus delivers when it re-enters this zone

  // Scoring weights
  pointsPerKid:   100,
  timePenalty:    1,    // per second used
  distancePenalty:30,   // per unit of total route length
  perfectBonus:   250,

  levels: [
    { id: 1, buses: 1 },
    { id: 2, buses: 2 },
    { id: 3, buses: 3 },
  ],
};

/* -------- i18n -------- */
window.STRINGS = {
  it: {
    title: "La Strada Giusta",
    tagline: "Aiuta lo Scuolabus AFA a portare tutti a scuola.",
    intro: "Disegna la rotta degli autobus: passa vicino ai bambini per farli salire e torna a scuola in tempo. Ogni autobus porta 8 bambini. La giornata dura 60 secondi.",
    challenge: "Riuscirai a portarli tutti? Provaci con 1 autobus. Poi con 2. Poi con 3.",
    play: "Iniziamo",
    level: "Livello",
    busesWord: { 1: "1 autobus", 2: "2 autobus", 3: "3 autobus" },
    levelSub: {
      1: "Un solo autobus. Vediamo fin dove arrivi.",
      2: "Due autobus, due rotte. Meglio?",
      3: "Tre autobus. Adesso si fa sul serio.",
    },
    selectBus: "Scegli un autobus, poi disegna la rotta sulla mappa.",
    selectBusShort: "Disegna una rotta",
    clearRoute: "Cancella rotta",
    depart: "Parti!",
    running: "In viaggio…",
    timeLeft: "Tempo",
    delivered: "Consegnati",
    onBoard: "A bordo",
    waiting: "Da prendere",
    distance: "Distanza",
    score: "Punteggio",
    trafficJam: "Ingorgo",
    school: "Scuola",
    bus: "Autobus",
    capacity: "Capienza",
    nextLevel: "Livello successivo",
    seeResult: "Vedi il risultato",
    again: "Riprova questo livello",
    resultTitle: { 1: "Un autobus non basta.", 2: "Meglio, ma è ancora dura.", 3: "Ecco perché serve il terzo." },
    resultBody: {
      1: "Con un solo autobus, troppi bambini restano fermi al palo. Aggiungiamone un altro.",
      2: "Con due autobus si può fare — ma il tempo stringe e gli ingorghi puniscono ogni minuto di troppo.",
      3: "Con tre autobus si respira. Le rotte sono più corte, gli ingorghi pesano meno, e tutti arrivano a scuola.",
    },
    finalTitle: "Grazie per aver giocato!",
    finalLead: "Il tuo punteggio totale entra nella lotteria della raccolta fondi AFA. Mandacelo qui sotto.",
    yourTotal: "Punteggio totale",
    raffleCta: "Invialo all’AFA per la lotteria",
    playAgain: "Gioca ancora",
    breakdown: "Come è calcolato il punteggio",
    bdKids: "Bambini consegnati",
    bdTime: "Penalità tempo",
    bdDist: "Penalità distanza",
    bdBonus: "Bonus pieno carico",
    drawHint: "Ogni autobus parte dal suo parcheggio (P1, P2…). Tieni premuto e trascina per disegnare la rotta — si chiuderà automaticamente a scuola.",
    pickupTip: "Passa entro il cerchietto attorno a ciascun bambino per farlo salire.",
    jamTip: "Gli ingorghi rossi rallentano l’autobus. Evitali!",
    perfect: "Tutti a scuola!",
    incomplete: "bambini rimasti a casa",
    raffleSubject: "La Strada Giusta — punteggio per la lotteria AFA",
    raffleBody: "Ciao AFA,\n\nHo giocato a La Strada Giusta e ho totalizzato {score} punti.\nLivello 1: {l1}\nLivello 2: {l2}\nLivello 3: {l3}\n\nNome del giocatore: \nClasse del bambino: \n\nGrazie!",
  },
  es: {
    title: "El Camino Justo",
    tagline: "Ayuda al autobús escolar de AFA a llevar a todos al cole.",
    intro: "Dibuja la ruta de los autobuses: pasa cerca de los niños para recogerlos y vuelve al cole a tiempo. Cada autobús lleva 8 niños. El día dura 60 segundos.",
    challenge: "¿Conseguirás llevarlos a todos? Inténtalo con 1 autobús. Luego con 2. Luego con 3.",
    play: "Empezar",
    level: "Nivel",
    busesWord: { 1: "1 autobús", 2: "2 autobuses", 3: "3 autobuses" },
    levelSub: {
      1: "Un solo autobús. Veamos hasta dónde llegas.",
      2: "Dos autobuses, dos rutas. ¿Mejor?",
      3: "Tres autobuses. Ahora va en serio.",
    },
    selectBus: "Elige un autobús y dibuja su ruta sobre el mapa.",
    selectBusShort: "Dibuja una ruta",
    clearRoute: "Borrar ruta",
    depart: "¡A rodar!",
    running: "En camino…",
    timeLeft: "Tiempo",
    delivered: "Entregados",
    onBoard: "A bordo",
    waiting: "Por recoger",
    distance: "Distancia",
    score: "Puntos",
    trafficJam: "Atasco",
    school: "Escuela",
    bus: "Autobús",
    capacity: "Capacidad",
    nextLevel: "Siguiente nivel",
    seeResult: "Ver resultado",
    again: "Repetir nivel",
    resultTitle: { 1: "Un autobús no basta.", 2: "Mejor, pero aún cuesta.", 3: "Por eso hace falta el tercero." },
    resultBody: {
      1: "Con un solo autobús, demasiados niños se quedan en la acera. Pongamos otro.",
      2: "Con dos autobuses es posible — pero el tiempo aprieta y los atascos castigan cada minuto extra.",
      3: "Con tres autobuses se respira. Rutas más cortas, atascos menos graves, todos al cole.",
    },
    finalTitle: "¡Gracias por jugar!",
    finalLead: "Tu puntuación entra en el sorteo de la recaudación AFA. Envíanosla aquí abajo.",
    yourTotal: "Puntuación total",
    raffleCta: "Enviar a AFA para el sorteo",
    playAgain: "Volver a jugar",
    breakdown: "Cómo se calcula la puntuación",
    bdKids: "Niños entregados",
    bdTime: "Penalización tiempo",
    bdDist: "Penalización distancia",
    bdBonus: "Bono carga completa",
    drawHint: "Cada autobús sale de su aparcamiento (P1, P2…). Mantén pulsado y arrastra para dibujar la ruta — se cierra sola en la escuela.",
    pickupTip: "Pasa dentro del círculo de cada niño para subirlo.",
    jamTip: "Los atascos rojos frenan el autobús. ¡Esquívalos!",
    perfect: "¡Todos al cole!",
    incomplete: "niños se quedaron en casa",
    raffleSubject: "El Camino Justo — puntuación para el sorteo AFA",
    raffleBody: "Hola AFA,\n\nHe jugado a El Camino Justo y mi puntuación total es {score}.\nNivel 1: {l1}\nNivel 2: {l2}\nNivel 3: {l3}\n\nNombre del jugador: \nClase del niño: \n\n¡Gracias!",
  },
  ca: {
    title: "El Camí Just",
    tagline: "Ajuda l’autobús escolar d’AFA a portar tothom a l’escola.",
    intro: "Dibuixa la ruta dels autobusos: passa a prop dels infants per recollir-los i torna a l’escola a temps. Cada autobús porta 8 infants. El dia dura 60 segons.",
    challenge: "Els portaràs tots? Prova-ho amb 1 autobús. Després amb 2. Després amb 3.",
    play: "Comencem",
    level: "Nivell",
    busesWord: { 1: "1 autobús", 2: "2 autobusos", 3: "3 autobusos" },
    levelSub: {
      1: "Un sol autobús. A veure fins on arribes.",
      2: "Dos autobusos, dues rutes. Millor?",
      3: "Tres autobusos. Ara va de debò.",
    },
    selectBus: "Tria un autobús i dibuixa la seva ruta sobre el mapa.",
    selectBusShort: "Dibuixa una ruta",
    clearRoute: "Esborra ruta",
    depart: "Som-hi!",
    running: "En camí…",
    timeLeft: "Temps",
    delivered: "Lliurats",
    onBoard: "A bord",
    waiting: "Per recollir",
    distance: "Distància",
    score: "Punts",
    trafficJam: "Embús",
    school: "Escola",
    bus: "Autobús",
    capacity: "Capacitat",
    nextLevel: "Següent nivell",
    seeResult: "Veure resultat",
    again: "Torna a provar",
    resultTitle: { 1: "Un autobús no n’hi ha prou.", 2: "Millor, però encara costa.", 3: "Per això cal el tercer." },
    resultBody: {
      1: "Amb un sol autobús, massa infants es queden a la vorera. Posem-ne un altre.",
      2: "Amb dos autobusos es pot fer — però el temps apreta i els embussos castiguen cada minut de més.",
      3: "Amb tres autobusos es respira. Rutes més curtes, embussos més suaus, tothom a l’escola.",
    },
    finalTitle: "Gràcies per jugar!",
    finalLead: "La teva puntuació entra al sorteig de la recaptació AFA. Envia-nos-la aquí sota.",
    yourTotal: "Puntuació total",
    raffleCta: "Envia-ho a AFA pel sorteig",
    playAgain: "Torna a jugar",
    breakdown: "Com es calcula la puntuació",
    bdKids: "Infants lliurats",
    bdTime: "Penalització temps",
    bdDist: "Penalització distància",
    bdBonus: "Bonificació plenitud",
    drawHint: "Cada autobús surt del seu aparcament (P1, P2…). Mantén premut i arrossega per dibuixar la ruta — es tanca sola a l’escola.",
    pickupTip: "Passa dins del cercle de cada infant per pujar-lo.",
    jamTip: "Els embussos vermells frenen l’autobús. Evita’ls!",
    perfect: "Tothom a l’escola!",
    incomplete: "infants s’han quedat a casa",
    raffleSubject: "El Camí Just — puntuació pel sorteig AFA",
    raffleBody: "Hola AFA,\n\nHe jugat a El Camí Just i la meva puntuació total és {score}.\nNivell 1: {l1}\nNivell 2: {l2}\nNivell 3: {l3}\n\nNom del jugador: \nClasse de l’infant: \n\nGràcies!",
  },
  en: {
    title: "The Right Route",
    tagline: "Help the AFA school bus get every kid to school.",
    intro: "Draw routes for the buses: pass close to each kid to pick them up, and get back to school in time. Each bus holds 8 kids. The day lasts 60 seconds.",
    challenge: "Can you collect them all? Try with 1 bus. Then 2. Then 3.",
    play: "Start",
    level: "Level",
    busesWord: { 1: "1 bus", 2: "2 buses", 3: "3 buses" },
    levelSub: {
      1: "Just one bus. Let’s see how far you get.",
      2: "Two buses, two routes. Any easier?",
      3: "Three buses. Now we’re talking.",
    },
    selectBus: "Pick a bus and draw its route on the map.",
    selectBusShort: "Draw a route",
    clearRoute: "Clear route",
    depart: "Go!",
    running: "On the road…",
    timeLeft: "Time",
    delivered: "Delivered",
    onBoard: "On board",
    waiting: "Waiting",
    distance: "Distance",
    score: "Score",
    trafficJam: "Traffic",
    school: "School",
    bus: "Bus",
    capacity: "Capacity",
    nextLevel: "Next level",
    seeResult: "See result",
    again: "Retry level",
    resultTitle: { 1: "One bus isn’t enough.", 2: "Better — but still tight.", 3: "That’s why we need a third." },
    resultBody: {
      1: "With a single bus too many kids are stranded on the kerb. Let’s add another.",
      2: "Two buses can do it — but the clock is tight and traffic punishes every extra minute.",
      3: "Three buses is breathable. Shorter routes, kinder traffic, everyone gets to school.",
    },
    finalTitle: "Thanks for playing!",
    finalLead: "Your total score is your raffle entry for the AFA bus fundraiser. Send it to us below.",
    yourTotal: "Total score",
    raffleCta: "Send to AFA for the raffle",
    playAgain: "Play again",
    breakdown: "How your score adds up",
    bdKids: "Kids delivered",
    bdTime: "Time penalty",
    bdDist: "Distance penalty",
    bdBonus: "Full-house bonus",
    drawHint: "Each bus starts from its own parking spot (P1, P2…). Press and drag to draw the route — it auto-closes at school.",
    pickupTip: "Pass inside the circle around each kid to pick them up.",
    jamTip: "Red traffic jams slow the bus. Steer around them!",
    perfect: "Everyone’s at school!",
    incomplete: "kids stuck at home",
    raffleSubject: "The Right Route — score for the AFA raffle",
    raffleBody: "Hi AFA,\n\nI played The Right Route and scored {score} points in total.\nLevel 1: {l1}\nLevel 2: {l2}\nLevel 3: {l3}\n\nPlayer name: \nChild’s class: \n\nThanks!",
  },
};

/* -------- helpers -------- */
window.GAMEU = {
  dist(a, b) { const dx = a.x - b.x, dy = a.y - b.y; return Math.hypot(dx, dy); },
  pathLength(path) {
    let s = 0;
    for (let i = 1; i < path.length; i++) {
      s += Math.hypot(path[i][0] - path[i-1][0], path[i][1] - path[i-1][1]);
    }
    return s;
  },
  posOnPath(path, dist) {
    // returns [x,y] at given cumulative distance along path
    if (path.length === 0) return [0, 0];
    if (dist <= 0) return [path[0][0], path[0][1]];
    let acc = 0;
    for (let i = 1; i < path.length; i++) {
      const [ax, ay] = path[i-1], [bx, by] = path[i];
      const seg = Math.hypot(bx - ax, by - ay);
      if (acc + seg >= dist) {
        const t = (dist - acc) / (seg || 1);
        return [ax + (bx - ax) * t, ay + (by - ay) * t];
      }
      acc += seg;
    }
    return [path[path.length - 1][0], path[path.length - 1][1]];
  },
  pickRandomJams(n, pool, rng) {
    const indices = pool.map((_, i) => i);
    // Fisher-Yates with provided rng
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, n).map(i => pool[i]);
  },
};
