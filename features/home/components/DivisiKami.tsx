import DivisiCard from "@/components/ui/DivisiCard";
import * as motion from "motion/react-client"


interface Divisi {
    name: string;
    description: string;
    image: string;
}
export default function DivisiKami() {
    const divisi: Divisi[] = [
        {
            name: "UX GAMA",
            description: "Divisi yang berfokus pada pengembangan UI/UX",
            image: "/assets/divisi/ux-gama.png"
        },
        {
            name: "Software Research Development",
            description: "Divisi yang berfokus pada pengembangan aplikasi dan pemrograman",
            image: "/assets/divisi/srd.png"
        },
        {
            name: "ASGama",
            description: "Divisi yang berfokus pada pengembangan website dan aplikasi web",
            image: "/assets/divisi/as-gama.png" 
        },
        {
            name: "IoT Gama",
            description: "Divisi yang berfokus pada pengembangan aplikasi mobile",
            image: "/assets/divisi/iot-gama.png" 
        },
        {
            name: "GaM-LAB",
            description: "Divisi yang berfokus pada analisis data dan machine learning",
            image: "/assets/divisi/gam-lab.png"
        },
        {
            name: "Competitive Programming",
            description: "Divisi yang berfokus pada keamanan siber dan ethical hacking",
            image: "/assets/divisi/cp.png" 
        },
        {
            name: "DMAI",
            description: "Divisi yang berfokus pada jaringan dan infrastruktur IT",
            image: "/assets/divisi/dmai.png" 
        },
        {
            name: "Animasi",
            description: "Divisi yang berfokus pada desain grafis dan multimedia",
            image: "/assets/divisi/animasi.png" 
        }
    ]
    return(
        <section className="relative flex flex-col items-center justify-center sm:p-14 p-4">
            <div className="absolute bg-gradient-to-br from-[#0C2A5E] via-[#081936] to-[#030F22] w-full h-full top-0 left-0 -z-10"/>
            <motion.h1
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                duration: 1.5,
                delay:0.3  
            }}
            viewport={{once: true}} 
            className="text-white text-2xl font-bold mb-7">Divisi Kami</motion.h1>
            <motion.p 
            whileInView={{opacity: 1, translateY: 0}}
            initial={{opacity: 0, translateY: 50}}
            transition={{
                duration: 1.2,
                delay:0.5  
            }}
            viewport={{once: true}}
            className="text-white text-base font-medium w-full md:w-2/3 lg:w-1/3 text-center mb-14 px-4">Kami memiliki divisi teknis yang menaungi spesifik keilmuan untuk mempersiapkan talenta agar siap dalam berlomba</motion.p>
            
            <div className="flex gap-6 w-full overflow-x-auto scrollbar-hide px-4 lg:hidden">
                {divisi.map((divisi, index) =>(
                    <div key={index} className="flex-shrink-0">
                        <DivisiCard
                            name={divisi.name}
                            description={divisi.description}
                            image={divisi.image}
                        />
                    </div>
                ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {divisi.map((divisi, index) =>(
                    <DivisiCard
                        key={index}
                        name={divisi.name}
                        description={divisi.description}
                        image={divisi.image}
                    />
                ))}
            </div>
        </section>
    )
}