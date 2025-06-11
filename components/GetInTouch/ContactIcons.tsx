import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";
import React from "react";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title">, ModeProps {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

interface ModeProps {
    mode: "calculation-dashboard" | "get-in-touch";
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon style={{ width: rem(24), height: rem(24), color: "#f8f9fa" }} />
            </Box>

            <div>
                <Text size="xs"  className={classes.title}  c="gray.0">
                    {title}
                </Text>
                <Text className={classes.description} fw={700}  c="gray.0">
                    {description}
                </Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    { title: "Email:", description: "family.build@mail.ru", icon: IconAt },
    { title: "Тел:", description: "+7(988)189-65-30", icon: IconPhone },
    { title: "Тел:", description: "+7(918)605-60-58", icon: IconPhone },
    { title: "Адрес:", description: "Сочи, Виноградный переулок, 9 корпус-5", icon: IconMapPin },
    { title: "Рабочие часы:", description: "8:00 – 18:00 Работаем без выходных", icon: IconSun },
];

type ContactIconsListType = {
    mode: "calculation-dashboard" | "get-in-touch";
};

export function ContactIconsList({ mode }: ContactIconsListType) {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} mode={mode} {...item}  />);
    return <Stack>{items}</Stack>;
}
