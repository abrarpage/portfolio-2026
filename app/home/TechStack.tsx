"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type Skill = {
    name: string;
    icon?: string;
};

type CharacterProps = {
    char: string;
    index: number;
    centerIndex: number;
    scrollYProgress: any;
};

type SkillCharacterProps = {
    skill: Skill;
    index: number;
    centerIndex: number;
    scrollYProgress: any;
};

const SCROLL_RANGE: [number, number] = [0, 0.35];

const si = (slug: string, color = "0C0C0C") =>
    `https://cdn.simpleicons.org/${slug}/${color}`;

const mainSkills: Skill[] = [
    { name: "ReactJs", icon: si("react", "61DAFB") },
    { name: "NextJs", icon: si("nextdotjs") },
    { name: "NestJs", icon: si("nestjs", "E0234E") },
    { name: "ExpressJs", icon: si("express") },
    { name: "Wordpress", icon: si("wordpress") },
    { name: "Shopify", icon: si("shopify") },
    { name: "WooCommerce", icon: si("woocommerce") },
    { name: "Prisma", icon: si("prisma") },
    { name: "Drizzle", icon: si("drizzle", "C5F74F") },
    { name: "PostgreSQL", icon: si("postgresql", "4169E1") },
    { name: "MySQL", icon: si("mysql", "4479A1") },
    { name: "Supabase", icon: si("supabase", "3FCF8E") },
    { name: "Firebase", icon: si("firebase", "DD2C00") },
    { name: "Tanstack Query", icon: si("reactquery", "FF4154") },
    { name: "Redux", icon: si("redux") },
    { name: "Radix UI, Shadcn", icon: si("shadcnui") },
    { name: "TailwindCss", icon: si("tailwindcss", "06B6D4") },
];

const otherSkills: Skill[] = [
    { name: "Stripe", icon: si("stripe", "635BFF") },
    { name: "Midtrans", icon: "https://www.google.com/s2/favicons?domain=midtrans.com&sz=128" },
    { name: "WHMCS", icon: "https://www.google.com/s2/favicons?domain=whmcs.com&sz=128" },
    { name: "Langchain", icon: si("langchain") },
    { name: "Docker", icon: si("docker", "2496ED") },
    { name: "LLM" },
    { name: "RAG" },
    { name: "Git", icon: si("git", "F05032") },
];

const CharacterV1 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}: CharacterProps) => {
    const isSpace = char === " ";

    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        SCROLL_RANGE,
        [distanceFromCenter * 22, 0],
    );
    const rotateX = useTransform(
        scrollYProgress,
        SCROLL_RANGE,
        [distanceFromCenter * 18, 0],
    );

    return (
        <motion.span
            className={cn("inline-block", isSpace && "w-4")}
            style={{
                x,
                rotateX,
                color: "#0C0C0C",
            }}
        >
            {char}
        </motion.span>
    );
};

const CharacterV2 = ({
    skill,
    index,
    centerIndex,
    scrollYProgress,
}: SkillCharacterProps) => {
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        SCROLL_RANGE,
        [distanceFromCenter * 22, 0],
    );
    const scale = useTransform(scrollYProgress, SCROLL_RANGE, [0.85, 1]);

    const y = useTransform(
        scrollYProgress,
        SCROLL_RANGE,
        [Math.abs(distanceFromCenter) * 16, 0],
    );

    return (
        <motion.div
            className="inline-flex w-[4.5rem] flex-col items-center gap-2 sm:w-20"
            style={{
                x,
                scale,
                y,
                transformOrigin: "center",
            }}
        >
            {skill.icon && (
                <img
                    src={skill.icon}
                    alt=""
                    className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                />
            )}
            <span
                className="text-center text-[10px] text-sm leading-tight font-medium tracking-tight sm:text-xs"
                style={{ color: "#0C0C0C" }}
            >
                {skill.name}
            </span>
        </motion.div>
    );
};

