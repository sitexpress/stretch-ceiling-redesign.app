"use client";
import { AspectRatio, Badge, Container, Group, Title, Text, Button } from "@mantine/core";
import classes from "./VideoComponent.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconBrandYoutube, IconChevronLeft } from "@tabler/icons-react";
import AnimateEnhanced from "../Animate/Animate";

type VideoComponentType = {
    mode: "main-page" | "about-page" | "reel";
};

export default function VideoComponent({ mode }: VideoComponentType) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 30000);
    }, []);
    return mode === "reel" ? (
        <>
            {isOpen ? (
                <div
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: "fixed",
                        bottom: "120px",
                        left: "162px",
                        zIndex: 2002,
                        transition: "left 0.5s linear",
                        cursor: "pointer",
                    }}
                >
                    <IconChevronLeft
                        style={{
                            width: "35px",
                            height: "35px",
                            color: "black",
                        }}
                    />
                </div>
            ) : (
                <div
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: "fixed",
                        bottom: "120px",
                        left: "5px",
                        zIndex: 2002,
                        transition: "left 0.5s linear",
                        cursor: "pointer",
                    }}
                >
                    <IconBrandYoutube
                        style={{
                            width: "35px",
                            height: "35px",
                            color: "black",
                        }}
                    />
                </div>
            )}

            <iframe
                style={{
                    left: `${isOpen ? "10px" : "-300px"}`,
                }}
                className={classes.reel}
                src="https://player.vimeo.com/video/1039409107?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;player_id=0&amp;app_id=58479?autoplay=1&amp;playsinline=1&amp;controls=1&amp;quality=360p&amp;allow=autoplay"
                frameBorder="0"
                title="reel-1"
                allowFullScreen
            ></iframe>
        </>
    ) : (
        <Container size="xxl" bg="gray.1">
            <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                <Title order={2} mt="sm" mb="xl" ta="center" className={classes.description} c="dark.5">
                    О{" "}
                    <Text component="span" inherit c="red.6">
                        нашем
                    </Text>{" "}
                    подходе
                </Title>
            </AnimateEnhanced>

            <AspectRatio ratio={1080 / 720} maw={1200} mx="auto">
                <iframe
                    src="https://player.vimeo.com/video/1011573790?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    title="Строй Family"
                    width="1200px"
                    height="auto"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                />
            </AspectRatio>
            {mode === "main-page" && (
                <div className={classes.controls}>
                    <Link href="/contacts" style={{ margin: "0 auto" }}>
                        <Button className={classes.control} variant="default" size="lg">
                            Подробнее
                        </Button>
                    </Link>
                </div>
            )}
        </Container>
    );
}
