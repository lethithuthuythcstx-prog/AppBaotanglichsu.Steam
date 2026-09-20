import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// System Instruction as formulated in user's prompt
const SYSTEM_INSTRUCTION = `
You are an expert STEAM Interdisciplinary Educational Mentor & Senior Museum Curator (Chuyên gia Giáo dục Liên môn STEAM, Cố vấn Cao cấp kiêm Giám tuyển Bảo tàng) for 8th-grade students creating an "Interactive Historical Museum" (Bảo tàng Lịch sử Tương tác).

OBJECTIVES & SPECIALIZATIONS:
1. Geography & Maritime Sovereignty (Địa lý & Chủ quyền):
   - Strict adherence to UNCLOS 1982 and Vietnam Maritime Law 2012 (Luật Biển Việt Nam 2012).
   - Accurately identify the 5 maritime zones of Vietnam:
     * Nội thủy (Internal Waters): Waters landward of the baseline (Đường cơ sở). Absolute sovereignty.
     * Lãnh hải (Territorial Sea): 12 nautical miles from baseline. Complete sovereignty with innocent passage.
     * Tiếp giáp lãnh hải (Contiguous Zone): 24 nautical miles from baseline (12 nm beyond territorial sea) for customs, fiscal, immigration, sanitation enforcement.
     * Vùng đặc quyền kinh tế - EEZ (Exclusive Economic Zone): 200 nautical miles from baseline. Sovereign rights over natural resources and jurisdiction.
     * Thềm lục địa (Continental Shelf): Seabed and subsoil extending at least 200 nautical miles, up to 350 nautical miles. Sovereign rights over exploration/exploitation of non-living resources and sedentary species.
   - Accurately reference East Sea (Biển Đông), Hoang Sa (Paracel) and Truong Sa (Spratly) archipelagos, coastal fishing grounds, and natural marine resources.

2. English Curriculum Integration (Tiếng Anh Lớp 8 - Unit 5: Customs and Traditions):
   - Utilize vocabulary from Unit 5: worshipping, ancestor, social etiquette, breaking with tradition, respect, offshore fishing rituals, spiritual beliefs, custom, heritage, pagoda, temple, maritime ritual.
   - Use modal verbs: should/shouldn't (for museum visitor etiquette and cultural advice) and have to/must (for traditional customs, maritime rules, and heritage preservation).
   - Target level: A2 - B1 (clear, engaging, concise).

3. Culture & History:
   - Skillfully weave Vietnamese customs, historical triumphs (e.g., Bach Dang 938, 1288, Tran Hung Dao, Ba Trieu, Hai Ba Trung, Nguyen Hoang, Le Khao Le The Linh Hoang Sa, Cau Ngu whale festival) into exhibition spaces.

4. Technology & Art (Công nghệ & Nghệ thuật):
   - Provide AI Art prompts for Chibi-style historical heroes and traditional figures retaining historical attire accuracy.
   - Provide virtual museum architecture tips, tree sitemaps, and simple HTML/CSS/JS snippets for transitions and interactive exhibits.

5. Pedagogical Approach (Scaffolding):
   - Act as an inspiring facilitator. Do not just complete the homework for them; provide the scaffolding and constructive feedback.
   - Support Foreign Student (Du học sinh) & Vietnamese Guide roleplay dialogue.

STRICT MANDATORY OUTPUT FORMAT:
When responding to a student inquiry, you MUST structure your answer into these 5 numbered sections:
1. Direct Feedback (Phản hồi nhanh):
   - Praise the student's initiative + constructive suggestions for improvement.
2. Knowledge Pillar (Trụ cột kiến thức):
   - Geography Check: Precise maritime zone, coordinates, or map/boundary details.
   - History & Culture: Relevant historical event, figures, or cultural customs (Unit 5).
3. English Support (Hỗ trợ Tiếng Anh):
   - Key Vocabulary: 4-6 essential vocabulary words/phrases with phonetic or Vietnamese gloss.
   - Sample Script: A concise Audio Guide or Caption script in English (A2-B1 level) featuring Unit 5 grammar (should/shouldn't, have to/must).
4. Tech/Art Tip (Mẹo Công nghệ/Nghệ thuật):
   - Art Prompt: A ready-to-use AI image generation prompt for Chibi historical character or exhibition booth.
   - Tech/Museum Tip: Virtual museum sitemap structure or HTML/CSS code snippet.
5. Challenge Question (Câu hỏi gợi mở):
   - An inspiring question prompting the student to think deeper about their next creative step.

TONE & LANGUAGE:
Inspiring, professional, patient, and bilingual (Vietnamese for pedagogical explanation & technical advice, English for vocabulary, script, and sample dialogues).
`;

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback response generator if API key is not configured or fails
function getCuratorFallbackResponse(userPrompt: string): string {
  const lower = userPrompt.toLowerCase();
  
  if (lower.includes("cầu ngư") || lower.includes("ngư dân") || lower.includes("đặc quyền kinh tế") || lower.includes("biển")) {
    return `### 1. Direct Feedback (Phản hồi nhanh)
Ý tưởng đưa **Lễ hội Cầu Ngư** vào khu trưng bày hải đảo của nhóm rất xuất sắc! Đây là nét văn hóa tâm linh đặc trưng của ngư dân miền biển Việt Nam, kết nối trực tiếp với bài học về chủ quyền và tài nguyên biển. Thầy/Cô gợi ý các em nên làm nổi bật mối liên kết giữa phong tục tín ngưỡng và lòng dũng cảm vươn khơi bám biển.

---

### 2. Knowledge Pillar (Trụ cột kiến thức)
* **Geography Check (Địa lý):** 
  - Ngư trường đánh bắt truyền thống nằm trải dài từ **Vùng đặc quyền kinh tế (EEZ - 200 hải lý)** đến các ngư trường Hoàng Sa, Trường Sa và vùng biển Tây Nam.
  - Theo **Luật Biển Việt Nam 2012** và **UNCLOS 1982**, trong vùng EEZ, Việt Nam có quyền chủ quyền hoàn toàn về thăm dò, khai thác tài nguyên sinh vật biển (thủy hải sản) và tài nguyên khoáng sản.
* **History & Culture (Lịch sử & Văn hóa):** 
  - Tục thờ thần Cá Voi (Cá Ông - Lễ hội Cầu Ngư / Nghinh Ông) có từ hàng trăm năm, thể hiện lòng tôn kính mẹ thiên nhiên và khát vọng bình an trước sóng to gió lớn.

---

### 3. English Support (Hỗ trợ Tiếng Anh - Unit 5: Customs and Traditions)
* **Key Vocabulary:**
  - *worshipping ritual* (n): nghi thức thờ cúng
  - *offshore fishing* (n): đánh bắt xa bờ
  - *whale temple / tomb* (n): lăng/đền thờ Cá Ông
  - *social etiquette* (n): quy tắc ứng xử lễ hội
  - *maritime heritage* (n): di sản văn hóa biển
* **Sample Script (Audio Guide for Visitors):**
  > **Vietnamese Guide:** "Welcome to the Maritime Culture Pavilion! In Vietnam, fishermen have an ancient tradition of worshipping the Whale God. You **have to** remove your hats before entering the shrine. Visitors **should** listen quietly to the chanting prayers. We **shouldn't** litter on the sacred beach to show our deep respect for maritime heritage."

---

### 4. Tech/Art Tip (Mẹo Công nghệ/Nghệ thuật)
* **Chibi AI Prompt (Tạo hình ông lão ngư dân hiền từ phong cách Chibi):**
  \`\`\`text
  A cute chibi Vietnamese elderly fisherman, smiling warmly, wearing a traditional dark brown indigo ao ba ba, holding a miniature woven bamboo fishing boat, conical hat tilted on back, ocean waves and whale spirit aura in background, 3D Pixar Disney style, soft warm museum spotlight, high detail, 8k --ar 1:1
  \`\`\`
* **Virtual Museum HTML Tip:**
  \`\`\`html
  <!-- Exhibition Item Card with interactive audio guide trigger -->
  <div class="exhibit-card" onclick="playAudioGuide('cau-ngu')">
    <span class="zone-badge">EEZ Zone (200 NM)</span>
    <h3>Lễ Hội Cầu Ngư & Tín Ngưỡng Biển</h3>
    <button class="audio-btn">▶ Play Audio Guide (EN/VI)</button>
  </div>
  \`\`\`

---

### 5. Challenge Question (Câu hỏi gợi mở)
> *"Nếu một bạn du học sinh hỏi: 'Tại sao việc bảo tồn Lễ hội Cầu Ngư lại gắn liền mật thiết với việc khẳng định chủ quyền biển đảo của Việt Nam?', nhóm em sẽ giải thích bằng tiếng Anh như thế nào bằng cấu trúc 'We should...'?"*`;
  }

  if (lower.includes("bạch đằng") || lower.includes("trần hưng đạo")) {
    return `### 1. Direct Feedback (Phản hồi nhanh)
Thầy/Cô đánh giá rất cao việc nhóm chọn **Đại thắng Bạch Đằng Giang** và **Hưng Đạo Đại Vương Trần Hưng Đạo**! Đây là minh chứng hùng hồn nhất cho sự kết hợp tài tình giữa địa lý sông biển tự nhiên (hiện tượng bán nhật triều) và nghệ thuật quân sự truyền thống.

---

### 2. Knowledge Pillar (Trụ cột kiến thức)
* **Geography Check (Địa lý & Thủy triều):** 
  - Vùng hạ lưu sông Bạch Đằng đổ ra **Vịnh Bắc Bộ (thuộc vùng Nội thủy và Lãnh hải Việt Nam)**.
  - Sông có chế độ bán nhật triều rất mạnh (mỗi ngày nước rút và dâng 2 lần, chênh lệch mực nước lên đến gần 4 mét). Quân dân nhà Trần đã đo lường chính xác giờ nước rút để cắm cọc gỗ lim bịt sắt.
* **History & Culture (Lịch sử & Truyền thống):** 
  - Chiến thắng năm 1288 đập tan mưu đồ xâm lược của quân Nguyên Mông. Khí phách "Hào khí Đông A" và lời thề "Sát Thát" là biểu tượng bất diệt của tinh thần yêu nước.

---

### 3. English Support (Hỗ trợ Tiếng Anh - Unit 5)
* **Key Vocabulary:**
  - *national hero* (n): anh hùng dân tộc
  - *wooden stakes* (n): cọc gỗ
  - *tidal flow* (n): dòng chảy thủy triều
  - *patriotic tradition* (n): truyền thống yêu nước
  - *pay tribute to* (v): tưởng nhớ, tri ân
* **Sample Script (Exhibition Caption & Audio Guide):**
  > **Vietnamese Guide:** "Standing before you is General Tran Hung Dao. In 1288, he utilized the rising and falling tides of Bach Dang River to defeat foreign invaders. When visiting this historic memorial, visitors **must** show reverence. You **should** study the wooden stake model carefully to understand the brilliance of ancient Vietnamese geography-based tactics."

---

### 4. Tech/Art Tip (Mẹo Công nghệ/Nghệ thuật)
* **Chibi AI Prompt (Tướng quân Trần Hưng Đạo phong cách Chibi):**
  \`\`\`text
  Cute heroic chibi General Tran Hung Dao, wearing 13th century Dai Viet royal commander armor with golden dragon embroidery, flowing crimson cape, holding a command scroll and sword, standing proudly next to Bach Dang wooden stakes river bank, anime chibi style, dynamic heroic lighting, intricate armor details, 8k --ar 1:1
  \`\`\`
* **Virtual Museum Sitemap Tip:**
  Tạo cấu trúc cây thư mục 3 tầng: \`Lối vào -> Sảnh Bạch Đằng Giang -> Tủ kính mô hình cọc gỗ 3D -> Bàn tra cứu Thủy triều & Trận đồ tương tác\`.

---

### 5. Challenge Question (Câu hỏi gợi mở)
> *"Nhóm em hãy thử đóng vai Du học sinh quốc tế đặt một câu hỏi tò mò về cọc gỗ Bạch Đằng, và người Hướng dẫn viên Việt Nam sẽ dùng mẫu câu 'You have to know that...' để trả lời nhé!"*`;
  }

  // Generic expert response tailored to student's query
  return `### 1. Direct Feedback (Phản hồi nhanh)
Thầy/Cô rất hoan nghênh câu hỏi của nhóm! Đề tài các em đang phát triển mang tính giáo dục liên môn STEAM rất rõ rệt: vừa tôn vinh giá trị di sản văn hóa Việt Nam, vừa rèn luyện kỹ năng Tiếng Anh giao tiếp và ứng dụng công nghệ trực quan.

---

### 2. Knowledge Pillar (Trụ cột kiến thức)
* **Geography Check (Địa lý & Chủ quyền):** 
  - Hãy luôn đối chiếu với **5 vùng biển Việt Nam theo Luật Biển 2012**: *Nội thủy, Lãnh hải (12 hải lý), Tiếp giáp lãnh hải (24 hải lý), Vùng đặc quyền kinh tế EEZ (200 hải lý), và Thềm lục địa*.
  - Vị trí địa lý thuận lợi trên Biển Đông giúp Việt Nam có mạng lưới giao thương hàng hải quốc tế sầm uất và nguồn tài nguyên phong phú.
* **History & Culture (Lịch sử & Phong tục Unit 5):** 
  - Truyền thống "Uống nước nhớ nguồn", kính trọng tiền nhân và giữ gìn các chuẩn mực ứng xử khi bước vào không gian bảo tàng thiêng liêng.

---

### 3. English Support (Hỗ trợ Tiếng Anh - Unit 5: Customs and Traditions)
* **Key Vocabulary:**
  - *customs and traditions* (n): phong tục và tập quán
  - *table manners / social etiquette* (n): phép lịch sự xã giao
  - *ancestral veneration* (n): lòng thành kính tổ tiên
  - *show respect for* (v phr): thể hiện sự tôn trọng
* **Sample Script (Dialogue):**
  > **Foreign Student:** "What are the rules when visiting this historical hall?"
  > **Vietnamese Guide:** "Visitors **should** walk quietly and **shouldn't** touch the fragile artifacts. In our tradition, we **must** maintain high respect when learning about heroic ancestors."

---

### 4. Tech/Art Tip (Mẹo Công nghệ/Nghệ thuật)
* **Chibi AI Prompt Suggestion:**
  \`\`\`text
  Chibi cute 8th-grade Vietnamese student tour guide wearing a modern school uniform with a lotus pin, friendly smile, holding an interactive digital museum tablet, standing in front of an ancient Vietnamese wooden pavilion, anime art style, 3D rendering, pastel tones --ar 1:1
  \`\`\`
* **Tech Hint:** Dùng hiệu ứng CSS \`transform: scale(1.05); transition: 0.3s;\` cho các thẻ hiện vật để người xem cảm nhận được tính tương tác trực quan.

---

### 5. Challenge Question (Câu hỏi gợi mở)
> *"Nhóm em dự định thiết kế trạm tương tác nào để các bạn học sinh quốc tế có thể 'chạm' hoặc tương tác trực tiếp với kiến thức địa lý biển đảo Việt Nam?"*`;
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "STEAM Museum Mentor Server" });
});

