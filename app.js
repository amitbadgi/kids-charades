const prompts = [
  {
    text: "Lion",
    category: "animals",
    difficulty: "easy",
    emoji: "🦁",
    hints: ["Show a big mane", "Walk proudly", "Give a silent roar face"],
  },
  {
    text: "Penguin",
    category: "animals",
    difficulty: "easy",
    emoji: "🐧",
    hints: ["Waddle side to side", "Keep elbows close", "Pretend to slide on ice"],
  },
  {
    text: "Kangaroo",
    category: "animals",
    difficulty: "medium",
    emoji: "🦘",
    hints: ["Hop with both feet", "Make tiny paws", "Point to an imaginary pouch"],
  },
  {
    text: "Butterfly",
    category: "animals",
    difficulty: "easy",
    emoji: "🦋",
    hints: ["Flap hands like wings", "Move lightly around", "Pretend to land on flowers"],
  },
  {
    text: "Crab",
    category: "animals",
    difficulty: "medium",
    emoji: "🦀",
    hints: ["Walk sideways", "Make pinchers", "Stay low to the ground"],
  },
  {
    text: "Dinosaur",
    category: "animals",
    difficulty: "easy",
    emoji: "🦖",
    hints: ["Take giant steps", "Make tiny arms", "Pretend to stomp"],
  },
  {
    text: "Brushing Teeth",
    category: "actions",
    difficulty: "easy",
    emoji: "🪥",
    hints: ["Pretend to hold a toothbrush", "Use mirror face", "Switch sides of your mouth"],
  },
  {
    text: "Flying a Kite",
    category: "actions",
    difficulty: "easy",
    emoji: "🪁",
    hints: ["Look up in the sky", "Hold imaginary string", "Pull the string gently"],
  },
  {
    text: "Skateboarding",
    category: "actions",
    difficulty: "medium",
    emoji: "🛹",
    hints: ["Balance on one foot", "Push with one leg", "Pretend to turn corners"],
  },
  {
    text: "Baking Cookies",
    category: "actions",
    difficulty: "medium",
    emoji: "🍪",
    hints: ["Mix in a bowl", "Roll dough", "Slide tray into oven"],
  },
  {
    text: "Reading a Book",
    category: "actions",
    difficulty: "easy",
    emoji: "📚",
    hints: ["Open a pretend book", "Move eyes line by line", "Turn pages slowly"],
  },
  {
    text: "Climbing a Ladder",
    category: "actions",
    difficulty: "medium",
    emoji: "🪜",
    hints: ["Reach up with one hand", "Step one foot at a time", "Look upward"],
  },
  {
    text: "Playing Guitar",
    category: "actions",
    difficulty: "medium",
    emoji: "🎸",
    hints: ["Hold guitar shape", "Strum with one hand", "Nod with the beat"],
  },
  {
    text: "Swimming",
    category: "actions",
    difficulty: "easy",
    emoji: "🏊",
    hints: ["Do freestyle arms", "Take pretend breaths", "Kick your legs"],
  },
  {
    text: "Toy Story",
    category: "movies",
    difficulty: "easy",
    emoji: "🤠",
    hints: ["Point to toy size", "Mimic a cowboy hat", "Freeze like a toy"],
  },
  {
    text: "Frozen",
    category: "movies",
    difficulty: "easy",
    emoji: "❄️",
    hints: ["Shiver dramatically", "Make ice with your hands", "Pretend to build a snowman"],
  },
  {
    text: "Finding Nemo",
    category: "movies",
    difficulty: "medium",
    emoji: "🐠",
    hints: ["Swim like a fish", "Show tiny fin", "Search around with your hand"],
  },
  {
    text: "Cars",
    category: "movies",
    difficulty: "easy",
    emoji: "🚗",
    hints: ["Hold steering wheel", "Make racing turns", "Pretend to speed ahead"],
  },
  {
    text: "The Lion King",
    category: "movies",
    difficulty: "medium",
    emoji: "👑",
    hints: ["Act like a lion", "Lift something up proudly", "Point to a kingdom"],
  },
  {
    text: "Inside Out",
    category: "movies",
    difficulty: "hard",
    emoji: "😀",
    hints: ["Switch emotions quickly", "Point to your head", "Act happy then sad"],
  },
  {
    text: "Moana",
    category: "movies",
    difficulty: "medium",
    emoji: "🌊",
    hints: ["Pretend to paddle boat", "Show ocean waves", "Point to a heart shape"],
  },
  {
    text: "Zootopia",
    category: "movies",
    difficulty: "hard",
    emoji: "🐰",
    hints: ["Act like a rabbit cop", "Make badge sign", "Run in city traffic"],
  },
  {
    text: "Shrek",
    category: "movies",
    difficulty: "easy",
    emoji: "🧌",
    hints: ["Show big ears", "Stomp like an ogre", "Point to a swamp"],
  },
  {
    text: "Robot",
    category: "mixed",
    difficulty: "easy",
    emoji: "🤖",
    hints: ["Move in stiff angles", "Pretend buttons on chest", "Turn head in clicks"],
  },
  {
    text: "Superhero",
    category: "mixed",
    difficulty: "easy",
    emoji: "🦸",
    hints: ["Stand in power pose", "Pretend flying", "Show a cape behind you"],
  },
  {
    text: "Magician",
    category: "mixed",
    difficulty: "hard",
    emoji: "🎩",
    hints: ["Wave a wand", "Pull rabbit from hat", "Take a bow after trick"],
  },
  {
    text: "Pirate",
    category: "mixed",
    difficulty: "medium",
    emoji: "🏴‍☠️",
    hints: ["Cover one eye", "Pretend to sail ship", "Search for treasure map"],
  },
  {
    text: "Astronaut",
    category: "mixed",
    difficulty: "medium",
    emoji: "👨‍🚀",
    hints: ["Float in slow motion", "Put on helmet", "Plant a flag"],
  },
  {
    text: "Chef",
    category: "mixed",
    difficulty: "easy",
    emoji: "👨‍🍳",
    hints: ["Stir a pot", "Taste with a spoon", "Flip food in a pan"],
  },
  {
    text: "Sleeping Cat",
    category: "mixed",
    difficulty: "easy",
    emoji: "🐱",
    hints: ["Curl up small", "Pretend cat ears", "Do a silent purr face"],
  },
];

