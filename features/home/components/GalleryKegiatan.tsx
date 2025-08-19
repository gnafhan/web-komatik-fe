"use client";
import { UiImage } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client"
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
			<motion.div
				className="absolute inset-0 w-full h-full z-0"
				animate={{ scale: [1, 1.01, 1], opacity: [1, 0.98, 1] }}
				transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
				style={{ willChange: "transform, opacity" }}
			>
				<UiImage
					src="/assets/Gallery/bg-Gallery.png"
					alt="Gallery Background"
					fill
					className="object-cover w-full h-full"
				/>
			</motion.div>

			{/* Ambient orbs */}
			<motion.div
				className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl z-0"
				animate={{ x: [0, 20, -10, 0], y: [0, 14, -8, 0], opacity: [0.22, 0.34, 0.28, 0.22] }}
				transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
				style={{ willChange: "transform, opacity" }}
			/>
			<motion.div
				className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl z-0"
				animate={{ x: [0, -18, 10, 0], y: [0, -12, 20, 0], opacity: [0.2, 0.3, 0.26, 0.2] }}
				transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
				style={{ willChange: "transform, opacity" }}
			/>

			{/* Content Container */}
			<div className="relative z-10 container mx-auto px-4">
				{/* Section Title */}
				<div className="text-center mb-12 md:mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ type: "spring", stiffness: 70, damping: 26, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
						style={{ willChange: "transform, opacity" }}
					>
						Galeri Kegiatan
					</motion.h2>
				</div>

				{/* Image Gallery Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 max-w-6xl mx-auto">
					{data.gallery.map((image, index) => {
						const layout = galleryImages[index] || galleryImages[0];
						return(
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ type: "spring", stiffness: 75, damping: 26, delay: 0.1 + (index % 8) * 0.06 }}
							viewport={{ once: true }}
							className={cn(
								"relative overflow-hidden rounded-xl shadow-md bg-white border-4 border-white",
								layout.className,
								layout.aspectRatio
							)}
							style={{ willChange: "transform, opacity" }}
						>
							<motion.div
								className="w-full h-full rounded-lg overflow-hidden"
								animate={{ y: [0, -6, 0] }}
								transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: (index % 5) * 0.2 }}
								style={{ willChange: "transform" }}
							>
								{/* Placeholder image */}
								<div className="w-full h-full rounded-lg overflow-hidden">
									<UiImage
										src={image.image}
										alt={`Gallery ${image.position}`}
										fill
										className="object-cover w-full h-full"
									/>
								</div>
							</motion.div>
						</motion.div>
					)
				})}
				</div>
			</div>
		</section>
	);
}