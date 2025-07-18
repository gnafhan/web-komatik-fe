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
        <div className="w-full font-sans relative min-h-screen flex flex-col items-center px-4 pb-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -top-[2%] -left-[18%] w-[70%] h-auto aspect-[325/485] sm:-top-[15%] sm:-left-[15%] sm:w-[50%] sm:aspect-[572/485]">
                <UiImage src="/assets/home/bg_side.png" alt="Hero Section" fill className="object-cover object-right w-full h-full sm:object-cover" />
            </div>
            <div className="absolute -top-[2%] -right-[18%] w-[70%] h-auto aspect-[325/485] scale-x-[-1] sm:-top-[15%] sm:-right-[15%] sm:w-[50%] sm:aspect-[572/485]">
                <UiImage src="/assets/home/bg_side.png" alt="Hero Section" fill className="object-cover object-right w-full h-full -scale-x-100 sm:object-cover" />
            </div>

            {/* Title */}
            <div className="absolute top-[13%] sm:top-[18%] z-20 flex flex-col items-center text-center max-w-2xl w-full px-4">
                <p className="text-base md:text-2xl lg:text-4xl font-bold text-center">
                    <span className="text-black">Empowering IT excellence through</span>
                    <br />
                    <span className="text-[#d80000]">innovation</span>
                    <span className="text-black"> and </span>
                    <span className="text-[#d80000]">competition</span>
                </p>
            </div>

            {/* Gradient Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] w-[600px] h-[500px] bg-gradient-to-br from-[#E2A7A4] via-[#D36973] to-[#5C183D] opacity-30 blur-[160px] rounded-full mix-blend-normal pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-[30%] w-[582px] h-[843px] opacity-13 blur-[135px] bg-gradient-to-b from-[#01889C] via-[#13366E] to-[#3C216E] rounded-full" />
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-[30%] w-[582px] h-[843px] opacity-13 blur-[135px] bg-gradient-to-b from-[#01889C] via-[#13366E] to-[#3C216E] rounded-full" />

            {/* Carousel */}
            <div className="absolute top-[40%] sm:top-[40%] w-full z-10">
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
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 flex items-center">
                        {images.map((image, index) => (
                            <CarouselItem key={image.id} className="pl-2 basis-10/12 md:basis-9/12 lg:basis-7/12 flex justify-center items-center">
                                <div
                                    className={cn(
                                        "relative overflow-hidden rounded-lg w-full aspect-[687/317] transition-all duration-300 ease-in-out",
                                        index === current
                                            ? "scale-100 shadow-[0px_20px_32px_0px_#08193640]"
                                            : "scale-90"
                                    )}
                                >
                                    <Image
                                        src={image.src}
                                        alt={`Carousel image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="flex justify-center items-center gap-2 mt-8">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-red-600' : 'w-2 bg-[#F9F9F9]'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

