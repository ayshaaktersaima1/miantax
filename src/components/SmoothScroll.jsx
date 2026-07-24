"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const update = (time) => {
            lenisRef.current?.lenis?.raf(time * 1000);
        };

        const lenis = lenisRef.current?.lenis;

        lenis?.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis?.off("scroll", ScrollTrigger.update);
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            root
            ref={lenisRef}
            options={{
                autoRaf: false,
                duration: 1,
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;