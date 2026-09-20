import { MaritimeZone } from "../types";

export const VIETNAM_MARITIME_ZONES: MaritimeZone[] = [
  {
    id: "noi-thuy",
    nameVi: "Nội thủy",
    nameEn: "Internal Waters",
    breadth: "Phía trong đường cơ sở (Landward side of baseline)",
    legalBasis: "Điều 9 & 10 Luật Biển Việt Nam 2012; Điều 8 UNCLOS 1982",
    descriptionVi: "Vùng nước tiếp giáp với bờ biển, ở phía trong đường cơ sở dùng để tính chiều rộng lãnh hải. Bao gồm các vũng vịnh, cửa sông, và các vùng nước được khép kín bởi đường cơ sở.",
    descriptionEn: "Waters on the landward side of the baseline of the territorial sea. Forms an integral part of the land territory.",
    sovereigntyLevelVi: "Chủ quyền hoàn toàn, tuyệt đối và đầy đủ như đối với lãnh thổ đất liền. Tàu nước ngoài muốn vào phải xin phép.",
    sovereigntyLevelEn: "Complete, absolute sovereignty identical to land territory. Foreign vessels require prior permission to enter.",
    keyActivities: [
      "Quản lý cảng biển nội địa và hàng hải",
      "Khai thác nuôi trồng thủy sản ven bờ",
      "Bảo vệ an ninh quốc phòng tuyệt đối"
    ],
    keyResources: ["Thủy hải sản ven bờ", "Khoáng sản sa khoáng ven biển", "Vịnh nước sâu làm cảng (Cam Ranh, Hải Phòng)"],
    unit5Connection: "Truyền thống xây dựng làng chài ven biển, tín ngưỡng dựng đình miếu tạ ơn thần biển tại các cửa sông lạch.",
    color: "from-blue-600 to-cyan-500",
    iconName: "Anchor"
  },
  {
    id: "lanh-hai",
    nameVi: "Lãnh hải",
    nameEn: "Territorial Sea",
    breadth: "12 hải lý (khoảng 22,224 km) tính từ đường cơ sở",
    legalBasis: "Điều 11 & 12 Luật Biển Việt Nam 2012; Điều 3 UNCLOS 1982",
    descriptionVi: "Vùng biển có chiều rộng 12 hải lý tính từ đường cơ sở ra phía ngoài. Ranh giới ngoài của lãnh hải là đường biên giới quốc gia trên biển của Việt Nam.",
    descriptionEn: "A belt of coastal waters extending at most 12 nautical miles from the baseline. Outer limit constitutes the national maritime boundary.",
    sovereigntyLevelVi: "Chủ quyền đầy đủ và toàn vẹn đối với vùng biển, vùng trời trên lãnh hải, cũng như đáy biển và lòng đất dưới đáy biển. Tàu thuyền nước ngoài được hưởng quyền đi qua không gây hại (innocent passage).",
    sovereigntyLevelEn: "Full national sovereignty over waters, airspace above, seabed, and subsoil. Foreign ships enjoy right of innocent passage.",
    keyActivities: [
      "Bảo vệ chủ quyền biên giới quốc gia trên biển",
      "Tuần tra thực thi pháp luật hàng hải của Cảnh sát biển & Hải quân",
      "Đánh bắt hải sản truyền thống của ngư dân"
    ],
    keyResources: ["Rạn san hô", "Cá nổi và cá đáy ven bờ", "Tiềm năng du lịch biển đảo"],
    unit5Connection: "Phong tục cúng Thần Sóng, xuất quân bảo vệ bờ cõi từ thời Đại Việt và các hải đội thời nhà Nguyễn.",
    color: "from-cyan-600 to-teal-500",
    iconName: "Shield"
  },
  {
    id: "tiep-giap-lanh-hai",
    nameVi: "Vùng tiếp giáp lãnh hải",
    nameEn: "Contiguous Zone",
    breadth: "12 hải lý tiếp liền lãnh hải (tối đa 24 hải lý từ đường cơ sở)",
    legalBasis: "Điều 13 & 14 Luật Biển Việt Nam 2012; Điều 33 UNCLOS 1982",
    descriptionVi: "Vùng biển tiếp liền và nằm ngoài lãnh hải Việt Nam, có chiều rộng 12 hải lý hợp với lãnh hải thành một vùng biển rộng 24 hải lý tính từ đường cơ sở.",
    descriptionEn: "Zone contiguous to the territorial sea extending up to 24 nautical miles from baseline for specific enforcement jurisdictions.",
    sovereigntyLevelVi: "Nhà nước thực hiện quyền tài phán và kiểm soát cần thiết để ngăn ngừa và trừng trị các vi phạm pháp luật về hải quan, thuế khóa, y tế, hoặc di cư trên lãnh thổ hoặc trong lãnh hải.",
    sovereigntyLevelEn: "Control necessary to prevent and punish infringement of customs, fiscal, immigration, or sanitary laws within its territory or territorial sea.",
    keyActivities: [
      "Kiểm soát chống buôn lậu, gian lận thương mại trên biển",
      "Kiểm dịch y tế phòng chống dịch bệnh xâm nhập",
      "Kiểm soát dòng người xuất nhập cảnh và an ninh hàng hải"
    ],
    keyResources: ["Đường hàng hải tấp nập", "Ngư trường bãi cạn", "Môi trường sinh thái biển"],
    unit5Connection: "Văn hóa giao lưu tiếp xúc văn hóa hàng hải, các trạm hải đăng cổ bảo vệ thương thuyền quốc tế cập bến.",
    color: "from-teal-600 to-emerald-500",
    iconName: "Search"
  },
  {
    id: "dac-quyen-kinh-te",
    nameVi: "Vùng đặc quyền kinh tế (EEZ)",
    nameEn: "Exclusive Economic Zone (EEZ)",
    breadth: "200 hải lý (khoảng 370,4 km) tính từ đường cơ sở",
    legalBasis: "Điều 15 & 16 Luật Biển Việt Nam 2012; Phần V UNCLOS 1982",
    descriptionVi: "Vùng biển tiếp liền và nằm ngoài lãnh hải Việt Nam, hợp với lãnh hải thành một vùng biển có chiều rộng 200 hải lý tính từ đường cơ sở.",
    descriptionEn: "Area beyond and adjacent to territorial sea extending up to 200 nautical miles from baseline, granting sovereign economic rights.",
    sovereigntyLevelVi: "Quyền chủ quyền về thăm dò, khai thác, quản lý và bảo tồn tài nguyên sinh vật và phi sinh vật; quyền tài phán về lắp đặt đảo nhân tạo, nghiên cứu khoa học biển, và bảo vệ môi trường biển. Các quốc gia khác được quyền tự do hàng hải và hàng không.",
    sovereigntyLevelEn: "Sovereign rights to explore, exploit, conserve, and manage living and non-living natural resources; jurisdiction regarding marine scientific research and artificial installations.",
    keyActivities: [
      "Ngư dân vươn khơi bám biển dài ngày đánh bắt xa bờ",
      "Khảo sát địa chất khoáng sản và tiềm năng năng lượng tái tạo (gió ngoài khơi)",
      "Thiết lập các giàn khoan khai thác dầu khí và trạm dịch vụ hàng hải"
    ],
    keyResources: ["Trữ lượng cá ngừ đại dương, mực, hải sản quý", "Trầm tích đáy biển", "Tài nguyên năng lượng gió và sóng biển"],
    unit5Connection: "Lễ hội Cầu Ngư (Cá Ông), Lễ khao lề thế lính Hoàng Sa (tri ân những người lính vượt sóng gió đo đạc cắm mốc chủ quyền từ thế kỷ 17).",
    color: "from-indigo-600 to-blue-500",
    iconName: "Fish"
  },
  {
    id: "them-luc-dia",
    nameVi: "Thềm lục địa",
    nameEn: "Continental Shelf",
    breadth: "Đáy biển & lòng đất dưới đáy biển ít nhất 200 hải lý, có thể mở rộng đến 350 hải lý",
    legalBasis: "Điều 17 & 18 Luật Biển Việt Nam 2012; Phần VI UNCLOS 1982",
    descriptionVi: "Đáy biển và lòng đất dưới đáy biển của khu vực ngầm dưới biển kéo dài tự nhiên từ lãnh thổ đất liền ra đến bờ ngoài của rìa lục địa, tối thiểu 200 hải lý tính từ đường cơ sở.",
    descriptionEn: "The seabed and subsoil of the submarine areas extending beyond territorial sea throughout the natural prolongation of its land territory.",
    sovereigntyLevelVi: "Quyền chủ quyền hoàn toàn về thăm dò và khai thác tài nguyên thiên nhiên phi sinh vật (dầu mỏ, khí đốt) và sinh vật thuộc loài định cư (sinh vật sống không thể di chuyển mà không tiếp xúc với đáy biển). Quyền này mang tính độc quyền: nếu Việt Nam không khai thác thì không ai có quyền khai thác nếu không có sự đồng ý của Việt Nam.",
    sovereigntyLevelEn: "Exclusive sovereign rights for exploring and exploiting mineral, non-living resources, and sedentary living species on seabed and subsoil.",
    keyActivities: [
      "Khai thác mỏ dầu Bạch Hổ, Đại Hùng, Lan Tây, Rồng Đôi...",
      "Nghiên cứu địa mạo ngầm và trầm tích học biển",
      "Lắp đặt đường ống dẫn dầu khí và cáp quang biển quốc tế"
    ],
    keyResources: ["Dầu thô và khí đốt tự nhiên", "Cát thủy tinh, khoáng sản kim loại ngầm", "Sinh vật định cư đáy biển (ngọc trai, san hô, hải sâm)"],
    unit5Connection: "Biểu tượng lòng kiên trung gìn giữ tấc đất tấc biển mà cha ông đã truyền qua bao thế hệ, sự kết hợp giữa truyền thống và công nghệ hiện đại.",
    color: "from-amber-600 to-orange-500",
    iconName: "Layers"
  }
];

export const VIETNAM_EAST_SEA_FACTS = {
  seaNameVi: "Biển Đông",
  seaNameEn: "East Sea (South China Sea)",
  area: "Khoảng 3,5 triệu km² (biển lớn thứ hai ở Thái Bình Dương)",
  vietnamCoastline: "Hơn 3.260 km trải dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang)",
  islandsCount: "Hơn 4.000 hòn đảo lớn nhỏ ven bờ và hai quần đảo xa bờ Hoàng Sa và Trường Sa",
  coastalProvinces: "28 tỉnh và thành phố trực thuộc Trung ương giáp biển",
  internationalSignificance: "Tuyến hàng hải huyết mạch toàn cầu kết nối Ấn Độ Dương và Thái Bình Dương, chiếm hơn 50% khối lượng thương mại hàng hải thế giới đi qua."
};
