"use client";

import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GlobalScrollReveal = () => {
    const pathname = usePathname();

    useGSAP(
        () => {
            const sections = gsap.utils.toArray("main section");

            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    {
                        y: 30,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 90%",
                            once: true,
                        },
                    }
                );
            });

            ScrollTrigger.refresh();
        },
        {
            dependencies: [pathname],
            revertOnUpdate: true,
        }
    );

    return null;
};

export default GlobalScrollReveal;