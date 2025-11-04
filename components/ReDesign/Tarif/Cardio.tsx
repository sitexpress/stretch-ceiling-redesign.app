import { Anchor, Badge, Button, Card, Divider, Group, Image, Text } from "@mantine/core";
import classes from "./Cardio.module.css";

const mockdata = {
    image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    title: "Verudela Beach",
    country: "Croatia",
    description:
        "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    badges: [
        { emoji: "☀️", label: "Sunny weather" },
        { emoji: "🦓", label: "Onsite zoo" },
        { emoji: "🌊", label: "Sea" },
        { emoji: "🌲", label: "Nature" },
        { emoji: "🤽", label: "Water sports" },
    ],
};

type BadgeCardType = {
    src: string;
    title: string;
    description: string;
    description1: string;
};

export const BadgeCard = ({ src, title, description, description1 }: BadgeCardType) => {
    return (
        <Card shadow="xl" radius="md" p="xs" className={classes.card}>
            <Card.Section>
                <Image src={src} alt={title} height={250} />
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group justify="center">
                    <Text size="21px" fw={700} pr="sm" pl="sm" mt="lg">
                        {title}
                    </Text>
                </Group>
                <Text size="24px" fz="sm" pr="sm" pl="sm" mt={20} mb="sm" ta="center">
                    {description}
                </Text>
                <Divider />
                <Text fz="md" mt="xs" pr="sm" pl="sm">
                    <Text component="span" fw={700}>
                        Особенности:
                    </Text>{" "}
                    {description1}
                </Text>
            </Card.Section>
            <Group mt="xl">
                <Anchor
                    href="https://max.ru/u/f9LHodD0cOJKFrItttByPcrZPQhDRCemed9leLfCR7gsOHGR95KEgT_742A"
                    w="100%"
                    target="_blank"
                >
                    <Button radius="md" style={{ flex: 1 }} bg="red.6" size="lg" w="100%">
                        Рассчитать стоимость
                    </Button>
                </Anchor>
            </Group>

        </Card>
    );
};
