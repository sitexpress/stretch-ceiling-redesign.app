"use client";
import { FeaturesGrid } from "@/components/FeatuersGrid/FeaturesGrid";
import { FeaturesCards } from "@/components/FeaturesCards/FeaturesCards";
import { FeaturesCardsOurTeam } from "@/components/FeaturesCardsOurTeam/FeaturesCardsOurTeam";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import MapComponent from "@/components/MapComponent/MapComponent";
import React, { useState } from "react";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import { PortfolioCarousel } from "@/components/PortfolioCarousel/PortfolioCarousel";
import { HeroBullets } from "@/components/ReDesign/Hero/HeroBullets";
import DividerComponent from "@/components/ReDesign/DividerComponent/DividerComponent";
import "../styles/scroll.css";

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

    return (
        <>
            {isOpen && <ModalComponent modalMode={"telegramBanner"} setIsOpen={setIsOpen} isOpen={isOpen} />}
            <HeroBullets />
            <DividerComponent />
            <PortfolioCarousel mode="photo" />
            <DividerComponent />
            <PortfolioCarousel mode="ceiling" />
            <DividerComponent />
            <FeaturesCards />
            <DividerComponent />
            <PortfolioCarousel mode="review" />
            <DividerComponent />

            <FeaturesGrid />
            <DividerComponent />
            <FeaturesCardsOurTeam mode={"main-page"} />
            <DividerComponent/>
            <MapComponent mode={"main-page"} />
            <GetInTouch />
        </>
    );
}