// API: Consultation with AI Curator Mentor
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Return rich contextual pedagogical fallback response
      const fallback = getCuratorFallbackResponse(message);
      return res.json({ reply: fallback, isFallback: true });
    }

    const formattedContents = [
      ...conversationHistory.map((msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Gemini API timeout")), 14000)
    );

    const generatePromise = ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response: any = await Promise.race([generatePromise, timeoutPromise]);

    const text = response.text || getCuratorFallbackResponse(message);
    res.json({ reply: text, isFallback: false });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    // Provide graceful degradation
    const fallback = getCuratorFallbackResponse(req.body.message || "");
    res.json({ reply: fallback, isFallback: true, errorNotice: error.message });
  }
});

// API: Specialized Chibi AI Prompt Generator
app.post("/api/generate-chibi-prompt", async (req, res) => {
  try {
    const { characterName, historicalContext, era, costumeDetails } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      const defaultPrompt = `Cute chibi ${characterName || "Vietnamese Historical Hero"}, 3D Disney Pixar style, wearing authentic historical ${era || "traditional"} Vietnamese attire (${costumeDetails || "silk robe with traditional patterns"}), heroic friendly expression, standing in front of an ancient Vietnamese fortress and lotus pond, soft warm cinematic lighting, ultra-detailed textures, 8k resolution --ar 1:1`;
      return res.json({ prompt: defaultPrompt });
    }

    const promptRequest = `Generate a high-quality AI image generation prompt (in English for Midjourney/Gemini) for an 8th-grade STEAM museum project:
Character: ${characterName}
Historical Context: ${historicalContext}
Era: ${era}
Costume Details: ${costumeDetails}
Style: Cute Chibi style, retaining cultural accuracy of Vietnamese traditional costume, cinematic museum lighting, 3D Disney/Pixar animated aesthetic.
Return ONLY the prompt text in English.`;

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), 10000)
    );

    const generatePromise = ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: promptRequest,
    });

    const response: any = await Promise.race([generatePromise, timeoutPromise]);

    res.json({ prompt: response.text?.trim() });
  } catch (error: any) {
    console.error("Prompt generation error:", error);
    res.json({
      prompt: `Cute chibi ${req.body.characterName || "Vietnamese Hero"}, 3D animated style, authentic traditional Vietnamese armor and silk garment, vibrant colors, heroic stance, museum lighting --ar 1:1`
    });
  }
});

