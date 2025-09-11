"use client";
import { Button, Flex, Group, List, Overlay, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./HeroBullets.module.css";
import { VimeoPlayer } from "../ReelVideo/VimeoPlayer";
import { VimeoPlayerLeftBottom } from "../ReelVideo/VimeoPlayerLeftBottom";
import { VimeoPlayerLeft } from "../ReelVideo/VimeoPlayerLeft";
import { useState } from "react";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import { useMediaQuery } from "@mantine/hooks";
import AnimateEnhanced from "@/components/Animate/Animate";

type ScrollToSectionType = {
    scrollToSection: () => void;
};
export function HeroBullets({ scrollToSection }: ScrollToSectionType) {
    const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "">("");
    const [isOpen, setIsOpen] = useState(false);

    const measurerHandler = () => {
        setModalMode("measurer");
        // open();
        setIsOpen(true);
    };

    // const callBackHandler = () => {
    //     setModalMode("callBack");
    //     // open();
    //     setIsOpen(true);
    // };

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

    return (
        <Flex className={classes.inner} bg="gray.1" gap={16} pt={116} pb={16}>
            {isOpen && <ModalComponent isOpen={isOpen} modalMode={modalMode} setIsOpen={setIsOpen} />}

            <Group className={classes.content} bg="white" ml={16}>
                <div>
                    <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                        <Title className={classes.title}>
                            <Text
                                component="span"
                                c="red.6"
                                fw={700}
                                style={{ fontFamily: "TildaSansSemibold" }}
                                className={classes.title}
                            >
                                Натяжные потолки в Сочи
                            </Text>
                            <Text
                                component="span"
                                c="dark.6"
                                fw={700}
                                style={{ fontFamily: "TildaSansSemibold" }}
                                className={classes.title}
                            >
                                {" "}
                                премиум-класса!{" "}
                            </Text>
                        </Title>

                        <Text mt="xs" c="red.6" className={classes.subtitle}>
                            Монтаж за 1-2 дня со скидкой 50% на полотно!
                        </Text>
                    </AnimateEnhanced>
                </div>

                <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                    <Flex direction="row" justify="space-between" gap={10}>
                        <Flex direction="column" gap={50}>
                            <List spacing="sm">
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        Работа под ключ
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        чистый ремонт, без повреждений.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        Сдаём в срок!
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        быстро, качественно, без задержек.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        При заказе у нас{" "}
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        полный рассчет по вашему проекту, с подбором освещения.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        Бесплатный выезд замерщика
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        для точных расчетов и удобства клиента.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        Трековое магнитное освещение
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        все новинки магнитного трекового освещения.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        Профессиональный клининг
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        профессиональный клининг после завершения монтажа.
                                    </Text>
                                </List.Item>
                            </List>
                            <List spacing="sm" className={classes.list_left} visibleFrom={sm}>
                                <Text size="18px" c="dark.5" fw={700} mb="md" ta="left">
                                    При заказе:
                                </Text>{" "}
                                <List.Item>
                                    <Flex c="dark.5" fw={700} direction="column">
                                        <Text component="span" size="lg" c="red.6" fw={700}>
                                            от 100 тыс.{" "}
                                        </Text>
                                        <Text component="span" fw={700}>
                                            {" "}
                                            скидка на освещение 15%!
                                        </Text>
                                    </Flex>
                                </List.Item>
                                <List.Item>
                                    <Flex c="dark.5" fw={700} direction="column">
                                        <Text component="span" size="lg" c="red.6" fw={700}>
                                            от 500 тыс.{" "}
                                        </Text>
                                        <Text component="span" fw={700}>
                                            {" "}
                                            скидка на освещение 20%!
                                        </Text>
                                    </Flex>
                                </List.Item>
                                <List.Item>
                                    <Flex c="dark.5" fw={700} direction="column">
                                        <Text component="span" size="lg" c="red.6" fw={700}>
                                            от 800 тыс.{" "}
                                        </Text>
                                        <Text component="span" fw={700}>
                                            {" "}
                                            скидка на освещение 25%!
                                        </Text>
                                    </Flex>
                                </List.Item>
                            </List>
                        </Flex>

                        <div className={classes.video_left}>
                            <VimeoPlayerLeft />
                            {/* <VimeoPlayer  mode="video_left"  /> */}
                        </div>
                    </Flex>
                </AnimateEnhanced>

                {/* <Group justify="right" className={classes.control_wrapper}> */}
                <Flex gap={20} w="100%">
                    {matchXs && (
                        <Button
                            // id="review"
                            // visibleFrom="sm"
                            onClick={scrollToSection}
                            // onClick={callBackHandler}
                            variant="default"
                            radius="xl"
                            size="lg"
                            bg="red.6"
                            c="gray.0"
                            w="100%"
                            // className={classes.control}
                        >
                            Рассчитать стоймость
                        </Button>
                    )}

                    <Button
                        onClick={measurerHandler}
                        variant="filled"
                        radius="xl"
                        size="lg"
                        bg="dark.6"
                        w="100%"
                        // className={classes.control}
                    >
                        Запись на замер
                    </Button>
                </Flex>

                <div className={classes.video_left_bottom}>
                    <Flex>
                        {/* <VimeoPlayer mode="video_left_bottom" /> */}
                        <VimeoPlayerLeftBottom />
                        <List spacing="sm" className={classes.list_left_bottom} withPadding>
                            <Text size="18px" c="dark.5" fw={700} mb="md" ta="left">
                                При заказе:
                            </Text>{" "}
                            <List.Item>
                                <Flex c="dark.5" fw={700} direction="column">
                                    <Text component="span" size="lg" c="red.6" fw={700}>
                                        от 100 тыс.{" "}
                                    </Text>
                                    <Text component="span" fw={700}>
                                        {" "}
                                        скидка на освещение 15%!
                                    </Text>
                                </Flex>
                            </List.Item>
                            <List.Item>
                                <Flex c="dark.5" fw={700} direction="column">
                                    <Text component="span" size="lg" c="red.6" fw={700}>
                                        от 500 тыс.{" "}
                                    </Text>
                                    <Text component="span" fw={700}>
                                        {" "}
                                        скидка на освещение 20%!
                                    </Text>
                                </Flex>
                            </List.Item>
                            <List.Item>
                                <Flex c="dark.5" fw={700} direction="column">
                                    <Text component="span" size="lg" c="red.6" fw={700}>
                                        от 800 тыс.{" "}
                                    </Text>
                                    <Text component="span" fw={700}>
                                        {" "}
                                        скидка на освещение 25%!
                                    </Text>
                                </Flex>
                            </List.Item>
                        </List>
                    </Flex>
                </div>
            </Group>

            <Group className={classes.image_video_content_container} mr={16}>
                <Overlay
                    gradient="linear-gradient(60deg, rgba(0, 0, 0, 100%) 0%, rgba(0, 0, 0, 0) 100%)"
                    opacity={0.85}
                    className={classes.video_overlay}
                />
                {/* <Overlay className={classes.video_overlay_border} opacity={0.2} /> */}

                <div className={classes.video}>
                    <VimeoPlayer />
                    {/* <VimeoPlayer mode="video" /> */}
                </div>
                <List mt={30} spacing="sm" className={classes.list_right}>
                    <Text size="28px" mb="md" ta="left" c="white">
                        При{" "}
                        <Text component="span" c="red.6" fw={700}>
                            заказе:
                        </Text>
                    </Text>{" "}
                    <List.Item>
                        <Text size="lg" c="white" fw={700}>
                            <Text component="span">от </Text>
                            <Text component="span" c="red.6" fw={700} size="21px">
                                100
                            </Text>{" "}
                            <Text component="span">тыс.</Text>
                            <Text component="span" fw="600" c="white">
                                {" "}
                                люстра в подарок!
                            </Text>
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text size="lg" c="white" fw={700}>
                            <Text component="span">от </Text>
                            <Text component="span" c="red.6" fw={700} size="21px">
                                500
                            </Text>{" "}
                            <Text component="span">тыс.</Text>
                            <Text component="span" fw="600" c="white">
                                {" "}
                                магнитный трек в подарок!
                            </Text>
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text size="lg" c="white" fw={700}>
                            <Text component="span">от </Text>
                            <Text component="span" c="red.6" fw={700} size="21px">
                                800
                            </Text>{" "}
                            <Text component="span">тыс.</Text>
                            <Text component="span" fw="600" c="white">
                                {" "}
                                магнитные светильники в подарок!
                            </Text>
                        </Text>
                    </List.Item>
                </List>
            </Group>
        </Flex>
    );
}
