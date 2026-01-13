
import React from 'react';
import { UserState, AppView } from '../types';
import BottomNav from './BottomNav';

interface StandbyMapViewProps {
  user: UserState;
  time: string;
  currentTab: AppView;
  setTab: (tab: AppView) => void;
}

const StandbyMapView: React.FC<StandbyMapViewProps> = ({ user, time, currentTab, setTab }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#0b0e14]">
      {/* Map Background SVG & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 map-grid"></div>
        <svg className="absolute inset-0 w-full h-full text-slate-800 opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 Q 150 250 400 150 T 900 300" fill="none" stroke="currentColor" strokeWidth="12" />
          <path d="M200 -50 L 250 400 L 150 900" fill="none" stroke="currentColor" strokeWidth="10" />
          <path d="M0 600 L 800 550" fill="none" stroke="currentColor" strokeWidth="8" />
          <path d="M600 0 L 550 900" fill="none" stroke="currentColor" strokeWidth="14" />
          <circle cx="50%" cy="50%" r="150" fill="currentColor" opacity="0.05" />
        </svg>
        <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, rgba(11, 14, 20, 0.6) 100%)"></div>
      </div>

      {/* Header Overlay */}
      <header className="pt-14 px-5 flex justify-between items-start z-10 pointer-events-none">
        <div className="flex flex-col drop-shadow-md z-20 pointer-events-auto">
          <h1 className="text-xl font-bold tracking-wide leading-tight">{user.name}</h1>
          <div className="mt-1">
            <span className="text-xs font-mono opacity-80 bg-white/10 px-1.5 py-0.5 rounded backdrop-blur-sm">ID: {user.id}</span>
          </div>
        </div>
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]"></span>
            <span className="text-white/95 text-xs font-medium tracking-wide">待勤中...</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 drop-shadow-md">
          <div className="text-lg font-medium font-mono tracking-wide">{time}</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
            <span className="text-xs font-medium opacity-80">Online</span>
          </div>
        </div>
      </header>

      {/* Map Content: Location Pin and GPS Coords */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center pointer-events-none transform -mt-4">
        <div className="mb-2 px-4 py-2 bg-slate-800/80 backdrop-blur-md border border-white/20 rounded-lg shadow-xl flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-white">{user.name} 待命中</span>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/30 rounded-full blur-md animate-pulse"></div>
          <span className="material-icons text-5xl text-blue-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">location_on</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-1.5 bg-black/50 rounded-[100%] blur-[1px]"></div>
        </div>

        <div className="mt-4 px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl flex flex-col items-center gap-1 min-w-[160px]">
          <div className="flex items-center gap-2 w-full justify-between">
            <span className="text-xs font-bold text-white/80 font-mono">E:</span>
            <span className="text-lg font-mono font-bold text-blue-400 tracking-wider">116.3971</span>
          </div>
          <div className="flex items-center gap-2 w-full justify-between">
            <span className="text-xs font-bold text-white/80 font-mono">N:</span>
            <span className="text-lg font-mono font-bold text-purple-400 tracking-wider">39.9165</span>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        <div className="flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg overflow-hidden">
          <button className="p-3 hover:bg-white/10 active:bg-white/20 transition-colors border-b border-white/5">
            <span className="material-icons text-white/90 text-2xl">add</span>
          </button>
          <button className="p-3 hover:bg-white/10 active:bg-white/20 transition-colors">
            <span className="material-icons text-white/90 text-2xl">remove</span>
          </button>
        </div>
        <button className="p-3 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg hover:bg-white/10 active:bg-white/20 transition-colors">
          <span className="material-icons text-blue-400 text-2xl">my_location</span>
        </button>
      </div>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20">
        <button 
          onClick={() => setTab(AppView.MAIN_MEETING)}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.4)] active:scale-95 transition-all hover:bg-slate-800/90 group"
        >
          <span className="material-icons text-xl text-blue-400 group-hover:text-blue-300">videocam</span>
          <span className="text-sm font-medium text-white tracking-wide">打开预览</span>
        </button>
      </div>

      <BottomNav currentTab={currentTab} setTab={setTab} />
    </div>
  );
};

export default StandbyMapView;
