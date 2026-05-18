import Navbar from './Navbar';
import FadeIn from './FadeIn';
import HeroPortrait from './HeroPortrait';
import MagneticDock from './MagneticDock';
import CountUp from '@/components/CountUp'


const socialLinks = {
  github: 'https://github.com/abrar-byte',
  linkedin: 'https://www.linkedin.com/in/usamah-hafidz-91a6ab225/',
  upwork: 'https://www.upwork.com/freelancers/~01bb4591bfc627d0e3',
  email: 'mailto:usamahhafidz99@gmail.com',
};
const startedYeary=2022

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-y-visible relative" style={{ overflowX: 'clip' }}>
      <div className="flex flex-col flex-1 px-5 sm:px-8 md:px-10 relative z-0 wrapper">
        <FadeIn delay={0} y={-20}>
          <Navbar />
        </FadeIn>

        <FadeIn delay={0.15} y={40} className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight whitespace-nowrap w-full text-[14vw]"
          >
            Hi, i&apos;m Usamah
          </h1>
        </FadeIn>

        <div className="flex-1" />

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-5">
          <div className="space-y-4">

          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
              >
              a Fullstack developer with expertise in React and Node.js.
            </p>
          </FadeIn>
          <div className="flex items-center gap-2">

          <CountUp
            from={0}
            to={new Date().getFullYear()-startedYeary}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-white text-2xl font-bold"
            delay={0}
          />
          <span className="text-white text-xl font-light">Years of Experience</span>
          </div>

              </div>

          <FadeIn delay={0.5} y={20}>
            <MagneticDock links={socialLinks} />
          </FadeIn>
        </div>
      </div>

      {/* <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src="/image-me2.png"
            alt="Hero portrait"
            className="max-w-[500px] h-auto object-contain"
          />
        </FadeIn>
      </Magnet> */}

      <HeroPortrait />
    </section>
  );
}
