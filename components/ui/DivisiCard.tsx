import { UiImage } from "./image";

const DivisiCard = ({
    name,
    image
}:{
    name: string;
    image: string;
}) => {
    return(
        <div className="bg-[#E6EBFE]/[0.3] backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-[#E6EBFE]/[0.4] transition-all duration-300 w-[300px] h-[120px] flex items-center justify-center">
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <UiImage src={image} alt={name} width={64} height={64} className="object-contain" />
                </div>
                <h3 className="font-bold text-white text-lg">{name}</h3>
            </div>
        </div>
    )
}

export default DivisiCard;