import { Unit5VocabItem } from "../types";

export const UNIT_5_VOCABULARY: Unit5VocabItem[] = [
  {
    word: "custom",
    pronunciation: "/ˈkʌs.təm/",
    meaning: "phong tục, thói quen tập thể",
    definition: "An accepted way of behaving or of doing things in a society or a community.",
    collocation: "follow a custom, coastal custom, local custom",
    example: "There is a coastal custom of worshipping the Whale God before sailing."
  },
  {
    word: "tradition",
    pronunciation: "/trəˈdɪʃ.ən/",
    meaning: "truyền thống lâu đời",
    definition: "A belief, principle, or way of acting that people in a particular society or group have continued to follow for a long time.",
    collocation: "break with tradition, uphold a tradition, pass down tradition",
    example: "The villagers break with tradition if they refuse to hold the spring festival."
  },
  {
    word: "worshipping",
    pronunciation: "/ˈwɜː.ʃɪp.ɪŋ/",
    meaning: "sự thờ phụng, tôn sùng",
    definition: "Showing a lot of love and respect for something or someone divine.",
    collocation: "ancestor worshipping, whale worshipping",
    example: "Ancestor worshipping is practiced across Vietnam."
  },
  {
    word: "social etiquette",
    pronunciation: "/ˈsəʊ.ʃəl ˈet.ɪ.ket/",
    meaning: "phép lịch sự xã giao, quy tắc ứng xử",
    definition: "The set of rules or customs that control accepted behavior in social groups.",
    collocation: "observe social etiquette, museum etiquette",
    example: "You must learn social etiquette before visiting traditional sacred temples."
  },
  {
    word: "respect",
    pronunciation: "/rɪˈspekt/",
    meaning: "sự tôn trọng, kính trọng",
    definition: "Politeness, honor, and care shown towards someone or something important.",
    collocation: "show respect for, deep respect, pay respect to",
    example: "Students should show respect for the national heroes of Vietnam."
  },
  {
    word: "maritime ritual",
    pronunciation: "/ˈmær.ɪ.taɪm ˈrɪtʃ.u.əl/",
    meaning: "nghi lễ hàng hải, nghi thức đi biển",
    definition: "A set of fixed actions and sometimes words performed regularly as part of ocean culture.",
    collocation: "offshore maritime ritual, solemn ritual",
    example: "The fishermen perform a maritime ritual before setting sail into the EEZ."
  }
];

export const GRAMMAR_GUIDE = {
  should_shouldnt: {
    title: "Should / Shouldn't (Lời khuyên & Ứng xử lịch sự)",
    usage: "Dùng để đưa ra lời khuyên cho du khách khi tham quan bảo tàng, hoặc gợi ý cách hành xử tôn trọng văn hóa truyền thống.",
    formula: "S + should / shouldn't + V (bare infinitive)",
    examples: [
      "Visitors should listen attentively to the Vietnamese guide.",
      "You shouldn't take flash photographs of the delicate ancient scrolls.",
      "Students should take notes about the five maritime zones of Vietnam."
    ]
  },
  have_to_must: {
    title: "Have to / Must (Bắt buộc & Quy tắc truyền thống)",
    usage: "Dùng để nói về các quy định bắt buộc, nội quy bảo tàng hoặc các phong tục mang tính nghiêm ngặt không được làm trái.",
    formula: "S + have to / has to / must + V (bare infinitive)",
    examples: [
      "Visitors must silence their mobile devices inside memorial halls.",
      "Fishermen have to obtain a license when entering deep EEZ fishing grounds.",
      "You must show reverence when learning about heroes who defended the East Sea."
    ]
  }
};

export const STEAM_PROJECT_RUBRIC = [
  {
    categoryVi: "1. Độ chính xác Địa lý & Chủ quyền (UNCLOS 1982 & Luật Biển 2012)",
    categoryEn: "Geography & Maritime Sovereignty Accuracy",
    maxPoints: 25,
    criteria: "Xác định đúng 5 vùng biển: Nội thủy, Lãnh hải (12 NM), Tiếp giáp lãnh hải (24 NM), Vùng đặc quyền kinh tế EEZ (200 NM), Thềm lục địa. Nêu rõ hai quần đảo Hoàng Sa & Trường Sa."
  },
  {
    categoryVi: "2. Tích hợp Tiếng Anh lớp 8 (Unit 5: Customs and Traditions)",
    categoryEn: "English Unit 5 Competency (A2-B1 Level)",
    maxPoints: 25,
    criteria: "Kịch bản Audio Guide và bảng chú thích hiện vật sử dụng từ vựng Unit 5 (worshipping, etiquette, respect...) và cấu trúc Should/Must đúng ngữ cảnh."
  },
  {
    categoryVi: "3. Sáng tạo Nghệ thuật Chibi AI & Thẩm mỹ Bảo tàng",
    categoryEn: "Chibi AI Art & Museum Aesthetic Design",
    maxPoints: 25,
    criteria: "Tạo hình nhân vật lịch sử phong cách Chibi bắt mắt, giữ đúng trang phục lịch sử (áo rồng, nón chóp đỏ, áo bà ba). Bố cục không gian bảo tàng hài hòa."
  },
  {
    categoryVi: "4. Công nghệ & Sơ đồ Cây Bảo tàng Ảo (Sitemap & Interactive Tech)",
    categoryEn: "Tech Implementation & Virtual Museum UX",
    maxPoints: 25,
    criteria: "Xây dựng sơ đồ cây (Sitemap) mạch lạc, luồng tương tác trải nghiệm mượt mà, hỗ trợ thuyết minh âm thanh song ngữ (Audio Guide)."
  }
];
