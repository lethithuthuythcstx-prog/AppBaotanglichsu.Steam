import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  Compass, 
  BookOpen, 
  Palette, 
  HelpCircle,
  RotateCcw,
  MessageSquare,
  Flame,
  ArrowRight
} from "lucide-react";
import { ChatMessage } from "../types";

interface MentorChatProps {
  onExploreZone?: (zoneId: string) => void;
  onExploreChibi?: (heroName: string) => void;
}

export const MentorChat: React.FC<MentorChatProps> = ({ onExploreZone, onExploreChibi }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-msg",
      role: "model",
      content: `### 1. Direct Feedback (Phản hồi nhanh)
Xin chào các em học sinh lớp 8! Thầy/Cô là **Cố vấn Cao cấp kiêm Giám tuyển Bảo tàng (STEAM Mentor)**. Rất vui mừng được đồng hành cùng các nhóm trong dự án xây dựng **"Bảo tàng Lịch sử Tương tác"**! Dự án này kết hợp tinh hoa giữa:
* **Địa lý & Chủ quyền:** 5 vùng biển Việt Nam theo Luật Biển 2012 & UNCLOS 1982.
* **Tiếng Anh Unit 5:** Customs and Traditions (*worshipping, social etiquette, respect, should/shouldn't, have to/must*).
* **Nghệ thuật & Công nghệ:** Tạo hình nhân vật lịch sử phong cách Chibi bằng AI và lập trình bảo tàng ảo.

---

### 2. Knowledge Pillar (Trụ cột kiến thức)
* **Geography Check:** Việt Nam có bờ biển dài trên 3.260 km với 5 vùng biển thiêng liêng: *Nội thủy, Lãnh hải, Tiếp giáp lãnh hải, Đặc quyền kinh tế (EEZ) và Thềm lục địa*, cùng 2 quần đảo Hoàng Sa và Trường Sa.
* **History & Culture:** Biển Đông gắn bó máu thịt với cha ông qua hàng ngàn năm dựng nước và giữ nước.

---

### 3. English Support (Hỗ trợ Tiếng Anh - Unit 5)
* **Key Vocabulary:** *worshipping*, *ancestral custom*, *social etiquette*, *have to / must*, *should / shouldn't*.
* **Sample Script (Audio Guide):**
  > **Vietnamese Guide:** "Welcome to our Interactive Historical Museum! Before exploring, you **must** understand our sacred maritime heritage, and visitors **should** listen attentively to each story."

---

### 4. Tech/Art Tip (Mẹo Công nghệ/Nghệ thuật)
* Thầy/Cô sẽ hỗ trợ nhóm các câu lệnh (**Prompt AI**) tạo ảnh Chibi các vị anh hùng dân tộc (Trần Hưng Đạo, Bà Triệu...) và mã code HTML/CSS cho bảo tàng ảo!

---

### 5. Challenge Question (Câu hỏi gợi mở)
> *"Nhóm em đã chọn được chủ đề hoặc vị anh hùng / phong tục biển đảo nào để làm gian trưng bày đầu tiên chưa? Hãy chia sẻ ý tưởng với Thầy/Cô nhé!"*`,
      timestamp: Date.now(),
    }
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    {
      title: "Lễ hội Cầu Ngư & Vùng EEZ",
      prompt: "Nhóm em muốn làm gian trưng bày về Lễ hội Cầu Ngư và tục thờ Cá Ông gắn với vùng đặc quyền kinh tế (EEZ). Thầy/Cô hướng dẫn nhóm với ạ!",
      zone: "dac-quyen-kinh-te"
    },
    {
      title: "Trận Bạch Đằng & Trần Hưng Đạo",
      prompt: "Nhóm em muốn tạo hình Tướng quân Trần Hưng Đạo phong cách Chibi và giải thích trận địa cọc gỗ Bạch Đằng theo quy luật thủy triều. Nhờ Thầy/Cô tư vấn!",
      zone: "noi-thuy"
    },
    {
      title: "Bà Triệu & Sóng dữ Biển Đông",
      prompt: "Bà Triệu có câu nói 'cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá tràng kình ở biển Đông'. Nhóm em nên thiết kế gian triển lãm và lời thoại tiếng Anh Unit 5 thế nào?",
      zone: "lanh-hai"
    },
    {
      title: "Lễ Khao Lề Thế Lính Hoàng Sa",
      prompt: "Nhóm em muốn thuyết minh về Lễ Khao lề thế lính Hoàng Sa (Lý Sơn) và lòng dũng cảm của tiền nhân bảo vệ chủ quyền biển đảo theo UNCLOS 1982.",
      zone: "them-luc-dia"
    },
    {
      title: "Kịch bản nhập vai Du học sinh (Unit 5)",
      prompt: "Xin Thầy/Cô viết mẫu một đoạn đối thoại nhập vai giữa Du học sinh (Foreign Student) và Hướng dẫn viên Việt Nam về quy tắc ứng xử khi vào đền thờ biển (Unit 5).",
      zone: "noi-thuy"
    },
    {
      title: "Sơ đồ cây Sitemap & HTML/CSS",
      prompt: "Thầy/Cô hướng dẫn nhóm cách tổ chức sơ đồ cây (Sitemap) cho bảo tàng ảo và cung cấp đoạn code HTML/CSS tạo hiệu ứng chuyển cảnh đẹp mắt nhé!",
      zone: ""
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageContent,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageContent,
          conversationHistory: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        content: data.reply || "Xin lỗi, đã có lỗi xảy ra trong quá trình phản hồi.",
        timestamp: Date.now(),
        isFallback: data.isFallback,
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: "model",
        content: `### 1. Direct Feedback
Thầy/Cô đã nhận được câu hỏi của nhóm! Hệ thống đang chuyển sang chế độ hướng dẫn offline.

### 2. Knowledge Pillar
* Hãy đảm bảo bài làm tuân thủ **5 vùng biển Việt Nam theo Luật Biển 2012**: Nội thủy, Lãnh hải, Tiếp giáp lãnh hải, Vùng đặc quyền kinh tế EEZ, Thềm lục địa.

### 3. English Support (Unit 5)
* Nhớ sử dụng cấu trúc **should / shouldn't** để khuyên nhủ và **have to / must** cho các phong tục bắt buộc!

### 4. Tech/Art Tip
* Tạo hình Chibi cần làm nổi bật nét đặc trưng trang phục truyền thống của người Việt.

### 5. Challenge Question
> *"Em muốn tiếp tục phát triển khía cạnh nào trước: Địa lý, Tiếng Anh hay Tạo hình AI?"*`,
        timestamp: Date.now(),
        isFallback: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeakText = (text: string, msgId: string) => {
    if (!window.speechSynthesis) return;

    if (speakingId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    setSpeakingId(msgId);

    // Extract English sample script if present, or read full content
    const englishMatch = text.match(/Sample Script[^:]*:\s*([\s\S]*?)(?:###|$)/i);
    const textToRead = englishMatch ? englishMatch[1].replace(/[>*`"]/g, "") : text.replace(/[#*`>]/g, "");

    const utterance = new SpeechSynthesisUtterance(textToRead);
    // Prefer Vietnamese or English depending on extract
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to render sections with distinct styling based on the 5-pillar format
  const renderFormattedMessage = (content: string, msgId: string) => {
    // If it's a model message with markdown sections
    const sections = content.split(/(?=###\s*\d+\.|\b\d+\.\s*(?:Direct Feedback|Knowledge Pillar|English Support|Tech\/Art Tip|Challenge Question))/i);

    if (sections.length <= 1) {
      return (
        <div className="whitespace-pre-line text-sm leading-relaxed">
          {content}
        </div>
      );
    }

    return (
      <div className="space-y-4 text-sm">
        {sections.map((sec, idx) => {
          const trimmed = sec.trim();
          if (!trimmed) return null;

          const isFeedback = /Direct Feedback|Phản hồi nhanh/i.test(trimmed);
          const isKnowledge = /Knowledge Pillar|Trụ cột kiến thức/i.test(trimmed);
          const isEnglish = /English Support|Hỗ trợ Tiếng Anh/i.test(trimmed);
          const isTech = /Tech\/Art Tip|Mẹo Công nghệ/i.test(trimmed);
          const isChallenge = /Challenge Question|Câu hỏi gợi mở/i.test(trimmed);

          let badgeIcon = <Bot className="w-4 h-4 text-amber-400" />;
          let borderClass = "border-slate-700 bg-slate-900/60";
          let badgeColor = "bg-slate-800 text-slate-300";
          let title = "Thông tin";

          if (isFeedback) {
            badgeIcon = <MessageSquare className="w-4 h-4 text-emerald-400" />;
            borderClass = "border-emerald-500/30 bg-emerald-950/20";
            badgeColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
            title = "1. Direct Feedback (Phản hồi nhanh)";
          } else if (isKnowledge) {
            badgeIcon = <Compass className="w-4 h-4 text-cyan-400" />;
            borderClass = "border-cyan-500/30 bg-cyan-950/20";
            badgeColor = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
            title = "2. Knowledge Pillar (Địa lý & Lịch sử)";
          } else if (isEnglish) {
            badgeIcon = <BookOpen className="w-4 h-4 text-amber-400" />;
            borderClass = "border-amber-500/30 bg-amber-950/20";
            badgeColor = "bg-amber-500/20 text-amber-300 border-amber-500/40";
            title = "3. English Support (Unit 5: Customs & Traditions)";
          } else if (isTech) {
            badgeIcon = <Palette className="w-4 h-4 text-purple-400" />;
            borderClass = "border-purple-500/30 bg-purple-950/20";
            badgeColor = "bg-purple-500/20 text-purple-300 border-purple-500/40";
            title = "4. Tech & Chibi AI Prompt (Công nghệ & Nghệ thuật)";
          } else if (isChallenge) {
            badgeIcon = <HelpCircle className="w-4 h-4 text-rose-400" />;
            borderClass = "border-rose-500/30 bg-rose-950/20";
            badgeColor = "bg-rose-500/20 text-rose-300 border-rose-500/40";
            title = "5. Challenge Question (Thử thách tư duy Scaffolding)";
          }

          // Clean up leading header markdown
          const bodyText = trimmed.replace(/^###?\s*\d*\.?\s*.*?\n/i, "").trim();

          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${borderClass} transition-all duration-200`}
            >
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${badgeColor}`}>
                    {badgeIcon}
                    {title}
                  </span>
                </div>

                {isEnglish && (
                  <button
                    onClick={() => handleSpeakText(bodyText, `${msgId}-${idx}`)}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors"
                    title="Nghe phát âm Audio Guide"
                  >
                    {speakingId === `${msgId}-${idx}` ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                        <span>Dừng đọc</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Phát âm (Audio Guide)</span>
                      </>
                    )}
                  </button>
                )}

                {isTech && (
                  <button
                    onClick={() => handleCopy(bodyText, `${msgId}-tech`)}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 transition-colors"
                    title="Sao chép Prompt / Code"
                  >
                    {copiedId === `${msgId}-tech` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Chép Prompt / Code</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="whitespace-pre-line text-slate-200 leading-relaxed font-sans prose-invert max-w-none text-sm">
                {bodyText}
              </div>

              {isChallenge && (
                <div className="mt-3 pt-2 border-t border-rose-500/20 flex justify-end">
                  <button
                    onClick={() => {
                      setInputMessage("Nhóm em muốn trả lời câu hỏi gợi mở này: ");
                      const inputElem = document.getElementById("chat-input-field");
                      inputElem?.focus();
                    }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/40 flex items-center gap-1.5 transition-colors font-medium"
                  >
                    <span>Trả lời câu hỏi này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] max-w-6xl mx-auto px-2 sm:px-4 py-3">
      {/* Mentor Persona Card Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-amber-500/30 rounded-2xl p-4 mb-3 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-rose-500 to-indigo-600 p-0.5 shadow-md shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Bot className="w-6 h-6 text-amber-300" />
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-white font-serif tracking-wide">
                Chuyên Gia Giáo Dục Liên Môn (STEAM) & Giám Tuyển Bảo Tàng
              </h2>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                System Instruction Live
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Đồng hành hướng dẫn học sinh lớp 8: <span className="text-cyan-300 font-semibold">Luật Biển 2012 (5 Vùng Biển)</span> • <span className="text-amber-300 font-semibold">Tiếng Anh Unit 5</span> • <span className="text-purple-300 font-semibold">Tạo hình Chibi AI & Bảo tàng Ảo</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            onClick={() => {
              if (window.confirm("Bắt đầu lại cuộc hội thoại mới với Cố vấn STEAM?")) {
                setMessages([messages[0]]);
              }
            }}
            className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
            title="Làm mới cuộc trò chuyện"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Làm mới hội thoại</span>
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
        {messages.map((msg) => {
          const isUser = msg.role === "user";
          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
            >
              {!isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-rose-600 flex items-center justify-center shadow-md">
                  <Bot className="w-4 h-4 text-slate-950 font-bold" />
                </div>
              )}

              <div
                className={`max-w-[92%] sm:max-w-[85%] rounded-2xl p-4 shadow-lg ${
                  isUser
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-br-none border border-amber-400/40"
                    : "bg-slate-800/90 text-slate-100 rounded-tl-none border border-slate-700/80 backdrop-blur-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold opacity-75">
                    {isUser ? "Nhóm Học Sinh Lớp 8" : "Cố Vấn Giám Tuyển STEAM"}
                  </span>
                  <span className="text-[10px] opacity-60">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>

                {isUser ? (
                  <p className="text-sm whitespace-pre-line leading-relaxed font-medium">
                    {msg.content}
                  </p>
                ) : (
                  renderFormattedMessage(msg.content, msg.id)
                )}
              </div>

              {isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-700 flex items-center justify-center border border-slate-600">
                  <User className="w-4 h-4 text-amber-300" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 justify-start items-center">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-rose-600 flex items-center justify-center animate-pulse">
              <Bot className="w-4 h-4 text-slate-950" />
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-2 text-sm text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="italic">Giám tuyển AI đang phân tích theo 5 trụ cột chuẩn mực...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="mt-2 pt-2 border-t border-slate-800">
        <div className="flex items-center gap-1.5 mb-1.5 text-xs text-slate-400 font-medium">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>Gợi ý câu hỏi nhanh theo kịch bản dự án:</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {quickPrompts.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(item.prompt)}
              className="flex-shrink-0 px-2.5 py-1 text-xs rounded-full bg-slate-800 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/40 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Message Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="mt-2 flex items-center gap-2"
      >
        <div className="relative flex-1">
          <textarea
            id="chat-input-field"
            rows={1}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Hỏi Cố vấn STEAM về 5 vùng biển, kịch bản Audio Guide Unit 5, hoặc tạo hình Chibi AI..."
            className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none pr-12 shadow-inner"
          />
        </div>

        <button
          type="submit"
          disabled={!inputMessage.trim() || isLoading}
          className="h-11 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-amber-500/20"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Gửi</span>
        </button>
      </form>
    </div>
  );
};
