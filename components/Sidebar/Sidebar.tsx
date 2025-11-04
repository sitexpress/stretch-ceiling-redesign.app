"use client";
import { ActionIcon, Anchor, Group, Image, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import React, { useState } from "react";

import classes from "./Sidebar.module.css";

export default function Sidebar() {
    // const [scrollY, setScrollY] = React.useState(0);
    const [opened, { close, open }] = useDisclosure(false);
    const [isLoaded, setIsLoaded] = useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2800);
    }, []);

    if (!isLoaded) return;
    return (
        <Group
            gap={10}
            wrap="nowrap"
            // onMouseEnter={open}
            onMouseLeave={close}
            style={{
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                right: "14px",
                bottom: "11px",
                transition: "right 0.5s linear",
                zIndex: 1000,
                border: "1px solid rgba(250, 82, 82, 0.3)",
                borderRadius: "40px",
                backdropFilter: "blur(3px)", // увеличил значение для лучшего эффекта
                WebkitBackdropFilter: "blur(3px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // добавьте это
            }}
            pt={8}
            pb={8}
            pl={4}
            pr={4}
        >
            <Anchor
                href="https://max.ru/u/f9LHodD0cOJKFrItttByPcrZPQhDRCemed9leLfCR7gsOHGR95KEgT_742A"
                id="sidebar-max"
                target="_blank"
            >
                <ActionIcon size={58} color="" variant={"filled"} radius="xl" className={classes.pulse}>
                    <Image
                        src={"https://upload.wikimedia.org/wikipedia/commons/7/75/Max_logo_2025.png"}
                        className={classes.wiggle}
                    />
                </ActionIcon>
            </Anchor>
            <Anchor href="https://wa.me/79881896530" id="sidebar-whatsapp" target="_blank">
                <ActionIcon size={58} color="green.4" variant={"filled"} radius="xl" className={classes.pulse}>
                    <IconBrandWhatsapp
                        style={{
                            width: rem(38),
                            height: rem(38),
                        }}
                        stroke={1.5}
                        className={classes.wiggle}
                    />
                </ActionIcon>
            </Anchor>
        </Group>
    );
}
