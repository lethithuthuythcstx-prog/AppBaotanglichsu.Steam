import React, { useState } from "react";
import { 
  Code2, 
  Copy, 
  Check, 
  FolderTree, 
  FileCode, 
  Sparkles, 
  ExternalLink,
  Laptop,
  CheckCircle
} from "lucide-react";

export const SitemapCodeBuilder: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<"all" | "html" | "css" | "js">("all");
  const [isCopied, setIsCopied] = useState(false);

  const sitemapNodes = [
    {
      title: "🏠 Sảnh Đón Tiếp Chính (Virtual Museum Lobby)",
      desc: "Giới thiệu tổng quan, quy tắc tham quan (Unit 5: Social Etiquette), và chọn ngôn ngữ (Song ngữ EN/VI).",
      children: [
        {
          title: "🌊 Gian 1: 5 Vùng Biển & Chủ Quyền Biển Đảo",
          desc: "Bản đồ tương tác UNCLOS 1982 & Luật Biển 2012 (Nội thủy, Lãnh hải, Tiếp giáp, EEZ, Thềm lục địa, Hoàng Sa & Trường Sa)."
        },
        {
          title: "⚔️ Gian 2: Hào Khí Đông A (Bạch Đằng Giang)",
          desc: "Tượng Chibi Trần Hưng Đạo, sa bàn thủy triều Vịnh Bắc Bộ, mô hình cọc gỗ lim bịt sắt."
        },
        {
          title: "🐘 Gian 3: Nữ Tướng Nam Bang (Bà Triệu & Hai Bà Trưng)",
          desc: "Hình tượng Bà Triệu cưỡi sóng dữ Biển Đông, tín ngưỡng thờ Nữ thần Biển & Mẫu Thoải."
        },
        {
          title: "🐟 Gian 4: Tín Ngưỡng & Phong Tục Biển (Lễ Hội Cầu Ngư)",
          desc: "Lễ tế Cá Ông, Lễ khao lề thế lính Hoàng Sa, kịch bản Audio Guide Du học sinh & Hướng dẫn viên."
        },
        {
          title: "🎯 Phòng Trải Nghiệm & Thử Thách Câu Hỏi (Challenge Hub)",
          desc: "Trắc nghiệm kiến thức địa lý biển đảo và luyện tập ngữ pháp should/must tiếng Anh lớp 8."
        }
      ]
    }
  ];

  const completeHtmlTemplate = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bảo Tàng Lịch Sử Tương Tác - STEAM Grade 8</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --accent-gold: #f59e0b;
      --accent-blue: #06b6d4;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }
    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      margin: 0;
      padding: 20px;
    }
    header {
      text-align: center;
      padding: 30px 10px;
      border-bottom: 2px solid rgba(245, 158, 11, 0.3);
    }
    h1 { color: var(--accent-gold); margin: 0 0 10px 0; }
    p.subtitle { color: var(--text-muted); font-size: 14px; margin: 0; }

    /* Exhibition Hall Grid */
    .museum-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      max-width: 1100px;
      margin: 40px auto;
    }
    .exhibit-card {
      background: var(--card-bg);
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #334155;
      /* Hiệu ứng chuyển cảnh mượt mà */
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }
    .exhibit-card:hover {
      transform: translateY(-8px) scale(1.02);
      border-color: var(--accent-gold);
      box-shadow: 0 12px 24px -10px rgba(245, 158, 11, 0.3);
    }
    .badge {
      display: inline-block;
      font-size: 11px;
      font-weight: bold;
      color: var(--accent-blue);
      background: rgba(6, 182, 212, 0.15);
      padding: 4px 10px;
      border-radius: 9999px;
      margin-bottom: 10px;
    }
    .audio-btn {
      background: var(--accent-gold);
      color: #0f172a;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 15px;
      transition: opacity 0.2s;
    }
    .audio-btn:hover { opacity: 0.85; }
  </style>
