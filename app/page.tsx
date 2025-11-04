"use client";
import { GridAsymmetrical } from "@/components/ElectricCurtains/ElectricCurtains";
import { FeaturesGrid } from "@/components/FeatuersGrid/FeaturesGrid";
import { FeaturesCardsOurTeam } from "@/components/FeaturesCardsOurTeam/FeaturesCardsOurTeam";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import MapComponent from "@/components/MapComponent/MapComponent";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import { PortfolioCarousel } from "@/components/PortfolioCarousel/PortfolioCarousel";
import {
    DividerComponent,
    DividerComponentConstrDown,
    DividerComponentConstrUp,
} from "@/components/ReDesign/DividerComponent/DividerComponent";
import { HeroBullets } from "@/components/ReDesign/Hero/HeroBullets";
import { Offer } from "@/components/ReDesign/Offer/Offer";
import React, { useRef, useState } from "react";
import "../styles/scroll.css";
import { Tarif } from "@/components/ReDesign/Tarif/Tarif";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(1000);

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
            <HeroBullets scrollToSection={scrollToSection} />
            <DividerComponent />
            <Tarif />

            <DividerComponentConstrUp />
            <GridAsymmetrical mode="constructions" height={height} />
            <DividerComponentConstrDown height={height} setHeight={setHeight} />
           
            <PortfolioCarousel mode="photo" />
             <DividerComponent />
            <PortfolioCarousel mode="ceiling" />
            {/* <DividerComponent /> */}
            {/* <FeaturesCards /> */}
            <DividerComponent />
            <div ref={offerRef}>
                <Offer />
            </div>
            {/* <DividerComponent />
            <FeaturesGrid /> */}
            <DividerComponent />
            <FeaturesCardsOurTeam mode={"main-page"} />
            <DividerComponent />
            <PortfolioCarousel mode="review" />
            <DividerComponent />
            <MapComponent mode={"main-page"} />
            <GetInTouch />
        </>
    );
}
