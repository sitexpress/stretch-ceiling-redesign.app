import "../../styles/local.fonts/NautilusPompilius.css";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata:Metadata  = {
    title: "Портфолио | Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет",
    description: "Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет, чистый монтаж в подарок.",
};
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