const teamNameSuggestions = [
  "Team Rockets",
  "Team Ninjas",
  "Team Rainbows",
  "Team Tigers",
  "Team Pirates",
  "Team Wizards",
  "Team Stars",
  "Team Comets",
];

const categoryLabels = {
  mixed: "Mixed",
  animals: "Animals",
  actions: "Actions",
  movies: "Kids Movies",
  all: "All",
};

const difficultyLabels = {
  all: "All",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const elements = {
  setupPanel: document.getElementById("setupPanel"),
  gamePanel: document.getElementById("gamePanel"),
  teamCountInput: document.getElementById("teamCountInput"),
  teamInputs: document.getElementById("teamInputs"),
  teamSuggestionChips: document.getElementById("teamSuggestionChips"),
  applySuggestionsBtn: document.getElementById("applySuggestionsBtn"),
  regenTeamsBtn: document.getElementById("regenTeamsBtn"),
  roundTimeInput: document.getElementById("roundTimeInput"),
  categorySelect: document.getElementById("categorySelect"),
  difficultySelect: document.getElementById("difficultySelect"),
  startGameBtn: document.getElementById("startGameBtn"),
  currentTeamLabel: document.getElementById("currentTeamLabel"),
  timeLeftLabel: document.getElementById("timeLeftLabel"),
  activeDifficultyLabel: document.getElementById("activeDifficultyLabel"),
  promptImage: document.getElementById("promptImage"),
  promptText: document.getElementById("promptText"),
  hintList: document.getElementById("hintList"),
  nextPromptBtn: document.getElementById("nextPromptBtn"),
  correctBtn: document.getElementById("correctBtn"),
  skipBtn: document.getElementById("skipBtn"),
  endRoundBtn: document.getElementById("endRoundBtn"),
  endGameBtn: document.getElementById("endGameBtn"),
  scoreList: document.getElementById("scoreList"),
  roundEndPanel: document.getElementById("roundEndPanel"),
  roundSummary: document.getElementById("roundSummary"),
  nextTeamBtn: document.getElementById("nextTeamBtn"),
  endGameRoundBtn: document.getElementById("endGameRoundBtn"),
  finalPanel: document.getElementById("finalPanel"),
  winnerLine: document.getElementById("winnerLine"),
  finalScoreList: document.getElementById("finalScoreList"),
  confettiLayer: document.getElementById("confettiLayer"),
  newGameBtn: document.getElementById("newGameBtn"),
};

const state = {
  teams: [],
  activeTeam: 0,
  roundTime: 60,
  timeLeft: 60,
  timerId: null,
  promptPool: [],
  currentPrompt: null,
  selectedCategory: "all",
  selectedDifficulty: "all",
  roundStartScore: 0,
  audioCtx: null,
  gameEnded: false,
};

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  const isSecure =
    window.location.protocol === "https:" ||
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  if (!isSecure) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Ignore registration failures; app still works online.
    });
  });
}

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function teamColor(index) {
  const palette = ["#ffd166", "#8ecae6", "#ffafcc", "#bde0fe", "#caffbf", "#fcbf49"];
  return palette[index % palette.length];
}

