import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/services.png" width="200" height="200" className="w-[300px] h-full " alt="Avatar" />
        </MotionTransition>
    );
}

export default AvatarServices;