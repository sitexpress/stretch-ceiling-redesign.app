"use client";
import { Accordion, Badge, Button, Card, Container, Flex, Group, Image, Text, ThemeIcon, Title } from "@mantine/core";
import {
    IconCe,
    IconCurrencyRipple,
    IconGalaxy,
    IconLeaf,
    IconRipple,
    IconSettings,
    IconShield,
} from "@tabler/icons-react";
// import { Grid } from "@mantine/core";
// import { px, SimpleGrid, Skeleton, Stack, useMantineTheme } from "@mantine/core";
import { Grid, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";
import AnimateEnhanced from "../Animate/Animate";
import ModalComponent from "../ModalComponent/ModalComponent";
import classes from "./ElectricCurtains.module.css";

const curtains = [
    {
        src: "/images/onviz/curtains/razdvijnoy-cat-320x320.jpg",
        title: "Электронный карниз Onviz Basic",
        price: "от 12 990 ₽",
        features: ["До 3.5 м длины", "Пульт ДУ", "Тихий ход"],
    },
    {
        src: "/images/onviz/curtains/rulon-cat-320x320.jpg",
        title: "Электронный карниз Onviz Pro",
        price: "от 18 990 ₽",
        features: ["До 5 м длины", "Умный дом", "Давтчик освещенности"],
    },
    {
        src: "/images/onviz/curtains/rimskie-cat-320x320.jpg",
        title: "Угловой электронный карниз",
        price: "от 22 990 ₽",
        features: ["Г-образная конструкция", "Поддержка тяжелых штор", "Таймер"],
    },
    {
        src: "/images/onviz/curtains/vertikal-jalyuzy-cat-320x320.jpg",
        title: "Угловой электронный карниз",
        price: "от 22 990 ₽",
        features: ["Г-образная конструкция", "Поддержка тяжелых штор", "Таймер"],
    },
    {
        src: "/images/onviz/curtains/plisse-cat-320x320.jpg",
        title: "Угловой электронный карниз",
        price: "от 22 990 ₽",
        features: ["Г-образная конструкция", "Поддержка тяжелых штор", "Таймер"],
    },
    {
        src: "/images/onviz/curtains/pergola-cat-320x320.jpg",
        title: "Угловой электронный карниз",
        price: "от 22 990 ₽",
        features: ["Г-образная конструкция", "Поддержка тяжелых штор", "Таймер"],
    },
];

const features = [
    {
        icon: <IconSettings size="1rem" />,
        title: "Умное управление",
        description: "Интеграция с системами умного дома и управление со смартфона",
    },
    {
        icon: <IconLeaf size="1rem" />,
        title: "Энергоэффективность",
        description: "Низкое энергопотребление и экологичность",
    },
    {
        icon: <IconShield size="1rem" />,
        title: "Надежность",
        description: "Долговечные механизмы и гарантия качества",
    },
    {
        icon: <IconRipple size="1rem" />,
        title: "Бесшумная работа",
        description: "Тихие моторы не нарушат ваш покой",
    },
    {
        icon: <IconCurrencyRipple size="1rem" />,
        title: "Простая установка",
        description: "Монтаж за 1-2 часа без пыли и грязи",
    },
    {
        icon: <IconGalaxy size="1rem" />,
        title: "Универсальность",
        description: "Подходят для любых типов штор и гардин",
    },
    {
        icon: <IconCe size="1rem" />,
        title: "Безопасность",
        description: "Защита от перегрева и перегрузок",
    },
];

const faqs = [
    {
        question: "Как происходит монтаж электронных карнизов?",
        answer: "Монтаж осуществляется на потолок или стену с помощью специальных креплений. Мы предоставляем подробную инструкцию и можем организовать профессиональный монтаж.",
    },
    {
        question: "Можно ли интегрировать с системой умного дома?",
        answer: "Да, наши карнизы поддерживают интеграцию с популярными системами умного дома через Wi-Fi или Zigbee модули.",
    },
    {
        question: "Какая гарантия на продукцию?",
        answer: "Мы предоставляем гарантию 2 года на все электронные компоненты и 5 лет на механические части.",
    },
];

const electricData = [
    { src: "/images/onviz/gallery-001.jpg" },
    { src: "/images/onviz/gallery-002.jpg" },
    { src: "/images/onviz/gallery-003.jpg" },
    { src: "/images/onviz/gallery-004.jpg" },
    { src: "/images/onviz/gallery-005.jpg" },
    { src: "/images/onviz/gallery-006.jpg" },
    { src: "/images/onviz/gallery-007.jpg" },
    { src: "/images/onviz/gallery-008.jpg" },
    { src: "/images/onviz/gallery-009.jpg" },
    { src: "/images/onviz/gallery-010.jpg" },
];
const constractionsData = [
    { src: "/images/constractions/34.jpg" },
    { src: "/images/constractions/33.jpg" },
    { src: "/images/constractions/9.jpg" },
    // { src: "/images/constractions/10.jpg" },
    { src: "/images/constractions/11.jpg" },
    { src: "/images/constractions/12.jpg" },
    { src: "/images/constractions/13.jpg" },
    { src: "/images/constractions/14.jpg" },
    { src: "/images/constractions/15.jpg" },
    { src: "/images/constractions/16.jpg" },
    { src: "/images/constractions/17.jpg" },
    { src: "/images/constractions/18.jpg" },
    { src: "/images/constractions/19.jpg" },
    { src: "/images/constractions/20.jpg" },
    { src: "/images/constractions/21.jpg" },
    { src: "/images/constractions/22.jpg" },
    { src: "/images/constractions/23.jpg" },
    { src: "/images/constractions/24.jpg" },
    { src: "/images/constractions/26.jpg" },
    { src: "/images/constractions/27.jpg" },
    { src: "/images/constractions/28.jpg" },
    { src: "/images/constractions/29.jpg" },
    { src: "/images/constractions/30.jpg" },
    { src: "/images/constractions/31.jpg" },
    { src: "/images/constractions/32.jpg" },
];

type GridAsymmetricalType = {
    mode: "electric" | "constructions";
    height?: number;
};

export default function ElectricCurtains() {
    const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "">("");
    const [isOpen, setIsOpen] = useState(false);

    const measurerHandler = () => {
        setModalMode("measurer");
        setIsOpen(true);
    };

    return (
        <div style={{ background: "#f1f3f5", paddingBottom: "50px" }}>
            {isOpen && <ModalComponent isOpen={isOpen} modalMode={modalMode} setIsOpen={setIsOpen} />}
            <Container size="xl" pt={40}>
                <Grid gutter={50} align="center">
                    <Grid.Col mt={6}>
                        <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                            <Title order={2} mt="xl" mb="xl" ta="center" c="dark.5">
                                Современные{" "}
                                <Text component="span" inherit c="red.6">
                                    электронные карнизы
                                </Text>{" "}
                                для вашего дома
                            </Title>
                            <Title order={1} mb="xl" ta="center"></Title>
                            <Text size="lg" mb="xl" ta="center">
                                Автоматизированные решения для штор и гардин, которые сделают ваш дом умнее и
                                комфортнее. Управляйте освещением одним касанием или по расписанию.
                            </Text>
                        </AnimateEnhanced>
                    </Grid.Col>
                </Grid>

                <Grid w="100%" gutter="xs" pl="xs" pr="xs">
                    <OnvizCatalog />
                </Grid>

                <Group mt={100} justify="center">
                    <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                        <Title order={2} mt="sm" mb="xl" ta="center" c="dark.5">
                            Примеры{" "}
                            <Text component="span" inherit c="red.6">
                                Onviz
                            </Text>{" "}
                        </Title>
                    </AnimateEnhanced>

                    <GridAsymmetrical mode="electric" />
                </Group>

                <Flex mt={100} justify="center" direction="column" gap="md">
                    <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                        <Title order={2} ta="center" mb={30}>
                            Почему выбирают{" "}
                            <Text component="span" inherit c="red.6">
                                электронные карнизы
                            </Text>{" "}
                            Onviz
                        </Title>
                    </AnimateEnhanced>

                    {features.map((feature, index) => (
                        <Grid key={index}>
                            <Grid.Col>
                                <Card shadow="sm" p="lg" radius="xl">
                                    <Flex justify="start" align="center" gap="lg">
                                        <ThemeIcon size={40} radius={40} mb="md" variant="light">
                                            {feature.icon}
                                        </ThemeIcon>
                                        <Title order={3} size="h4" mb="sm">
                                            {feature.title}
                                        </Title>
                                    </Flex>

                                    <Text c="dimmed">{feature.description}</Text>
                                </Card>
                            </Grid.Col>
                        </Grid>
                    ))}
                </Flex>
                <Flex mt={150} justify="center" direction="column">
                    <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                        <Title order={2} ta="center" mb={30}>
                            Частые{" "}
                            <Text component="span" inherit c="red.6">
                                вопросы
                            </Text>{" "}
                        </Title>
                    </AnimateEnhanced>

                    <Accordion variant="contained" mb={50} radius="xl">
                        {faqs.map((item, index) => (
                            <Accordion.Item value={`item-${index}`} key={index}>
                                <Accordion.Control>{item.question}</Accordion.Control>
                                <Accordion.Panel c="dimmed" ta="center">
                                    {item.answer}
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Flex>

                <Card mt={150} p="lg" radius="xl" withBorder bg="blue" color="white">
                    <Grid gutter={50} align="center">
                        <Grid.Col mt={8}>
                            <Title order={3} c="white">
                                Готовы сделать ваш дом умнее?
                            </Title>
                            <Text c="white">
                                Оставьте заявку и наш специалист поможет подобрать идеальное решение для вашего
                                интерьера.
                            </Text>
                        </Grid.Col>
                        <Grid.Col mt={4}>
                            <Button
                                size="lg"
                                fullWidth
                                variant="white"
                                color="dark"
                                radius="xl"
                                onClick={measurerHandler}
                            >
                                Оставить заявку
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Card>
            </Container>
        </div>
    );
}

export const GridAsymmetrical: React.FC<GridAsymmetricalType> = ({ mode, height }) => {
    const [loading, setLoading] = useState(true);

    const electric = electricData.map((item, i) => (
        <Grid.Col key={item.src} span={{ base: 12, xs: i % 2 === 0 ? 3 : 9 }} >
            <Skeleton visible={loading} radius="xl">
                <Image h={500} src={item.src} radius="xl" fallbackSrc="https://placehold.co/600x400?text=Placeholder" />
            </Skeleton>
        </Grid.Col>
    ));

    const constructions = constractionsData.map((item, i) => {
        return (i < Number(height && height.toString().charAt(0)) + (13) && (
                <Grid.Col key={item.src} span={{ base: 12, xs: i % 2 === 0 ? 3 : 9 }} style={{ zIndex: "-1" }}>
                    <Skeleton visible={loading} radius="xl">
                        <Image
                            h={500}
                            src={item.src}
                            radius="xl"
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Skeleton>
                </Grid.Col>
            )
        );
    });

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Container size="xl">
            <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                <Flex justify="center" align="center" direction="column" gap={0} mt={50}>
                    <Badge bg="red.6" size="xs" p="md">
                        <Text component="span" fw={700}>
                            отделка и ремонт
                        </Text>
                    </Badge>
                    <Title order={2} mb="xl" ta="center" className={classes.description} c="dark.5" fw={700}>
                        наши работы:
                    </Title>
                </Flex>
            </AnimateEnhanced>
            <Grid h={height && height / 2} style={{ transition: "height 0.6s ease"}}>{mode == "electric" ? electric : constructions}</Grid>
        </Container>
    );
};

export function OnvizCatalog() {
    return curtains.map((item, index: number) => (
        <Grid.Col key={index} span={{ base: 6, sm: 3, lg: 3 }}>
            <Card radius="xl" p={5} shadow="xl">
                <Image
                    src={item.src ? item.src : "/images/catalog/placeholder-image.jpeg"}
                    fallbackSrc={"/images/catalog/placeholder-image.jpg"}
                    alt={``}
                    radius="xl"
                />
            </Card>

            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="xs" ta="center">
                {item.title}
            </Text>
        </Grid.Col>
    ));
}
