"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import {
    Avatar,
    Badge,
    Button,
    Container,
    Flex,
    Group,
    Image,
    Paper,
    Progress,
    Rating,
    Text,
    Title,
    useMantineTheme,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRef } from "react";
import { BadgeCard } from "../BadgeCard/BadgeCard";
import classes from "./PortfolioCarousel.module.css";
import controlClass from "./Controls.module.css";
import { Card } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { EmblaCarouselType } from "embla-carousel-react";
import ReviewsWidget from "@/app/portfolio/ReviewWidget";
import AnimateEnhanced from "../Animate/Animate";

export type ImageType = {
    src?: string;
    url?: string;
};

export type OptionsType = {
    opt: string;
};
export type BadgesType = { emoji: string; label: string };

export type CardDataType = {
    images: ImageType[];
    title: string;
    options: OptionsType[];
    price: number;
    date: string;
    badges: BadgesType[];
};

export type ReviewDataType = {
    src: string;
    name: string;
    date: string;
    review: string;
};

export type PortfolioCarouselType = {
    mode: "photo" | "video" | "review" | "ceiling";
};

const data = [
    {
        title: "Фото: №1",
        image: "/images/portfolio-page/portfolio_1.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №2",
        image: "/images/portfolio-page/portfolio_2.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №3",
        image: "/images/portfolio-page/portfolio_4.webp",
        date: "апрель, 2024",
    },
    // {
    //     title: "Фото: №4",
    //     image: "/images/portfolio-page/portfolio_5.webp",
    //     date: "апрель, 2024",
    // },
    {
        title: "Фото: №5",
        image: "/images/portfolio-page/portfolio_7.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №6",
        image: "/images/portfolio-page/interior-1.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №7",
        image: "/images/portfolio-page/interior-2.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №8",
        image: "/images/portfolio-page/interior-3.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №9",
        image: "/images/portfolio-page/interior-4.webp",
        date: "апрель, 2024",
    },
    // {
    //     title: "Фото: №10",
    //     image: "/images/portfolio-page/interior-5.webp",
    //     date: "апрель, 2024",
    // },
    {
        title: "Фото: №11",
        image: "/images/portfolio-page/interior-6.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №12",
        image: "/images/portfolio-page/interior-7.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №13",
        image: "/images/portfolio-page/interior-8.webp",
        date: "апрель, 2024",
    },
    // {
    //     title: "Фото: №14",
    //     image: "/images/portfolio-page/interior-9.webp",
    //     date: "апрель, 2024",
    // },
    {
        title: "Фото: №15",
        image: "/images/portfolio-page/interior-10.webp",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №16",
        image: "/images/portfolio-page/interior-11.webp",
        date: "апрель, 2024",
    },
];

