import ContactSection from "@/components/ContactSection/ContactSection";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import MapComponent from "@/components/MapComponent/MapComponent";
import DividerComponent from "@/components/ReDesign/DividerComponent/DividerComponent";
import React from "react";
export default function Contacts() {
    return (
        <>
            <HeroImageBackground mode={"contacts"} />
            <DividerComponent />
            <ContactSection />
            <DividerComponent />
            <MapComponent mode={"contact-page"} />
            <GetInTouch />
        </>
    );
}
