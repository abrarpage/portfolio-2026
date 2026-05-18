"use client"
import { useMemo, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

type FilterTag = 'ai' | 'landingpage' | 'custom';

type TabId = 'all' | FilterTag;

type ProjectItem = {
  number: string;
  shortDesc: string;
  name: string;
  href: string;
  filterTags: FilterTag[];
  description: string;
  techStack: string[];
  images: {
    col2: string[];
  };
};

const tabs: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI integrated' },
  { id: 'landingpage', label: 'Landingpage' },
  { id: 'custom', label: 'Custom' },

];

const projects: ProjectItem[] = [
  {
    number: '01',
    shortDesc: 'Online Tennis Platform',
    name: 'PlaytennisLA',
    filterTags: ['custom'],
    href: '',
    description:
      'Built a sports matchmaking and court booking platform serving 2,000+ active users. Delivered a smooth, mobile-friendly experience with integrated payments and real-time availability',
    techStack: ['Next.js', 'Supabase', 'AWS', 'Tailwind CSS', 'Stripe', 'Zod', 'React Hook Form', "Tanstack Query"],
    images: {
      col2: [
        '/image/pla.png',
      ],
    }
  },
  {
    number: '01',
    shortDesc: ' Pet eCommerce with Subscriptions',
    name: 'OurDailyPets',
    filterTags: ['custom'],
    href: 'https://www.ourdailypets.com/',
    description:
      'Developed a pet store with affiliate marketing features and automated subscription billing. Enabled seamless checkout and recurring orders to improve customer retention.',
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Midtrans', 'Zod', 'React Hook Form', "Tanstack Query"],
    images: {
      col2: [
        '/gif/odp.gif',
        '/image/odp-2.png',
        '/image/odp-3.png',

      ],
    }
  },
  {
    number: '01',
    shortDesc: ' AI Parenting Consultant integrated with products',
    name:"R for Rabbit",
    description: 'Developed a full AI-powered parenting assistant that could upsell products, generate baby names, and provide astrology insights. Increased user engagement by 42% and improved product discovery for a leading baby products brand.',
    filterTags: ['ai'],
    href: 'https://rforrabbit.com/pages/parenting-chat',
    techStack: ["Nextjs","Langchain RAG","OpenAI","Shopify API","Supabase Vector"],
    images: {
      col2: [
        '/gif/rforrabit.gif',
     

      ],
    }
  },
  {
    number: '01',
    shortDesc: ' Property Intelligence system',
    name: 'DisclosureIq',
    filterTags: ['ai'],
    href: '',
    description:
    'Built a real estate data intelligence tool with advanced search, analytics, and subscription features. Optimized for speed and accuracy to support investment decisions.',
    techStack: ["Nextjs","Stripe","Azure DI","Open AI"],
    images: {
      col2: [
        '/image/disclosure.png',

      ],
    }
  },
  {
    number: '01',
    shortDesc: ' AI travel planner',
    name: 'Rekreasi AI',
    filterTags: ['ai','custom'],
    href: '',
    description:
    'Created a multilingual AI travel planner that generates custom itineraries instantly. Supported English and Indonesian audiences with location-based recommendations.',
    techStack: ["Nextjs","NestJs","OpenAI","i18n"],
    images: {
      col2: [
        '/gif/rekreasi.gif',
        '/image/rekreasi.png',


      ],
    }
  },
  {
    number: '01',
    shortDesc: 'Mobile Car Auction App',
    name: 'Boss Mobil (Bobil)',
    filterTags: ['custom'],
    href: '',
    description:
    'Built a cross-platform car auction application for iOS and Android with live bidding and secure transactions',
    techStack: ["Nextjs","NestJs","React Native","Tanstack Query"],
    images: {
      col2: [
        '/image/bobil.png',


      ],
    }
  },
  {
    number: '01',
    shortDesc: 'Company Profile Website',
    name: 'Glacier',
    filterTags: ['landingpage'],
    href: 'https://glacier.io/',
    description:
    'Delivered a sleek and responsive corporate website highlighting brand identity ',
    techStack: ["Nextjs"],
    images: {
      col2: [
        '/gif/glacier.gif', ],
    }
  },
  {
    number: '01',
    shortDesc: 'Company Profile Website Education',
    name: 'Genza',
    filterTags: ['landingpage'],
    href: 'https://glacier.io/',
    description:
    'Landingpage for website education in Indonesia with cms ',
    techStack: ["Nextjs","Tanstack Query"],
    images: {
      col2: [
        '/image/genza.png', ],
    }
  },
  {
    number: '01',
    shortDesc: 'Company Profile',
    name: 'Atomionics',
    filterTags: ['landingpage'],
    href: 'https://atomionics.com/',
    description:
    'Landingpage for company profile with CMS ',
    techStack: ["Nextjs","Tanstack Query"],
    images: {
      col2: [
        '/image/atomionic.png', ],
    }
  },
  {
    number: '01',
    shortDesc: 'Company Profile for cloud hosting',
    name: 'Maxcloud',
    filterTags: ['landingpage'],
    href: 'https://maxcloud.id/',
    description:
    'Landingpage for company profile with CMS ',
    techStack: ["Nextjs","Tanstack Query"],
    images: {
      col2: [
        '/gif/maxcloud.gif', ],
    }
  },
  {
    number: '01',
    shortDesc: 'Company Profile with CMS',
    name: 'Conectere',
    filterTags: ['landingpage'],
    href: 'https://www.conectere.io/',
    description:
    'Landingpage for company profile with CMS ',
    techStack: ["Nextjs","Tanstack Query"],
    images: {
      col2: [
        '/gif/conectere.gif', ],
    }
  },
  {
    number: '01',
    shortDesc: 'Company Profile with CMS',
    name: 'LendingWise',
    filterTags: ['landingpage'],
    href: 'https://lendingwise.com/',
    description:
    'Landingpage for company profile with CMS ',
    techStack: ["Wordpress"],
    images: {
      col2: [
        ],
    }
  },
  {
    number: '01',
    shortDesc: 'Web hosting platform',
    name: 'Bearhost',
    filterTags: ['custom'],
    href: 'https://bearhost.com/',
    description:
    'Built a user-friendly hosting site offering layered hosting services through a simple, approachable interface tailored for beginners and pros alike. (Effortless setup, domain integration, cPanel, free SSL,scalable plans). ',
    techStack: ["NextJS","Stripe","WHMCS"],
    images: {
      col2: [
        '/gif/bearhost.gif', ],
    }
  },
  {
    number: '01',
    shortDesc: 'Web for Manage member harian Jogja',
    name: 'Member Harian Jogja',
    filterTags: ['custom'],
    href: 'https://member.harianjogja.com/',
    description:
    'Built app management for subscription Harian Jogja, integrate with midtrans',
    techStack: ["NextJS","Midtrans","Tanstack Query"],
    images: {
      col2: [
        '/gif/member-harjo.gif', ],
    }
  },

];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const visibleProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter((p) => p.filterTags.includes(activeTab));
  }, [activeTab]);

  return (
    <section
      id={"projects"}
      ref={containerRef}
      className="relative px-5 sm:px-8 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col items-center py-20 sm:py-24 md:py-32">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
        <FadeIn delay={0.08} y={28}>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-8 md:gap-x-10 mt-10 sm:mt-12 md:mt-14 w-full max-w-5xl mx-auto px-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 ${activeTab === tab.id
                  ? 'opacity-100'
                  : 'opacity-45 hover:opacity-70'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {visibleProjects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
          totalCards={visibleProjects.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}
