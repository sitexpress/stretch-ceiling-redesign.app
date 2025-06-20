 /* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import "../../styles/local.fonts/NautilusPompilius.css";
// import { YandexMetrika } from "@/lib/yandex/YandexMetrika";
import { Metadata } from "next";

export const metadata:Metadata= {
    title: "О нас | Строй Family - натяжные Потолки по всему Сочи.",
    description: "Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет, чистый монтаж в подарок.",
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
