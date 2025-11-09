import { Pitch, Academy, Coach, StoreProduct, Sponsor, News, Event, BlogPost, ChairmanMessage } from "@/types/models";

export const academies: Academy[] = [
  { 
    id: "academy-1", 
    name: "أكاديمية برشلونة", 
    linkedPitchId: "pitch-1", 
    scheduleTemplate: {
      "السبت": [{ from: "17:00", to: "20:00" }],
      "الأحد": [{ from: "17:00", to: "20:00" }],
      "الاثنين": [{ from: "17:00", to: "20:00" }],
      "الثلاثاء": [{ from: "17:00", to: "20:00" }],
      "الأربعاء": [{ from: "17:00", to: "20:00" }]
    },
    description: "تدريب احترافي معتمد", 
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400" 
  },
  { 
    id: "academy-2", 
    name: "أكاديمية الزمالك", 
    linkedPitchId: "pitch-2", 
    scheduleTemplate: {
      "الأحد": [{ from: "16:00", to: "19:00" }],
      "الاثنين": [{ from: "16:00", to: "19:00" }],
      "الثلاثاء": [{ from: "16:00", to: "19:00" }],
      "الأربعاء": [{ from: "16:00", to: "19:00" }],
      "الخميس": [{ from: "16:00", to: "19:00" }]
    },
    description: "تطوير المهارات", 
    logo: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400" 
  },
  { 
    id: "academy-3", 
    name: "أكاديمية الأهلي", 
    linkedPitchId: "pitch-3", 
    scheduleTemplate: {
      "السبت": [{ from: "18:00", to: "21:00" }],
      "الأحد": [{ from: "18:00", to: "21:00" }],
      "الاثنين": [{ from: "18:00", to: "21:00" }],
      "الثلاثاء": [{ from: "18:00", to: "21:00" }],
      "الأربعاء": [{ from: "18:00", to: "21:00" }]
    },
    description: "تدريب للفئات المختلفة", 
    logo: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400" 
  },
  { 
    id: "academy-4", 
    name: "أكاديمية الإنتر", 
    linkedPitchId: "pitch-4", 
    scheduleTemplate: {
      "الأحد": [{ from: "17:30", to: "20:30" }],
      "الاثنين": [{ from: "17:30", to: "20:30" }],
      "الثلاثاء": [{ from: "17:30", to: "20:30" }],
      "الأربعاء": [{ from: "17:30", to: "20:30" }],
      "الخميس": [{ from: "17:30", to: "20:30" }]
    },
    description: "منهج أوروبي متطور", 
    logo: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400" 
  }
];

// Seed Coaches (Saudi)
export const coaches: Coach[] = [
  {
    id: "coach-1",
    fullName: "عبدالعزيز الغامدي",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "مدرّب كرة قدم معتمد بخبرة 8 سنوات في تدريب الناشئين",
    specialties: ["كرة قدم", "لياقة بدنية"],
    yearsOfExperience: 8,
    rating: 4.7,
    academies: ["academy-1"],
    subscriptionPrice: 299,
    visibleToPublic: true
  },
  {
    id: "coach-2",
    fullName: "سالم العتيبي",
    photo: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop",
    bio: "مدرّب متخصص في تطوير المهارات واللياقة البدنية",
    specialties: ["لياقة", "مهارات فردية"],
    yearsOfExperience: 6,
    rating: 4.6,
    academies: ["academy-1", "academy-2"],
    subscriptionPrice: 279,
    visibleToPublic: true
  },
  {
    id: "coach-3",
    fullName: "محمد الشهري",
    photo: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop",
    bio: "مدرّب معتمد بخبرة 10 سنوات في التدريب الاحترافي",
    specialties: ["تكتيك", "مهارات جماعية"],
    yearsOfExperience: 10,
    rating: 4.8,
    academies: ["academy-2", "academy-3"],
    subscriptionPrice: 319,
    visibleToPublic: true
  },
  {
    id: "coach-4",
    fullName: "نواف القحطاني",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "مدرّب شغوف بتطوير اللاعبين الشباب",
    specialties: ["أساسيات", "تطوير مهارات"],
    yearsOfExperience: 5,
    rating: 4.5,
    academies: ["academy-3", "academy-4"],
    subscriptionPrice: 259,
    visibleToPublic: true
  },
  {
    id: "coach-5",
    fullName: "خالد المطيري",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "مدرّب كرة قدم بخبرة 7 سنوات",
    specialties: ["تحليل أداء", "إعداد بدني"],
    yearsOfExperience: 7,
    rating: 4.6,
    academies: ["academy-4"],
    subscriptionPrice: 289,
    visibleToPublic: true
  }
];

