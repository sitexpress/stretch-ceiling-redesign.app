import React from "react";
import CalculationsDashboard from "@/components/CalculationsDashboard/CalculationsDashboard";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import "../../styles/local.fonts/NautilusPompilius.css";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Калькулятор | Строй Family - натяжные Потолки по всему Сочи.",
    description: "Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет, чистый монтаж в подарок.",
};

export default function Layout({ children }: { children: string }) {
    return (
        <>
            <HeroImageBackground mode={"calculations"} />
            <CalculationsDashboard layout={children} />
        </>
    );
}
