// components/PrestasiCard.tsx
import { UiImage } from "@/components/ui/image";

interface PrestasiCardProps {
  title: string;
  team: string;
  members: string;
  image: string;
  // category?: string;
}

export default function PrestasiCard({ title, team, members, image }: PrestasiCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden m-2  hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <UiImage
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="mt-auto space-y-2">
          <p className="text-sm font-medium text-gray-700">
            {team}
          </p>
          <p className="text-xs text-gray-500 line-clamp-2">
            {members}
          </p>
        </div>
      </div>
    </div>
  );
}