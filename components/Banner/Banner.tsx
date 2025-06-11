"use client";
import { Anchor, Button, Card, CloseButton, Overlay, Text, Title } from "@mantine/core";
import classes from "./Banner.module.css";
import React from "react";

type BannerType = {
    setIsOpen: (value: boolean) => void;
    isOpen: boolean
};
export function Banner({ setIsOpen, isOpen}: BannerType) {

    return (
        <Card radius="md" className={classes.card}>
            <div className={classes.content}>
            <div style={{ position: "absolute", top: 0, right: 0 }} onClick={()=>setIsOpen(!isOpen)}>
                <CloseButton size="xl" c="white"/>
            </div>
                <Text
                    role="presentation"
                    style={{ fontFamily: "Nautilus" }}
                    size="38px"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan", deg: 90 }}
                >
                    Строй Family
                </Text>

                <Text size="md" className={classes.description} c="white" fw={700} mt="xl" p="sm" ta="center">
                    Больше видео наших работ с реальных объектов Вы сможете посмотреть в нашем телеграм канале.
                </Text>

                <Button className={classes.action} variant="filled" color="blue.8" size="xs">
                      <Anchor
                            href="https://t.me/+nKdXzCW6qmE3NjUy"
                            target="_blank"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                             Перейти в телеграм
                        </Anchor>
                   
                </Button>
            </div>
        </Card>
    );
}
