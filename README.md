<!DOCTYPE html>
<html lang="es" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora Modern - Estándar y Científica</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Google Fonts: Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      transition: background 0.4s ease, color 0.4s ease;
    }

    /* Transition configurations for theme elements */
    .theme-transition {
      transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Scrollbar customization */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.4);
    }

    /* THEMES DEFINITIONS */

    /* 1. Azul (Blue Theme - Default) */
    body.theme-blue {
      background: radial-gradient(circle at top left, #1e1b4b, #0f172a);
    }
    .theme-blue .calc-card { background-color: rgba(15, 23, 42, 0.85); border-color: rgba(51, 65, 85, 0.5); }
    .theme-blue .calc-display { background-color: rgba(2, 6, 23, 0.8); border-color: #1e293b; color: #ffffff; }
    .theme-blue .text-accent { color: #60a5fa; }
    .theme-blue .btn-active-mode { background-color: #2563eb; color: #ffffff; }
    .theme-blue .btn-op { background-color: #2563eb; color: #ffffff; }
    .theme-blue .btn-op:hover { background-color: #3b82f6; }
    .theme-blue .btn-num { background-color: rgba(30, 41, 59, 0.8); color: #f8fafc; }
    .theme-blue .btn-num:hover { background-color: #334155; }
    .theme-blue .btn-sci { background-color: #1e293b; color: #e2e8f0; }
    .theme-blue .btn-sci:hover { background-color: #334155; }
    .theme-blue .btn-eq { background-color: #059669; color: #ffffff; }
    .theme-blue .btn-eq:hover { background-color: #10b981; }
    .theme-blue .history-bg { background-color: rgba(2, 6, 23, 0.4); border-color: #1e293b; }

    /* 2. Amarillo (Yellow Theme) */
    body.theme-yellow {
      background: radial-gradient(circle at top left, #451a03, #18181b);
    }
    .theme-yellow .calc-card { background-color: rgba(24, 24, 27, 0.9); border-color: rgba(245, 158, 11, 0.3); }
    .theme-yellow .calc-display { background-color: rgba(9, 9, 11, 0.9); border-color: #3f3f46; color: #fbbf24; }
    .theme-yellow .text-accent { color: #fbbf24; }
    .theme-yellow .btn-active-mode { background-color: #d97706; color: #ffffff; }
    .theme-yellow .btn-op { background-color: #d97706; color: #ffffff; }
    .theme-yellow .btn-op:hover { background-color: #f59e0b; }
    .theme-yellow .btn-num { background-color: rgba(39, 39, 42, 0.9); color: #fef3c7; }
    .theme-yellow .btn-num:hover { background-color: #52525b; }
    .theme-yellow .btn-sci { background-color: #27272a; color: #fde68a; }
    .theme-yellow .btn-sci:hover { background-color: #3f3f46; }
    .theme-yellow .btn-eq { background-color: #eab308; color: #000000; font-weight: bold; }
    .theme-yellow .btn-eq:hover { background-color: #fde047; }
    .theme-yellow .history-bg { background-color: rgba(9, 9, 11, 0.5); border-color: #27272a; }

    /* 3. Rojo (Red Theme) */
    body.theme-red {
      background: radial-gradient(circle at top left, #4c0519, #0f172a);
    }
    .theme-red .calc-card { background-color: rgba(15, 23, 42, 0.85); border-color: rgba(225, 29, 72, 0.3); }
    .theme-red .calc-display { background-color: rgba(2, 6, 23, 0.85); border-color: #881337; color: #ffe4e6; }
    .theme-red .text-accent { color: #fb7185; }
    .theme-red .btn-active-mode { background-color: #e11d48; color: #ffffff; }
    .theme-red .btn-op { background-color: #e11d48; color: #ffffff; }
    .theme-red .btn-op:hover { background-color: #f43f5e; }
    .theme-red .btn-num { background-color: rgba(30, 41, 59, 0.8); color: #fff1f2; }
    .theme-red .btn-num:hover { background-color: #475569; }
    .theme-red .btn-sci { background-color: #1e293b; color: #fecdd3; }
    .theme-red .btn-sci:hover { background-color: #334155; }
    .theme-red .btn-eq { background-color: #be123c; color: #ffffff; }
    .theme-red .btn-eq:hover { background-color: #e11d48; }
    .theme-red .history-bg { background-color: rgba(2, 6, 23, 0.4); border-color: #881337; }

    /* 4. Verde (Green Theme) */
    body.theme-green {
      background: radial-gradient(circle at top left, #064e3b, #022c22);
    }
    .theme-green .calc-card { background-color: rgba(6, 78, 59, 0.4); border-color: rgba(16, 185, 129, 0.3); }
    .theme-green .calc-display { background-color: rgba(2, 44, 34, 0.9); border-color: #065f46; color: #6ee7b7; }
    .theme-green .text-accent { color: #34d399; }
    .theme-green .btn-active-mode { background-color: #059669; color: #ffffff; }
    .theme-green .btn-op { background-color: #059669; color: #ffffff; }
    .theme-green .btn-op:hover { background-color: #10b981; }
    .theme-green .btn-num { background-color: rgba(6, 95, 70, 0.5); color: #ecfdf5; }
    .theme-green .btn-num:hover { background-color: rgba(4, 120, 87, 0.8); }
    .theme-green .btn-sci { background-color: rgba(6, 95, 70, 0.4); color: #a7f3d0; }
    .theme-green .btn-sci:hover { background-color: rgba(4, 120, 87, 0.7); }
    .theme-green .btn-eq { background-color: #10b981; color: #022c22; font-weight: bold; }
    .theme-green .btn-eq:hover { background-color: #34d399; }
    .theme-green .history-bg { background-color: rgba(2, 44, 34, 0.5); border-color: #065f46; }

    /* 5. Negra (OLED Black Theme) */
    body.theme-black {
      background: #000000;
    }
    .theme-black .calc-card { background-color: #09090b; border-color: #27272a; }
    .theme-black .calc-display { background-color: #000000; border-color: #27272a; color: #38bdf8; }
    .theme-black .text-accent { color: #38bdf8; }
    .theme-black .btn-active-mode { background-color: #27272a; color: #38bdf8; border: 1px solid #38bdf8; }
    .theme-black .btn-op { background-color: #18181b; color: #38bdf8; border: 1px solid #27272a; }
    .theme-black .btn-op:hover { background-color: #27272a; }
    .theme-black .btn-num { background-color: #09090b; color: #ffffff; border: 1px solid #18181b; }
    .theme-black .btn-num:hover { background-color: #18181b; }
    .theme-black .btn-sci { background-color: #09090b; color: #a1a1aa; border: 1px solid #18181b; }
    .theme-black .btn-sci:hover { background-color: #18181b; color: #ffffff; }
    .theme-black .btn-eq { background-color: #0284c7; color: #ffffff; }
    .theme-black .btn-eq:hover { background-color: #0369a1; }
    .theme-black .history-bg { background-color: #000000; border-color: #18181b; }

    /* 6. Gris (Silver / Gray Theme) */
    body.theme-gray {
      background: radial-gradient(circle at top left, #3f3f46, #18181b);
    }
    .theme-gray .calc-card { background-color: rgba(39, 39, 42, 0.9); border-color: rgba(161, 161, 170, 0.3); }
    .theme-gray .calc-display { background-color: #18181b; border-color: #52525b; color: #f4f4f5; }
    .theme-gray .text-accent { color: #e4e4e7; }
    .theme-gray .btn-active-mode { background-color: #52525b; color: #ffffff; }
    .theme-gray .btn-op { background-color: #52525b; color: #ffffff; }
    .theme-gray .btn-op:hover { background-color: #71717a; }
    .theme-gray .btn-num { background-color: #3f3f46; color: #f4f4f5; }
    .theme-gray .btn-num:hover { background-color: #52525b; }
    .theme-gray .btn-sci { background-color: #3f3f46; color: #d4d4d8; }
    .theme-gray .btn-sci:hover { background-color: #52525b; }
    .theme-gray .btn-eq { background-color: #a1a1aa; color: #18181b; font-weight: bold; }
    .theme-gray .btn-eq:hover { background-color: #d4d4d8; }
    .theme-gray .history-bg { background-color: #18181b; border-color: #3f3f46; }
  </style>
</head>
<body class="theme-blue text-slate-100 min-h-screen flex items-center justify-center p-2 sm:p-4 selection:bg-blue-500 selection:text-white">

  <!-- Main Container -->
  <div class="calc-card theme-transition w-full max-w-5xl backdrop-blur-xl border rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
    
    <!-- Calculator Main Section -->
    <div class="flex-1 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-700/40">
      
      <!-- Top Header & Controls -->
      <div class="flex flex-wrap gap-2 justify-between items-center mb-4">
        <!-- Mode Switcher -->
        <div class="bg-black/20 p-1 rounded-xl border border-white/10 flex items-center gap-1">
          <button id="modeStandard" onclick="setMode('standard')" class="btn-active-mode theme-transition px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg shadow-md">
            <i class="fa-solid font-bold fa-calculator mr-1.5"></i>Estándar
          </button>
          <button id="modeScientific" onclick="setMode('scientific')" class="theme-transition px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg text-slate-400 hover:text-white">
            <i class="fa-solid fa-flask mr-1.5"></i>Científica
          </button>
        </div>

        <!-- Right Controls: Theme Selector Dropdown & Angle Unit -->
        <div class="flex items-center gap-2">
          <!-- Theme Menu Container -->
          <div class="relative">
            <button id="themeDropdownBtn" onclick="toggleThemeMenu()" class="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-black/20 hover:bg-black/30 border border-white/10 text-slate-200 flex items-center gap-2 theme-transition">
              <i class="fa-solid fa-palette text-accent"></i>
              <span id="currentThemeLabel" class="hidden sm:inline">Azul</span>
              <i class="fa-solid fa-chevron-down text-[10px] opacity-70"></i>
            </button>

            <!-- Theme Dropdown Menu -->
            <div id="themeMenu" class="hidden absolute right-0 mt-2 w-44 bg-slate-900/95 border border-slate-700 rounded-2xl shadow-2xl backdrop-blur-md z-50 p-2 space-y-1 text-xs sm:text-sm">
              <button onclick="selectTheme('blue', 'Azul')" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 transition">
                <span class="w-3.5 h-3.5 rounded-full bg-blue-500 border border-white/30"></span> Azul
              </button>
              <button onclick="selectTheme('yellow', 'Amarillo')" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 transition">
                <span class="w-3.5 h-3.5 rounded-full bg-amber-500 border border-white/30"></span> Amarillo
              </button>
              <button onclick="selectTheme('red', 'Rojo')" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 transition">
                <span class="w-3.5 h-3.5 rounded-full bg-rose-500 border border-white/30"></span> Rojo
              </button>
              <button onclick="selectTheme('green', 'Verde')" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 transition">
                <span class="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-white/30"></span> Verde
              </button>
              <button onclick="selectTheme('black', 'Negra')" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 transition">
                <span class="w-3.5 h-3.5 rounded-full bg-zinc-950 border border-white/30"></span> Negra
              </button>
              <button onclick="selectTheme('gray', 'Gris')" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-slate-200 transition">
                <span class="w-3.5 h-3.5 rounded-full bg-zinc-400 border border-white/30"></span> Gris
              </button>
            </div>
          </div>

          <!-- Angle Switcher -->
          <button id="angleToggle" onclick="toggleAngleUnit()" class="hidden px-2.5 py-1.5 text-xs font-bold rounded-xl bg-black/20 text-accent border border-white/10 hover:bg-black/30 theme-transition">
            DEG
          </button>

          <!-- History Toggle Mobile -->
          <button onclick="toggleHistoryMobile()" class="lg:hidden p-2 text-slate-300 hover:text-white bg-black/20 rounded-xl border border-white/10 theme-transition">
            <i class="fa-solid fa-clock-rotate-left"></i>
          </button>
        </div>
      </div>

      <!-- Display Area -->
      <div class="calc-display theme-transition border rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 flex flex-col justify-end items-end min-h-[120px] sm:min-h-[140px] shadow-inner relative overflow-hidden">
        <!-- Memory Indicator -->
        <span id="memoryIndicator" class="absolute top-2 left-3 text-[10px] sm:text-xs font-semibold text-accent tracking-wider hidden">
          MEM
        </span>
        <!-- Expression Line -->
        <div id="expressionDisplay" class="text-slate-400 text-sm sm:text-base font-mono overflow-x-auto whitespace-nowrap w-full text-right mb-1 h-6"></div>
        <!-- Current Value Display -->
        <div id="mainDisplay" class="text-3xl sm:text-5xl font-bold font-mono tracking-tight overflow-x-auto whitespace-nowrap w-full text-right">
          0
        </div>
      </div>

      <!-- Keypads Container -->
      <div class="space-y-3">
        <!-- Memory Row -->
        <div class="grid grid-cols-4 gap-2 text-xs sm:text-sm font-semibold">
          <button onclick="memoryClear()" class="py-2 rounded-xl bg-black/20 hover:bg-black/40 text-slate-300 border border-white/5 theme-transition active:scale-95">MC</button>
          <button onclick="memoryRecall()" class="py-2 rounded-xl bg-black/20 hover:bg-black/40 text-slate-300 border border-white/5 theme-transition active:scale-95">MR</button>
          <button onclick="memoryAdd()" class="py-2 rounded-xl bg-black/20 hover:bg-black/40 text-slate-300 border border-white/5 theme-transition active:scale-95">M+</button>
          <button onclick="memorySubtract()" class="py-2 rounded-xl bg-black/20 hover:bg-black/40 text-slate-300 border border-white/5 theme-transition active:scale-95">M-</button>
        </div>

        <!-- Scientific Panel (Collapsible/Hideable) -->
        <div id="scientificKeypad" class="hidden grid grid-cols-4 sm:grid-cols-5 gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-all duration-300">
          <button onclick="appendFunction('sin')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">sin</button>
          <button onclick="appendFunction('cos')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">cos</button>
          <button onclick="appendFunction('tan')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">tan</button>
          <button onclick="appendFunction('asin')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">asin</button>
          <button onclick="appendFunction('acos')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">acos</button>

          <button onclick="appendFunction('atan')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">atan</button>
          <button onclick="appendFunction('log')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">log</button>
          <button onclick="appendFunction('ln')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">ln</button>
          <button onclick="appendOperator('^')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">x<sup>y</sup></button>
          <button onclick="executeSingleOp('square')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">x²</button>

          <button onclick="executeSingleOp('cube')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">x³</button>
          <button onclick="executeSingleOp('sqrt')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">√x</button>
          <button onclick="executeSingleOp('cbrt')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">∛x</button>
          <button onclick="executeSingleOp('pow10')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">10<sup>x</sup></button>
          <button onclick="executeSingleOp('exp')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">e<sup>x</sup></button>

          <button onclick="appendConstant('π')" class="btn-sci theme-transition py-2.5 rounded-xl font-semibold text-accent active:scale-95">π</button>
          <button onclick="appendConstant('e')" class="btn-sci theme-transition py-2.5 rounded-xl font-semibold text-accent active:scale-95">e</button>
          <button onclick="executeSingleOp('factorial')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">n!</button>
          <button onclick="executeSingleOp('abs')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">|x|</button>
          <button onclick="appendOperator('%')" class="btn-sci theme-transition py-2.5 rounded-xl active:scale-95">mod</button>
        </div>

        <!-- Main/Standard Keypad -->
        <div class="grid grid-cols-4 gap-2 text-base sm:text-lg font-medium">
          <!-- Row 1 -->
          <button onclick="clearEntry()" class="py-3 sm:py-3.5 rounded-2xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-semibold theme-transition active:scale-95">CE</button>
          <button onclick="clearAll()" class="py-3 sm:py-3.5 rounded-2xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-semibold theme-transition active:scale-95">C</button>
          <button onclick="deleteBackspace()" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl active:scale-95"><i class="fa-solid fa-backspace"></i></button>
          <button onclick="appendOperator('÷')" class="btn-op theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">÷</button>

          <!-- Row 2 -->
          <button onclick="executeSingleOp('reciprocal')" class="btn-sci theme-transition py-3 sm:py-3.5 rounded-2xl active:scale-95">1/x</button>
          <button onclick="appendValue('7')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">7</button>
          <button onclick="appendValue('8')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">8</button>
          <button onclick="appendValue('9')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">9</button>

          <!-- Row 3 -->
          <button onclick="appendOperator('×')" class="btn-op theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">×</button>
          <button onclick="appendValue('4')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">4</button>
          <button onclick="appendValue('5')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">5</button>
          <button onclick="appendValue('6')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">6</button>

          <!-- Row 4 -->
          <button onclick="appendOperator('-')" class="btn-op theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">-</button>
          <button onclick="appendValue('1')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">1</button>
          <button onclick="appendValue('2')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">2</button>
          <button onclick="appendValue('3')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">3</button>

          <!-- Row 5 -->
          <button onclick="appendOperator('+')" class="btn-op theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">+</button>
          <button onclick="toggleSign()" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">+/-</button>
          <button onclick="appendValue('0')" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">0</button>
          <button onclick="appendDecimal()" class="btn-num theme-transition py-3 sm:py-3.5 rounded-2xl font-semibold active:scale-95">,</button>

          <!-- Row 6 (Equal Span) -->
          <button onclick="calculateResult()" class="btn-eq theme-transition col-span-4 py-3 sm:py-3.5 rounded-2xl text-lg shadow-lg active:scale-98">
            =
          </button>
        </div>
      </div>
    </div>

    <!-- History Panel -->
    <div id="historyContainer" class="history-bg theme-transition w-full lg:w-80 p-4 sm:p-6 flex flex-col h-[300px] lg:h-auto border-t lg:border-t-0 border-white/10">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-semibold text-slate-300 flex items-center gap-2">
          <i class="fa-solid fa-clock-rotate-left text-accent"></i>
          Historial de Cálculos
        </h3>
        <button onclick="clearHistory()" class="text-xs text-slate-400 hover:text-rose-400 transition flex items-center gap-1">
          <i class="fa-solid fa-trash"></i> Limpiar
        </button>
      </div>

      <!-- History Items Scroll List -->
      <div id="historyList" class="flex-1 overflow-y-auto space-y-3 pr-1">
        <p id="emptyHistoryMsg" class="text-sm text-slate-500 text-center py-8">
          No hay cálculos recientes
        </p>
      </div>
    </div>

  </div>

  <!-- JavaScript Logic -->
  <script>
    // State Variables
    let currentInput = "0";
    let expression = "";
    let isEvaluated = false;
    let memoryValue = 0;
    let angleUnit = "DEG"; // DEG or RAD
    let currentMode = "standard"; // standard or scientific
    let history = [];
    let currentTheme = "blue";

    // DOM Elements
    const mainDisplay = document.getElementById("mainDisplay");
    const expressionDisplay = document.getElementById("expressionDisplay");
    const scientificKeypad = document.getElementById("scientificKeypad");
    const angleToggleBtn = document.getElementById("angleToggle");
    const memoryIndicator = document.getElementById("memoryIndicator");
    const historyList = document.getElementById("historyList");
    const emptyHistoryMsg = document.getElementById("emptyHistoryMsg");
    const themeMenu = document.getElementById("themeMenu");

    // Initialize
    window.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", (e) => {
      const themeBtn = document.getElementById("themeDropdownBtn");
      if (!themeBtn.contains(e.target) && !themeMenu.contains(e.target)) {
        themeMenu.classList.add("hidden");
      }
    });

    // Theme Switcher Functions
    function toggleThemeMenu() {
      themeMenu.classList.toggle("hidden");
    }

    function selectTheme(theme, label) {
      document.body.className = `theme-${theme} text-slate-100 min-h-screen flex items-center justify-center p-2 sm:p-4 selection:bg-blue-500 selection:text-white`;
      document.getElementById("currentThemeLabel").innerText = label;
      currentTheme = theme;
      themeMenu.classList.add("hidden");
    }

    function updateDisplay() {
      mainDisplay.innerText = formatNumberDisplay(currentInput);
      expressionDisplay.innerText = expression;
    }

    function formatNumberDisplay(numStr) {
      if (numStr === "Error") return "Error";
      if (numStr.endsWith(".")) return numStr;
      
      const parts = numStr.split(".");
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.length > 1 ? `${integerPart},${parts[1]}` : integerPart;
    }

    // Set Calculator Mode
    function setMode(mode) {
      currentMode = mode;
      const stdBtn = document.getElementById("modeStandard");
      const sciBtn = document.getElementById("modeScientific");

      if (mode === "scientific") {
        scientificKeypad.classList.remove("hidden");
        angleToggleBtn.classList.remove("hidden");
        
        sciBtn.classList.add("btn-active-mode", "shadow-md");
        sciBtn.classList.remove("text-slate-400");
        stdBtn.classList.remove("btn-active-mode", "shadow-md");
        stdBtn.classList.add("text-slate-400");
      } else {
        scientificKeypad.classList.add("hidden");
        angleToggleBtn.classList.add("hidden");

        stdBtn.classList.add("btn-active-mode", "shadow-md");
        stdBtn.classList.remove("text-slate-400");
        sciBtn.classList.remove("btn-active-mode", "shadow-md");
        sciBtn.classList.add("text-slate-400");
      }
    }

    // Toggle Angle Unit RAD / DEG
    function toggleAngleUnit() {
      angleUnit = angleUnit === "DEG" ? "RAD" : "DEG";
      angleToggleBtn.innerText = angleUnit;
    }

    // Numbers & Decimals
    function appendValue(val) {
      if (isEvaluated) {
        currentInput = val;
        expression = "";
        isEvaluated = false;
      } else {
        if (currentInput === "0" || currentInput === "Error") {
          currentInput = val;
        } else {
          currentInput += val;
        }
      }
      updateDisplay();
    }

    function appendDecimal() {
      if (isEvaluated) {
        currentInput = "0.";
        expression = "";
        isEvaluated = false;
      } else if (!currentInput.includes(".")) {
        currentInput += ".";
      }
      updateDisplay();
    }

    // Append Constant
    function appendConstant(symbol) {
      if (isEvaluated) {
        expression = "";
        isEvaluated = false;
      }
      if (symbol === "π") {
        currentInput = Math.PI.toString();
      } else if (symbol === "e") {
        currentInput = Math.E.toString();
      }
      updateDisplay();
    }

    // Append Operator
    function appendOperator(op) {
      if (currentInput === "Error") return;
      
      if (isEvaluated) {
        expression = currentInput + " " + op + " ";
        isEvaluated = false;
      } else {
        expression += currentInput + " " + op + " ";
      }
      currentInput = "0";
      updateDisplay();
    }

    // Append Function Call e.g., sin(
    function appendFunction(funcName) {
      if (isEvaluated) expression = "";
      expression += `${funcName}(`;
      isEvaluated = false;
      updateDisplay();
    }

    // Single Number Direct Operation (e.g., x², sqrt, etc.)
    function executeSingleOp(type) {
      if (currentInput === "Error") return;
      let val = parseFloat(currentInput);
      let result = 0;

      try {
        switch (type) {
          case 'square':
            result = Math.pow(val, 2);
            expression = `sqr(${val})`;
            break;
          case 'cube':
            result = Math.pow(val, 3);
            expression = `cube(${val})`;
            break;
          case 'sqrt':
            if (val < 0) throw new Error("Invalid Input");
            result = Math.sqrt(val);
            expression = `√(${val})`;
            break;
          case 'cbrt':
            result = Math.cbrt(val);
            expression = `∛(${val})`;
            break;
          case 'reciprocal':
            if (val === 0) throw new Error("Divide by Zero");
            result = 1 / val;
            expression = `1/(${val})`;
            break;
          case 'pow10':
            result = Math.pow(10, val);
            expression = `10^(${val})`;
            break;
          case 'exp':
            result = Math.exp(val);
            expression = `e^(${val})`;
            break;
          case 'abs':
            result = Math.abs(val);
            expression = `abs(${val})`;
            break;
          case 'factorial':
            result = calculateFactorial(val);
            expression = `fact(${val})`;
            break;
        }
        currentInput = result.toString();
        isEvaluated = true;
      } catch (err) {
        currentInput = "Error";
      }
      updateDisplay();
    }

    function calculateFactorial(n) {
      if (n < 0 || !Number.isInteger(n)) return "Error";
      if (n === 0 || n === 1) return 1;
      let res = 1;
      for (let i = 2; i <= n; i++) {
        res *= i;
        if (res === Infinity) return Infinity;
      }
      return res;
    }

    // Toggle Sign (+/-)
    function toggleSign() {
      if (currentInput === "0" || currentInput === "Error") return;
      if (currentInput.startsWith("-")) {
        currentInput = currentInput.substring(1);
      } else {
        currentInput = "-" + currentInput;
      }
      updateDisplay();
    }

    // Clear Options
    function clearEntry() {
      currentInput = "0";
      updateDisplay();
    }

    function clearAll() {
      currentInput = "0";
      expression = "";
      isEvaluated = false;
      updateDisplay();
    }

    function deleteBackspace() {
      if (isEvaluated) {
        clearAll();
        return;
      }
      if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
      } else {
        currentInput = "0";
      }
      updateDisplay();
    }

    // Memory Functions
    function memoryClear() {
      memoryValue = 0;
      memoryIndicator.classList.add("hidden");
    }

    function memoryRecall() {
      currentInput = memoryValue.toString();
      updateDisplay();
    }

    function memoryAdd() {
      const val = parseFloat(currentInput);
      if (!isNaN(val)) {
        memoryValue += val;
        memoryIndicator.classList.remove("hidden");
      }
    }

    function memorySubtract() {
      const val = parseFloat(currentInput);
      if (!isNaN(val)) {
        memoryValue -= val;
        memoryIndicator.classList.remove("hidden");
      }
    }

    // Evaluate Result
    function calculateResult() {
      if (isEvaluated || currentInput === "Error") return;

      let fullExpression = expression + currentInput;
      let rawExpression = fullExpression;

      try {
        let parsedExpr = prepareExpression(fullExpression);
        let result = eval(parsedExpr);

        if (typeof result === "number" && !isNaN(result)) {
          if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(10));
          }
          let formattedResult = result.toString();
          
          addHistoryItem(rawExpression, formattedResult);

          currentInput = formattedResult;
          expression = "";
          isEvaluated = true;
        } else {
          currentInput = "Error";
        }
      } catch (e) {
        currentInput = "Error";
      }

      updateDisplay();
    }

    // Transform math terms into runnable JavaScript
    function prepareExpression(expr) {
      let parsed = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/%/g, '%')
        .replace(/\^/g, '**')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E');

      const toRadMultiplier = angleUnit === "DEG" ? "(Math.PI / 180) *" : "1 *";
      
      parsed = parsed.replace(/sin\(([^)]+)\)/g, (m, g) => `Math.sin(${toRadMultiplier}(${g}))`);
      parsed = parsed.replace(/cos\(([^)]+)\)/g, (m, g) => `Math.cos(${toRadMultiplier}(${g}))`);
      parsed = parsed.replace(/tan\(([^)]+)\)/g, (m, g) => `Math.tan(${toRadMultiplier}(${g}))`);

      parsed = parsed.replace(/asin\(([^)]+)\)/g, (m, g) => 
        angleUnit === "DEG" ? `(Math.asin(${g}) * 180 / Math.PI)` : `Math.asin(${g})`);
      parsed = parsed.replace(/acos\(([^)]+)\)/g, (m, g) => 
        angleUnit === "DEG" ? `(Math.acos(${g}) * 180 / Math.PI)` : `Math.acos(${g})`);
      parsed = parsed.replace(/atan\(([^)]+)\)/g, (m, g) => 
        angleUnit === "DEG" ? `(Math.atan(${g}) * 180 / Math.PI)` : `Math.atan(${g})`);

      parsed = parsed.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
      parsed = parsed.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');

      return parsed;
    }

    // History Logic
    function addHistoryItem(expr, result) {
      history.unshift({ expr, result });
      renderHistory();
    }

    function renderHistory() {
      if (history.length === 0) {
        emptyHistoryMsg.classList.remove("hidden");
        historyList.innerHTML = "";
        historyList.appendChild(emptyHistoryMsg);
        return;
      }

      emptyHistoryMsg.classList.add("hidden");
      historyList.innerHTML = "";

      history.forEach((item) => {
        const div = document.createElement("div");
        div.className = "p-3 bg-black/20 border border-white/10 rounded-xl hover:border-white/20 transition cursor-pointer group";
        div.onclick = () => useHistoryResult(item.result);

        div.innerHTML = `
          <div class="text-xs text-slate-400 font-mono truncate group-hover:text-slate-300 transition">${item.expr}</div>
          <div class="text-lg font-bold font-mono text-accent transition text-right">= ${item.result}</div>
        `;
        historyList.appendChild(div);
      });
    }

    function useHistoryResult(val) {
      currentInput = val;
      isEvaluated = false;
      updateDisplay();
    }

    function clearHistory() {
      history = [];
      renderHistory();
    }

    function toggleHistoryMobile() {
      const container = document.getElementById("historyContainer");
      container.classList.toggle("hidden");
    }

    // Keyboard Shortcuts Support
    function handleKeyPress(e) {
      if (e.key >= '0' && e.key <= '9') appendValue(e.key);
      if (e.key === '.' || e.key === ',') appendDecimal();
      if (e.key === '+') appendOperator('+');
      if (e.key === '-') appendOperator('-');
      if (e.key === '*') appendOperator('×');
      if (e.key === '/') {
        e.preventDefault();
        appendOperator('÷');
      }
      if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculateResult();
      }
      if (e.key === 'Backspace') deleteBackspace();
      if (e.key === 'Escape') clearAll();
    }
  </script>
</body>
</html>
