import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="flex min-h-[100vh] h-full bg-no-repear bg-gradient-cover">
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt=20 md:mt-0 ">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Caclula <span className="font-bold text-secondary"> tu huella de carbono.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ingresa la url de tu servicio web para calcular la huella de carbono.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    {/* <SliderServices /> */}
                </div>
            </div>
            </div>
        </>
    );
}

export default ServicesPage;