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
  { number: "1128+", description: "Successful Work", start: 1000, end: 1128 },
  { number: "908+", description: "Team member", start: 900, end: 980 },
  { number: "258+", description: "Happy Customers", start: 200, end: 258 },
  { number: "564+", description: "Creative Idea", start: 500, end: 564 },
];

export const faq = [
  {
    question: "What types of training programs do you offer?",
    answer:
      "We offer a range of training programs, including hands-on workshops, online courses, and personalized mentorship sessions, covering various aspects of technology and digital innovation.",
  },
  {
    question: "How can your IT consultancy services benefit my business?",
    answer:
      "Our IT consultancy services help identify and address your business's unique challenges, streamline operations, and drive digital transformation, ensuring long-term success and growth.",
  },
  {
    question: "What is the process for recruiting and outsourcing through Titrans Tech?",
    answer:
      "We work closely with you to understand your needs, then source and vet top-tier tech talent to meet those needs. Our outsourcing solutions are designed to integrate seamlessly with your existing team.",
  },
  {
    question: "What cybersecurity measures do you provide?",
    answer:
      "Our cybersecurity services include threat assessments, security audits, and tailored strategies to protect your business from cyber threats, ensuring the safety of your digital assets.",
  },
  {
    question: "How can cloud services benefit my organization?",
    answer:
      "Our cloud services provide scalable, secure, and cost-efficient solutions, helping you manage and optimize your cloud infrastructure for improved performance and flexibility",
  },
  {
    question: " How do you ensure the quality of your software development services?",
    answer:
      "We follow a rigorous development process, including thorough testing and quality assurance, to ensure our software solutions are robust, scalable, and user-friendly.",
  },
];

export const BlogData = [
  {
    title: "The Future of Artificial Intelligence in Everyday Life",
    summary:
      "Explore how AI is transforming daily activities, from smart home devices to personalized healthcare. This article delves into the latest AI advancements and their potential impact on society.",
    writer: "John Carter",
    createdAt: "June 1, 2024",
    img: "/asset/blog-img.png",
  },
  {
    title: "Trends: Cybersecurity Trends to Watch in 2024",
    summary:
      "Stay ahead of the curve with insights into the top cybersecurity threats and trends for 2024. Learn about emerging technologies and best practices to protect your digital assets.",
    writer: "Nayra Melson",
    createdAt: "July 5, 2024",
    img: "/asset/blog-img-2.png",
  },
  {
    title: " The Role of Data Science in Modern Business",
    summary:
      "Understand how data science is driving decision-making and innovation in businesses today. Learn about key applications, tools, and the future of data-driven strategies.",
    writer: "Michael Lee",
    createdAt: "June 1, 2023",
    img: "/asset/blog-img-3.png",
  },
  {
    title: "A Guide on What to Bring on the First Day of Work",
    summary:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    writer: "Sarah Williams",
    createdAt: "June 1, 2024",
    img: "/asset/blog-img-4.png",
  },
  {
    title: "Digital Transformation: Key Steps for a Successful Journey",
    summary:
      "Learn the essential steps for implementing a successful digital transformation strategy. This article offers practical advice and real-world examples from leading organizations.",
    writer: "Robert Brown",
    createdAt: "June 1, 2024",
    img: "/asset/blog-img-5.png",
  },
  {
    title: "Top Programming Languages to Learn in 2024",
    summary:
      "Find out which programming languages are in high demand and why they matter. This guide highlights the top languages for developers to focus on in the coming year.",
    writer: "Sarah Williams",
    createdAt: "June 1, 2024",
    img: "/asset/blog-img-6.png",
  },
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
      "Our tailored programs nurture talent, foster industry connections, and pave the way for career growth in tech and digital innovation. We empower individuals with hands-on experience and personalized guidance to thrive in the tech landscape.",
    icon: <TIcon />,
  },
  {
    name: "IT consultancy",
    description:
      "We provide expert consultancy services to help businesses harness the power of technology, streamline operations, and drive digital transformation. Our solutions are designed to address your unique challenges and propel your success.",
    icon: <ConsultIcon />,
    isDark: true,
  },
  {
    name: "Recruitment & Outsourcing",
    description:
      "Titrans Tech specializes in sourcing top-tier tech talent and offering outsourcing solutions that meet your business needs. We connect you with skilled professionals who drive innovation and enhance your team.",
    icon: <OutIcon />,
  },
  {
    name: "Software Development",
    description:
      "Our software development services include creating custom solutions tailored to your specific requirements. From concept to deployment, we ensure your software is robust, scalable, and user-friendly.",
    icon: <FinIcon />,
  },
  {
    name: "Cybersecurity Solutions",
    description:
      "Protect your digital assets with our comprehensive cybersecurity services. We offer threat assessments, security audits, and tailored strategies to safeguard your business against cyber threats.",
    icon: <CardIcon />,
  },
  {
    name: "Cloud Services",
    description:
      "Leverage the power of the cloud with our cloud computing solutions. We help you migrate, manage, and optimize your cloud infrastructure, ensuring scalability, security, and cost efficiency.",
    icon: <HomeIcon />,
  },
];

