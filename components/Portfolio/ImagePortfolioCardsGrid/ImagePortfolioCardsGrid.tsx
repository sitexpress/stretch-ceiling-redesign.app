"use client";
import React, { useRef } from "react";
import {
    Anchor,
    AspectRatio,
    Badge,
    Box,
    Card,
    Container,
    Divider,
    Group,
    Image,
    Modal,
    Paper,
    SimpleGrid,
    Text,
    Title,
} from "@mantine/core";
import { useState } from "react";
import classes from "./ImagePortfolioCardsGrid.module.css";
import "../../../styles/local.fonts/NautilusPompilius.css";
import VideoComponent from "@/components/VideoComponent/VideoComponent";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const projectData1 = [
    {
        id: 1,
        title: "Фото: №1",
        image: "/images/portfolio-page/portfolio_1.webp",
        date: "апрель, 2024",
    },
    {
        id: 2,
        title: "Фото: №2",
        image: "/images/portfolio-page/portfolio_2.webp",
        date: "апрель, 2024",
    },
    // {
    //     id: 3,
    //     title: "Фото: №3",
    //     image: "/images/portfolio-page/portfolio_3.webp",
    //     date: "апрель, 2024",
    // },
    {
        id: 3,
        title: "Фото: №3",
        image: "/images/portfolio-page/portfolio_4.webp",
        date: "апрель, 2024",
    },
    {
        id: 4,
        title: "Фото: №4",
        image: "/images/portfolio-page/portfolio_5.webp",
        date: "апрель, 2024",
    },
    // {
    //     id: 6,
    //     title: "Фото: №6",
    //     image: "/images/portfolio-page/portfolio_6.webp",
    //     date: "апрель, 2024",
    // },
    {
        id: 5,
        title: "Фото: №5",
        image: "/images/portfolio-page/portfolio_7.webp",
        date: "апрель, 2024",
    },
];

const projectData2 = [
    {
        id: 1,
        title: "Фото: №1",
        image: "/images/portfolio-page/interior-1.webp",
        date: "июль, 2024",
    },
    {
        id: 2,
        title: "Фото: №2",
        image: "/images/portfolio-page/interior-2.webp",
        date: "июль, 2024",
    },
    {
        id: 3,
        title: "Фото: №3",
        image: "/images/portfolio-page/interior-3.webp",
        date: "июль, 2024",
    },
    {
        id: 4,
        title: "Фото: №4",
        image: "/images/portfolio-page/interior-4.webp",
        date: "июль, 2024",
    },
    {
        id: 5,
        title: "Фото: №5",
        image: "/images/portfolio-page/interior-5.webp",
        date: "июль, 2024",
    },
    {
        id: 6,
        title: "Фото: №6",
        image: "/images/portfolio-page/interior-6.webp",
        date: "июль, 2024",
    },
    {
        id: 7,
        title: "Фото: №7",
        image: "/images/portfolio-page/interior-7.webp",
        date: "июль, 2024",
    },
    {
        id: 8,
        title: "Фото: №8",
        image: "/images/portfolio-page/interior-8.webp",
        date: "июль, 2024",
    },
    {
        id: 9,
        title: "Фото: №9",
        image: "/images/portfolio-page/interior-9.webp",
        date: "июль, 2024",
    },
    {
        id: 10,
        title: "Фото: №10",
        image: "/images/portfolio-page/interior-10.webp",
        date: "июль, 2024",
    },
    {
        id: 11,
        title: "Фото: №11",
        image: "/images/portfolio-page/interior-11.webp",
        date: "июль, 2024",
    },
];

const projectData3 = [
    {
        id: 1,
        title: "Фото: №1",
        image: "/images/portfolio-page/portfolio_8.webp",
        date: "октябрь, 2024",
    },
    {
        id: 2,
        title: "Фото: №2",
        image: "/images/portfolio-page/portfolio_9.webp",
        date: "октябрь, 2024",
    },
    {
        id: 3,
        title: "Фото: №3",
        image: "/images/portfolio-page/portfolio_10.webp",
        date: "октябрь, 2024",
    },
    {
        id: 4,
        title: "Фото: №4",
        image: "/images/portfolio-page/portfolio_11.webp",
        date: "октябрь, 2024",
    },
    {
        id: 5,
        title: "Фото: №5",
        image: "/images/portfolio-page/portfolio_12.webp",
        date: "октябрь, 2024",
    },
];

