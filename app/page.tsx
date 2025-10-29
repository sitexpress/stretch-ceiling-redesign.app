"use client";
import { FeaturesGrid } from "@/components/FeatuersGrid/FeaturesGrid";
import { FeaturesCards } from "@/components/FeaturesCards/FeaturesCards";
import { FeaturesCardsOurTeam } from "@/components/FeaturesCardsOurTeam/FeaturesCardsOurTeam";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import MapComponent from "@/components/MapComponent/MapComponent";
import React, { useRef, useState } from "react";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import { PortfolioCarousel } from "@/components/PortfolioCarousel/PortfolioCarousel";
import { HeroBullets } from "@/components/ReDesign/Hero/HeroBullets";
import DividerComponent from "@/components/ReDesign/DividerComponent/DividerComponent";
import "../styles/scroll.css";
import { Offer } from "@/components/ReDesign/Offer/Offer";
import ReviewsWidget from "./portfolio/ReviewWidget";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    React.useEffect(() => {
        const firstTimeHere = localStorage.getItem("key-family");
        console.log("firstTimeHere:", firstTimeHere);
        // localStorage.clear();
        setTimeout(() => {
            if (firstTimeHere === "No") return;
            setIsOpen(true);
            localStorage.setItem("key-family", "No");
        }, 5000);
    }, []);

    const offerRef = useRef<HTMLDivElement>(null); // Указание типа для ref

    const scrollToSection = () => {
        offerRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {isOpen && <ModalComponent modalMode={"telegramBanner"} setIsOpen={setIsOpen} isOpen={isOpen} />}
            <HeroBullets scrollToSection={scrollToSection}/>
            <DividerComponent />
            <PortfolioCarousel mode="photo" />
            <DividerComponent />
            <PortfolioCarousel mode="ceiling" />
            {/* <DividerComponent /> */}
            {/* <FeaturesCards /> */}
            <DividerComponent />
            <PortfolioCarousel mode="review" />

            <DividerComponent />
            <div ref={offerRef}>
                <Offer />
            </div>
            <DividerComponent />

            <FeaturesGrid />
            <DividerComponent />
            <FeaturesCardsOurTeam mode={"main-page"} />
            <DividerComponent />
            <MapComponent mode={"main-page"} />

            <GetInTouch />
        </>
    );
}
