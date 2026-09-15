export type NewsImage = {
  src: string;
  alt: string;
};

export type NewsItem = {
  date: string;
  year: number;
  category: "Milestone" | "Publication" | "Award" | "Service";
  title: string;
  detail: string;
  images: NewsImage[];
  featured?: boolean;
  showOnHome?: boolean;
  link?: {
    label: string;
    href: string;
  };
};

export type Publication = {
  title: string;
  shortTitle: string;
  authors: string;
  venue: string;
  year: number;
  image: string;
  imageAlt: string;
  status?: "Published" | "Accepted" | "Preprint";
  award?: string;
  awardUrl?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  badges?: Array<{
    src: string;
    alt: string;
  }>;
};

export const distinguishedArtifactAwardUrl =
  "https://sp2026.ieee-security.org/awards_artifacts.html";

export const profile = {
  name: "Bofan Li",
  role: "Postdoctoral Scholar",
  affiliation: "Arizona State University",
  affiliationUrl: "https://www.asu.edu/",
  email: "bofanli@asu.edu",
  scholar:
    "https://scholar.google.com/citations?user=RVep6W4AAAAJ&hl=en&oi=ao",
  photo: "/images/profile/bofan-li.jpg",
  bio: [
    "I am a Postdoctoral Scholar at Arizona State University, supervised by [Prof. Yanchao Zhang](https://faculty.engineering.asu.edu/yczhang/). I received my Ph.D. in Computer Science from Florida State University, where I was advised by [Prof. Xin Liu](https://xinliulab.github.io/).",
    "My research focuses on wireless sensing and security. By integrating signal processing and machine learning, I advance wireless sensing beyond single-user settings toward identity-aware multi-user systems through spatial signal modeling.",
  ],
  interests: [
    "Wireless Sensing",
    "Mobile Security & Privacy",
    "AI/LLM-powered Mobile Systems",
    "Integrated Sensing & Communication",
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Publications", href: "/publications" },
  { label: "Teaching", href: "/teaching" },
  { label: "Service", href: "/service" },
  { label: "Awards", href: "/awards" },
  { label: "Education", href: "/education" },
  // Temporarily hidden until these pages have content. Uncomment to restore.
  // { label: "Demos", href: "/demos" },
  // { label: "Personal", href: "/personal" },
];

// Add an entry to either collection to replace that page's "Coming soon" state.
export type ExtraEntry = {
  title: string;
  description: string;
  date?: string;
  image?: NewsImage;
  links?: Array<{ label: string; href: string }>;
};

export const demos: ExtraEntry[] = [];
export const personal: ExtraEntry[] = [];

export const news: NewsItem[] = [
  {
    date: "Aug 2026",
    year: 2026,
    category: "Service",
    title: "Serving on the IEEE INFOCOM 2027 Technical Program Committee",
    detail:
      "I am honored to serve on the Technical Program Committee (TPC) for IEEE INFOCOM 2027. Many thanks to Dr. Yanchao Zhang for nominating me!",
    images: [],
    link: {
      label: "IEEE INFOCOM 2027 committees",
      href: "https://infocom2027.ieee-infocom.org/committees",
    },
  },
  {
    date: "Aug 2026",
    year: 2026,
    category: "Milestone",
    title: "Kicked off my postdoctoral journey at Arizona State University",
    detail:
      "I joined Arizona State University as a Postdoctoral Scholar in August 2026, supervised by Prof. Yanchao Zhang. I am excited to begin this new chapter of my research journey!",
    images: [],
  },
  {
    date: "Jun 2026",
    year: 2026,
    category: "Milestone",
    title: "Successfully defended my Ph.D. dissertation",
    detail:
      "I successfully defended my Ph.D. dissertation and became the first Ph.D. graduate from the XL-Stack Lab. I am deeply grateful to my advisor, collaborators, friends, and family for their support throughout this journey.",
    images: [
      {
        src: "/images/news/graduation-2026.jpg",
        alt: "Bofan Li celebrating graduation with his advisor, family, and friends at Florida State University",
      },
    ],
  },
  {
    date: "Jun 2026",
    year: 2026,
    category: "Service",
    title: "Serving on the ACM MobiCom 2026 Artifact Evaluation Committee",
    detail:
      "I am delighted to serve on the Artifact Evaluation Committee (AEC) for ACM MobiCom 2026. Many thanks to Dr. Xin Liu and Dr. Yang Liu for nominating me!",
    images: [],
    link: {
      label: "ACM MobiCom 2026 artifact evaluation committee",
      href: "https://www.sigmobile.org/mobicom/2026/artifact_cfp.html",
    },
  },
  {
    date: "May 2026",
    year: 2026,
    category: "Award",
    title: "2FiA received the IEEE S&P Distinguished Artifact Award",
    detail:
      "Our 2FiA artifact was recognized for clear documentation, reproducibility, and faithful implementation of the paper's core contributions at the 47th IEEE Symposium on Security and Privacy.",
    link: {
      label: "Official award page",
      href: distinguishedArtifactAwardUrl,
    },
    images: [
      {
        src: "/images/news/distinguished-artifact-certificate.jpg",
        alt: "IEEE S&P 2026 Distinguished Artifact certificate for 2FiA",
      },
      {
        src: "/images/news/distinguished-artifact-slide.jpg",
        alt: "IEEE S&P 2026 Distinguished Artifacts announcement slide",
      },
    ],
  },
  {
    date: "Apr 2026",
    year: 2026,
    category: "Award",
    title: "Best Poster Award at the FSU CS Expo 2026",
    showOnHome: false,
    detail:
      "I received the Best Poster Award at the Mobile Computing Demo Showcase and FSU CS Expo 2026. I sincerely thank Dr. Xin Liu for his guidance and the FSU Department of Computer Science for organizing the event.",
    images: [
      {
        src: "/images/news/cs-expo-best-poster.jpg",
        alt: "Bofan Li's FSU CS Expo 2026 Best Poster Award certificate",
      },
    ],
  },
  {
    date: "Apr 2026",
    year: 2026,
    category: "Award",
    title: "Graduate Student Research Award 2026",
    detail:
      "I received the Graduate Student Research Award from the Florida State University Department of Computer Science in recognition of my research contributions.",
    images: [
      {
        src: "/images/news/graduate-research-award.jpg",
        alt: "Bofan Li's Graduate Student Research Award 2026 certificate",
      },
    ],
  },
  {
    date: "Jan 2026",
    year: 2026,
    category: "Publication",
    title: "MURAL-Fi was accepted to IMWUT/UbiComp 2026",
    detail:
      "Our paper, “MURAL-Fi: Multi-User Respiration Authentication Leveraging WiFi,” was accepted by ACM IMWUT/UbiComp 2026.",
    images: [
      {
        src: "/images/publications/mural-fi.png",
        alt: "MURAL-Fi multi-user respiration authentication overview",
      },
    ],
  },
  {
    date: "Sep 2025",
    year: 2025,
    category: "Publication",
    title: "2FiA was accepted to IEEE S&P 2026",
    detail:
      "Our paper, “2FiA: Towards WiFi Sensing-Based Authentication with Unique Biometrics,” was accepted by the 47th IEEE Symposium on Security and Privacy.",
    images: [
      {
        src: "/images/publications/2fia.png",
        alt: "2FiA WiFi sensing-based authentication overview",
      },
    ],
  },
  {
    date: "Aug 2025",
    year: 2025,
    category: "Award",
    title: "Dean's Award for Doctoral Excellence",
    featured: true,
    detail:
      "I received the Dean's Award for Doctoral Excellence from the Florida State University College of Arts and Sciences.",
    images: [],
  },
  {
    date: "Jul 2024",
    year: 2024,
    category: "Publication",
    title: "SpaceBeat was accepted to IMWUT/UbiComp 2024",
    detail:
      "Our paper, “SpaceBeat: Identity-aware Multi-person Vital Signs Monitoring Using Commodity WiFi,” was accepted by ACM IMWUT/UbiComp 2024.",
    images: [
      {
        src: "/images/publications/spacebeat.png",
        alt: "SpaceBeat identity-aware vital signs monitoring overview",
      },
    ],
  },
];

// Keep recent updates and explicitly featured older news in chronological order.
const recentNews = news.filter((item) => item.showOnHome !== false).slice(0, 5);
export const homeNews = news.filter((item) =>
  item.showOnHome !== false && (item.featured || recentNews.includes(item))
);

export const publications: Publication[] = [
  {
    title: "MUGEN: A Unified Framework for Efficient Motion Understanding and Generation",
    shortTitle: "MUGEN",
    authors: "Zhankai Ye, Yukai Jin, Bingyang Wei, Bofan Li, Yusen Wu, Fangyi Li, Shangqian Gao, Xin Liu",
    venue: "arXiv 2026",
    year: 2026,
    image: "/images/publications/mugen.jpg",
    imageAlt: "MUGEN unified framework for motion understanding and generation with a shared language model",
    status: "Preprint",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2607.27581" },
      { label: "Project", href: "https://jye16.github.io/mugen-page/" },
      { label: "Code", href: "https://github.com/JYe16/MUGEN" },
    ],
  },
  {
    title: "GeoMotionGPT: Geometry-Aligned Motion Understanding with Large Language Models",
    shortTitle: "GeoMotionGPT",
    authors: "Zhankai Ye, Bofan Li, Yukai Jin, Shuoqiu Li, Wei Wang, Yanfu Zhang, Shangqian Gao, Xin Liu",
    venue: "EMNLP 2026",
    year: 2026,
    image: "/images/publications/geomotiongpt.png",
    imageAlt: "GeoMotionGPT framework aligning motion geometry with language model representations",
    status: "Accepted",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2601.07632" },
      { label: "Code & Dataset", href: "https://github.com/JYe16/GeoMotionGPT" },
    ],
  },
  {
    title: "ARiSE: Efficient Mesh-Based Action Recognition from Wi-Fi Sensing on Edge Devices",
    shortTitle: "ARiSE",
    authors: "Zhankai Ye, Shuoqiu Li, Bofan Li, Yili Ren, Bo Mei, Shangqian Gao, Xin Liu",
    venue: "IEEE FG 2026",
    year: 2026,
    image: "/images/publications/arise.png",
    imageAlt: "ARiSE mesh-based action recognition architecture with efficient routing for edge devices",
    status: "Published",
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/FG67764.2026.11557074" },
      { label: "PDF", href: "https://xinliulab.github.io/publication/26fg_arise.pdf" },
    ],
  },
  {
    title: "MURAL-Fi: Multi-User Respiration Authentication Leveraging WiFi",
    shortTitle: "MURAL-Fi",
    authors: "Bofan Li, Xin Liu, Yichao Wang, Yili Ren, Weikuan Yu",
    venue: "ACM IMWUT/UbiComp 2026",
    year: 2026,
    image: "/images/publications/mural-fi.png",
    imageAlt: "MURAL-Fi multi-user respiration authentication overview",
    status: "Published",
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3790111" },
    ],
  },
  {
    title: "2FiA: Towards WiFi Sensing-Based Authentication with Unique Biometrics",
    shortTitle: "2FiA",
    authors: "Bofan Li, Zhankai Ye, Weikuan Yu, Yongning Tang, Xin Liu",
    venue: "The 47th IEEE Symposium on Security and Privacy (S&P) 2026",
    year: 2026,
    image: "/images/publications/2fia.png",
    imageAlt: "2FiA WiFi sensing-based authentication overview",
    status: "Published",
    award: "Distinguished Artifact Award",
    awardUrl: distinguishedArtifactAwardUrl,
    links: [
      {
        label: "Paper",
        href: "https://www.computer.org/csdl/proceedings-article/sp/2026/606500b617/2bojwh1qN2w",
      },
      { label: "Code & Dataset", href: "https://zenodo.org/records/17361618" },
    ],
    badges: [
      {
        src: "/images/publications/artifact-available.png",
        alt: "Artifacts Available badge",
      },
      {
        src: "/images/publications/artifact-functional.png",
        alt: "Artifacts Functional badge",
      },
      {
        src: "/images/publications/results-reproduced.png",
        alt: "Results Reproduced badge",
      },
    ],
  },
  {
    title:
      "SpaceBeat: Identity-aware Multi-person Vital Signs Monitoring Using Commodity WiFi",
    shortTitle: "SpaceBeat",
    authors: "Bofan Li, Yili Ren, Yichao Wang, Jie Yang",
    venue: "ACM IMWUT/UbiComp 2024",
    year: 2024,
    image: "/images/publications/spacebeat.png",
    imageAlt: "SpaceBeat identity-aware vital signs monitoring overview",
    status: "Published",
    links: [
      { label: "Paper", href: "https://dl.acm.org/doi/10.1145/3678590" },
    ],
  },
];

