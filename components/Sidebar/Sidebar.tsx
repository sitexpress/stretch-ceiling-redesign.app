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
        // const handleScroll = () => {
        //     setScrollY(window.scrollY);
        // };
        // handleScroll();
        // // setCount(count + 1)
        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };

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
                right: "22px",
                bottom: "22px",
                transition: "right 0.5s linear",
                zIndex: 1000,
            }}
            // style={{
            //     display: "flex",
            //     flexDirection: "column",
            //     position: "fixed",
            //     right: "22px",
            //     bottom: "88px",
            //     transition: "right 0.5s linear",
            //     zIndex: 1000,
            // }}
        >
            {/* <Anchor href="https://t.me/+nKdXzCW6qmE3NjUy" id="sidebar-telegram">
                <ActionIcon size="xl" color="#24A1DE" variant={"filled"} radius="xl">
                    <IconBrandTelegram
                        style={{
                            width: rem(18),
                            height: rem(18),
                        }}
                        stroke={1.5}
                    />
                </ActionIcon>
            </Anchor>

            <Anchor href="tel:+79881896530" id="sidebar-phone">
                <ActionIcon
                    size="xl"
                    variant={"filled"}
                    radius="xl"
                    // color="green.4" className={classes.pulse}
                >
                    <IconPhonePlus
                        style={{
                            width: rem(18),
                            height: rem(18),
                        }}
                        stroke={1.5}
                    />
                </ActionIcon>
            </Anchor> */}
            <Anchor href="https://max.ru/u/f9LHodD0cOJKFrItttByPcrZPQhDRCemed9leLfCR7gsOHGR95KEgT_742A" id="sidebar-max" target="_blank">
                <ActionIcon size={58} color="" variant={"filled"} radius="xl" className={classes.pulse}>
                    <Image src={"https://upload.wikimedia.org/wikipedia/commons/7/75/Max_logo_2025.png"} className={classes.wiggle}/>
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