function populateCategories() {
  ["all", "mixed", "animals", "actions", "movies"].forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = categoryLabels[key];
    elements.categorySelect.append(option);
  });
  elements.categorySelect.value = "all";
}

function renderSuggestionChips() {
  elements.teamSuggestionChips.innerHTML = "";
  teamNameSuggestions.forEach((name) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = name;
    elements.teamSuggestionChips.append(chip);
  });
}

function renderTeamInputs() {
  const count = Math.max(2, Math.min(6, Number(elements.teamCountInput.value) || 2));
  elements.teamCountInput.value = String(count);
  const oldValues = Array.from(elements.teamInputs.querySelectorAll("input")).map((input) => input.value);
  elements.teamInputs.innerHTML = "";

  for (let i = 0; i < count; i += 1) {
    const wrapper = document.createElement("label");
    wrapper.textContent = `Team ${i + 1} Name`;

    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 20;
    input.className = "team-input";
    input.value = oldValues[i] || `Team ${i + 1}`;

    wrapper.append(input);
    elements.teamInputs.append(wrapper);
  }
}

function applySuggestedNames() {
  const fields = Array.from(elements.teamInputs.querySelectorAll("input"));
  const suggestions = shuffle(teamNameSuggestions);
  fields.forEach((field, index) => {
    field.value = suggestions[index % suggestions.length];
  });
}

function getTeamsFromSetup() {
  const fields = Array.from(elements.teamInputs.querySelectorAll("input"));
  return fields.map((field, index) => ({
    name: field.value.trim() || `Team ${index + 1}`,
    score: 0,
  }));
}

function buildPromptPool() {
  const category = state.selectedCategory;
  const difficulty = state.selectedDifficulty;
  const filtered = prompts.filter((prompt) => {
    const categoryOK = category === "all" || prompt.category === category || prompt.category === "mixed";
    const difficultyOK = difficulty === "all" || prompt.difficulty === difficulty;
    return categoryOK && difficultyOK;
  });
  state.promptPool = shuffle(filtered.length ? filtered : prompts);
}

function promptImageSrc(prompt, color) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 360 360'>
<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='${color}'/><stop offset='100%' stop-color='#ffffff'/></linearGradient></defs>
<rect width='360' height='360' fill='url(#g)'/>
<circle cx='300' cy='70' r='34' fill='rgba(255,255,255,0.5)'/>
<text x='50%' y='54%' text-anchor='middle' dominant-baseline='middle' font-size='170'>${prompt.emoji}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function renderPrompt() {
  const prompt = state.currentPrompt;
  if (!prompt) {
    elements.promptText.textContent = "Press Next Prompt";
    elements.hintList.innerHTML = "";
    return;
  }

  const color = teamColor(state.activeTeam);
  elements.promptImage.src = promptImageSrc(prompt, color);
  elements.promptImage.alt = `${prompt.text} picture`;
  elements.promptText.textContent = `${prompt.emoji} ${prompt.text}`;
  elements.hintList.innerHTML = "";

  prompt.hints.forEach((hint) => {
    const li = document.createElement("li");
    li.textContent = hint;
    elements.hintList.append(li);
  });
}

