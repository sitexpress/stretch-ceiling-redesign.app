import { AspectRatio, Badge, Group, Title, Text, Container, Button } from "@mantine/core";
import classes from "./MapComponent.module.css";
import Link from "next/link";

type MapComponentType = {
    mode: "main-page" | "contact-page";
};

export default function MapComponent({ mode }: MapComponentType) {
    return mode === "contact-page" ? (
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
                Мы тут
            </Title>

            <AspectRatio ratio={16 / 9} ta="center" p={16}>
                <iframe
                    // src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb2d24f17613f855089c98d6f62d05f8dc80528a84c93f87634db02d7e61282a&amp;source=constructor"
                    // src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=99317594226"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb2d24f17613f855089c98d6f62d05f8dc80528a84c93f87634db02d7e61282a&amp;source=constructor"
                    title="Яндекс карты"
                    // style={{ border: 0, maxWidth: "1100px", height: "auto", borderRadius: "16px" }}
                    style={{ border: 0, maxWidth: "100%", height: "auto", borderRadius: "40px" }}
                />
            </AspectRatio>
        </Container>
    ) : (
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
               Как нас <Text component="span" inherit c="blue">нас</Text> найти? 
            </Title>

            <AspectRatio ratio={16 / 9} ta="center" p={16} >
                <iframe
                    // src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb2d24f17613f855089c98d6f62d05f8dc80528a84c93f87634db02d7e61282a&amp;source=constructor"
                    // src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=99317594226"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb2d24f17613f855089c98d6f62d05f8dc80528a84c93f87634db02d7e61282a&amp;source=constructor"
                    title="Яндекс карты"
                    // style={{ border: 0, maxWidth: "1100px", height: "auto", borderRadius: "16px" }}
                    style={{ border: 0, maxWidth: "100%", height: "auto", borderRadius: "40px" }}
                />
            </AspectRatio>
            {/* <div className={classes.controls}>
                <Link href="/contacts" style={{ margin: "0 auto" }}>
                    <Button className={classes.control} variant="default" size="lg" radius="xl">
                        Подробнее
                    </Button>
                </Link>
            </div> */}
        </Container>
    );
}
