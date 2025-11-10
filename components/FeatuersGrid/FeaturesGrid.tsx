"use client";
import React from "react";
import { Badge, Container, Group, Paper, SimpleGrid, Text, ThemeIcon, Title, rem } from "@mantine/core";
import { IconCookie, IconGauge, IconLock, IconMessage2, IconUser } from "@tabler/icons-react";
import classes from "./FeaturesGrid.module.css";
import AnimateEnhanced from "../Animate/Animate";

export const mockData = [
    {
        icon: IconGauge,
        title: "С 2014 ГОДА",
        description:
            "Наша компания предоставляет услуги по ремонту квартир и частных домов на территории города Сочи. Мы обслуживаем как частных лиц, так и корпоративных заказчиков.",
    },
    {
        icon: IconGauge,
        title: "15+",
        description:
            "Мы располагаем собственным штатом специалистов, в который входят дизайнеры, инженерно-технический персонал (прорабы) и исполнители по всем видам работ: сантехнике, электрике и другим направлениям.",
    },
    {
        icon: IconGauge,
        title: "100%",
        description:
            "Реализуем самые смелые идеи — от простого обновления до комплексного преображения пространства.",
    },
    {
        icon: IconGauge,
        title: "ПРОЗРАЧНАЯ СМЕТА",
        description:
            "Каждая работа подробно обговаривается и описывается в сметной документацие.",
    },
    {
        icon: IconGauge,
        title: "",
        description:
            "",
    },

    {
        icon: IconCookie,
        title: "Актуальные цены на сайте",
        description: "Выгодные тарифы, у нас один из лучших показателей по соотношению цена-качество на рынке.",
    },
    {
        icon: IconLock,
        title: "ОТЧЕТЫ",
        description: "Мы предоставляем отчеты на каждом этапе работ.",
    },
    {
        icon: IconMessage2,
        title: "БЕЗОПАСНЫЙ МОНТАЖ",
        description: "Используем только сертифицированое оборудование",
    },
    {
        icon: IconUser,
        title: "РАСЧЕТ ПО ФАКТУ",
        description: "Окончательный расчет происходит после подписания акта выполненных работ.",
    },
];

interface FeatureProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
    index: number;
}

export function Feature({ icon: Icon, title, description, index }: FeatureProps) {
    return (
        <Paper
            style={{ borderRadius: "10px" }}
            p="xl"
            shadow="xl"
            bg={index === 3 || index === 4 || index === 5 ? "red.6" : "white"}
        >
            <Text  mb="xl" c={index === 3 || index === 4 || index === 5 ? "white" : "red.6"} fw={700} size="28px" ta="center">
                {title}
            </Text>
            <Text   c={index === 3 || index === 4 || index === 5 ? "white" : "dark.4"}  lh={1.6} size="md" pb="xl" ta="center">
                {description}
            </Text>
        </Paper>
    );
}

export function FeaturesGrid() {
    const features = mockData.map((feature, index) => <Feature {...feature} index={index} key={index} />);

    return (
        <div className={classes.container}>
            <Container size="xl" pb="xl" >
                <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                    <Title order={2} ta="center" className={classes.description} c="dark.5">
                        Как мы
                        <Text component="span" inherit c="red.6">
                            {" "}
                            работаем
                        </Text>{" "}
                    </Title>
                </AnimateEnhanced>
                <SimpleGrid
                    mt={60}
                    cols={{
                        base: 1,
                        sm: 2,
                        md: 3,
                    }}
                    spacing={{
                        base: "xs",
                        // md: 50,
                    }}
                    verticalSpacing={{
                        base: "xs",
                        // md: 50,
                    }}
                >
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    );
}
