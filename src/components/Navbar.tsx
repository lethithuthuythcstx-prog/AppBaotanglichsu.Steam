import React from "react";
import { 
  Bot, 
  Compass, 
  Landmark, 
  Sparkles, 
  Code2, 
  BookOpen, 
  Waves
} from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    {
      id: "mentor",
      labelVi: "Cố Vấn AI",
      labelEn: "STEAM Mentor",
      icon: Bot,
      badge: "System Instruction",
    },
    {
      id: "maritime",
      labelVi: "5 Vùng Biển",
      labelEn: "5 Maritime Zones",
      icon: Compass,
      badge: "UNCLOS & Luật Biển",
    },
    {
      id: "museum",
      labelVi: "Bảo Tàng Ảo",
      labelEn: "Virtual Rooms",
      icon: Landmark,
      badge: "Audio Guide",
    },
    {
      id: "chibi",
      labelVi: "Xưởng Chibi AI",
      labelEn: "Chibi Prompt Studio",
      icon: Sparkles,
      badge: "Prompt Art",
    },
    {
      id: "sitemap",
      labelVi: "Sơ Đồ & Code",
      labelEn: "Sitemap & HTML Code",
      icon: Code2,
      badge: "Tech Tips",
    },
    {
      id: "rubric",
      labelVi: "Sổ Tay Unit 5",
      labelEn: "Unit 5 & Rubric",
      icon: BookOpen,
      badge: "Grade 8",
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Project Title */}
          <div 
            onClick={() => setActiveTab("mentor")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-rose-600 to-indigo-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Waves className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif tracking-wider font-extrabold text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300">
                  BẢO TÀNG LỊCH SỬ TƯƠNG TÁC
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full">
                  STEAM Grade 8
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Cố vấn Giáo dục Liên môn & Giám tuyển Bảo tàng (Unit 5: Customs & Traditions)
              </p>
            </div>
          </div>

          {/* Navigation Items (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-400"}`} />
                  <span className="text-xs lg:text-sm">{item.labelVi}</span>
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-3 right-3 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation Scrollbar */}
        <div className="md:hidden flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none border-t border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-btn-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-slate-400 bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.labelVi}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
