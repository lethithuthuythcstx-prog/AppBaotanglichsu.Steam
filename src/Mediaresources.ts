/**
 * Media and Document Resources for Grade 8 STEAM Project
 * Supports PDF documents, interactive HTML articles, and MP3 audio tracks.
 */

export interface PdfDocument {
  id: string;
  titleVi: string;
  titleEn: string;
  category: "ke-hoach" | "dia-ly-bien" | "tieng-anh-u5" | "ky-thuat";
  badge: string;
  totalPages: number;
  fileSize: string;
  descriptionVi: string;
  downloadFilename: string;
  // Pre-rendered rich content representation for in-app PDF-like viewing
  pages: {
    pageNumber: number;
    heading: string;
    sections: {
      subheading?: string;
      content: string;
      bulletPoints?: string[];
      callout?: string;
    }[];
  }[];
}

export interface HtmlDocument {
  id: string;
  titleVi: string;
  titleEn: string;
  category: string;
  readTime: string;
  badge: string;
  descriptionVi: string;
  previewSnippet: string;
  rawHtml: string;
}

export interface AudioTrack {
  id: string;
  titleVi: string;
  titleEn: string;
  speaker: string;
  durationSeconds: number;
  durationLabel: string;
  theme: string;
  badge: string;
  audioUrl?: string; // Optional external/local MP3 link
  transcriptEn: string;
  transcriptVi: string;
  keyVocabulary: {
    word: string;
    meaning: string;
  }[];
}

