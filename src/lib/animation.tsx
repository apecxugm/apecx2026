"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default function Animation() {
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const tween = gsap.from(".hero-light", {
      duration: 2,
      drawSVG: 0,
      delay: 0.7,
    });

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const tween = gsap.from(".hero-light-bottom", {
      duration: 3,
      drawSVG: 0,
    });

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const tween = gsap.fromTo(
      ".glowing",
      {
        opacity: 0,
        scale: 0.2,
        filter: "brightness(0) drop-shadow(0 0 0 rgba(255, 255, 255, 0))",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "brightness(1) drop-shadow(0 0 24px rgba(255, 255, 255, 0.85))",
        duration: 2,
        ease: "power1.out",
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".shoot-left");
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const tweens = elements.map((element) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      return gsap.from(element, {
        x: centerX - elementCenterX,
        y: centerY - elementCenterY,
        scale: 0,
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        ease: "power1.out",
      });
    });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".shoot-right");
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const tweens = elements.map((element) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      return gsap.from(element, {
        x: centerX - elementCenterX,
        y: centerY - elementCenterY,
        scale: 0,
        opacity: 0,
        duration: 1.2,
        delay: 1,
        ease: "power1.out",
      });
    });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  useEffect(() => {
    const tween = gsap.fromTo(
      ".opacity",
      {
        opacity: 0,
        scale: 1.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  return null;
}
