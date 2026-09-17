let controls_ = "controller, keyboard\n";
let controls = [];
let keyMap;
let x = 0;
let buttons;
function checkLoaded() {
  if (typeof(EJS_emulator) == "object") {
    const end1 = Date.now();
    console.log(`Load time: ${end1 - start1} ms`);
    loadControls();
  } else {
    setTimeout(() => {
      checkLoaded();
    }, 20);
  }
}
const start1 = Date.now();
checkLoaded();
function loadControls() {
  const start = Date.now();
  controlscheme = EJS_emulator.getControlScheme();
  if (["nes", "gb"].includes(controlscheme)) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("snes" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 9, label: EJS_emulator.localization("X") },
      { id: 1, label: EJS_emulator.localization("Y") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
      { id: 10, label: EJS_emulator.localization("L") },
      { id: 11, label: EJS_emulator.localization("R") },
    ];
  } else if ("n64" === controlscheme) {
    buttons = [
      { id: 0, label: EJS_emulator.localization("A") },
      { id: 1, label: EJS_emulator.localization("B") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("D-PAD UP") },
      { id: 5, label: EJS_emulator.localization("D-PAD DOWN") },
      { id: 6, label: EJS_emulator.localization("D-PAD LEFT") },
      { id: 7, label: EJS_emulator.localization("D-PAD RIGHT") },
      { id: 10, label: EJS_emulator.localization("L") },
      { id: 11, label: EJS_emulator.localization("R") },
      { id: 12, label: EJS_emulator.localization("Z") },
      { id: 19, label: EJS_emulator.localization("STICK UP") },
      { id: 18, label: EJS_emulator.localization("STICK DOWN") },
      { id: 17, label: EJS_emulator.localization("STICK LEFT") },
      { id: 16, label: EJS_emulator.localization("STICK RIGHT") },
      { id: 23, label: EJS_emulator.localization("C-PAD UP") },
      { id: 22, label: EJS_emulator.localization("C-PAD DOWN") },
      { id: 21, label: EJS_emulator.localization("C-PAD LEFT") },
      { id: 20, label: EJS_emulator.localization("C-PAD RIGHT") },
    ];
  } else if ("gba" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 10, label: EJS_emulator.localization("L") },
      { id: 11, label: EJS_emulator.localization("R") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("nds" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 9, label: EJS_emulator.localization("X") },
      { id: 1, label: EJS_emulator.localization("Y") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
      { id: 10, label: EJS_emulator.localization("L") },
      { id: 11, label: EJS_emulator.localization("R") },
      { id: 14, label: EJS_emulator.localization("Microphone") },
    ];
  } else if ("vb" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 10, label: EJS_emulator.localization("L") },
      { id: 11, label: EJS_emulator.localization("R") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("LEFT D-PAD UP") },
      { id: 5, label: EJS_emulator.localization("LEFT D-PAD DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT D-PAD LEFT") },
      { id: 7, label: EJS_emulator.localization("LEFT D-PAD RIGHT") },
      { id: 19, label: EJS_emulator.localization("RIGHT D-PAD UP") },
      { id: 18, label: EJS_emulator.localization("RIGHT D-PAD DOWN") },
      { id: 17, label: EJS_emulator.localization("RIGHT D-PAD LEFT") },
      { id: 16, label: EJS_emulator.localization("RIGHT D-PAD RIGHT") },
    ];
  } else if (["segaMD", "segaCD", "sega32x"].includes(controlscheme)) {
    buttons = [
      { id: 1, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 8, label: EJS_emulator.localization("C") },
      { id: 10, label: EJS_emulator.localization("X") },
      { id: 9, label: EJS_emulator.localization("Y") },
      { id: 11, label: EJS_emulator.localization("Z") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 2, label: EJS_emulator.localization("MODE") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("segaMS" === controlscheme) {
    buttons = [
      { id: 0, label: EJS_emulator.localization("BUTTON 1 / START") },
      { id: 8, label: EJS_emulator.localization("BUTTON 2") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("segaGG" === controlscheme) {
    buttons = [
      { id: 0, label: EJS_emulator.localization("BUTTON 1") },
      { id: 8, label: EJS_emulator.localization("BUTTON 2") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("segaSaturn" === controlscheme) {
    buttons = [
      { id: 1, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 8, label: EJS_emulator.localization("C") },
      { id: 9, label: EJS_emulator.localization("X") },
      { id: 10, label: EJS_emulator.localization("Y") },
      { id: 11, label: EJS_emulator.localization("Z") },
      { id: 12, label: EJS_emulator.localization("L") },
      { id: 13, label: EJS_emulator.localization("R") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("3do" === controlscheme) {
    buttons = [
      { id: 1, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 8, label: EJS_emulator.localization("C") },
      { id: 10, label: EJS_emulator.localization("L") },
      { id: 11, label: EJS_emulator.localization("R") },
      { id: 2, label: EJS_emulator.localization("X") },
      { id: 3, label: EJS_emulator.localization("P") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("atari2600" === controlscheme) {
    buttons = [
      { id: 0, label: EJS_emulator.localization("FIRE") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("RESET") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
      { id: 10, label: EJS_emulator.localization("LEFT DIFFICULTY A") },
      { id: 12, label: EJS_emulator.localization("LEFT DIFFICULTY B") },
      { id: 11, label: EJS_emulator.localization("RIGHT DIFFICULTY A") },
      { id: 13, label: EJS_emulator.localization("RIGHT DIFFICULTY B") },
      { id: 14, label: EJS_emulator.localization("COLOR") },
      { id: 15, label: EJS_emulator.localization("B/W") },
    ];
  } else if ("atari7800" === controlscheme) {
    buttons = [
      { id: 0, label: EJS_emulator.localization("BUTTON 1") },
      { id: 8, label: EJS_emulator.localization("BUTTON 2") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("PAUSE") },
      { id: 9, label: EJS_emulator.localization("RESET") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
      { id: 10, label: EJS_emulator.localization("LEFT DIFFICULTY") },
      { id: 11, label: EJS_emulator.localization("RIGHT DIFFICULTY") },
    ];
  } else if ("lynx" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 10, label: EJS_emulator.localization("OPTION 1") },
      { id: 11, label: EJS_emulator.localization("OPTION 2") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("jaguar" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 1, label: EJS_emulator.localization("C") },
      { id: 2, label: EJS_emulator.localization("PAUSE") },
      { id: 3, label: EJS_emulator.localization("OPTION") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("pce" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("I") },
      { id: 0, label: EJS_emulator.localization("II") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("RUN") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("ngp" === controlscheme) {
    buttons = [
      { id: 0, label: EJS_emulator.localization("A") },
      { id: 8, label: EJS_emulator.localization("B") },
      { id: 3, label: EJS_emulator.localization("OPTION") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("ws" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("X UP") },
      { id: 5, label: EJS_emulator.localization("X DOWN") },
      { id: 6, label: EJS_emulator.localization("X LEFT") },
      { id: 7, label: EJS_emulator.localization("X RIGHT") },
      { id: 13, label: EJS_emulator.localization("Y UP") },
      { id: 12, label: EJS_emulator.localization("Y DOWN") },
      { id: 10, label: EJS_emulator.localization("Y LEFT") },
      { id: 11, label: EJS_emulator.localization("Y RIGHT") },
    ];
  } else if ("coleco" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("LEFT BUTTON") },
      { id: 0, label: EJS_emulator.localization("RIGHT BUTTON") },
      { id: 9, label: EJS_emulator.localization("1") },
      { id: 1, label: EJS_emulator.localization("2") },
      { id: 11, label: EJS_emulator.localization("3") },
      { id: 10, label: EJS_emulator.localization("4") },
      { id: 13, label: EJS_emulator.localization("5") },
      { id: 12, label: EJS_emulator.localization("6") },
      { id: 15, label: EJS_emulator.localization("7") },
      { id: 14, label: EJS_emulator.localization("8") },
      { id: 2, label: EJS_emulator.localization("*") },
      { id: 3, label: EJS_emulator.localization("#") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else if ("pcfx" === controlscheme) {
    buttons = [
      { id: 8, label: EJS_emulator.localization("I") },
      { id: 0, label: EJS_emulator.localization("II") },
      { id: 9, label: EJS_emulator.localization("III") },
      { id: 1, label: EJS_emulator.localization("IV") },
      { id: 10, label: EJS_emulator.localization("V") },
      { id: 11, label: EJS_emulator.localization("VI") },
      { id: 3, label: EJS_emulator.localization("RUN") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 12, label: EJS_emulator.localization("MODE1") },
      { id: 13, label: EJS_emulator.localization("MODE2") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
    ];
  } else {
    buttons = [
      { id: 0, label: EJS_emulator.localization("B") },
      { id: 1, label: EJS_emulator.localization("Y") },
      { id: 2, label: EJS_emulator.localization("SELECT") },
      { id: 3, label: EJS_emulator.localization("START") },
      { id: 4, label: EJS_emulator.localization("UP") },
      { id: 5, label: EJS_emulator.localization("DOWN") },
      { id: 6, label: EJS_emulator.localization("LEFT") },
      { id: 7, label: EJS_emulator.localization("RIGHT") },
      { id: 8, label: EJS_emulator.localization("A") },
      { id: 9, label: EJS_emulator.localization("X") },
      { id: 10, label: EJS_emulator.localization("L") },
      { id: 11, label: EJS_emulator.localization("R") },
      { id: 12, label: EJS_emulator.localization("L2") },
      { id: 13, label: EJS_emulator.localization("R2") },
      { id: 14, label: EJS_emulator.localization("L3") },
      { id: 15, label: EJS_emulator.localization("R3") },
      { id: 19, label: EJS_emulator.localization("L STICK UP") },
      { id: 18, label: EJS_emulator.localization("L STICK DOWN") },
      { id: 17, label: EJS_emulator.localization("L STICK LEFT") },
      { id: 16, label: EJS_emulator.localization("L STICK RIGHT") },
      { id: 23, label: EJS_emulator.localization("R STICK UP") },
      { id: 22, label: EJS_emulator.localization("R STICK DOWN") },
      { id: 21, label: EJS_emulator.localization("R STICK LEFT") },
      { id: 20, label: EJS_emulator.localization("R STICK RIGHT") },
    ];
  }
  buttons.push({ id: 24, label: EJS_emulator.localization("QUICK SAVE STATE") }, { id: 25, label: EJS_emulator.localization("QUICK LOAD STATE") }, { id: 26, label: EJS_emulator.localization("CHANGE STATE SLOT") }, { id: 27, label: EJS_emulator.localization("FAST FORWARD") }, { id: 29, label: EJS_emulator.localization("SLOW MOTION") }, { id: 28, label: EJS_emulator.localization("REWIND") });

  for (let i = 0; i < buttons.length; i++) {
    let temparray = [];
    temparray.push(Object.values(buttons[i])[1]);
    temparray.push(keyLookup(Object.values(EJS_emulator.controls[0][Object.values(buttons[i])[0]])[0]));
    controls.push(temparray);
  }
  for (i = 0; i < controls.length; i++) {
    controls_ = controls_ + controls[i][0] + ", " + controls[i][1] + "\n";
  }
  console.log("loaded controls");
  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
  showControlsToast();
}

const SHOELACE_BASE = "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn";
let shoelaceReady;
function ensureShoelace() {
  if (shoelaceReady) return shoelaceReady;
  document.documentElement.classList.add("sl-theme-dark");

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = SHOELACE_BASE + "/themes/dark.css";
  document.head.appendChild(link);

  // Dark glass "aura" look: no brand/accent color, just a very dark,
  // near-transparent panel with blur, on top of Shoelace's dark theme.
  const style = document.createElement("style");
  style.textContent = `
    sl-alert::part(base), sl-dialog::part(panel) {
      background: rgba(10, 10, 12, 0.5);
      backdrop-filter: blur(20px) saturate(140%);
      -webkit-backdrop-filter: blur(20px) saturate(140%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-inline-start: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.85);
    }
    sl-alert::part(icon), sl-dialog::part(close-button) {
      color: rgba(255, 255, 255, 0.5);
    }
    sl-dialog::part(overlay) {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(2px);
    }
    sl-dialog::part(title) {
      color: rgba(255, 255, 255, 0.9);
      font-family: monospace;
    }
    sl-button[variant="default"]::part(base) {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.16);
      color: rgba(255, 255, 255, 0.85);
    }
    sl-button[variant="default"]::part(base):hover {
      background: rgba(255, 255, 255, 0.12);
    }
  `;
  document.head.appendChild(style);

  shoelaceReady = new Promise((resolve) => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = SHOELACE_BASE + "/shoelace-autoloader.js";
    script.onload = resolve;
    document.head.appendChild(script);
  });
  return shoelaceReady;
}

// Non-blocking toast (instead of confirm()+alert()) that offers to open the
// controls list; dismisses itself if the player ignores it and never pauses the game.
function showControlsToast() {
  ensureShoelace().then(() => {
    const toast = document.createElement("sl-alert");
    toast.variant = "neutral";
    toast.closable = true;
    toast.duration = 8000;
    toast.innerHTML =
      '<sl-icon slot="icon" name="controller"></sl-icon>' +
      '<strong>' + EJS_emulator.localization("Controls loaded") + '</strong><br>' +
      '<sl-button size="small" variant="default" class="ejs-view-controls-btn" style="margin-top:8px;">' +
      EJS_emulator.localization("View Controls") + '</sl-button>';
    document.body.appendChild(toast);
    customElements.whenDefined("sl-alert").then(() => toast.toast());
    toast.querySelector(".ejs-view-controls-btn").addEventListener("click", () => {
      toast.hide();
      showControlsDialog();
    });
  });
}

function showControlsDialog() {
  const dialog = document.createElement("sl-dialog");
  dialog.label = EJS_emulator.localization("Controls");
  const rows = controls.map(([label, key]) =>
    "<tr><td style='padding:4px 12px 4px 0;'>" + label + "</td><td style='padding:4px 0;color:rgba(255,255,255,0.6);'>" + key + "</td></tr>"
  ).join("");
  dialog.innerHTML =
    "<table style='width:100%;border-collapse:collapse;font-family:monospace;'>" +
    "<tbody>" + rows + "</tbody></table>" +
    '<sl-button slot="footer" variant="default" class="ejs-controls-close">' +
    EJS_emulator.localization("Close") + '</sl-button>';
  document.body.appendChild(dialog);
  dialog.addEventListener("sl-after-hide", () => dialog.remove());
  customElements.whenDefined("sl-dialog").then(() => {
    dialog.show();
    dialog.querySelector(".ejs-controls-close").addEventListener("click", () => dialog.hide());
  });
}
function keyLookup(controllerkey) {
  keyMap = Object.entries(EJS_emulator.keyMap);
  for (let i = 0; i < keyMap.length; i++) {
    if (keyMap[i][0] == controllerkey) {
      return keyMap[i][1];
    }
  }
  return -1;
}
