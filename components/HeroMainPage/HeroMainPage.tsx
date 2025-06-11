"use client";
import React from "react";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import { Container, Title, Tooltip } from "@mantine/core";
import { IconArrowDown, IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import classes from "./HeroMainPage.module.css";
import { Banner } from "../Banner/Banner";

export function HeroMainPage() {
    const [scrollY, setScrollY] = React.useState(0);
    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
        // setCount(count + 1)
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // xs: "30em",
    // sm: "48em",
    // md: "64em",
    // lg: "74em",
    // xl: "90em",

    return (
        <div
            className={classes.hero}
            style={{
                height: "100vh",
            }}
        >
            <Image
                src="/images/logo/logo.png"
                width={200}
                height={200}
                alt="Stroy Family logo"
                className={classes.logo_hero}
                style={{ zIndex: 2 }}
                priority={true}
            />

            <Container className={classes.container} size="md" style={{ zIndex: 2 }}>
                {/* <Banner/> */}
                <Title
                    style={{
                        fontFamily: "Nautilus",
                        zIndex: 2,
                    }}
                    order={2}
                    className={classes.header_name}
                    ta="center"
                    c="dark.7"
                >
                    Строй Family
                </Title>
                {/* <Title order={1} size={lg ? 28 : xs ? 8 : 32} ta="center" fw={900}> */}
                <Title
                    order={1}
                    className={classes.header_search}
                    style={{
                        fontFamily: "Nautilus",
                        zIndex: 2,
                    }}
                    ta="center"
                    fw={900}
                    c="dark.7"
                >
                    Натяжные потолки в Сочи
                </Title>
                <Tooltip label="Каталог">
                    <IconChevronDown
                        size={40}
                        className={classes.arrow}
                        onClick={() =>
                            window.scrollTo({
                                top: 800,
                                left: 0,
                                behavior: "smooth",
                            })
                        }
                    />
                </Tooltip>
            </Container>
            <HeroCarousel />
        </div>
    );
}
