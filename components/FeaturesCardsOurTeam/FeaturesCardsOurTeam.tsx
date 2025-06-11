"use client";
// import React, { useRef } from "react";
import { Avatar, Badge, Box, Button, Card, Container, Group, SimpleGrid, Text, Title } from "@mantine/core";
import Link from "next/link";
import classes from "./FeaturesCardsOurTeam.module.css";
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "../../styles/local.fonts/NautilusPompilius.css";
// import Autoplay from "embla-carousel-autoplay";

const mockdata = [
    {
        name: "Дмитрий",
        contact: "+7 918 605 60 58",
        position: "Технолог",
        img: "images/team/4.jpg",
    },
    {
        name: "Анатолий",
        contact: "+7 988 189 65 30",
        position: "Руководитель",
        img: "images/team/5.jpg",
    },
    {
        name: "Татьяна",
        contact: "-",
        position: "Менеджер",
        img: "images/team/6.jpg",
    },
    {
        name: "Елена",
        contact: "-",
        position: "Дизайнер",
        img: "images/team/3.jpg",
    },
    {
        name: "Дмитрий",
        contact: "-",
        position: "Монтажник",
        img: "images/team/2.jpg",
    },
    {
        name: "Виктор",
        contact: "-",
        position: "Ведущий специалист по техническому надзору",
        img: "images/team/1.jpg",
    },
    {
        name: "Валентин",
        contact: "-",
        position: "Дизайнер по освещению",
        img: "images/team/7.jpg",
    },
    // {
    //     name: "Имя",
    //     contact: "-",
    //     position: "Инженер",
    //     img: "images/team/8.jpg",
    // },
    {
        name: "Иван",
        contact: "-",
        position: "Монтажник",
        img: "images/team/9.jpg",
    },
];

type FeaturesCardsOurTeamType = {
    mode: "main-page" | "about-page" | "";
};
export function FeaturesCardsOurTeam({ mode }: FeaturesCardsOurTeamType) {
    const features = mockdata.map((employee, index) => {
        return (
            <Carousel.Slide key={index}>
                {/* <Image radius="md" fit="contain" src={employee.img} /> */}
                <Card shadow="md" className={classes.card} m={10}>
                    <Avatar src={employee.img} size={120} radius={120} mx="auto" />
                    <Text ta="center" fz="lg" fw={500} mt="md">
                        {employee.name}
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        {employee.contact}
                    </Text>

                    <Text ta="center" c="dimmed" fz="sm">
                        {employee.position}
                    </Text>
                    {/*</Paper>*/}
                </Card>
            </Carousel.Slide>
        );
    });
    // const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <Container size="80rem" className={classes.container}>
            <Title
                order={2}
                mb="xl"
                ta="center"
                className={classes.description}
                style={{ fontFamily: "Nautilus" }}
                c="dark.5"
            >
                Мы рады работать <Text component="span" inherit c="blue">вместе</Text> с Вами
            </Title>

            <Image radius="xl" mt={50} src="images/team/group.webp" alt="komanda_img" className={classes.img} />

            <SimpleGrid
                cols={{
                    base: 1,
                    // xs: 2,
                    // sm: 3,
                    // md: 3,
                }}
                spacing="xl"
                mt={50}
                mb={50}
            >
                <Carousel
                    withIndicators
                    height={"auto"}
                    slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                    slideGap={{ base: 0, sm: "md" }}
                    loop
                    align="start"
                    // plugins={[autoplay.current]}
                >
                    {" "}
                    {features}
                </Carousel>
            </SimpleGrid>
            {/* {mode === "main-page" && (
                <div className={classes.controls}>
                    <Link href="/about" style={{ margin: "0 auto" }}>
                        <Button className={classes.control} variant="default" size="lg">
                            Подробнее
                        </Button>
                    </Link>
                </div>
            )} */}
        </Container>
    );
}
