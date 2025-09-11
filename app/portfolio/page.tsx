import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { ImagePortfolioCardsGrid } from "@/components/Portfolio/ImagePortfolioCardsGrid/ImagePortfolioCardsGrid";
import React from "react";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import DividerComponent from "@/components/ReDesign/DividerComponent/DividerComponent";

export default function Portfolio() {
     
    return (
        <>
            {/*<Sidebar/>*/}
            {/*<HeaderMegaMenu />*/}
            <HeroImageBackground mode={"portfolio"} />
            <DividerComponent />
            <ImagePortfolioCardsGrid />
            <DividerComponent />
            <GetInTouch />
            {/*<FooterLinks/>*/}
        </>
    );
}
