import { UiImage } from "./image";

interface ProkerHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  className?: string;
}

export function ProkerHero({
  title,
  description,
  backgroundImage,
  backgroundSize = 'cover',
  backgroundPosition = 'center',
  className = ''
}: ProkerHeroProps) {
  const sectionStyle = backgroundImage ? {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize,
    backgroundPosition,
  } : {};

  return (
    <section className="flex items-center px-4 md:px-18 py-16 max-sm:py-8 relative w-full">
      <div className="absolute inset-0 w-full h-full z-10">
        <UiImage
          src="/assets/program-kerja/program-kerja-bg.png"
          alt="Prestasi Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="text-white flex flex-col gap-2.5 z-20">
        <h4 className=" font-bold text-2xl">{title}</h4>
        <p className="w-full md:w-lg font-medium text-base max-sm:text-xs max-sm:font-normal">
          {description}
        </p>
      </div>
    </section>
  );
}