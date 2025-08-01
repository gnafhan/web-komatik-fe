export const VideoProfile = () => {
  return (
    <>
      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center relative inline-block">
              Video Profile
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-600"></div>
            </h2>

            {/* Video Container */}
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/lelkP0nqxzc"
                title="KOMATIK UGM Video Profile"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-gray-200" />
    </>
  );
};