// Seed Pitches
export const pitches: Pitch[] = [
  {
    id: "pitch-1",
    name: "Haddaf 1",
    hourPrice: 180,
    amenities: ["إضاءة LED", "مواقف", "غرف تبديل", "كافيتريا"],
    photos: ["https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800"],
    weeklyTemplate: {
      "السبت": [{ from: "16:00", to: "23:00" }],
      "الأحد": [{ from: "16:00", to: "23:00" }],
      "الاثنين": [{ from: "16:00", to: "23:00" }],
      "الثلاثاء": [{ from: "16:00", to: "23:00" }],
      "الأربعاء": [{ from: "16:00", to: "23:00" }],
      "الخميس": [{ from: "16:00", to: "23:00" }],
      "الجمعة": [{ from: "14:00", to: "23:00" }]
    },
    rating: 4.8,
    visibleToPublic: true
  },
  {
    id: "pitch-2",
    name: "Haddaf 2",
    hourPrice: 200,
    amenities: ["مواقف", "غرف تبديل", "مدرجات"],
    photos: ["https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800"],
    weeklyTemplate: {
      "السبت": [{ from: "16:00", to: "23:00" }],
      "الأحد": [{ from: "16:00", to: "23:00" }],
      "الاثنين": [{ from: "16:00", to: "23:00" }],
      "الثلاثاء": [{ from: "16:00", to: "23:00" }],
      "الأربعاء": [{ from: "16:00", to: "23:00" }],
      "الخميس": [{ from: "16:00", to: "23:00" }],
      "الجمعة": [{ from: "14:00", to: "23:00" }]
    },
    rating: 4.9,
    visibleToPublic: true
  },
  {
    id: "pitch-3",
    name: "Haddaf 3",
    hourPrice: 220,
    amenities: ["غرف تبديل", "كافيتريا", "تكييف"],
    photos: ["https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800"],
    weeklyTemplate: {
      "السبت": [{ from: "16:00", to: "23:00" }],
      "الأحد": [{ from: "16:00", to: "23:00" }],
      "الاثنين": [{ from: "16:00", to: "23:00" }],
      "الثلاثاء": [{ from: "16:00", to: "23:00" }],
      "الأربعاء": [{ from: "16:00", to: "23:00" }],
      "الخميس": [{ from: "16:00", to: "23:00" }],
      "الجمعة": [{ from: "14:00", to: "23:00" }]
    },
    rating: 4.7,
    visibleToPublic: true
  },
  {
    id: "pitch-4",
    name: "Haddaf 4",
    hourPrice: 220,
    amenities: ["مواقف", "غرف تبديل", "إضاءة ليلية"],
    photos: ["https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800"],
    weeklyTemplate: {
      "السبت": [{ from: "16:00", to: "23:00" }],
      "الأحد": [{ from: "16:00", to: "23:00" }],
      "الاثنين": [{ from: "16:00", to: "23:00" }],
      "الثلاثاء": [{ from: "16:00", to: "23:00" }],
      "الأربعاء": [{ from: "16:00", to: "23:00" }],
      "الخميس": [{ from: "16:00", to: "23:00" }],
      "الجمعة": [{ from: "14:00", to: "23:00" }]
    },
    rating: 4.8,
    visibleToPublic: true
  }
];

