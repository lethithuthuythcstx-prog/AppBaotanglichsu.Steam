import React, { useState, useRef, useEffect } from "react";
import { 
  FileText, 
  FileCode, 
  Headphones, 
  Upload, 
  Download, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Copy, 
  Check, 
  Eye, 
  Code, 
  ArrowLeft, 
  ArrowRight,
  Music,
  Share2,
  Trash2
} from "lucide-react";
import { 
  SAMPLE_PDF_DOCUMENTS, 
  SAMPLE_HTML_DOCUMENTS, 
  SAMPLE_AUDIO_TRACKS,
  PdfDocument,
  HtmlDocument,
  AudioTrack
} from "../data/mediaResources";

export const MediaDocumentHub: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<"pdf" | "html" | "mp3">("pdf");

  // ====================== PDF SECTION STATES ======================
  const [selectedPdf, setSelectedPdf] = useState<PdfDocument>(SAMPLE_PDF_DOCUMENTS[0]);
  const [currentPdfPage, setCurrentPdfPage] = useState<number>(1);
  const [pdfZoom, setPdfZoom] = useState<number>(100);
  const [uploadedPdfUrl, setUploadedPdfUrl] = useState<string | null>(null);
  const [uploadedPdfName, setUploadedPdfName] = useState<string | null>(null);
  const [isPdfFullscreen, setIsPdfFullscreen] = useState(false);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  // ====================== HTML SECTION STATES ======================
  const [selectedHtml, setSelectedHtml] = useState<HtmlDocument>(SAMPLE_HTML_DOCUMENTS[0]);
  const [htmlViewMode, setHtmlViewMode] = useState<"preview" | "code">("preview");
  const [customHtmlCode, setCustomHtmlCode] = useState<string>("");
  const [isUsingCustomHtml, setIsUsingCustomHtml] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);

  // ====================== MP3 SECTION STATES ======================
  const [selectedAudio, setSelectedAudio] = useState<AudioTrack>(SAMPLE_AUDIO_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [uploadedAudioUrl, setUploadedAudioUrl] = useState<string | null>(null);
  const [uploadedAudioName, setUploadedAudioName] = useState<string | null>(null);
  const audioIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset audio / speech on change or unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
      }
    };
  }, []);

  // When changing track
  useEffect(() => {
    stopAudio();
    setCurrentTime(0);
  }, [selectedAudio]);

  const stopAudio = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
    }
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    // Play using speech synthesis or uploaded audio
    if (uploadedAudioUrl) {
      // If user uploaded an audio file, trigger web audio or standard play
      setIsPlaying(true);
      return;
    }

    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    setIsPlaying(true);

    const utterance = new SpeechSynthesisUtterance(selectedAudio.transcriptEn);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.volume = isMuted ? 0 : volume;

    utterance.onend = () => {
      stopAudio();
      setCurrentTime(selectedAudio.durationSeconds);
    };

    utterance.onerror = () => {
      stopAudio();
    };

    window.speechSynthesis.speak(utterance);

    // Simulate progress timer
    if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    audioIntervalRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= selectedAudio.durationSeconds) {
          stopAudio();
          return selectedAudio.durationSeconds;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handleSeek = (seconds: number) => {
    setCurrentTime(seconds);
    if (isPlaying) {
      // Restart speech from approximate position
      stopAudio();
      handleTogglePlay();
    }
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setUploadedPdfUrl(url);
      setUploadedPdfName(file.name);
    }
  };

  const handleHtmlFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setCustomHtmlCode(content);
        setIsUsingCustomHtml(true);
      };
      reader.readAsText(file);
    }
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      const url = URL.createObjectURL(file);
      setUploadedAudioUrl(url);
      setUploadedAudioName(file.name);
      stopAudio();
    }
  };

  const handleCopyHtml = () => {
    const textToCopy = isUsingCustomHtml ? customHtmlCode : selectedHtml.rawHtml;
    navigator.clipboard.writeText(textToCopy);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 text-xs font-extrabold bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 rounded-md uppercase tracking-wider shadow-sm">
                HISTO-STEAM 8
              </span>
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                Kho Tư Liệu & Đa Phương Tiện Khối 8
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full">
                PDF • HTML • MP3 Ready
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
              TRUNG TÂM TƯ LIỆU ĐA PHƯƠNG TIỆN (KHO TÀI LIỆU K8)
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Tích hợp hệ sinh thái tư liệu học tập chuẩn STEAM Lớp 8: Tra cứu và đọc tài liệu dạng file <strong className="text-rose-400">PDF</strong>, khám phá bài đọc tương tác dạng trang <strong className="text-cyan-400">HTML</strong>, và phát thuyết minh âm thanh <strong className="text-amber-400">MP3</strong> song ngữ. Hỗ trợ học sinh và giáo viên tải lên tài liệu cá nhân để sử dụng trực tiếp!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <div className="text-right hidden sm:block">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                Dành cho khối 8
              </span>
              <span className="text-xs text-slate-400">Lịch sử - Địa lý & Tiếng Anh</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold font-serif text-lg">
              8
            </div>
          </div>
        </div>

        {/* 3 Main Media Switcher Tabs */}
        <div className="mt-6 flex items-center gap-2 border-t border-slate-800 pt-4 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveMediaTab("pdf")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
              activeMediaTab === "pdf"
                ? "bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-lg shadow-rose-600/30 border border-rose-400/40"
                : "bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
            }`}
          >
            <FileText className="w-4 h-4 text-rose-300" />
            <span>1. Tài Liệu Dạng File PDF</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-rose-200">
              {SAMPLE_PDF_DOCUMENTS.length} File
            </span>
          </button>

          <button
            onClick={() => setActiveMediaTab("html")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
              activeMediaTab === "html"
                ? "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400/40"
                : "bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
            }`}
          >
            <FileCode className="w-4 h-4 text-cyan-300" />
            <span>2. Trang Tài Liệu Dạng HTML</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-cyan-200">
              Tương tác Live
            </span>
          </button>

          <button
            onClick={() => setActiveMediaTab("mp3")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
              activeMediaTab === "mp3"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30 border border-amber-300 font-extrabold"
                : "bg-slate-950/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
            }`}
          >
            <Headphones className="w-4 h-4 text-amber-400" />
            <span>3. Âm Thanh Thuyết Minh MP3</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-amber-300">
              Audio Guide A2-B1
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PDF SECTION: DOCUMENT VIEWER & UPLOADER                                */}
      {/* ========================================================================= */}
      {activeMediaTab === "pdf" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: PDF List & Upload (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    Danh Mục Tài Liệu PDF (Khối 8)
                  </h3>
                  <span className="text-[10px] text-slate-400">Đạt chuẩn K8</span>
                </div>

                <div className="space-y-2">
                  {SAMPLE_PDF_DOCUMENTS.map((pdf) => {
                    const isSelected = !uploadedPdfUrl && selectedPdf.id === pdf.id;
                    return (
                      <button
                        key={pdf.id}
                        onClick={() => {
                          setUploadedPdfUrl(null);
                          setSelectedPdf(pdf);
                          setCurrentPdfPage(1);
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? "bg-rose-500/20 border-rose-500 text-white shadow-md ring-1 ring-rose-500/50"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                            {pdf.badge}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {pdf.totalPages} trang • {pdf.fileSize}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight mb-1">
                          {pdf.titleVi}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2">
                          {pdf.descriptionVi}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upload Custom PDF Box */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Upload className="w-4 h-4" />
                  Tải Lên File PDF Cá Nhân
                </h3>
                <p className="text-xs text-slate-400">
                  Học sinh & giáo viên có thể tải lên phiếu học tập, đề cương hoặc tài liệu PDF riêng để đọc trực tiếp trên ứng dụng.
                </p>

                <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 hover:border-amber-500/60 rounded-xl p-4 cursor-pointer bg-slate-950/60 hover:bg-slate-950 transition-colors group">
                  <Upload className="w-6 h-6 text-slate-400 group-hover:text-amber-400 mb-2 transition-colors" />
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white text-center">
                    Bấm để chọn file .PDF từ máy tính
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">Hỗ trợ mọi kích cỡ file PDF</span>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfUpload}
                    className="hidden"
                  />
                </label>

                {uploadedPdfUrl && (
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-xs font-bold text-amber-300 truncate">
                        {uploadedPdfName || "File PDF của bạn"}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setUploadedPdfUrl(null);
                        setUploadedPdfName(null);
                      }}
                      className="text-slate-400 hover:text-rose-400 p-1"
                      title="Gỡ file tải lên"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: PDF In-App Interactive Viewer (8 cols) */}
            <div className="lg:col-span-8 space-y-3">
              <div 
                ref={pdfContainerRef}
                className={`bg-slate-900/95 border border-rose-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4 ${
                  isPdfFullscreen ? "fixed inset-0 z-50 rounded-none bg-slate-950 overflow-y-auto p-6" : ""
                }`}
              >
                {/* PDF Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-white truncate max-w-[280px] sm:max-w-md">
                        {uploadedPdfUrl ? (uploadedPdfName || "Tài liệu PDF tự tải lên") : selectedPdf.titleVi}
                      </h2>
                      <p className="text-[11px] text-slate-400">
                        {uploadedPdfUrl ? "Chế độ xem tài liệu cá nhân" : selectedPdf.titleEn}
                      </p>
                    </div>
                  </div>

                  {/* Controls: Zoom, Page, Download, Fullscreen */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {!uploadedPdfUrl && (
                      <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-xs">
                        <button
                          onClick={() => setCurrentPdfPage((p) => Math.max(1, p - 1))}
                          disabled={currentPdfPage <= 1}
                          className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                          title="Trang trước"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-semibold text-rose-300">
                          {currentPdfPage} / {selectedPdf.totalPages}
                        </span>
                        <button
                          onClick={() => setCurrentPdfPage((p) => Math.min(selectedPdf.totalPages, p + 1))}
                          disabled={currentPdfPage >= selectedPdf.totalPages}
                          className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                          title="Trang kế"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <div className="flex items-center gap-1 bg-slate-950 px-1.5 py-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setPdfZoom((z) => Math.max(80, z - 10))}
                        className="p-1 text-slate-400 hover:text-white"
                        title="Thu nhỏ"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] font-mono text-slate-300 px-1">{pdfZoom}%</span>
                      <button
                        onClick={() => setPdfZoom((z) => Math.min(140, z + 10))}
                        className="p-1 text-slate-400 hover:text-white"
                        title="Phóng to"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => setIsPdfFullscreen(!isPdfFullscreen)}
                      className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white"
                      title={isPdfFullscreen ? "Thu nhỏ" : "Toàn màn hình"}
                    >
                      {isPdfFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* PDF Viewer Sheet Area */}
                {uploadedPdfUrl ? (
                  <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <iframe
                      src={uploadedPdfUrl}
                      title="Uploaded PDF Document"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div 
                    className="overflow-x-auto pb-4 transition-all duration-200"
                    style={{ transform: `scale(${pdfZoom / 100})`, transformOrigin: "top center" }}
                  >
                    {/* Simulated A4 High-Quality Parchment Document */}
                    <div className="max-w-[720px] mx-auto bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-2xl text-slate-200 space-y-6 min-h-[580px] relative">
                      {/* Document Watermark */}
                      <div className="absolute top-4 right-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                        HISTO-STEAM 8 • TÀI LIỆU LƯU HÀNH NỘI BỘ K8
                      </div>

                      {/* Header of page */}
                      <div className="border-b-2 border-rose-500/40 pb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                          {selectedPdf.badge} • Trang {currentPdfPage} / {selectedPdf.totalPages}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white font-serif tracking-tight">
                          {selectedPdf.pages[currentPdfPage - 1]?.heading || selectedPdf.titleVi}
                        </h3>
                      </div>

                      {/* Content Sections */}
                      <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                        {selectedPdf.pages[currentPdfPage - 1]?.sections.map((sec, idx) => (
                          <div key={idx} className="space-y-2">
                            {sec.subheading && (
                              <h4 className="font-bold text-amber-300 text-xs sm:text-sm">
                                {sec.subheading}
                              </h4>
                            )}
                            {sec.content && (
                              <p className="text-slate-300 whitespace-pre-line leading-relaxed">
                                {sec.content}
                              </p>
                            )}
                            {sec.bulletPoints && (
                              <ul className="space-y-1.5 pl-4 list-disc text-slate-300">
                                {sec.bulletPoints.map((bp, bIdx) => (
                                  <li key={bIdx} className="leading-relaxed">
                                    {bp}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {sec.callout && (
                              <div className="p-3 rounded-lg bg-rose-950/30 border-l-4 border-rose-500 text-xs text-rose-200 font-medium">
                                💡 {sec.callout}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Page Footer */}
                      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Dự án Bảo tàng Lịch sử Tương tác • Lớp 8</span>
                        <span>Trang {currentPdfPage}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Quick Page Jumper */}
                {!uploadedPdfUrl && (
                  <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-800">
                    <span className="text-xs text-slate-400">Chọn nhanh trang:</span>
                    {Array.from({ length: selectedPdf.totalPages }, (_, i) => i + 1).map((pNum) => (
                      <button
                        key={pNum}
                        onClick={() => setCurrentPdfPage(pNum)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-colors ${
                          currentPdfPage === pNum
                            ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                            : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {pNum}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. HTML SECTION: INTERACTIVE WEB ARTICLES & LIVE SANDBOX                  */}
      {/* ========================================================================= */}
      {activeMediaTab === "html" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: HTML Catalog & Upload (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCode className="w-4 h-4" />
                    Trang Tài Liệu HTML Có Sẵn
                  </h3>
                  <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                    Interactive
                  </span>
                </div>

                <div className="space-y-2">
                  {SAMPLE_HTML_DOCUMENTS.map((doc) => {
                    const isSelected = !isUsingCustomHtml && selectedHtml.id === doc.id;
                    return (
                      <button
                        key={doc.id}
                        onClick={() => {
                          setIsUsingCustomHtml(false);
                          setSelectedHtml(doc);
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-500 text-white shadow-md ring-1 ring-cyan-500/50"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {doc.badge}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {doc.readTime}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight mb-1">
                          {doc.titleVi}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2">
                          {doc.descriptionVi}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upload or Paste Custom HTML */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Upload className="w-4 h-4" />
                  Thử Nghiệm File HTML Của Nhóm
                </h3>
                <p className="text-xs text-slate-400">
                  Tải lên file <code className="text-cyan-300">.html</code> hoặc dán trực tiếp mã nguồn để kiểm tra hiển thị bảo tàng ảo trước khi nộp sản phẩm!
                </p>

                <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 hover:border-cyan-500/60 rounded-xl p-3 cursor-pointer bg-slate-950/60 hover:bg-slate-950 transition-colors group">
                  <Upload className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 mb-1 transition-colors" />
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white text-center">
                    Tải lên file .HTML từ máy
                  </span>
                  <input
                    type="file"
                    accept=".html,.htm"
                    onChange={handleHtmlFileUpload}
                    className="hidden"
                  />
                </label>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-300 block">
                    Hoặc dán mã HTML vào đây:
                  </span>
                  <textarea
                    rows={4}
                    value={customHtmlCode}
                    onChange={(e) => {
                      setCustomHtmlCode(e.target.value);
                      setIsUsingCustomHtml(true);
                    }}
                    placeholder="<!DOCTYPE html><html><body><h1>Bảo tàng của nhóm...</h1></body></html>"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-cyan-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                  {isUsingCustomHtml && (
                    <button
                      onClick={() => {
                        setIsUsingCustomHtml(false);
                        setCustomHtmlCode("");
                      }}
                      className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1 mt-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Quay lại tài liệu mẫu</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: HTML Live View & Code Viewer (8 cols) */}
            <div className="lg:col-span-8 space-y-3">
              <div className="bg-slate-900/95 border border-cyan-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <FileCode className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-white truncate max-w-[280px] sm:max-w-md">
                        {isUsingCustomHtml ? "Trang HTML Tự Tạo Của Học Sinh" : selectedHtml.titleVi}
                      </h2>
                      <p className="text-[11px] text-slate-400">
                        {isUsingCustomHtml ? "Live HTML Sandbox" : selectedHtml.titleEn}
                      </p>
                    </div>
                  </div>

                  {/* Mode switcher: Preview vs Code */}
                  <div className="flex items-center gap-2">
                    <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setHtmlViewMode("preview")}
                        className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-colors ${
                          htmlViewMode === "preview"
                            ? "bg-cyan-500 text-slate-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Trang Xem Trực Tiếp</span>
                      </button>
                      <button
                        onClick={() => setHtmlViewMode("code")}
                        className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-colors ${
                          htmlViewMode === "code"
                            ? "bg-cyan-500 text-slate-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Code className="w-3.5 h-3.5" />
                        <span>Xem Mã Code</span>
                      </button>
                    </div>

                    <button
                      onClick={handleCopyHtml}
                      className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-300 text-xs flex items-center gap-1"
                      title="Sao chép toàn bộ HTML"
                    >
                      {copiedHtml ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* HTML Display Area */}
                {htmlViewMode === "preview" ? (
                  <div className="w-full h-[580px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
                    <iframe
                      srcDoc={isUsingCustomHtml ? customHtmlCode : selectedHtml.rawHtml}
                      title="HTML Interactive Preview"
                      sandbox="allow-scripts"
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[580px] rounded-xl overflow-auto border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-cyan-300 leading-relaxed select-all">
                    <pre>{isUsingCustomHtml ? customHtmlCode : selectedHtml.rawHtml}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MP3 SECTION: AUDIO GUIDE PLAYER & RECITATION STUDIO                    */}
      {/* ========================================================================= */}
      {activeMediaTab === "mp3" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Playlist & Audio Upload (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Headphones className="w-4 h-4" />
                    Danh Sách Audio Guide MP3 (K8)
                  </h3>
                  <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                    Chuẩn A2 - B1
                  </span>
                </div>

                <div className="space-y-2">
                  {SAMPLE_AUDIO_TRACKS.map((track) => {
                    const isSelected = !uploadedAudioUrl && selectedAudio.id === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => {
                          setUploadedAudioUrl(null);
                          setSelectedAudio(track);
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? "bg-amber-500/20 border-amber-500 text-white shadow-md ring-1 ring-amber-500/50"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {track.badge}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {track.durationLabel}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight mb-1">
                          {track.titleVi}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {track.theme}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upload Custom MP3 File */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Upload className="w-4 h-4" />
                  Tải Lên File Ghi Âm MP3 Của Nhóm
                </h3>
                <p className="text-xs text-slate-400">
                  Học sinh có thể tải file <code className="text-amber-300">.mp3</code> bản thu âm tiếng Anh của chính nhóm mình để nghe lại và chấm điểm!
                </p>

                <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 hover:border-amber-500/60 rounded-xl p-4 cursor-pointer bg-slate-950/60 hover:bg-slate-950 transition-colors group">
                  <Music className="w-6 h-6 text-slate-400 group-hover:text-amber-400 mb-2 transition-colors" />
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white text-center">
                    Bấm để chọn file .MP3 từ máy tính
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">Định dạng .mp3, .wav, .m4a</span>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleAudioUpload}
                    className="hidden"
                  />
                </label>

                {uploadedAudioUrl && (
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-bold text-cyan-300 truncate">
                        {uploadedAudioName || "Bản thu âm của bạn"}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setUploadedAudioUrl(null);
                        setUploadedAudioName(null);
                      }}
                      className="text-slate-400 hover:text-rose-400 p-1"
                      title="Gỡ file MP3"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: MP3 Player & Bilingual Script Display (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Modern Audio Player Plaque */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {uploadedAudioUrl ? "File MP3 Tải Lên" : selectedAudio.speaker}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white font-serif mt-0.5">
                      {uploadedAudioUrl ? (uploadedAudioName || "Bản ghi âm thuyết minh tự tải lên") : selectedAudio.titleVi}
                    </h2>
                    <p className="text-xs text-slate-400 italic">
                      {uploadedAudioUrl ? "Học sinh lớp 8 tự thuyết minh" : selectedAudio.titleEn}
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                    {uploadedAudioUrl ? "Bản thu cá nhân" : selectedAudio.theme}
                  </span>
                </div>

                {/* If user uploaded an audio file, render standard HTML5 audio tag */}
                {uploadedAudioUrl && (
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <audio
                      src={uploadedAudioUrl}
                      controls
                      className="w-full rounded"
                    />
                  </div>
                )}

                {/* Simulated Modern Interactive Seekbar & Controls */}
                {!uploadedAudioUrl && (
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
                    {/* Time & Seek Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-amber-400">{formatSeconds(currentTime)}</span>
                        <span className="text-slate-400">{selectedAudio.durationLabel}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={selectedAudio.durationSeconds}
                        value={currentTime}
                        onChange={(e) => handleSeek(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                      />
                    </div>

                    {/* Button Controls */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => handleSeek(0)}
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                        title="Phát lại từ đầu"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleTogglePlay}
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all shadow-lg ${
                            isPlaying
                              ? "bg-rose-500 text-white animate-pulse shadow-rose-500/30"
                              : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 shadow-amber-500/30 scale-105"
                          }`}
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                        </button>
                      </div>

                      {/* Volume */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-1.5 text-slate-400 hover:text-white"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.05}
                          value={isMuted ? 0 : volume}
                          onChange={(e) => {
                            setVolume(Number(e.target.value));
                            setIsMuted(false);
                          }}
                          className="w-16 accent-amber-500 h-1 bg-slate-800 rounded appearance-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bilingual Script & Vocabulary Box */}
                {!uploadedAudioUrl && (
                  <div className="space-y-4">
                    {/* English Transcript */}
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          Kịch Bản Thuyết Minh Tiếng Anh (English Script)
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Phát âm chuẩn Unit 5
                        </span>
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed italic bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        "{selectedAudio.transcriptEn}"
                      </p>
                    </div>

                    {/* Vietnamese Translation */}
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                        Bản Dịch Nghĩa Tiếng Việt:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedAudio.transcriptVi}
                      </p>
                    </div>

                    {/* Vocabulary Highlights */}
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                        Từ Vựng Trọng Tâm Trong Bài Nghe:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedAudio.keyVocabulary.map((v, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-300">{v.word}</span>
                            <span className="text-[11px] text-slate-400">{v.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
