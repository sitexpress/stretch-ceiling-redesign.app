"use client";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Textarea, rem, Group, FileInput, Text } from "@mantine/core";
import { sendMessage, sendMessageCalculations, sendMessageMeasurer, sendMessageWant } from "@/api/telegram";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck, IconPaperclip } from "@tabler/icons-react";

type CallBackFormType = {
    modalMode: "callBack" | "measurer" | "calculations" | "want" | "";
    setIsOpen: (value: boolean) => void;
    project?: string;
};


export default function CallBackForm({ modalMode, setIsOpen, project }: CallBackFormType) {
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
                // position: "bottom-right",
                position: "bottom-center",
                title: "Заявка на обратный звонок отправлена",
                message: `Менеджер перезвонит Вам в течении 5 минут! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                // position: "bottom-right",
                position: "bottom-center",
                title: "Что-то пошло не так.",
                message: `Попробуйте проверить Ваше интернет соединение и отправьте заявку снова через 1-2 минуты! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            setIsOpen(false);

            const id: string = "callback-form";
            if (id && process.env.NEXT_PUBLIC_COUNTER_ID){
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
                // position: "bottom-right",
                position: "bottom-center",
                title: "Заявка на замер отправлена",
                message: `Менеджер перезвонит Вам в течении 5 минут! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                position: "bottom-center",
                title: "Что-то пошло не так.",
                message: `Попробуйте проверить Ваше интернет соединение и отправьте заявку снова через 1-2 минуты! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
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
                position: "bottom-center",
                title: "Заявка на замер отправлена",
                message: `Менеджер перезвонит Вам в течении 5 минут! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } catch (error) {
            console.log("error111:", error);
            notifications.show({
                position: "bottom-center",
                title: "Что-то пошло не так.",
                message: `Попробуйте проверить Ваше интернет соединение и отправьте заявку снова через 1-2 минуты! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            setIsOpen(false);
            form.reset();

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
                // position: "bottom-right",
                position: "top-center",
                title: "Заявка на обратный звонок отправлена",
                message: `Менеджер перезвонит Вам в течении 5 минут! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            console.log("3");
            notifications.show({
                // position: "bottom-right",
                position: "top-center",
                title: "Что-то пошло не так.",
                message: `Попробуйте проверить Ваше интернет соединение и отправьте заявку снова через 1-2 минуты! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
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
                    <Button loading={isLoading} type="submit" mt="xl" style={{ width: "100%" }}>
                        Отправить расчёт менеджеру
                    </Button>
                </>
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

                    <Button loading={isLoading} type="submit" mt="xl" style={{ width: "100%" }}>
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
                    <Button loading={isLoading} type="submit" mt="xl" style={{ width: "100%" }}>
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
