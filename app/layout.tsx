import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";
import { theme } from "../theme";
// import { HeaderMegaMenu } from "@/components/HeaderMegaMenu/HeaderMegaMenu";
import { FooterLinks } from "@/components/FooterLinks/FooterLinks";
import "@mantine/notifications/styles.css";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import StoreProvider from "@/app/StoreProvider";
import { Notifications } from "@mantine/notifications";
import Sidebar from "@/components/Sidebar/Sidebar";
import { YandexMetrika } from "@/lib/yandex/YandexMetrika";
import { DoubleHeader } from "@/components/ReDesign/Header/DoubleHeader";
import { Footer } from "@/components/ReDesign/Footer/Footer";
import Script from "next/script";


export const metadata: Metadata = {
    title: "Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет",
    description:
        "Натяжные потолки Сочи/Адлер/Поляна *от 290 р/м2 c гарантией на полотно до 10 лет ,чистый монтаж в подарок",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <link rel="icon" href="./favicon.ico" sizes="any" type="image/x-icon" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <meta name="robots" content="all" />
            </head>
            <body>
                <StoreProvider>
                    <MantineProvider theme={theme}>
                            <YandexMetrika />
                            <ColorSchemeScript nonce="8IBTHwOdqNKAWeKl7plt8g==" defaultColorScheme="light" />
                            {/* <ModalsProvider> */}

                            <Script
                            id="chatway"
                            src="https://cdn.chatway.app/widget.js?id=w5xbJehAiX4o"
                            strategy="lazyOnload"
                        />
                            <Notifications />
                            <Sidebar />
                            <DoubleHeader />
                            {/* <HeaderMegaMenu /> */}
                            {children}
                            <Footer/>
                            {/* </ModalsProvider> */}
                    </MantineProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
