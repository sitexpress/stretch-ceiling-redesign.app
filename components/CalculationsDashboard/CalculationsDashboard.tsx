/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import React, { useEffect, useState } from "react";
import CalculationsItemCards from "@/components/CalculationsItemCards/CalculationsItemCards";
import { useAppDispatch, useAppSelector } from "@/lib/utilities/hooks/hooks";
import { clearAllCalculation } from "@/store/client-session-calculations-slice";
import { Box, Button, Divider, Flex, Group, NumberFormatter, SimpleGrid, Text, Title } from "@mantine/core";
import Link from "next/link";
import { usePDF } from "react-to-pdf";
import { Table } from "@mantine/core";
import Image from "next/image";
import classes from "./CalculationsDashboard.module.css";
import { ContactIconsList } from "../GetInTouch/ContactIcons";
import chevronUp from "../../public/icons/chevron-up.svg";
import chevronDown from "../../public/icons/chevron-down.svg";
import ModalComponent from "../ModalComponent/ModalComponent";
// import ModalComponent from "@/components/ModalComponent/ModalComponent";

export default function CalculationsDashboard({ layout }: { layout: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isTableOpen, setIsTableOpen] = useState(false);
    const [clientSessionCalculationsDataLength, setClientSessionCalculationsDataLength] = useState<string | number>("");
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: "СтройFamily - pdf-калькуляция.pdf",
        // page: { margin: Margin.MEDIUM },
    });
    const clientSessionCalculationsData = useAppSelector((state) => state.clientSessionCalculationsData.calculations);
    const dispatch = useAppDispatch();

    const arrayOfAmountAddedElements = clientSessionCalculationsData.map((addedItem) => addedItem.amount);

    const arrayOfBasePriceAddedElements = clientSessionCalculationsData.map((addedItem) =>
        addedItem.amount === 1 ? addedItem.basePrice : +addedItem.basePrice * Number(addedItem.amount)
    );

    const arrayOfWorkPriceAddedElements = clientSessionCalculationsData.map((addedItem) =>
        addedItem.amount === 1 ? addedItem.workPrice : +addedItem.workPrice * Number(addedItem.amount)
    );

    const totalBasePrice = arrayOfBasePriceAddedElements.reduce((a, b) => Number(a) + Number(b), 0);
    const totalWorkPrice = arrayOfWorkPriceAddedElements.reduce((a, b) => Number(a) + Number(b), 0);
    const totalAmount = arrayOfAmountAddedElements.reduce((a, b) => Number(a) + Number(b), 0);

    const calculationsAddedDataMapped = clientSessionCalculationsData.map((addedItem, index) => {
        return <CalculationsItemCards key={index} mode={"calculation-dashboard"} index={index} addedItem={addedItem} />;
    });

    // PDF-----------------------------------------------

    const FilePdf = () => {
        const rows = clientSessionCalculationsData.map((element, index) => (
            <Table.Tr key={index} p="20px">
                <Table.Td>{`${index + 1}.`}</Table.Td>
                <Table.Td>{element.title}</Table.Td>
                <Table.Td>
                    <Image src={element.src ? element.src : ""} width={50} height={50} alt="pdf" />
                </Table.Td>
                <Table.Td>
                    {element.amount} {element.measurement}
                </Table.Td>
                <Table.Td>
                    <NumberFormatter value={element.basePrice} suffix=" ₽" />
                </Table.Td>
                <Table.Td>
                    <NumberFormatter value={element.workPrice} suffix=" ₽" />
                </Table.Td>
                <Table.Td>
                    <NumberFormatter value={element.basePrice * Number(element.amount)} suffix=" ₽" />
                </Table.Td>
                <Table.Td>
                    <NumberFormatter value={element.workPrice * Number(element.amount)} suffix=" ₽" />
                </Table.Td>
                <Table.Td>
                    <NumberFormatter
                        value={
                            Number(element.amount) * Number(element.basePrice) +
                            Number(element.amount) * Number(element.workPrice)
                        }
                        suffix=" ₽"
                    />
                </Table.Td>
            </Table.Tr>
        ));

        return (
            <Flex
                id="test-pdf"
                ref={targetRef}
                direction={{ base: "column" }}
                gap={{ base: "50" }}
                justify={{ base: "flex-start" }}
                w="100%"
                // style={{ background: "#f1f3f5" }}
                pl="xl"
                pr="xl"
                pt="xl"
            >
                <Title order={1} size="h3" ta="center">
                    Сводная таблица:
                </Title>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>№</Table.Th>
                            <Table.Th>Наименование</Table.Th>
                            <Table.Th>фото</Table.Th>
                            <Table.Th>кол-во</Table.Th>
                            <Table.Th>цена ед</Table.Th>
                            <Table.Th>монтаж ед</Table.Th>
                            <Table.Th>цена итого</Table.Th>
                            <Table.Th>монтаж итого</Table.Th>
                            <Table.Th>итого по позиции</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {rows}
                        <Table.Tr p="40px">
                            <Table.Td></Table.Td>
                            <Table.Td>
                                <Text fw="600">Итого</Text>
                            </Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td></Table.Td>

                            <Table.Td>
                                <Text fw="600">
                                    <NumberFormatter value={totalBasePrice} suffix=" ₽" />
                                </Text>
                            </Table.Td>
                            <Table.Td>
                                <Text fw="600">
                                    <NumberFormatter value={totalWorkPrice} suffix=" ₽" />
                                </Text>
                            </Table.Td>
                            <Table.Td>
                                <Text fw="600">
                                    <NumberFormatter
                                        value={Number(totalBasePrice) + Number(totalWorkPrice)}
                                        suffix=" ₽"
                                    />
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>

                <Divider w="100%" />
                <Divider pb="xs" w="100%" />
                <Flex
                    pl="50"
                    pr="50"
                    direction={{ base: "column" }}
                    gap={{ base: "sm" }}
                    justify={{ sm: "flex-start" }}
                >
                    <ContactIconsList mode="calculation-dashboard" />
                    <Title order={1} size="h3" ta="left" mt="xl" mb="md" flex="row">
                        <Box ml={2} style={{ fontFamily: "Nautilus" }}>
                            <Text fz="lg" c="dark.8">
                                Строй Family - обращаясь к нам вы получаете качество, индивидуальный подход, по хорошим
                                ценам!
                            </Text>
                        </Box>
                    </Title>
                </Flex>
            </Flex>
        );
    };

    const sendCalculationsHandler = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        setClientSessionCalculationsDataLength(calculationsAddedDataMapped.length);
    }, [calculationsAddedDataMapped]);

    return (
        <Group p="xs" justify="center">
            {isOpen && <ModalComponent isOpen={isOpen} modalMode={"calculations"} setIsOpen={setIsOpen} />}
            <Flex direction={{ base: "column" }} gap={{ base: "sm" }} justify={{ base: "flex-start" }} w="100%">
                <Title order={1} size="h3" ta="start">
                    {layout}
                </Title>

                <Divider my="xs" w="100%" />
                {Number(clientSessionCalculationsDataLength) !== 0 && (
                    <Group justify="center">
                        <Text fw={700} size="sm">
                            Добавленно позиций:{" "}
                        </Text>
                        <NumberFormatter
                            value={calculationsAddedDataMapped.length}
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
                )}
            </Flex>
            <Divider my="xs" w="100%" />
            {Number(clientSessionCalculationsDataLength) === 0 ? (
                <Group p="50" justify="center" w="100%" h="300px">
                    {"Вы пока ничего не добавили . . ."}
                </Group>
            ) : (
                <SimpleGrid
                    cols={{ base: 2, xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
                    spacing={{ base: 10, md: 10 }}
                    verticalSpacing={{ base: "xs" }}
                >
                    {calculationsAddedDataMapped}
                </SimpleGrid>
            )}

            {Number(clientSessionCalculationsDataLength) !== 0 && (
                <Flex direction={{ base: "column" }} justify={{ base: "center" }} align={{ base: "start" }} w="100%">
                    <Divider w="100%" />
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
            )}
            {Number(clientSessionCalculationsDataLength) !== 0 && <Divider my="xs" w="100%" />}
            {Number(clientSessionCalculationsDataLength) !== 0 && (
                <Button
                    color="dark.8"
                    variant="light"
                    fullWidth
                    radius="sm"
                    w="100%"
                    mb="10"
                    onClick={() => setIsTableOpen(!isTableOpen)}
                >
                    <span style={{ marginRight: "10px" }}>PDF калькуляция / скачать</span>

                    {isTableOpen ? (
                        <Image priority src={chevronUp} alt="chevron up" />
                    ) : (
                        <Image priority src={chevronDown} alt="chevron down" />
                    )}
                </Button>
            )}

            {isTableOpen && (
                <>
                    <Button
                        color="green.6"
                        variant="light"
                        fullWidth
                        radius="sm"
                        // w="100%"
                        mb="10"
                        onClick={() => toPDF()}
                    >
                        скачать PDF
                    </Button>
                    <Flex
                        direction={{ base: "column" }}
                        // gap={{ base: "50" }}
                        justify={{ base: "flex-start" }}
                        w="100%"
                        // ref={targetRef}
                        // style={{ background: "#f1f3f5" }}
                        // pt="lg"
                        // pb="lg"
                    >
                        <Title order={1} size="h3" ta="center">
                            Сводная таблица:
                        </Title>

                        <Table.ScrollContainer minWidth="1500" className={classes.table_scroller}>
                            <FilePdf />
                        </Table.ScrollContainer>
                    </Flex>
                </>
            )}
            <Link
                href={"/catalog"}
                style={{
                    textDecoration: "none",
                    width: "100%",
                }}
            >
                <Button color="green.6" variant="light" fullWidth radius="sm" w="100%" mb="10">
                    Вернуться в каталог
                </Button>
            </Link>
            {Number(clientSessionCalculationsDataLength) !== 0 && (
                <Flex direction={{ base: "column" }} gap={{ base: "sm" }} justify={{ sm: "center" }} w="100%">
                    <Button
                        color="green.6"
                        variant="light"
                        fullWidth
                        radius="sm"
                        w="100%"
                        mb="10"
                        onClick={sendCalculationsHandler}
                    >
                        Отправить расчет менеджеру
                    </Button>
                    <Button
                        color="red.6"
                        variant="light"
                        fullWidth
                        radius="sm"
                        w="100%"
                        onClick={() => dispatch(clearAllCalculation())}
                        mb="10"
                    >
                        Удалить всё
                    </Button>
                </Flex>
            )}
        </Group>
    );
}
