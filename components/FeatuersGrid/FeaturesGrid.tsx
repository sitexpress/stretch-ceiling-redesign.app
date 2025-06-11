"use client";
import React from "react";
import { Badge, Container, Group, SimpleGrid, Text, ThemeIcon, Title, rem } from "@mantine/core";
import { IconCookie, IconGauge, IconLock, IconMessage2, IconUser } from "@tabler/icons-react";
import classes from "./FeaturesGrid.module.css";

export const mockData = [
    {
        icon: IconGauge,
        title: "Бесплатный замер",
        description:
            "Узнайте, какие бывают стандартные размеры потолков в конкретных типовых домах. Это облегчит Вам подбор нужного потолка",
    },

    {
        icon: IconCookie,
        title: "Актуальные цены на сайте",
        description: "На нашем сайте всегда актуальные цены которые практически не отличаются от финального чека",
    },
    {
        icon: IconLock,
        title: "Лучшии комплектующие в категории цена-качество",
        description: "Мы следим за новыми технологиями и стараемся применять их в строительстве",
    },
    {
        icon: IconMessage2,
        title: "Безопасный монтаж",
        description: "Используем только сертифицированое оборудование",
    },
    {
        icon: IconUser,
        title: "Покупка без переплат",
        description: "Заказывайте потолок без переплат",
    },
];

interface FeatureProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon
                    style={{
                        width: rem(18),
                        height: rem(18),
                    }}
                    stroke={1.5}
                />
            </ThemeIcon>
            <Text mt="sm" mb={7}>
                {title}
            </Text>
            <Text size="sm" c="dimmed" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

export function FeaturesGrid() {
    const features = mockData.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container className={classes.container}>
            <Title
                order={2}
                mt="sm"
                mb="xl"
                ta="center"
                className={classes.description}
                style={{ fontFamily: "Nautilus" }}
                c="dark.5"
            >
                Качество в каждый дом
            </Title>
            <SimpleGrid
                mt={60}
                cols={{
                    base: 1,
                    sm: 2,
                    md: 3,
                }}
                spacing={{
                    base: "xl",
                    md: 50,
                }}
                verticalSpacing={{
                    base: "xl",
                    md: 50,
                }}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}
