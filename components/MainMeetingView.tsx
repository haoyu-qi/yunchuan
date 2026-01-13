
import React, { useState } from 'react';
import { UserState, AppView } from '../types';
import BottomNav from './BottomNav';

interface MainMeetingViewProps {
  user: UserState;
  time: string;
  currentTab: AppView;
  setTab: (tab: AppView) => void;
  onOpenIntercom: () => void;
}

const MainMeetingView: React.FC<MainMeetingViewProps> = ({ user, time, currentTab, setTab, onOpenIntercom }) => {
  const [showIntercomOverlay, setShowIntercomOverlay] = useState(true);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      {/* Video Background Mock */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/meeting/1080/1920" 
          alt="Video feed" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* Header Overlay */}
      <header className="pt-14 px-5 flex justify-between items-start z-10 pointer-events-none">
        <div className="flex flex-col drop-shadow-lg pointer-events-auto">
          <h1 className="text-xl font-bold tracking-wide leading-tight">{user.name}</h1>
          <div className="mt-1 flex items-center">
            <span className="text-xs font-mono opacity-80 bg-white/10 px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/10">ID: {user.id}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 drop-shadow-lg">
          <div className="text-lg font-medium font-mono tracking-wide">{time}</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
            <span className="text-xs font-medium opacity-80">{user.isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </header>

      {/* Active Intercom Bubble (Mini Overlay) */}
      {showIntercomOverlay && (
        <div className="absolute top-32 left-4 right-4 z-20 pointer-events-auto">
          <div 
            onClick={onOpenIntercom}
            className="flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl ring-1 ring-white/10 active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] text-green-400 font-bold leading-tight mb-0.5">对讲中...</span>
                <span className="text-sm font-bold text-white leading-tight font-mono tracking-wide">cs0012@yj</span>
              </div>
            </div>
            
            <div className="flex items-center gap-0.5 mx-2 h-5 opacity-90">
              {[0.8, 1.2, 1, 1.4, 0.9].map((delay, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-green-500 rounded-full animate-pulse" 
                  style={{ height: `${20 + i * 5}px`, animationDelay: `${delay}s` }}
                ></div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white shadow-lg">
                <span className="material-icons text-lg">call_end</span>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-lg">
                <span className="material-icons text-xl">mic</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Primary Action Controls */}
      <div className="absolute bottom-32 left-0 w-full z-20 px-6 pointer-events-none flex items-center justify-between">
        <div className="flex-1 flex items-center justify-end pr-14">
          <button className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/60 shadow-lg active:scale-95 transition-all">
            <span className="material-icons text-white">camera_alt</span>
          </button>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10">
          <button className="w-20 h-20 rounded-full bg-red-500/90 backdrop-blur-md border border-white/20 shadow-xl active:scale-95 transition-all flex items-center justify-center">
            <span className="material-icons text-white text-4xl">mic_off</span>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-between pl-14">
          <button className="pointer-events-auto w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg active:scale-95 transition-all">
            <span className="material-icons text-white">flip_camera_ios</span>
          </button>
          <button className="pointer-events-auto w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg active:scale-95 transition-all">
            <span className="material-icons text-white">screen_rotation</span>
          </button>
        </div>
      </div>

      <BottomNav currentTab={currentTab} setTab={setTab} />
    </div>
  );
};

export default MainMeetingView;
