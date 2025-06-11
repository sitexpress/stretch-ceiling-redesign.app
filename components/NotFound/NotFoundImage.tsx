import { Button, Container, Image, SimpleGrid, Text, Title } from "@mantine/core";
import classes from "./NotFoundImage.module.css";
import image from "/public/images/not-found/not.png";

export function NotFoundImage() {
    return (
        <Container className={classes.root} mt={150}>
            <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
                <Image src={image.src} className={classes.mobileImage} />
                <div>
                    <Title className={classes.title}>Что-то не так...</Title>
                    <Text size="lg">
                        Страница, которую вы пытаетесь открыть, не существует. Возможно, вы ошиблись в адресе, или
                        страница была перемещена по другому адресу.
                    </Text>
                    <Button href="/" component="a" variant="outline" size="md" mt="xl" className={classes.control}>
                        Вернуться на главную
                    </Button>
                </div>
                <Image src={image.src} className={classes.desktopImage} />
            </SimpleGrid>
        </Container>
    );
}
