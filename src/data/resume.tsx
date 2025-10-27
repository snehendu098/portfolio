import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Snehendu Roy",
  initials: "SR",
  url: "https://roydevelops.vercel.app/",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description: "Software Engineer trying to solve complex engineering problems",
  summary:
    "I’m a full stack software engineer with a diverse skill set. I love to solve complex engineering problems and can ship products faster than speed of light. Building robust, scalable systems with clean code and good efficiency is something I love the most. Challenging problems are something I love to play with. Currently exploring applied AI and distributed systems.",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "React.js",
    "Express.js",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Bun",
    "Hono",
    "Postgres",
    "GraphQL",
    "MongoDB",
    "Prisma",
    "Drizzle",
    "Python",
    "Docker",
    "Kubernetes",
    "Cloudflare",
    "AWS",
    "Digitalocean",
    "Solidity",
    "Go",
    "Rust",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://snehenduroy.hashnode.dev/",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "roysnehendupersonal@gmail.com",
    tel: "+91 9907625390",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/snehendu098",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/snehendu-roy-6ab419218/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RoyDevelops",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Axicov",
      badges: [],
      href: "https://axicov.com",
      location: "Remote",
      title: "CTO",
      logoUrl: "/axicov.png",
      start: "Feb 2025",
      end: "Present",
      description: "",
    },

    {
      company: "Infinititech Partners",
      href: "https://www.linkedin.com/company/infinititech-partners/posts/?feedView=all",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Dev",
      logoUrl: "/infinity.jpeg",
      start: "Aug 2025",
      end: "Present",
      description: "",
    },
    {
      company: "Freelancer (Fiverr)",
      badges: ["Level 1 Seller"],
      location: "Remote",
      title: "Freelance Software Developer",
      start: "Feb 2021",
      end: "Feb 2025",
      description: "",
      logoUrl: "/fiverr.webp",
      href: "https://www.fiverr.com/snehendu",
    },
  ],
  education: [
    {
      school: "Sister Nivedita University, New Town",
      href: "https://www.snuniv.ac.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/snu.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Satish Chandra Memorial School",
      href: "https://www.scmemorial.org/",
      degree: "High School Graduate",
      logoUrl: "/scms.jpeg",
      start: "",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Axicov",
      href: "https://axicov.com",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "An agentic infrastructure built for developers, businesses with the power of blockchain",
      technologies: [
        "Next.js",
        "Typescript",
        "Cloudflare",
        "TailwindCSS",
        "EDU Chain",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://axicov.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/axicov-img.png",
      video: "",
    },
    {
      title: "Statik Uptime",
      href: "https://statikuptime.xyz",
      dates: "Sept 2025 - Present",
      active: true,
      description: "A distributed uptime monitoring network on the U2U chain",
      technologies: [
        "Next.js",
        "Typescript",
        "Cloudflare",
        "Docker",
        "Shell",
        "Web Sockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://statikuptime.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/snehendu098/statik-uptime/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/statik.jpeg",
      video: "",
    },
    {
      title: "Hrin Protocol",
      href: "https://x.com/HrinProtocol",
      dates: "Loops HH Delhi (Winner)",
      active: true,
      description:
        "Contract less secure lending protol monitored by a NEAR shade agent deployed in a TEE",
      technologies: ["Docker", "NextJs", "Hono", "Ethers", "Phala"],
      image: "/hrin.jpg",
      links: [
        {
          type: "Source",
          href: "https://github.com/snehendu098/hrid-server",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },

    {
      title: "Litverse",
      href: "https://litverse.vercel.app/",
      dates: "BNB Hack Winner",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Solidity",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://litverse.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/snehendu098/litverse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/litverse.png",
      video: "",
    },
    {
      title: "BAZD",
      href: "https://devfolio.co/projects/bazd-bde1",
      dates: "ETHIndia 2024 (CDP Track Winner)",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: ["Next.js", "Typescript", "MongoDB", "Huddle", "Solidity"],
      links: [
        {
          type: "Source",
          href: "https://github.com/snehendu098/bazd-freelance",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bazd.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "VietBudl",
      description:
        "Built a distributed uptime monitoring network as a dePIN project",
      location: "Online",
      dates: "Aug 22 - Oct 18, 2025",
      image: "/u2u.png",
    },
    {
      title: "Algorand Regional Hack 2025 (Winner)",
      description: "Built a realtime game with websockets, durable objects",
      image: "/algohack.png",
      location: "Kolkata",
    },
    {
      title: "ETHGlobal Delhi 2025",
      dates: "Sept 26 - Sept 28, 2025",
      description:
        "Tried to built the foundation of agentic finternet with an ai for lending, swapping, bridging cross chain assets",
      image: "/ethglobal-delhi.png",
    },
    {
      title: "Loops HH Delhi (Winner)",
      dates: "Sept 21 - Sept 25, 2025",
      location: "Delhi",
      description:
        "Built a cross chain contract less lending protocol using near shade agents and deployed it in a TEE",
      image: "/loops.png",
      links: [
        {
          title: "Hrin Protocol",
          icon: <Icons.x className="h-4 2-4" />,
          href: "https://x.com/HrinProtocol",
        },
        {
          title: "Github Link",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/snehendu098/hrid-server",
        },
      ],
    },
    {
      title: "Colosseum Breakout",
      dates: "Feb 9 - May 5, 2025",
      location: "Online",
      description: "Developed a decentralized container deployment platform",
      image: "/breakout.jpeg",
      // win: "Ai Track 2nd Prize",
      links: [
        {
          title: "Tassium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://x.com/tassiumonsol",
        },
      ],
    },
    {
      title: "Edu Chain Sem 3 (Winner)",
      dates: "Feb 9 - May 5, 2025",
      location: "Online",
      description: "Developed an agent launchpad",
      image: "/axicov.png",
      win: "Ai Track 2nd Prize",
      links: [
        {
          title: "Axicov",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.axicov.com/",
        },
      ],
    },
    {
      title: "BNBHack 2024 (Winner)",
      dates: "Dec 6th - 8th, 2024",
      location: "Online",
      description: "Developed a full fledged Event Ticketing platform on BNB",
      image: "/bnbhack.png",
      win: "Honorable Mentions",
      links: [
        {
          title: "Litverse",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dorahacks.io/buidl/20917",
        },
      ],
    },

    {
      title: "EthIndia 2024 (Winner)",
      dates: "Dec 6th - 8th, 2024",
      location: "Bangalore, India",
      description:
        "Developed a wallet to wallet freelancing platform with annon aadhar, Huddle, CDP on Base",
      image: "/ethindia.webp",
      win: "CDP Track",
      links: [
        {
          title: "BAZD",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/bazd-bde1",
        },
      ],
    },
    {
      title: "Colosseum Radar",
      dates: "Sep 2, 2024 - Oct 8, 2024",
      location: "Online",
      description: "Developed an automated LST Yield Aggregator",
      icon: "public",
      image: "/radar.jpeg",
      links: [],
    },
  ],
} as const;
