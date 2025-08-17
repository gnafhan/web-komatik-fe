import HeroSection from "@/features/prestasi/components/HeroSection";
import PrestasiSection from "@/features/prestasi/components/PrestasiSection";
import { PrestasiMetadata } from "@/metadata/PrestasiMetadata";

export const metadata = PrestasiMetadata;

export default function PrestasiPage(){
    return(
        <>
            <HeroSection />
            <PrestasiSection />
        </>
    )
}