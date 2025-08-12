interface TujuanKomatikProps {
  title: string;
  description: string;
  objectives: string[];
}

export const TujuanKomatik = ({ title, description, objectives }: TujuanKomatikProps) => {
  return (
    <div className="w-full py-16 md:py-24"
         style={{
           background: 'linear-gradient(113.67deg, #0C2A5E -10.22%, #081936 62.39%, #030F22 107.98%)'
         }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
              {title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-red-600"></div>
            </h2>
          </div>

          {/* Description */}
          <div className="text-base md:text-lg text-gray-300 mb-8">
            <p>
              {description}
            </p>
          </div>

          {/* Objectives List */}
          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm
                         transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center
                              justify-center text-white font-semibold transition-transform
                              duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
                <p className="text-white text-base md:text-lg">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};