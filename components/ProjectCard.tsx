import { Carousel } from '@ark-ui/react/carousel';
import LiveProjectButton from './LiveProjectButton';
import { GradientCard } from './ui/gradient-card';

interface ProjectData {
  number: string;
  shortDesc: string;
  name: string;
  href: string;
  description: string;
  techStack: string[];
  images: {
    col2: string[];
  };
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const mainImages = project.images.col2;
  const slideMinH = 'min-h-[clamp(240px,38vw,560px)]';
  const hasImages = mainImages.length > 0;

  return (
    <article
      className="w-full max-w-[1760px] mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 md:gap-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col gap-2 sm:gap-4">
            <span
              className="text-[#D7E2EA] font-medium uppercase"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </span>
            <span
              className="text-[#D7E2EA] font-light tracking-wide"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 2rem)' }}
            >
              {project.shortDesc}
            </span>
          </div>
        </div>

        {project.href ? <LiveProjectButton href={project.href} /> : null}
      </div>

      <div className={`flex flex-col ${hasImages ? 'md:flex-row' : ''} gap-4 md:gap-5 w-full`}>
        <div className={`flex flex-col gap-4 md:gap-5 w-full ${hasImages ? 'md:w-[40%]' : ''}`}>
          <p className="text-[#D7E2EA]/90 font-light leading-relaxed">
            {project.description}
          </p>
          <GradientCard text={project.techStack.join(', ')}/>

          {/* <div
            className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[60px] border border-[#D7E2EA]/35 bg-[#141414] p-4 sm:p-5 md:p-6 flex flex-col justify-center"
            style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
          >
            <p
              className="text-[#D7E2EA] font-medium leading-snug"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
            >
              {project.techStack.join(', ')}
            </p>
          </div> */}
        </div>

        {hasImages && mainImages.length > 1 ? (
          <Carousel.Root
            defaultPage={0}
            slideCount={mainImages.length}
            className="w-full md:w-[60%] flex flex-col gap-3 sm:gap-4 self-stretch min-h-0"
          >
            <Carousel.Control className="flex items-center justify-between gap-3">
              <Carousel.PrevTrigger className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-[14px] sm:rounded-[18px] border border-[#D7E2EA]/40 text-[#D7E2EA] text-sm font-medium uppercase tracking-wide hover:bg-[#D7E2EA]/10 transition-colors">
                Prev
              </Carousel.PrevTrigger>
              <Carousel.NextTrigger className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-[14px] sm:rounded-[18px] border border-[#D7E2EA]/40 text-[#D7E2EA] text-sm font-medium uppercase tracking-wide hover:bg-[#D7E2EA]/10 transition-colors">
                Next
              </Carousel.NextTrigger>
            </Carousel.Control>

            <Carousel.ItemGroup
              className={`overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[60px] border border-[#D7E2EA]/25 ${slideMinH}`}
            >
              {mainImages.map((src, i) => (
                <Carousel.Item key={src} index={i} className={slideMinH}>
                  <img
                    src={src}
                    alt={`${project.name} ${i + 1}`}
                    className={`w-full ${slideMinH} object-cover`}
                  />
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Carousel.IndicatorGroup className="flex justify-center items-center gap-2 flex-wrap">
              {mainImages.map((_, i) => (
                <Carousel.Indicator
                  key={i}
                  index={i}
                  className="w-2 h-2 rounded-full bg-[#D7E2EA]/25 data-current:bg-[#D7E2EA] transition-colors cursor-pointer"
                />
              ))}
            </Carousel.IndicatorGroup>
          </Carousel.Root>
        ) : hasImages ? (
          <img
            src={mainImages[0]}
            alt={`${project.name} main`}
            className={`w-full md:w-[60%] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[60px] md:h-auto self-stretch ${slideMinH}`}
          />
        ) : null}
      </div>
    </article>
  );
}