// Legacy alias for backward compatibility
export const stadiums = pitches;

// Seed Products
export const products: StoreProduct[] = [
  {
    id: "product-1",
    title: "كرة قدم Nike Flight",
    category: "كرات",
    price: 149,
    stock: 25,
    images: [
      "https://images.unsplash.com/photo-1614632537197-38a17061ce1d?w=600",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600"
    ],
    tags: ["كرة قدم", "نايك", "احترافي"],
    isFeatured: true,
    fulfill: "both",
    visibleToPublic: true
  },
  {
    id: "product-2",
    title: "حذاء بادل Bullpadel",
    category: "أحذية",
    price: 389,
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    ],
    tags: ["بادل", "أحذية", "احترافي"],
    isFeatured: true,
    fulfill: "both",
    visibleToPublic: true
  },
  {
    id: "product-3",
    title: "قفازات حارس مرمى",
    category: "اكسسوارات",
    price: 219,
    stock: 12,
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600"
    ],
    tags: ["كرة قدم", "قفازات", "حارس"],
    isFeatured: false,
    fulfill: "both",
    visibleToPublic: true
  },
  {
    id: "product-4",
    title: "زجاجة ماء رياضية",
    category: "اكسسوارات",
    price: 39,
    stock: 50,
    images: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600"
    ],
    tags: ["اكسسوارات", "زجاجة"],
    isFeatured: false,
    fulfill: "pickup",
    visibleToPublic: true
  },
  {
    id: "product-5",
    title: "قميص تدريب Nike Dri-FIT",
    category: "ملابس",
    price: 129,
    stock: 30,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    ],
    tags: ["ملابس", "نايك", "تدريب"],
    isFeatured: true,
    fulfill: "both",
    visibleToPublic: true
  },
  {
    id: "product-6",
    title: "كرة سلة Spalding",
    category: "كرات",
    price: 169,
    stock: 20,
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600"
    ],
    tags: ["كرة سلة", "احترافي"],
    isFeatured: false,
    fulfill: "both",
    visibleToPublic: true
  }
];

// Seed Sponsors
export const sponsors: Sponsor[] = [
  {
    id: "sponsor-1",
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    url: "https://nike.com"
  },
  {
    id: "sponsor-2",
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    url: "https://adidas.com"
  },
  {
    id: "sponsor-3",
    name: "Puma",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/49/Puma_logo.svg",
    url: "https://puma.com"
  },
  {
    id: "sponsor-4",
    name: "Under Armour",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg",
    url: "https://underarmour.com"
  },
  {
    id: "sponsor-5",
    name: "Reebok",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Reebok_logo.svg",
    url: "https://reebok.com"
  },
  {
    id: "sponsor-6",
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg",
    url: "https://newbalance.com"
  }
];

// Chairman Message
export const chairmanMessage: ChairmanMessage = {
  title: "رسالة رئيس مجلس الإدارة",
  content: "نؤمن في أكاديمية Haddaf بأن الرياضة ليست مجرد نشاط بدني، بل هي منهج حياة يُبنى من خلاله الانضباط والثقة والتميز. نسعى لتوفير بيئة تدريبية احترافية تُمكّن كل مشترك من تحقيق أهدافه الرياضية تحت إشراف مدربين معتمدين وفي ملاعب مجهزة بأحدث المواصفات. نحن فخورون بكم ونتطلع لمواصلة رحلتنا معًا نحو التميز.",
  portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
};