function renderScoreboard() {
  elements.scoreList.innerHTML = "";
  state.teams.forEach((team, index) => {
    const item = document.createElement("div");
    item.className = `score-pill${index === state.activeTeam ? " active" : ""}`;
    item.style.background = `linear-gradient(120deg, ${teamColor(index)}33, #fff)`;
    const name = document.createElement("span");
    name.textContent = team.name;
    const score = document.createElement("strong");
    score.textContent = String(team.score);
    item.append(name, score);
    elements.scoreList.append(item);
  });
}

function renderStatus() {
  elements.currentTeamLabel.textContent = state.teams[state.activeTeam]?.name || "-";
  elements.timeLeftLabel.textContent = `${state.timeLeft}s`;
  elements.activeDifficultyLabel.textContent = difficultyLabels[state.selectedDifficulty];
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function ensureAudio() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    return;
  }
  if (!state.audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    state.audioCtx = new Ctx();
  }
  if (state.audioCtx.state === "suspended") {
    state.audioCtx.resume();
  }
}

function tone(freq, durationMs, offsetMs, type, gainValue) {
  if (!state.audioCtx) {
    return;
  }
  const start = state.audioCtx.currentTime + offsetMs / 1000;
  const end = start + durationMs / 1000;

  const osc = state.audioCtx.createOscillator();
  const gain = state.audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = gainValue;

  osc.connect(gain);
  gain.connect(state.audioCtx.destination);
  osc.start(start);
  gain.gain.setValueAtTime(gainValue, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);
  osc.stop(end);
}

function playSound(type) {
  ensureAudio();
  const volume = 0.04;

  if (type === "start") {
    tone(500, 110, 0, "sine", volume);
    tone(650, 110, 120, "sine", volume);
    return;
  }

  if (type === "correct") {
    tone(620, 90, 0, "triangle", volume);
    tone(860, 150, 90, "triangle", volume);
    return;
  }

  if (type === "skip") {
    tone(280, 170, 0, "sawtooth", 0.03);
    return;
  }

  if (type === "tick") {
    tone(700, 50, 0, "square", 0.025);
    return;
  }

  if (type === "end") {
    tone(350, 160, 0, "sawtooth", volume);
    tone(240, 220, 140, "sawtooth", volume);
    return;
  }

  if (type === "win") {
    tone(520, 110, 0, "triangle", volume);
    tone(700, 110, 130, "triangle", volume);
    tone(900, 180, 260, "triangle", volume);
  }
}

function nextPrompt() {
  if (state.gameEnded) {
    return;
  }
  if (!state.promptPool.length) {
    buildPromptPool();
  }
  state.currentPrompt = state.promptPool.pop() || null;
  renderPrompt();
}

function finishRound(reason) {
  if (state.gameEnded) {
    return;
  }

  stopTimer();
  playSound("end");

  const team = state.teams[state.activeTeam];
  const roundScore = team.score - state.roundStartScore;
  elements.roundSummary.textContent = `${reason} ${team.name} scored ${roundScore} this round and has ${team.score} total.`;
  elements.roundEndPanel.classList.remove("hidden");
}

function clearConfetti() {
  elements.confettiLayer.innerHTML = "";
}

function launchConfetti() {
  clearConfetti();
  const colors = ["#ff4d6d", "#ffd166", "#4cc9f0", "#06d6a0", "#f72585", "#8338ec"];

  for (let i = 0; i < 100; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.width = `${7 + Math.random() * 6}px`;
    piece.style.height = `${10 + Math.random() * 10}px`;
    piece.style.animationDuration = `${1.8 + Math.random() * 2.2}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    elements.confettiLayer.append(piece);
  }

  setTimeout(clearConfetti, 4200);
}

function showFinalResults(reason) {
  stopTimer();
  state.gameEnded = true;
  elements.roundEndPanel.classList.add("hidden");

  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  const topScore = sorted[0].score;
  const winners = sorted.filter((team) => team.score === topScore);

  if (winners.length > 1) {
    const names = winners.map((team) => team.name).join(" & ");
    elements.winnerLine.textContent = `${reason} It's a tie: ${names} with ${topScore} points!`;
  } else {
    elements.winnerLine.textContent = `${reason} Winner: ${winners[0].name} with ${topScore} points!`;
  }

  elements.finalScoreList.innerHTML = "";
  sorted.forEach((team, index) => {
    const row = document.createElement("div");
    row.className = "final-row";
    const medal = index === 0 ? "🏆" : index === 1 ? "🥈" : index === 2 ? "🥉" : "⭐";
    const name = document.createElement("span");
    name.textContent = `${medal} ${team.name}`;
    const score = document.createElement("strong");
    score.textContent = String(team.score);
    row.append(name, score);
    elements.finalScoreList.append(row);
  });

  playSound("win");
  launchConfetti();
  elements.finalPanel.classList.remove("hidden");
}