// API: Audio Guide Script Generator (Unit 5 Integration)
app.post("/api/generate-audio-guide", async (req, res) => {
  try {
    const { topic, maritimeZone, keyVocabulary } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        title: `Audio Guide: ${topic || "Maritime Heritage"}`,
        scriptEn: `Welcome visitors to the ${topic || "historical"} exhibit! As we explore this sacred area, you must pay close attention to our heritage rules. You should walk respectfully and listen to the ocean's stories. Visitors shouldn't touch the sacred artifacts. In Vietnamese tradition, we have to honor the heroes who protected our seas and sacred islands.`,
        scriptVi: `Chào mừng quý khách đến với không gian trưng bày ${topic || "di sản biển"}! Khi khám phá khu vực thiêng liêng này, các bạn phải chú ý đến các quy tắc di sản. Các bạn nên bước đi trang nghiêm và lắng nghe câu chuyện của biển cả. Du khách không nên chạm vào hiện vật. Theo truyền thống Việt Nam, chúng ta phải ghi nhớ công ơn tiền nhân bảo vệ non sông biển đảo.`,
        vocabulary: ["worshipping", "maritime zone", "should / shouldn't", "have to / must", "sacred heritage"]
      });
    }

    const prompt = `Write a Grade 8 English (Unit 5: Customs and Traditions) bilingual Audio Guide script for an interactive museum exhibit:
Topic: ${topic}
Maritime Zone involved: ${maritimeZone}
Keywords to include: ${keyVocabulary}
Include modal verbs 'should/shouldn't' and 'have to/must'. Level A2-B1.
Format as JSON: { "title": string, "scriptEn": string, "scriptVi": string, "vocabulary": string[] }`;

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), 10000)
    );

    const generatePromise = ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const response: any = await Promise.race([generatePromise, timeoutPromise]);

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate audio guide" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`STEAM Interactive Museum Mentor server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
