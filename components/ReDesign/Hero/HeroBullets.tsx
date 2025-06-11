"use client";
import { IconCheck, IconRulerMeasure } from "@tabler/icons-react";
import { Button, Container, Flex, Group, List, Overlay, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import classes from "./HeroBullets.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { VimeoPlayer } from "../ReelVideo/VimeoPlayer";
import { Dots } from "@/components/HeroText/Dots";
import { VimeoPlayerLeftBottom } from "../ReelVideo/VimeoPlayerLeftBottom";
import { VimeoPlayerLeft } from "../ReelVideo/VimeoPlayerLeft";
import { useState } from "react";
import ModalComponent from "@/components/ModalComponent/ModalComponent";

export function HeroBullets() {
    const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "">("");
    const [isOpen, setIsOpen] = useState(false);
    const theme = useMantineTheme();
    const xs = theme.breakpoints.xs;
    const sm = theme.breakpoints.sm;
    const md = theme.breakpoints.md;
    const lg = theme.breakpoints.lg;
    const xl = theme.breakpoints.xl;

    const matchXs = useMediaQuery(`(min-width: ${xs})`);
    const matchSm = useMediaQuery(`(min-width: ${sm})`);
    const matchMd = useMediaQuery(`(min-width: ${md})`);
    const matchLg = useMediaQuery(`(min-width: ${lg})`);
    const matchXl = useMediaQuery(`(min-width: ${xl})`);

    const measurerHandler = () => {
        setModalMode("measurer");
        // open();
        setIsOpen(true);
    };

    const callBackHandler = () => {
        setModalMode("callBack");
        // open();
        setIsOpen(true);
    };

    const DotFunc = () => {
        return (
            <>
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 5,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 205,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 405,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 605,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 805,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1005,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1205,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1405,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1605,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1805,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />

                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 5,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 205,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 405,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 605,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 805,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1005,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1205,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1405,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1605,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "#74c0fc",
                        position: "absolute",
                        right: 1805,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
            </>
        );
    };

    return (
        <Container
            size="xxl"
            style={
                matchMd ? { paddingLeft: "30px", paddingRight: "30px" } : { paddingLeft: "18px", paddingRight: "18px" }
            }
        >
            {isOpen && <ModalComponent isOpen={isOpen} modalMode={modalMode} setIsOpen={setIsOpen} />}
            <div className={classes.inner}>
                <div className={classes.content}>
                    <DotFunc />
                    <Title className={classes.title} order={1}>
                        <span className={classes.highlight} style={{ fontFamily: "Nautilus" }}>
                            Натяжные потолки в Сочи
                        </span>
                        <span className={classes.highlight_off} style={{ fontFamily: "Nautilus" }}>
                            {" "}
                            премиум-класса!{" "}
                        </span>
                        <br />
                    </Title>

                    <Text mt="md" c="blue" className={classes.subtitle}>
                        Монтаж за 1–2 дня со скидкой 50% на полотно!
                    </Text>

                    <Flex direction="row" justify="space-between">
                        <div>
                            <List
                                mt={30}
                                spacing="sm"
                                icon={
                                    <ThemeIcon size={20} radius="xl">
                                        <IconCheck size={12} stroke={1.5} />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>
                                    <Text
                                        component="span"
                                        c="blue"
                                        fw={700}
                                        style={{ fontFamily: "Nautilus" }}
                                        className={classes.list}
                                    >
                                        Работа под ключ
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        чистый ремонт, без повреждений.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text
                                        component="span"
                                        c="blue"
                                        fw={700}
                                        style={{ fontFamily: "Nautilus" }}
                                        className={classes.list}
                                    >
                                        Сдаём в срок!
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        быстро, качественно, без задержек.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text
                                        component="span"
                                        c="blue"
                                        fw={700}
                                        style={{ fontFamily: "Nautilus" }}
                                        className={classes.list}
                                    >
                                        При заказе у нас{" "}
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        полный рассчет по вашему проекту, с подбором освещения.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text
                                        component="span"
                                        c="blue"
                                        fw={700}
                                        style={{ fontFamily: "Nautilus" }}
                                        className={classes.list}
                                    >
                                        Бесплатный выезд замерщика
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        для точных расчетов и удобства клиента.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text
                                        component="span"
                                        c="blue"
                                        fw={700}
                                        style={{ fontFamily: "Nautilus" }}
                                        className={classes.list}
                                    >
                                        Трековое магнитное освещение
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        все новинки магнитного трекового освещения.
                                    </Text>
                                </List.Item>
                            </List>
                            <List
                                spacing="sm"
                                className={classes.list_left}
                                icon={
                                    <ThemeIcon size={20} radius="xl">
                                        <IconCheck size={12} stroke={1.5} />
                                    </ThemeIcon>
                                }
                            >
                                <Text
                                    size="18px"
                                    c="dark.5"
                                    fw={700}
                                    style={{ fontFamily: "Nautilus" }}
                                    mb="md"
                                    ta="left"
                                >
                                    При заказе:
                                </Text>{" "}
                                <List.Item>
                                    <Text size="lg" c="dark.5" fw={700}>
                                        <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                            от{" "}
                                        </Text>
                                        <Text
                                            component="span"
                                            c="blue"
                                            fw={700}
                                            size="21px"
                                            style={{ fontFamily: "Nautilus" }}
                                        >
                                            100
                                        </Text>{" "}
                                        <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                            тыс.
                                        </Text>
                                        <Text component="span" fw="600" style={{ fontFamily: "Nautilus" }}>
                                            {" "}
                                            люстра в подарок!
                                        </Text>
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size="lg" c="dark.5" fw={700}>
                                        <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                            от{" "}
                                        </Text>
                                        <Text
                                            component="span"
                                            c="blue"
                                            fw={700}
                                            size="21px"
                                            style={{ fontFamily: "Nautilus" }}
                                        >
                                            500
                                        </Text>{" "}
                                        <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                            тыс.
                                        </Text>
                                        <Text component="span" fw="600" style={{ fontFamily: "Nautilus" }}>
                                            {" "}
                                            магнитный трек в подарок!
                                        </Text>
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size="lg" c="dark.5" fw={700}>
                                        <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                            от{" "}
                                        </Text>
                                        <Text
                                            component="span"
                                            c="blue"
                                            fw={700}
                                            size="21px"
                                            style={{ fontFamily: "Nautilus" }}
                                        >
                                            800
                                        </Text>{" "}
                                        <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                            тыс.
                                        </Text>
                                        <Text component="span" fw="600" style={{ fontFamily: "Nautilus" }}>
                                            {" "}
                                            магнитные светильники в подарок!
                                        </Text>
                                    </Text>
                                </List.Item>
                            </List>
                        </div>

                        <div className={classes.video_left}>
                            <VimeoPlayerLeft />
                        </div>
                    </Flex>

                    <Group justify="right" className={classes.control_wrapper}>
                        <Button
                            onClick={measurerHandler}
                            variant="outline"
                            radius="xl"
                            size="md"
                            className={classes.control}
                        >
                            Запись на замер
                        </Button>
                        <Button
                            onClick={callBackHandler}
                            variant="filled"
                            radius="xl"
                            size="md"
                            className={classes.control}
                        >
                            Обратный звонок
                        </Button>
                    </Group>

                    <div className={classes.video_left_bottom}>
                        <VimeoPlayerLeftBottom />
                    </div>
                </div>

                <div className={classes.image_video_content_container}>
                    <Overlay
                        gradient="linear-gradient(90deg, rgba(0, 0, 0, 100%) 0%, rgba(0, 0, 0, 0) 100%)"
                        opacity={0.85}
                        className={classes.video_overlay}
                    />

                    {/* <Image src={image.src} className={classes.image} /> */}
                    <div className={classes.video}>
                        <VimeoPlayer />
                    </div>
                    <List
                        mt={30}
                        spacing="sm"
                        className={classes.list_right}
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck size={12} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <Text size="28px" c="white" fw={700} style={{ fontFamily: "Nautilus" }} mb="md" ta="left">
                            При заказе:
                        </Text>{" "}
                        <List.Item>
                            <Text size="lg" c="white" fw={700}>
                                <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                    от{" "}
                                </Text>
                                <Text component="span" c="blue" fw={700} size="21px" style={{ fontFamily: "Nautilus" }}>
                                    100
                                </Text>{" "}
                                <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                    тыс.
                                </Text>
                                <Text component="span" fw="600" c="white">
                                    {" "}
                                    люстра в подарок!
                                </Text>
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text size="lg" c="white" fw={700}>
                                <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                    от{" "}
                                </Text>
                                <Text component="span" c="blue" fw={700} size="21px" style={{ fontFamily: "Nautilus" }}>
                                    500
                                </Text>{" "}
                                <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                    тыс.
                                </Text>
                                <Text component="span" fw="600" c="white">
                                    {" "}
                                    магнитный трек в подарок!
                                </Text>
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text size="lg" c="white" fw={700}>
                                <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                    от{" "}
                                </Text>
                                <Text component="span" c="blue" fw={700} size="21px" style={{ fontFamily: "Nautilus" }}>
                                    800
                                </Text>{" "}
                                <Text component="span" style={{ fontFamily: "Nautilus" }}>
                                    тыс.
                                </Text>
                                <Text component="span" fw="600" c="white">
                                    {" "}
                                    магнитные светильники в подарок!
                                </Text>
                            </Text>
                        </List.Item>
                    </List>
                </div>
            </div>
        </Container>
    );
}
