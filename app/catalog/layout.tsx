import React, { ReactNode } from "react";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Каталог | Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет",
    description:
        "Натяжные потолки Сочи/Адлер/Поляна *от 290 р/м2 c гарантией на полотно до 10 лет ,чистый монтаж в подарок",
};
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <HeroImageBackground mode={"catalog"} />
            {children}
        </>
    );
}

