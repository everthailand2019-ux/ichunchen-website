/* =============================================================
   Bilingual (English / 繁體中文) content + language toggle.
   Each [data-i18n="key"] element is filled from DICT[lang][key].
   To edit copy, change the strings below — structure stays in HTML.
   ============================================================= */
(function () {
  "use strict";

  var DICT = {
    en: {
      "doc.title": "Dr. I-Chun Isabelle Chen",
      "brand": "Dr. I-Chun Isabelle Chen",

      "nav.lab": "Lab",
      "nav.about": "About", "nav.research": "Research", "nav.publications": "Publications",
      "nav.teaching": "Teaching", "nav.awards": "Awards", "nav.service": "Service",
      "nav.blog": "Blog", "nav.contact": "Contact",

      "hero.eyebrow": "The Climate–Care Nexus in Ageing Societies",
      "hero.name": "I-Chun Isabelle Chen",
      "hero.subname": "PhD · Public Health &amp; Gerontology",
      "hero.lede": "I measure and govern care continuity for older adults under climate risk across Asia — and translate that evidence for Europe.",
      "hero.sub": "A public-health and gerontology researcher working at the intersection of climate change, healthy ageing, and long-term care across East and Southeast Asia — building the Climate–Care Nexus Index (CCNI) for age-inclusive, climate-resilient communities.",
      "hero.role1": "Postdoctoral Fellow · <b>Chulalongkorn University</b>",
      "hero.role2": "Incoming Assistant Professor · <b>NCKU</b>",
      "hero.role3": "Visiting Fellow · <b>University of West London</b>",
      "hero.role4": "Founding Convener · <b>Inter-CARE</b>",
      "link.email": "Email",

      "about.kicker": "關於我", "about.title": "About",
      "about.intro": "Dr. I-Chun Isabelle Chen studies the climate–care nexus in ageing societies. She develops the CVCVI and ICE measurement instruments, builds disaster–long-term-care evidence across Asia, and translates it for European and ASEAN policy.",
      "about.colAppt": "Appointments", "about.colEdu": "Education",

      "appt.curPill": "Current · 2026–", "appt.curTitle": "Postdoctoral Fellow",
      "appt.curOrg": "College of Population Studies", "appt.curPlace": "Chulalongkorn University · Bangkok, Thailand",
      "appt.incPill": "Incoming · Feb 2027", "appt.incTitle": "Assistant Professor",
      "appt.incOrg": "Institute of Gerontology, College of Medicine", "appt.incPlace": "National Cheng Kung University · Tainan, Taiwan",
      "appt.tudPill": "Sep–Dec 2026", "appt.tudTitle": "Visiting Researcher",
      "appt.tudOrg": "Chair of Social Structure & Sociology of Ageing Societies (Prof. Dr. Martina Brandt)", "appt.tudPlace": "TU Dortmund University · Dortmund, Germany",
      "appt.uwlPill": "2025–", "appt.uwlTitle": "Visiting Fellow",
      "appt.uwlOrg": "Geller Institute of Ageing and Memory", "appt.uwlPlace": "University of West London · London, UK",
      "about.also": "Also <b>Adjunct Assistant Professor</b> at the University of the Thai Chamber of Commerce (2024–) and Ming Chuan University (2024–); and <b>Member</b> of the German Society for Gerontology and Geriatrics (DGGG). Fieldwork across Japan, Taiwan and Thailand, with policy translation for Germany and ASEAN.",

      "edu1.t": "Postdoctoral research training", "edu1.s": "Harvard T.H. Chan School of Public Health — with Prof. Ichiro Kawachi",
      "edu2.t": "PhD, Public Health", "edu2.s": "Chulalongkorn University · <span class='prize'>Very Good Dissertation Prize</span>",
      "edu3.t": "PhD, Sport, Leisure & Hospitality Management", "edu3.s": "National Taiwan Normal University",
      "edu4.t": "MBA, International Human Resource Management", "edu4.s": "National Taiwan Normal University",
      "edu5.t": "MEd, Civic Education & Leadership", "edu5.s": "National Taiwan Normal University",
      "edu6.t": "BA, German Language & Culture", "edu6.s": "Soochow University",

      "bio.title": "Biography",
      "bio.p1": "Chen studies how extreme heat and disasters sever the continuity of care for older adults, and develops cross-culturally comparable instruments and policy-evaluation frameworks. Her fieldwork spans Taiwan, Thailand, Japan, Germany and the United Kingdom, in long-term collaboration with community organisations, faith-based charity networks and long-term-care systems.",
      "bio.p2": "She builds the CVCVI (Climate–Care Capacity and Vulnerability Index) and the ICE family of climate-emotion scales, drawing on Taiwan's National Health Insurance Research Database and four waves of Thailand's HART national ageing panel to trace how disasters interrupt long-term-care services and shape older adults' health. From February 2027 she joins the Institute of Gerontology, National Cheng Kung University.",

      "lang.kicker": "語言與區域經驗", "lang.title": "Languages",
      "lang1.n": "Mandarin Chinese", "lang1.v": "NATIVE", "lang1.u": "Taiwan fieldwork, NHIRD analysis, scale translation",
      "lang2.n": "English", "lang2.v": "PROFESSIONAL", "lang2.u": "Publication, teaching, international networks",
      "lang3.n": "Thai", "lang3.v": "WORKING", "lang3.u": "HART panel research, Bangkok fieldwork & teaching",
      "lang4.n": "German", "lang4.v": "WORKING", "lang4.u": "German long-term-care policy translation",
      "lang5.n": "Japanese", "lang5.v": "BASIC", "lang5.u": "Japan comparative long-term-care collaboration",

      "ri.kicker": "研究主題", "ri.title": "Research Interests",
      "ri.t1": "Climate–care nexus", "ri.t2": "Gerontology", "ri.t3": "Disaster resilience",
      "ri.t4": "Long-term-care policy", "ri.t5": "Composite indicators", "ri.t6": "Cross-cultural psychometrics",
      "pl.kicker": "研究四大主軸", "pl.title": "Four Research Pillars",
      "pl1.n": "01 — Instruments", "pl1.h": "Measuring vulnerability", "pl1.p": "<span class='code'>CVCVI</span> — the Climate–Care Capacity and Vulnerability Index — integrates climate vulnerability, long-term-care adequacy and community resilience to OECD / JRC composite-indicator standards.",
      "pl2.n": "02 — Climate emotions", "pl2.h": "Mind in a warming world", "pl2.p": "The <span class='code'>ICE</span> instrument family measures climate-related emotions and mental health in later life, validated across Chinese, Thai and English.",
      "pl3.n": "03 — Longitudinal evidence", "pl3.h": "Cohorts & panels", "pl3.p": "Disaster–long-term-care cohorts linked to Taiwan's NHIRD (Typhoon Morakot, Chi-Chi earthquake), 368 townships, a four-city Asian proof-of-concept, and four waves of Thailand's HART ageing panel.",
      "pl4.n": "04 — Governance & translation", "pl4.h": "Care as infrastructure", "pl4.p": "Community and faith-based networks — including the Tzu Chi Foundation — as resilience infrastructure, translated for German long-term-care reform and the ASEAN agenda.",

      "pub.kicker": "著作列表", "pub.title": "Publications",
      "pub.intro": "23 published or accepted works spanning planetary health, gerontology, disaster risk reduction and long-term care policy.",
      "pub.accepted": "Accepted for Publication", "pub.articles": "Published Journal Articles", "pub.chapters": "Published Book Chapters",

      "te.kicker": "教學與指導", "te.title": "Teaching & Supervision",
      "te.intro": "Teaching across public health, gerontology and international programmes in Thailand and Taiwan — moving from measurement to policy, built on live projects students can work with directly.",
      "te.themesH": "Course & lecture themes",
      "te.th1": "Climate change, extreme heat & older adults' health", "te.th2": "Comparative long-term-care policy",
      "te.th3": "Community resilience & disaster response", "te.th4": "Composite indicator construction",
      "te.th5": "Cross-cultural scale validation", "te.th6": "Research design for cross-national ageing studies",
      "te.supH": "Supervision", "te.supWhere": "From February 2027 · Institute of Gerontology, National Cheng Kung University",
      "te.supP": "Welcoming master's and doctoral students interested in the climate–care nexus, long-term-care policy, disaster resilience and psychometric instrument development. Possible thesis directions:",
      "te.b1": "Extreme heat exposure and long-term-care service interruption",
      "te.b2": "Validating climate-emotion measures in a new language or population",
      "te.b3": "Subnational climate–care vulnerability indices for a chosen country",
      "te.b4": "Faith-based and community organisations as disaster care infrastructure",
      "te.b5": "Comparative long-term-care financing under climate stress",
      "te.note": "Prospective students are welcome to write with a CV, transcript and a short statement of research interests.",

      "aw.kicker": "獎助與榮譽", "aw.title": "Grants, Fellowships & Honours",
      "aw1.t": "Second Century Fund (C2F) Postdoctoral Fellowship", "aw1.s": "Chulalongkorn University",
      "aw2.t": "Toyota Foundation International Grant Programme", "aw2.s": "Co-applicant with Prof. Rajib Shaw, Keio University SFC",
      "aw3.t": "Very Good Dissertation Prize", "aw3.s": "Chulalongkorn University, PhD in Public Health",
      "aw4.t": "Postdoctoral research training", "aw4.s": "Harvard T.H. Chan School of Public Health, with Prof. Ichiro Kawachi",
      "aw5.t": "Overseas Research Experience Scholarship", "aw5.s": "Chulalongkorn University",
      "aw6.t": "Government Scholarship for Overseas Study", "aw6.s": "Ministry of Education, Taiwan",

      "sv.kicker": "學術服務與影響", "sv.title": "Service, Editorial & Convening",
      "sv.c1h": "Convening & talks",
      "sv.c1a": "<b>Founding Convener</b>, <a href=\"https://sites.google.com/view/inter-care--network/home\" target=\"_blank\" rel=\"noopener\">Inter-CARE</a> — International Network on Climate, Ageing and Resilience Research",
      "sv.c1b": "Symposium and policy-dialogue participation across ASEAN long-term-care agendas",
      "sv.c1c": "Conference presentations on climate emotions, disaster resilience and community care",
      "sv.c2h": "Editorial & peer review",
      "sv.c2a": "<b>Series Editor</b>, Springer Nature — <i>International Perspectives on Aging</i>",
      "sv.c2b": "Peer reviewer across gerontology, public health and disaster-studies journals",
      "sv.c3h": "Policy engagement",
      "sv.c3a": "Translation of findings for German long-term-care reform debates",
      "sv.c3b": "Contributions to ASEAN regional long-term-care policy dialogue",
      "sv.c3c": "Collaboration with community and faith-based care networks, including the Tzu Chi Foundation",

      "nav.talks": "Talks",
      "tk.kicker": "演講與發表", "tk.title": "Selected Talks & Presentations",
      "tk.intro": "Invited lectures, conference presentations and training facilitation across climate-care, disaster resilience and ageing research.",
      "tk1.t": "Session Convener — GS10.2 \"From indicator to institution: climate resilience governance in ageing societies across scales\"",
      "tk1.m": "EGU General Assembly 2027 · Vienna · 27 Apr – 2 May 2027 (upcoming, with Prof. Dr. Martina Brandt)",
      "tk2.t": "Invited lecture — \"Small-Scale Dementia Care Across Ageing Societies: A Fiscal-Governance Perspective on Affordability and Access\"",
      "tk2.m": "MSc Dementia Studies · Geller Institute of Ageing and Memory, University of West London · 20 Nov 2026",
      "tk3.t": "Invited research presentation to the CARE (Climate, Aging, and Relationships) research group",
      "tk3.m": "Brandenburg Medical School Theodor Fontane · Rüdersdorf bei Berlin · 12 Nov 2026",
      "tk4.t": "\"Transferable Enablers for Community-Based Integrated Care Across Welfare Regimes\" (Germany, Japan, Thailand)",
      "tk4.m": "Poster · 3. Bochumer Symposium für Diversitätsmedizin · Ruhr University Bochum · 4 Nov 2026",
      "tk5.t": "\"Whose climate distress counts? Emotional inequality and health services in Taiwan\"",
      "tk5.m": "ISEE 2026 Annual Conference · Munich · 30 Aug – 2 Sep 2026 (#484)",
      "tk6.t": "\"Framing Trusted Agents and Community Disaster Resilience for Older Persons\"",
      "tk6.m": "Invited national online training · Department of Older Persons, Ministry of Social Development and Human Security, Thailand · 26 Aug 2026",
      "tk7.t": "Co-lead — Climate Resilience Community Training Programme",
      "tk7.m": "Ayutthaya, Thailand · 22 Apr 2026 · 150 older adults engaged",
      "tk8.t": "\"Economic Sustainability of Community-Based Long-Term Care for Aging Populations\"",
      "tk8.m": "Global GLO-JOPE Conference 2025 · Global Labor Organization & Journal of Population Economics · Bonn, Germany · 3–5 Dec 2025",
      "tk9.t": "\"Digital Divide and Disaster Vulnerability: Older Adults in the 2025 Hualien Mata'an River Flood\"",
      "tk9.m": "24th Public Affairs Conference · Fo Guang University · Yilan, Taiwan · Nov 2025",
      "tk10.t": "\"Dementia Interventions in ASEAN Countries: Evidence and Policy Implications\"",
      "tk10.m": "Invited lecture · MSc Dementia Studies · Geller Institute of Ageing and Memory, University of West London · 2025",

      "pub.editedBooks": "Edited Books",
      "eb1.t": "Climate Change, Healthy Ageing, and Resilient Communities in the Asia-Pacific: Evidence, Policy, and Practice across Diverse Health Systems",
      "eb1.m": "Co-edited with Ruttiya Bhula-or · <em>International Perspectives on Aging</em> series · Springer Nature · forthcoming · 15 chapters across 5 parts",

      "lab.kick": "An independent research unit", "lab.zh": "A research platform for ageing resilience across Asia and Europe",
      "lab.p": "A research platform for climate resilience, ageing and continuity of care across Asia and Europe — spanning policy diagnostics, NGO partnership models, and intergenerational community design.",
      "lab.note": "Founded and directed by Dr. I-Chun Isabelle Chen as an independent research unit, working with partners across Asia and Europe.",

      "blog.kicker": "最新動態", "blog.title": "News & Blog",
      "blog.intro": "Research updates, publications, conference talks, and academic milestones from the Climate Care Lab.",
      "blog.catPub": "Publication", "blog.catConf": "Conference", "blog.catCareer": "Career", "blog.catGrant": "Grant",
      "b1.d": "Nov 2026", "b1.h": "New papers on gendered care and integrated care governance",
      "b1.p": "Two new articles published: a gendered hybridity analysis of community-based long-term care in the US and Thailand (<i>Social Politics</i>), and a qualitative comparative analysis of integrated care systems in Germany, Japan and Thailand (<i>International Journal of Health Governance</i>).",
      "b1.link": "Read in Social Politics →",
      "b2.d": "2 Sep 2026", "b2.h": "ISEE 2026 Munich: Climate Emotions in Taiwan",
      "b2.p": "Presented the cross-cultural adaptation and psychometric validation of the Traditional Chinese Inventory of Climate Emotions (ICE) at the International Society for Environmental Epidemiology conference in Munich. Session S24: Bridging Knowledge, Emotion, and Culture.",
      "b3.d": "2026", "b3.h": "Appointed Series Editor at Springer Nature",
      "b3.p": "Invited to serve as Series Editor for Springer Nature's <i>International Perspectives on Aging</i> book series, overseeing cross-national ageing scholarship.",
      "b5.d": "2026", "b5.h": "ASEAN long-term care comparison published",
      "b5.p": "Paper on comparative barriers and enablers in ASEAN-Plus Three long-term care systems published in the <i>Australasian Journal on Ageing</i>, drawing from the 2025 Regional Policy Dialogue on Equitable Active Ageing.",
      "b5.link": "Read the paper →",
      "b6.d": "Feb 2027", "b6.h": "Joining NCKU as Assistant Professor",
      "b6.p": "From February 2027, joining the Institute of Gerontology, College of Medicine, National Cheng Kung University (NCKU) in Tainan, Taiwan. Welcoming prospective graduate students in the climate–care nexus.",
      "b7.d": "2025", "b7.h": "Thai older adults' social participation and health",
      "b7.p": "Published in the <i>Journal of Gerontological Social Work</i>: analysis of social participation, cognitive health and mental health using four waves of Thailand's HART national ageing panel during COVID-19.",
      "b7.link": "Read the paper →",
      "fd.kicker": "研究場域", "fd.title": "Fields & Regions",
      "fd.r1": "Taiwan", "fd.r2": "Thailand", "fd.r3": "Japan", "fd.r4": "Germany", "fd.r5": "United Kingdom", "fd.r6": "United States", "fd.r7": "ASEAN",

      "ft.h": "Let's build climate-resilient care",
      "ft.lead": "Open to collaboration across long-term-care policy, climate-emotion measurement, and age-inclusive community design in Asia and Europe. Prospective graduate students are welcome to get in touch.",
      "ft.emailLabel": "Email · ",
      "ft.c1": "© 2026 Dr. I-Chun Isabelle Chen",
      "ft.c2": "Climate Care Lab · Research & Policy for Ageing Societies under Climate Stress"
    },

    zh: {
      "doc.title": "陳怡君",
      "brand": "陳怡君　博士",

      "nav.lab": "實驗室",
      "nav.about": "關於", "nav.research": "研究", "nav.publications": "著作",
      "nav.teaching": "教學", "nav.awards": "獎助", "nav.service": "服務",
      "nav.blog": "動態", "nav.contact": "聯絡",

      "hero.eyebrow": "高齡社會中的氣候—照護交會",
      "hero.name": "陳怡君",
      "hero.subname": "I-Chun Isabelle Chen, PhD",
      "hero.lede": "我研究氣候風險下亞洲高齡者的照護連續性，從測量到治理，並將實證轉譯至歐洲。",
      "hero.sub": "公共衛生與高齡研究學者，關注氣候變遷、健康老化與長期照護在東亞及東南亞的交會，並建立「氣候—照護連結指數」（CCNI），以打造全齡友善、具氣候韌性的社區。",
      "hero.role1": "博士後研究員 · <b>朱拉隆功大學</b>",
      "hero.role2": "候任助理教授 · <b>成功大學</b>",
      "hero.role3": "訪問研究員 · <b>西倫敦大學</b>",
      "hero.role4": "創會召集人 · <b>Inter-CARE</b>",
      "link.email": "電子郵件",

      "about.kicker": "About", "about.title": "關於",
      "about.intro": "陳怡君，公共衛生與高齡研究學者，研究主題為「氣候—照護」交會處。她發展 CVCVI 與 ICE 測量工具，建立橫跨亞洲的災害—長照證據，並將其轉譯為歐洲與東協的政策語言。",
      "about.colAppt": "現職與聘任", "about.colEdu": "學歷",

      "appt.curPill": "現職 · 2026–", "appt.curTitle": "博士後研究員",
      "appt.curOrg": "人口研究學院", "appt.curPlace": "朱拉隆功大學 · 泰國曼谷",
      "appt.incPill": "候任 · 2027 年 2 月", "appt.incTitle": "助理教授",
      "appt.incOrg": "醫學院老年學研究所", "appt.incPlace": "國立成功大學 · 台灣台南",
      "appt.tudPill": "2026 年 9–12 月", "appt.tudTitle": "訪問研究員",
      "appt.tudOrg": "高齡社會之社會結構與社會學講座（Prof. Dr. Martina Brandt）", "appt.tudPlace": "多特蒙德工業大學 · 德國多特蒙德",
      "appt.uwlPill": "2025–", "appt.uwlTitle": "訪問研究員",
      "appt.uwlOrg": "Geller 老化與記憶研究所", "appt.uwlPlace": "西倫敦大學 · 英國倫敦",
      "about.also": "同時擔任泰國商會大學（2024–）與銘傳大學（2024–）<b>兼任助理教授</b>；並為德國高齡與老年醫學學會（DGGG）<b>會員</b>。研究場域橫跨日本、台灣與泰國，並為德國與東協進行政策轉譯。",

      "edu1.t": "博士後研究訓練", "edu1.s": "哈佛大學 T.H. Chan 公共衛生學院 — 指導教授 Ichiro Kawachi",
      "edu2.t": "公共衛生博士", "edu2.s": "朱拉隆功大學 · <span class='prize'>博士論文優等獎</span>",
      "edu3.t": "運動、休閒與餐旅管理博士", "edu3.s": "國立臺灣師範大學",
      "edu4.t": "國際人力資源管理碩士（MBA）", "edu4.s": "國立臺灣師範大學",
      "edu5.t": "公民教育與領導碩士（MEd）", "edu5.s": "國立臺灣師範大學",
      "edu6.t": "德國語文學士", "edu6.s": "東吳大學",

      "bio.title": "學術簡介",
      "bio.p1": "陳怡君關注極端高溫與災害如何切斷高齡者的照護連續性，並發展可跨文化比較的測量工具與政策評估架構。研究場域橫跨台灣、泰國、日本、德國與英國，長期與社區組織、宗教慈善網絡及長照體系合作。",
      "bio.p2": "她建立 CVCVI 氣候—照護能力與脆弱度指標，以及 ICE 氣候情緒量表家族，並以台灣全民健保資料庫、泰國 HART 全國高齡追蹤調查等長期資料，檢視災害後長照服務中斷與高齡者健康結果之關聯。2027 年 2 月起將任職於國立成功大學醫學院老年學研究所。",

      "lang.kicker": "Languages", "lang.title": "語言與區域經驗",
      "lang1.n": "中文（華語）", "lang1.v": "母語", "lang1.u": "台灣田野、健保資料分析、量表翻譯",
      "lang2.n": "英文", "lang2.v": "專業", "lang2.u": "論文發表、教學、國際網絡",
      "lang3.n": "泰文", "lang3.v": "工作可用", "lang3.u": "HART 追蹤研究、曼谷田野與教學",
      "lang4.n": "德文", "lang4.v": "工作可用", "lang4.u": "德國長照政策轉譯",
      "lang5.n": "日文", "lang5.v": "基礎", "lang5.u": "日本長照比較研究合作",

      "ri.kicker": "Research Interests", "ri.title": "研究主題",
      "ri.t1": "氣候—照護交會", "ri.t2": "高齡學", "ri.t3": "災害韌性",
      "ri.t4": "長期照護政策", "ri.t5": "綜合指標", "ri.t6": "跨文化心理計量",
      "pl.kicker": "Four Research Pillars", "pl.title": "研究四大主軸",
      "pl1.n": "01 — 測量工具", "pl1.h": "量度脆弱度", "pl1.p": "<span class='code'>CVCVI</span>（氣候—照護能力與脆弱度指標）整合氣候脆弱度、長照充足性與社區韌性，依 OECD／JRC 綜合指標標準建構。",
      "pl2.n": "02 — 氣候情緒", "pl2.h": "暖化世界中的心理", "pl2.p": "<span class='code'>ICE</span> 量表家族測量高齡者的氣候相關情緒與心理健康，並在中文、泰文與英文中完成驗證。",
      "pl3.n": "03 — 長期證據", "pl3.h": "世代與追蹤", "pl3.p": "連結台灣健保資料庫的災害—長照世代（莫拉克颱風、921 地震）、368 鄉鎮、四城市亞洲概念驗證，以及泰國 HART 高齡追蹤四波資料。",
      "pl4.n": "04 — 治理與轉譯", "pl4.h": "照護即基礎設施", "pl4.p": "社區與宗教慈善網絡（包含慈濟基金會）作為韌性基礎設施，並轉譯至德國長照改革與東協議程。",

      "pub.kicker": "Publications", "pub.title": "著作列表",
      "pub.intro": "23 篇已發表或接受之著作，橫跨行星健康、高齡學、災害風險減緩與長照政策。",
      "pub.accepted": "已接受刊登", "pub.articles": "已發表期刊論文", "pub.chapters": "已發表專書篇章",

      "te.kicker": "Teaching & Supervision", "te.title": "教學與指導",
      "te.intro": "於泰國與台灣的公共衛生、高齡學及國際學程授課——從測量走向政策，立基於學生可直接參與的真實研究專案。",
      "te.themesH": "課程與講題主題",
      "te.th1": "氣候變遷、極端高溫與高齡者健康", "te.th2": "長期照護政策比較",
      "te.th3": "社區韌性與災害應變", "te.th4": "綜合指標建構",
      "te.th5": "跨文化量表驗證", "te.th6": "跨國高齡研究設計",
      "te.supH": "指導招生", "te.supWhere": "2027 年 2 月起 · 國立成功大學醫學院老年學研究所",
      "te.supP": "歡迎對氣候—照護交會、長照政策、災害韌性與心理計量工具發展有興趣的碩、博士生。可能的論文方向：",
      "te.b1": "極端高溫暴露與長照服務中斷",
      "te.b2": "在新語言或族群中驗證氣候情緒量表",
      "te.b3": "特定國家的次國家層級氣候—照護脆弱度指標",
      "te.b4": "宗教與社區組織作為災害照護基礎設施",
      "te.b5": "氣候壓力下的長照財務比較",
      "te.note": "有意申請者歡迎來信，並附上履歷、成績單與一份簡短的研究興趣說明。",

      "aw.kicker": "Grants, Fellowships & Honours", "aw.title": "獎助與榮譽",
      "aw1.t": "第二世紀基金（C2F）博士後獎助", "aw1.s": "朱拉隆功大學",
      "aw2.t": "豐田基金會國際資助計畫", "aw2.s": "共同申請人；合作者 Rajib Shaw 教授（慶應義塾大學 SFC）",
      "aw3.t": "博士論文優等獎", "aw3.s": "朱拉隆功大學公共衛生博士",
      "aw4.t": "博士後研究訓練", "aw4.s": "哈佛 T.H. Chan 公共衛生學院，指導教授 Ichiro Kawachi",
      "aw5.t": "海外研究經驗獎學金", "aw5.s": "朱拉隆功大學",
      "aw6.t": "公費留學獎學金", "aw6.s": "中華民國教育部",

      "sv.kicker": "Service, Editorial & Convening", "sv.title": "學術服務與影響",
      "sv.c1h": "召集與演講",
      "sv.c1a": "<b>創會召集人</b>，<a href=\"https://sites.google.com/view/inter-care--network/home\" target=\"_blank\" rel=\"noopener\">Inter-CARE</a> — 氣候、高齡與韌性研究國際網絡",
      "sv.c1b": "參與東協長照議程的論壇與政策對話",
      "sv.c1c": "於氣候情緒、災害韌性與社區照護主題進行研討會發表",
      "sv.c2h": "編輯與審查",
      "sv.c2a": "<b>系列主編</b>，Springer Nature — <i>International Perspectives on Aging</i>",
      "sv.c2b": "高齡學、公共衛生與災害研究期刊同儕審查委員",
      "sv.c3h": "政策參與",
      "sv.c3a": "將研究發現轉譯至德國長照改革辯論",
      "sv.c3b": "參與東協區域長照政策對話",
      "sv.c3c": "與社區及宗教慈善照護網絡合作，包含慈濟基金會",

      "nav.talks": "演講",
      "tk.kicker": "演講與發表", "tk.title": "學術演講與發表",
      "tk.intro": "受邀演講、研討會發表與培訓引導，主題橫跨氣候—照護、災害韌性與高齡研究。",
      "tk1.t": "Session Convener — GS10.2「從指標到制度：跨尺度高齡社會的氣候韌性治理」",
      "tk1.m": "EGU 大會 2027 · 維也納 · 2027 年 4 月 27 日 – 5 月 2 日（即將舉行，與 Prof. Dr. Martina Brandt 合作）",
      "tk2.t": "受邀演講 —「跨高齡社會的小規模失智照護：財政治理視角下的可負擔性與可及性」",
      "tk2.m": "失智研究碩士學程 · 西倫敦大學 Geller 老化與記憶研究所 · 2026 年 11 月 20 日",
      "tk3.t": "受邀研究報告 · CARE（氣候、老化與關係）研究群",
      "tk3.m": "布蘭登堡醫學院 Theodor Fontane · 柏林近郊呂德斯多夫 · 2026 年 11 月 12 日",
      "tk4.t": "「跨福利體制之社區整合照護的可移轉促進因素」（德國、日本、泰國）",
      "tk4.m": "海報發表 · 第三屆波鴻多元醫學研討會 · 波鴻魯爾大學 · 2026 年 11 月 4 日",
      "tk5.t": "「誰的氣候苦痛算數？台灣的情緒不平等與健康服務」",
      "tk5.m": "ISEE 2026 年會 · 慕尼黑 · 2026 年 8 月 30 日 – 9 月 2 日（#484）",
      "tk6.t": "「建構信任代理人與高齡者社區災害韌性架構」",
      "tk6.m": "受邀全國線上培訓 · 泰國社會發展與人類安全部老人司 · 2026 年 8 月 26 日",
      "tk7.t": "共同主持 — 氣候韌性社區培訓計畫",
      "tk7.m": "泰國大城府 · 2026 年 4 月 22 日 · 150 位長者參與",
      "tk8.t": "「高齡人口社區長照的經濟永續性」",
      "tk8.m": "GLO-JOPE 全球會議 2025 · 全球勞動組織與人口經濟學期刊 · 德國波昂 · 2025 年 12 月 3–5 日",
      "tk9.t": "「數位落差與災害脆弱性：2025 花蓮馬太安溪水災中的高齡者」",
      "tk9.m": "第 24 屆公共事務學術研討會 · 佛光大學 · 台灣宜蘭 · 2025 年 11 月",
      "tk10.t": "「東協國家失智介入措施：實證與政策意涵」",
      "tk10.m": "受邀演講 · 失智研究碩士學程 · 西倫敦大學 Geller 老化與記憶研究所 · 2025",

      "pub.editedBooks": "主編書籍",
      "eb1.t": "氣候變遷、健康老化與亞太韌性社區：跨多元健康體系的實證、政策與實務",
      "eb1.m": "與 Ruttiya Bhula-or 共同主編 · <em>International Perspectives on Aging</em> 書系 · Springer Nature · 即將出版 · 15 章，分 5 篇",

      "lab.kick": "獨立研究單位", "lab.zh": "氣候照護實驗室 · 跨越亞洲與歐洲的高齡韌性研究平台",
      "lab.p": "一個關於氣候韌性、老化與照護連續性的研究平台，橫跨亞洲與歐洲——涵蓋政策診斷、NGO 夥伴模式與跨世代社區設計。",
      "lab.note": "由陳怡君創立並主持的獨立研究單位，與亞洲及歐洲夥伴合作。",

      "blog.kicker": "News & Blog", "blog.title": "新聞與動態",
      "blog.intro": "來自氣候照護實驗室的研究進展、出版、研討會發表與學術里程碑。",
      "blog.catPub": "出版", "blog.catConf": "研討會", "blog.catCareer": "職涯", "blog.catGrant": "獎助",
      "b1.d": "2026 年 11 月", "b1.h": "性別化照護與整合照護治理新論文",
      "b1.p": "發表兩篇新論文：美國與泰國社區長照的性別化混合悖論分析（<i>Social Politics</i>），以及德國、日本與泰國整合照護系統的質性比較分析（<i>International Journal of Health Governance</i>）。",
      "b1.link": "閱讀 Social Politics 論文 →",
      "b2.d": "2026 年 9 月 2 日", "b2.h": "ISEE 2026 慕尼黑：台灣氣候情緒量表",
      "b2.p": "於國際環境流行病學會（ISEE）慕尼黑年會發表繁體中文版氣候情緒量表（ICE）的跨文化調適與心理計量驗證。Session S24：Bridging Knowledge, Emotion, and Culture。",
      "b3.d": "2026", "b3.h": "獲聘 Springer Nature 系列主編",
      "b3.p": "受邀擔任 Springer Nature《International Perspectives on Aging》書系系列主編，主持跨國高齡學術出版。",
      "b5.d": "2026", "b5.h": "東協長照比較研究刊登",
      "b5.p": "東協加三長照系統之比較障礙與促進因素一文刊登於 <i>Australasian Journal on Ageing</i>，取材自 2025 年「公平活躍老化區域政策對話」。",
      "b5.link": "閱讀論文 →",
      "b6.d": "2027 年 2 月", "b6.h": "即將赴成功大學擔任助理教授",
      "b6.p": "2027 年 2 月起任職國立成功大學醫學院老年學研究所助理教授。歡迎對氣候—照護交會有興趣的碩博士生。",
      "b7.d": "2025", "b7.h": "泰國高齡者社會參與與健康",
      "b7.p": "於 <i>Journal of Gerontological Social Work</i> 發表：運用泰國 HART 全國高齡追蹤四波資料，分析 COVID-19 期間高齡者社會參與、認知與心理健康之關聯。",
      "b7.link": "閱讀論文 →",
      "fd.kicker": "Fields & Regions", "fd.title": "研究場域",
      "fd.r1": "台灣", "fd.r2": "泰國", "fd.r3": "日本", "fd.r4": "德國", "fd.r5": "英國", "fd.r6": "美國", "fd.r7": "東協",

      "ft.h": "一起打造具氣候韌性的照護",
      "ft.lead": "歡迎在長照政策、氣候情緒測量，以及亞洲與歐洲的全齡友善社區設計上合作。有意申請的研究生也歡迎來信。",
      "ft.emailLabel": "電子郵件 · ",
      "ft.c1": "© 2026 陳怡君 · I-Chun Isabelle Chen",
      "ft.c2": "Climate Care Lab · 氣候壓力下高齡社會的研究與政策"
    }
  };

  function apply(lang) {
    var dict = DICT[lang] || DICT.en;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hant" : "en");
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] != null) nodes[i].innerHTML = dict[key];
    }
    if (dict["doc.title"]) document.title = dict["doc.title"];
    var btn = document.getElementById("langToggle");
    if (btn) { btn.textContent = lang === "zh" ? "EN" : "中文"; btn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切換為中文"); }
  }

  function initial() {
    var saved = null;
    try { saved = localStorage.getItem("icc-lang"); } catch (e) {}
    if (saved === "en" || saved === "zh") return saved;
    return "en";
  }

  var lang = initial();
  apply(lang);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("#langToggle") : null;
    if (!btn) return;
    lang = lang === "zh" ? "en" : "zh";
    apply(lang);
    try { localStorage.setItem("icc-lang", lang); } catch (e2) {}
  });
})();
