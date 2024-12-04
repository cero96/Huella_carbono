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
            <div className="flex min-h-[100vh] h-full bg-no-repear bg-gradient-cover">
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 bg-darkBg/60">
                    Calcula{' '}
                    <span className="font-bold text-secondary">
                        tu huella de Carbono
                    </span>
                </h1>

                <h2 className="text-xl text-center md:text-left md:text-3xl md:mt-12">
                    Ingresa la url de la página a consultar
                </h2>

                <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Enter your email"/>
                    <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Consultar</button>
                </div>


{/*                 <CounterServices />

                <TimeLine /> */}
            </ContainerPage>
            </div>
        </>
    );
}

export default AboutMePage;