<<<<<<< HEAD
import { BlurHeader } from "@/components/ui/navbar";
=======

>>>>>>> dev
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/features/TentangKami/components/HeroSection";
import { ApaItuKomatik } from "@/features/TentangKami/components/ApaItuKomatik";
import { TujuanKomatik } from "@/features/TentangKami/components/TujuanKomatik";
import { VideoProfile } from "@/features/TentangKami/components/VideoProfile";
import { getTentangKamiData } from "@/services/tentang-kami.service";

export default async function TentangKamiPage() {
  const data = await getTentangKamiData();
<<<<<<< HEAD
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <BlurHeader />
=======

  return (
    <div className="w-full font-sans overflow-x-hidden">
>>>>>>> dev
      <HeroSection
        title={data.hero_title}
        description={data.hero_description}
      />
      <ApaItuKomatik
        title={data.about_title}
        description={data.about_description}
      />
      <TujuanKomatik
        title={data.objectives_title}
        description={data.objectives_description}
        objectives={data.objectives}
      />
      <VideoProfile
        title={data.video_title}
        videoUrl={data.video_url}
      />
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> dev
    </div>
  );
}