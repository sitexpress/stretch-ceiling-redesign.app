"use client";
import cx from "clsx";
import { Title, Container, Button, Overlay, Tooltip, Image } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { IconCalculator, IconChevronDown, IconRulerMeasure } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import "../../styles/local.fonts/NautilusPompilius.css";

type HeroImageBackgroundType = {
    mode: "portfolio" | "about" | "catalog" | "calculations" | "contacts" | "onviz";
};
export function HeroImageBackground({ mode }: HeroImageBackgroundType) {
    // const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "">("");
    const [isOpen, setIsOpen] = useState(false);

    const measurerHandler = () => {
        // setModalMode("measurer");
        setIsOpen(true);
    };

    return mode === "portfolio" ? (
        <Container size="xxl" pt={116} bg="gray.1" pb={16}>
            <div className={classes.portfolio_content_container}>
                <div className={classes.wrapper_portfolio}>
                    {isOpen && <ModalComponent isOpen={isOpen} modalMode={"measurer"} setIsOpen={setIsOpen} />}
                    {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}

                    <div className={classes.inner}>
                        <Title order={2} className={classes.title}>
                            Портфолио
                        </Title>

                        {/* <Container size={640}>
                            <Title
                                order={2}
                                className={classes.description}
                                size="25px"
                            >
                                Здесь вы найдёте наши выполненные работы
                            </Title>
                        </Container> */}

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
                                bg="dark.6"
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
        <Container size="xxl" pt={116} bg="gray.1" pb={16}>
            <div className={classes.about_content_container}>
                <Overlay color="#000" opacity={0.65} zIndex={1} radius={30} />
                {/* {opened && <ModalComponent opened={opened} modalMode={modalMode} close={close} />} */}
                {isOpen && <ModalComponent isOpen={isOpen} modalMode={"measurer"} setIsOpen={setIsOpen} />}
                <div className={classes.inner}>
                    <Title
                        order={2}
                        className={classes.title}
                        style={{
                            zIndex: 2,
                        }}
                    >
                        О нас
                    </Title>

                    <Container size={640}>
                        <Title
                            order={2}
                            style={{
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
                            <Button className={classes.control} size="lg" variant="transparent">
                                Посмотреть портфолио
                            </Button>
                        </Link>
                        <Button
                            className={classes.control}
                            size="lg"
                            onClick={measurerHandler}
                            variant="filled"
                            radius="xl"
                            bg="dark.6"
                        >
                            <IconRulerMeasure size={22} style={{ paddingRight: "5px", borderRadius: "40px" }} />
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
        <Container size="xxl" pt={116} bg="gray.1" pb={16}>
            <div className={classes.contact_content_container}>
                <Overlay color="#000" opacity={0.65} zIndex={1} radius={30} />
                {/* {opened && <ModalComponent opened={opened} modalMode={modalMode} close={close} />} */}
                {isOpen && <ModalComponent isOpen={isOpen} modalMode={"measurer"} setIsOpen={setIsOpen} />}
                <div className={classes.inner}>
                    <Title
                        order={2}
                        className={classes.title}
                        style={{
                            zIndex: 2,
                        }}
                    >
                        Контакты
                    </Title>

                    {/* <Container size={640}>
                        <Title
                            order={2}
                            style={{
                                zIndex: 2,
                            }}
                            className={classes.description}
                            size="25px"
                        >
                            Как нас найти и как с нами связаться:
                        </Title>
                    </Container> */}
                    <div className={classes.controls}>
                        <Link
                            className={cx(classes.my_control, classes.my_secondaryControl)}
                            style={{ textDecoration: "none", borderRadius: "40px" }}
                            href="/portfolio"
                        >
                            <Button className={classes.control} size="lg" variant="transparent">
                                Посмотреть портфолио
                            </Button>
                        </Link>
                        <Button
                            className={classes.control}
                            size="lg"
                            onClick={measurerHandler}
                            variant="filled"
                            radius="xl"
                            bg="dark.8"
                        >
                            <IconRulerMeasure size={22} style={{ paddingRight: "5px", borderRadius: "40px" }} />
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
    ) : mode === "calculations" ? (
        <div className={classes.wrapper_calculations}>
            {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}
            <div className={classes.inner}></div>
        </div>
    ) : (
        mode === "onviz" && (
            <Container size="xxl" pt={116} bg="gray.1" pb={16}>
                <div className={classes.carniz_content_container}>
                    {isOpen && <ModalComponent isOpen={isOpen} modalMode={"measurer"} setIsOpen={setIsOpen} />}
                    <div className={classes.inner}>
                        <Image ta="center" w={250} src="/images/onviz-logo.webp" />
                        <Title
                            ta="center"
                            order={2}
                            className={classes.title_onviz}
                            style={{
                                zIndex: 2,
                            }}
                        >
                            Электрокарнизы
                        </Title>

                        {/* <Container size={640}>
                        <Title
                            order={2}
                            style={{
                                zIndex: 2,
                            }}
                            className={classes.description}
                            size="25px"
                        >
                            Как нас найти и как с нами связаться:
                        </Title>
                    </Container> */}
                        <div className={classes.controls}>
                            <Link
                                className={cx(classes.my_control, classes.my_secondaryControl)}
                                style={{ textDecoration: "none", borderRadius: "40px" }}
                                href="/portfolio"
                            >
                                <Button className={classes.control} size="lg" variant="transparent">
                                    Посмотреть портфолио
                                </Button>
                            </Link>
                            <Button
                                className={classes.control}
                                size="lg"
                                onClick={measurerHandler}
                                variant="filled"
                                radius="xl"
                                bg="dark.8"
                            >
                                <IconRulerMeasure size={22} style={{ paddingRight: "5px", borderRadius: "40px" }} />
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
        )
    );
}
