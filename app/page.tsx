'use client';

import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [modo, setModo] = useState('estandar');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === 'DEL') {
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (value === '=') {
      try {
        const evaluated = eval(
          display
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/π/g, 'Math.PI')
            .replace(/e/g, 'Math.E')
            .replace(/√\(/g, 'Math.sqrt(')
        );
        setDisplay(String(evaluated));
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      setDisplay((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-yellow-100 p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-yellow-600/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-yellow-400">Calculadora Amarilla</h1>
          <button
            onClick={() => setModo(modo === 'estandar' ? 'cientifica' : 'estandar')}
            className="text-xs bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold px-3 py-1.5 rounded-lg transition-all"
          >
            Modo: {modo.toUpperCase()}
          </button>
        </div>

        <div className="bg-black/60 border border-yellow-500/30 rounded-xl p-4 text-right text-2xl font-mono mb-6 text-yellow-200 overflow-x-auto">
          {display}
        </div>

        {modo === 'cientifica' && (
          <div className="grid grid-cols-5 gap-2 mb-3 bg-zinc-950/40 p-2 rounded-xl border border-yellow-800/40">
            <button onClick={() => handleButtonClick('sin(')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">sin</button>
            <button onClick={() => handleButtonClick('cos(')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">cos</button>
            <button onClick={() => handleButtonClick('tan(')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">tan</button>
            <button onClick={() => handleButtonClick('√(')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">√</button>
            <button onClick={() => handleButtonClick('^')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">^</button>
            <button onClick={() => handleButtonClick('π')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">π</button>
            <button onClick={() => handleButtonClick('e')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">e</button>
            <button onClick={() => handleButtonClick('(')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">(</button>
            <button onClick={() => handleButtonClick(')')} className="bg-yellow-950/60 hover:bg-yellow-900 p-2 rounded-lg text-xs font-semibold text-yellow-200">)</button>
          </div>
        )}

        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleButtonClick('C')} className="bg-zinc-800 hover:bg-zinc-700 text-yellow-400 font-bold p-4 rounded-xl border border-yellow-800/50">C</button>
          <button onClick={() => handleButtonClick('DEL')} className="bg-zinc-800 hover:bg-zinc-700 font-bold p-4 rounded-xl border border-zinc-700">DEL</button>
          <button onClick={() => handleButtonClick('÷')} className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-bold p-4 rounded-xl border border-yellow-500/40">÷</button>
          <button onClick={() => handleButtonClick('×')} className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-bold p-4 rounded-xl border border-yellow-500/40">×</button>

          <button onClick={() => handleButtonClick('7')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">7</button>
          <button onClick={() => handleButtonClick('8')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">8</button>
          <button onClick={() => handleButtonClick('9')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">9</button>
          <button onClick={() => handleButtonClick('-')} className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-bold p-4 rounded-xl border border-yellow-500/40">-</button>

          <button onClick={() => handleButtonClick('4')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">4</button>
          <button onClick={() => handleButtonClick('5')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">5</button>
          <button onClick={() => handleButtonClick('6')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">6</button>
          <button onClick={() => handleButtonClick('+')} className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-bold p-4 rounded-xl border border-yellow-500/40">+</button>

          <button onClick={() => handleButtonClick('1')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">1</button>
          <button onClick={() => handleButtonClick('2')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">2</button>
          <button onClick={() => handleButtonClick('3')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">3</button>
          <button onClick={() => handleButtonClick('=')} className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold p-4 rounded-xl row-span-2 flex items-center justify-center text-xl shadow-lg">=</button>

          <button onClick={() => handleButtonClick('0')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50 col-span-2">0</button>
          <button onClick={() => handleButtonClick('.')} className="bg-zinc-800/50 hover:bg-zinc-800 font-bold p-4 rounded-xl border border-zinc-700/50">.</button>
        </div>
      </div>
    </main>
  );
}