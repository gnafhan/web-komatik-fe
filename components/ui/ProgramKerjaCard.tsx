import { UiImage } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client"

interface ProgramKerjaCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
}

export default function ProgramKerjaCard({ title, description, image, category }: ProgramKerjaCardProps) {
  return (
    <motion.div 
    whileInView={{opacity: 1, translateY: 0}}
    initial={{opacity: 0, translateY: 100}}
    transition={{
        duration: 1.2,
        delay:0.5  
    }}
    viewport={{once: true}}
    className="relative group overflow-hidden rounded-lg h-120 w-full px-5">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <UiImage
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/95 via-black/85 to-black/10 z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white gap-y-3">
        <h3 className="text-3xl font-bold mb-2 line-clamp-2 text-[#D80000]">
          {title}
        </h3>
        
        <p className="text-sm text-white/90 mb-4 line-clamp-3">
          {description}
        </p>
        
        <Button 
        size="sm"
        className="bg-[#D80000] w-full text-white hover:bg-white hover:text-black transition-all duration-300 py-5"
        >
        Selengkapnya
        </Button>
      </div>
    </motion.div>
  );
}