// News
export const news: News[] = [
  {
    id: "news-1",
    title: "افتتاح فرع جديد في الدمام",
    summary: "نعلن بكل فخر عن افتتاح فرعنا الجديد في مدينة الدمام بمرافق عالمية المستوى",
    content: "يسرنا الإعلان عن افتتاح فرع أكاديمية Haddaf الجديد في الدمام، والذي يضم 3 ملاعب متعددة الاستخدامات مع مدربين معتمدين دوليًا. يوفر الفرع الجديد برامج تدريبية متنوعة تشمل كرة القدم والسلة والبادل.",
    cover: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800",
    date: "2025-10-01"
  },
  {
    id: "news-2",
    title: "تكريم أبطال البطولة الصيفية",
    summary: "احتفلنا بتكريم الفائزين في البطولة الصيفية لعام 2025",
    content: "أقامت أكاديمية Haddaf حفل تكريم للفائزين في البطولة الصيفية بحضور أكثر من 200 لاعب وأسرهم. تم توزيع الجوائز والشهادات على الفائزين في مختلف الفئات العمرية.",
    cover: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
    date: "2025-09-28"
  },
  {
    id: "news-3",
    title: "شراكة استراتيجية مع الاتحاد السعودي",
    summary: "توقيع مذكرة تفاهم مع الاتحاد السعودي للرياضة المجتمعية",
    content: "وقعت أكاديمية Haddaf مذكرة تفاهم مع الاتحاد السعودي للرياضة المجتمعية بهدف تطوير المواهب الشابة وتقديم برامج تدريبية متقدمة تدعم رؤية 2030.",
    cover: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    date: "2025-09-20"
  }
];

// Events
export const events: Event[] = [
  {
    id: "event-1",
    title: "بطولة كرة القدم للناشئين",
    date: "2025-10-15",
    time: "16:00",
    location: "ملعب النخبة - الرياض",
    description: "بطولة مفتوحة لجميع الفئات العمرية من 8-16 سنة. التسجيل مفتوح حتى 10 أكتوبر.",
    cover: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800"
  },
  {
    id: "event-2",
    title: "ورشة عمل: التغذية الرياضية",
    date: "2025-10-20",
    time: "18:00",
    location: "قاعة المؤتمرات - مقر الأكاديمية",
    description: "ورشة تثقيفية مع أخصائي تغذية رياضية معتمد حول أفضل الممارسات الغذائية للرياضيين.",
    cover: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "أهمية الإحماء قبل التمرين",
    slug: "importance-of-warmup",
    excerpt: "تعرف على الفوائد الصحية للإحماء الصحيح وكيف يمكن أن يحميك من الإصابات",
    content: "الإحماء هو جزء أساسي من أي نشاط رياضي. يساعد على تهيئة العضلات والمفاصل للمجهود البدني، ويزيد من تدفق الدم إلى العضلات، مما يقلل من خطر الإصابات بشكل كبير...",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    tags: ["صحة", "تدريب"],
    author: "د. خالد الشمري",
    date: "2025-09-25"
  },
  {
    id: "blog-2",
    title: "التغذية المثالية للرياضيين",
    slug: "nutrition-for-athletes",
    excerpt: "دليل شامل للتغذية الصحيحة التي تدعم الأداء الرياضي",
    content: "التغذية السليمة هي وقود الرياضي. يجب أن يحتوي النظام الغذائي على توازن صحيح من البروتينات والكربوهيدرات والدهون الصحية...",
    cover: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    tags: ["تغذية", "صحة"],
    author: "أ. فاطمة العمري",
    date: "2025-09-18"
  },
  {
    id: "blog-3",
    title: "كيف تختار الحذاء الرياضي المناسب",
    slug: "choosing-sports-shoes",
    excerpt: "نصائح من خبراء للاختيار الأمثل للحذاء الرياضي حسب نوع الرياضة",
    content: "اختيار الحذاء الرياضي المناسب يمكن أن يحدث فرقًا كبيرًا في أدائك وراحتك. كل رياضة تتطلب مواصفات خاصة في الحذاء...",
    cover: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    tags: ["معدات", "نصائح"],
    author: "أ. محمد الزهراني",
    date: "2025-09-10"
  }
];

