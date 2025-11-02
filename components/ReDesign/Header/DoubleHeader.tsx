"use client";
import AnimateEnhanced from "@/components/Animate/Animate";
import { catalogAndMobileMenuNavLinks } from "@/components/CatalogDashboard/Links/Links";
import DrawerCalculations from "@/components/DrawerCalculations/DrawerCalculations";
import { tabs } from "@/lib/data/headerMenuData";
import { useAppDispatch, useAppSelector } from "@/lib/utilities/hooks/hooks";
import {
    ActionIcon,
    Anchor,
    Badge,
    Box,
    Burger,
    Button,
    Container,
    Divider,
    Drawer,
    Flex,
    Group,
    Image,
    rem,
    ScrollArea,
    SegmentedControl,
    Text,
    UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./DoubleHeader.module.css";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import React from "react";

const mainLinks = [
    { link: "/", label: "Главная" },
    { link: "/portfolio", label: "Портфолио" },
    { link: "/about", label: "О нас" },
    { link: "/contacts", label: "Контакты" },
    { link: "/electro-curtains", label: "Onviz" },
];

export function DoubleHeader() {
    const [isHeaderShown, setIsHeaderShown] = useState(false);
    const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "">("");
    const [isOpen, setIsOpen] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState("");
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    useEffect(() => {
        const active = localStorage.getItem("_ym101251572_il");
        if (active !== null) setActive(JSON.parse(active));
    });

    const mainItems = mainLinks.map((item, index) => (
        <Link
            href={item.link}
            key={item.label}
            className={classes.mainLink}
            onClick={() => {
                setActive(item.label);
            }}
            // data-active={item.label === active || undefined}
            style={{ cursor: "pointer" }}
        >
            {item.label}
        </Link>
    ));

    useEffect(() => {
        const newIndex = localStorage.getItem("_ym101251572_il");
        if (newIndex) {
            setActive(JSON.parse(newIndex));
            console.log("newIndex:", newIndex);
        }
    }, []);

    const tabName = useAppSelector((state) => state.tabData.tab);
    const dispatch = useAppDispatch();

    const mobileLinks =
        tabName === "меню"
            ? tabs["меню"].map((item: any, index: number) => (
                  <UnstyledButton key={index} className={classes.my_control} onClick={closeDrawer}>
                      <Box ml="xs">
                          <Text size="lg" fw={700} style={{ fontSize: "20" }}>
                              <Link href={`${item.link}`} className={classes.link}>
                                  {item.title}
                              </Link>
                          </Text>
                      </Box>
                  </UnstyledButton>
              ))
            : catalogAndMobileMenuNavLinks(closeDrawer);

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

    React.useEffect(() => {
        closeDrawer();
        const handleScroll = () => {
            setIsHeaderShown(true);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            setIsHeaderShown(false);
        };
    }, []);

    if (!isHeaderShown) return;
    return (
        <header className={classes.header}>
            {isOpen && <ModalComponent isOpen={isOpen} modalMode={modalMode} setIsOpen={setIsOpen} />}
            <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                <Container className={classes.inner} size="xxl" mt={16}>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Flex direction="row" gap={5} align="center">
                            <Text fw={500} c="dark.6" style={{ fontFamily: "Nautilus", fontSize: "32px" }}>
                                Строй Family
                            </Text>
                        </Flex>
                    </Link>
                    <Flex>
                        <Box className={classes.links} visibleFrom="sm">
                            <Flex wrap="nowrap" gap={10} justify="end">
                                <Anchor
                                    href="https://max.ru/u/f9LHodD0cOJKFrItttByPcrZPQhDRCemed9leLfCR7gsOHGR95KEgT_742A"
                                    id="sidebar-max"
                                    target="_blank"
                                >
                                    <ActionIcon size={32} color="" variant={"filled"} radius="xl">
                                        <Image
                                            src={
                                                "https://upload.wikimedia.org/wikipedia/commons/7/75/Max_logo_2025.png"
                                            }
                                        />
                                    </ActionIcon>
                                </Anchor>
                                <Anchor href="https://t.me/+79881896530" target="_blank">
                                    <ActionIcon size={30} color="blue.4" variant={"filled"} radius="xl">
                                        <IconBrandTelegram
                                            style={{
                                                width: rem(20),
                                                height: rem(20),
                                            }}
                                            stroke={1.5}
                                        />
                                    </ActionIcon>
                                </Anchor>

                                <Anchor href="https://wa.me/79881896530" id="sidebar-whatsapp" target="_blank">
                                    <ActionIcon size={30} color="green.4" variant={"filled"} radius="xl">
                                        <IconBrandWhatsapp
                                            style={{
                                                width: rem(20),
                                                height: rem(20),
                                            }}
                                            stroke={1.5}
                                        />
                                    </ActionIcon>
                                </Anchor>

                                <Anchor href="tel:+79881896530">
                                    <Badge
                                        size="xl"
                                        fw="700"
                                        variant="dot"
                                        style={{ cursor: "pointer" }}
                                        // bg="dark.6"
                                        c="dark.6"
                                    >
                                        +7 ( 988 ) 189-65-30
                                    </Badge>
                                </Anchor>
                            </Flex>

                            <Group gap={0} justify="flex-end" className={classes.mainLinks}>
                                {mainItems}
                            </Group>
                        </Box>
                    </Flex>

                    <Burger
                        opened={opened}
                        onClick={toggleDrawer}
                        className={classes.burger}
                        size="sm"
                        hiddenFrom="sm"
                    />
                    {/* <ActionToggle mode={"calculations"} /> */}

                    <DrawerCalculations />
                    <Drawer
                        className={classes.my_drawer}
                        opened={drawerOpened}
                        onClose={closeDrawer}
                        size="100%"
                        padding="lg"
                        title={
                            <span
                                style={{
                                    fontFamily: "Nautilus",
                                    fontSize: "27px",
                                    marginLeft: "16px",
                                }}
                            >
                                Строй Family
                            </span>
                        }
                        hiddenFrom="lg"
                        zIndex={1000000}
                        position="right"
                        scrollAreaComponent={ScrollArea.Autosize}
                    >
                        {/* <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md"> */}
                        <div
                            style={{
                                paddingLeft: "15px",
                                paddingRight: "15px",
                                paddingBottom: "15px",
                            }}
                        >
                            <SegmentedControl
                                value={"меню"}
                                // onChange={() => {
                                //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                //     tabName === "меню" ? dispatch(changeTab("каталог")) : dispatch(changeTab("меню"));
                                // }}
                                transitionTimingFunction="ease"
                                fullWidth
                                data={[
                                    {
                                        label: "меню",
                                        value: "меню",
                                    },
                                ]}
                                radius={40}
                            />
                            {/* <SegmentedControl
                                value={tabName}
                                onChange={() => {
                                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                    tabName === "меню" ? dispatch(changeTab("каталог")) : dispatch(changeTab("меню"));
                                }}
                                transitionTimingFunction="ease"
                                fullWidth
                                data={[
                                    {
                                        label: "меню",
                                        value: "меню",
                                    },
                                    {
                                        label: "каталог",
                                        value: "каталог",
                                    },
                                ]}
                                radius={40}
                            /> */}
                        </div>
                        {/* <Text fw={500} size="xs" c="dimmed" pl="20" pr="20">
                            *чтобы раскрыть меню нажмите на {">"} шэврон, чтобы открыть страницу раздела, на сам раздел
                        </Text> */}
                        <div className={classes.navbarMain}>{mobileLinks}</div>
                        {/*<div className={s.navbarMain}>{CatalogNavlinks}</div>*/}
                        <Divider my="xs" />
                        <Flex justify="center" direction="column" pt={40} gap={10}>
                            <Button
                                onClick={() => {
                                    callBackHandler();
                                    closeDrawer();
                                }}
                                size="sm"
                                variant="default"
                                w="100%"
                                c="gray.0"
                                bg="dark.6"
                                radius={20}
                            >
                                {/* <IconHeadset size={25} style={{ paddingRight: "5px" }} /> */}
                                Обратный звонок
                            </Button>
                            <Button
                                onClick={() => {
                                    measurerHandler();
                                    closeDrawer();
                                }}
                                size="sm"
                                w="100%"
                                c="gray.0"
                                bg="red.6"
                                radius={20}
                            >
                                {/* <IconRulerMeasure size={25} style={{ paddingRight: "5px" }} /> */}
                                Записаться на замер
                            </Button>
                            <Anchor href="tel:+79881896530">
                                <Button size="sm" w="100%" c="gray.0" bg="red.6" radius={20}>
                                    {/* <IconPhonePlus size={25} style={{ paddingRight: "5px" }} /> */}
                                    +7 988 189 65 30
                                </Button>
                            </Anchor>
                        </Flex>

                        <Group
                            gap={0}
                            justify="flex-end"
                            wrap="nowrap"
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                gap: "15px",
                                paddingTop: "40px",
                                // border: "1px solid gray"
                            }}
                            mt={10}
                        >
                            <Group
                                gap={0}
                                justify="flex-end"
                                wrap="nowrap"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    gap: "10px",
                                    border: "1px solid lightgray",
                                    borderRadius: "30px",
                                }}
                                pl={20}
                                pr={20}
                            >
                                <Anchor
                                    href="https://max.ru/u/f9LHodD0cOJKFrItttByPcrZPQhDRCemed9leLfCR7gsOHGR95KEgT_742A"
                                    id="sidebar-max"
                                    target="_blank"
                                >
                                    <ActionIcon size={40} color="" variant={"filled"} radius="xl" mt={5}>
                                        <Image
                                            src={
                                                "https://upload.wikimedia.org/wikipedia/commons/7/75/Max_logo_2025.png"
                                            }
                                        />
                                    </ActionIcon>
                                </Anchor>
                                <Anchor href="https://t.me/+nKdXzCW6qmE3NjUy" target="_blank">
                                    <ActionIcon size={40} color="#24A1DE" variant="filled" radius={40}>
                                        <IconBrandTelegram
                                            style={{
                                                width: rem(20),
                                                height: rem(20),
                                            }}
                                            stroke={1.5}
                                        />
                                    </ActionIcon>
                                </Anchor>
                                <Anchor href="https://wa.me/79881896530" target="_blank">
                                    <ActionIcon size={40} color="green.4" variant="filled" radius={40}>
                                        <IconBrandWhatsapp
                                            style={{
                                                width: rem(20),
                                                height: rem(20),
                                            }}
                                            stroke={1.5}
                                        />
                                    </ActionIcon>
                                </Anchor>
                            </Group>
                            <Text fw={500} size="sm" c="dimmed">
                                family.build@mail.ru
                            </Text>
                        </Group>
                        {/* </ScrollArea> */}
                    </Drawer>
                </Container>
            </AnimateEnhanced>
        </header>
    );
}
