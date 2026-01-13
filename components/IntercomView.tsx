
import React, { useState } from 'react';
import { UserState } from '../types';

interface IntercomViewProps {
  onBack: () => void;
  user: UserState;
}

const IntercomView: React.FC<IntercomViewProps> = ({ onBack, user }) => {
  const [isHolding, setIsHolding] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0B1121] overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a] via-[#172554] to-[#0f172a] opacity-90"></div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between pt-24 pb-12 px-6">
        {/* Navigation Back */}
        <div className="absolute top-14 left-6">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all shadow-sm"
          >
            <span className="material-icons text-white text-xl transform -rotate-90">arrow_back_ios_new</span>
          </button>
        </div>

        {/* Status indicator */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-white/10 backdrop-blur-md shadow-lg">
            <div className={`w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] ${isHolding ? 'animate-ping' : 'animate-pulse'}`}></div>
            <span className="text-[12px] font-medium text-white tracking-widest">{isHolding ? '正在讲话' : '对讲中'}</span>
          </div>
        </div>

        {/* Profile Circle with Rings */}
        <div className="flex flex-col items-center w-full space-y-10 mt-8">
          <div className="relative flex items-center justify-center">
            {isHolding && (
              <>
                <div className="absolute w-56 h-56 rounded-full border border-green-500/30 animate-pulse-ring"></div>
                <div className="absolute w-56 h-56 rounded-full border border-green-500/15 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
              </>
            )}
            <div className={`absolute w-40 h-40 rounded-full bg-green-500/10 blur-xl ${isHolding ? 'animate-pulse' : 'opacity-0'}`}></div>
            <div className="relative w-40 h-40 rounded-full bg-[#1e293b] border border-[#334155] shadow-[0_0_30px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden z-10">
              <span className="material-icons text-7xl text-slate-500">person</span>
            </div>
            <div className="absolute bottom-1 right-3 z-20 w-8 h-8 rounded-full bg-[#0B1121] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h2 className="text-3xl font-bold tracking-wide text-white drop-shadow-md">cs0012@yj</h2>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/10 glass">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xl font-mono text-white tracking-wider">00:42</span>
            </div>
          </div>
        </div>

        {/* Wave Visualization */}
        <div className="w-full flex items-center justify-center h-28 gap-1.5 px-8">
          {[0.1, 0.2, 0, 0.3, 0.1, 0.2, 0.05, 0.15, 0.25, 0.1, 0.3, 0, 0.2].map((delay, i) => (
            <div 
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${isHolding ? 'bg-green-400 animate-wave' : 'bg-green-400/20'}`}
              style={{ animationDelay: `${delay}s`, height: isHolding ? 'auto' : '10%' }}
            ></div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="w-full max-w-[360px] flex flex-col gap-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col items-center gap-2">
              <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all shadow-lg">
                <span className="material-icons text-xl text-white">volume_up</span>
              </button>
              <span className="text-[11px] font-medium text-cyan-100/70 tracking-wider">扬声器</span>
            </div>
            
            <button 
              onClick={onBack}
              className="w-20 h-20 rounded-full bg-red-600 border border-red-500/50 flex items-center justify-center hover:bg-red-500 active:scale-95 transition-all shadow-[0_0_40px_rgba(220,38,38,0.5)] group"
            >
              <span className="material-icons text-4xl text-white group-hover:scale-110 transition-transform">call_end</span>
            </button>

            <div className="flex flex-col items-center gap-2">
              <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all shadow-lg">
                <span className="material-icons text-xl text-white">mic_off</span>
              </button>
              <span className="text-[11px] font-medium text-cyan-100/70 tracking-wider">静音</span>
            </div>
          </div>

          <button 
            onMouseDown={() => setIsHolding(true)}
            onMouseUp={() => setIsHolding(false)}
            onTouchStart={() => setIsHolding(true)}
            onTouchEnd={() => setIsHolding(false)}
            className={`w-full h-[72px] rounded-2xl backdrop-blur-xl border flex items-center justify-center gap-3 transition-all duration-200 shadow-lg group ${isHolding ? 'bg-primary/40 border-primary/50 scale-[0.98]' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-inner ${isHolding ? 'bg-primary/50' : 'bg-white/20'}`}>
              <span className="material-icons text-2xl text-white">{isHolding ? 'graphic_eq' : 'mic'}</span>
            </div>
            <span className="text-base font-bold text-white tracking-wide">{isHolding ? '正在讲话...' : '按住开始讲话'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntercomView;
