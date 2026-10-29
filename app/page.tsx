'use client';

import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('0');
};
  

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === 'DEL') {
      setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
    } else if (value === '=') {
      try {
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-950 text-white p-4">
      <div className="w-full max-w-md bg-red-900/40 border border-red-600/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-red-400">Calculadora Roja</h1>
          <button 
            onClick={() => setModo(modo === 'estandar' ? 'cientifica' : 'estandar')}
            className="text-xs bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-lg font-semibold transition shadow-md"
          >
            Modo: {modo.toUpperCase()}
          </button>
        </div>

        <div className="bg-black/60 border border-red-500/30 rounded-xl p-4 text-right text-3xl font-mono tracking-wider mb-6 text-red-300 overflow-x-auto min-h-[70px] flex items-center justify-end">
          {display}
        </div>

        {modo === 'cientifica' && (
          <div className="grid grid-cols-5 gap-2 mb-3 bg-red-950/40 p-2 rounded-xl border border-red-500/20">
            <button onClick={() => handleButtonClick('sin(')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">sin</button>
            <button onClick={() => handleButtonClick('cos(')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">cos</button>
            <button onClick={() => handleButtonClick('tan(')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">tan</button>
            <button onClick={() => handleButtonClick('√(')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">√</button>
            <button onClick={() => handleButtonClick('^')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">x^y</button>
            <button onClick={() => handleButtonClick('π')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">π</button>
            <button onClick={() => handleButtonClick('e')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">e</button>
            <button onClick={() => handleButtonClick('(')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">(</button>
            <button onClick={() => handleButtonClick(')')} className="bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold py-2.5 rounded-lg transition border border-red-700">)</button>
          </div>
        )}

        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleButtonClick('C')} className="bg-red-950 hover:bg-red-900 text-red-400 font-semibold p-4 rounded-xl transition border border-red-800">C</button>
          <button onClick={() => handleButtonClick('DEL')} className="bg-red-900/40 hover:bg-red-900/70 font-semibold p-4 rounded-xl transition border border-red-800/50">DEL</button>
          <button onClick={() => handleButtonClick('÷')} className="bg-red-600/30 hover:bg-red-600/50 text-red-200 font-semibold p-4 rounded-xl transition border border-red-500/40">÷</button>
          <button onClick={() => handleButtonClick('×')} className="bg-red-600/30 hover:bg-red-600/50 text-red-200 font-semibold p-4 rounded-xl transition border border-red-500/40">×</button>

          <button onClick={() => handleButtonClick('7')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">7</button>
          <button onClick={() => handleButtonClick('8')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">8</button>
          <button onClick={() => handleButtonClick('9')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">9</button>
          <button onClick={() => handleButtonClick('-')} className="bg-red-600/30 hover:bg-red-600/50 text-red-200 font-semibold p-4 rounded-xl transition border border-red-500/40">-</button>

          <button onClick={() => handleButtonClick('4')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">4</button>
          <button onClick={() => handleButtonClick('5')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">5</button>
          <button onClick={() => handleButtonClick('6')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">6</button>
          <button onClick={() => handleButtonClick('+')} className="bg-red-600/30 hover:bg-red-600/50 text-red-200 font-semibold p-4 rounded-xl transition border border-red-500/40">+</button>

          <button onClick={() => handleButtonClick('1')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">1</button>
          <button onClick={() => handleButtonClick('2')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">2</button>
          <button onClick={() => handleButtonClick('3')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">3</button>
          <button onClick={() => handleButtonClick('=')} className="bg-red-600 hover:bg-red-500 text-white font-bold p-4 rounded-xl transition row-span-2 flex items-center justify-center shadow-lg shadow-red-600/30">=</button>

          <button onClick={() => handleButtonClick('0')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition col-span-2 border border-red-900/30">0</button>
          <button onClick={() => handleButtonClick('.')} className="bg-red-900/20 hover:bg-red-900/40 p-4 rounded-xl font-semibold transition border border-red-900/30">.</button>
        </div>
      </div>
    </main>
  );
}