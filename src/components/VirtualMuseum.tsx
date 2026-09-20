import React, { useState, useEffect } from "react";
import { 
  Landmark, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Copy, 
  Check, 
  BookOpen, 
  Users, 
  Atom, 
  Cpu, 
  Hammer, 
  Palette, 
  Calculator,
  Compass,
  ArrowRight
} from "lucide-react";
import { MUSEUM_ROOMS } from "../data/museumExhibits";
import { ExhibitItem, ExhibitRoom } from "../types";

interface VirtualMuseumProps {
  onSelectPromptForStudio?: (prompt: string, characterName: string) => void;
  onAskMentorAboutExhibit?: (exhibitTitle: string) => void;
}

export const VirtualMuseum: React.FC<VirtualMuseumProps> = ({ 
  onSelectPromptForStudio,
  onAskMentorAboutExhibit 
}) => {
  const [selectedRoom, setSelectedRoom] = useState<ExhibitRoom>(MUSEUM_ROOMS[0]);
  const [selectedExhibit, setSelectedExhibit] = useState<ExhibitItem>(MUSEUM_ROOMS[0].items[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  useEffect(() => {
    // When room changes, pick first exhibit
    if (selectedRoom.items.length > 0) {
      setSelectedExhibit(selectedRoom.items[0]);
    }
  }, [selectedRoom]);

  // Clean up audio on unmount or item change
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedExhibit]);

  const handleToggleAudioGuide = (script: string) => {
    if (!window.speechSynthesis) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    setIsPlayingAudio(true);

    const utterance = new SpeechSynthesisUtterance(script);
    utterance.rate = 0.92; // Clear A2-B1 instructional pace
    utterance.lang = "en-US";
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleCopyPrompt = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full flex items-center gap-1">
              <Landmark className="w-3.5 h-3.5" />
              Mô Phỏng Gian Trưng Bày Ảo
            </span>
            <span className="px-2 py-0.5 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full">
              Audio Guide A2 - B1
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
            KHÔNG GIAN TRIỂN LÃM BẢO TÀNG LỊCH SỬ TƯƠNG TÁC
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Khám phá 4 gian phòng trưng bày chuyên đề, kết hợp hiện vật Chibi 3D, kịch bản Audio Guide nhập vai và tích hợp chương trình Tiếng Anh lớp 8 Unit 5.
          </p>
        </div>
      </div>

      {/* 4 Exhibition Rooms Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {MUSEUM_ROOMS.map((room) => {
          const isSelected = selectedRoom.id === room.id;
          return (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden ${
                isSelected
                  ? "bg-slate-800 border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50"
                  : "bg-slate-900/70 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {room.items.length} Hiện vật
                </span>
                <Landmark className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-slate-500"}`} />
              </div>
              <h3 className="text-sm font-bold text-white leading-snug mb-1 font-serif">
                {room.nameVi}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">
                {room.theme}
              </p>

              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-rose-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Exhibition Hall Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Room Items Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Hiện Vật Trong Gian Trưng Bày
            </h3>

            <div className="space-y-2">
              {selectedRoom.items.map((item) => {
                const isItemActive = selectedExhibit.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedExhibit(item)}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      isItemActive
                        ? "bg-amber-500/20 border-amber-500/50 text-white shadow-md"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-semibold text-cyan-300">
                        {item.era}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                        Chibi AI
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-tight mb-1">
                      {item.titleVi}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {item.shortDescVi}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Mentor Consult Callout */}
          <div className="bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-indigo-500/30 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Tư Vấn Giám Tuyển STEAM
            </h4>
            <p className="text-xs text-slate-300 mb-3">
              Cần chỉnh sửa kịch bản Audio Guide hoặc tạo thêm câu lệnh Prompt Chibi riêng cho nhóm?
            </p>
            <button
              onClick={() => {
                if (onAskMentorAboutExhibit) {
                  onAskMentorAboutExhibit(selectedExhibit.titleVi);
                }
              }}
              className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-indigo-600/20"
            >
              <span>Hỏi Cố Vấn về hiện vật này</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Exhibit Detail & Audio Guide Player (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Exhibit Plaque */}
          <div className="bg-slate-900/95 border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Hiện vật: {selectedExhibit.historicalFigureOrTopic}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-serif mt-0.5">
                  {selectedExhibit.titleVi}
                </h2>
                <p className="text-xs text-slate-400 italic">
                  {selectedExhibit.titleEn}
                </p>
              </div>

              {/* Audio Guide Play Button */}
              <button
                onClick={() => handleToggleAudioGuide(selectedExhibit.audioGuideScript)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-lg ${
                  isPlayingAudio
                    ? "bg-rose-500 text-white animate-pulse shadow-rose-500/30"
                    : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20"
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Dừng Audio Guide</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>Nghe Audio Guide (A2-B1)</span>
                  </>
                )}
              </button>
            </div>

            {/* Audio Guide Script Card */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 uppercase">
                  <Volume2 className="w-4 h-4" />
                  Kịch bản Audio Guide (Thuyết Minh Tiếng Anh - Unit 5)
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  Chuẩn A2 - B1
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed italic bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                "{selectedExhibit.audioGuideScript}"
              </p>
            </div>

            {/* Roleplay Dialogue (Foreign Student vs Vietnamese Guide) */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Kịch Bản Nhập Vai: Du Học Sinh & Hướng Dẫn Viên Việt Nam
                </h4>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="font-bold text-amber-300 block mb-1">
                    Du học sinh (Foreign Student):
                  </span>
                  <p className="text-slate-200">
                    "{selectedExhibit.dialogueGuide.foreignStudent}"
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                  <span className="font-bold text-emerald-400 block mb-1">
                    Hướng dẫn viên Việt Nam (Vietnamese Guide):
                  </span>
                  <p className="text-slate-200">
                    "{selectedExhibit.dialogueGuide.vietnameseGuide}"
                  </p>
                </div>
              </div>
            </div>

            {/* Chibi AI Art Prompt Box */}
            <div className="bg-gradient-to-r from-purple-950/40 via-slate-950 to-slate-950 p-4 rounded-xl border border-purple-500/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    Tạo Hình Chibi AI: {selectedExhibit.chibiCharacterName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyPrompt(selectedExhibit.chibiPrompt, selectedExhibit.id)}
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-500/40 transition-colors"
                  >
                    {copiedPromptId === selectedExhibit.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Chép Prompt</span>
                      </>
                    )}
                  </button>

                  {onSelectPromptForStudio && (
                    <button
                      onClick={() => onSelectPromptForStudio(selectedExhibit.chibiPrompt, selectedExhibit.chibiCharacterName)}
                      className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors"
                    >
                      Mở trong Xưởng Chibi
                    </button>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-300">
                {selectedExhibit.chibiDescription}
              </p>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 break-all select-all">
                {selectedExhibit.chibiPrompt}
              </div>
            </div>

            {/* Unit 5 English Vocabulary & Grammar Highlights */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Trụ Cột Tiếng Anh Unit 5: Customs and Traditions
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedExhibit.vocabulary.map((v, i) => (
                  <div key={i} className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="font-bold text-xs text-amber-300">{v.word}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{v.phonetic}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mb-1">
                      <span className="text-cyan-400 font-medium">({v.type})</span> {v.meaningVi}
                    </p>
                    <p className="text-[10px] text-slate-400 italic">
                      "{v.example}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-semibold text-cyan-400 block mb-1">
                  Ngữ pháp trọng tâm (Grammar Focus):
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedExhibit.unit5GrammarFocus.map((g, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 text-cyan-200">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* STEAM 5 Pillars Breakdown for Students */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Atom className="w-4 h-4 text-teal-400" />
                <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Góc Nhìn Giáo Dục Liên Môn (STEAM Analysis)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="font-bold text-cyan-400 block mb-1 flex items-center gap-1">
                    <Atom className="w-3.5 h-3.5" /> S - Science
                  </span>
                  <p className="text-slate-300 text-[11px]">{selectedExhibit.steamAspects.science}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="font-bold text-purple-400 block mb-1 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> T - Tech
                  </span>
                  <p className="text-slate-300 text-[11px]">{selectedExhibit.steamAspects.technology}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="font-bold text-amber-400 block mb-1 flex items-center gap-1">
                    <Hammer className="w-3.5 h-3.5" /> E - Eng.
                  </span>
                  <p className="text-slate-300 text-[11px]">{selectedExhibit.steamAspects.engineering}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="font-bold text-rose-400 block mb-1 flex items-center gap-1">
                    <Palette className="w-3.5 h-3.5" /> A - Art
                  </span>
                  <p className="text-slate-300 text-[11px]">{selectedExhibit.steamAspects.art}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="font-bold text-emerald-400 block mb-1 flex items-center gap-1">
                    <Calculator className="w-3.5 h-3.5" /> M - Math
                  </span>
                  <p className="text-slate-300 text-[11px]">{selectedExhibit.steamAspects.math}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
