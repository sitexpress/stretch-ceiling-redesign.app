"use client";
import AnimateEnhanced from "@/components/Animate/Animate";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import { Button, Flex, Group, List, Overlay, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCircleCheck } from "@tabler/icons-react";
import { useState } from "react";
import { VimeoPlayer } from "../ReelVideo/VimeoPlayer";
import { VimeoPlayerLeft } from "../ReelVideo/VimeoPlayerLeft";
import { VimeoPlayerLeftBottom } from "../ReelVideo/VimeoPlayerLeftBottom";
import classes from "./HeroBullets.module.css";

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

            <Group className={classes.content} bg="white" ml={16} p={10} pt={20}>
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
                                Строительно-отделочные работы.
                                <br />
                                <Text
                                    component="span"
                                    c="dark.6"
                                    fw={700}
                                    style={{ fontFamily: "TildaSansSemibold" }}
                                    className={classes.title}
                                >
                                    Ремонт под ключ. Натяжные потолки.
                                    <br />
                                </Text>{" "}
                                В городе Сочи. {""}
                            </Text>
                        </Title>
{/* 
                        <Text mt="xs" c="dark.6" className={classes.subtitle}>
                            Монтаж за 1-2 дня со скидкой 50% на полотно!
                        </Text> */}
                    </AnimateEnhanced>
                </div>

                <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                    <Flex direction="row" justify="space-between" gap={10}>
                        <Flex direction="column">
                            <List spacing="xs">
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
                                        Сдаём в срок
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        быстро, качественно, без задержек.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        Ремонт квартир{" "}
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                         без задержек и переплат
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
                                        Производство и утсановка мебели на заказ
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        полностью индивидуальный дизайн.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text component="span" fw={700} className={classes.list}>
                                        Подбор и закупка строительных материалов
                                    </Text>
                                    <Text component="span" fw="500" c="dark.5" className={classes.list_item_descr}>
                                        {" "}
                                        используем качественные материалы.
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
                <Flex gap={20} w="100%" justify="center" align="end">
                    <Flex direction="column" gap={10} justify="space-between" w="100%">
                        <Button
                            // id="review"
                            // visibleFrom="sm"
                            onClick={scrollToSection}
                            // onClick={callBackHandler}
                            variant="transparent"
                            radius="lg"
                            size="md"
                            bg="red.6"
                            c="gray.0"
                            w="100%"
                            // className={classes.control}
                        >
                            Рассчитать стоймость
                        </Button>

                        <Button
                            onClick={measurerHandler}
                            variant="filled"
                            radius="lg"
                            size="md"
                            bg="dark.6"
                            w="100%"
                            // className={classes.control}
                        >
                            Запись на замер
                        </Button>
                        {!matchMd && (
                            <Flex className={classes.addr_panel_m} justify="space-between" p={5} w="100%">
                                <Flex direction="column" justify="start" align="flex-start">
                                    <Text size="xs" c="dimmed">
                                        Мы находимся:
                                    </Text>
                                    <Text size="xs" fw={700}>
                                        Краснодарский край, Сочи, <br />
                                        Виноградный переулок 9, корпус 5
                                    </Text>
                                </Flex>
                                <Flex direction="column" justify="start" align="flex-start">
                                    <Text size="xs" c="dimmed">
                                        Звоните по номеру:
                                    </Text>
                                    <Text size="xs" fw={700}>
                                        +7(988)189-65-30
                                    </Text>
                                    <Text size="xs" fw={700}>
                                        +7(918)605-60-58
                                    </Text>
                                </Flex>
                            </Flex>
                        )}
                    </Flex>
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

                <div className={classes.video}>
                    <VimeoPlayer />
                </div>
                <List
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconCircleCheck size={16} />
                        </ThemeIcon>
                    }
                    withPadding
                    spacing="none"
                    className={classes.list_right}
                    // m={10}
                    mt={0}
                    pt={0}
                    pl={20}
                >
                    <Text size="lg" ta="center" c="" fw={700}>
                        При{" "}
                        <Text component="span" c="red.6" fw={700}>
                            заказе:
                        </Text>
                    </Text>{" "}
                    <List.Item>
                        <Text size="lg" fw={600}>
                            <Text component="span" fw={600}>
                                от{" "}
                            </Text>
                            <Text component="span" c="red.6" fw={700} size="xl">
                                100
                            </Text>{" "}
                            <Text component="span" fw={600}>
                                тыс.
                            </Text>
                            <Text component="span" fw={600} c="">
                                {" "}
                                люстра в подарок!
                            </Text>
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text size="lg" c="" fw={600}>
                            <Text component="span" fw={600}>
                                от{" "}
                            </Text>
                            <Text component="span" c="red.6" fw={700} size="xl">
                                500
                            </Text>{" "}
                            <Text component="span" fw={600}>
                                тыс.
                            </Text>
                            <Text component="span" fw={600} c="">
                                {" "}
                                магнитный трек в подарок!
                            </Text>
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text size="lg" c="" fw={700}>
                            <Text component="span" fw={600}>
                                от{" "}
                            </Text>
                            <Text component="span" c="red.6" fw={700} size="xl">
                                800
                            </Text>{" "}
                            <Text component="span" fw={600}>
                                тыс.
                            </Text>
                            <Text component="span" fw="600" c="">
                                {" "}
                                магнитные светильники в подарок!
                            </Text>
                        </Text>
                    </List.Item>
                </List>
                <Flex
                    className={classes.addr_panel}
                    justify="space-between"
                    align="center"
                    pb="sm"
                    pl="lg"
                    pr="lg"
                    // ml="xs"
                    // mb="xs"
                    // mr="xs"
                >
                    <Flex direction="column" justify="start" align="flex-start">
                        <Text size="xs" c="dimmed">
                            Мы находимся:
                        </Text>
                        <Text size="md" fw={700}>
                            Краснодарский край, Сочи, <br />
                            Виноградный переулок 9, корпус 5
                        </Text>
                    </Flex>
                    <Flex direction="column" justify="start" align="flex-start">
                        <Text size="xs" c="dimmed">
                            Звоните по номеру:
                        </Text>
                        <Text size="md" fw={700}>
                            +7(988)189-65-30
                        </Text>
                        <Text size="md" fw={700}>
                            +7(918)605-60-58
                        </Text>
                    </Flex>
                </Flex>
            </Group>
        </Flex>
    );
}