export function ImagePortfolioCardsGrid() {
    const [isCard1Open, setIsCard1Open] = useState(false);
    const [isCard2Open, setIsCard2Open] = useState(false);
    const [isCard3Open, setIsCard3Open] = useState(false);
    const [imgId1, setImgId1] = useState<number>(0);
    const [imgId2, setImgId2] = useState<number>(0);
    const [imgId3, setImgId3] = useState<number>(0);

    const autoplay = useRef(Autoplay({ delay: 10000 }));

    const cards1 = projectData1.map((article, i) => (
        <>
            {isCard1Open && article.id === imgId1 + 1 && (
                <Modal
                    key={i} 
                    opened={isCard1Open}
                    onClose={() => setIsCard1Open(false)}
                    // title={`${article.title}`}
                    centered={true}
                    radius={40}
                >
                    <Image radius="xl" src={article.image} style={{ width: "100%", height: "auto" }} alt={`img`} />
                    <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md" ta="center">
                        {article.date}
                    </Text>
                    <Text className={classes.title} mt={5} ta="center">
                        {article.title}
                    </Text>
                </Modal>
            )}
            <Card key={article.title} p="xs" radius={40} component="a" href="#" className={classes.card}>
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        setIsCard1Open(true);
                        setImgId1(i);
                    }}
                >
                    <AspectRatio ratio={1920 / 1080}>
                        <Image src={article.image} alt={`img`} radius="xl" />
                    </AspectRatio>
                    <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md" ta="center">
                        {article.date}
                    </Text>
                    <Text className={classes.title} mt={5} ta="center">
                        {article.title}
                    </Text>
                </div>
            </Card>
        </>
    ));

    const cards2 = projectData2.map((article, i) => (
        <>
            {isCard2Open && article.id === imgId2 + 1 && (
                <Modal
                    key={i} 
                    opened={isCard2Open}
                    onClose={() => setIsCard2Open(false)}
                    // title={`${article.title}`}
                    centered={true}
                    radius={40}
                >
                    <Image radius="xl" src={article.image} style={{ width: "100%", height: "auto" }} alt={`img`} />
                    <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md" ta="center">
                        {article.date}
                    </Text>
                    <Text className={classes.title} mt={5} ta="center">
                        {article.title}
                    </Text>
                </Modal>
            )}
            <Card key={article.title} p="xs" radius={40} component="a" href="#" className={classes.card}>
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        setIsCard2Open(true);
                        setImgId2(i);
                    }}
                >
                    <AspectRatio ratio={1920 / 1080}>
                        <Image radius="xl" src={article.image} alt={`img`} />
                    </AspectRatio>
                    <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md" ta="center">
                        {article.date}
                    </Text>
                    <Text className={classes.title} mt={5} ta="center">
                        {article.title}
                    </Text>
                </div>
            </Card>
        </>
    ));

    const cards3 = projectData3.map((article, i) => (
        <Card key={article.image} p="xs" radius={40} component="a" href="#" className={classes.card}>
            {isCard3Open && article.id === imgId3 + 1 ? (
                <Modal
                    key={i} 
                    opened={isCard3Open}
                    onClose={() => setIsCard3Open(false)}
                    title="Full size"
                    centered={true}
                    radius={40}
                >
                    <AspectRatio ratio={1920 / 1080}>
                        <Image radius="xl" src={article.image} style={{ width: "100%", height: "auto" }} alt={`img`} />
                    </AspectRatio>
                    <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md" ta="center">
                        {article.date}
                    </Text>
                    <Text className={classes.title} mt={5} ta="center">
                        {article.title}
                    </Text>
                </Modal>
            ) : (
                 <Card key={article.title} p="xs" radius={40} component="a" href="#" className={classes.card}>
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        setIsCard3Open(true);
                        setImgId3(i);
                    }}
                >
                    <AspectRatio ratio={1920 / 1080}>
                        <Image radius="xl" src={article.image} alt={`img`} />
                    </AspectRatio>
                    <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md" ta="center">
                        {article.date}
                    </Text>
                    <Text className={classes.title} mt={5} ta="center">
                        {article.title}
                    </Text>
                </div>
                </Card>
            )}
        </Card>
    ));

    const urlData = [
        {
            url: "https://player.vimeo.com/video/1052793073?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        },
        {
            url: "https://player.vimeo.com/video/1052791969?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        },
        {
            url: "https://player.vimeo.com/video/1052789492?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        },
    ];

    const videoCarouselMapped = urlData.map((item) => {
        return (
            <Carousel.Slide key={item.url} className={classes.carousel}>
                <iframe
                    src={item.url}
                    title="Строй Family"
                    height="500px"
                    width="auto"
                    frameBorder="0"
                    allow="fullscreen"
                ></iframe>
            </Carousel.Slide>
        );
    });

    return (
        <Container py="xl" fluid bg="gray.1">
            {/* <Container size={560} >
                <Title
                    order={2}
                    ta="center"
                    className={classes.description}
                    c="dark.5"
                >
                    Фото
                </Title>
            </Container> */}
            <Container size={560} pb="xl">
                <Text c="dimmed" fs="italic" ta="center" mt="xl" td="underline">
                    Пример проекта №1
                </Text>
            </Container>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>{cards1}</SimpleGrid>
            <Container size={560} pt="xl" pb="xl">
                <Text c="dimmed" fs="italic" ta="center" mt="xl" td="underline">
                    Пример проекта №2
                </Text>
            </Container>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>{cards2}</SimpleGrid>
            <Container size={560} pt="xl" pb="xl">
                <Text c="dimmed" fs="italic" ta="center" mt="xl" td="underline">
                    Пример проекта №3
                </Text>
            </Container>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>{cards3}</SimpleGrid>
        </Container>
    );
}
