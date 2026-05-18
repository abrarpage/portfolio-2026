import FadeIn from './FadeIn';

const experiences = [
  {
    number: 'March 2022 - June 2023',
    name: 'Tebar Digital (Frontend Developer)',
    description: 
    'Slicing UI/UX designs into responsive and interactive web interfaces, integrating RESTful APIs to connect frontend applications with backend services, and optimizing application performance to improve loading speed, scalability, and overall user experience. Developing reusable components, maintaining clean and maintainable code, ensuring cross-browser compatibility, and collaborating with designers and backend developers to deliver efficient and user-friendly applications.'
  },
  {
    number: 'September 2023 - Present',
    name: 'Plainthing Studio (Fullstack Developer)',
    description: 
    'Slicing UI/UX designs into responsive and interactive web applications, integrating APIs between frontend and backend systems, optimizing application performance for scalability and efficiency, developing and maintaining RESTful APIs, managing databases and data structures, implementing authentication and authorization systems, and ensuring secure, clean, and maintainable fullstack application architecture. Collaborating with cross-functional teams to deliver reliable and user-friendly web solutions.'
  },

];

export default function WorkExperienceSection() {
  return (
    <section
      className="flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none max-w-4xl mx-auto tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
        >
          Work Experience
        </h2>
      </FadeIn>

      <div className="flex flex-col w-full items-center">
        {experiences.map((experience, i) => (
          <FadeIn
            key={i}
            delay={i * 0.1}
            y={30}
            className="flex flex-col items-center w-full max-w-5xl"
          >
            {i > 0 && (
              <div
                className="w-full"
                style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
              />
            )}
            <div className="flex items-start md:items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 w-full">
              <span
                className="font-black uppercase leading-none flex-shrink-0 max-sm:text-xs max-w-[100px] "
                style={{  color: '#0C0C0C' }}
              >
                {experience.number}
              </span>

              <div className="flex flex-col gap-2 sm:gap-4 md:gap-5 pt-1">
                <span
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
                >
                  {experience.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
                >
                  {experience.description}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
