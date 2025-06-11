"use client";
import cx from "clsx";
import { Title, Container, Button, Overlay, Tooltip } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { IconCalculator, IconChevronDown, IconRulerMeasure } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import "../../styles/local.fonts/NautilusPompilius.css";
import { Dots } from "../HeroText/Dots";

type HeroImageBackgroundType = {
    mode: "portfolio" | "about" | "catalog" | "calculations" | "contacts";
};
export function HeroImageBackground({ mode }: HeroImageBackgroundType) {
    // const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "">("");
    const [isOpen, setIsOpen] = useState(false);

    const measurerHandler = () => {
        // setModalMode("measurer");
        setIsOpen(true);
    };

    const DotFunc = () => {
        return (
            <>
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 5,
                        top: 10,
                        opacity: 0.5,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 205,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 405,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 605,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 805,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1005,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1205,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1405,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1605,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1805,
                        top: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />

                {/* -------------------------------------------- */}
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 5,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 205,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 405,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 605,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 805,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1005,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1205,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1405,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
                        position: "absolute",
                        right: 1605,
                        bottom: 10,
                        opacity: 0.3,
                        zIndex: 10,
                    }}
                />
                <Dots
                    style={{
                        color: "white",
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

    return mode === "portfolio" ? (
        <Container size="xxl" pt={100}>
            <div className={classes.portfolio_content_container}>
                <DotFunc />
                <div className={classes.wrapper_portfolio}>
                    {isOpen && <ModalComponent isOpen={isOpen} modalMode={"measurer"} setIsOpen={setIsOpen} />}
                    {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}

                    <div className={classes.inner}>
                        <Title
                            order={2}
                            className={classes.title}
                            style={{
                                fontFamily: "Nautilus",
                                zIndex: 2,
                            }}
                        >
                            Портфолио
                        </Title>

                        <Container size={640}>
                            <Title
                                order={2}
                                style={{
                                    fontFamily: "Nautilus",
                                    zIndex: 2,
                                }}
                                className={classes.description}
                                size="25px"
                            >
                                Здесь вы найдёте наши выполненные работы
                            </Title>
                        </Container>

                        <div className={classes.controls}>
                            <Link
                                className={cx(classes.my_control, classes.my_secondaryControl)}
                                style={{ textDecoration: "none", borderRadius: "30px" }}
                                href="/calculations"
                            >
                                <Button className={classes.control} size="lg" variant="transparent" radius="xl">
                                    <IconCalculator size={22} style={{ paddingRight: "5px" }} />
                                    Калькулятор
                                </Button>
                            </Link>
                            <Button
                                className={cx(classes.control, classes.secondaryControl)}
                                size="lg"
                                onClick={measurerHandler}
                                variant="filled"
                                radius="xl"
                            >
                                <IconRulerMeasure size={22} style={{ paddingRight: "5px" }} />
                                Записаться на замер
                            </Button>
                        </div>
                        <Tooltip label="вниз">
                            <IconChevronDown
                                size={40}
                                className={classes.arrow}
                                onClick={() =>
                                    window.scrollTo({
                                        top: 300,
                                        left: 0,
                                        behavior: "smooth",
                                    })
                                }
                            />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Container>
    ) : mode === "about" ? (
        <Container size="xxl" pt={100}>
            <div className={classes.about_content_container}>
                <Overlay color="#000" opacity={0.65} zIndex={1} radius={30}/>
                {/* {opened && <ModalComponent opened={opened} modalMode={modalMode} close={close} />} */}
                {isOpen && <ModalComponent isOpen={isOpen} modalMode={"measurer"} setIsOpen={setIsOpen} />}
                <div className={classes.inner}>
                    <Title
                        order={2}
                        className={classes.title}
                        style={{
                            fontFamily: "Nautilus",
                            zIndex: 2,
                        }}
                    >
                        О нас
                    </Title>

                    <Container size={640}>
                        <Title
                            order={2}
                            style={{
                                fontFamily: "Nautilus",
                                zIndex: 2,
                            }}
                            className={classes.description}
                            size="25px"
                        >
                            Здесь мы немного расскажем о себе
                        </Title>
                    </Container>
                    <div className={classes.controls}>
                        <Link
                            className={cx(classes.my_control, classes.my_secondaryControl)}
                            style={{ textDecoration: "none", borderRadius: "40px" }}
                            href="/portfolio"
                        >
                            <Button className={classes.control} size="lg" variant="transparent" >
                                Посмотреть портфолио
                            </Button>
                        </Link>
                        <Button className={classes.control} size="lg" onClick={measurerHandler} variant="filled" radius="xl">
                            <IconRulerMeasure size={22} style={{ paddingRight: "5px",borderRadius: "40px" }} />
                            Записаться на замер
                        </Button>
                    </div>
                    <Tooltip label="вниз">
                        <IconChevronDown
                            size={40}
                            className={classes.arrow}
                            onClick={() =>
                                window.scrollTo({
                                    top: 300,
                                    left: 0,
                                    behavior: "smooth",
                                })
                            }
                        />
                    </Tooltip>
                </div>
            </div>
        </Container>
    ) : mode === "contacts" ? (
                <Container size="xxl" pt={100}>
            <div className={classes.contact_content_container}>
                <Overlay color="#000" opacity={0.65} zIndex={1} radius={30}/>
                {/* {opened && <ModalComponent opened={opened} modalMode={modalMode} close={close} />} */}
                {isOpen && <ModalComponent isOpen={isOpen} modalMode={"measurer"} setIsOpen={setIsOpen} />}
                <div className={classes.inner}>
                    <Title
                        order={2}
                        className={classes.title}
                        style={{
                            fontFamily: "Nautilus",
                            zIndex: 2,
                        }}
                    >
                        Контакты
                    </Title>

                    <Container size={640}>
                        <Title
                            order={2}
                            style={{
                                fontFamily: "Nautilus",
                                zIndex: 2,
                            }}
                            className={classes.description}
                            size="25px"
                        >
                            Как нас найти и как с нами связаться:
                        </Title>
                    </Container>
                    <div className={classes.controls}>
                        <Link
                            className={cx(classes.my_control, classes.my_secondaryControl)}
                            style={{ textDecoration: "none", borderRadius: "40px" }}
                            href="/portfolio"
                        >
                            <Button className={classes.control} size="lg" variant="transparent" >
                                Посмотреть портфолио
                            </Button>
                        </Link>
                        <Button className={classes.control} size="lg" onClick={measurerHandler} variant="filled" radius="xl">
                            <IconRulerMeasure size={22} style={{ paddingRight: "5px",borderRadius: "40px" }} />
                            Записаться на замер
                        </Button>
                    </div>
                    <Tooltip label="вниз">
                        <IconChevronDown
                            size={40}
                            className={classes.arrow}
                            onClick={() =>
                                window.scrollTo({
                                    top: 300,
                                    left: 0,
                                    behavior: "smooth",
                                })
                            }
                        />
                    </Tooltip>
                </div>
            </div>
        </Container>
    ) : mode === "catalog" ? (
        <div className={classes.wrapper_catalog}>
            <Overlay color="#000" opacity={0.65} zIndex={1} bg="gray.0" />
            <div className={classes.inner}></div>
        </div>
    ) : (
        mode === "calculations" && (
            <div className={classes.wrapper_calculations}>
                {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}
                <div className={classes.inner}></div>
            </div>
        )
    );
}