</head>
<body>
  <header>
    <h1>BẢO TÀNG LỊCH SỬ TƯƠNG TÁC</h1>
    <p class="subtitle">Dự án STEAM Lớp 8 • 5 Vùng Biển Việt Nam & Tiếng Anh Unit 5 (Customs and Traditions)</p>
  </header>

  <main class="museum-grid">
    <!-- Hiện vật 1: Lễ hội Cầu Ngư -->
    <div class="exhibit-card" onclick="playAudio('cau-ngu')">
      <span class="badge">EEZ Zone • 200 Hải Lý</span>
      <h3>Lễ Hội Cầu Ngư & Tục Thờ Cá Ông</h3>
      <p style="color: var(--text-muted); font-size: 13px;">
        Tín ngưỡng bám biển thiêng liêng tri ân Thần Cá Voi của ngư dân duyên hải Việt Nam.
      </p>
      <button class="audio-btn">▶ Nghe Audio Guide (EN)</button>
    </div>

    <!-- Hiện vật 2: Đại thắng Bạch Đằng -->
    <div class="exhibit-card" onclick="playAudio('bach-dang')">
      <span class="badge">Nội Thủy • Sông Bạch Đằng</span>
      <h3>Tướng Quân Trần Hưng Đạo</h3>
      <p style="color: var(--text-muted); font-size: 13px;">
        Nghệ thuật quân sự lợi dụng hiện tượng bán nhật triều và cọc gỗ lim bịt sắt đánh tan quân Nguyên Mông 1288.
      </p>
      <button class="audio-btn">▶ Nghe Audio Guide (EN)</button>
    </div>
  </main>

  <script>
    function playAudio(topic) {
      let script = "";
      if (topic === 'cau-ngu') {
        script = "Welcome to the Whale Worship Pavilion! In Vietnam, fishermen have an ancient custom of worshipping the Whale God. Visitors should speak respectfully and shouldn't touch the sacred relics.";
      } else {
        script = "Supreme Commander Tran Hung Dao defeated invaders using the tidal flow of Bach Dang river. Visitors must show deep reverence when visiting this memorial.";
      }
      
      // Sử dụng Web Speech API có sẵn trên mọi trình duyệt
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(script);
        utterance.lang = 'en-US';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
      } else {
        alert("Audio: " + script);
      }
    }
  </script>
</body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(completeHtmlTemplate);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border border-cyan-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5" />
            Công Nghệ & Lập Trình (Mục 3.3 System Instruction)
          </span>
          <span className="px-2 py-0.5 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full">
            HTML/CSS/JS Ready
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
          SƠ ĐỒ CÂY (SITEMAP) & BỘ MÃ CODE BẢO TÀNG ẢO
        </h1>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          Cung cấp cấu trúc phân nhánh cây thư mục (Sitemap) chuẩn mực của bảo tàng ảo và đoạn mã nguồn hoàn chỉnh (HTML/CSS hiệu ứng chuyển cảnh + JS Audio Guide) để học sinh lớp 8 chạy ngay hoặc nộp bài dự thi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Tree Diagram (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <FolderTree className="w-4 h-4" />
              Sơ Đồ Cây Không Gian Bảo Tàng Ảo (Sitemap)
            </h3>

            <div className="space-y-4">
              {sitemapNodes.map((root, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40">
                    <span className="text-sm font-bold text-amber-300 block mb-1">
                      {root.title}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {root.desc}
                    </p>
                  </div>

                  {/* Branches */}
                  <div className="ml-4 pl-4 border-l-2 border-dashed border-slate-700 space-y-2">
                    {root.children.map((child, cIdx) => (
                      <div key={cIdx} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                        <span className="text-xs font-bold text-cyan-300 block mb-0.5">
                          {child.title}
                        </span>
                        <p className="text-[11px] text-slate-400">
                          {child.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Note */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
            <span className="font-bold text-cyan-400 flex items-center gap-1">
              <Laptop className="w-4 h-4" />
              Cách Chạy Code Mẫu Này:
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              1. Bấm nút <strong>"Sao Chép Mã Nguồn HTML"</strong> bên cạnh.
              <br />
              2. Mở Notepad (hoặc VS Code), dán toàn bộ mã vào và lưu với tên: <code className="text-amber-300">index.html</code>.
              <br />
              3. Nhấp đúp chuột để mở trực tiếp trong trình duyệt Chrome / Edge là có ngay một bảo tàng ảo tương tác âm thanh!
            </p>
          </div>
        </div>

        {/* Right Column: Code Viewer with Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900/95 border border-cyan-500/30 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Mã Nguồn Mẫu (HTML5 + CSS Transitions + JS Audio)
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="py-1.5 px-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Đã sao chép Code!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao Chép Mã Nguồn HTML</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Box */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-h-[500px] overflow-y-auto leading-relaxed select-all">
              <pre>{completeHtmlTemplate}</pre>
            </div>

            {/* Key Technical Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-0.5">CSS Grid & Flex</span>
                <span className="text-[11px] text-slate-400">Tự động thích ứng đa màn hình (Responsive design)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-cyan-400 font-bold block mb-0.5">Cubic-Bezier</span>
                <span className="text-[11px] text-slate-400">Hiệu ứng thẻ bay nhẹ 3D khi rê chuột (Hover transition)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-purple-400 font-bold block mb-0.5">Web Speech API</span>
                <span className="text-[11px] text-slate-400">Phát âm Audio Guide tự nhiên không cần cài thêm thư viện</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