const CharacterV3 = ({
    skill,
    index,
    centerIndex,
    scrollYProgress,
}: SkillCharacterProps) => {
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        SCROLL_RANGE,
        [distanceFromCenter * 28, 0],
    );
    const rotate = useTransform(
        scrollYProgress,
        SCROLL_RANGE,
        [distanceFromCenter * 18, 0],
    );

    const y = useTransform(
        scrollYProgress,
        SCROLL_RANGE,
        [-Math.abs(distanceFromCenter) * 10, 0],
    );
    const scale = useTransform(scrollYProgress, SCROLL_RANGE, [0.85, 1]);

    return (
        <motion.div
            className="inline-flex w-[4.5rem] flex-col items-center gap-2 sm:w-20"
            style={{
                x,
                rotate,
                y,
                scale,
                transformOrigin: "center",
            }}
        >
            {skill.icon && (
                <img
                    src={skill.icon}
                    alt=""
                    className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                />
            )}
            <span
                className="text-center text-[10px] text-sm leading-tight font-medium tracking-tight sm:text-xs"
                style={{ color: "#0C0C0C" }}
            >
                {skill.name}
            </span>
        </motion.div>
    );
};

const scrollOffset: ["start 0.95", "end 0.05"] = ["start 0.95", "end 0.05"];

const Skills = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const targetRef2 = useRef<HTMLDivElement | null>(null);
    const targetRef3 = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: scrollOffset,
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
        offset: scrollOffset,
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: targetRef3,
        offset: scrollOffset,
    });

    const text = "My Skills";
    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);

    const mainSkillsCenterIndex = Math.floor(mainSkills.length / 2);
    const otherSkillsCenterIndex = Math.floor(otherSkills.length / 2);

    return (
        <section
        id="skills"
            className="relative w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] flex flex-col items-center gap-14 py-32"
            style={{ backgroundColor: "#FFFFFF", overflowX: "clip" }}
        >
            <motion.div
                ref={targetRef}
                className="relative box-border flex ] items-center justify-center px-5 sm:px-8 md:px-10"
            >
                <motion.div
                    className="w-full max-w-4xl text-center font-black uppercase leading-none tracking-tight"
                    style={{
                        fontSize: "clamp(3rem, 12vw, 160px)",
                        color: "#0C0C0C",
                        perspective: "500px",
                    }}
                >
                    {characters.map((char, index) => (
                        <CharacterV1
                            key={index}
                            char={char}
                            index={index}
                            centerIndex={centerIndex}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                ref={targetRef3}
                className="relative  box-border flex flex-col items-center justify-center gap-8 px-5 pb-12 sm:px-8 md:px-10"
            >
                <p className="font-medium uppercase tracking-tight text-center flex items-center justify-center gap-3"

                >
                    <Bracket className="h-12 text-black" />
                    <span className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", color: "#0C0C0C !important" }}>Tech Stack</span>
                    <Bracket className="h-12 scale-x-[-1] text-black" />
                </p>

                <motion.div
                    className="flex max-w-3xl flex-wrap items-end justify-center gap-x-2 gap-y-8 px-2 text-center sm:gap-x-3"
                    style={{
                        perspective: "500px",
                    }}
                >
                    {mainSkills.map((skill, index) => (
                        <CharacterV3
                            key={skill.name}
                            skill={skill}
                            index={index}
                            centerIndex={mainSkillsCenterIndex}
                            scrollYProgress={scrollYProgress3}
                        />
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                ref={targetRef2}
                className="relative box-border flex  flex-col items-center justify-center gap-8 px-5 sm:px-8 md:px-10"
            >
                <p className="font-medium uppercase tracking-tight text-center flex items-center justify-center gap-3"

                >
                    <Bracket className="h-12 text-black" />
                    <span className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", color: "#0C0C0C !important" }}>Other Skill</span>
                    <Bracket className="h-12 scale-x-[-1] text-black" />
                </p>
                <motion.div className="flex max-w-6xl flex-wrap items-end justify-center gap-x-2 gap-y-8 px-2 text-center sm:gap-x-3">
                    {otherSkills.map((skill, index) => (
                        <CharacterV2
                            key={skill.name}
                            skill={skill}
                            index={index}
                            centerIndex={otherSkillsCenterIndex}
                            scrollYProgress={scrollYProgress2}
                        />
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
};

export { CharacterV1, CharacterV2, CharacterV3 };
export default Skills;


const Bracket = ({ className }: { className: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 27 78"
            className={className}
        >
            <path
                fill="#000"
                d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
        </svg>
    );
};