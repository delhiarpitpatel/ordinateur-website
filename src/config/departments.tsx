import { Terminal, PenTool, Users, Code, Share2 } from "lucide-react";

export type DepartmentId = "technical" | "editorial" | "organising" | "development" | "dynamics";

export interface TeamMember {
  name: string;
  email: string;
  linkedin: string;
  photo: string;
}

export interface Department {
  id: DepartmentId;
  name: string;
  short: string;
  label: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  tags: string[];
  color: string;
  bgColor: string;
  accent: string;
  accentBorder: string;
  responsibilities: string[];
  opportunities: string[];
  focus: string;
  heads: TeamMember[];
  seniorMembers: TeamMember[];
  members: TeamMember[];
}

export const departmentsData: Record<DepartmentId, Department> = {
  technical: {
    id: "technical",
    name: "Technical",
    short: "Tech",
    label: "INFRASTRUCTURE",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400",
    accentBorder: "border-blue-400/30",
    icon: <Terminal className="w-6 h-6" />,
    description: "The backbone of the society handling infrastructure and workshops.",
    longDescription: "Manages core digital assets and hosting environments for the community.",
    tags: ["SysAdmin", "Security", "DevOps"],
    responsibilities: ["Infrastructure management", "Cybersecurity", "Workshops"],
    opportunities: ["Lead CTF events", "System Architecture"],
    focus: "Reliable and secure systems",
    heads: [
      { name: "Bhumika Rajesh Dahiya", email: "-", linkedin: "-", photo: "/assets/team/technical/head_bhumika-rajesh-dahiya.jpg"},
      { name: "Siya Chandna", email: "-", linkedin: "-", photo: "/assets/team/technical/head_siya-chandna.jpg" }
    ],
    seniorMembers: [
      { name: "Aishmanya Nishi", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Aishmanya+Nishi" },
      { name: "Md Jansheen Alam", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Md+Jansheen+Alam" }
    ],
    members: [
      { name: "Anand Nonia", email: "-", linkedin: "-", photo: "/assets/team/technical/anand-nonia.jpg" },
      { name: "Nitika Singh", email: "-", linkedin: "-", photo: "/assets/team/technical/nitika-singh.jpg" },
      { name: "Abhay Verma", email: "-", linkedin: "-", photo: "/assets/team/technical/abhay-verma.jpg" },
      { name: "Ishant Kumar Singh", email: "-", linkedin: "-", photo: "/assets/team/technical/ishant-kumar-singh.jpg" },
      { name: "Sneha Yadav", email: "-", linkedin: "-", photo: "/assets/team/technical/sneha-yadav.jpg" },
      { name: "Akshita Shah", email: "-", linkedin: "-", photo: "/assets/team/technical/akshita-shah.jpg" },
      { name: "Sanvi Dureja", email: "-", linkedin: "-", photo: "/assets/team/technical/sanvi-dureja.jpg" }
    ]
  },
  editorial: {
    id: "editorial",
    name: "Editorial",
    short: "EDM",
    label: "VOICE",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400",
    accentBorder: "border-purple-400/30",
    icon: <PenTool className="w-6 h-6" />,
    description: "The voice of Ordinateur. Creating content and managing socials.",
    longDescription: "Crafts compelling narratives to ensure the community's stories are heard.",
    tags: ["Content", "Socials", "Strategy"],
    responsibilities: ["Content creation", "Social media management", "Messaging"],
    opportunities: ["Technical writing", "Strategy"],
    focus: "Inspiring community connection",
    heads: [
      { name: "Yogita", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Yogita&background=8B5CF6&color=fff" },
      { name: "Divyansh Chauhan", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Divyansh+Chauhan&background=8B5CF6&color=fff" }
    ],
    seniorMembers: [
      { name: "Shruti Singh", email: "-", linkedin: "-", photo: "/assets/team/editorial/senior_shruti-singh.jpg"}
    ],
    members: [
      { name: "Aditya Vishwakarma", email: "-", linkedin: "-", photo: "/assets/team/editorial/aditya-vishwakarma.jpg" },
      { name: "Rishit Sharma", email: "-", linkedin: "-", photo: "/assets/team/editorial/rishit-sharma.jpg" },
      { name: "Divya Falia", email: "-", linkedin: "-", photo: "/assets/team/editorial/divya-falia.jpg" },
      { name: "Anusha Gupta", email: "-", linkedin: "-", photo: "/assets/team/editorial/anusha-gupta.jpg" },
      { name: "Mridul Pangtey", email: "-", linkedin: "-", photo: "/assets/team/editorial/mridul-pangtey.jpg" },
      { name: "Kirti", email: "-", linkedin: "-", photo: "/assets/team/editorial/kirti.jpg" },
      { name: "Komal Sharma", email: "-", linkedin: "-", photo: "/assets/team/editorial/komal-sharma.jpg" }
    ]
  },
  organising: {
    id: "organising",
    name: "Organising",
    short: "Org",
    label: "MANAGEMENT",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400",
    accentBorder: "border-green-400/30",
    icon: <Users className="w-6 h-6" />,
    description: "The heart of our events. Managing logistics and coordination.",
    longDescription: "Orchestrates initiatives from concept to execution for seamless experiences.",
    tags: ["Logistics", "Events", "Management"],
    responsibilities: ["Event planning", "Volunteer management", "Logistics"],
    opportunities: ["Large-scale coordination", "Leadership"],
    focus: "Meticulous planning and execution",
    heads: [
      { name: "Kanishk Jha", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Kanishk+Jha&background=10B981&color=fff" },
      { name: "Lalit Kumar", email: "-", linkedin: "-", photo: "/assets/team/organising/head_lalit-kumar.png" }
    ],
    seniorMembers: [],
    members: [
      { name: "Savit Handoo", email: "-", linkedin: "-", photo: "/assets/team/organising/savit-handoo.jpg" },
      { name: "Sachi Vaishya", email: "-", linkedin: "-", photo: "/assets/team/organising/sachi-vaishya.jpg" },
      { name: "Krish Sachdeva", email: "-", linkedin: "-", photo: "/assets/team/organising/krish-sachdeva.jpg" },
      { name: "Salvi Dhar", email: "-", linkedin: "-", photo: "/assets/team/organising/salvi-dhar.jpg" },
      { name: "Tanshi Wadhwa", email: "-", linkedin: "-", photo: "/assets/team/organising/tanshi-wadhwa.jpg" },
      { name: "Mohini Pal", email: "-", linkedin: "-", photo: "/assets/team/organising/mohini-pal.jpg" },
      { name: "Hritik Sharma", email: "-", linkedin: "-", photo: "/assets/team/organising/hritik-sharma.jpg" },
      { name: "Muskan Giri", email: "-", linkedin: "-", photo: "/assets/team/organising/muskan-giri.jpg" }
    ]
  },
  development: {
    id: "development",
    name: "Development",
    short: "Dev",
    label: "BUILDERS",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    accent: "text-orange-400",
    accentBorder: "border-orange-400/30",
    icon: <Code className="w-6 h-6" />,
    description: "Building apps and software solutions for real-world problems.",
    longDescription: "Transforms ideas into code through full-stack and innovative development.",
    tags: ["Full Stack", "Native", "Web3"],
    responsibilities: ["Web development", "UI implementation", "APIs"],
    opportunities: ["Scalable solutions", "Tech exploration"],
    focus: "Functional innovation",
    heads: [
      { name: "Lakshay Jain", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Lakshay+Jain&background=F97316&color=fff" },
      { name: "Rish Kumar Das", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Rish+Kumar+Das&background=F97316&color=fff" }
    ],
    seniorMembers: [
      { name: "Ayush Chand", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Ayush+Chand" },
      { name: "Atsou Josue Dosue", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Atsou+Josue+Dosue" },
      { name: "Nikhilesh Luximon", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Nikhilesh+Luximon" }
    ],
    members: [
      { name: "Mukul Verma", email: "-", linkedin: "-", photo: "/assets/team/development/mukul-verma.jpg" },
      { name: "Arpit Patel", email: "-", linkedin: "-", photo: "/assets/team/development/arpit-patel.jpg" },
      { name: "B Meghana", email: "-", linkedin: "-", photo: "/assets/team/development/b-meghana.jpg" },
      { name: "Nathan Swalsing", email: "-", linkedin: "-", photo: "/assets/team/development/nathan-swalsing.jpg" }
    ]
  },
  dynamics: {
    id: "dynamics",
    name: "Dynamics",
    short: "Dyn",
    label: "CREATIVE",
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
    accent: "text-rose-400",
    accentBorder: "border-rose-400/30",
    icon: <Share2 className="w-6 h-6" />,
    description: "The creative engine. Design, video editing, and storytelling.",
    longDescription: "Crafts visual identities and designs that captivate the community.",
    tags: ["Design", "VFX", "Motion"],
    responsibilities: ["Graphic design", "Video production", "VFX"],
    opportunities: ["Visual branding", "Multimedia production"],
    focus: "Inspiring visual engagement",
    heads: [
      { name: "Chestha Raheja", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Chestha+Raheja&background=E11D48&color=fff" },
      { name: "Kshiti Sonal", email: "-", linkedin: "-", photo: "/assets/team/dynamics/head_kshiti-sonal.jpg"}
    ],
    seniorMembers: [],
    members: [
      { name: "Priyanshi Murari", email: "-", linkedin: "-", photo: "/assets/team/dynamics/priyanshi-murari.jpg" },
      { name: "Akarsh Sachdeva", email: "-", linkedin: "-", photo: "/assets/team/dynamics/akarsh-sachdeva.jpg" },
      { name: "Arshi Ansari", email: "-", linkedin: "-", photo: "/assets/team/dynamics/arshi-ansari.jpg" },
      { name: "Tezas Kalson", email: "-", linkedin: "-", photo: "/assets/team/dynamics/tezas-kalson.jpg" },
      { name: "Sumit Mishra", email: "-", linkedin: "-", photo: "/assets/team/dynamics/sumit-mishra.jpg" },
      { name: "Harshita Thakur", email: "-", linkedin: "-", photo: "/assets/team/dynamics/harshita-thakur.jpg" }
    ]
  }
};

export const executiveBoard = {
  convenors: [
    { name: "Dr. Vidhi Khanduja", role: "CONVENOR", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Vidhi+Khanduja&background=4f46e5&color=fff" },
    { name: "Dr. Richa Verma", role: "CO-CONVENOR", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Richa+Verma&background=4f46e5&color=fff" }
  ],
  core: [
    { name: "Divya Babbar", role: "PRESIDENT", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Divya+Babbar" },
    { name: "Vishu", role: "VICE PRESIDENT", email: "-", linkedin: "-", photo: "/assets/team/core/vishu.png" },
    { name: "Moinak Roy", role: "GENERAL SECRETARY", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Moinak+Roy" },
    { name: "Gauri Tiwari", role: "TREASURER", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Gauri+Tiwari" },
    { name: "Vichakshna Mishra", role: "JOINT SECRETARY", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Vichakshna+Mishra" },
    { name: "Devanshi Alhuwalia", role: "JOINT SECRETARY", email: "-", linkedin: "-", photo: "https://ui-avatars.com/api/?name=Devanshi+Alhuwalia" },
    { name: "Shubh Chawla", role: "JOINT TREASURER", email: "-", linkedin: "-", photo: "/assets/team/core/shubh-chawla.jpg" }
  ]
};

export const departmentsList = Object.values(departmentsData);