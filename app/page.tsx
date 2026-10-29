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
    <main className="flex min-h-screen flex-col items-center justify-center bg-orange-950 text-white p-4">
      <div className="w-full max-w-md bg-orange-900/40 border border-orange-600/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-orange-400">Calculadora Naranja</h1>
          <button
            onClick={() => setModo(modo === 'estandar' ? 'cientifica' : 'estandar')}
            className="text-xs bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-lg transition-all"
          >
            Modo: {modo.toUpperCase()}
          </button>
        </div>

        <div className="bg-black/60 border border-orange-500/30 rounded-xl p-4 text-right text-2xl font-mono mb-6 text-orange-200 overflow-x-auto">
          {display}
        </div>

        {modo === 'cientifica' && (
          <div className="grid grid-cols-5 gap-2 mb-3 bg-orange-950/40 p-2 rounded-xl border border-orange-800/40">
            <button onClick={() => handleButtonClick('sin(')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">sin</button>
            <button onClick={() => handleButtonClick('cos(')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">cos</button>
            <button onClick={() => handleButtonClick('tan(')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">tan</button>
            <button onClick={() => handleButtonClick('√(')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">√</button>
            <button onClick={() => handleButtonClick('^')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">^</button>
            <button onClick={() => handleButtonClick('π')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">π</button>
            <button onClick={() => handleButtonClick('e')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">e</button>
            <button onClick={() => handleButtonClick('(')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">(</button>
            <button onClick={() => handleButtonClick(')')} className="bg-orange-900/60 hover:bg-orange-800 p-2 rounded-lg text-xs font-semibold">)</button>
          </div>
        )}

        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleButtonClick('C')} className="bg-orange-950 hover:bg-orange-900 text-orange-300 font-bold p-4 rounded-xl border border-orange-800/50">C</button>
          <button onClick={() => handleButtonClick('DEL')} className="bg-orange-900/40 hover:bg-orange-900/60 font-bold p-4 rounded-xl border border-orange-800/50">DEL</button>
          <button onClick={() => handleButtonClick('÷')} className="bg-orange-600/30 hover:bg-orange-600/50 font-bold p-4 rounded-xl border border-orange-600/50">÷</button>
          <button onClick={() => handleButtonClick('×')} className="bg-orange-600/30 hover:bg-orange-600/50 font-bold p-4 rounded-xl border border-orange-600/50">×</button>

          <button onClick={() => handleButtonClick('7')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">7</button>
          <button onClick={() => handleButtonClick('8')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">8</button>
          <button onClick={() => handleButtonClick('9')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">9</button>
          <button onClick={() => handleButtonClick('-')} className="bg-orange-600/30 hover:bg-orange-600/50 font-bold p-4 rounded-xl border border-orange-600/50">-</button>

          <button onClick={() => handleButtonClick('4')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">4</button>
          <button onClick={() => handleButtonClick('5')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">5</button>
          <button onClick={() => handleButtonClick('6')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">6</button>
          <button onClick={() => handleButtonClick('+')} className="bg-orange-600/30 hover:bg-orange-600/50 font-bold p-4 rounded-xl border border-orange-600/50">+</button>

          <button onClick={() => handleButtonClick('1')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">1</button>
          <button onClick={() => handleButtonClick('2')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">2</button>
          <button onClick={() => handleButtonClick('3')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">3</button>
          <button onClick={() => handleButtonClick('=')} className="bg-orange-600 hover:bg-orange-500 font-bold p-4 rounded-xl row-span-2 flex items-center justify-center text-xl shadow-lg">=</button>

          <button onClick={() => handleButtonClick('0')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30 col-span-2">0</button>
          <button onClick={() => handleButtonClick('.')} className="bg-orange-900/20 hover:bg-orange-900/40 font-bold p-4 rounded-xl border border-orange-800/30">.</button>
        </div>
      </div>
    </main>
  );
}