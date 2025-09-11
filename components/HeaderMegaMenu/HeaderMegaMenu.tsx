"use client";
import React, { useState } from "react";
// import persistStore from "redux-persist/lib/persistStore";
// import { storePersist } from "@/store/store-persist";
import { ActionToggle } from "@/components/ActionToggle/ActionToggle";
import { catalogAndMobileMenuNavLinks } from "@/components/CatalogDashboard/Links/Links";
import DrawerCalculations from "@/components/DrawerCalculations/DrawerCalculations";
import { SubCatalogs } from "@/components/HeaderMegaMenu/HeaderSubcatalogHooks";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
// import { catalogRTK } from "@/lib/data/catalogData";
import { tabs } from "@/lib/data/headerMenuData";
import { useAppDispatch, useAppSelector } from "@/lib/utilities/hooks/hooks";
import { changeCatalogSection } from "@/store/catalog-data-slice";
import { changeTab } from "@/store/header-menu-tab-data-slice";
import { CatalogSectionType } from "@/types/catalog-data-types";
import {
    ActionIcon,
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Divider,
    Drawer,
    Group,
    HoverCard,
    Image,
    rem,
    ScrollArea,
    SegmentedControl,
    SimpleGrid,
    Text,
    UnstyledButton,
    useComputedColorScheme,
    useMantineTheme,
} from "@mantine/core";
// import Image from "next/image";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
    IconBrandTelegram,
    IconBrandWhatsapp,
    // IconBrandYoutube,
    IconCalculator,
    IconChevronDown,
    IconChevronRight,
    IconPhone,
    IconPhonePlus,
    IconRulerMeasure,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./HeaderMegaMenu.module.css";
import s from "./NavbarSegmented.module.css";
import { allCatalogData } from "@/lib/data/localDataList";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { openCalculationsDrawer } from "@/store/client-session-calculations-slice";
// import { persistStore } from "redux-persist";
// import { storePersist } from "@/store/store-persist";
import { usePathname } from "next/navigation";

