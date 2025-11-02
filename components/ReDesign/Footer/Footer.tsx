"use client";
import React from "react";
import { ActionIcon, Anchor, Container, Flex, rem, Text, Image } from "@mantine/core";
import { IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";
import classes from "./Footer.module.css";

const data = [
    {
        title: "Популярное",
        links: [
            {
                label: "Главная",
                link: "/",
            },
            {
                label: "Портфолио",
                link: "/portfolio",
            },
            {
                label: "О нас",
                link: "/about",
            },
            {
                label: "Контакты",
                link: "/contacts",
            },
        ],
    },
    {
        title: "Соцсети",
        links: [
            {
                label: "Telegram",
                link: "https://t.me/+79881896530",
            },
            {
                label: "Whatsapp",
                link: "https://wa.me/79881896530",
            },
            {
                label: "Email: family.build@mail.ru",
                link: "#",
            },
            {
                label: "Тел: +7(988)189-65-30",
                link: "tel:+79881896530",
            },
            {
                label: "Тел: +7(918)605-60-58",
                link: "tel:+79186056058",
            },
        ],
    },
];

export function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) =>
            link.label === "Email: family.build@mail.ru" ? (
                <Text className={classes.link} c="dimmed" key={index}>
                    {link.label}
                </Text>
            ) : (
                <Anchor
                    key={index}
                    href={link.link}
                    target={
                        link.label === "Telegram" ||
                        link.label === "Whatsapp" ||
                        link.label === "Тел: +7(988)189-65-30" ||
                        link.label === "Тел: +7(918)605-60-58"
                            ? "_blank"
                            : "_self"
                    }
                    style={{ textDecoration: "none" }}
                    c="white"
                >
                    <Text className={classes.link} c="dimmed">
                        {link.label}
                    </Text>
                </Anchor>
            )
        );

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title} fw={500}>
                    {group.title}
                </Text>
                {links}
            </div>
        );
    });

    return (
        <div style={{ background: "#f1f3f5" }}>
            <div className={classes.footer_container}>
                <Flex
                    className={classes.footer}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                >
                    <Container className={classes.inner}>
                        <div className={classes.logo}>
                            <Image
                                src="/images/logo/logo.svg"
                                width={150}
                                height={150}
                                alt="Stroy Family logo"
                                style={{ zIndex: 2, opacity: 0.8 }}
                            />
                        </div>
                        <Flex
                            pl="100px"
                            gap="xs"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                            visibleFrom="md"
                        >
                            {groups}
                        </Flex>
                    </Container>

                    <Container className={classes.afterFooter}>
                        <Text c="dimmed" size="sm">
                            Внимание! Данный сайт носит информационный характер и ни при каких условиях не является
                            публичной офертой, которая определяется положениями Статьи 437 (2) Гражданского кодекса РФ.
                            Для получения подробной информации о наличии и стоимости указанных товаров и (или) услуг,
                            пожалуйста, обращайтесь к нашим менеджерам. Или мы сами свяжемся с Вами.
                        </Text>
                        <Text c="dimmed" size="sm" mt="40" fw={700} ta="center">
                            © 2020 <span style={{ fontFamily: "Nautilus" }}>Строй Family.</span> Все права защищены.
                        </Text>

                        <Flex className={classes.social} justify="center" align="center" wrap="nowrap" gap={10} mt="md" pl={10} pr={10}>
                            <Anchor
                                href="https://max.ru/u/f9LHodD0cOJKFrItttByPcrZPQhDRCemed9leLfCR7gsOHGR95KEgT_742A"
                                id="sidebar-max"
                                target="_blank"
                                mt={5}
                            >
                                <ActionIcon size={40} color="" variant={"filled"} radius="xl">
                                    <Image
                                        src={"https://upload.wikimedia.org/wikipedia/commons/7/75/Max_logo_2025.png"}
                                    />
                                </ActionIcon>
                            </Anchor>
                            <Anchor href="https://t.me/+79881896530" target="_blank">
                                <ActionIcon size={40} color="blue.4" variant={"filled"} radius="xl">
                                    <IconBrandTelegram
                                        style={{
                                            width: rem(20),
                                            height: rem(20),
                                        }}
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                            </Anchor>

                            <Anchor href="https://wa.me/79881896530" id="sidebar-whatsapp">
                                <ActionIcon size={40} color="green.4" variant={"filled"} radius="xl">
                                    <IconBrandWhatsapp
                                        style={{
                                            width: rem(20),
                                            height: rem(20),
                                        }}
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                            </Anchor>
                        </Flex>
                    </Container>
                </Flex>
            </div>
        </div>
    );
}
