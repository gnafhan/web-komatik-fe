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
        <section className="relative flex flex-col items-center justify-center sm:p-14 p-4 z-10">
            <motion.div
                className="absolute bg-gradient-to-br from-[#0C2A5E] via-[#081936] to-[#030F22] w-full h-full top-0 left-0 -z-10"
                initial={{ opacity: 0.95, scale: 1 }}
                animate={{ opacity: [0.95, 1, 0.95], scale: [1, 1.01, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform, opacity" }}
            />
            <motion.div
                className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl -z-10"
                animate={{ x: [0, 20, -10, 0], y: [0, 10, -10, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
            />
            <motion.div
                className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl -z-10"
                animate={{ x: [0, -15, 10, 0], y: [0, -12, 20, 0] }}
                transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
            />
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 26, delay: 0.15 }}
            viewport={{once: true}} 
            className="text-white text-2xl font-bold mb-7"
            style={{ willChange: "transform, opacity" }}>Divisi Kami</motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 28, delay: 0.3 }}
            viewport={{once: true}}
            className="text-white text-base font-medium w-full md:w-2/3 lg:w-1/3 text-center mb-14 px-4"
            style={{ willChange: "transform, opacity" }}>Kami memiliki divisi teknis yang menaungi spesifik keilmuan untuk mempersiapkan talenta agar siap dalam berlomba</motion.p>
            
            <div className="flex gap-6 w-full overflow-x-auto scrollbar-hide px-4 lg:hidden">
                {divisi.map((divisi, index) =>(
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 75, damping: 24, delay: 0.1 + index * 0.06 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                        style={{ willChange: "transform, opacity" }}
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 5 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: (index % 4) * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            style={{ willChange: "transform" }}
                        >
                            <DivisiCard
                                name={divisi.name}
                                description={divisi.description}
                                image={divisi.image}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {divisi.map((divisi, index) =>(
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 75, damping: 26, delay: 0.15 + index * 0.08 }}
                        viewport={{ once: true }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: (index % 5) * 0.15 }}
                            whileHover={{ scale: 1.03 }}
                            style={{ willChange: "transform" }}
                        >
                            <DivisiCard
                                name={divisi.name}
                                description={divisi.description}
                                image={divisi.image}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}