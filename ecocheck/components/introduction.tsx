"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="700" height="700" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Cada acción cuenta, <br />
                        <TypeAnimation
                            sequence={[
                                'reduce tu huella de CO2',
                                1000,
                                'apuesta por energía limpia',
                                1000,
                                'adopta hábitos sostenibles',
                                1000,
                                'protege nuestro planeta',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-m md:text-xl md:mx-0 md:mb-8">
                        La huella de carbono mide el impacto ambiental de nuestras acciones y reducirla es esencial para un futuro sostenible.
                    </p>

                    <p className="mx-auto mb-2 text-m md:text-xl md:mx-0 md:mb-8">
                        Diseños ligeros, código eficiente y servidores alimentados por energías renovables son pasos esenciales para promover un entorno digital más sostenible.
                    </p>

                    <div className="flex items-center justify-center gap-2 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Aprende más
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Verifica tu sitio web
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;