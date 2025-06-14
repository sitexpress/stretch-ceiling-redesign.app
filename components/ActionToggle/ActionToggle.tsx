"use client";
import React from "react";
import cx from "clsx";
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoon, IconShoppingCart } from "@tabler/icons-react";
import classes from "./ActionToggle.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/utilities/hooks/hooks";
import { openCalculationsDrawer } from "@/store/client-session-calculations-slice";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

type ActionToggle = {
    scrollY?: number;
    mode: string;
};

export function ActionToggle({ scrollY, mode }: ActionToggle) {
    const [amountSum, setAmountSum] = useState<string | number | false | undefined>("");
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });
    const dispatch = useAppDispatch();
    const clientSessionCalculationsData = useAppSelector((state) => state.clientSessionCalculationsData.calculations);
    const calculationsDrawerIsOpen = useAppSelector((state) => state.clientSessionCalculationsData.isOpen);

    const arrayOfAmountAddedElements = clientSessionCalculationsData.map(
        (addedItem) => addedItem !== null && addedItem.amount
    );
    const amount = arrayOfAmountAddedElements.reduce((a, b) => Number(a) + Number(b), 0);
    const theme = useMantineTheme();

    const visibleTillLg = useMediaQuery("(min-width: 1201px)");
    const visibleFromMd = useMediaQuery("(min-width: 992px)");
    const visibleTillMd = useMediaQuery("(max-width: 992px)");
    const visibleFromSm = useMediaQuery("(min-width: 768px)");
    const visibleTillSm = useMediaQuery("(max-width: 768px)");
    const visibleTillXs = useMediaQuery("(max-width: 576px)");

    // const xs = theme.breakpoints && theme.breakpoints.xs;
    // const sm = theme.breakpoints && theme.breakpoints.sm;
    // const md = theme.breakpoints && theme.breakpoints.md;
    // const lg = theme.breakpoints && theme.breakpoints.lg;
    // const xl = theme.breakpoints && theme.breakpoints.xl;

    // const matchXs = useMediaQuery(`(min-width: ${xs})`);
    // const matchSm = useMediaQuery(`(min-width: ${sm})`);
    // const matchMd = useMediaQuery(`(min-width: ${md})`);
    // const matchLg = useMediaQuery(`(min-width: ${lg})`);
    // const matchXl = useMediaQuery(`(min-width: ${xl})`);

    useEffect(() => {
        setAmountSum(amount);
    }, [amount]);

    return mode === "desktop" ? (
        <Group
            justify="start"
            visibleFrom="sm"
            style={
                visibleTillSm && scrollY === 0
                    ? {
                   
                      }
                    : visibleTillSm && scrollY !== 0
                      ? {
                            position: "absolute",
                            top: "12px",
                            left: "170px",
                            transition: "top, 0.5s linear",
                        }
                      : visibleTillMd && scrollY === 0
                        ? {
                              position: "absolute",
                              top: "20px",
                              left: "170px",
                              transition: "top, 0.5s linear",
                          }
                        : visibleTillMd && scrollY !== 0
                          ? {
                                position: "absolute",
                                top: "12px",
                                left: "170px",
                                transition: "top, 0.5s linear",
                            }
                          : visibleFromMd && scrollY === 0
                            ? {
                                  position: "absolute",
                                  top: "15px",
                                  left: "240px",
                                  transition: "top, 0.5s linear",
                              }
                            : visibleFromMd && scrollY !== 0
                              ? {
                                    position: "absolute",
                                    top: "20px",
                                    left: "220px",
                                    transition: "top, 0.5s linear",
                                }
                              : visibleTillLg && scrollY !== 0
                                ? {
                                      position: "absolute",
                                      top: "7px",
                                      left: "170px",
                                      transition: "top, 0.5s linear",
                                  }
                                : visibleTillLg && scrollY === 0
                                  ? {
                                        position: "absolute",
                                        top: "15px",
                                        left: "170px",
                                        transition: "top, 0.5s linear",
                                    }
                                  : {}
            }
            className={classes.desktop}
        >
            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
                variant="default"
                size="lg"
                aria-label="Toggle color scheme"
                w="50"
                style={computedColorScheme === "dark" && scrollY === 0 ?  { color:"white"} : 
                                            computedColorScheme === "dark" && scrollY !== 0 ? {color:"white"} : 
                                            computedColorScheme === "light" && scrollY === 0 ? {color:theme.colors.dark[6]} : {color:theme.colors.dark[6]}
                                            }
                                            color={"dark.6"}
              

            >
                <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>
        </Group>
    ) : mode === "mobile" ? (
        <Group justify="start">
            <ActionIcon
                color={scrollY === 0 ? "dark" : computedColorScheme === "light" ? "dark" : "light"}
                onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
                variant={scrollY === 0 ? "outline" : "default"}
                size="lg"
                aria-label="Toggle color scheme"
                
            >
                <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>
        </Group>
    ) : (
        <Group
            justify="start"
            style={{
                       position: "absolute",
                          top: "40px",
                          left: "220px",
                          transition: "top, 0.5s linear",
            }
            }
            onClick={() => dispatch(openCalculationsDrawer(!calculationsDrawerIsOpen))}
        >
            <ActionIcon
                variant={amountSum && +amountSum > 0 ? "filled" :  "default"}
                size="lg"
                style={{ width: 50 }}
                color={amountSum && +amountSum > 0 ? "green.8" :  "dark.0"}
                radius="xl"
            >
                <IconShoppingCart />
                <span>{amountSum}</span>
            </ActionIcon>
        </Group>
    );
}
