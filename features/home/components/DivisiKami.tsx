import DivisiCard from "@/components/ui/DivisiCard";
import { DivisionsData } from "@/types/divisions";

interface DivisiKamiProps {
    data: DivisionsData;
}

export default function DivisiKami({ data }: DivisiKamiProps) {
    return(
        <section className="relative flex flex-col items-center justify-center sm:p-14 p-4">
            <div className="absolute bg-gradient-to-br from-[#0C2A5E] via-[#081936] to-[#030F22] w-full h-full top-0 left-0 -z-10"/>
            <h1 className="text-white text-2xl font-bold mb-7">Divisi Kami</h1>
            <p className="text-white text-base font-medium w-full md:w-2/3 lg:w-1/3 text-center mb-14 px-4">Kami memiliki divisi teknis yang menaungi spesifik keilmuan untuk mempersiapkan talenta agar siap dalam berlomba</p>
            
            <div className="flex gap-6 w-full overflow-x-auto scrollbar-hide px-4 lg:hidden">
                {data.divisions.map((division, index) =>(
                    <div key={division.id || index} className="flex-shrink-0">
                        <DivisiCard
                            name={division.name}
                            description={division.description}
                            image={division.image || '/assets/divisi/default.png'}
                        />
                    </div>
                ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {data.divisions.map((division, index) =>(
                    <DivisiCard
                        key={division.id || index}
                        name={division.name}
                        description={division.description}
                        image={division.image || '/assets/divisi/default.png'}
                    />
                ))}
            </div>
        </section>
    )
}