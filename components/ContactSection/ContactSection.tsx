import { Title, Container, Text, UnstyledButton, Overlay, SimpleGrid, Group, Badge } from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactSection.module.css";

const categories = [
    {
        label: "Главная",
        image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
        label: "Портфолио",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    },
    {
        label: "О нас",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
];

export default function FaqWithHeader() {
    const items = categories.map((category) => (
        <UnstyledButton
            style={{ backgroundImage: `url(${category.image})` }}
            className={classes.categoryCard}
            key={category.label}
        >
            <Overlay color="#000" opacity={0.6} zIndex={1} />
            <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
                {category.label}
            </Text>
        </UnstyledButton>
    ));

    return (
        <Container className={classes.wrapper} size="lg" pt="80px">
            <Group justify="center">
                <Badge variant="filled" size="lg" mb="50px">
                    Всегда на связи
                </Badge>
            </Group>

            <div className={classes.header}>
                <div>
                    {/* <Title className={classes.title}>Как и где можно нас найти:</Title> */}
                    <Title className={classes.titleOverlay} role="presentation" style={{ fontFamily: "Nautilus" }}>
                        Строй Family
                    </Title>
                </div>

                <div className={classes.contact}>
                    <Text size="xl" fw={500} className={classes.contactTitle}>
                        Contact us
                    </Text>

                    <ContactIconsList />
                </div>
            </div>

            <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
        </Container>
    );
}
