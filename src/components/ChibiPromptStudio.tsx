import React, { useState } from "react";
import { 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw, 
  Palette, 
  User, 
  Layers, 
  Eye, 
  Wand2,
  Info
} from "lucide-react";

interface ChibiPromptStudioProps {
  initialPrompt?: string;
  initialName?: string;
}

export const ChibiPromptStudio: React.FC<ChibiPromptStudioProps> = ({
  initialPrompt,
  initialName
}) => {
  const characters = [
    {
      name: "Trần Hưng Đạo",
      role: "Tướng quân Hưng Đạo Đại Vương",
      era: "13th Century (Tran Dynasty)",
      costume: "Royal Commander Golden Dragon armor with silver shoulder pauldrons, flowing crimson cape",
      accessory: "Ancient Vietnamese carved sword and battle scroll with 'Sat That' motto",
      background: "Bach Dang river with low tide wooden stakes under heroic sunset sky",
      expression: "Heroic, confident, inspiring smile with courageous eyes"
    },
    {
      name: "Bà Triệu (Triệu Thị Trinh)",
      role: "Nữ tướng cưỡi sóng dữ",
      era: "3rd Century",
      costume: "Vibrant yellow silk battle tunic with floating warrior sash, golden battle headband",
      accessory: "Twin curved broadswords, riding a miniature cute white battle elephant with golden harness",
      background: "Roaring ocean waves of the East Sea and ancient stone fortress in background",
      expression: "Fierce yet charming, resolute leadership expression"
    },
    {
      name: "Hai Bà Trưng",
      role: "Trưng Trắc & Trưng Nhị",
      era: "1st Century",
      costume: "Traditional Lac Viet woven silk royal battle armor with Dong Son bronze ornaments",
      accessory: "Bronze war trumpet and imperial banner, paired war elephants",
      background: "Me Linh riverbank with majestic Dong Son bronze drum patterns in glowing aura",
      expression: "Noble, determined, united sisterly courage"
    },
    {
      name: "Ngô Quyền",
      role: "Tiền Ngô Vương - Người mở đầu nền độc lập",
      era: "10th Century (938 AD)",
      costume: "Ancient battle robe with bronze chest plate and leather armor boots",
      accessory: "Commander war bow and pointing at the river tide",
      background: "Historic Bach Dang estuary during the tidal battle of 938",
      expression: "Visionary, wise, steadfast commander"
    },
    {
      name: "Ngư Dân Lễ Hội Cầu Ngư",
      role: "Ngư dân miền biển truyền thống",
      era: "Traditional Coastal Folk",
      costume: "Traditional indigo-dyed brown ao ba ba, bamboo conical hat resting on shoulder",
      accessory: "Miniature woven bamboo fishing boat and a friendly baby whale jumping from waves",
      background: "Seaside whale temple (Lang Ong) decorated with red and yellow festival flags",
      expression: "Warm, benevolent, sun-kissed elderly smile"
    },
    {
      name: "Chiến Binh Hải Đội Hoàng Sa",
      role: "Lính hải đội triều Nguyễn đo đạc biển đảo",
      era: "18th Century (Nguyen Dynasty)",
      costume: "Traditional red-trimmed soldier uniform, crimson conical hat with bronze emblem",
      accessory: "Wooden landmark boundary marker tablet inscribed with Chinese characters and compass",
      background: "Tropical island coral reef and historic five-plank sailing canoe",
      expression: "Brave, vigilant, proud patriotism"
    },
    {
      name: "Học Sinh Giám Tuyển Lớp 8",
      role: "Học sinh thuyết minh viên bảo tàng",
      era: "Modern 8th-Grade Student",
      costume: "Neat navy and white school uniform with red neckerchief and lotus pin",
      accessory: "Interactive museum tablet showing a 3D sitemap and headphones around neck",
      background: "High-tech interactive museum hall with illuminated display cases",
      expression: "Friendly, enthusiastic, hospitable young guide"
    }
  ];

  const artStyles = [
    { id: "pixar", label: "3D Disney/Pixar Animation", promptSnippet: "3D Disney Pixar character render, soft warm museum display lighting, smooth volumetric shading, vibrant colors, ultra-detailed textures, 8k resolution" },
    { id: "anime", label: "Anime Chibi Style (Studio Ghibli / Makoto Shinkai)", promptSnippet: "Japanese anime chibi aesthetic, Studio Ghibli inspired cel shading, expressive large sparkling eyes, delicate watercolor accents, beautiful natural lighting" },
    { id: "clay", label: "Cute Claymation / Stop-Motion", promptSnippet: "Handmade polymer clay miniature figurine, tactile clay texture, studio macro photography, tilt-shift lens effect, soft ambient occlusion" },
    { id: "folk", label: "Tranh Dân Gian Hiện Đại (Vietnamese Folk Fusion)", promptSnippet: "Modern stylized Dong Ho and Hang Trong folk art infusion, flat vibrant decorative patterns, traditional Vietnamese woodblock print texture, modern chibi charm" }
  ];

  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(0);
  const [customName, setCustomName] = useState(initialName || characters[0].name);
  const [customCostume, setCustomCostume] = useState(characters[0].costume);
  const [customAccessory, setCustomAccessory] = useState(characters[0].accessory);
  const [customBackground, setCustomBackground] = useState(characters[0].background);
  const [generatedPrompt, setGeneratedPrompt] = useState(initialPrompt || "");
  const [isCopied, setIsCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeChar = characters[selectedCharIndex];
  const activeStyle = artStyles[selectedStyleIndex];

  // Auto-compose prompt locally or use server
  const composePrompt = () => {
    return `Adorable heroic cute chibi ${customName}, ${activeChar.expression}, wearing ${customCostume}, holding ${customAccessory}, standing in front of ${customBackground}, ${activeStyle.promptSnippet} --ar 1:1`;
  };

  const handleApplyCharacter = (index: number) => {
    setSelectedCharIndex(index);
    const char = characters[index];
    setCustomName(char.name);
    setCustomCostume(char.costume);
    setCustomAccessory(char.accessory);
    setCustomBackground(char.background);
    
    // Auto update prompt
    const newPrompt = `Adorable heroic cute chibi ${char.name}, ${char.expression}, wearing ${char.costume}, holding ${char.accessory}, standing in front of ${char.background}, ${activeStyle.promptSnippet} --ar 1:1`;
    setGeneratedPrompt(newPrompt);
  };

  const handleGenerateWithAI = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-chibi-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          characterName: customName,
          historicalContext: activeChar.role,
          era: activeChar.era,
          costumeDetails: `${customCostume}, ${customAccessory}, ${customBackground}`,
        }),
      });
      const data = await response.json();
      if (data.prompt) {
        setGeneratedPrompt(data.prompt);
      } else {
        setGeneratedPrompt(composePrompt());
      }
    } catch {
      setGeneratedPrompt(composePrompt());
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyPrompt = () => {
    const textToCopy = generatedPrompt || composePrompt();
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-full flex items-center gap-1">
            <Palette className="w-3.5 h-3.5" />
            Nghệ Thuật AI & Tạo Hình Chibi (Mục 3.3 System Instruction)
          </span>
          <span className="px-2 py-0.5 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full">
            Midjourney / Gemini / DALL-E Ready
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
          XƯỞNG TẠO HÌNH NHÂN VẬT LỊCH SỬ CHIBI BẰNG AI
        </h1>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          Tạo ra các câu lệnh (Prompt AI) chuyên nghiệp để vẽ nhân vật lịch sử Việt Nam theo phong cách Chibi bắt mắt, chuẩn xác về trang phục triều đại, sẵn sàng làm poster và bảng hiện vật triển lãm bảo tàng ảo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Preset Characters & Customizer (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Preset Characters */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <User className="w-4 h-4" />
              1. Chọn Nhân Vật Mẫu (Lịch Sử & Phong Tục Biển Đảo)
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {characters.map((char, index) => {
                const isSelected = selectedCharIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleApplyCharacter(index)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-purple-500/20 border-purple-500 text-white shadow-md ring-1 ring-purple-500/50"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-[10px] text-amber-400 font-semibold mb-0.5">
                      {char.era}
                    </div>
                    <div className="text-xs font-bold text-white leading-tight">
                      {char.name}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                      {char.role}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Selector */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Palette className="w-4 h-4" />
              2. Phong Cách Thẩm Mỹ (Art Style)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {artStyles.map((style, index) => {
                const isSelected = selectedStyleIndex === index;
                return (
                  <button
                    key={style.id}
                    onClick={() => {
                      setSelectedStyleIndex(index);
                      setGeneratedPrompt("");
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-amber-500/20 border-amber-500 text-white shadow-md ring-1 ring-amber-500/40"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-850"
                    }`}
                  >
                    <span className="text-xs font-bold text-white block">
                      {style.label}
                    </span>
                    <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                      {style.promptSnippet}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Customizer Fields */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              3. Tinh Chỉnh Chi Tiết Trang Phục & Bối Cảnh
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">
                  Tên nhân vật / Vai diễn:
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => {
                    setCustomName(e.target.value);
                    setGeneratedPrompt("");
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">
                  Trang phục lịch sử (Costume Accuracy):
                </label>
                <textarea
                  rows={2}
                  value={customCostume}
                  onChange={(e) => {
                    setCustomCostume(e.target.value);
                    setGeneratedPrompt("");
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">
                  Vũ khí / Phụ kiện đặc trưng:
                </label>
                <input
                  type="text"
                  value={customAccessory}
                  onChange={(e) => {
                    setCustomAccessory(e.target.value);
                    setGeneratedPrompt("");
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">
                  Bối cảnh không gian bảo tàng / Lịch sử:
                </label>
                <input
                  type="text"
                  value={customBackground}
                  onChange={(e) => {
                    setCustomBackground(e.target.value);
                    setGeneratedPrompt("");
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Prompt Result & Poster Mockup (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Output Card */}
          <div className="bg-slate-900/95 border border-purple-500/40 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Wand2 className="w-4 h-4 text-purple-400" />
                Prompt AI Hoàn Chỉnh
              </span>
              <span className="text-[10px] text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                English (Midjourney / Gemini)
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed break-words select-all max-h-60 overflow-y-auto">
              {generatedPrompt || composePrompt()}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyPrompt}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-600/20"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Đã sao chép Prompt!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao Chép Prompt AI</span>
                  </>
                )}
              </button>

              <button
                onClick={handleGenerateWithAI}
                disabled={isGenerating}
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                title="Dùng Gemini AI nâng cấp độ chi tiết của Prompt"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? "animate-spin text-amber-400" : ""}`} />
                <span>Nâng Cấp AI</span>
              </button>
            </div>

            {/* Poster Plaque Preview Card */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border border-amber-500/30 text-center space-y-2">
              <div className="inline-block px-3 py-0.5 text-[10px] font-bold uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Bảng Tên Triển Lãm (Exhibition Plaque)
              </div>
              <h4 className="text-base font-bold text-white font-serif">
                {customName} Chibi
              </h4>
              <p className="text-xs text-slate-300 line-clamp-2">
                {customCostume}
              </p>
              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-center gap-3">
                <span>Phong cách: {activeStyle.label}</span>
                <span>•</span>
                <span>Tỉ lệ: 1:1 Square</span>
              </div>
            </div>

            {/* Teacher Tips for Students */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <Info className="w-3.5 h-3.5" />
                <span>Mẹo Cho Học Sinh Khi Sử Dụng Prompt:</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                • Giữ nguyên từ khóa tiếng Anh vì các mô hình AI (Gemini, Midjourney) hiểu cấu trúc trang phục lịch sử tốt nhất bằng tiếng Anh.
                <br />
                • Tham số <code className="text-amber-300 font-mono">--ar 1:1</code> tạo ảnh vuông hoàn hảo để làm avatar hoặc card hiện vật bảo tàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
