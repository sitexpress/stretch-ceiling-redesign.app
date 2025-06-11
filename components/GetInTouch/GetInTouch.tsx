"use client";
import {
    Badge,
    Button,
    Container,
    Group,
    Paper,
    SimpleGrid,
    Text,
    TextInput,
    Textarea,
    Title,
    rem,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";
import { useState } from "react";
import { IconX, IconCheck } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { sendMessagePismo } from "@/api/telegram";

export function GetInTouch() {
    const [submittedValues, setSubmittedValues] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            tel: "",
            // email: "",
            // heading: "",
            message: "",
        },
        validate: {
            name: (value) => (value.length < 2 ? "Количество букв в имени не менее 2-х !" : null),
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Количество цифр в номере должно быть 11! Укажите телефон в формате через 8-ку"
                    : null,
            // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Неправельный формат почты !"),
            // heading: (value) => (value.length < 3 ? "Заголовок не менее 3-х букв !" : null),
            //     message: (value) =>
            //         value.length < 15 ? "Опишите Вашу проблему чуть-чуть по-подробнее пожалуйста ..." : null,
        },
    });

    const handleSubmit = async (values: typeof form.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Письмо из формы обратной связи`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя: ${values.name}`;
            // const line7 = `email: ${values.email}`;
            // const line8 = `Тема письма": ${values.heading}`;
            const line7 = `Контактный номер телефона": ${values.tel}`;
            const line8 = `Сообщение: ${values.message}`;

            await sendMessagePismo(line1, line2, line3, line4, line5, line6, line7, line8);

            notifications.show({
                position: "top-center",
                title: "Письмо отправлено",
                message: `Менеджер ответит Вам в течении дня ! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "lg",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                position: "top-center",
                title: "Что-то пошло не так.",
                message: `Попробуйте проверить Ваше интернет соединение и отправить писмо снова через 1-2 минуты! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "lg",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            form.reset();
        }
    };

    return (
        <Container size="xl" className={classes.container}>
            <Title
                order={2}
                mt="sm"
                mb="xl"
                ta="center"
                className={classes.description}
                style={{ fontFamily: "Nautilus" }}
                c="dark.5"
            >
                Оставьте заявку на{" "}
                <Text component="span" inherit c="blue">
                    бесплатный
                </Text>{" "}
                замер
            </Title>

            <Paper shadow="md" radius={30}>
                <div className={classes.wrapper}>
                    <div
                        className={classes.contacts}
                        // style={{ backgroundImage: `url(${"images/hero-carousel/1.jpg"})` }}
                        style={{ background: "#228be6" }}
                    >
                        <Text fz="lg" fw={700} className={classes.title} c="gray.0" ta="center">
                            Контактная информация
                        </Text>

                        <ContactIconsList mode="get-in-touch" />
                    </div>

                    <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
                        <Text fz="lg" fw={700} className={classes.title}>
                            Заполните все поля:
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                                <TextInput
                                    label="Ваше имя"
                                    placeholder="Ваше имя"
                                    key={form.key("name")}
                                    {...form.getInputProps("name")}
                                />
                                <TextInput
                                    label="Контактный телефон"
                                    placeholder="89876543221"
                                    key={form.key("tel")}
                                    {...form.getInputProps("tel")}
                                />
                                {/* <TextInput
                                    label="Ваш email"
                                    placeholder="Ваш email@mail.ru"
                                    key={form.key("email")}
                                    {...form.getInputProps("email")}
                                /> */}
                            </SimpleGrid>
                            {/* 
                            <TextInput
                                mt="md"
                                label="Тема письма"
                                placeholder="Тема письма"
                                key={form.key("heading")}
                                {...form.getInputProps("heading")}
                            /> */}

                            <Textarea
                                mt="md"
                                label="Ваше сообщение"
                                placeholder="Опишите подробнее что Вы хотели бы узнать..."
                                minRows={3}
                                key={form.key("message")}
                                {...form.getInputProps("message")}
                            />

                            <Group justify="flex-end" mt="md">
                                <Button
                                    id="get-in-touch"
                                    loading={isLoading}
                                    type="submit"
                                    className={classes.control}
                                >
                                    Отправить
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    );
}
