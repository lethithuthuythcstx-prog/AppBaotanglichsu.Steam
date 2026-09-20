import { ExhibitRoom } from "../types";

export const MUSEUM_ROOMS: ExhibitRoom[] = [
  {
    id: "room-maritime-traditions",
    nameVi: "Gian 1: Biển Đảo & Tín Ngưỡng Dân Gian",
    nameEn: "Hall 1: Maritime Traditions & Ocean Rituals",
    theme: "Lễ hội Cầu Ngư, Lễ Khao lề thế lính Hoàng Sa & Tín ngưỡng bám biển",
    bannerGradient: "from-blue-900 via-cyan-900 to-slate-900",
    items: [
      {
        id: "exhibit-cau-ngu",
        titleVi: "Lễ Hội Cầu Ngư & Tục Thờ Cá Ông",
        titleEn: "Whale Worship Festival (Cau Ngu Ritual)",
        roomId: "room-maritime-traditions",
        maritimeZoneId: "dac-quyen-kinh-te",
        historicalFigureOrTopic: "Ngư dân Việt Nam & Tục Thờ Thần Nam Hải",
        era: "Truyền thống thế kỷ 16 - nay",
        shortDescVi: "Tín ngưỡng độc đáo của ngư dân miền Trung và Nam Bộ tri ân Thần Cá Voi (Đại Càn Quốc Gia Nam Hải) cứu giúp người đi biển trước sóng to bão lớn.",
        shortDescEn: "A profound spiritual belief honoring the Whale God (Ca Ong) who rescues fishermen during fierce ocean storms in their traditional EEZ fishing grounds.",
        dialogueGuide: {
          foreignStudent: "Why do Vietnamese coastal villagers venerate the whale as a divine deity rather than just a sea creature?",
          vietnameseGuide: "In our folklore, the Whale God is a compassionate protector of seafarers. When fishermen brave the offshore fishing grounds in our Exclusive Economic Zone, they rely on sacred rituals for safety and abundant catches. You have to remove your shoes and maintain silence inside the whale temple!"
        },
        audioGuideScript: "Welcome to the Whale Worship Pavilion! Here you can observe the grand whale bone shrine. According to ancient tradition, seafarers have to perform solemn prayers before embarking on deep-sea voyages into our Exclusive Economic Zone. As respectful visitors, we should speak softly, and we shouldn't take flash photographs near the altar. This custom highlights the harmony between Vietnamese fishermen and the marine ecosystem.",
        unit5GrammarFocus: [
          "have to (obligatory custom): Fisherman have to perform prayers before leaving.",
          "should / shouldn't (visitor etiquette): You should speak softly; you shouldn't use flash.",
          "respect (verb): We respect our ocean heritage."
        ],
        vocabulary: [
          {
            word: "worshipping",
            type: "noun/gerund",
            phonetic: "/ˈwɜː.ʃɪp.ɪŋ/",
            meaningVi: "sự thờ cúng, tôn sùng",
            example: "Whale worshipping is a coastal custom in Vietnam."
          },
          {
            word: "offshore fishing",
            type: "noun phrase",
            phonetic: "/ˌɒf.ʃɔː ˈfɪʃ.ɪŋ/",
            meaningVi: "đánh bắt hải sản xa bờ",
            example: "Fishermen conduct offshore fishing in the Exclusive Economic Zone."
          },
          {
            word: "social etiquette",
            type: "noun phrase",
            phonetic: "/ˈsəʊ.ʃəl ˈet.ɪ.ket/",
            meaningVi: "phép lịch sự xã giao, quy tắc ứng xử",
            example: "Visitors must observe proper social etiquette when entering the shrine."
          },
          {
            word: "sacred ritual",
            type: "noun phrase",
            phonetic: "/ˈseɪ.krɪd ˈrɪtʃ.u.əl/",
            meaningVi: "nghi thức thiêng liêng",
            example: "The village elders organize a sacred ritual once a year."
          }
        ],
        chibiPrompt: "A cute cheerful chibi Vietnamese fisherman elder, sparkling lively eyes, gentle smile, wearing a traditional deep indigo ao ba ba with rolled up sleeves, carrying a miniature woven bamboo fishing boat, a friendly glowing baby blue whale jumping out of gentle waves beside him, warm golden sunlight, 3D Disney Pixar animation aesthetic, museum display lighting, 8k resolution --ar 1:1",
        chibiCharacterName: "Bác Ngư Dân Cầu Ngư Chibi",
        chibiDescription: "Tạo hình ông lão ngư dân đôn hậu với trang phục áo bà ba xanh chàm truyền thống, nón lá nghiêng sau lưng và linh vật cá voi con thần thái rực rỡ.",
        steamAspects: {
          science: "Hải dương học và luồng hải lưu Biển Đông tác động đến tập tính di cư của đàn cá voi xanh và cá voi minke.",
          technology: "Thiết bị định vị vệ tinh GPS và máy dò cá hiện đại kết hợp la bàn truyền thống của ngư dân bám biển.",
          engineering: "Kỹ thuật đóng thuyền buồm nan tre xảm dầu rái chịu đựng bão gió biển Đông hàng thế kỷ.",
          art: "Nghệ thuật tạo hình Chibi 3D kết hợp hoa văn sóng nước và tượng đài Cá Ông lăng miếu cổ.",
          math: "Tính toán hải lý (1 NM = 1.852 km) và tọa độ vị trí đánh bắt trong giới hạn 200 hải lý vùng EEZ."
        }
      },
      {
        id: "exhibit-hoang-sa-flotilla",
        titleVi: "Lễ Khao Lề Thế Lính Hoàng Sa (Đảo Lý Sơn)",
        titleEn: "Feast and Commemoration of the Hoang Sa Flotilla Soldiers",
        roomId: "room-maritime-traditions",
        maritimeZoneId: "them-luc-dia",
        historicalFigureOrTopic: "Hải đội Hoàng Sa - Bắc Hải triều Nguyễn",
        era: "Thế kỷ 17 - 19",
        shortDescVi: "Lễ hội tâm linh tri ân những người lính đảo Lý Sơn vâng mệnh triều đình vượt biển đo đạc thủy trình, cắm mốc chủ quyền tại Hoàng Sa và Trường Sa bằng những chiếc thuyền câu đơn sơ.",
        shortDescEn: "A national intangible heritage honoring the brave soldiers of the Hoang Sa Flotilla who sailed on tiny bamboo boats to establish sovereignty over the Paracel and Spratly Islands under the Nguyen Dynasty.",
        dialogueGuide: {
          foreignStudent: "What is the meaning of the small straw effigies and mini wooden boats during this ceremony?",
          vietnameseGuide: "They represent surrogate bodies for the soldiers who ventured into the deep waters of Hoang Sa. Because the sea was fraught with perils, each soldier brought reed mats and bamboo tags. When you view this exhibition, you have to acknowledge their supreme bravery in safeguarding national sovereignty!"
        },
        audioGuideScript: "You are looking at the replica of a Hoang Sa Flotilla vessel from the 18th century. In our history, soldiers had to leave their homeland for six months each year to patrol the archipelago. Today, we should pay deep tribute to their sacrifice. Visitors should understand that sovereignty is preserved through centuries of unwavering courage.",
        unit5GrammarFocus: [
          "have to: The soldiers had to sail in simple wooden boats for months.",
          "should: We should remember their patriotic sacrifices.",
          "break with tradition: Preserving this ritual helps us never break with our heroic traditions."
        ],
        vocabulary: [
          {
            word: "flotilla",
            type: "noun",
            phonetic: "/fləʊˈtɪl.ə/",
            meaningVi: "hải đội, đoàn thuyền quân sự nhỏ",
            example: "The Hoang Sa Flotilla safeguarded the remote islands."
          },
          {
            word: "pay tribute to",
            type: "verb phrase",
            phonetic: "/peɪ ˈtrɪb.juːt tuː/",
            meaningVi: "tỏ lòng thành kính, tri ân",
            example: "Every spring, islanders pay tribute to their heroic ancestors."
          },
          {
            word: "maritime sovereignty",
            type: "noun phrase",
            phonetic: "/ˈmær.ɪ.taɪm ˈsɒv.rɪn.ti/",
            meaningVi: "chủ quyền biển đảo",
            example: "Vietnam consistently upholds its maritime sovereignty under UNCLOS."
          },
          {
            word: "ancestor",
            type: "noun",
            phonetic: "/ˈæn.ses.tər/",
            meaningVi: "tổ tiên, tiền nhân",
            example: "We honor our ancestors who protected our territory."
          }
        ],
        chibiPrompt: "Adorable heroic chibi Vietnamese marine soldier from the 18th century Nguyen Dynasty Hoang Sa flotilla, wearing a traditional deep red conical hat with bronze soldier emblem, hemp cotton uniform with royal crest, holding a small navigation compass and a wooden sovereignty landmark tablet inscribed with ancient characters, ocean and tropical island background, cute 3D Pixar style, cinematic museum spotlight --ar 1:1",
        chibiCharacterName: "Chiến binh Hải đội Hoàng Sa Chibi",
        chibiDescription: "Người lính biển kiên cường triều Nguyễn với nón chóp đỏ thắm, áo lính viền chữ triều đình, tay cầm mộc bài chủ quyền và la bàn cổ.",
        steamAspects: {
          science: "Quan trắc thiên văn học và nhìn chòm sao Bắc Đẩu để định hướng trên biển khơi của các bậc tiền nhân.",
          technology: "Bản đồ cổ 'Đại Nam nhất thống toàn đồ' và tài liệu Hán Nôm ghi chép chi tiết địa mạo biển đảo.",
          engineering: "Kỹ thuật đan thuyền câu năm vách nan tre linh hoạt vượt qua rạn san hô hiểm trở.",
          art: "Mô hình thuyền tế bằng giấy hoa rực rỡ và nộm rơm hình nhân thế mạng đầy tính nghệ thuật dân gian.",
          math: "Cách đo khoảng cách và phương hướng bằng canh giờ và sức gió của các nhà hàng hải Việt Nam cổ xưa."
        }
      }
    ]
  },
  {
    id: "room-bach-dang",
    nameVi: "Gian 2: Hào Khí Đông A - Sông Nước Bạch Đằng",
    nameEn: "Hall 2: The Spirit of Dong A - Bach Dang Naval Battles",
    theme: "Trần Hưng Đạo, trận địa cọc gỗ và nghệ thuật lợi dụng thủy triều sông biển",
    bannerGradient: "from-red-950 via-slate-900 to-amber-950",
    items: [
      {
        id: "exhibit-tran-hung-dao",
        titleVi: "Hưng Đạo Đại Vương Trần Hưng Đạo & Trận Bạch Đằng 1288",
        titleEn: "Supreme Commander Tran Hung Dao & The 1288 Bach Dang Victory",
        roomId: "room-bach-dang",
        maritimeZoneId: "noi-thuy",
        historicalFigureOrTopic: "Hưng Đạo Đại Vương Trần Quốc Tuấn",
        era: "Thế kỷ 13 (Nhà Trần)",
        shortDescVi: "Thiên tài quân sự đỉnh cao kết hợp địa hình sông nước cửa biển Bạch Đằng, quy luật thủy triều Vịnh Bắc Bộ và tinh thần đại đoàn kết toàn dân để đại phá chiến thuyền quân Nguyên Mông.",
        shortDescEn: "A military masterpiece combining tidal geography of the Gulf of Tonkin, iron-tipped wooden stakes, and united national patriotism to shatter the Mongol Yuan naval fleet.",
        dialogueGuide: {
          foreignStudent: "How did Vietnamese forces know the exact hour to lure enemy warships onto the stakes?",
          vietnameseGuide: "They calculated the semi-diurnal tides of the Bach Dang River mouth! You have to appreciate how deep their scientific understanding of coastal hydrology was. At high tide, the stakes were submerged; as the tide ebbed rapidly, the enemy ships were impaled and trapped!"
        },
        audioGuideScript: "Behold the statue of Supreme Commander Tran Hung Dao! In 1288, he orchestrated one of history's greatest naval victories on the Bach Dang River, right in our internal waters. When you visit this memorial gallery, you must treat the historical records with reverence. You should examine the cross-section of the iron-capped ironwood stakes to understand how geography and bravery triumphed together.",
        unit5GrammarFocus: [
          "must (deep historical respect): Visitors must treat the sacred memorial with deep respect.",
          "should / shouldn't: You should study the tidal model; you shouldn't overlook our military science.",
          "patriotic tradition: Honoring national heroes is our essential cultural tradition."
        ],
        vocabulary: [
          {
            word: "national hero",
            type: "noun phrase",
            phonetic: "/ˌnæʃ.ən.əl ˈhɪə.rəʊ/",
            meaningVi: "anh hùng dân tộc",
            example: "Tran Hung Dao is venerated as a supreme national hero."
          },
          {
            word: "wooden stakes",
            type: "noun phrase",
            phonetic: "/ˈwʊd.ən steɪks/",
            meaningVi: "cọc gỗ cắm lòng sông",
            example: "The submerged wooden stakes impaled enemy warships during low tide."
          },
          {
            word: "semi-diurnal tide",
            type: "noun phrase",
            phonetic: "/ˌsem.i.daɪˈɜː.nəl taɪd/",
            meaningVi: "chế độ bán nhật triều (2 lần nước lớn, 2 lần nước ròng mỗi ngày)",
            example: "The commanders calculated the semi-diurnal tide of the river."
          },
          {
            word: "patriotism",
            type: "noun",
            phonetic: "/ˈpæt.ri.ə.tɪ.zəm/",
            meaningVi: "lòng yêu nước",
            example: "Dong A spirit exemplifies boundless Vietnamese patriotism."
          }
        ],
        chibiPrompt: "Brave cute chibi Supreme Commander Tran Hung Dao, smiling resolutely with heroic confidence, wearing intricate 13th century Dai Viet royal golden commander armor with silver dragon shoulder plates, billowing crimson silk cape, holding a military battle strategy scroll in one hand and an ancient carved sword in sheath, Bach Dang river and wooden stakes in background under dramatic sunset sky, high-detail 3D chibi render, Disney Pixar art style --ar 1:1",
        chibiCharacterName: "Tướng Quân Trần Hưng Đạo Chibi",
        chibiDescription: "Tạo hình dũng mãnh, uy nghiêm nhưng vô cùng đáng yêu với giáp rồng thời Trần, áo choàng đỏ thắm và thần thái chỉ huy kiệt xuất.",
        steamAspects: {
          science: "Quy luật bán nhật triều của Vịnh Bắc Bộ (mực nước dâng và rút dao động lên đến 3,5 - 4 mét trong chu kỳ 12 giờ).",
          technology: "Công nghệ xử lý gỗ lim, nghiến ngâm nước mặn để chống hà biển ăn mòn và tăng độ cứng cáp của cọc nhọn.",
          engineering: "Thiết kế góc xiên 45 độ của cọc gỗ hướng ngược dòng nước chảy để đâm thủng đáy thuyền chiến khi nước rút.",
          art: "Nghệ thuật tạo hình chiến binh thời Trần phong cách Chibi sống động với áo choàng đỏ và giáp hộ tâm hoa văn rồng.",
          math: "Tính toán góc cắm cọc, độ sâu lòng sông, tốc độ dòng chảy (vận tốc hải lưu m/s) và chu kỳ thủy triều âm lịch."
        }
      }
    ]
  },
  {
    id: "room-female-warriors",
    nameVi: "Gian 3: Nữ Tướng Nam Bang & Tín Ngưỡng Thờ Mẫu",
    nameEn: "Hall 3: Heroines of Vietnam & Mother Goddess Worship",
    theme: "Bà Triệu, Hai Bà Trưng và Tín ngưỡng Mẫu Thoải (Mẹ Nước / Nữ Thần Biển)",
    bannerGradient: "from-emerald-950 via-teal-950 to-slate-900",
    items: [
      {
        id: "exhibit-ba-trieu",
        titleVi: "Nữ Tướng Triệu Thị Trinh (Bà Triệu) & Lời Thề Cưỡi Ngọn Sóng Dữ",
        titleEn: "Lady Trieu (Trieu Thi Trinh) & The Vow to Ride the Fierce Waves",
        roomId: "room-female-warriors",
        maritimeZoneId: "lanh-hai",
        historicalFigureOrTopic: "Nữ Tướng Triệu Thị Trinh (226 - 248)",
        era: "Thế kỷ 3",
        shortDescVi: "Khí phách ngút trời của Bà Triệu với câu nói bất hủ: 'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá tràng kình ở biển Đông, lấy lại giang sơn...'",
        shortDescEn: "The indomitable spirit of Lady Trieu, who famously vowed: 'I want to ride the strong breeze, tread the fierce waves, slay the giant whales in the East Sea, and reclaim our nation...'",
        dialogueGuide: {
          foreignStudent: "Why did Lady Trieu use the ocean metaphor of riding the fierce waves and slaying giant whales in her famous pledge?",
          vietnameseGuide: "Because the sea has always symbolized both immense challenge and untamable Vietnamese resilience! Even in the 3rd century, Vietnamese consciousness was deeply anchored in the maritime world of the East Sea."
        },
        audioGuideScript: "Welcome to the gallery of Lady Trieu! Notice the golden elephant statue behind her. She led heroic resistance battles at the age of only nineteen. In Vietnamese cultural traditions, we have to honor female leadership and patriotism. Visitors should reflect on her pledge: 'I wish to ride the fierce gale and tread the furious waves!' We shouldn't forget the vital role of Vietnamese women in shaping our national destiny.",
        unit5GrammarFocus: [
          "have to: We have to honor our female leaders who protected the homeland.",
          "should: Visitors should reflect on Lady Trieu's heroic words.",
          "gender equality custom: Vietnamese tradition deeply respects matrilineal strength."
        ],
        vocabulary: [
          {
            word: "indomitable spirit",
            type: "noun phrase",
            phonetic: "/ɪnˈdɒm.ɪ.tə.bəl ˈspɪr.ɪt/",
            meaningVi: "tinh thần bất khuất",
            example: "Lady Trieu demonstrated an indomitable spirit."
          },
          {
            word: "slay the fierce waves",
            type: "verb phrase",
            phonetic: "/sleɪ ðə fɪəs weɪvz/",
            meaningVi: "đạp bằng sóng dữ",
            example: "Her pledge speaks of treading fierce waves in the East Sea."
          },
          {
            word: "respect for ancestors",
            type: "noun phrase",
            phonetic: "/rɪˈspekt fɔː ˈæn.ses.təz/",
            meaningVi: "lòng tôn kính tổ tiên",
            example: "Showing respect for ancestors is central to Vietnamese customs."
          },
          {
            word: "heroine",
            type: "noun",
            phonetic: "/ˈher.əʊ.ɪn/",
            meaningVi: "nữ anh hùng",
            example: "Lady Trieu is celebrated as a great national heroine."
          }
        ],
        chibiPrompt: "Courageous majestic cute chibi Vietnamese warrior heroine Lady Trieu (Ba Trieu), wearing vibrant yellow silk tunic with flying warrior sash, golden battle headband, holding twin curved broadswords gracefully, riding a cute miniature white war elephant with ornate harness, ocean waves and ancient mountain fortress in background, charming 3D Disney Pixar character style, bright inspirational lighting, 8k --ar 1:1",
        chibiCharacterName: "Nữ Tướng Bà Triệu Chibi",
        chibiDescription: "Tạo hình oai phong lẫm liệt trên lưng voi trắng, áo bà ba lụa vàng rực rỡ, hai thanh kiếm vút cao sẵn sàng vượt sóng dữ.",
        steamAspects: {
          science: "Hệ sinh thái rừng ngập mặn và động lực học bão nhiệt đới vùng biển Bắc Trung Bộ nơi cuộc khởi nghĩa diễn ra.",
          technology: "Nghệ thuật đúc vũ khí đồng và kiếm thép thời kỳ đầu Công nguyên.",
          engineering: "Chiến thuật huấn luyện và điều khiển đàn voi chiến hành quân qua địa hình sình lầy duyên hải.",
          art: "Màu áo vàng biểu tượng của quyền uy và sự tự do kết hợp tạo hình Chibi thân thiện với lứa tuổi học đường.",
          math: "Tính toán tốc độ di chuyển của đội quân cơ động voi chiến trên địa hình dốc núi và đường ven biển."
        }
      }
    ]
  },
  {
    id: "room-customs-traditions",
    nameVi: "Gian 4: Phong Tục, Tập Quán & Quy Tắc Ứng Xử (Unit 5)",
    nameEn: "Hall 4: Customs, Traditions & Social Etiquette",
    theme: "Unit 5: Customs and Traditions - Social Etiquette, Worship, Should/Shouldn't, Have to/Must",
    bannerGradient: "from-amber-950 via-slate-900 to-rose-950",
    items: [
      {
        id: "exhibit-museum-etiquette",
        titleVi: "Quy Tắc Văn Hóa Ứng Xử Khi Tham Quan Bảo Tàng & Đền Đài",
        titleEn: "Cultural Etiquette & Museum Visiting Customs (Unit 5 Focus)",
        roomId: "room-customs-traditions",
        maritimeZoneId: "noi-thuy",
        historicalFigureOrTopic: "Phong tục ứng xử & Văn hóa tôn nghiêm Việt Nam",
        era: "Đương đại & Truyền thống",
        shortDescVi: "Bộ quy tắc ứng xử chuẩn mực (Social Etiquette) của học sinh và du khách khi tham quan không gian văn hóa lịch sử, ứng dụng trực tiếp ngữ pháp Should/Must lớp 8.",
        shortDescEn: "Standard social etiquette when visiting historical halls and seaside shrines, directly applying Grade 8 modal verbs (should/shouldn't, have to/must).",
        dialogueGuide: {
          foreignStudent: "What should foreign visitors keep in mind when exploring a Vietnamese historical museum?",
          vietnameseGuide: "First, you have to dress modestly when stepping into ancestral memorial chambers. You should take notes and ask questions respectfully. You shouldn't touch the glass displays or lean on ancient wooden relics. It's our custom to bow slightly to show gratitude to the heroes!"
        },
        audioGuideScript: "Hello young museum curators! Unit 5 teaches us about customs and traditions. In a museum, there are important rules: You must silence your mobile phones. Visitors should walk at a gentle pace and listen to the audio guide through headphones. You shouldn't leave food or drinks inside the exhibition halls. By following these rules, you show true respect for cultural heritage.",
        unit5GrammarFocus: [
          "must / have to (rules): You must silence your phones. You have to dress politely.",
          "should / shouldn't (advice): You should take notes; you shouldn't touch the relics.",
          "social etiquette: Good social etiquette reflects a civilized visitor."
        ],
        vocabulary: [
          {
            word: "social etiquette",
            type: "noun",
            phonetic: "/ˈsəʊ.ʃəl ˈet.ɪ.ket/",
            meaningVi: "quy tắc ứng xử lịch sự trong xã hội",
            example: "Observing social etiquette is essential at historical places."
          },
          {
            word: "dress modestly",
            type: "verb phrase",
            phonetic: "/dres ˈmɒd.ɪst.li/",
            meaningVi: "ăn mặc lịch sự, kín đáo",
            example: "Visitors must dress modestly in memorial halls."
          },
          {
            word: "break with tradition",
            type: "idiom/phrase",
            phonetic: "/breɪk wɪð trəˈdɪʃ.ən/",
            meaningVi: "phá vỡ truyền thống, đi ngược tập quán",
            example: "We should preserve our heritage without breaking with good traditions."
          },
          {
            word: "ancestral veneration",
            type: "noun phrase",
            phonetic: "/ænˈses.trəl ˌven.ərˈeɪ.ʃən/",
            meaningVi: "tục thờ kính tổ tiên",
            example: "Ancestral veneration teaches young generations to be grateful."
          }
        ],
        chibiPrompt: "Two cute Vietnamese 8th-grade student curators (a boy and a girl), wearing neat navy and white school uniforms with red neckerchiefs, friendly enthusiastic expressions, holding an interactive tablet displaying a 3D historical museum sitemap, standing inside a warm museum hall adorned with bronze drums and lotus flowers, 3D Disney Pixar style, soft ambient illumination, 8k --ar 1:1",
        chibiCharacterName: "Cặp Đôi Giám Tuyển Học Sinh Lớp 8 Chibi",
        chibiDescription: "Hai bạn học sinh lớp 8 trong trang phục học sinh chỉn chu, đeo khăn quàng đỏ, tay cầm máy tính bảng trình chiếu bảo tàng ảo với thần thái tự tin, mến khách.",
        steamAspects: {
          science: "Khoa học bảo quản hiện vật: Kiểm soát nhiệt độ 22-24°C và độ ẩm 50-55% để bảo vệ tài liệu cổ.",
          technology: "Ứng dụng mã QR, công nghệ Audio Guide tự động và thực tế ảo AR tái hiện hiện vật lịch sử.",
          engineering: "Thiết kế luồng di chuyển một chiều (one-way flow) tránh ùn tắc và tối ưu hóa trải nghiệm khách tham quan.",
          art: "Thiết kế bảng chú thích (museum caption) hài hòa giữa chữ viết, biểu tượng và hình vẽ Chibi.",
          math: "Tính toán khoảng cách tầm mắt (1.4m - 1.6m) và góc chiếu sáng 45 độ để chống lóa mắt người xem."
        }
      }
    ]
  }
];
