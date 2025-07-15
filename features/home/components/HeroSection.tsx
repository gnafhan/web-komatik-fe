import { UiImage } from "@/components/ui/image"

export default function HeroSection() {
    return (
        <div className="w-full font-sans relative min-h-screen">
            {/* Mobile & Desktop Background Elements */}
            <div className="absolute -top-[2%] -left-[18%] w-[70%] h-auto aspect-[325/485] sm:-top-[9%] sm:-left-[15%] sm:w-[50%] sm:aspect-[572/485]">
                <UiImage src="/assets/home/bg_side.png" alt="Hero Section" fill className="object-cover object-right w-full h-full sm:object-cover" />
            </div>
            <div className="absolute -top-[2%] -right-[18%] w-[70%] h-auto aspect-[325/485] scale-x-[-1] sm:-top-[9%] sm:-right-[15%] sm:w-[50%] sm:aspect-[572/485]">
                <UiImage src="/assets/home/bg_side.png" alt="Hero Section" fill className="object-cover object-right w-full h-full -scale-x-100 sm:object-cover" />
            </div>
            {/* <div className="relative z-10 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white">Hero Section</h1>
            </div> */}
        </div>
    );
}