export const SAMPLE_PDF_DOCUMENTS: PdfDocument[] = [
  {
    id: "pdf-steam-syllabus",
    titleVi: "Kế Hoạch Dạy Học & Hướng Dẫn Dự Án STEAM Khối 8",
    titleEn: "Grade 8 STEAM Project Guide: Interactive Historical Museum",
    category: "ke-hoach",
    badge: "Giáo Trình STEAM K8",
    totalPages: 3,
    fileSize: "1.4 MB",
    descriptionVi: "Tài liệu khung hướng dẫn 5 bước quy trình thiết kế kỹ thuật STEAM (EDP), phân công nhiệm vụ nhóm và tiêu chí đánh giá sản phẩm bảo tàng ảo lớp 8.",
    downloadFilename: "Ke-hoach-STEAM-Lop-8-Bao-tang-Lich-su.pdf",
    pages: [
      {
        pageNumber: 1,
        heading: "PHẦN 1: MỤC TIÊU & Ý NGHĨA DỰ ÁN LIÊN MÔN K8",
        sections: [
          {
            subheading: "1. Tên Dự Án:",
            content: "HISTO-STEAM 8: Xây dựng Bảo tàng Lịch sử - Địa lý Tương tác tích hợp Tiếng Anh lớp 8 Unit 5 (Customs and Traditions)."
          },
          {
            subheading: "2. Mục tiêu tích hợp liên môn (STEAM):",
            content: "Dự án giúp học sinh phát triển năng lực toàn diện thông qua 5 trụ cột:",
            bulletPoints: [
              "Science (Khoa học): Hiểu rõ quy luật thủy triều Vịnh Bắc Bộ (bán nhật triều) trong trận Bạch Đằng 1288 và hệ sinh thái đa dạng sinh học 5 vùng biển Việt Nam.",
              "Technology (Công nghệ): Khai thác Trí tuệ nhân tạo (AI Studio, Gemini 3 Flash/Pro) để viết Prompt tạo hình nhân vật Chibi và xây dựng website bảo tàng tương tác.",
              "Engineering (Kỹ thuật): Thiết kế cấu trúc sơ đồ cây (Sitemap), bố cục không gian triển lãm 3D/ảo và logic chuyển trang chuyển cảnh.",
              "Art (Nghệ thuật): Tạo dựng phong cách mỹ thuật Chibi 3D lịch sử mang đậm bản sắc văn hóa Việt Nam; phối màu trang phục triều đại.",
              "Math (Toán học): Tính toán tỷ lệ hải lý (1 NM = 1.852 km) của các vùng biển (12 NM, 24 NM, 200 NM); đo đạc khoảng cách và bố cục lưới tỉ lệ vàng."
            ]
          },
          {
            callout: "Ghi chú dành cho Giáo viên & Trưởng nhóm: Dự án triển khai trong thời lượng 4-6 tuần, chia làm 3 giai đoạn: Nghiên cứu tư liệu, Sáng tạo mẫu vật AI, và Lập trình đóng gói website."
          }
        ]
      },
      {
        pageNumber: 2,
        heading: "PHẦN 2: TIẾN TRÌNH THỰC HIỆN 5 BƯỚC QUY TRÌNH STEAM (EDP)",
        sections: [
          {
            subheading: "Bước 1: Xác định vấn đề (Ask)",
            content: "Làm thế nào để giới thiệu lịch sử hào hùng và chủ quyền biển đảo Việt Nam cho bạn bè quốc tế một cách sinh động, dễ hiểu bằng Tiếng Anh?"
          },
          {
            subheading: "Bước 2: Tưởng tượng & Nghiên cứu (Imagine)",
            content: "Thu thập tư liệu từ Luật Biển Việt Nam 2012, Công ước UNCLOS 1982, và từ vựng Unit 5 Tiếng Anh 8 (Global Success). Phác thảo chân dung nhân vật lịch sử."
          },
          {
            subheading: "Bước 3: Lập kế hoạch thiết kế (Plan)",
            content: "Xây dựng kịch bản Audio Guide nhập vai (Du học sinh & Hướng dẫn viên), viết Prompt Chibi AI cho Midjourney/Imagen và sơ đồ Sitemap bảo tàng."
          },
          {
            subheading: "Bước 4: Chế tạo sản phẩm mẫu (Create)",
            content: "Lắp ráp giao diện HTML5, tích hợp Audio Web Speech API và tạo các gian phòng trưng bày tương tác."
          },
          {
            subheading: "Bước 5: Thử nghiệm & Hoàn thiện (Improve)",
            content: "Đánh giá chéo theo thang Rubric 100 điểm, hiệu chỉnh độ chuẩn xác phát âm tiếng Anh và cập nhật tính năng mới."
          }
        ]
      },
      {
        pageNumber: 3,
        heading: "PHẦN 3: BẢNG PHÂN CÔNG NHIỆM VỤ NHÓM HỌC SINH (4-5 BẠN)",
        sections: [
          {
            subheading: "Cơ cấu phân vai chuẩn trong nhóm STEAM Khối 8:",
            bulletPoints: [
              "Nhóm trưởng & Giám tuyển nội dung (Curator): Chịu trách nhiệm về tính chính xác của tư liệu lịch sử, chủ quyền 5 vùng biển theo Luật Biển 2012.",
              "Kỹ sư Công nghệ (Tech Lead): Quản lý mã nguồn HTML/CSS/JS, nhúng các tệp âm thanh MP3 và kiểm tra độ mượt mà của website.",
              "Nghệ sĩ Tạo hình AI (AI Prompt Artist): Tinh chỉnh Prompt Chibi để tạo ra hình ảnh các vị anh hùng dân tộc sắc nét, đúng trang phục cổ truyền.",
              "Biên kịch & Thuyết minh viên Tiếng Anh (Audio Guide Lead): Soạn thảo kịch bản đối thoại, kiểm tra ngữ pháp Should/Must và ghi âm bản đọc tiếng Anh."
            ]
          },
          {
            callout: "Quy chuẩn nộp bài: Mỗi nhóm nộp 01 đường link website chạy trực tuyến hoặc thư mục mã nguồn kèm file ghi âm thuyết minh MP3 hoàn chỉnh."
          }
        ]
      }
    ]
  },
  {
    id: "pdf-luat-bien-unclos",
    titleVi: "Cẩm Nang Pháp Lý 5 Vùng Biển Việt Nam (UNCLOS 1982 & Luật Biển 2012)",
    titleEn: "Legal Handbook: 5 Maritime Zones of Vietnam (UNCLOS 1982 & Law of the Sea)",
    category: "dia-ly-bien",
    badge: "Pháp Lý & Chủ Quyền",
    totalPages: 2,
    fileSize: "2.1 MB",
    descriptionVi: "Văn bản pháp lý tóm lược về ranh giới, chế độ pháp lý và quy chế hoạt động của 5 vùng biển: Nội thủy, Lãnh hải, Tiếp giáp lãnh hải, EEZ, Thềm lục địa và hai quần đảo Hoàng Sa - Trường Sa.",
    downloadFilename: "Cam-nang-5-Vung-Bien-Viet-Nam-K8.pdf",
    pages: [
      {
        pageNumber: 1,
        heading: "CHƯƠNG I: CÁC VÙNG BIỂN THUỘC CHỦ QUYỀN & QUYỀN CHỦ QUYỀN",
        sections: [
          {
            subheading: "1. Vùng Nội thủy (Internal Waters):",
            content: "Là vùng nước nằm phía trong đường cơ sở dùng để tính chiều rộng lãnh hải. Nhà nước Việt Nam thực hiện chủ quyền hoàn toàn, tuyệt đối và đầy đủ như trên lãnh thổ đất liền."
          },
          {
            subheading: "2. Vùng Lãnh hải (Territorial Sea):",
            content: "Có chiều rộng 12 hải lý (khoảng 22,224 km) tính từ đường cơ sở ra phía ngoài. Ranh giới ngoài của lãnh hải chính là đường biên giới quốc gia trên biển của Việt Nam."
          },
          {
            subheading: "3. Vùng Tiếp giáp Lãnh hải (Contiguous Zone):",
            content: "Có chiều rộng 12 hải lý tiếp liền lãnh hải (cách đường cơ sở tối đa 24 hải lý). Việt Nam thực hiện kiểm soát nhằm ngăn ngừa và xử phạt các vi phạm về hải quan, thuế, y tế, xuất nhập cảnh."
          },
          {
            callout: "Quy đổi hải lý quốc tế: 1 Hải lý (Nautical Mile - NM) = 1.852 mét (1,852 km). Các em học sinh chú ý áp dụng vào bài tính toán môn Toán/Địa lý."
          }
        ]
      },
      {
        pageNumber: 2,
        heading: "CHƯƠNG II: VÙNG ĐẶC QUYỀN KINH TẾ, THỀM LỤC ĐỊA & HẢI ĐẢO",
        sections: [
          {
            subheading: "4. Vùng Đặc quyền Kinh tế - EEZ (Exclusive Economic Zone):",
            content: "Vùng biển tiếp liền và nằm ngoài lãnh hải, mở rộng ra đến 200 hải lý tính từ đường cơ sở. Việt Nam có quyền chủ quyền hoàn toàn về thăm dò, khai thác, bảo tồn và quản lý tài nguyên sinh vật và phi sinh vật."
          },
          {
            subheading: "5. Thềm lục địa (Continental Shelf):",
            content: "Đáy biển và lòng đất dưới đáy biển kéo dài tự nhiên từ lãnh thổ đất liền ra đến bờ ngoài của rìa lục địa, tối thiểu 200 hải lý và có thể mở rộng đến 350 hải lý theo UNCLOS 1982."
          },
          {
            subheading: "6. Hai quần đảo Hoàng Sa và Trường Sa:",
            content: "Việt Nam có đầy đủ căn cứ pháp lý và chứng cứ lịch sử khẳng định chủ quyền không thể chối cãi đối với hai quần đảo Hoàng Sa và Trường Sa theo luật pháp quốc tế."
          },
          {
            callout: "Ý nghĩa đối với học sinh lớp 8: Khắc sâu lòng yêu nước, ý thức trách nhiệm bảo vệ chủ quyền biển đảo thiêng liêng của Tổ quốc qua các sản phẩm công nghệ số."
          }
        ]
      }
    ]
  },
  {
    id: "pdf-worksheet-unit5",
    titleVi: "Phiếu Học Tập Tiếng Anh Unit 5: Customs and Traditions (Lớp 8)",
    titleEn: "Student Worksheet: Unit 5 Customs and Traditions (Grade 8)",
    category: "tieng-anh-u5",
    badge: "Tiếng Anh Global Success",
    totalPages: 2,
    fileSize: "1.1 MB",
    descriptionVi: "Hệ thống từ vựng trọng tâm, bài tập phân biệt Should/Shouldn't vs Have to/Must, và mẫu kịch bản thuyết minh bảo tàng ảo đạt chuẩn A2-B1.",
    downloadFilename: "Phieu-Hoc-Tap-Unit-5-Tieng-Anh-8.pdf",
    pages: [
      {
        pageNumber: 1,
        heading: "VOCABULARY & GRAMMAR MASTERY (UNIT 5)",
        sections: [
          {
            subheading: "1. Core Vocabulary (Từ vựng cốt lõi):",
            bulletPoints: [
              "worship (v): thờ cúng, tôn kính -> Whale worship is a deep-rooted tradition.",
              "ancestral custom (n phr): phong tục truyền thống của tổ tiên để lại.",
              "social etiquette (n phr): quy tắc ứng xử xã hội chuẩn mực.",
              "reverence (n): sự tôn kính sâu sắc -> show reverence to national heroes.",
              "sacred relic (n phr): di vật, cổ vật thiêng liêng tại di tích lịch sử."
            ]
          },
          {
            subheading: "2. Grammar Structures: Advice vs Obligation",
            content: "Quy tắc vàng phân biệt cấu trúc khuyên bảo và bắt buộc:",
            bulletPoints: [
              "S + should / shouldn't + V-infinitive: Dùng để đưa ra lời khuyên lịch sự (You should take off your shoes).",
              "S + must / have to + V-infinitive: Dùng để chỉ quy định bắt buộc mang tính pháp luật hoặc quy tắc bảo tàng (Visitors must not touch the historical exhibits)."
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        heading: "SAMPLE ROLEPLAY SCRIPT: DU HỌC SINH & HƯỚNG DẪN VIÊN",
        sections: [
          {
            subheading: "Kịch bản mẫu tham khảo cho nhóm học sinh K8:",
            content: "Foreign Student: \"Excuse me, could you tell me why fishermen here worship whales?\"\n\nVietnamese Guide: \"Welcome to our maritime heritage! Fishermen revere the whale as 'Lord Whale' (Cá Ông) who rescues them from violent storms in the EEZ zone. When visiting the temple, you should speak gently and you must not step on the sanctuary threshold.\"\n\nForeign Student: \"That is such a fascinating tradition! I will show my utmost respect.\""
          },
          {
            callout: "Gợi ý chấm điểm: Học sinh phát âm chuẩn ngữ điệu, dùng đúng ít nhất 2 cụm từ vựng Unit 5 và 1 cấu trúc should/must sẽ đạt điểm tối đa tiêu chí Ngôn ngữ."
          }
        ]
      }
    ]
  }
];

export const SAMPLE_HTML_DOCUMENTS: HtmlDocument[] = [
  {
    id: "html-bach-dang-interactive",
    titleVi: "Chuyên Đề Tương Tác: Hào Khí Đông A & Trận Thủy Chiến Bạch Đằng 1288",
    titleEn: "Interactive Web Article: The Historic Battle of Bach Dang River",
    category: "Lịch Sử & Vật Lý Thủy Triều",
    readTime: "5 phút đọc",
    badge: "Bài Học Tương Tác HTML5",
    descriptionVi: "Trang web học tập tương tác nhúng bảng số liệu thủy triều, mô phỏng cọc gỗ lim bịt sắt và giải thích khoa học dưới góc độ STEM.",
    previewSnippet: "Khám phá nghệ thuật lợi dụng quy luật bán nhật triều của Vịnh Bắc Bộ và thiên tài quân sự của Quốc công Tiết chế Trần Hưng Đạo...",
    rawHtml: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: 'Segoe UI', system-ui, sans-serif; background: #0b1329; color: #e2e8f0; line-height: 1.6; padding: 24px; margin: 0; }
  h1 { color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 8px; font-size: 22px; }
  h2 { color: #38bdf8; font-size: 17px; margin-top: 20px; }
  .box { background: #1e293b; border-radius: 12px; padding: 16px; margin: 16px 0; border: 1px solid #334155; }
  .badge { background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 4px 10px; border-radius: 9999px; font-weight: bold; font-size: 12px; }
  table { width: 100%; border-collapse: collapse; margin-top: 10px; }
  th, td { border: 1px solid #475569; padding: 8px 12px; text-align: left; font-size: 13px; }
  th { background: #1e293b; color: #38bdf8; }
  .highlight-quote { font-style: italic; background: rgba(56, 189, 248, 0.1); border-left: 4px solid #38bdf8; padding: 12px; margin: 12px 0; }
</style>
</head>
<body>
  <span class="badge">STEAM K8 • Lịch Sử & Vật Lý Biển</span>
  <h1>HÀO KHÍ ĐÔNG A: THIÊN TÀI QUÂN SỰ TRÊN SÔNG BẠCH ĐẰNG (1288)</h1>
  
  <div class="box">
    <h2>1. Góc Nhìn Khoa Học (Science & Physics): Hiện Tượng Bán Nhật Triều</h2>
    <p>Sông Bạch Đằng nằm ở vùng cửa biển Vịnh Bắc Bộ, nơi có chế độ <strong>nhật triều và bán nhật triều</strong> rất đặc biệt: mỗi ngày nước rút và dâng hai lần với biên độ triều chênh lệch lên đến 3.5 - 4.0 mét!</p>
    <div class="highlight-quote">
      "Đoàn thuyền giặc Nguyên Mông với trọng tải nặng hàng chục tấn không thể ngờ rằng mặt nước mênh mông bỗng rút nhanh chỉ trong vài giờ, để lộ ra bãi cọc gỗ lim bịt sắt nhọn hoắt đâm thủng đáy thuyền chiến!"
    </div>
  </div>

  <div class="box">
    <h2>2. Bảng Phân Tích Dưới Lăng Kính STEAM</h2>
    <table>
      <thead>
        <tr>
          <th>Trụ cột STEAM</th>
          <th>Biểu hiện trong Trận Bạch Đằng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong style="color: #38bdf8;">S - Science</strong></td>
          <td>Tính toán chu kỳ thủy triều, lưu tốc dòng chảy khi nước rút.</td>
        </tr>
        <tr>
          <td><strong style="color: #a855f7;">T - Technology</strong></td>
          <td>Kỹ thuật khai thác gỗ lim ngâm nước và kỹ nghệ bịt đầu sắt nhọn.</td>
        </tr>
        <tr>
          <td><strong style="color: #f59e0b;">E - Engineering</strong></td>
          <td>Bố trí trận địa cọc nghiêng 45 độ đón đầu hướng tàu giặc tháo chạy.</td>
        </tr>
        <tr>
          <td><strong style="color: #10b981;">M - Math</strong></td>
          <td>Ước lượng độ sâu lòng sông lúc đỉnh triều và chân triều (delta h ≈ 3.8m).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="box">
    <h2>3. Lời Khuyên Ứng Xử Di Tích (English Unit 5)</h2>
    <p>When visiting Bach Dang National Historic Site, students <strong>must show deep reverence</strong> to our ancestors. Visitors <strong>should listen carefully</strong> to the guide and <strong>shouldn't litter</strong> in the sanctuary.</p>
  </div>
</body>
</html>`
  },
  {
    id: "html-maritime-traditions-guide",
    titleVi: "Sổ Tay Điện Tử HTML: Phong Tục Tập Quán Ngư Dân Biển Đảo Việt Nam",
    titleEn: "Digital Handbook: Maritime Customs & Traditions of Vietnamese Fishermen",
    category: "Văn Hóa & Tiếng Anh",
    readTime: "4 phút đọc",
    badge: "Bài Đọc Song Ngữ HTML5",
    descriptionVi: "Tài liệu trang web giới thiệu Lễ hội Cầu Ngư, Lễ khao lề thế lính Hoàng Sa, và bảng tra cứu đối chiếu văn hóa dành cho học sinh K8.",
    previewSnippet: "Tìm hiểu vẻ đẹp tâm linh nhân văn của ngư dân miền duyên hải qua tín ngưỡng thờ Cá Ông và ngày giỗ thiêng liêng của Hải đội Hoàng Sa...",
    rawHtml: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: 'Segoe UI', system-ui, sans-serif; background: #091224; color: #cbd5e1; line-height: 1.6; padding: 24px; margin: 0; }
  h1 { color: #34d399; border-bottom: 2px solid #34d399; padding-bottom: 8px; font-size: 22px; }
  h2 { color: #f59e0b; font-size: 16px; margin-top: 16px; }
  .card { background: #13223f; border-radius: 12px; padding: 16px; margin-bottom: 16px; border: 1px solid #1e3a6a; }
  .badge { background: rgba(52, 211, 153, 0.2); color: #6ee7b7; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
  .lang-vi { color: #f8fafc; font-weight: 500; }
  .lang-en { color: #94a3b8; font-style: italic; font-size: 13px; margin-top: 4px; }
  .term-chip { display: inline-block; background: #1e293b; border: 1px solid #334155; padding: 3px 8px; border-radius: 6px; font-size: 12px; color: #38bdf8; margin: 2px; }
</style>
</head>
<body>
  <span class="badge">Văn Hóa Dân Gian & Tiếng Anh 8</span>
  <h1>TÍN NGƯỠNG BIỂN ĐẢO: LINH HỒN CỦA DÂN TỘC VIỆT NAM</h1>

  <div class="card">
    <h2>1. Lễ Hội Cầu Ngư & Tục Thờ Cá Ông (Whale Worshipping Ceremony)</h2>
    <p class="lang-vi">Đối với ngư dân dọc dải bờ biển dài hơn 3.260 km, cá voi không đơn thuần là loài động vật biển mà là vị thần cứu tinh (Thần Nam Hải) luôn độ trì cho tàu thuyền khi gặp sóng to gió lớn trong vùng đặc quyền kinh tế (EEZ).</p>
    <p class="lang-en">"Vietnamese fishermen treat whales as benevolent guardians of the sea. Whenever a whale washes ashore, locals hold a solemn ancestral funeral ritual."</p>
    <div style="margin-top: 10px;">
      <span class="term-chip">worshipping ceremony</span>
      <span class="term-chip">benevolent guardian</span>
      <span class="term-chip">ancestral ritual</span>
      <span class="term-chip">exclusive economic zone</span>
    </div>
  </div>

  <div class="card">
    <h2>2. Lễ Khao Lề Thế Lính Hoàng Sa (Lý Sơn - Quảng Ngãi)</h2>
    <p class="lang-vi">Là di sản văn hóa phi vật thể quốc gia, tôn vinh những người lính trong đội Hoàng Sa kiêm quản Trường Sa thời chúa Nguyễn đã dong thuyền buồm ra biển cắm mốc chủ quyền thiêng liêng.</p>
    <p class="lang-en">"This sacred custom honors the heroic maritime soldiers who bravely sailed out to assert national sovereignty over Hoang Sa and Truong Sa archipelagos."</p>
  </div>
</body>
</html>`
  }
];

export const SAMPLE_AUDIO_TRACKS: AudioTrack[] = [
  {
    id: "audio-cau-ngu",
    titleVi: "Audio Guide 01: Lễ Hội Cầu Ngư & Tục Thờ Cá Ông",
    titleEn: "Whale Worship Pavilion & Fishermen's Tradition (EEZ Zone)",
    speaker: "Giọng đọc Tiếng Anh bản xứ (US Native - Chuẩn A2/B1)",
    durationSeconds: 45,
    durationLabel: "00:45",
    theme: "Phong tục Biển Đảo (Unit 5)",
    badge: "Thuyết Minh Song Ngữ",
    transcriptEn: "Welcome to the Whale Worship Pavilion! In Vietnamese coastal culture, fishermen have an ancient custom of worshipping the Whale God as their sacred protector. According to their deep-rooted beliefs, whales often guide lost boats safely back to shore during fierce tropical storms in the Exclusive Economic Zone. When entering this sacred pavilion, visitors should speak respectfully, and you must remove your hats to show reverence to our ancestral tradition.",
    transcriptVi: "Chào mừng quý khách đến với Gian Trưng Bày Tín Ngưỡng Thờ Cá Ông! Trong văn hóa duyên hải Việt Nam, ngư dân có phong tục cổ xưa thờ cúng Thần Cá Voi như vị thần bảo hộ thiêng liêng. Theo niềm tin sâu sắc của họ, cá voi thường cứu giúp thuyền bè bị nạn trở về bờ an toàn trong những cơn bão nhiệt đới dữ dội ở vùng Đặc quyền kinh tế. Khi bước vào gian thờ thiêng liêng này, các bạn nên nói năng nhẹ nhàng, tôn kính và phải cởi mũ để bày tỏ lòng thành kính đối với truyền thống của cha ông.",
    keyVocabulary: [
      { word: "ancient custom", meaning: "phong tục cổ xưa" },
      { word: "sacred protector", meaning: "vị thần bảo hộ thiêng liêng" },
      { word: "show reverence", meaning: "bày tỏ lòng thành kính" },
      { word: "Exclusive Economic Zone (EEZ)", meaning: "Vùng đặc quyền kinh tế" }
    ]
  },
  {
    id: "audio-bach-dang",
    titleVi: "Audio Guide 02: Đại Thắng Bạch Đằng 1288 & Trần Hưng Đạo",
    titleEn: "Supreme Commander Tran Hung Dao & The Bach Dang Victory",
    speaker: "Giọng đọc Lịch sử & Hùng hồn",
    durationSeconds: 52,
    durationLabel: "00:52",
    theme: "Hào Khí Đông A (Nội Thủy)",
    badge: "Lịch Sử Quân Sự",
    transcriptEn: "Stand before the heroic statue of Supreme Commander Tran Hung Dao! In 1288, on the Bach Dang River, the Dai Viet military created one of the greatest maritime victories in world history. By cleverly studying the tidal movements of the Tonkin Gulf, Tran Hung Dao lured the invading Mongol fleet into a forest of iron-tipped wooden stakes. When the tide rapidly receded, the enemy ships were trapped and destroyed. As Grade 8 students, we must remember the brilliant wisdom and patriotism of our ancestors.",
    transcriptVi: "Hãy đứng trước tượng đài anh dũng của Quốc công Tiết chế Trần Hưng Đạo! Năm 1288 trên dòng sông Bạch Đằng, quân dân Đại Việt đã làm nên một trong những chiến thắng thủy chiến vĩ đại nhất trong lịch sử thế giới. Nhờ nghiên cứu kỹ lưỡng quy luật thủy triều của Vịnh Bắc Bộ, Trần Hưng Đạo đã nhử hạm đội thuyền chiến Mông Nguyên vào bãi cọc gỗ lim bịt sắt. Khi thủy triều rút nhanh, thuyền giặc bị mắc cạn và tiêu diệt. Là học sinh lớp 8, chúng ta phải ghi nhớ trí tuệ sáng ngời và lòng yêu nước nồng nàn của tiền nhân.",
    keyVocabulary: [
      { word: "Supreme Commander", meaning: "Quốc công Tiết chế / Tổng chỉ huy" },
      { word: "tidal movements", meaning: "sự chuyển động của thủy triều" },
      { word: "iron-tipped stakes", meaning: "cọc gỗ bịt đầu sắt nhọn" },
      { word: "patriotism", meaning: "lòng yêu nước nồng nàn" }
    ]
  },
  {
    id: "audio-ba-trieu",
    titleVi: "Audio Guide 03: Ý Chí Bà Triệu Cưỡi Sóng Dữ Biển Đông",
    titleEn: "Lady Trieu & The Sacred Oath on the Eastern Sea",
    speaker: "Giọng đọc Truyền Cảm Hứng (Inspirational Voice)",
    durationSeconds: 48,
    durationLabel: "00:48",
    theme: "Nữ Tướng Dân Tộc (Lãnh Hải)",
    badge: "Khí Phách Non Sông",
    transcriptEn: "Here is the Chibi avatar of Lady Trieu, an iconic national heroine in third-century Vietnam! She famously declared: 'I want to ride the fierce wind, trample the treacherous waves, slay the giant whales of the Eastern Sea, and drive out invaders to save my people.' This legendary spirit embodies the timeless courage of the Vietnamese people to protect our sacred coastline and territorial waters. Visitors should reflect upon this unyielding willpower when admiring her statue.",
    transcriptVi: "Đây là hình tượng Chibi của Nữ tướng Bà Triệu, vị nữ anh hùng kiệt xuất thế kỷ thứ III của Việt Nam! Người đã có câu nói lưu danh muôn thuở: 'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá tràng kình ở biển Đông, quét sạch bờ cõi để cứu dân ra khỏi nơi đắm đuối'. Tinh thần huyền thoại này đại diện cho lòng quả cảm bất diệt của người Việt Nam trong việc giữ gìn bờ cõi và lãnh hải thiêng liêng. Khách tham quan nên lắng đọng suy ngẫm về ý chí kiên cường này khi chiêm ngưỡng tượng đài của Người.",
    keyVocabulary: [
      { word: "iconic national heroine", meaning: "vị nữ anh hùng dân tộc tiêu biểu" },
      { word: "treacherous waves", meaning: "những con sóng dữ dội" },
      { word: "territorial waters", meaning: "vùng lãnh hải quốc gia" },
      { word: "unyielding willpower", meaning: "ý chí kiên định bất khuất" }
    ]
  },
  {
    id: "audio-social-etiquette",
    titleVi: "Audio Guide 04: Hướng Dẫn Quy Tắc Ứng Xử Tại Bảo Tàng (Unit 5)",
    titleEn: "Museum Social Etiquette: Should vs Must (Grade 8)",
    speaker: "Giọng đọc Giáo dục (Educational Guide)",
    durationSeconds: 40,
    durationLabel: "00:40",
    theme: "Quy Tắc Văn Minh (Social Etiquette)",
    badge: "Thực Hành Should / Must",
    transcriptEn: "Hello students! Welcome to our Interactive Historical Museum. To ensure a meaningful experience, please observe our etiquette guidelines. You should keep your mobile phones on silent mode and listen attentively to your tour guide. You must not touch any historical artifacts or cross safety barriers. Remember: 'Should' gives friendly advice, while 'Must' expresses a mandatory museum rule. Let's practice both English grammar and good citizenship together!",
    transcriptVi: "Xin chào các em học sinh! Chào mừng các em đến với Bảo tàng Lịch sử Tương tác. Để có một buổi trải nghiệm ý nghĩa, hãy lưu ý các quy tắc ứng xử văn minh. Các em nên để điện thoại ở chế độ im lặng và chú ý lắng nghe hướng dẫn viên. Các em không được phép chạm vào hiện vật hoặc vượt qua hàng rào an toàn. Hãy nhớ: 'Should' dùng để khuyên nhủ lịch sự, còn 'Must' thể hiện quy định bảo tàng bắt buộc. Chúng ta cùng rèn luyện cả ngữ pháp tiếng Anh lẫn tinh thần công dân văn minh nhé!",
    keyVocabulary: [
      { word: "social etiquette", meaning: "quy tắc ứng xử văn minh" },
      { word: "mandatory rule", meaning: "quy tắc bắt buộc" },
      { word: "safety barriers", meaning: "hàng rào an toàn" },
      { word: "listen attentively", meaning: "lắng nghe chăm chú" }
    ]
  }
];
