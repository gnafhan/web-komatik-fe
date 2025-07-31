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
      className={`relative pt-24 pb-16 px-4 overflow-hidden ${className}`}
      style={sectionStyle}
    >
      <div className="container max-w-6xl relative z-10 pl-53">
        <div className="max-w-2xl">
          <h1 className="font-sans text-3xl font-bold text-white mb-6 leading-9">
            {title}
          </h1>
          <p className="font-sans text-xl font-medium text-gray-200 leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}