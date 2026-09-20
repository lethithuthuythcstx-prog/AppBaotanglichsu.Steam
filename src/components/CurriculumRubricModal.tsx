import React, { useState } from "react";
import { 
  BookOpen, 
  CheckSquare, 
  Award, 
  Volume2, 
  VolumeX, 
  Layers,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { UNIT_5_VOCABULARY, GRAMMAR_GUIDE, STEAM_PROJECT_RUBRIC } from "../data/unit5Curriculum";

export const CurriculumRubricModal: React.FC = () => {
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const handleSpeakWord = (word: string) => {
    if (!window.speechSynthesis) return;

    if (playingWord === word) {
      window.speechSynthesis.cancel();
      setPlayingWord(null);
      return;
    }

    window.speechSynthesis.cancel();
    setPlayingWord(word);

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.onend = () => setPlayingWord(null);
    utterance.onerror = () => setPlayingWord(null);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 border border-amber-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            Chương Trình Tiếng Anh Lớp 8 & Thước Đo Đánh Giá STEAM
          </span>
          <span className="px-2 py-0.5 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full">
            Global Success • Unit 5
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
          SỔ TAY TIẾNG ANH UNIT 5 & TIÊU CHÍ ĐÁNH GIÁ DỰ ÁN
        </h1>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          Tài liệu tra cứu nhanh về từ vựng phong tục (Customs and Traditions), cấu trúc ngữ pháp Should / Must, và bộ tiêu chí chấm điểm 4 trụ cột cho giáo viên & học sinh.
        </p>
      </div>

      {/* Grid: Vocabulary & Grammar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Unit 5 Vocabulary (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Từ Vựng Cốt Lõi Unit 5: Customs and Traditions
              </h3>
              <span className="text-[10px] text-slate-400 italic">
                *Bấm vào loa để nghe phát âm chuẩn
              </span>
            </div>

            <div className="space-y-3">
              {UNIT_5_VOCABULARY.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-baseline justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-amber-300">{item.word}</span>
                      <span className="text-xs text-slate-400 font-mono">{item.pronunciation}</span>
                    </div>

                    <button
                      onClick={() => handleSpeakWord(item.word)}
                      className="p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition-colors"
                      title="Nghe phát âm"
                    >
                      {playingWord === item.word ? (
                        <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-200 mb-1">
                    <strong className="text-cyan-400">Định nghĩa:</strong> {item.meaning} ({item.definition})
                  </p>
                  <p className="text-[11px] text-slate-400 mb-0.5">
                    <span className="text-slate-500 font-semibold">Cụm thường gặp (Collocation):</span> <span className="text-amber-200/90">{item.collocation}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 italic">
                    <span className="text-slate-500 font-semibold">Ví dụ:</span> "{item.example}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grammar Guide (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Ngữ Pháp Trọng Tâm: Should vs Must
            </h3>

            {/* Should / Shouldn't */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2">
              <span className="text-xs font-bold text-cyan-300 block">
                {GRAMMAR_GUIDE.should_shouldnt.title}
              </span>
              <p className="text-xs text-slate-300">
                {GRAMMAR_GUIDE.should_shouldnt.usage}
              </p>
              <div className="p-2 rounded bg-slate-900 font-mono text-xs text-amber-300 border border-slate-800">
                {GRAMMAR_GUIDE.should_shouldnt.formula}
              </div>
              <ul className="space-y-1 text-xs text-slate-300 pt-1">
                {GRAMMAR_GUIDE.should_shouldnt.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span className="italic">"{ex}"</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Have to / Must */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-500/30 space-y-2">
              <span className="text-xs font-bold text-rose-300 block">
                {GRAMMAR_GUIDE.have_to_must.title}
              </span>
              <p className="text-xs text-slate-300">
                {GRAMMAR_GUIDE.have_to_must.usage}
              </p>
              <div className="p-2 rounded bg-slate-900 font-mono text-xs text-amber-300 border border-slate-800">
                {GRAMMAR_GUIDE.have_to_must.formula}
              </div>
              <ul className="space-y-1 text-xs text-slate-300 pt-1">
                {GRAMMAR_GUIDE.have_to_must.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-400">•</span>
                    <span className="italic">"{ex}"</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* STEAM Project Rubric (100 Points Total) */}
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white font-serif">
              THƯỚC ĐO ĐÁNH GIÁ DỰ ÁN STEAM (100 ĐIỂM)
            </h3>
          </div>
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
            Dành Cho Giáo Viên & Nhóm Học Sinh
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STEAM_PROJECT_RUBRIC.map((rubric, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-bold text-white">
                  {rubric.categoryVi}
                </span>
                <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 whitespace-nowrap">
                  {rubric.maxPoints} Điểm
                </span>
              </div>
              <p className="text-xs text-slate-400 italic">
                {rubric.categoryEn}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                {rubric.criteria}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
