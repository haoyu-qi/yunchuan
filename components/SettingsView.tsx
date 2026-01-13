
import React from 'react';
import { UserState, NetworkConfig, AppView } from '../types';
import BottomNav from './BottomNav';

interface SettingsViewProps {
  onBack: () => void;
  onLogout: () => void;
  user: UserState;
  network: NetworkConfig;
  setNetwork: React.Dispatch<React.SetStateAction<NetworkConfig>>;
  currentTab: AppView;
  setTab: (tab: AppView) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ onLogout, network, setNetwork, currentTab, setTab }) => {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-bg overflow-hidden relative">
      <header className="pt-14 pb-4 px-5 flex justify-center items-center z-10 glass border-b border-white/5">
        <h1 className="text-lg font-bold tracking-wide text-white">设置</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-5 py-6 space-y-6 no-scrollbar">
        {/* Network Protocol Optimization Card */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-primary uppercase tracking-wider ml-1 flex items-center gap-2">
            <span className="material-icons text-sm">dns</span> 网络设置
          </h2>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg glass">
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold text-white">传输协议优化</span>
                  <span className="text-xs text-white/50">选择最适合当前网络的协议</span>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 transition-all border border-primary/20 text-primary">
                    <span className="material-icons text-sm animate-spin-slow">sync</span>
                    <span className="text-xs font-bold">重新检测</span>
                  </button>
                  <div className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
                    <span className="text-xs font-mono text-green-400">延迟: {network.latency}ms</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-black/40 p-1.5 rounded-xl border border-white/5">
                <button 
                  onClick={() => setNetwork(prev => ({ ...prev, protocol: 'TCP' }))}
                  className={`relative py-3 rounded-lg text-sm font-medium transition-all ${network.protocol === 'TCP' ? 'bg-white/15 text-white shadow-lg ring-1 ring-white/10' : 'text-white/40 hover:text-white/70'}`}
                >
                  TCP (稳定)
                </button>
                <button 
                  onClick={() => setNetwork(prev => ({ ...prev, protocol: 'UDP' }))}
                  className={`relative py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${network.protocol === 'UDP' ? 'bg-white/15 text-white shadow-lg ring-1 ring-white/10' : 'text-white/40 hover:text-white/70'}`}
                >
                  UDP (极速)
                  {network.protocol === 'UDP' && (
                    <div className="absolute -top-3 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg flex items-center gap-0.5 z-20 animate-bounce">
                      <span className="material-icons text-[10px]">thumb_up</span>
                      <span className="font-bold">推荐</span>
                    </div>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-white/50 leading-relaxed bg-green-500/5 p-3 rounded-lg border-l-2 border-green-500/50">
                <span className="text-green-400 font-bold block mb-0.5">检测完成</span>
                当前网络延迟仅为 {network.latency}ms，系统已自动推荐 {network.protocol} 协议以确保视频会议零卡顿。
              </div>
            </div>
          </div>
        </section>

        {/* Generic Settings List */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-white/40 uppercase tracking-wider ml-1 flex items-center gap-2">
            <span className="material-icons text-sm">tune</span> 更多设置
          </h2>
          <div className="bg-white/5 rounded-2xl border border-white/5 glass divide-y divide-white/5">
            <button className="w-full p-4 flex items-center justify-between group">
              <span className="text-sm font-medium text-white/90">视频画质</span>
              <div className="flex items-center gap-2 text-white/50 group-hover:text-white/70 transition-colors">
                <span className="text-xs">超清 1080P</span>
                <span className="material-icons text-base">chevron_right</span>
              </div>
            </button>
            <button className="w-full p-4 flex items-center justify-between group">
              <span className="text-sm font-medium text-white/90">智能降噪</span>
              <div className="flex items-center gap-2 text-white/50 group-hover:text-white/70 transition-colors">
                <span className="text-xs">AI 增强 (开)</span>
                <span className="material-icons text-base">chevron_right</span>
              </div>
            </button>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm font-medium text-white/90">PPT按键</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
              </label>
            </div>
          </div>
        </section>

        <section className="pt-4 pb-10 flex flex-col items-center gap-6">
          <button 
            onClick={onLogout}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-900/80 to-red-800/80 border border-red-500/20 shadow-lg text-red-100 font-medium tracking-wide active:scale-[0.98] transition-all hover:bg-red-800/90"
          >
            退出登录
          </button>
          <span className="text-[10px] text-white/30 font-mono tracking-wider">v 8.18.25361 (Build:220819)</span>
        </section>
      </main>

      <BottomNav currentTab={currentTab} setTab={setTab} />
    </div>
  );
};

export default SettingsView;
