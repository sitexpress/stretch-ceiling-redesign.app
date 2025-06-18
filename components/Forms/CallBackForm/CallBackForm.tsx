"use client";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Textarea, rem, Group, FileInput, Text, Flex } from "@mantine/core";
import { sendMessage, sendMessageCalculations, sendMessageMeasurer, sendMessageOffer, sendMessageWant } from "@/api/telegram";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck, IconPaperclip } from "@tabler/icons-react";
import { DataType } from "@/components/ReDesign/Offer/Offer";

type CallBackFormType = {
    modalMode: "callBack" | "measurer" | "calculations" | "want" | "offer" | "";
    setIsOpen: (value: boolean) => void;
    project?: string;
    data?: DataType;
};

export default function CallBackForm({ modalMode, setIsOpen, project, data }: CallBackFormType) {
    const [submittedValues, setSubmittedValues] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            tel: "",
            message: "",
            // file: "" as "" | File,
        },
        validate: {
            name: (value) => (value.length < 2 ? "Количество букв в имени не менее 2-х!" : null),
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Количество цифр в номере должно быть 11! Укажите телефон в формате через 8-ку"
                    : null,
            // file: (value) => (!value ? "Прикрепите PDF!" : null),
        },
    });

    const handleSubmit = async (values: typeof form.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Заявка на - обратный звонок`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя: ${values.name}`;
            const line7 = `Контактный номер телефона": ${values.tel}`;
            const line8 = `Сообщение: ${values.message}`;

            await sendMessage(line1, line2, line3, line4, line5, line6, line7, line8);

            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Заявка на обратный звонок отправлена 🌟
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Менеджер перезвонит Вам в течении 5 минут!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "green.6",
                bg: "dark.6",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Что-то пошло не так
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Попробуйте проверить Ваше интернет соединение и отправить писмо снова через 1-2 минуты!
                    </Text>
                ),

                withCloseButton: true,
                autoClose: 5000,
                color: "red.6",
                bg: "dark.6",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } finally {
            setIsLoading(false);
            setIsOpen(false);

            const id: string = "callback-form";
            if (id && process.env.NEXT_PUBLIC_COUNTER_ID) {
                window.ym(process.env.NEXT_PUBLIC_COUNTER_ID, "reachGoal", id);
            }
        }
    };

    const handleMeasurerSubmit = async (values: typeof form.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            // setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Заявка на - замер`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя: ${values.name}`;
            const line7 = `Контактный номер телефона": ${values.tel}`;
            const line8 = `Сообщение: ${values.message}`;

            await sendMessageMeasurer(line1, line2, line3, line4, line5, line6, line7, line8);

            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Заявка на замер отправлена 🌟
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Менеджер перезвонит Вам в течении 5 минут!
                    </Text>
                ),
                withCloseButton: true,
                color: "green.6",
                bg: "dark.6",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Что-то пошло не так
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Попробуйте проверить Ваше интернет соединение и отправить писмо снова через 1-2 минуты!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "red.6",
                bg: "dark.6",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } finally {
            setIsLoading(false);
            setIsOpen(false);
            form.reset();

            const id: string = "measurer-form";
            window.ym("101251572", "reachGoal", id);
        }
    };

    const formToPdf = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            tel: "",
            message: "",
            file: "" as "" | File,
        },
        validate: {
            name: (value) => (value.length < 2 ? "Количество букв в имени не менее 2-х!" : null),
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Количество цифр в номере должно быть 11! Укажите телефон в формате через 8-ку"
                    : null,
            file: (value) => (!value ? "Прикрепите PDF!" : null),
        },
    });

    const handleCalculationsSubmit = async (values: typeof formToPdf.values): Promise<void> => {
        console.log("hello");
        try {
            setIsLoading(true);
            const date = new Date();
            // setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Калькуляция и обратный звонок`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя: ${values.name}`;
            const line7 = `Контактный номер телефона": ${values.tel}`;
            const line8 = `Сообщение: ${values.message}`;
            const line9 = values.file;
            await sendMessageCalculations(line1, line2, line3, line4, line5, line6, line7, line8, line9);

            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Заявка на замер отправлена 🌟
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Менеджер перезвонит Вам в течении 5 минут!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "green.6",
                bg: "dark.6",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } catch (error) {
            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Что-то пошло не так
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Попробуйте проверить Ваше интернет соединение и отправить писмо снова через 1-2 минуты!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "red.6",
                bg: "dark.6",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } finally {
            setIsLoading(false);
            setIsOpen(false);
            form.reset();

            const id: string = "calculations";
            window.ym("101251572", "reachGoal", id);
        }
    };

    const formOffer = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            tel: "",
        },
        validate: {
            name: (value) => (value.length < 2 ? "Количество букв в имени не менее 2-х!" : null),
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Количество цифр в номере должно быть 11! Укажите телефон в формате через 8-ку"
                    : null,
        },
    });

    const handleformOfferSubmit = async (values: typeof formOffer.values): Promise<void> => {
        console.log("hello");
        try {
            setIsLoading(true);
            const date = new Date();
            // setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Cтоимость натяжных потолков в вашей квартире`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя: ${values.name}`;
            const line7 = `Контактный номер телефона: ${values.tel}`;
            const line8 = `Какая площадь потолков: ${data?.["Какая площадь потолков?"]}`;
            const line9 = `Какой тип потолков вы хотите: ${data?.["Какой тип потолков вы хотите?"]}`;
            const line10 = `Какая площадь потолков: ${data?.["Какая площадь потолков?"]}`;
            const line11 = `Какое количество углов: ${data?.["Какое количество углов?"]}`;
            const line12 = `Какое вы бы хотели освещение: ${data?.["Какое вы бы хотели освещение?"]}`;
            const line13 = `Куда отправить расчет: ${data?.["Куда отправить расчет?"]}`;
            await sendMessageOffer(
                line1,
                line2,
                line3,
                line4,
                line5,
                line6,
                line7,
                line8,
                line9,
                line10,
                line11,
                line12,
                line13
            );

            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Ваш расчет принят в работу! 🌟
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Менеджер перезвонит Вам в течении 5 минут!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "green.6",
                bg: "dark.6",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } catch (error) {
            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Что-то пошло не так
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Попробуйте проверить Ваше интернет соединение и отправить писмо снова через 1-2 минуты!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "red.6",
                bg: "dark.6",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } finally {
            setIsLoading(false);
            setIsOpen(false);
            formOffer.reset();

            const id: string = "calculations";
            window.ym("101251572", "reachGoal", id);
        }
    };

    const formWant = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            tel: "",
        },
        validate: {
            name: (value) => (value.length < 2 ? "Количество букв в имени не менее 2-х!" : null),
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Количество цифр в номере должно быть 11! Укажите телефон в формате через 8-ку"
                    : null,
        },
    });

    const handleSubmitWant = async (values: typeof formWant.values): Promise<void> => {
        console.log("1");
        try {
            console.log("2");
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Хочу также`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя: ${values.name}`;
            const line7 = `Контактный номер телефона": ${values.tel}`;
            const line8 = `Тип проекта: ${project}`;

            await sendMessageWant(line1, line2, line3, line4, line5, line6, line7, line8);

            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Заявка на обратный звонок отправлена 🌟
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Менеджер перезвонит Вам в течении 5 минут!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "green.6",
                bg: "dark.6",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            console.log("3");
            notifications.show({
                position: "top-center",
                title: (
                    <Text component="span" c="gray.0" size="xl">
                        Что-то пошло не так
                    </Text>
                ),
                message: (
                    <Text component="span" c="gray.0">
                        Попробуйте проверить Ваше интернет соединение и отправить писмо снова через 1-2 минуты!
                    </Text>
                ),
                withCloseButton: true,
                autoClose: 5000,
                color: "red.6",
                bg: "dark.6",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                style: { zIndex: "1500", border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" },
                mt: 100,
            });
        } finally {
            setIsLoading(false);
            setIsOpen(false);

            const id: string = "want";
            window.ym("101251572", "reachGoal", id);
        }
    };

    return (
        <form
            onSubmit={
                modalMode === "callBack"
                    ? form.onSubmit(handleSubmit)
                    : modalMode === "measurer"
                      ? form.onSubmit(handleMeasurerSubmit)
                      : modalMode === "want"
                        ? formWant.onSubmit(handleSubmitWant)
                        : modalMode === "offer"
                          ? formOffer.onSubmit(handleformOfferSubmit)
                          : formToPdf.onSubmit(handleCalculationsSubmit)
            }
            style={{
                paddingBottom: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
        >
            {modalMode === "calculations" ? (
                <>
                    <TextInput
                        label="Ваше имя"
                        placeholder="Ваше имя"
                        key={formToPdf.key("name")}
                        {...formToPdf.getInputProps("name")}
                    />
                    <TextInput
                        label="Контактный телефон"
                        placeholder="89876543221"
                        mt="md"
                        key={formToPdf.key("tel")}
                        {...formToPdf.getInputProps("tel")}
                    />
                    <Textarea
                        label=""
                        description="Дополнительное сообщение "
                        placeholder="Дополнительное сообщение если нужно..."
                        mt="md"
                        key={formToPdf.key("message")}
                        {...formToPdf.getInputProps("message")}
                    />

                    <Group pt={20} ta="right" justify="right">
                        <FileInput
                            leftSection={<IconPaperclip />}
                            label="Прикрепите скачанный PDF"
                            placeholder="PDF"
                            leftSectionPointerEvents="none"
                            key={formToPdf.key("file")}
                            {...formToPdf.getInputProps("file")}
                            // style={{ width: "40%" }}
                        />
                    </Group>
                    <Button loading={isLoading} type="submit" mt="xl" style={{ width: "100%" }} variant="default">
                        Отправить расчёт менеджеру
                    </Button>
                </>
            ) : modalMode === "offer" ? (
                <Flex direction="column" justify="center">
                    <TextInput
                        label="Ваше имя"
                        placeholder="Ваше имя"
                        key={formOffer.key("name")}
                        {...formOffer.getInputProps("name")}
                    />
                    <TextInput
                        label="Контактный телефон"
                        placeholder="89876543221"
                        mt="md"
                        key={formOffer.key("tel")}
                        {...formOffer.getInputProps("tel")}
                    />
                    <Button
                        loading={isLoading}
                        type="submit"
                        mt="xl"
                        style={{ width: "100%" }}
                        variant="default"
                        size="lg"
                        radius="xl"
                    >
                        Отправить расчёт менеджеру
                    </Button>
                </Flex>
            ) : modalMode === "want" ? (
                <>
                    <TextInput
                        label="Ваше имя"
                        placeholder="Ваше имя"
                        key={formWant.key("name")}
                        {...formWant.getInputProps("name")}
                    />
                    <TextInput
                        label="Контактный телефон"
                        placeholder="89876543221"
                        mt="md"
                        key={formWant.key("tel")}
                        {...formWant.getInputProps("tel")}
                    />
                    {modalMode === "want" && project ? (
                        <Text mt={20} size="sm">
                            - {project}
                        </Text>
                    ) : (
                        <Textarea
                            label=""
                            description="Дополнительное сообщение "
                            placeholder="Дополнительное сообщение если нужно..."
                            mt="md"
                            key={formWant.key("message")}
                            {...formWant.getInputProps("message")}
                        />
                    )}

                    <Button loading={isLoading} type="submit" mt="xl" style={{ width: "100%" }} variant="default">
                        Хочу также
                    </Button>
                </>
            ) : (
                <>
                    <TextInput
                        label="Ваше имя"
                        placeholder="Ваше имя"
                        key={form.key("name")}
                        {...form.getInputProps("name")}
                    />
                    <TextInput
                        label="Контактный телефон"
                        placeholder="89876543221"
                        mt="md"
                        key={form.key("tel")}
                        {...form.getInputProps("tel")}
                    />
                    <Textarea
                        label=""
                        description="Дополнительное сообщение "
                        placeholder="Дополнительное сообщение если нужно..."
                        mt="md"
                        key={form.key("message")}
                        {...form.getInputProps("message")}
                    />
                    <Button
                        loading={isLoading}
                        type="submit"
                        mt="xl"
                        style={{ width: "100%" }}
                        variant="filled"
                        radius={40}
                        bg="dark.6"
                    >
                        {modalMode === "callBack"
                            ? "Заказать обратный звонок"
                            : modalMode === "measurer"
                              ? "Записаться"
                              : ""}
                    </Button>
                </>
            )}
        </form>
    );
}
