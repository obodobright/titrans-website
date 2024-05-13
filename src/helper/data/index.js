import {
  CardIcon,
  ConsultIcon,
  DataIcon,
  FinIcon,
  HomeIcon,
  OutIcon,
  PMIcon,
  SettingIcon,
  StackIcon,
  TIcon,
  UXIcon,
  WebIcon,
} from "@/components/icons";

export const navData = [
  { link: "/", name: "Home" },
  { link: "/about-us", name: "About us" },
  { link: "/services", name: "Services" },
  { link: "/jobs", name: "Jobs" },
  { link: "/blog", name: "Blog" },
  { link: "/contact", name: "Contact" },
];

export const numPer = [
  { number: "1128+", description: "Successful Work" },
  { number: "908+", description: "Team member" },
  { number: "258+", description: "Happy Customers" },
  { number: "564+", description: "Creative Idea" },
];

export const processData = [
  {
    step: "1",
    title: "Learning & Practice",
    bg: "bg-[#E58F24]",
    color: "text-[#f000]",
    process: [
      "Onboarding and setup",
      "Updated lecture materials",
      "Robust content and Videos",
      "Assessments and assignments",
      "Tutor guided Trails",
    ],
  },
  {
    step: "2",
    title: "Real Projects & Portfolio",
    bg: "bg-[#4EAF4E]",
    color: "text-white",
    process: [
      "Work on multiple projects",
      "Get real-time feedback",
      "Real-time mentoring",
      "Robust exhibition portfolio",
      "Culminating Project",
    ],
  },
  {
    step: "3",
    title: "Job & Career Development",
    bg: "bg-black",
    color: "text-white",
    process: [
      " Real business cases",
      "Work flow delivery",
      "Team awareness and support",
      "Resume for tech industries",
      "Interview prep and Demo sessions",
    ],
  },
];

export const coursesData = [
  {
    name: "Web Development",
    description:
      "Comprehensive web development training providing hands-on experience in HTML, CSS, JavaScript, and popular frameworks, equipping you to build responsive, dynamic websites and applications.",
    icon: <WebIcon />,
  },
  {
    name: "Data Analytics",
    description:
      "Immersive data analytics training empowering proficiency in statistical analysis, data visualization, and advanced tools for deriving actionable insights from complex datasets.",
    icon: <DataIcon />,
  },
  {
    name: "UI/UX Design",
    description:
      "Cutting-edge UI/UX training program offering a blend of design theory and practical skills, enabling participants to create intuitive and visually compelling user experiences across diverse digital platforms.",
    icon: <UXIcon />,
  },
  {
    name: "Product Management",
    description:
      "Comprehensive product management training fostering strategic thinking, market analysis, and cross-functional leadership to drive successful product life-cycles and innovative business solutions.",
    icon: <PMIcon />,
  },
];

export const serviceData = [
  {
    name: "Training & Mentorship",
    description:
      "We offer a dynamic learning experience tailored to individuals at all skill levels. Join us to receive top-notch training and mentorship that will empower you to thrive in the world of technology.",
    icon: <TIcon />,
  },
  {
    name: "IT consultancy",
    description:
      "Elevate your business with our IT consultancy services. Our seasoned experts bring a wealth of industry knowledge to provide strategic guidance, implement cutting-edge solutions, and optimize your infrastructure.",
    icon: <ConsultIcon />,
    isDark: true,
  },
  {
    name: "Recruitment & Outsourcing",
    description:
      "Revolutionize your workforce strategy with our recruitment and outsourcing services. We specialize in identifying and grooming top talent to meet your business needs, offering a seamless recruitment process.",
    icon: <OutIcon />,
  },
  {
    name: "Finance & Restructuring",
    description:
      "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    icon: <FinIcon />,
  },
  {
    name: "Taxes & Efficiency",
    description:
      "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    icon: <CardIcon />,
  },
  {
    name: "Investment banking",
    description:
      "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    icon: <HomeIcon />,
  },
];

export const valueData = [
  {
    name: "Creative Ideas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
    icon: <StackIcon />,
  },
  {
    name: "Best Features",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <DataIcon />,
  },
  {
    name: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
    icon: <UXIcon />,
  },
  {
    name: "Easy Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <SettingIcon />,
  },
];

export const jobData = [
  {
    name: "Junior Web Developer",
    source: "Indeed",
    img: "/asset/job-img.png",
  },
  {
    name: "Frontend Developer",
    source: "Indeed",
    img: "/asset/1.png",
  },
  {
    name: "Cloud Engineer",
    source: "linkedin",
    img: "/asset/2.png",
  },
  {
    name: "Sales Analyst",
    source: "Remote.io",
    img: "/asset/3.png",
  },
  {
    name: "Junior Python Developer",
    source: "Indeed",
    img: "/asset/4.png",
  },
  {
    name: "PowerBi Analyst",
    source: "LinkedIn",
    img: "/asset/2.png",
  },
];

export const testimonials = [
  { name: "Aron Fernadez", jobTitle: "Founder of WiTechs", img: "/asset/testi1.png" },
  { name: "Lumen Bright", jobTitle: "Founder of Adreia", img: "/asset/testi2.png" },
  { name: "Fauz Malik", jobTitle: "Sales Manager of Wisconsin", img: "/asset/test3.png" },
];
