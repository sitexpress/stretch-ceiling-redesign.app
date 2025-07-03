import  { ReactNode } from "react";
// import { YandexMetrika } from "@/lib/yandex/YandexMetrika";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Контакты | Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет",
    description: "Натяжные потолки Сочи/Адлер/Поляна *от 290 р/м2 c гарантией на полотно до 10 лет ,чистый монтаж в подарок",
};
export default function Layout({ children }: { children: ReactNode }) {
    return <>{children}</>
}