export function HeaderMegaMenu() {
    // const [isBannerOpen, setIsBannerOpen] = useState(false);
    const [isHeaderShown, setIsHeaderShown] = useState(false);
    const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "">("");
    const [isOpen, setIsOpen] = useState(false);
    const [isHoverCardClose, setIsHoverCardClose] = useState(false);
    const [scrollY, setScrollY] = React.useState(0);
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const theme = useMantineTheme();
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });
    const pathName = usePathname();
    const tabName = useAppSelector((state) => state.tabData.tab);
    const isNotify = useAppSelector((state) => state.clientSessionCalculationsData.isNotify);
    const dispatch = useAppDispatch();

    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

    const hoverCardHandler = (title: CatalogSectionType) => {
        dispatch(changeCatalogSection(title));
    };

    const queryMd = useMediaQuery("(min-width: 62em)");
    const queryLg = useMediaQuery("(min-width: 1201px)");

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

    const desktopLinks = allCatalogData.map((item: any, index: number) => (
        <UnstyledButton className={classes.subLink} key={index} style={{ height: "100%" }}>
            <Group wrap="nowrap" align="flex-start">
                <HoverCard
                    width={600}
                    position="right"
                    radius="xs"
                    shadow="sm"
                    withinPortal
                    data-position
                    floatingStrategy="fixed"
                    disabled={isHoverCardClose}
                >
                    <HoverCard.Target>
                        <Link
                            className={classes.my_catalog_link}
                            href={`/catalog/${item?.link}`}
                            style={{ color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))" }}
                            onMouseOver={() => item.link !== "montazhnie-raboti" && setIsHoverCardClose(false)}
                            onClick={() => {
                                hoverCardHandler(item.link);
                                setIsHoverCardClose(true);
                            }}
                        >
                            <Center inline>
                                <Box component="span" mr={5}>
                                    {item.title}
                                </Box>
                                {item.link !== "montazhnie-raboti" && (
                                    <IconChevronRight
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        color={theme.colors.gray[6]}
                                    />
                                )}
                            </Center>
                        </Link>
                    </HoverCard.Target>
                    {item.link !== "montazhnie-raboti" && (
                        <HoverCard.Dropdown
                            style={
                                scrollY === 0
                                    ? {
                                          overflow: "hidden",
                                          width: "fit-content",
                                          // top: "122px"
                                          top: `${scrollY}px`,
                                      }
                                    : {
                                          overflow: "hidden",
                                          width: "fit-content",
                                          // top: "240px",
                                          top: `${scrollY}px`,
                                      }
                            }
                        >
                            <ScrollArea
                                h={600}
                                w={960}
                                // scrollbarSize={10}
                                scrollHideDelay={0}
                            >
                                <Image
                                    src={"/images/header-drop-down/sub-catalog/pvh-polotna-banner.jpg"}
                                    radius="md"
                                    width={960}
                                    height={100}
                                    alt="пвх полотна/партнеры фото"
                                />

                                <SimpleGrid
                                    cols={4}
                                    spacing={0}
                                    verticalSpacing={0}
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "start",
                                    }}
                                >
                                    <SimpleGrid cols={1} spacing={0}>
                                        {item.link === "komplektuyshie"
                                            ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                  .komplektuyshieCatalogDataSubCatalogsOne
                                            : item.link === "profili"
                                              ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                    .profiliCatalogDataSubCatalogsOne
                                              : item.link === "pvh-polotna"
                                                ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                      .pvhPolotnaCatalogDataSubCatalogsOne
                                                : // : item.link === "montazhnie-raboti"
                                                  //   ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                  //         .montazhnieRabotiCatalogDataSubCatalogsOne
                                                  item.link === "trekovie-systemy"
                                                  ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                        .trekovieSystemyCatalogDataSubCatalogsOne
                                                  : item.link === "profil-raund"
                                                    ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                          .profilRaundCatalogDataSubCatalogsOne
                                                    : ""}
                                    </SimpleGrid>

                                    <SimpleGrid cols={1} spacing={0}>
                                        {item.link === "komplektuyshie"
                                            ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                  .komplektuyshieCatalogDataSubCatalogsTwo
                                            : item.link === "profili"
                                              ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                    .profiliCatalogDataSubCatalogsTwo
                                              : item.link === "pvh-polotna"
                                                ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                      .pvhPolotnaCatalogDataSubCatalogsTwo
                                                : // : item.link === "montazhnie-raboti"
                                                  //   ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                  //         .montazhnieRabotiCatalogDataSubCatalogsTwo
                                                  item.link === "trekovie-systemy"
                                                  ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                        .trekovieSystemyCatalogDataSubCatalogsTwo
                                                  : item.link === "profil-raund"
                                                    ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                          .profilRaundCatalogDataSubCatalogsTwo
                                                    : ""}
                                    </SimpleGrid>
                                    <SimpleGrid cols={1} spacing={0}>
                                        {item.title === "Комплектующие"
                                            ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                  .komplektuyshieCatalogDataSubCatalogsThree
                                            : item.link === "profili"
                                              ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                    .profiliCatalogDataSubCatalogsThree
                                              : item.link === "pvh-polotna"
                                                ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                      .pvhPolotnaCatalogDataSubCatalogsThree
                                                : item.link === "trekovie-systemy"
                                                  ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                        .trekovieSystemyCatalogDataSubCatalogsThree
                                                  : item.link === "profil-raund"
                                                    ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                          .profilRaundCatalogDataSubCatalogsThree
                                                    : ""}
                                    </SimpleGrid>
                                    <SimpleGrid cols={1} spacing={0} visibleFrom="lg">
                                        {item.link === "pvh-polotna"
                                            ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                  .pvhPolotnaCatalogDataSubCatalogsFour
                                            : item.link === "trekovie-systemy"
                                              ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                    .trekovieSystemyCatalogDataSubCatalogsOne
                                              : item.link === "profil-raund"
                                                ? SubCatalogs(isHoverCardClose, setIsHoverCardClose)
                                                      .profilRaundCatalogDataSubCatalogsFour
                                                : ""}
                                    </SimpleGrid>
                                </SimpleGrid>
                            </ScrollArea>
                        </HoverCard.Dropdown>
                    )}
                </HoverCard>
            </Group>
        </UnstyledButton>
    ));

    const mobileLinks =
        tabName === "меню"
            ? tabs["меню"].map((item: any, index: number) => (
                  <UnstyledButton key={index} className={s.my_control} onClick={closeDrawer}>
                      <Box ml="xs">
                          <Text size="sm" fw={700}>
                              <Link href={`${item.link}`} className={s.link}>
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
            setScrollY(window.scrollY);
            setIsHeaderShown(true);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            setIsHeaderShown(false);
        };
    }, []);

    React.useEffect(() => {
        if (!isNotify) return;
        notifications.show({
            position: "top-center",
            title: "Позиция добавлена в калькулятор ",

            message: (
                <div onClick={() => dispatch(openCalculationsDrawer(true))} className={classes.popup}>
                    Посмотреть корзину 🌟
                </div>
            ),
            withCloseButton: true,
            autoClose: 5000,
            color: "green",
            icon: checkIcon,
            radius: "xl",
            withBorder: true,
        });
    }, [isNotify]);

    // const persistor = persistStore(storePersist);
    // persistor.purge();
    if (!isHeaderShown) return;
    return (
        <Box
            pb={0}
            style={
                queryLg && scrollY === 0
                    ? {
                          display: "flex",
                          flexDirection: "column",
                          position: "fixed",
                          top: "0px",
                          // height: "115px",
                          height: "150px",
                          // background: "rgba(0, 0, 0, 0)",
                          background: "rgba(255,255,255, 0.2)",
                          zIndex: 3,
                          width: "100%",
                          // backdropFilter: "blur(10px)",
                          // borderBottom: `1px solid ${scrollY === 0 ? theme.white : computedColorScheme === "light" ? "#242424" : theme.white}`,
                          transition: "height 0.5s linear, background 0.5s linear",
                      }
                    : queryLg && scrollY !== 0
                      ? {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            top: "0px",
                            // height: "100px",
                            height: "150px",
                            zIndex: 3,
                            width: "100%",
                            background: computedColorScheme === "light" ? theme.white : "#242424",
                            opacity: 1,
                            borderBottom: `1px solid ${scrollY === 0 ? theme.white : computedColorScheme === "light" ? "#242424" : theme.white}`,
                            transition: "height 0.5s linear, background 0.5s linear",
                        }
                      : queryMd && scrollY === 0
                        ? {
                              display: "flex",
                              flexDirection: "column",
                              position: "fixed",
                              top: "0px",
                              height: "115px",
                              // background: "rgba(0, 0, 0, 0)",
                              background: "rgba(255,255,255, 0.2)",
                              zIndex: 3,
                              width: "100%",
                              // backdropFilter: "blur(10px)",
                              // borderBottom: `1px solid ${scrollY === 0 ? theme.white : computedColorScheme === "light" ? "#242424" : theme.white}`,
                              transition: "height 0.5s linear, background 0.5s linear",
                          }
                        : queryMd && scrollY !== 0
                          ? {
                                display: "flex",
                                flexDirection: "column",
                                position: "fixed",
                                top: "0px",
                                // height: "100px",
                                height: "135px",
                                zIndex: 3,
                                width: "100%",
                                background: computedColorScheme === "light" ? theme.white : "#242424",
                                opacity: 1,
                                borderBottom: `1px solid ${scrollY === 0 ? theme.white : computedColorScheme === "light" ? "#242424" : theme.white}`,
                                transition: "height 0.5s linear, background 0.5s linear",
                            }
                          : !queryMd && scrollY === 0
                            ? {
                                  display: "flex",
                                  flexDirection: "column",
                                  position: "fixed",
                                  top: "0px",
                                  height: "115px",
                                  // height: "150px",
                                  // background: "rgb a(0, 0, 0, 0)",
                                  background: "rgba(255,255,255, 0.2)",
                                  zIndex: 3,
                                  width: "100%",
                                  // backdropFilter: "blur(10px)",
                                  // borderBottom: `1px solid ${scrollY === 0 ? theme.white : computedColorScheme === "light" ? "#242424" : theme.white}`,
                                  transition: "height 0.5s linear, background 0.5s linear",
                              }
                            : {
                                  display: "flex",
                                  flexDirection: "column",
                                  position: "fixed",
                                  top: "0px",
                                  height: "100px",
                                  // height: "135px",
                                  zIndex: 3,
                                  width: "100%",
                                  background: computedColorScheme === "light" ? theme.white : "#242424",
                                  opacity: 1,
                                  borderBottom: `1px solid ${scrollY === 0 ? theme.white : computedColorScheme === "light" ? "#242424" : theme.white}`,
                                  transition: "height 0.5s linear, background 0.5s linear",
                              }
            }
            className={classes.box}
        >
            {isOpen && <ModalComponent isOpen={isOpen} modalMode={modalMode} setIsOpen={setIsOpen} />}
            <header
                className={classes.btn_header}
                style={
                    scrollY === 0
                        ? {
                              background: "rgba(255,255,255, 0.1)",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              transition: "background 1s linear",
                              height: "60px",

                              // border: "none"
                          }
                        : {
                              background: "#2E2E2E",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              transition: "background 1s linear",
                              height: "60px",
                          }
                }
            >
                <Group gap={20} wrap="nowrap" pl="10">
                    <Anchor href="https://wa.me/79881896530" target="_blank" id="header-whatsapp">
                        <ActionIcon size="md" radius="xl" color="green.6" variant="filled">
                            <IconBrandWhatsapp
                                style={{
                                    width: rem(18),
                                    height: rem(18),
                                }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Anchor>
                    <Anchor href="https://t.me/+nKdXzCW6qmE3NjUy" target="_blank" id="header-telegram">
                        <ActionIcon size="md" radius="xl" color="#24A1DE" variant="filled">
                            <IconBrandTelegram
                                style={{
                                    width: rem(18),
                                    height: rem(18),
                                }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Anchor>
                </Group>

                <Group pr="10">
                    <Button
                        color="black"
                        onClick={measurerHandler}
                        // variant={scrollY === 0 ? "outline" : "default"}
                        variant="default"
                        visibleFrom="xs"
                        radius="xl"
                    >
                        <IconRulerMeasure size={20} style={{ paddingRight: "5px" }} />
                        запись на замер
                    </Button>
                    <Button color="black" onClick={callBackHandler} variant="default" visibleFrom="xs" radius="xl">
                        {/*<IconHeadset size={20} style={{paddingRight: "5px", width: "40px"}}/>*/}
                        обратный звонок
                    </Button>
                    <Link style={{ textDecoration: "none" }} href="/calculations">
                        <Button
                            color="black"
                            variant="default"
                            style={{ width: "165px" }}
                            // visibleFrom="xs"
                            radius="xl"
                        >
                            <IconCalculator size={20} style={{ paddingRight: "5px" }} />
                            калькулятор
                        </Button>
                    </Link>
                    {/* <Link href="tel:+79876543221"> */}
                    <Anchor href="tel:+79881896530">
                        <Button
                            color="black"
                            variant="default"
                            style={{ width: "165px" }}
                            className={s.pulse}
                            radius="xl"
                        >
                            <IconPhone size={20} style={{ paddingRight: "5px" }} />
                            +7 988 189 65 30
                        </Button>
                        {/* </Link> */}
                    </Anchor>
                </Group>
            </header>

            <header className={classes.header} style={{ height: "100%" }}>
                {/* <NotificationComponent /> */}
                <ActionToggle scrollY={scrollY} mode={"desktop"} />
                <ActionToggle scrollY={scrollY} mode={"calculations"} />

                <DrawerCalculations />

                <Group h="100%" justify="space-between" align="center" className={classes.group}>
                    <Group className={classes.my_catalog_wrappper}>
                        <Link href="/">
                            <Image
                                src="/images/logo/logo_1.png"
                                style={
                                    matchLg && scrollY !== 0
                                        ? {
                                              paddingTop: "5px",
                                              width: "90px",
                                              height: "90px",
                                              opacity: 0.85,
                                              transition: "width 0.5s linear, height 0.5s linear",
                                          }
                                        : matchMd && scrollY !== 0
                                          ? {
                                                marginTop: "5px",
                                                width: "115px",
                                                height: "115px",
                                                opacity: 0.85,
                                                transition: "width 0.5s linear, height 0.5s linear",
                                            }
                                          : matchMd && scrollY === 0
                                            ? {
                                                  marginTop: "8px",
                                                  width: "90px",
                                                  height: "90px",
                                                  opacity: 0.85,
                                                  transition: "width 0.5s linear, height 0.5s linear",
                                              }
                                            : {
                                                  marginTop: "5px",
                                                  width: "90px",
                                                  height: "90px",
                                                  opacity: 0.85,
                                                  transition: "width 0.5s linear, height 0.5s linear",
                                              }
                                }
                                alt="Stroy Family logo"
                                visibleFrom="sm"
                            />
                        </Link>

                        <HoverCard
                            width={600}
                            position="bottom"
                            radius="xs"
                            shadow="md"
                            withinPortal
                            disabled={isHoverCardClose}
                        >
                            <HoverCard.Target>
                                <div
                                    className={classes.my_link}
                                    style={scrollY === 0 ? { color: "white", height: "104px" } : { height: "88px" }}
                                    onMouseOver={() => setIsHoverCardClose(false)}
                                    onClick={() => {
                                        setIsHoverCardClose(!isHoverCardClose);
                                    }}
                                >
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            <Text
                                                size="sm"
                                                fw="500"
                                                style={
                                                    computedColorScheme === "dark" && scrollY === 0
                                                        ? { color: theme.colors.dark[6] }
                                                        : computedColorScheme === "dark" && scrollY !== 0
                                                          ? { color: "white" }
                                                          : computedColorScheme === "light" && scrollY === 0
                                                            ? { color: theme.colors.dark[6] }
                                                            : { color: theme.colors.dark[6] }
                                                }
                                            >
                                                Каталог
                                            </Text>
                                        </Box>
                                        <IconChevronDown
                                            style={{
                                                width: rem(16),
                                                height: rem(16),
                                            }}
                                            color={theme.colors.dark[6]}
                                        />
                                    </Center>
                                </div>
                            </HoverCard.Target>
                            <HoverCard.Dropdown
                                style={{
                                    overflow: "hidden",
                                    width: "fit-content",
                                }}
                            >
                                <Group justify="space-between" px="md">
                                    <Text fw={500} style={{ fontFamily: "Nautilus" }}>
                                        Строй Family
                                    </Text>
                                    <Link
                                        href="/catalog"
                                        style={{
                                            color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                            textDecoration: "none",
                                        }}
                                        onClick={() => dispatch(changeCatalogSection("all"))}
                                    >
                                        весь каталог
                                    </Link>
                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid cols={1} spacing={0}>
                                    {desktopLinks}
                                </SimpleGrid>

                                <div className={classes.dropdownFooter}>
                                    <Group justify="space-between">
                                        <div>
                                            <Text size="xs" c="dimmed">
                                                Посмотреть портфолио тут:
                                            </Text>
                                        </div>
                                        <Link href="/portfolio">
                                            <Button variant="default">к портфолио</Button>
                                        </Link>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                    </Group>

                    {/* <Group h="100%" gap={0} className={classes.link_wrap} visibleFrom="lg">
                        <Link href="/" className={pathName === "/" ? classes.link_active : classes.link} style={scrollY === 0 ? { color: "white" } : {}}>
                            Главная
                        </Link>
                        <Link
                            href="/portfolio"
                            className={pathName === "/portfolio" ? classes.link_active : classes.link}
                            style={scrollY === 0 ? { color: "white" } : {}}
                        >
                            Портфолио
                        </Link>
                        <Link href="/about" className={pathName === "/about" ? classes.link_active : classes.link} style={scrollY === 0 ? { color: "white" } : {}}>
                            О нас
                        </Link>
                        <Link href="/contacts" className={pathName === "/contacts" ? classes.link_active : classes.link} style={scrollY === 0 ? { color: "white" } : {}}>
                            Контакты
                        </Link>
                    </Group> */}
                    <Group h="100%" gap={0} className={classes.link_wrap} visibleFrom="lg">
                        <Link
                            href="/"
                            className={
                                pathName === "/" && scrollY === 0
                                    ? classes.link_active
                                    : pathName === "/" && scrollY > 0 && computedColorScheme === "dark"
                                      ? classes.link_active_dark_scrolled
                                      : pathName === "/" && scrollY > 0 && computedColorScheme === "light"
                                        ? classes.link_active_scrolled
                                        : scrollY > 0 && computedColorScheme === "dark"
                                          ? classes.link_dark_scrolled
                                          : scrollY > 0 && computedColorScheme === "light"
                                            ? classes.link
                                            : classes.link
                            }
                        >
                            Главная
                        </Link>
                        <Link
                            href="/portfolio"
                            className={
                                pathName === "/portfolio" && scrollY === 0
                                    ? classes.link_active
                                    : pathName === "/portfolio" && scrollY > 0 && computedColorScheme === "dark"
                                      ? classes.link_active_dark_scrolled
                                      : pathName === "/portfolio" && scrollY > 0 && computedColorScheme === "light"
                                        ? classes.link_active_scrolled
                                        : scrollY > 0 && computedColorScheme === "dark"
                                          ? classes.link_dark_scrolled
                                          : scrollY > 0 && computedColorScheme === "light"
                                            ? classes.link
                                            : classes.link
                            }
                        >
                            Портфолио
                        </Link>
                        <Link
                            href="/about"
                            className={
                                pathName === "/about" && scrollY === 0
                                    ? classes.link_active
                                    : pathName === "/about" && scrollY > 0 && computedColorScheme === "dark"
                                      ? classes.link_active_dark_scrolled
                                      : pathName === "/about" && scrollY > 0 && computedColorScheme === "light"
                                        ? classes.link_active_scrolled
                                        : scrollY > 0 && computedColorScheme === "dark"
                                          ? classes.link_dark_scrolled
                                          : scrollY > 0 && computedColorScheme === "light"
                                            ? classes.link
                                            : classes.link
                            }
                        >
                            О нас
                        </Link>
                        <Link
                            href="/contacts"
                            className={
                                pathName === "/contacts" && scrollY === 0
                                    ? classes.link_active
                                    : pathName === "/contacts" && scrollY > 0 && computedColorScheme === "dark"
                                      ? classes.link_active_dark_scrolled
                                      : pathName === "/contacts" && scrollY > 0 && computedColorScheme === "light"
                                        ? classes.link_active_scrolled
                                        : scrollY > 0 && computedColorScheme === "dark"
                                          ? classes.link_dark_scrolled
                                          : scrollY > 0 && computedColorScheme === "light"
                                            ? classes.link
                                            : classes.link
                            }
                        >
                            Контакты
                        </Link>
                    </Group>

                    <Group hiddenFrom="lg" gap="5px" className={classes.my_btn_group}>
                        <Group
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                            }}
                        >
                            <Button
                                // color={"white"}
                                onClick={measurerHandler}
                                // variant={scrollY === 0 ? "outline" : "default"}
                                variant="filled"
                                style={{ width: "165px" }}
                                visibleFrom="md"
                                radius="xl"
                            >
                                <IconRulerMeasure size={20} style={{ paddingRight: "5px" }} />
                                запись на замер
                            </Button>
                            <Button
                                // color={"white"}
                                onClick={callBackHandler}
                                // variant={scrollY === 0 ? "outline" : "default"}
                                variant="filled"
                                style={{ width: "165px" }}
                                visibleFrom="md"
                                radius="xl"
                            >
                                {/* <IconHeadset size={20} style={{ paddingRight: "5px", width: "40px" }} /> */}
                                обратный звонок
                            </Button>
                        </Group>

                        <Group
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                            }}
                        >
                            <Link style={{ textDecoration: "none" }} href="/calculations">
                                <Button
                                    // color={"white"}
                                    // variant={scrollY === 0 ? "outline" : "default"}
                                    variant="filled"
                                    style={{ width: "165px" }}
                                    radius="xl"
                                    // visibleFrom="xs"
                                >
                                    <IconCalculator size={20} style={{ paddingRight: "5px" }} />
                                    калькулятор
                                </Button>
                            </Link>
                            <Anchor href="tel:+79881896530">
                                <Button
                                    // color={scrollY === 0 ? "white" : "green.6"}
                                    // variant={scrollY === 0 ? "outline" : "filled"}
                                    variant="filled"
                                    color="green.6"
                                    style={{ width: "165px" }}
                                    className={s.pulse}
                                    radius="xl"
                                >
                                    <IconPhone size={20} style={{ paddingRight: "5px" }} />
                                    +7 988 189 65 30
                                </Button>
                            </Anchor>
                        </Group>
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        hiddenFrom="lg"
                        // color={"dark.6"}
                        color={
                            scrollY === 0 && computedColorScheme === "light"
                                ? "dark"
                                : scrollY !== 0 && computedColorScheme === "light"
                                  ? "dark"
                                  : scrollY === 0 && computedColorScheme === "dark"
                                    ? "dark"
                                    : scrollY === 0 && computedColorScheme === "dark"
                                      ? "light"
                                      : ""
                        }
                    />
                </Group>
            </header>
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
                <div
                    style={{
                        margin: "0 auto",
                        position: "absolute",
                        top: 15,
                        left: 180,
                        zIndex: 110000,
                    }}
                >
                    <ActionToggle scrollY={scrollY} mode={"mobile"} />
                </div>

                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" mt="xl">
                    <div
                        style={{
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            paddingBottom: "15px",
                        }}
                    >
                        <SegmentedControl
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
                        />
                    </div>
                    <Text fw={500} size="xs" className={s.title} c="dimmed" pl="20" pr="20">
                        *чтобы раскрыть меню нажмите на {">"} шэврон, чтобы открыть страницу раздела, на сам раздел
                    </Text>
                    <div className={s.navbarMain}>{mobileLinks}</div>
                    {/*<div className={s.navbarMain}>{CatalogNavlinks}</div>*/}
                    <Divider my="xs" />
                    <Group
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            paddingTop: "40px",
                        }}
                    >
                        <Link style={{ textDecoration: "none" }} href="/calculations" onClick={closeDrawer}>
                            <Button style={{ width: "200px" }} size="sm" variant="default">
                                <IconCalculator size={25} style={{ paddingRight: "5px" }} />
                                Калькулятор
                            </Button>
                        </Link>

                        <Button
                            onClick={() => {
                                callBackHandler();
                                closeDrawer();
                            }}
                            style={{ width: "200px" }}
                            size="sm"
                            variant="default"
                        >
                            {/* <IconHeadset size={25} style={{ paddingRight: "5px" }} /> */}
                            Обратный звонок
                        </Button>
                        <Button
                            onClick={() => {
                                measurerHandler();
                                closeDrawer();
                            }}
                            style={{ width: "200px" }}
                            size="sm"
                            variant="filled"
                        >
                            <IconRulerMeasure size={25} style={{ paddingRight: "5px" }} />
                            Записаться на замер
                        </Button>
                        <Anchor href="tel:+79881896530">
                            <Button
                                className={s.pulse}
                                style={{ width: "200px" }}
                                size="sm"
                                variant="filled"
                                color="green.6"
                            >
                                <IconPhonePlus size={25} style={{ paddingRight: "5px" }} />
                                +7 988 189 65 30
                            </Button>
                        </Anchor>
                    </Group>

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
                        }}
                    >
                        <Group
                            gap={0}
                            justify="flex-end"
                            wrap="nowrap"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                gap: "15px",
                            }}
                        >
                            <Anchor href="https://t.me/+nKdXzCW6qmE3NjUy" target="_blank">
                                <ActionIcon size="lg" color="#24A1DE" variant="filled">
                                    <IconBrandTelegram
                                        style={{
                                            width: rem(18),
                                            height: rem(18),
                                        }}
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                            </Anchor>
                            <Anchor href="https://wa.me/79881896530" target="_blank">
                                <ActionIcon size="lg" color="green.4" variant="filled">
                                    <IconBrandWhatsapp
                                        style={{
                                            width: rem(18),
                                            height: rem(18),
                                        }}
                                        stroke={1.5}
                                    />
                                </ActionIcon>
                            </Anchor>
                        </Group>
                        <Text fw={500} size="sm" className={s.title} c="dimmed">
                            family.build@mail.ru
                        </Text>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
