"use client";
import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import classes from "./HeroCarousel.module.css";

const images = [
    "/images/hero-carousel/1.jpg",
    "/images/hero-carousel/2.webp",
    "/images/hero-carousel/4.webp",
    "/images/hero-carousel/6.webp",
];
export default function HeroCarousel() {
    const autoplay = useRef(Autoplay({ delay: 10000 }));

    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} className={classes.my_img} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            withIndicators
            withControls
            height={"100vh"}
            plugins={[autoplay.current]}
            // onMouseEnter={autoplay.current.stop}
            // onMouseLeave={autoplay.current.reset}
            className={classes.my_carousel}
            draggable
            loop
            controlSize={32}
        >
            {slides}
        </Carousel>
    );
}