export const teaching = [
  {
    term: "Fall 2025",
    code: "COP3014",
    course: "Introduction to Programming in C++",
    role: "Teaching Assistant / Recitation Lecturer",
    featured: true,
  },
  {
    term: "Summer 2025",
    code: "CNT4603",
    course: "Computer and Network System Administration",
    role: "Teaching Assistant",
  },
  {
    term: "Spring 2025",
    code: "CNT4406",
    course: "Network Security",
    role: "Teaching Assistant",
  },
  {
    term: "Fall 2024",
    code: "COP6511",
    course: "Advanced Operating Systems",
    role: "Teaching Assistant",
  },
  {
    term: "Spring 2024",
    code: "COP4530",
    course: "Data Structures",
    role: "Teaching Assistant / Recitation Lecturer",
    featured: true,
  },
  {
    term: "Fall 2023",
    code: "CIS4630",
    course: "Computer Security Fundamentals",
    role: "Teaching Assistant / Invited Lecturer",
    featured: true,
  },
  {
    term: "Fall 2022",
    code: "CIS4630",
    course: "Computer Security Fundamentals",
    role: "Teaching Assistant",
  },
];

export type ServiceItem = {
  period: string;
  role: string;
  organization: string;
  href?: string;
  showOnHome?: boolean;
};

