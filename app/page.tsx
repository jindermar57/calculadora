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
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-neutral-200">Calculadora Negra</h1>
          <button
            onClick={() => setModo(modo === 'estandar' ? 'cientifica' : 'estandar')}
            className="text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 px-3 py-1.5 rounded-lg transition-all"
          >
            Modo: {modo.toUpperCase()}
          </button>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-right text-2xl font-mono mb-6 text-white overflow-x-auto">
          {display}
        </div>

        {modo === 'cientifica' && (
          <div className="grid grid-cols-5 gap-2 mb-3 bg-neutral-950/60 p-2 rounded-xl border border-neutral-800">
            <button onClick={() => handleButtonClick('sin(')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">sin</button>
            <button onClick={() => handleButtonClick('cos(')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">cos</button>
            <button onClick={() => handleButtonClick('tan(')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">tan</button>
            <button onClick={() => handleButtonClick('√(')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">√</button>
            <button onClick={() => handleButtonClick('^')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">^</button>
            <button onClick={() => handleButtonClick('π')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">π</button>
            <button onClick={() => handleButtonClick('e')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">e</button>
            <button onClick={() => handleButtonClick('(')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">(</button>
            <button onClick={() => handleButtonClick(')')} className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg text-xs font-semibold text-neutral-300">)</button>
          </div>
        )}

        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleButtonClick('C')} className="bg-neutral-800 hover:bg-neutral-700 text-red-400 font-bold p-4 rounded-xl border border-neutral-700">C</button>
          <button onClick={() => handleButtonClick('DEL')} className="bg-neutral-800 hover:bg-neutral-700 font-bold p-4 rounded-xl border border-neutral-700">DEL</button>
          <button onClick={() => handleButtonClick('÷')} className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-bold p-4 rounded-xl border border-neutral-700">÷</button>
          <button onClick={() => handleButtonClick('×')} className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-bold p-4 rounded-xl border border-neutral-700">×</button>

          <button onClick={() => handleButtonClick('7')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">7</button>
          <button onClick={() => handleButtonClick('8')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">8</button>
          <button onClick={() => handleButtonClick('9')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">9</button>
          <button onClick={() => handleButtonClick('-')} className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-bold p-4 rounded-xl border border-neutral-700">-</button>

          <button onClick={() => handleButtonClick('4')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">4</button>
          <button onClick={() => handleButtonClick('5')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">5</button>
          <button onClick={() => handleButtonClick('6')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">6</button>
          <button onClick={() => handleButtonClick('+')} className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-bold p-4 rounded-xl border border-neutral-700">+</button>

          <button onClick={() => handleButtonClick('1')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">1</button>
          <button onClick={() => handleButtonClick('2')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">2</button>
          <button onClick={() => handleButtonClick('3')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">3</button>
          <button onClick={() => handleButtonClick('=')} className="bg-white hover:bg-neutral-200 text-neutral-950 font-bold p-4 rounded-xl row-span-2 flex items-center justify-center text-xl shadow-lg">=</button>

          <button onClick={() => handleButtonClick('0')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800 col-span-2">0</button>
          <button onClick={() => handleButtonClick('.')} className="bg-neutral-900 hover:bg-neutral-800 font-bold p-4 rounded-xl border border-neutral-800">.</button>
        </div>
      </div>
    </main>
  );
}