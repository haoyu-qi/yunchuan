
import React from 'react';
import { AppView } from '../types';

interface BottomNavProps {
  currentTab: AppView;
  setTab: (tab: AppView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, setTab }) => {
  return (
    <nav className="absolute bottom-0 left-0 w-full h-24 bg-[#111827]/80 backdrop-blur-2xl border-t border-white/5 z-30 flex justify-around items-start pt-3 px-2 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      {/* Tab: Standby */}
      <button 
        onClick={() => setTab(AppView.STANDBY_MAP)}
        className={`flex flex-col items-center justify-center gap-1 w-20 h-16 group transition-all focus:outline-none active:scale-95 ${currentTab === AppView.STANDBY_MAP ? 'text-primary' : 'text-white/50 hover:text-white'}`}
      >
        <div className="relative">
          {currentTab === AppView.STANDBY_MAP && <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-60"></div>}
          <span className={`material-icons text-3xl ${currentTab === AppView.STANDBY_MAP ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]' : ''}`}>pause_circle_outline</span>
        </div>
        <span className={`text-[10px] font-medium tracking-wider ${currentTab === AppView.STANDBY_MAP ? 'font-bold' : ''}`}>待命</span>
      </button>

      {/* Tab: Main Meeting (Image Back) */}
      <button 
        onClick={() => setTab(AppView.MAIN_MEETING)}
        className={`flex flex-col items-center justify-center gap-1 w-24 h-16 relative focus:outline-none group ${currentTab === AppView.MAIN_MEETING ? 'text-primary' : 'text-white/50 hover:text-white'}`}
      >
        <div className="relative">
          {currentTab === AppView.MAIN_MEETING && <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full opacity-60"></div>}
          <div className={`px-5 py-1.5 rounded-full border transition-all flex items-center justify-center mb-0.5 ${currentTab === AppView.MAIN_MEETING ? 'bg-primary/20 border-primary/40 text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-transparent border-transparent'}`}>
            <span className="material-icons text-2xl">image_search</span>
          </div>
        </div>
        <span className={`text-[10px] tracking-wider ${currentTab === AppView.MAIN_MEETING ? 'font-bold text-primary' : 'font-medium'}`}>图像回传</span>
      </button>

      {/* Tab: Settings */}
      <button 
        onClick={() => setTab(AppView.SETTINGS)}
        className={`flex flex-col items-center justify-center gap-1 w-20 h-16 group transition-all focus:outline-none active:scale-95 ${currentTab === AppView.SETTINGS ? 'text-primary' : 'text-white/50 hover:text-white'}`}
      >
        <div className="relative">
          {currentTab === AppView.SETTINGS && <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-60"></div>}
          <span className={`material-icons text-3xl transition-transform duration-500 ${currentTab === AppView.SETTINGS ? 'rotate-45 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]' : 'group-hover:rotate-12'}`}>settings</span>
        </div>
        <span className={`text-[10px] font-medium tracking-wider ${currentTab === AppView.SETTINGS ? 'font-bold' : ''}`}>设置</span>
      </button>
    </nav>
  );
};

export default BottomNav;
