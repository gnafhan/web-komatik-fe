"use client";
import { UiImage } from "@/components/ui/image";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client"

interface ImageType {
    id: string;
    src: string;
}

export default function HeroSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState<ImageType[]>([]);

    const fetchImage = useCallback(async () => {
        try {
            const response = await fetch('https://dummyjson.com/image/687x317');
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            return { id: self.crypto.randomUUID(), src: url };
        } catch (error) {
            console.error("Error fetching image:", error);
            return null;
        }
    }, []);

    useEffect(() => {
        const initImages = async () => {
            const initialImages = await Promise.all(
                Array.from({ length: 5 }).map(() => fetchImage())
            );
            setImages(initialImages.filter((img): img is ImageType => img !== null));
        };
        initImages();
    }, [fetchImage]);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });

        return () => {
            images.forEach(image => URL.revokeObjectURL(image.src));
        };
    }, [api, images]);

    return (
        <div className="w-full font-sans relative h-[85vh] min-[480px]:h-[90vh] lg:h-[calc(100vh+4rem)] flex flex-col items-center px-2 sm:px-4 overflow-hidden">
            {/* Background Elements */}
            <motion.div 
            initial={{opacity: 0, translateX: -300}}
            animate={{opacity: 1, translateX: 0}}
            transition={{duration: 2, delay: 1.2}}
            className="absolute -top-[5%] -left-[40%] w-[80%] h-auto aspect-[325/485] min-[480px]:-top-[2%] min-[480px]:-left-[30%] min-[480px]:w-[70%] sm:-top-[15%] sm:-left-[15%] sm:w-[50%] sm:aspect-[572/485]">
                <UiImage src="/assets/home/bg_side.png" alt="Hero Section" fill className="object-cover object-right w-full h-full" />
            </motion.div>
            <motion.div 
            initial={{ translateX: -300, opacity: 0}}
            animate={{ translateX: 0, opacity: 1}}
            transition={{duration: 2, delay: 1.2}}
            className="absolute -top-[5%] -right-[40%] w-[80%] h-auto aspect-[325/485] scale-x-[-1] min-[480px]:-top-[2%] min-[480px]:-right-[30%] min-[480px]:w-[70%] sm:-top-[15%] sm:-right-[15%] sm:w-[50%] sm:aspect-[572/485]">
                <UiImage src="/assets/home/bg_side.png" alt="Hero Section" fill className="object-cover object-right w-full h-full -scale-x-100" />
            </motion.div>

            {/* Title */}
            <div className="absolute top-[20%] min-[480px]:top-[17.5%] sm:top-[16.5%] z-20 flex flex-col items-center text-center max-w-2xl w-full px-2 sm:px-4">
                <motion.p 
                whileInView={{opacity: 1, translateY: 0}}
                initial={{opacity: 0, translateY: 100}}
                transition={{
                    duration: 1.2,
                    delay:0.5  
                }}
                viewport={{once: true}}
                className="text-lg min-[480px]:text-xl md:text-2xl lg:text-4xl font-bold text-center">
                    <span className="text-black">Empowering IT excellence through</span>
                    <br />
                    <span className="text-[#d80000]">innovation</span>
                    <span className="text-black"> and </span>
                    <span className="text-[#d80000]">competition</span>
                </motion.p>
            </div>

            {/* Gradient Blur */}
            <div className="absolute top-[65%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] w-[300px] h-[250px] min-[480px]:w-[400px] min-[480px]:h-[350px] sm:w-[500px] sm:h-[450px] lg:w-[600px] lg:h-[500px] bg-gradient-to-br from-[#E2A7A4] via-[#D36973] to-[#5C183D] opacity-30 blur-[80px] min-[480px]:blur-[120px] sm:blur-[160px] rounded-full mix-blend-normal pointer-events-none"></div>
            <div className="hidden sm:block absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-[30%] w-[280px] h-[400px] min-[480px]:w-[350px] min-[480px]:h-[500px] sm:w-[450px] sm:h-[650px] lg:w-[582px] lg:h-[843px] opacity-13 blur-[70px] min-[480px]:blur-[100px] sm:blur-[135px] bg-gradient-to-b from-[#01889C] via-[#13366E] to-[#3C216E] rounded-full" />
            <div className="hidden sm:block absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-[30%] w-[280px] h-[400px] min-[480px]:w-[350px] min-[480px]:h-[500px] sm:w-[450px] sm:h-[650px] lg:w-[582px] lg:h-[843px] opacity-13 blur-[70px] min-[480px]:blur-[100px] sm:blur-[135px] bg-gradient-to-b from-[#01889C] via-[#13366E] to-[#3C216E] rounded-full" />

            {/* Carousel - Positioned closer to bottom */}
            <div className="absolute bottom-[8%] min-[480px]:bottom-[10%] sm:top-[40%] w-full z-10">
                <Carousel
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                    }}
                    className="w-full overflow-visible"
                >
                    <CarouselContent className="-ml-3 min-[480px]:-ml-3 md:-ml-2 flex items-center">
                        {images.map((image, index) => (
                            <CarouselItem key={image.id} className="pl-2 min-[480px]:pl-2 basis-9/12 min-[480px]:basis-10/12 sm:basis-10/12 md:basis-9/12 lg:basis-7/12 flex justify-center items-center">
                                <div
                                    className={cn(
                                        "relative overflow-hidden rounded-lg w-full aspect-[320/220] sm:aspect-[687/317] transition-all duration-300 ease-in-out",
                                        index === current
                                            ? "scale-100 shadow-[0px_10px_10px_0px_#08193640]"
                                            : "scale-[0.85] min-[480px]:scale-90"
                                    )}
                                >
                                    <Image
                                        src={image.src}
                                        alt={`Carousel image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* Reduced margin-top for indicators */}
                <div className="flex justify-center items-center gap-1 min-[480px]:gap-2 mt-8 min-[480px]:mt-10">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-1.5 min-[480px]:h-2 rounded-full transition-all duration-300 ${current === index ? 'w-6 min-[480px]:w-8 bg-red-600' : 'w-1.5 min-[480px]:w-2 bg-[#F9F9F9]'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}