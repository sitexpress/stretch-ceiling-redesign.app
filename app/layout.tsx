import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import StoreProvider from "@/app/StoreProvider";
import { Notifications } from "@mantine/notifications";
import Sidebar from "@/components/Sidebar/Sidebar";
import { YandexMetrika } from "@/lib/yandex/YandexMetrika";
import { DoubleHeader } from "@/components/ReDesign/Header/DoubleHeader";
import { Footer } from "@/components/ReDesign/Footer/Footer";
import Script from "next/script";
import localFont from 'next/font/local';

import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "../styles/local.fonts/NautilusPompilius.css";
import "../styles/local.fonts/FiraSansExtraCondensedLight.css";
import "../styles/local.fonts/FiraSansExtraCondensedMedium.css";
import "../styles/local.fonts/FiraSansExtraCondensedRegular.css";
import "../styles/local.fonts/FiraSansExtraCondensedSemiBold.css";

import "../styles/local.fonts/AdventProRegular.css";
import "../styles/local.fonts/AdventProBold.css";

import "../styles/local.fonts/TildaSansRegular.css";
import "../styles/local.fonts/TildaSansMedium.css";
import "../styles/local.fonts/TildaSansSemibold.css";

export const metadata: Metadata = {
    title: "Натяжные Потолки по всему Сочи от 290 р/м2 c гарантией на полотно до 10 лет",
    description:
        "Натяжные потолки Сочи/Адлер/Поляна *от 290 р/м2 c гарантией на полотно до 10 лет ,чистый монтаж в подарок",
};

const myFont = localFont({
  src: '../styles/local.fonts/TildaSansSemibold.woff2',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={myFont.className}>
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

                            {/* <Script
                            id="chatway"
                            src="https://cdn.chatway.app/widget.js?id=w5xbJehAiX4o"
                            strategy="lazyOnload"
                        /> */}
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

