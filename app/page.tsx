'use client';

import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [modo, setModo] = useState('estandar'); // 'estandar' o 'cientifica'
  const [tema, setTema] = useState('dark');     // 'dark', 'neon', 'cyberpunk'

  // Función para manejar los clics de los botones
  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === 'DEL') {
      setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
    } else if (value === '=') {
      try {
        // Reemplazamos símbolos visuales por operadores matemáticos de JS
        let expresion = display
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/π/g, String(Math.PI))
          .replace(/e/g, String(Math.E))
          .replace(/√\(/g, 'Math.sqrt(')
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(');

        const resultado = eval(expresion);
        setDisplay(String(resultado));
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      if (display === '0' || display === 'Error') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  // Estilos dinámicos según el tema seleccionado
  themes: {
    // Definimos clases para los temas
  }
  const themeStyles = {
    dark: 'bg-slate-950 text-white border-slate-800 bg-slate-900',
    neon: 'bg-zinc-950 text-cyan-400 border-cyan-500/30 bg-zinc-900 shadow-cyan-500/10',
    cyberpunk: 'bg-purple-950 text-yellow-300 border-yellow-500/40 bg-purple-900',
  }[tema];

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-4 transition-colors duration-300 ${tema === 'neon' ? 'bg-zinc-950 text-cyan-400' : tema === 'cyberpunk' ? 'bg-purple-950 text-yellow-300' : 'bg-slate-950 text-white'}`}>
      
      <div className={`w-full max-w-md border rounded-2xl p-6 shadow-2xl transition-all ${tema === 'neon' ? 'bg-zinc-900 border-cyan-500/40' : tema === 'cyberpunk' ? 'bg-purple-900 border-yellow-500/50' : 'bg-slate-900 border-slate-800'}`}>
        
        {/* Encabezado: Selectores de Modo y Tema */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold">Calculadora Pro</h1>
            
            {/* Botón de Modo Estándar / Científica */}
            <button 
              onClick={() => setModo(modo === 'estandar' ? 'cientifica' : 'estandar')}
              className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-semibold transition shadow-md"
            >
              Modo: {modo.toUpperCase()}
            </button>
          </div>

          {/* Botón Selector de Colores (Temas) */}
          <div className="flex gap-2 items-center text-xs">
            <span className="text-slate-400 font-medium">Tema:</span>
            <button onClick={() => setTema('dark')} className={`px-2.5 py-1 rounded border transition ${tema === 'dark' ? 'bg-slate-700 border-slate-500 font-bold' : 'bg-slate-800 border-slate-700'}`}>Oscuro</button>
            <button onClick={() => setTema('neon')} className={`px-2.5 py-1 rounded border transition ${tema === 'neon' ? 'bg-cyan-900 border-cyan-400 font-bold text-cyan-200' : 'bg-zinc-800 border-zinc-700'}`}>Neón</button>
            <button onClick={() => setTema('cyberpunk')} className={`px-2.5 py-1 rounded border transition ${tema === 'cyberpunk' ? 'bg-purple-800 border-yellow-400 font-bold text-yellow-200' : 'bg-purple-900 border-purple-700'}`}>Cyber</button>
          </div>
        </div>

        {/* Pantalla de la Calculadora */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-right text-3xl font-mono tracking-wider mb-6 text-green-400 overflow-x-auto min-h-[70px] flex items-center justify-end">
          {display}
        </div>

        {/* Panel de Botones Científicos (Se muestra solo si el modo es 'cientifica') */}
        {modo === 'cientifica' && (
          <div className="grid grid-cols-5 gap-2 mb-3 bg-white/5 p-2 rounded-xl border border-white/10 animate-fadeIn">
            <button onClick={() => handleButtonClick('sin(')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">sin</button>
            <button onClick={() => handleButtonClick('cos(')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">cos</button>
            <button onClick={() => handleButtonClick('tan(')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">tan</button>
            <button onClick={() => handleButtonClick('√(')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">√</button>
            <button onClick={() => handleButtonClick('^')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">x^y</button>
            <button onClick={() => handleButtonClick('π')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">π</button>
            <button onClick={() => handleButtonClick('e')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">e</button>
            <button onClick={() => handleButtonClick('(')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">(</button>
            <button onClick={() => handleButtonClick(')')} className="bg-amber-900/40 hover:bg-amber-900/60 text-amber-300 text-xs font-semibold py-2.5 rounded-lg transition border border-amber-800/40">)</button>
          </div>
        )}

        {/* Teclado Estándar */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleButtonClick('C')} className="bg-red-900/40 hover:bg-red-900/60 text-red-300 font-semibold p-4 rounded-xl transition border border-red-800/50">C</button>
          <button onClick={() => handleButtonClick('DEL')} className="bg-slate-800 hover:bg-slate-700 font-semibold p-4 rounded-xl transition border border-slate-700">DEL</button>
          <button onClick={() => handleButtonClick('÷')} className="bg-blue-900/40 hover:bg-blue-900/60 text-blue-300 font-semibold p-4 rounded-xl transition border border-blue-800/50">÷</button>
          <button onClick={() => handleButtonClick('×')} className="bg-blue-900/40 hover:bg-blue-900/60 text-blue-300 font-semibold p-4 rounded-xl transition border border-blue-800/50">×</button>

          <button onClick={() => handleButtonClick('7')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">7</button>
          <button onClick={() => handleButtonClick('8')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">8</button>
          <button onClick={() => handleButtonClick('9')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">9</button>
          <button onClick={() => handleButtonClick('-')} className="bg-blue-900/40 hover:bg-blue-900/60 text-blue-300 font-semibold p-4 rounded-xl transition border border-blue-800/50">-</button>

          <button onClick={() => handleButtonClick('4')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">4</button>
          <button onClick={() => handleButtonClick('5')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">5</button>
          <button onClick={() => handleButtonClick('6')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">6</button>
          <button onClick={() => handleButtonClick('+')} className="bg-blue-900/40 hover:bg-blue-900/60 text-blue-300 font-semibold p-4 rounded-xl transition border border-blue-800/50">+</button>

          <button onClick={() => handleButtonClick('1')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">1</button>
          <button onClick={() => handleButtonClick('2')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">2</button>
          <button onClick={() => handleButtonClick('3')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">3</button>
          <button onClick={() => handleButtonClick('=')} className="bg-blue-600 hover:bg-blue-500 text-white font-bold p-4 rounded-xl transition row-span-2 flex items-center justify-center shadow-lg shadow-blue-500/20">=</button>

          <button onClick={() => handleButtonClick('0')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition col-span-2">0</button>
          <button onClick={() => handleButtonClick('.')} className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-semibold transition">.</button>
        </div>

      </div>
    </main>
  );
}