const cardData: CardDataType[] = [
    {
        images: [
            // { src: "/images/cards/MSD-Classic-1/MSD-Classic_1_1.jpg" },
            // { src: "/images/cards/MSD-Classic-1/MSD-Classic_1_2.jpg" },
            // { src: "/images/cards/MSD-Classic-1/MSD-Classic_1_3.jpg" },
            // { src: "/images/cards/MSD-Classic-1/MSD-Classic_1_4.jpg" },
            // { src: "/images/cards/MSD-Classic-1/MSD-Classic_1_4.jpg" },
            // { url: "https://player.vimeo.com/video/1052793073?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"},
            {
                url: "https://player.vimeo.com/video/1060179264?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            },
        ],
        title: "MSD Classic-1",
        options: [
            {
                opt: "Профиль по периметру: ПВХ Премиум + Вставка",
            },
            {
                opt: "Световые линии: Gamma 35 + диодная лента",
            },
            {
                opt: "Скрытый карниз : Пк14 ПВХ",
            },
        ],
        price: 55000,
        date: "Декабрь 2024",
        badges: [
            { emoji: "☀️", label: "Sunny weather" },
            { emoji: "🦓", label: "Onsite zoo" },
            { emoji: "🌊", label: "Sea" },
            { emoji: "🌲", label: "Nature" },
            { emoji: "🤽", label: "Water sports" },
        ],
    },
    {
        images: [
            // { src: "/images/cards/MSD-Classic/MSD-Classic_2.jpg" },
            // { src: "/images/cards/MSD-Classic/MSD-Classic_3.jpg" },
            // { src: "/images/cards/MSD-Classic/MSD-Classic_4.jpg" },
            {
                url: "https://player.vimeo.com/video/1060218925?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            },
        ],
        title: "MSD Classic-2",
        options: [
            {
                opt: "Профиль по периметру: Delta теневой ",
            },
            {
                opt: "Магнитная трековая система: LumFer S25 + Светильники",
            },
            {
                opt: "LumFer Track 25 220v",
            },
            {
                opt: "Магнитные решетки для пожарных датчиков",
            },
            {
                opt: "Установка освещения клиента согласно дизайн проекта",
            },
        ],
        price: 110000,
        date: "Декабрь 2024",
        badges: [
            { emoji: "☀️", label: "Sunny weather" },
            { emoji: "🦓", label: "Onsite zoo" },
            { emoji: "🌊", label: "Sea" },
            { emoji: "🌲", label: "Nature" },
            { emoji: "🤽", label: "Water sports" },
        ],
    },
    {
        images: [
            // { src: "/images/cards/BAUF/BAUF-270_4.jpg" },
            // { src: "/images/cards/BAUF/BAUF-270_1.jpg" },
            // { src: "/images/cards/BAUF/BAUF-270_2.jpg" },
            // { src: "/images/cards/BAUF/BAUF-270_3.jpg" },
            {
                url: "https://player.vimeo.com/video/1060751731?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            },
        ],
        title: "BAUF 270 матовый",
        options: [
            {
                opt: "Профиль по периметру: EuroKRAAB теневой ",
            },
            {
                opt: "Скрытый карниз: LumFer SK01",
            },
            {
                opt: "Светильники : GX53 черный матовый",
            },
            {
                opt: "Теневой диффузор с внутренней интеграцией вытяжки",
            },
        ],
        price: 86700,
        date: "Декабрь 2024",
        badges: [
            { emoji: "☀️", label: "Sunny weather" },
            { emoji: "🦓", label: "Onsite zoo" },
            { emoji: "🌊", label: "Sea" },
            { emoji: "🌲", label: "Nature" },
            { emoji: "🤽", label: "Water sports" },
        ],
    },
];

const reviewData: ReviewDataType[] = [
    {
        src: "/images/review/1.jpg",
        name: "Алексей",
        date: "28.12.2024",
        review: "Заказал натяжной потолок в гостиную. Установили быстро, качественно. Очень доволен результатом, спасибо Строй-Family!",
    },
    {
        src: "/images/review/2.jpg",
        name: "Марина",
        date: "15.11.2024",
        review: "Потолок в ванной выглядит идеально! Мастера аккуратные, работали без пыли. Рекомендую.",
    },
    {
        src: "/images/review/5.jpg",
        name: "Елена",
        date: "01.02.2025",
        review: "Очень понравилось обслуживание. Потолок в кухне установили за один день. Цена и качество на высоте. Спасибо!",
    },
    {
        src: "/images/review/3.jpg",
        name: "Игорь",
        date: "01.11.2024",
        review: "Выбрал Строй-Family по рекомендации. Не ошибся! Работа выполнена на отлично. ",
    },
    {
        src: "/images/review/4.jpg",
        name: "Ольга",
        date: "18.02.2025",
        review: "Установили потолок в детской. Работу вели аккуратно. Спасибо за профессионализм.",
    },
    {
        src: "/images/review/6.jpg",
        name: "Анна",
        date: "18.02.2025",
        review: "Мастера вежливые, работали аккуратно. Все выполнено согласно договоренности и предварительному расчёту. Рекомендую!",
    },
];

const cardComponentData = [
    {
        id: 0,
        title: "Классические натяжные потолки",
        img: "/images/catalog-new/1.jpg",
        subtitle: "Стандартные потолки, ровный потолок в классическом стиле.",
        area: 25,
        time: 6,
        price: 26500,
        priceWithInstallation: 1400,
        value: 100,
        color: "green.6",
    },
    {
        id: 1,
        title: "Парящий потолок в ванной с подсветкой",
        img: "/images/catalog-new/2.jpg",
        subtitle: "Эффект парящего потолка.",
        area: 12,
        time: 5,
        price: 20000,
        priceWithInstallation: 2000,
        value: 90,
        color: "green.6",
    },
    {
        id: 2,
        title: "Натяжной потолок с теневым примыканием",
        img: "/images/catalog-new/3.jpg",
        subtitle: "Стандартные потолки, ровный потолок в классическом стиле.",
        area: 15,
        time: 8,
        price: 40000,
        priceWithInstallation: 2000,
        value: 90,
        color: "green.6",
    },
    {
        id: 3,
        title: "Парящий потолок с подсветкой",
        img: "/images/catalog-new/4.jpg",
        subtitle: "Стандартные потолки, ровный потолок в классическом стиле.",
        area: 7,
        time: 4,
        price: 15000,
        priceWithInstallation: 2150,
        value: 80,
        color: "green.6",
    },
    {
        id: 4,
        title: "Натяжной потолок с переходом уровня",
        img: "/images/catalog-new/5.jpg",
        subtitle: "Стандартные потолки, ровный потолок в классическом стиле.",
        area: 36,
        time: 8,
        price: 72500,
        priceWithInstallation: 2350,
        value: 70,
        color: "green.6",
    },
    {
        id: 5,
        title: "Натяжной потолок с магнитной трековой системой",
        img: "/images/catalog-new/6.jpg",
        subtitle: "Стандартные потолки, ровный потолок в классическом стиле.",
        area: 54,
        time: 10,
        price: 135000,
        priceWithInstallation: 2700,
        value: 60,
        color: "green.6",
    },
];

const Item = data.map((item) => {
    return (
        <Carousel.Slide key={item.title} className={classes.carousel}>
            <Image radius="xl" fit="contain" src={item.image} className={classes.image} />
        </Carousel.Slide>
    );
});

function CardComponent() {
    const theme = useMantineTheme();
    const md = theme.breakpoints.md;
    const matchMd = useMediaQuery(`(min-width: ${md})`);

    const CardComponentItems = cardComponentData.map((item, index) => (
        <Carousel.Slide key={index} mb={10}>
            <Card radius="xl" className={classes.card}>
                <Card.Section>
                    <Image
                        fallbackSrc="https://placehold.co/600x400?text=Фото"
                        src={item.img}
                        alt="Running challenge"
                        height={400}
                    />
                </Card.Section>
                <Flex justify="space-between" mt="lg" direction="column" gap={5}>
                    <Text fw={700} size="lg">
                        {item.title}
                    </Text>
                    <Text c="dimmed" size="md" mb="xs" style={{ height: "50px" }}>
                        {item.subtitle}
                    </Text>
                </Flex>
                <Flex gap={2} direction={!matchMd ? "column" : "row"} justify="space-between">
                    <Flex
                        mt="sm"
                        p="md"
                        bg="#e9ecef"
                        direction="column"
                        align="center"
                        justify="space-between"
                        style={{ borderRadius: 20 }}
                        gap={5}
                        h={!matchMd ? "60" : "80"}
                    >
                        <Text c="dark.6" size="sm" fw={700} ta="center" style={{ lineHeight: 1.1 }}>
                            Площадь помещения
                        </Text>{" "}
                        <Text c="dimmed" fw={500}>
                            {item.area}
                            <Text component="span" c="dimmed" size="xs">
                                m2
                            </Text>
                        </Text>{" "}
                    </Flex>
                    <Flex
                        mt="sm"
                        p="md"
                        bg="#e9ecef"
                        direction="column"
                        align="center"
                        justify="space-between"
                        style={{ borderRadius: 20 }}
                        gap={5}
                        h={!matchMd ? "60" : "80"}
                    >
                        <Text c="dark.6" size="sm" fw={700} ta="center" style={{ lineHeight: 1.1 }}>
                            Время монтажа
                        </Text>{" "}
                        <Text c="dimmed" fw={500}>
                            {item.time}
                            <Text component="span" c="dimmed" size="xs">
                                ч
                            </Text>
                        </Text>{" "}
                    </Flex>

                    <Flex
                        mt="sm"
                        p="md"
                        bg="#e9ecef"
                        direction="column"
                        align="center"
                        justify="space-between"
                        style={{ borderRadius: 20 }}
                        gap={5}
                        h={!matchMd ? "60" : "80"}
                    >
                        <Text c="dark.6" size="sm" fw={700} ta="center" style={{ lineHeight: 1.1 }}>
                            Общая стоймость
                        </Text>
                        <Text c="dimmed" fw={500}>
                            {item.price}
                            <Text component="span" c="dimmed" size="xs">
                                р
                            </Text>
                        </Text>
                    </Flex>
                    <Flex
                        mt="sm"
                        p="md"
                        bg="#e9ecef"
                        direction="column"
                        align="center"
                        justify="space-between"
                        style={{ borderRadius: 20, border: "1px solid #4dabf7" }}
                        gap={5}
                        h={!matchMd ? "60" : "80"}
                    >
                        <Text c="dark.6" size="sm" fw={700} ta="center" style={{ lineHeight: 1.1 }}>
                            Цена с установкой
                        </Text>{" "}
                        <Text c="dimmed" fw={500}>
                            {item.priceWithInstallation}
                            <Text component="span" c="dimmed" size="xs">
                                р/m2
                            </Text>
                        </Text>
                    </Flex>
                </Flex>
            </Card>
        </Carousel.Slide>
    ));

    return CardComponentItems;
}

const cardMapped = cardData.map((item, i) => <BadgeCard key={i} {...item} />);
const reviewMapped = reviewData.map((item, i) => (
    <Paper key={i} radius="xl" shadow="sm" p="lg" m="lg" className={classes.paper}>
        <Avatar src={item.src} size={80} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md" c="dark.4">
            {item.name}
        </Text>

        <Flex justify="center" ta="center" fz="sm" c="dimmed">
            <Rating value={i % 2 === 0 ? 5 : 4.5} fractions={2} readOnly /> {i % 2 === 0 ? 5 : 4.8}
        </Flex>
        <Text ta="center" c="dark.3" fz="sm" mt="md">
            {item.review}
        </Text>
        <Text ta="center" fz="sm" c="dimmed" mt="md">
            {item.date}
        </Text>
    </Paper>
));

export const PortfolioCarousel: React.FC<PortfolioCarouselType> = ({ mode }) => {
    const [scrollProgressFolio, setScrollProgressFolio] = useState(0);
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

    const handleScroll = useCallback(() => {
        if (!embla) {
            return;
        }
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgressFolio(progress * 100);
    }, [embla, setScrollProgressFolio]);

    useEffect(() => {
        if (embla) {
            embla.on("scroll", handleScroll);
            handleScroll();
        }
    }, [embla]);

    const [scrollProgressCeiling, setScrollProgressFolioCeiling] = useState(0);
    const [emblaCeiling, setEmblaCeiling] = useState<EmblaCarouselType | null>(null);

    const handleScrollCeiling = useCallback(() => {
        if (!emblaCeiling) {
            return;
        }
        const progressFolio = Math.max(0, Math.min(1, emblaCeiling.scrollProgress()));
        setScrollProgressFolioCeiling(progressFolio * 100);
    }, [emblaCeiling, setScrollProgressFolioCeiling]);

    useEffect(() => {
        if (emblaCeiling) {
            emblaCeiling.on("scroll", handleScrollCeiling);
            handleScrollCeiling();
        }
    }, [emblaCeiling]);

    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return mode === "photo" ? (
        <div className={classes.container}>
            <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                <Flex justify="center" align="center" direction="column" gap={0} mb={50}>
                    <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                        <Title order={2} ta="center" className={classes.description} c="dark.5">
                            Натяжные потолки{" "}
                            <Text component="span" inherit c="red.6">
                                наши работы
                            </Text>{" "}
                        </Title>
                    </AnimateEnhanced>
                </Flex>
            </AnimateEnhanced>

            <Carousel
                height={"auto"}
                slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                // slideGap={{ base: 0, sm: "md" }}
                loop
                align="start"
                plugins={[autoplay.current]}
                draggable
                controlSize={30}
                withControls
                controlsOffset={10}
                slideGap="lg"
                // emblaptions={{ dragFree: true }}
                getEmblaApi={setEmbla}
                initialSlide={0}
            >
                {Item}
            </Carousel>

            <Progress.Root maw={300} size="lg" mt="xl" mx="auto" bg="dark.1" radius="40px">
                <Progress.Section value={scrollProgressFolio} bg="dark.6" color="dark.6">
                    <Progress.Label style={{ fontFamily: "Nautilus", fontSize: "10px" }} color="dark.6">
                        Строй Family
                    </Progress.Label>
                </Progress.Section>
            </Progress.Root>
            <div className={classes.controls}>
                <Link href="/portfolio" style={{ margin: "0 auto" }}>
                    <Button className={classes.control} variant="default" size="lg" radius="xl">
                        Подробнее
                    </Button>
                </Link>
            </div>
        </div>
    ) : mode === "review" ? (
        <div className={classes.container}>
            <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                <Title order={2} mt="sm" mb="xl" ta="center" className={classes.description} c="dark.5">
                    Отзывы
                </Title>
            </AnimateEnhanced>

            {/* <Title order={2} mt="sm" mb="xl" ta="center" className={classes.description} c="dark.5">
                Отзывы на{" "}
                <Text component="span" inherit c="red.6">
                     Авито
                </Text>{" "}
                
            </Title> */}
            {/* <ReviewsWidget/> */}
            <Carousel
                // height={"auto"}
                slideSize={{ base: "100%", xs: "100%", sm: "50%", md: "33.33%" }}
                slideGap="xs"
                loop
                align="start"
                draggable
                controlSize={30}
            >
                {reviewMapped}
            </Carousel>
        </div>
    ) : mode === "ceiling" ? (
        <div className={classes.container}>
            <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                <Title order={2} pt="xl" mb="xl" ta="center" className={classes.description} c="dark.5">
                    Примерная{" "}
                    <Text component="span" inherit c="red.6">
                        стоймость
                    </Text>{" "}
                    выполненых работ
                </Title>
            </AnimateEnhanced>

            <Carousel
                height={"auto"}
                slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                // slideGap={{ base: 0, sm: "md" }}
                loop
                align="start"
                // plugins={[autoplay.current]}
                draggable
                controlSize={30}
                controlsOffset={10}
                slideGap="lg"
                getEmblaApi={setEmblaCeiling}
            >
                <CardComponent />
            </Carousel>

            <Progress.Root maw={300} size="lg" mt="xl" mx="auto" bg="dark.1" radius="40px">
                <Progress.Section value={scrollProgressCeiling} bg="dark.6" color="dark.6">
                    <Progress.Label style={{ fontFamily: "Nautilus", fontSize: "10px" }} color="dark.6">
                        Строй Family
                    </Progress.Label>
                </Progress.Section>
            </Progress.Root>

            {/* <div className={classes.controls}>
                <Link href="/portfolio" style={{ margin: "0 auto" }}>
                    <Button className={classes.control} variant="blue" size="lg" radius="xl">
                        Подробнее
                    </Button>
                </Link>
            </div> */}
        </div>
    ) : (
        <div className={classes.container}>
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Портфолио
                </Badge>
            </Group>
            {/* <Title className={classes.title} mt="sm" ta="center"> */}
            <Title order={3} mt="sm" ta="center">
                Выполненные проекты
            </Title>

            <Container size={560} pt="xl" pb="xl">
                <Text ta="center" mt="xl" pb="xl" size="xl" fw="bold" className={classes.description}>
                    Видео
                </Text>
            </Container>

            <Carousel
                height={"auto"}
                slideSize={{ base: "100%", xs: "100%", sm: "50%", md: "33.33%" }}
                slideGap={{ base: 0, sm: "md" }}
                loop
                align="start"
                draggable
                controlSize={42}
                previousControlProps={{
                    "aria-label": "Previous",
                }}
                nextControlProps={{
                    "aria-label": "Next",
                }}
                classNames={controlClass}
            >
                {cardMapped}
            </Carousel>

            {/* <div className={classes.controls}>
                <Link href="/portfolio" style={{ margin: "0 auto" }}>
                    <Button className={classes.control} variant="default" size="lg">
                        Подробнее
                    </Button>
                </Link>
            </div> */}
        </div>
    );
};
