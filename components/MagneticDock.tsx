"use client";

import {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect,
  type ReactNode,
  type MouseEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const MouseContext = createContext({ x: 0, y: 0 });

function GithubIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function UpworkIcon() {
  return (

    <svg xmlns="http://www.w3.org/2000/svg"
      aria-label="Upwork" role="img"
      viewBox="0 0 512 512"><rect
        width="22" height="22"
        rx="15%"
        fill="#6fda44" /><path fill="#ffffff" d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6l0.1-.6c3.2-17.6,13.1-47.2,43.8-47.2c23,0,41.7,18.7,41.7,41.7S380.2,296.9,357.2,296.9L357.2,296.9z M357.2,171.4c-39.2,0-69.5,25.4-81.9,67.3c-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0,21.7-17.6,39.3-39.3,39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0,44.9,36.5,81.8,81.4,81.8s81.4-36.9,81.4-81.8v-18.4c8.2,17.1,18.2,34.4,30.4,49.6l-25.8,121.4h43.1l18.7-88c16.4,10.5,35.2,17.1,56.8,17.1c46.2,0,83.8-37.8,83.8-84.1C440.9,209,403.4,171.4,357.2,171.4" /></svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}



function TwitterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function DockIcon({
  icon,
  href,
  label,
}: {
  icon: ReactNode;
  href: string;
  label: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement?.getBoundingClientRect();
    if (!containerRect) return;
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const width = useTransform(distance, [0, 100], [52, 40]);
  const springW = useSpring(width, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      style={{ width: springW }}
      className="aspect-square shrink-0 rounded-full bg-[#1a1a1a] grid place-items-center text-[#D7E2EA] cursor-pointer transition-colors hover:bg-[#252525]"
    >
      {icon}
    </motion.a>
  );
}

export interface MagneticDockLinks {
  github: string;
  linkedin: string;
  upwork: string;
  // twitter: string;
  email: string;
}

interface MagneticDockProps {
  links: MagneticDockLinks;
  className?: string;
}

export default function MagneticDock({ links, className = "" }: MagneticDockProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left } = currentTarget.getBoundingClientRect();
    setPos({ x: clientX - left, y: 0 });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <MouseContext.Provider value={pos}>
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`flex h-16 sm:h-[4.5rem] items-end gap-2 sm:gap-3 rounded-2xl bg-[#141414]/80 px-3 sm:px-4 pb-3 sm:pb-3.5 backdrop-blur-sm ${className}`}
      >
        <DockIcon icon={<GithubIcon />} href={links.github} label="GitHub" />
        <DockIcon icon={<LinkedinIcon />} href={links.linkedin} label="LinkedIn" />
        <DockIcon icon={<UpworkIcon />} href={links.upwork} label="Upwork" />
        {/* <DockIcon icon={<TwitterIcon />} href={links.twitter} label="X (Twitter)" /> */}
        <DockIcon icon={<MailIcon />} href={links.email} label="Email" />
      </motion.div>
    </MouseContext.Provider>
  );
}
