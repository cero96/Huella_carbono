"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import CoverParticles from "@/components/cover-particles";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <CoverParticles />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Calcula{' '}
                    <span className="font-bold text-secondary">
                        tu huella de Carbono
                    </span>
                </h1>

                <h2 className="text-xl text-center md:text-left md:text-3xl md:mt-12">
                    Ingresa la url de la página a consultar
                </h2>

                <form>

                </form>
/* 
                <CounterServices />

                <TimeLine />
 */
            </ContainerPage>
        </>
    );
}

export default AboutMePage;