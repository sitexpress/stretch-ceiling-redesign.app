"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/utilities/hooks/hooks";
import {
    decrementCertainPositionFromCalculation,
    removeCertainPositionFromCalculation,
} from "@/store/client-session-calculations-slice";
import {
    Button,
    Card,
    Divider,
    Flex,
    Group,
    Image,
    NumberFormatter,
    Text,
    useComputedColorScheme,
    useMantineTheme,
} from "@mantine/core";
import { IconSquareX } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { SubCatalogItemsType } from "@/types/catalog-data-types";

type CalculationsItemCardsType = {
    addedItem: SubCatalogItemsType;
    index: number;
    mode: "drawer" | "calculation-dashboard";
};
export default function CalculationsItemCards({ addedItem, index, mode }: CalculationsItemCardsType) {
    const theme = useMantineTheme();
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });

    const clientSessionCalculationsData = useAppSelector((state) => state.clientSessionCalculationsData.calculations);
    const dispatch = useAppDispatch();
    const onRemovePositionFromCartHandler = (title: string, id: number) => {
        const removedElementIndex = clientSessionCalculationsData.findIndex(
            (item) => item.title === title && item.id === id
        );
        dispatch(removeCertainPositionFromCalculation(removedElementIndex));
    };

    const decrementCertainPositionFromCartHandler = (title: string, id: number) => {
        const newArrayWithDecrementedElement = clientSessionCalculationsData.map((item) =>
            !!item.amount && +item.amount > 1 && item.title === title && item.id === id
                ? {
                      ...item,
                      amount: +item.amount - 1,
                  }
                : item
        );

        dispatch(decrementCertainPositionFromCalculation(newArrayWithDecrementedElement));
    };

    const incrementCertainPositionFromCartHandler = (title: string, id: number) => {
        const newArrayWithDecrementedElement = clientSessionCalculationsData.map((item) =>
            !!item.amount && item.title === title && item.id === id
                ? {
                      ...item,
                      amount: +item.amount + 1,
                  }
                : item
        );

        dispatch(decrementCertainPositionFromCalculation(newArrayWithDecrementedElement));
    };

    const iphone14 = useMediaQuery("(min-width: 505px)");

    return (
        <Group
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Flex
                direction={{ base: "row" }}
                gap={{ base: "xs" }}
                justify={{ base: "space-around" }}
                align={{ base: "center" }}
            >
                <Text fw="600">Позиция №{index + 1}</Text>
                <Button
                    color={computedColorScheme === "light" ? "#242424" : theme.white}
                    variant="subtle"
                    fullWidth
                    w="35px"
                    p="0"
                    onClick={() => onRemovePositionFromCartHandler(addedItem.title, addedItem.id)}
                >
                    <IconSquareX stroke={1.5} />
                </Button>
            </Flex>

            <Card
                shadow="xl"
                padding="sm"
                radius="sm"
                withBorder
                style={
                    iphone14
                        ? {
                              width: "230px",
                              height: "620px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "space-between",
                          }
                        : {
                              width: "170px",
                              height: "620px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "space-between",
                          }
                }
                bg={computedColorScheme === "light" ? "gray.1" : "gray.7"}
            >
                <Card.Section>
                    <Image
                        src={addedItem.src}
                        height={iphone14 ? 230 : 170}
                        width={iphone14 ? 230 : 170}
                        alt="Norway"
                    />
                </Card.Section>
                <Group justify="space-between">
                    <Text fw={500} size="sm" pt="xs" pb="xs">
                        {addedItem.title}
                    </Text>
                </Group>
                <Divider w="100%" my="sm" />
                <Group justify="space-between" w="100%">
                    <Text fs="italic" size="sm">
                        добавленно:
                    </Text>
                    <NumberFormatter
                        value={addedItem.amount}
                        suffix=" шт"
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
                {!!addedItem.basePrice && (
                    <Group justify="space-between" w="100%">
                        <Text fs="italic" size="sm">
                            цена {addedItem.amount} {addedItem.measurement}:
                        </Text>
                        <NumberFormatter
                            value={addedItem.amount && +addedItem.basePrice * +addedItem.amount}
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
                )}

                <Group justify="space-between" w="100%">
                    <Text fs="italic" size="sm">
                        монтаж {addedItem.amount} {addedItem.measurement}:
                    </Text>
                    <NumberFormatter
                        value={addedItem.amount && +addedItem.workPrice * +addedItem.amount}
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
                <Group justify="space-between" w="100%">
                    <Text fs="italic" fw={500} size="sm">
                        ИТОГО:
                    </Text>

                    <NumberFormatter
                        value={
                            addedItem.amount &&
                            +addedItem.workPrice * +addedItem.amount + +addedItem.basePrice * +addedItem.amount
                        }
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
                <Group justify="space-between" mb="xs" gap={5} w="100%">
                    <Button
                        color="red.3"
                        variant="default"
                        fullWidth
                        radius="sm"
                        w="45%"
                        onClick={() => decrementCertainPositionFromCartHandler(addedItem.title, addedItem.id)}
                    >
                        -
                    </Button>
                    <Button
                        color="green.3"
                        variant="default"
                        fullWidth
                        radius="sm"
                        w="45%"
                        onClick={() => incrementCertainPositionFromCartHandler(addedItem.title, addedItem.id)}
                    >
                        +
                    </Button>
                </Group>
            </Card>
        </Group>
    );
}
