
import React, { useState } from 'react';

interface LoginViewProps {
  onLogin: () => void;
  onAdvancedSettings: () => void;
}

const nodes = ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉', '西安'];

const LoginView: React.FC<LoginViewProps> = ({ onLogin, onAdvancedSettings }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedNode, setSelectedNode] = useState('北京');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0a101f] relative overflow-hidden font-sans">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[45%] bg-blue-600/15 rounded-[100%] blur-[100px] pointer-events-none z-0"></div>

      {/* Top Controls */}
      <div className="relative z-20 pt-14 px-6">
        <button 
          onClick={onAdvancedSettings}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-[26px]">settings</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center px-10 relative z-10">
        {/* Logo Section */}
        <div className="mt-8 mb-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 ring-1 ring-white/10 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="material-symbols-outlined text-3xl text-white">videocam</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-[4px]">账号登录</h1>
          <p className="text-[11px] text-white/40 mt-2 uppercase tracking-[2px] font-medium">Mobile Meeting App</p>
        </div>

        {/* Form Section */}
        <div className="w-full space-y-5">
          {/* Node Selection */}
          <div className="relative border-b border-white/10 pb-2 mb-4">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between text-white/80 hover:text-white transition-colors py-1"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/60 text-[22px]">hub</span>
                <span className="text-sm font-medium tracking-wide">节点选择</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40">{selectedNode}</span>
                <span className={`material-symbols-outlined text-white/40 text-lg transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}>expand_more</span>
              </div>
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a2235] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50">
                <div className="max-h-48 overflow-y-auto no-scrollbar py-1">
                  {nodes.map(node => (
                    <button
                      key={node}
                      onClick={() => { setSelectedNode(node); setShowDropdown(false); }}
                      className={`w-full text-left px-5 py-3 text-xs transition-colors flex items-center justify-between group ${selectedNode === node ? 'text-blue-400 bg-blue-500/5' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                    >
                      <span>{node}</span>
                      {selectedNode === node && <span className="material-symbols-outlined text-sm">check</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Account */}
          <div className="group bg-[#111827]/40 border border-white/5 rounded-sm overflow-hidden focus-within:border-primary/40 transition-all">
            <div className="relative flex items-center">
              <div className="pl-4 pr-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-white/40 group-focus-within:text-primary transition-colors text-[20px]">person</span>
              </div>
              <input 
                className="block w-full py-4 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none" 
                placeholder="用户账号" 
                type="text" 
              />
            </div>
          </div>

          {/* User Name */}
          <div className="group bg-[#111827]/40 border border-white/5 rounded-sm overflow-hidden focus-within:border-primary/40 transition-all">
            <div className="relative flex items-center">
              <div className="pl-4 pr-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-white/40 group-focus-within:text-primary transition-colors text-[20px]">badge</span>
              </div>
              <input 
                className="block w-full py-4 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none" 
                placeholder="用户姓名" 
                type="text" 
              />
            </div>
          </div>

          {/* User Password */}
          <div className="group bg-[#111827]/40 border border-white/5 rounded-sm overflow-hidden focus-within:border-primary/40 transition-all">
            <div className="relative flex items-center">
              <div className="pl-4 pr-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-white/40 group-focus-within:text-primary transition-colors text-[20px]">lock</span>
              </div>
              <input 
                className="block w-full pr-10 py-4 bg-transparent text-sm text-white placeholder-white/20 focus:outline-none" 
                placeholder="用户密码" 
                type={passwordVisible ? "text" : "password"} 
              />
              <button 
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-3 flex items-center text-white/30 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">{passwordVisible ? 'visibility' : 'visibility_off'}</span>
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="pt-6">
            <button 
              onClick={onLogin}
              className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_8px_20px_-5px_rgba(59,130,246,0.5)] transition-all active:scale-[0.98] text-base tracking-[2px] flex items-center justify-center space-x-2"
            >
              <span>登录</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pb-10 pt-4 text-center opacity-30 relative z-10">
        <p className="text-[10px] tracking-[1px] font-mono">v 8.18.25361 (Build:220819) Cloud-YNGA</p>
        <div className="w-24 h-1 bg-white/10 mx-auto mt-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoginView;
