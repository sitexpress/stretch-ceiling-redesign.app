"use client";
import React from "react";
import { blockInvalidInputChar } from "@/lib/utilities/hooks/blockInvalidInputChar";
import { hideNotification } from "@/lib/utilities/hooks/hideNotification";
import { useAppDispatch, useAppSelector } from "@/lib/utilities/hooks/hooks";
import { showNotification } from "@/lib/utilities/hooks/showNotification";
import {
    changeCalculationAmount,
    changeCalculations,
    changeNotification,
} from "@/store/client-session-calculations-slice";
import { Button, Group, Input, Text } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import { ChangeEvent, useState } from "react";
import { SubCatalogItemsType } from "@/types/catalog-data-types";

type InputBtnType = {
    subCatalogItems: SubCatalogItemsType;
};
export default function InputBtn({ subCatalogItems }: InputBtnType) {
    const [amount, setAmount] = useState<string | number>("");
    const [error, setError] = useState(false);
    const [errorValue, setErrorValue] = useState<
        "введите число" | "минимальное значение 1" | "максимальное значение 200" | ""
    >("");
    const clientSessionCalculationsData = useAppSelector((state) => state.clientSessionCalculationsData.calculations);
    const dispatch = useAppDispatch();

    const addToCalculationsHandler = (amount: string | number) => {
        const checkIndexPositionInCart = clientSessionCalculationsData.findIndex(
            (item) => item.title === subCatalogItems.title && item.id === subCatalogItems.id
        );

        if (checkIndexPositionInCart === -1 && !!amount && amount !== 0) {
            showNotification(dispatch);
            dispatch(
                changeCalculations({
                    id: Number(subCatalogItems.id),
                    title: subCatalogItems.title,
                    subtitle: subCatalogItems.subtitle,
                    link: subCatalogItems.link,
                    src: subCatalogItems.src,
                    src_1: "",
                    src_2: "",
                    src_3: "",
                    dataType: subCatalogItems.dataType,
                    basePrice: Number(subCatalogItems.basePrice),
                    workPrice: Number(subCatalogItems.workPrice),
                    measurement: subCatalogItems.measurement,
                    amount: Number(amount),
                    element: true,
                    byType: subCatalogItems.src,
                })
            );
        }

        if (checkIndexPositionInCart !== -1 && !!amount && amount !== 0) {
            const positionWithNewAmount = clientSessionCalculationsData.map((item, index) =>
                index === checkIndexPositionInCart ? { ...item, amount: Number(item.amount) + Number(amount) } : item
            );
            showNotification(dispatch);
            dispatch(changeCalculationAmount(positionWithNewAmount));
            dispatch(changeNotification(true));
        }
        hideNotification(dispatch);
        setAmount("");
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = Number(e.target.value.trim());

        if (newInputValue === 0) {
            setAmount("");
            return;
        }

        if (newInputValue < 0) {
            setErrorValue("");
            setError(true);
            setErrorValue("минимальное значение 1");
            setAmount("");
            return;
        }

        if (newInputValue >= 200) {
            setError(true);
            setAmount(200);
            setErrorValue("максимальное значение 200");
            return;
        }

        setError(false);
        setErrorValue("");
        setAmount(e.target.value);
    };

    const incrementInputHandler = (amount: string | number) => {
        if (+amount >= 200 - 1) {
            setError(true);
            setErrorValue("максимальное значение 200");
            setAmount(200);
            return;
        }
        setError(false);
        setErrorValue("");
        setAmount(+amount + 1);
    };

    const decrementInputHandler = (amount: string | number) => {
        if (+amount === 0 + 1) {
            setAmount("");
            return;
        }

        if (+amount < 0 + 1) {
            setError(true);
            setErrorValue("минимальное значение 1");
            setAmount("");
            return;
        }
        setError(false);
        setErrorValue("");
        setAmount(+amount - 1);
    };

    return (
        <div>
            <Group
                justify="center"
                align="center"
                gap="2px"
                mt="xs"
                mb="xs"
                w="auto"
                // pl="5"
                // pr="5"
                style={{ position: "relative" }}
            >
                <Text size="xs" style={{ position: "absolute", top: "-18px", left: 0, color: "red" }}>
                    {errorValue}
                </Text>
                <Input
                    value={amount}
                    onChange={(e) => inputHandler(e)}
                    onKeyDown={blockInvalidInputChar}
                    type="number"
                    min="0"
                    size="sm"
                    radius="sm"
                    error={error}
                    placeholder={"шт/п.м."}
                    w="100px"
                />
                <Group gap="2px" justify="right">
                    <Button
                        // color="red.6"
                        variant="default"
                        // fullWidth
                        radius="sm"
                        size="sm"
                        w="20px"
                        p="0"
                        onClick={() => decrementInputHandler(amount)}
                    >
                        -
                    </Button>
                    <Button
                        // color="green.6"
                        variant="default"
                        // fullWidth
                        radius="sm"
                        size="sm"
                        w="20px"
                        p="0"
                        onClick={() => incrementInputHandler(amount)}
                    >
                        +
                    </Button>
                    <Button
                        pl="5"
                        pr="5"
                        radius="sm"
                        size="sm"
                        variant="light"
                        color="green.6"
                        w="55px"
                        onClick={() => addToCalculationsHandler(amount)}
                    >
                        <IconCirclePlus size={25} />
                    </Button>
                </Group>
            </Group>
        </div>
    );
}
