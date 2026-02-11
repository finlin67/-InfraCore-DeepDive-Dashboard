import React from 'react';
import DashboardTile from './components/DashboardTile';

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050308] grid-bg relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#8c25f4]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#22d3ee]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Centered Tile Presentation */}
      <div className="relative z-10 p-8">
        <DashboardTile />
        
        {/* External Labels for Presentation */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 text-white/20">
            <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-white/20"></div>
                <span className="text-xs font-mono uppercase tracking-widest rotate-90 origin-left translate-x-2">Live View</span>
            </div>
        </div>
      </div>
    </div>
  );
}
