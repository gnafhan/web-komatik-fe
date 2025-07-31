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
    <section
      className={`relative pt-16 pb-12 px-4 md:pt-24 md:pb-16 overflow-hidden ${className}`}
      style={sectionStyle}
    >
      <div className="container max-w-6xl relative z-10 md:pl-15 mx-auto">
        <div className="max-w-2xl">
          <h1 className="font-sans text-2xl md:text-3xl font-bold text-white mb-6 leading-9 break-words">
            {title}
          </h1>
          <p className="font-sans text-lg md:text-xl font-medium text-gray-200 leading-8 break-words">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}