export const service: ServiceItem[] = [
  {
    period: "2027",
    role: "Technical Program Committee Member",
    organization: "IEEE INFOCOM 2027",
    href: "https://infocom2027.ieee-infocom.org/committees",
  },
  {
    period: "2026",
    role: "Artifact Evaluation Committee Member",
    organization: "ACM MobiCom 2026",
    href: "https://www.sigmobile.org/mobicom/2026/artifact_cfp.html",
  },
  {
    period: "2026",
    role: "Reviewer",
    organization: "ACM IMWUT 2026",
  },
  {
    period: "2026",
    role: "Reviewer",
    organization: "IEEE Internet Computing",
    showOnHome: false,
  },
];

// List assisted reviews separately from formal committee / reviewer appointments.
export const reviewingAssistance: ServiceItem[] = [
  {
    period: "2024",
    role: "Helped in reviewing",
    organization: "IEEE INFOCOM 2024",
  },
  {
    period: "2023",
    role: "Helped in reviewing",
    organization: "IEEE INFOCOM 2023",
  },
  {
    period: "2023",
    role: "Helped in reviewing",
    organization: "ACM Asia Conference on Computer and Communications Security (AsiaCCS) 2023",
  },
  {
    period: "2023",
    role: "Helped in reviewing",
    organization: "ACM Transactions on Sensor Networks (TOSN)",
  },
];

