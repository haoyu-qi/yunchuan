
import React, { useState, useEffect } from 'react';
import { AppView, UserState, NetworkConfig } from './types';
import LoginView from './components/LoginView';
import MainMeetingView from './components/MainMeetingView';
import StandbyMapView from './components/StandbyMapView';
import SettingsView from './components/SettingsView';
import IntercomView from './components/IntercomView';
import AdvancedSettingsView from './components/AdvancedSettingsView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LOGIN);
  const [user, setUser] = useState<UserState>({
    id: '8821-XJ',
    name: '齐浩宇',
    isOnline: true,
    lastUpdate: '13:36'
  });

  const [network, setNetwork] = useState<NetworkConfig>({
    protocol: 'UDP',
    latency: 45,
    ip: '192.168.1.100',
    port: '8080',
    node: '省厅'
  });

  // Simple clock for status bar simulation
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case AppView.LOGIN:
        return <LoginView onLogin={() => setCurrentView(AppView.MAIN_MEETING)} onAdvancedSettings={() => setCurrentView(AppView.ADVANCED_SETTINGS)} />;
      case AppView.ADVANCED_SETTINGS:
        return <AdvancedSettingsView onBack={() => setCurrentView(AppView.LOGIN)} config={network} setConfig={setNetwork} />;
      case AppView.MAIN_MEETING:
        return <MainMeetingView user={user} time={time} currentTab={currentView} setTab={setCurrentView} onOpenIntercom={() => setCurrentView(AppView.INTERCOM)} />;
      case AppView.STANDBY_MAP:
        return <StandbyMapView user={user} time={time} currentTab={currentView} setTab={setCurrentView} />;
      case AppView.SETTINGS:
        return <SettingsView onBack={() => setCurrentView(AppView.MAIN_MEETING)} onLogout={() => setCurrentView(AppView.LOGIN)} user={user} currentTab={currentView} setTab={setCurrentView} network={network} setNetwork={setNetwork} />;
      case AppView.INTERCOM:
        return <IntercomView onBack={() => setCurrentView(AppView.MAIN_MEETING)} user={user} />;
      default:
        return <LoginView onLogin={() => setCurrentView(AppView.MAIN_MEETING)} onAdvancedSettings={() => setCurrentView(AppView.ADVANCED_SETTINGS)} />;
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden select-none">
      {/* Universal Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black pointer-events-none"></div>
      
      {/* View Container */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {renderView()}
      </div>

      {/* Persistent Status Bar Mock (iOS style) */}
      {currentView !== AppView.INTERCOM && (
        <div className="absolute top-0 left-0 w-full px-6 pt-4 pb-2 flex justify-between items-center text-sm font-medium z-50 text-white/90 pointer-events-none">
          <div className="flex items-center space-x-1">
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[18px]">signal_cellular_alt</span>
            <span className="text-xs">5G</span>
            <span className="material-symbols-outlined text-[18px] rotate-90">battery_full</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
