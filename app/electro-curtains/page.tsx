import React from "react";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import {DividerComponent} from "@/components/ReDesign/DividerComponent/DividerComponent";
import ElectricCurtains from "@/components/ElectricCurtains/ElectricCurtains";

export default function ElectricCurtainsPage() {
    return (
        <>
            <HeroImageBackground mode={"onviz"} />
            <DividerComponent />
            <ElectricCurtains />
            <DividerComponent />
        </>
    );
}