import { useRef, useState } from "react";
import {
    Badge,
    Button,
    Combobox,
    Container,
    Flex,
    Grid,
    Group,
    Progress,
    Radio,
    SimpleGrid,
    Title,
} from "@mantine/core";
import { Image, Text, Input } from "@mantine/core";
import classes from "./Offer.module.css";
import { IconCircleCheck, IconX } from "@tabler/icons-react";
import CallBackForm from "@/components/Forms/CallBackForm/CallBackForm";
import AnimateEnhanced from "@/components/Animate/Animate";

export type DataType = {
    "Куда нужен натяжной потолок?": string;
    "Какой тип потолков вы хотите?": string;
    "Какая площадь потолков?": string | number;
    "Какое количество углов?": string | number;
    "Какое вы бы хотели освещение?": string;
    "Куда отправить расчет?": string;
};

export function Offer() {
    const [stage, setStage] = useState(0);
    const [value0, setValue0] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [scrollProgressCeiling, setScrollProgressFolioCeiling] = useState(15);
    const [error, setError] = useState<string | null>(null);

    const data: DataType = {
        "Куда нужен натяжной потолок?": value0,
        "Какой тип потолков вы хотите?": value1,
        "Какая площадь потолков?": value2,
        "Какое количество углов?": value3,
        "Какое вы бы хотели освещение?": value4,
        "Куда отправить расчет?": value5,
    };

    function isOnlyDigitsOrNumbers(input: any, stage: number) {
        const regex = /^\d+(\.\d+)?$/;
        if (stage === 2) {
            if (regex.test(input)) {
                setValue2(input);
                setError(null);
            } else {
                setError("Введите число");
            }
        }

        if (stage === 3) {
            if (regex.test(input)) {
                setValue3(input);
                setError(null);
            } else {
                setError("Введите число");
            }
        }
    }

    const OfferStage = (stage: number) => {
        return stage === 0 ? (
            <Combobox onOptionSubmit={setValue0}>
                <Combobox.Options
                    style={{ display: "flex", justifyContent: "center", gap: "10px", width: "99%" }}
                    bg="gray.1"
                >
                    <Grid
                        justify="center"
                        // type="container"
                        // breakpoints={{ xs: "100px", sm: "200px", md: "300px", lg: "400px", xl: "500px" }}
                    >
                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Гостинная" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value0 === "Гостинная" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0">
                                        {value0 === "Гостинная" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-0/gostinaya.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Гостинная
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value0 === "Second" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Кухня" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value0 === "Кухня" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0">
                                        {value0 === "Кухня" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-0/kuhnya.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Кухня
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>

                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value0 === "Third" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Ванная" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value0 === "Ванная" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0" m="0">
                                        {value0 === "Ванная" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-0/vannaya.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Ванная
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>

                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value0 === "Fourth" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Вся квартира" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value0 === "Вся квартира" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }}>
                                        {value0 === "Вся квартира" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-0/kvartira.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xы">
                                        Вся квартира
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>
                    </Grid>
                </Combobox.Options>
                <Group bg="gray.1" justify="center" mt={50}>
                    {!!value0 && (
                        <Button
                            variant="filled"
                            bg="dark.6"
                            size="lg"
                            radius="xl"
                            ta="right"
                            onClick={() => {
                                setStage(stage + 1);
                                setScrollProgressFolioCeiling(scrollProgressCeiling + 15);
                            }}
                        >
                            Далее
                        </Button>
                    )}
                    {!value0 && (
                        <Button disabled variant="filled" bg="dark.3" size="lg" radius="xl" ta="right">
                            Далее
                        </Button>
                    )}
                </Group>
            </Combobox>
        ) : stage === 1 ? (
            <Combobox onOptionSubmit={setValue1}>
                <Combobox.Options
                    style={{ display: "flex", justifyContent: "center", gap: "10px", width: "99%" }}
                    bg="gray.1"
                    p="0"
                    pb={20}
                >
                    <Grid
                        justify="center"
                        // type="container"
                        // breakpoints={{ xs: "100px", sm: "200px", md: "300px", lg: "400px", xl: "500px" }}
                    >
                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value1 === "Матовые" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Матовые" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value1 === "Матовые" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0">
                                        {value1 === "Матовые" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-1/matovy.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Матовые
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value1 === "Глянцевые" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Глянцевые" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value1 === "Глянцевые" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0">
                                        {value1 === "Глянцевые" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-1/glyanec.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Глянцевые
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>

                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value1 === "Сатин" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Сатин" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value1 === "Сатин" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0" m="0">
                                        {value1 === "Сатин" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-1/satin.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Сатин
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>

                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value1 === "Лучше проконсультировать" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Лучше проконсультировать" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value1 === "Лучше проконсультировать" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }}>
                                        {value1 === "Лучше проконсультировать" && (
                                            <IconCircleCheck className={classes.icon} />
                                        )}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-1/konsult.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="xs" size="xs">
                                        Лучше проконсультировать
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>
                    </Grid>
                </Combobox.Options>
                <Group bg="gray.1" justify="center">
                    {!!value1 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage + 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling + 15);
                                }}
                            >
                                Далее
                            </Button>
                        </Flex>
                    )}
                    {!value1 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button disabled variant="filled" bg="dark.3" size="lg" radius="xl" ta="right">
                                Далее
                            </Button>
                        </Flex>
                    )}
                </Group>
            </Combobox>
        ) : stage === 2 ? (
            <Flex justify="center" direction="column" align="center" mt="50" mb="50">
                <Input.Wrapper
                    // label="Input label"
                    // description="Input description"
                    error={error}
                    w="100%"
                >
                    <Input
                        placeholder="25 (м.кв) укажите число"
                        value={value2}
                        onChange={(event) => isOnlyDigitsOrNumbers(event.currentTarget.value, stage)}
                        rightSection={
                            value2 !== "" ? <IconX onClick={() => setValue2("")} cursor="pointer" /> : undefined
                        }
                        rightSectionPointerEvents="auto"
                        size="xl"
                        w="100%"
                    />
                </Input.Wrapper>
                <Group bg="gray.1" justify="center">
                    {!!value2 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage + 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling + 15);
                                }}
                            >
                                Далее
                            </Button>
                        </Flex>
                    )}
                    {!value2 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button disabled variant="filled" bg="dark.3" size="lg" radius="xl" ta="right">
                                Далее
                            </Button>
                        </Flex>
                    )}
                </Group>
            </Flex>
        ) : stage === 3 ? (
            <Flex justify="center" direction="column" align="center" mt="50" mb="50">
                <Input.Wrapper
                    // label="Input label"
                    // description="Input description"
                    error={error}
                    w="100%"
                    ta="center"
                >
                    <Input
                        placeholder="8 шт. укажите число"
                        value={value3}
                        onChange={(event) => isOnlyDigitsOrNumbers(event.currentTarget.value, stage)}
                        rightSection={
                            value3 !== "" ? <IconX onClick={() => setValue3("")} cursor="pointer" /> : undefined
                        }
                        rightSectionPointerEvents="auto"
                        size="xl"
                        w="100%"
                        ta="center"
                    />
                </Input.Wrapper>
                <Group bg="gray.1" justify="center">
                    {!!value3 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage + 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling + 15);
                                }}
                            >
                                Далее
                            </Button>
                        </Flex>
                    )}
                    {!value3 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button disabled variant="filled" bg="dark.3" size="lg" radius="xl" ta="right">
                                Далее
                            </Button>
                        </Flex>
                    )}
                </Group>
            </Flex>
        ) : stage === 4 ? (
            <Combobox onOptionSubmit={setValue4}>
                <Combobox.Options
                    style={{ display: "flex", justifyContent: "center", gap: "10px", width: "99%" }}
                    bg="gray.1"
                >
                    <Grid
                        justify="center"
                        // type="container"
                        // breakpoints={{ xs: "100px", sm: "200px", md: "300px", lg: "400px", xl: "500px" }}
                        // pb="20px"
                    >
                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            bg="gray.0"
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            m="0"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Трековые светильники" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value4 === "Трековые светильники" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0">
                                        {value4 === "Трековые светильники" && (
                                            <IconCircleCheck className={classes.icon} />
                                        )}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-4/trek.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Трековые светильники
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value4 === "Точечные светильники" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            p="10"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Точечные светильники" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value4 === "Точечные светильники" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0">
                                        {value4 === "Точечные светильники" && (
                                            <IconCircleCheck className={classes.icon} />
                                        )}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-4/tochechnye.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Точечные светильники
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>

                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value4 === "Световые линии" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Световые линии" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value4 === "Световые линии" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }} p="0" m="0">
                                        {value4 === "Световые линии" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-4/svetovye.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Световые линии
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>

                        <Grid.Col
                            span={{ base: 5, md: 2, lg: 2 }}
                            // bg={value4 === "Своя люстра" ? "dark.9" : "gray.0"}
                            mt="xl"
                            style={{
                                borderRadius: "20px",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                                display: "flex",
                                alignItems: "center",
                                height: "auto",
                            }}
                            // m="xl"
                            m="0"
                            mr={10}
                            ta="center"
                        >
                            <Combobox.Option value="Своя люстра" style={{ borderRadius: "20px" }} p="0">
                                <Container
                                    p="0"
                                    m="0"
                                    bg={value4 === "Своя люстра" ? "dark.9" : "dark.6"}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <SimpleGrid cols={{ base: 1 }}>
                                        {value4 === "Своя люстра" && <IconCircleCheck className={classes.icon} />}
                                        <Image
                                            radius="md"
                                            src="/images/offer/step-4/lustra.jpg"
                                            fallbackSrc="https://placehold.co/600x400?text=Фото"
                                            style={{ borderRadius: "20px 20px 0px 0px" }}
                                            w="100%"
                                            h="100%"
                                        />
                                    </SimpleGrid>
                                    <Text c="white" p="sm" size="xl">
                                        Установка своей люстры
                                    </Text>
                                </Container>
                            </Combobox.Option>
                        </Grid.Col>
                    </Grid>
                </Combobox.Options>
                <Group bg="gray.1" justify="center">
                    {!!value4 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage + 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling + 15);
                                }}
                            >
                                Далее
                            </Button>
                        </Flex>
                    )}
                    {!value4 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button disabled variant="filled" bg="dark.3" size="lg" radius="xl" ta="right">
                                Далее
                            </Button>
                        </Flex>
                    )}
                </Group>
            </Combobox>
        ) : stage === 5 ? (
            <div>
                <Radio.Group
                    value={value5}
                    onChange={setValue5}
                    name=""
                    label=""
                    description=""
                    withAsterisk
                    size="xl"
                    mt={50}
                    mb={15}
                >
                    <Flex mt="xs" justify="center" align="center" gap={20} direction="column">
                        <Badge
                            variant="default"
                            color="blue"
                            p="lg"
                            ta="center"
                            radius="xl"
                            size="md"
                            w="300px"
                            style={{ cursor: "pointer" }}
                        >
                            <Radio value="Whats App" label="Whats App" size="md" />
                        </Badge>
                        <Badge
                            variant="default"
                            color="blue"
                            p="lg"
                            ta="center"
                            radius="xl"
                            size="md"
                            w="300px"
                            style={{ cursor: "pointer" }}
                        >
                            <Radio value="Telegram" label="Telegram" size="md"></Radio>
                        </Badge>

                        <Badge
                            variant="default"
                            color="blue"
                            p="lg"
                            ta="center"
                            radius="xl"
                            size="md"
                            w="300px"
                            style={{ cursor: "pointer" }}
                        >
                            <Radio value="Лучше позвонить" label="Лучше позвонить" size="md" />
                        </Badge>
                    </Flex>
                </Radio.Group>
                <Group bg="gray.1" justify="center">
                    {!!value5 && (
                        <Flex justify="space-around" mt={100} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage + 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling + 15);
                                }}
                            >
                                Далее
                            </Button>
                        </Flex>
                    )}
                    {!value5 && (
                        <Flex justify="space-around" mt={50} gap={100}>
                            <Button
                                variant="filled"
                                bg="dark.6"
                                size="lg"
                                radius="xl"
                                ta="right"
                                onClick={() => {
                                    setStage(stage - 1);
                                    setScrollProgressFolioCeiling(scrollProgressCeiling - 15);
                                }}
                            >
                                Назад
                            </Button>
                            <Button disabled variant="filled" bg="dark.3" size="lg" radius="xl" ta="right">
                                Далее
                            </Button>
                        </Flex>
                    )}
                </Group>
            </div>
        ) : (
            <div className={classes.wrapper_form}>
                <Image
                    radius="md"
                    src="/images/main_img.png"
                    fallbackSrc="https://placehold.co/600x400?text=Фото"
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                    className={classes.img_form}
                />
                <CallBackForm modalMode={"offer"} setIsOpen={() => true} data={data} />
            </div>
        );
    };

    return (
        <Flex direction="column" bg="gray.1" w="100%" justify="center" align="center">
            <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                <Title order={2} ta="center" className={classes.description} c="dark.5" bg="gray.1" pb="sm">
                    <Text component="span" inherit c="red.6">
                        Узнайте стоимость
                    </Text>{" "}
                    натяжных потолков в вашей квартире
                </Title>
            </AnimateEnhanced>

            <Badge size="xl" mb="sm" bg="red.6">
                {stage + 1} из 7
            </Badge>

            <Flex direction="column" justify="center" align="center" w="100%" bg="dark.2" ta="center">
                <Progress.Root maw={400} size="lg" mt="xl" mx="auto" bg="dark.1" radius="40px" w="90%">
                    <Progress.Section value={scrollProgressCeiling} bg="red.6 " color="dark.6">
                        <Progress.Label
                            style={{ fontFamily: "Nautilus", fontSize: "12px" }}
                            color="dark.6"
                        ></Progress.Label>
                    </Progress.Section>
                </Progress.Root>

                <Title order={3} ta="center" mb="sm" c="white">
                    {stage === 0
                        ? "1. Куда нужен натяжной потолок?"
                        : stage === 1
                          ? "2. Какой тип потолков вы хотите?"
                          : stage === 2
                            ? "3. Какая площадь потолков?"
                            : stage === 3
                              ? "4. Какое количество углов?"
                              : stage === 4
                                ? "5. Какое освещение вы бы хотели?"
                                : stage === 5
                                  ? "6. Куда отправить расчет?"
                                  : "Отлично, остался последний шаг!"}
                </Title>
            </Flex>
                <Flex direction="column" pt="lg" pb="lg" className={classes.container}>
                    {OfferStage(stage)}
                </Flex>
        </Flex>
    );
}