function beginRound() {
  if (state.gameEnded) {
    return;
  }

  stopTimer();
  state.timeLeft = state.roundTime;
  state.roundStartScore = state.teams[state.activeTeam].score;
  elements.roundEndPanel.classList.add("hidden");
  renderStatus();
  playSound("start");

  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    renderStatus();

    if (state.timeLeft <= 5 && state.timeLeft > 0) {
      playSound("tick");
    }

    if (state.timeLeft <= 0) {
      finishRound("Time is up!");
    }
  }, 1000);
}

function startGame() {
  const roundSeconds = Number(elements.roundTimeInput.value);
  state.roundTime = Number.isFinite(roundSeconds) ? Math.min(180, Math.max(20, roundSeconds)) : 60;
  state.selectedCategory = elements.categorySelect.value;
  state.selectedDifficulty = elements.difficultySelect.value;
  state.teams = getTeamsFromSetup();
  state.activeTeam = 0;
  state.gameEnded = false;

  buildPromptPool();
  clearConfetti();
  elements.finalPanel.classList.add("hidden");
  elements.roundEndPanel.classList.add("hidden");
  elements.setupPanel.classList.add("hidden");
  elements.gamePanel.classList.remove("hidden");

  renderScoreboard();
  nextPrompt();
  beginRound();
}

function nextTeam() {
  if (state.gameEnded) {
    return;
  }
  state.activeTeam = (state.activeTeam + 1) % state.teams.length;
  renderScoreboard();
  renderStatus();
  nextPrompt();
  beginRound();
}

function onCorrect() {
  if (state.gameEnded) {
    return;
  }
  state.teams[state.activeTeam].score += 1;
  playSound("correct");
  renderScoreboard();
  nextPrompt();
}

function onSkip() {
  if (state.gameEnded) {
    return;
  }
  playSound("skip");
  nextPrompt();
}

function endGameNow() {
  showFinalResults("Game ended.");
}

function startNewGame() {
  stopTimer();
  state.gameEnded = false;
  state.timeLeft = state.roundTime;
  state.currentPrompt = null;

  clearConfetti();
  elements.finalPanel.classList.add("hidden");
  elements.roundEndPanel.classList.add("hidden");
  elements.gamePanel.classList.add("hidden");
  elements.setupPanel.classList.remove("hidden");

  renderTeamInputs();
}

function init() {
  registerServiceWorker();
  populateCategories();
  renderSuggestionChips();
  renderTeamInputs();

  elements.teamCountInput.addEventListener("change", renderTeamInputs);
  elements.teamCountInput.addEventListener("input", renderTeamInputs);
  elements.regenTeamsBtn.addEventListener("click", renderTeamInputs);
  elements.applySuggestionsBtn.addEventListener("click", applySuggestedNames);

  elements.startGameBtn.addEventListener("click", startGame);
  elements.nextPromptBtn.addEventListener("click", nextPrompt);
  elements.correctBtn.addEventListener("click", onCorrect);
  elements.skipBtn.addEventListener("click", onSkip);
  elements.endRoundBtn.addEventListener("click", () => finishRound("Round ended."));
  elements.endGameBtn.addEventListener("click", endGameNow);
  elements.nextTeamBtn.addEventListener("click", nextTeam);
  elements.endGameRoundBtn.addEventListener("click", endGameNow);
  elements.newGameBtn.addEventListener("click", startNewGame);
}

init();
