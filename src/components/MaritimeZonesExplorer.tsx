import React, { useState } from "react";
import { 
  Shield, 
  Anchor, 
  Search, 
  Fish, 
  Layers, 
  Info, 
  Scale, 
  Compass, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import { VIETNAM_MARITIME_ZONES, VIETNAM_EAST_SEA_FACTS } from "../data/maritimeData";
import { MaritimeZone } from "../types";

interface MaritimeZonesExplorerProps {
  onAskMentorAboutZone?: (zoneName: string) => void;
}

export const MaritimeZonesExplorer: React.FC<MaritimeZonesExplorerProps> = ({ 
  onAskMentorAboutZone 
}) => {
  const [selectedZone, setSelectedZone] = useState<MaritimeZone>(VIETNAM_MARITIME_ZONES[0]);
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  const getIcon = (name: string) => {
    switch (name) {
      case "Anchor": return <Anchor className="w-5 h-5" />;
      case "Shield": return <Shield className="w-5 h-5" />;
      case "Search": return <Search className="w-5 h-5" />;
      case "Fish": return <Fish className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-cyan-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full flex items-center gap-1">
                <Scale className="w-3.5 h-3.5" />
                Luật Biển Việt Nam 2012 & UNCLOS 1982
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full">
                Địa lý Lớp 8
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
              5 VÙNG BIỂN VIỆT NAM & CHỦ QUYỀN BIỂN ĐẢO
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              Nội dung chuẩn học thuật bắt buộc cho dự án Bảo tàng Lịch sử Tương tác STEAM: Phân định ranh giới pháp lý, quyền chủ quyền và quyền tài phán theo Công ước Luật Biển UNCLOS 1982.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/70 p-1.5 rounded-xl border border-slate-700">
            <button
              onClick={() => setLanguage("vi")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                language === "vi" 
                  ? "bg-cyan-500 text-slate-950 shadow-md" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tiếng Việt
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                language === "en" 
                  ? "bg-cyan-500 text-slate-950 shadow-md" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Visual Cross-Section Diagram */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold text-white font-serif">
              SƠ ĐỒ MẶT CẮT TRỰC QUAN 5 VÙNG BIỂN
            </h2>
          </div>
          <span className="text-xs text-slate-400 italic">
            *Nhấp chuột vào từng vùng biển trên sơ đồ để xem chi tiết
          </span>
        </div>

        {/* Cross-section visual bar */}
        <div className="relative overflow-x-auto pb-4">
          <div className="min-w-[720px] bg-slate-950 p-4 rounded-xl border border-slate-800">
            {/* Upper airspace & surface layer */}
            <div className="flex items-end h-32 relative border-b-2 border-cyan-400/80 mb-2">
              {/* Landmass */}
              <div className="w-[12%] h-full bg-gradient-to-t from-emerald-900 to-amber-900 rounded-tl-lg flex flex-col justify-end p-2 border-r-2 border-dashed border-amber-400">
                <span className="text-[11px] font-bold text-amber-200">ĐẤT LIỀN</span>
                <span className="text-[9px] text-amber-300/80">Coastline</span>
              </div>

              {/* 1. Noi thuy */}
              <div 
                onClick={() => setSelectedZone(VIETNAM_MARITIME_ZONES[0])}
                className={`w-[13%] h-[80%] cursor-pointer transition-all p-2 flex flex-col justify-between border-r-2 border-amber-400/90 ${
                  selectedZone.id === "noi-thuy" 
                    ? "bg-blue-600/40 ring-2 ring-amber-400" 
                    : "bg-blue-900/30 hover:bg-blue-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-cyan-300">1. NỘI THỦY</span>
                  <Anchor className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-[9px] text-slate-300">Phía trong đường cơ sở</div>
              </div>

              {/* 2. Lanh hai (12 NM) */}
              <div 
                onClick={() => setSelectedZone(VIETNAM_MARITIME_ZONES[1])}
                className={`w-[15%] h-[85%] cursor-pointer transition-all p-2 flex flex-col justify-between border-r-2 border-rose-400 ${
                  selectedZone.id === "lanh-hai" 
                    ? "bg-cyan-600/40 ring-2 ring-rose-400" 
                    : "bg-cyan-900/30 hover:bg-cyan-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-teal-300">2. LÃNH HẢI</span>
                  <Shield className="w-3 h-3 text-teal-400" />
                </div>
                <div className="text-[9px] text-slate-300">12 hải lý (Biên giới quốc gia)</div>
              </div>

              {/* 3. Tiep giap lanh hai (24 NM) */}
              <div 
                onClick={() => setSelectedZone(VIETNAM_MARITIME_ZONES[2])}
                className={`w-[18%] h-[90%] cursor-pointer transition-all p-2 flex flex-col justify-between border-r-2 border-dashed border-cyan-400 ${
                  selectedZone.id === "tiep-giap-lanh-hai" 
                    ? "bg-teal-600/40 ring-2 ring-teal-400" 
                    : "bg-teal-900/30 hover:bg-teal-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-300">3. TIẾP GIÁP LÃNH HẢI</span>
                  <Search className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-[9px] text-slate-300">+12 hải lý (Kiểm soát hải quan)</div>
              </div>

              {/* 4. Dac quyen kinh te EEZ (200 NM) */}
              <div 
                onClick={() => setSelectedZone(VIETNAM_MARITIME_ZONES[3])}
                className={`w-[26%] h-[95%] cursor-pointer transition-all p-2 flex flex-col justify-between border-r-2 border-blue-400 ${
                  selectedZone.id === "dac-quyen-kinh-te" 
                    ? "bg-indigo-600/40 ring-2 ring-indigo-400" 
                    : "bg-indigo-900/30 hover:bg-indigo-800/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-indigo-300">4. ĐẶC QUYỀN KINH TẾ (EEZ)</span>
                  <Fish className="w-3 h-3 text-indigo-400" />
                </div>
                <div className="text-[9px] text-slate-300">200 hải lý (Quyền chủ quyền tài nguyên)</div>
              </div>

              {/* 5. Them luc dia */}
              <div 
                onClick={() => setSelectedZone(VIETNAM_MARITIME_ZONES[4])}
                className={`w-[16%] h-full cursor-pointer transition-all p-2 flex flex-col justify-between ${
                  selectedZone.id === "them-luc-dia" 
                    ? "bg-amber-600/40 ring-2 ring-amber-400" 
                    : "bg-amber-950/30 hover:bg-amber-900/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-300">5. THỀM LỤC ĐỊA</span>
                  <Layers className="w-3 h-3 text-amber-400" />
                </div>
                <div className="text-[9px] text-slate-300">Đáy biển 200 - 350 NM (Dầu khí)</div>
              </div>
            </div>

            {/* Submarine seabed layer */}
            <div className="h-10 bg-gradient-to-r from-amber-950 via-slate-800 to-indigo-950 rounded-b-lg flex items-center px-4 justify-between text-[11px] text-slate-400 border-t border-slate-700">
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                ▲ Đường cơ sở (Baseline)
              </span>
              <span className="text-cyan-400 font-semibold">
                12 NM (Biên giới biển)
              </span>
              <span className="text-teal-400 font-semibold">
                24 NM (Tiếp giáp)
              </span>
              <span className="text-indigo-400 font-semibold">
                200 NM (Ranh giới EEZ)
              </span>
              <span className="text-amber-400 font-semibold">
                Đến 350 NM (Rìa lục địa)
              </span>
            </div>
          </div>
        </div>

        {/* 5 Zone Selection Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
          {VIETNAM_MARITIME_ZONES.map((zone, idx) => {
            const isSelected = selectedZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className={`p-3 rounded-xl text-left border transition-all duration-200 flex items-start gap-2.5 ${
                  isSelected
                    ? "bg-slate-800 border-amber-500 shadow-md shadow-amber-500/10"
                    : "bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700"
                }`}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${zone.color} text-slate-950 font-bold`}>
                  {getIcon(zone.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase">Vùng {idx + 1}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {language === "vi" ? zone.nameVi : zone.nameEn}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Zone Deep Dive Card */}
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedZone.color} text-slate-950`}>
              {getIcon(selectedZone.iconName)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-serif">
                {language === "vi" ? selectedZone.nameVi : selectedZone.nameEn}
              </h3>
              <p className="text-xs text-amber-300 font-medium">
                Chiều rộng: {selectedZone.breadth}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (onAskMentorAboutZone) {
                  onAskMentorAboutZone(selectedZone.nameVi);
                }
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-amber-500/20"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Hỏi Cố Vấn AI về vùng này</span>
            </button>
          </div>
        </div>

        {/* Legal Basis & Sovereignty Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Scale className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {language === "vi" ? "Căn Cứ Pháp Lý & Định Nghĩa" : "Legal Basis & Definition"}
              </h4>
            </div>
            <p className="text-xs text-amber-400 font-semibold mb-1">
              {selectedZone.legalBasis}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {language === "vi" ? selectedZone.descriptionVi : selectedZone.descriptionEn}
            </p>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-rose-400 mb-2">
              <Shield className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {language === "vi" ? "Chế Độ Chủ Quyền & Quyền Tài Phán" : "Sovereignty & Jurisdiction"}
              </h4>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {language === "vi" ? selectedZone.sovereigntyLevelVi : selectedZone.sovereigntyLevelEn}
            </p>
          </div>
        </div>

        {/* Key Activities & Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Hoạt Động Trọng Tâm
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedZone.keyActivities.map((act, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Fish className="w-4 h-4" />
              Tài Nguyên Thiên Nhiên
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedZone.keyResources.map((res, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-purple-500/30">
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Liên Kết Unit 5 & Văn Hóa
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedZone.unit5Connection}
            </p>
          </div>
        </div>
      </div>

      {/* East Sea & Island Archipelagos National Overview */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white font-serif mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-rose-500" />
          TỔNG QUAN BIỂN ĐÔNG & QUẦN ĐẢO HOÀNG SA - TRƯỜNG SA
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Chiều Dài Bờ Biển</span>
            <p className="text-lg font-bold text-amber-400">{VIETNAM_EAST_SEA_FACTS.vietnamCoastline}</p>
            <span className="text-xs text-slate-400">Từ Móng Cái đến Hà Tiên</span>
          </div>

          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Hệ Thống Đảo & Quần Đảo</span>
            <p className="text-lg font-bold text-cyan-400">{VIETNAM_EAST_SEA_FACTS.islandsCount}</p>
            <span className="text-xs text-slate-400">Hoàng Sa & Trường Sa thiêng liêng</span>
          </div>

          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Tỉnh Thành Giáp Biển</span>
            <p className="text-lg font-bold text-teal-400">{VIETNAM_EAST_SEA_FACTS.coastalProvinces}</p>
            <span className="text-xs text-slate-400">Chiếm phần lớn duyên hải nước ta</span>
          </div>

          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Quy Mô Biển Đông</span>
            <p className="text-lg font-bold text-indigo-400">{VIETNAM_EAST_SEA_FACTS.area}</p>
            <span className="text-xs text-slate-400">Huyết mạch hàng hải quốc tế</span>
          </div>
        </div>
      </div>
    </div>
  );
};
