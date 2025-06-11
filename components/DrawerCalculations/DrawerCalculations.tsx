"use client";
import React from "react";
import CalculationsItemCards from "@/components/CalculationsItemCards/CalculationsItemCards";
import { useAppDispatch, useAppSelector } from "@/lib/utilities/hooks/hooks";
import { clearAllCalculation, openCalculationsDrawer } from "@/store/client-session-calculations-slice";
import { Button, Divider, Drawer, Flex, Group, NumberFormatter, ScrollArea, SimpleGrid, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./DrawerCalculations.module.css";

export default function DrawerCalculations() {
    const dispatch = useAppDispatch();
    const clientSessionCalculationsData = useAppSelector((state) => state.clientSessionCalculationsData.calculations);
    const calculationsDrawerIsOpen = useAppSelector((state) => state.clientSessionCalculationsData.isOpen);

    const calculationsAddedDataMapped = clientSessionCalculationsData.map((addedItem, index) => {
        return <CalculationsItemCards key={index} mode={"drawer"} index={index} addedItem={addedItem} />;
    });

    const arrayOfAmountAddedElements = clientSessionCalculationsData.map((addedItem) => addedItem.amount);
    const totalAmount = arrayOfAmountAddedElements.reduce((a, b) => Number(a) + Number(b), 0);

    const arrayOfBasePriceAddedElements = clientSessionCalculationsData.map((addedItem) =>
        addedItem.amount === 1 ? addedItem.basePrice : +addedItem.basePrice * Number(addedItem.amount)
    );

    const arrayOfWorkPriceAddedElements = clientSessionCalculationsData.map((addedItem) =>
        addedItem.amount === 1 ? addedItem.workPrice : +addedItem.workPrice * Number(addedItem.amount)
    );

    const totalBasePrice = arrayOfBasePriceAddedElements.reduce((a, b) => Number(a) + Number(b), 0);
    const totalWorkPrice = arrayOfWorkPriceAddedElements.reduce((a, b) => Number(a) + Number(b), 0);

    return (
        <Drawer
            opened={calculationsDrawerIsOpen}
            onClose={() => dispatch(openCalculationsDrawer(!calculationsDrawerIsOpen))}
            title={
                <Group>
                    <Text size="xl" style={{ fontFamily: "Nautilus" }}>
                        <IconShoppingCart />
                        Строй Family
                    </Text>
                </Group>
            }
            scrollAreaComponent={ScrollArea.Autosize}
            position="right"
            className={classes.drawer}
            size="100%"
            zIndex="1500"
        >
            {clientSessionCalculationsData.length === 0 ? (
                <>
                    <Divider pb="xs" w="100%" />
                    <Group justify="center">
                        <Text size="md">Добавленно позиций:</Text>
                        <Text fw={700} c="green.6" size="lg">
                            {clientSessionCalculationsData.length}
                        </Text>
                    </Group>
                    <Divider my="xs" w="100%" />
                </>
            ) : (
                <>
                    <Divider pb="xs" w="100%" />
                    <Group justify="center">
                        <Text fw={700} size="sm">
                            Добавленно позиций:{" "}
                        </Text>
                        <NumberFormatter
                            value={clientSessionCalculationsData.length}
                            suffix="  шт."
                            style={{
                                color: "#40c057",
                                textAlign: "center",
                                borderRadius: "3px",
                                padding: "2px",
                                width: "65px",
                            }}
                        />
                    </Group>
                    <Divider my="xs" w="100%" />
                    <SimpleGrid
                        cols={{ base: 2, xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
                        spacing={{ base: 10, md: 10 }}
                        verticalSpacing={{ base: "xs" }}
                    >
                        {calculationsAddedDataMapped}
                    </SimpleGrid>
                    <Flex
                        direction={{ base: "column" }}
                        justify={{ base: "center" }}
                        align={{ base: "start" }}
                        w="100%"
                        mt="xs"
                    >
                        <Divider my="xs" w="100%" />
                        <Group gap="2">
                            <Text size="md">Добавленно видов наименований:</Text>
                            <NumberFormatter
                                value={calculationsAddedDataMapped.length}
                                suffix="  шт."
                                style={{
                                    color: "#40c057",
                                    // backgroundColor: "lightgrey",
                                    textAlign: "center",
                                    borderRadius: "3px",
                                    padding: "2px",
                                    width: "65px",
                                }}
                            />
                        </Group>
                        <Group gap="2">
                            <Text size="md">Добавленно:</Text>
                            <NumberFormatter
                                value={totalAmount}
                                suffix="  шт."
                                style={{
                                    color: "#40c057",
                                    // backgroundColor: "lightgrey",
                                    textAlign: "center",
                                    borderRadius: "3px",
                                    padding: "2px",
                                    width: "65px",
                                }}
                            />
                        </Group>
                        <Divider my="xs" w="100%" />
                        <Group gap="5">
                            <Text size="md" fw={500}>
                                Итого стоймость оборудования:
                            </Text>
                            <NumberFormatter
                                value={totalBasePrice}
                                suffix="  ₽"
                                style={{
                                    color: "#242424",
                                    backgroundColor: "lightgrey",
                                    textAlign: "center",
                                    borderRadius: "3px",
                                    padding: "2px",
                                    width: "65px",
                                }}
                            />
                        </Group>
                        <Divider my="xs" w="100%" />
                        <Group gap="5">
                            <Text size="md" fw={500}>
                                Итого за работу:
                            </Text>
                            <NumberFormatter
                                value={totalWorkPrice}
                                suffix="  ₽"
                                style={{
                                    color: "#242424",
                                    backgroundColor: "lightgrey",
                                    textAlign: "center",
                                    borderRadius: "3px",
                                    padding: "2px",
                                    width: "65px",
                                }}
                            />
                        </Group>
                        <Divider my="xs" w="100%" />
                        <Group gap="5">
                            <Text size="md" fw={500}>
                                Итого:
                            </Text>
                            <NumberFormatter
                                value={totalBasePrice + totalWorkPrice}
                                suffix="  ₽"
                                style={{
                                    color: "#242424",
                                    backgroundColor: "lightgrey",
                                    textAlign: "center",
                                    borderRadius: "3px",
                                    padding: "2px",
                                    width: "65px",
                                }}
                            />
                        </Group>
                    </Flex>

                    <Divider my="xs" w="100%" />
                    <Link href={"/calculations"} style={{ textDecoration: "none" }}>
                        <Button
                            color="green.6"
                            variant="light"
                            fullWidth
                            radius="sm"
                            w="100%"
                            mb="10"
                            onClick={() => dispatch(openCalculationsDrawer(!calculationsDrawerIsOpen))}
                        >
                            перейти в калькулятор
                        </Button>
                    </Link>

                    {/* <Button color="green.6" variant="light" fullWidth radius="sm" w="100%" mb="10">
                        отправить расчет менеджеру
                    </Button> */}
                    <Button
                        color="red.6"
                        variant="light"
                        fullWidth
                        radius="sm"
                        w="100%"
                        onClick={() => dispatch(clearAllCalculation())}
                        mb="10"
                    >
                        очистить корзину
                    </Button>
                </>
            )}
        </Drawer>
    );
}