export const valueData = [
  {
    name: "Innovation",
    description:
      "We are committed to staying at the forefront of technological advancements. Our focus is on fostering creativity and encouraging innovative thinking to develop groundbreaking solutions that address real-world challenges.",
    icon: <StackIcon />,
  },
  {
    name: "Integrity",
    description:
      "We uphold the highest standards of ethics and transparency in all our dealings. Our commitment to integrity ensures that we build trust and maintain strong, lasting relationships with our clients, partners, and team members.",
    icon: <DataIcon />,
  },
  {
    name: "Excellence",
    description:
      "Our pursuit of excellence drives us to deliver superior services and products. We strive for continuous improvement and aim to exceed expectations by maintaining a rigorous standard of quality in everything we do.",
    icon: <UXIcon />,
  },
  {
    name: "Collaboration",
    description:
      "We believe in the power of teamwork and collaboration. By working together, sharing knowledge, and leveraging diverse perspectives, we create a dynamic environment that fosters growth, innovation, and mutual success.",
    icon: <SettingIcon />,
  },
];

export const jobData = [
  {
    name: "Software Developer",
    source: "Indeed",
    img: "/asset/job-img.png",
  },
  {
    name: "IT Project Manager",
    source: "Indeed",
    img: "/asset/1.png",
  },
  {
    name: "Cybersecurity Analyst",
    source: "linkedin",
    img: "/asset/2.png",
  },
  {
    name: "Data Scientist",
    source: "Remote.io",
    img: "/asset/3.png",
  },
  {
    name: "Network Engineer",
    source: "Indeed",
    img: "/asset/4.png",
  },
  {
    name: "UI/UX Designer",
    source: "LinkedIn",
    img: "/asset/2.png",
  },
];

export const testimonials = [
  {
    name: "John D.",
    testimony:
      "Titrans Tech's mentorship program transformed my career. The personalized guidance and hands-on training equipped me with skills and confidence to excel in the tech industry.",
    jobTitle: "Sudent",
    img: "/asset/testi1.png",
  },
  {
    testimony:
      "As a startup, we needed expert consultancy to navigate digital transformation. Titrans Tech provided innovative solutions that streamlined our operations and boosted our growth.",
    name: "Lumen Bright",
    jobTitle: "Founder of Adreia",
    img: "/asset/testi2.png",
  },
  {
    testimony:
      "Recruiting skilled tech talent was a challenge until we partnered with Titrans Tech. They connected us with professionals who have become invaluable members of our team.",
    name: "Micheal L.",
    jobTitle: "Sales Manager of Wisconsin",
    img: "/asset/test3.png",
  },
  {
    testimony:
      "The software development services from Titrans Tech exceeded our expectations. The custom solution they built is robust, user-friendly, and perfectly tailored to our needs.",
    name: "Samantha K",
    jobTitle: "CEO at Ecommerce",
    img: "/asset/test3.png",
    img: "/asset/testimony4.avif",
  },
  {
    testimony:
      "Working with Titrans Tech has been a game-changer. Their cybersecurity solutions have fortified our defenses, giving us peace of mind in an increasingly digital world.",
    name: "Alex R.",
    jobTitle: "Client",
    img: "/asset/testimony3.avif",
  },
];