export const education = [
  {
    period: "Jan 2022 – Jun 2026",
    school: "Florida State University",
    degree: "Ph.D. in Computer Science",
    detail: "Tallahassee, Florida",
  },
  {
    period: "Aug 2019 – Dec 2021",
    school: "Illinois State University",
    degree: "M.S. in Information Systems",
    detail: "Normal, Illinois",
  },
  {
    period: "Aug 2013 – Jul 2017",
    school: "Xidian University",
    degree: "B.S. in Computer Science and Technology",
    detail: "Xi'an, China",
  },
];

export type Award = {
  year: string;
  title: string;
  organization: string;
  href?: string;
  selectivity?: string;
  detail: string;
  images: NewsImage[];
  showOnHome?: boolean;
};

export const awards: Award[] = [
  {
    year: "2026",
    title: "Distinguished Artifact Awards",
    organization: "47th IEEE Symposium on Security and Privacy",
    href: distinguishedArtifactAwardUrl,
    selectivity: "4 out of 925",
    detail: "Our 2FiA artifact received a Distinguished Artifact Award at IEEE S&P 2026, recognizing its documentation, reproducibility, and implementation.",
    images: [
      { src: "/images/news/distinguished-artifact-certificate.jpg", alt: "IEEE S&P 2026 Distinguished Artifact certificate for 2FiA" },
      { src: "/images/news/distinguished-artifact-slide.jpg", alt: "IEEE S&P 2026 Distinguished Artifacts announcement slide" },
    ],
  },
  {
    year: "2026",
    title: "Best Research Assistant Award",
    organization: "Florida State University Department of Computer Science",
    selectivity: "1 out of 83",
    detail: "Recognized for research contributions to the FSU Department of Computer Science. The certificate's formal title is Graduate Student Research Award 2026.",
    images: [
      { src: "/images/news/graduate-research-award.jpg", alt: "Bofan Li's Graduate Student Research Award 2026 certificate" },
    ],
  },
  {
    year: "2026",
    title: "Best Poster Award",
    organization: "Mobile Computing Demo Showcase & FSU CS Expo",
    showOnHome: false,
    detail: "Best Poster Award at the Mobile Computing Demo Showcase and FSU CS Expo 2026.",
    images: [
      { src: "/images/news/cs-expo-best-poster.jpg", alt: "Bofan Li's FSU CS Expo 2026 Best Poster Award certificate" },
    ],
  },
  {
    year: "2025",
    title: "Dean's Award for Doctoral Excellence",
    organization: "Florida State University College of Arts and Sciences",
    detail: "I received the Dean's Award for Doctoral Excellence from the Florida State University College of Arts and Sciences in 2025.",
    images: [],
  },
];
