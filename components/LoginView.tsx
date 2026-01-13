
import React, { useState } from 'react';

interface LoginViewProps {
  onLogin: () => void;
  onAdvancedSettings: () => void;
}

const nodes = ['省厅', '德宏', '保山', '临沧', '怒江', '版纳', '普洱', '其他'];

const LoginView: React.FC<LoginViewProps> = ({ onLogin, onAdvancedSettings }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedNode, setSelectedNode] = useState('节点选择');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center pt-24 px-8 relative">
      <button 
        onClick={onAdvancedSettings}
        className="absolute top-14 left-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 glass"
      >
        <span className="material-symbols-outlined text-[24px]">settings</span>
      </button>

      {/* Decorative Orbs */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-600 rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-[80px] opacity-20 pointer-events-none"></div>

      <div className="mb-12 text-center mt-4 z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-4 ring-1 ring-white/20 shadow-lg shadow-blue-900/20">
          <span className="material-symbols-outlined text-3xl text-primary">video_camera_front</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-wide">账号登录</h1>
        <p className="text-sm text-gray-400 mt-2">Mobile Meeting App</p>
      </div>

      <div className="w-full space-y-6 z-10 flex-1">
        {/* Network Input */}
        <div className="group relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">language</span>
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-3 border-b border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-colors sm:text-sm" 
            placeholder="接入网络" 
            type="text" 
            defaultValue="互联网" 
          />
        </div>

        {/* Node Selection */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 text-[20px]">hub</span>
          </div>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className={`w-full text-left pl-10 pr-3 py-3 border-b transition-colors sm:text-sm flex justify-between items-center ${showDropdown ? 'border-primary' : 'border-white/10'}`}
          >
            <span className={selectedNode === '节点选择' ? 'text-gray-500' : 'text-white'}>{selectedNode}</span>
            <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${showDropdown ? 'rotate-180 text-primary' : 'text-gray-500'}`}>expand_more</span>
          </button>

          {showDropdown && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)}></div>
              <div className="absolute z-50 left-0 right-0 mt-2 bg-[#0f172a]/95 border border-white/5 rounded-xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden ring-1 ring-white/5">
                <div className="py-1 max-h-60 overflow-y-auto no-scrollbar">
                  {nodes.map(node => (
                    <button
                      key={node}
                      onClick={() => { setSelectedNode(node); setShowDropdown(false); }}
                      className="w-full text-left block px-4 py-3 text-sm text-gray-300 hover:bg-primary/20 hover:text-white transition-colors border-l-2 border-transparent hover:border-primary"
                    >
                      {node}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Account */}
        <div className="group relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">person</span>
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-3 border-b border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-colors sm:text-sm" 
            placeholder="用户账号" 
            type="text" 
          />
        </div>

        {/* User Name */}
        <div className="group relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">badge</span>
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-3 border-b border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-colors sm:text-sm" 
            placeholder="用户姓名" 
            type="text" 
          />
        </div>

        {/* Password */}
        <div className="group relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">lock</span>
          </div>
          <input 
            className="block w-full pl-10 pr-10 py-3 border-b border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-0 transition-colors sm:text-sm" 
            placeholder="用户密码" 
            type={passwordVisible ? "text" : "password"} 
          />
          <button 
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">{passwordVisible ? 'visibility' : 'visibility_off'}</span>
          </button>
        </div>

        <button 
          onClick={onLogin}
          className="w-full mt-8 bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] text-base tracking-wide flex items-center justify-center space-x-2 border border-blue-400/20 glass"
        >
          <span>登录</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      <div className="mt-auto py-8 text-center opacity-40">
        <p className="text-[10px] tracking-wider font-mono">v 8.18.25361 (Build:220819) Cloud-YNGA</p>
        <div className="w-32 h-1 bg-gray-700 mx-auto mt-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoginView;
