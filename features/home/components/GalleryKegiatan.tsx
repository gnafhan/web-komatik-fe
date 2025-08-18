"use client";
import { UiImage } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { GalleryData } from "@/types/gallery";

const galleryImages = [
	{ className: "col-span-2 row-span-2", aspectRatio: "aspect-[3/2]" },
	{
		className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className:
		"hidden md:block col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className:
		"hidden md:block col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className:
		"hidden md:block col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{ className: "col-span-2 row-span-2", aspectRatio: "aspect-[3/2]" },
	{
		className:
		"hidden md:block col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
	{
		className:
		"hidden md:block col-span-2 row-span-2 md:col-span-1 md:row-span-1",
		aspectRatio: "aspect-[3/2]",
	},
];

interface GalleryKegiatanProps {
	data: GalleryData;
}

export default function GalleryKegiatan({ data }: GalleryKegiatanProps) {
	return (
		<section className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 w-full h-full z-0">
				<UiImage
					src="/assets/Gallery/bg-Gallery.png"
					alt="Gallery Background"
					fill
					className="object-cover w-full h-full"
				/>
			</div>

			{/* Content Container */}
			<div className="relative z-10 container mx-auto px-4">
				{/* Section Title */}
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Gallery Kegiatan
					</h2>
				</div>

				{/* Image Gallery Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 max-w-6xl mx-auto">
					{data.gallery.map((galleryItem, index) => {
						const layout = galleryImages[index] || galleryImages[0];
						
						return (
							<div
								key={galleryItem.id}
								className={cn(
									"relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white border-4 border-white",
									layout.className,
									layout.aspectRatio
								)}
							>
								{/* Inner image container with border */}
								<div className="w-full h-full rounded-lg overflow-hidden">
									<UiImage
										src={galleryItem.image}
										alt={`Gallery ${galleryItem.position}`}
										fill
										className="object-cover w-full h-full"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}