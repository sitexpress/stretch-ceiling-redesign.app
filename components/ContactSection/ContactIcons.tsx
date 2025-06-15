import { Text, ThemeIcon, Stack, rem } from "@mantine/core";
import {
    IconSun,
    IconPhone,
    IconMapPin,
    IconAt,
    IconBrandYoutube,
    IconBrandTelegram,
    IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <ThemeIcon size={40} radius="md" className={classes.icon} bg="dark.6">
                <Icon style={{ width: rem(24), height: rem(24) }} />
            </ThemeIcon>

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    { title: "Email:", description: "family.build@mail.ru", icon: IconAt },
    { title: "Тел:", description: "+7(988)189-65-30", icon: IconPhone },
    { title: "Тел:", description: "+7(918)605-60-58", icon: IconPhone },
    { title: "Адрес:", description: "Сочи, Виноградный переулок, 9 корпус-5", icon: IconMapPin },
    { title: "Часы работы:", description: "8:00 – 18:00", icon: IconSun },
    { title: "Youtube:", description: "sroy-family", icon: IconBrandYoutube },
    { title: "Telegram:", description: "@sroy-family", icon: IconBrandTelegram },
    { title: "Instagram:", description: "@sroy-family", icon: IconBrandInstagram },
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon  key={index} {...item} />);
    return <Stack >{items}</Stack>;
}
