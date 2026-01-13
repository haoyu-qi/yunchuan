
import React, { useState } from 'react';
import { NetworkConfig } from '../types';

interface AdvancedSettingsViewProps {
  onBack: () => void;
  config: NetworkConfig;
  setConfig: React.Dispatch<React.SetStateAction<NetworkConfig>>;
}

const AdvancedSettingsView: React.FC<AdvancedSettingsViewProps> = ({ onBack, config, setConfig }) => {
  const [isTesting, setIsTesting] = useState(false);
  const [testSuccess, setTestSuccess] = useState(false);

  const handleTest = () => {
    setIsTesting(true);
    setTestSuccess(false);
    setTimeout(() => {
      setIsTesting(false);
      setTestSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col items-center pt-24 px-8 relative bg-gradient-to-tr from-black via-slate-900 to-indigo-950">
      <button 
        onClick={onBack}
        className="absolute top-14 left-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 glass"
      >
        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
      </button>

      <div className="mb-10 text-center mt-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-4 ring-1 ring-white/20 shadow-lg shadow-blue-900/20">
          <span className="material-symbols-outlined text-3xl text-primary">tune</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-wide">高级设置</h1>
        <p className="text-sm text-gray-400 mt-2">Mobile Meeting App</p>
      </div>

      <form className="space-y-6 w-full flex-1 flex flex-col">
        <div className="group relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">dns</span>
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-3 border-b border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-colors sm:text-sm" 
            placeholder="服务器IP" 
            type="text"
            defaultValue={config.ip}
          />
        </div>

        <div className="group relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">lan</span>
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-3 border-b border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-colors sm:text-sm" 
            placeholder="网络端口" 
            type="text"
            defaultValue={config.port}
          />
        </div>

        <div className="pt-2">
          <button 
            type="button"
            onClick={handleTest}
            className={`w-full py-3 rounded-xl border transition-all active:scale-[0.98] text-sm flex items-center justify-center space-x-2 glass group ${testSuccess ? 'bg-emerald-900/40 border-emerald-500/40 text-emerald-400' : 'bg-white/5 border-white/10 text-blue-300 hover:bg-white/10'}`}
          >
            <span className={`material-symbols-outlined text-[18px] ${isTesting ? 'animate-spin' : ''}`}>
              {testSuccess ? 'check_circle' : 'network_check'}
            </span>
            <span>{isTesting ? '测试中...' : (testSuccess ? '连接成功' : '测试连接')}</span>
          </button>
        </div>

        <div className="flex-grow"></div>

        <div className="pt-4 pb-12">
          <button 
            onClick={onBack}
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] text-base tracking-wide flex items-center justify-center space-x-2 border border-blue-400/20 glass"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            <span>保存设置</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSettingsView;
