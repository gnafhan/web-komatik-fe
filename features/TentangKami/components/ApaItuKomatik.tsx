interface ApaItuKomatikProps {
  title: string;
  description: string;
}

export const ApaItuKomatik = ({ title, description }: ApaItuKomatikProps) => {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              {title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-red-600"></div>
            </h2>
          </div>

          {/* Description */}
          <div className="text-base md:text-lg text-gray-700 space-y-6">
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};