import { UiImage } from "./image";
import * as motion from "motion/react-client"

const DivisiCard = ({
    name,
    description,
    image
}:{
    name: string;
    description: string;
    image: string;
}) => {
    return(
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
            duration: 1,
            delay:0.2  
        }}
        viewport={{once: true}}
        
        className="group relative bg-white rounded-2xl pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-10 lg:pb-20 px-6 md:px-10 lg:px-8 lg:hover:bg-red-500 w-80 max-md:w-64 lg:w-full h-[320px] md:h-[320px] lg:h-[260px] transition-all duration-300 ease-in-out shadow-md lg:hover:shadow-none flex flex-col justify-center">
            <div className="flex flex-col items-center gap-5 md:gap-3 lg:gap-4 transition-opacity duration-300 lg:group-hover:opacity-0 h-full ">
                <div className="relative w-2/3 flex items-center justify-center h-fit">
                    <UiImage src={image} alt={name} width={90} height={92} className="object-contain w-full h-auto" />
                </div>
                <h3 className="font-bold text-red-500 text-center text-lg md:text-lg lg:text-xl">{name}</h3>
                <p className="text-black text-center text-sm leading-tight block lg:hidden">
                    {description}
                </p>
            </div>
            
            <div className="absolute inset-0 flex-col items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 p-6 hidden sm:flex">
                <p className="text-white text-center text-sm md:text-base leading-tight">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default DivisiCard;