import { IconCircleCheck, IconCircleDashed, IconHeart } from "@tabler/icons-react";
import {
    ActionIcon,
    Badge,
    Button,
    Card,
    Flex,
    Group,
    Image,
    List,
    NumberFormatter,
    NumberInput,
    Text,
    ThemeIcon,
} from "@mantine/core";
import classes from "./BadgeCard.module.css";
import {
    BadgesType,
    CardDataType,
    ImageType,
    OptionsType,
    PortfolioCarousel,
} from "../PortfolioCarousel/PortfolioCarousel";
import { Carousel } from "@mantine/carousel";
import controlClass from "./Controls.module.css";
import { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import { log } from "console";

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
    images: ImageType[];
    title: string;
    options: OptionsType[];
    price: number;
    date: string;
    badges: BadgesType[];
};

export const BadgeCard: React.FC<BadgeCardType> = ({ images, title, options, price, date, badges }) => {
    const [modalMode, setModalMode] = useState<"callBack" | "measurer" | "want" | "">("");
    const [isOpen, setIsOpen] = useState(false);
    const [project, setProject] = useState("");

    const callBackHandler = (title: string) => {
        setModalMode("want");
        setProject(title);
        setIsOpen(true);
   
    };
    
    const features = badges.map((badge) => (
        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
            {badge.label}
        </Badge>
    ));

    if(isOpen) { return <ModalComponent isOpen={isOpen} modalMode={modalMode} setIsOpen={setIsOpen} project={project}/>}
    return (
        <Carousel.Slide>
            <Card withBorder radius="md" p="md" mr={10} className={classes.card}>
                <Card.Section>
                    <Carousel 
                    withIndicators 
                    height={600} 
                    slideGap="sm"  
                    classNames={controlClass}
                    withControls={false}
                    nextControlIcon={false}
                    draggable={false}
                    >
                        {images.map((item, i) => (
                            <Carousel.Slide key={i}>
                                {item.src ? (
                                    <Image src={item.src} alt={title} height={300} />
                                ) : (
                                    <Carousel.Slide key={item.url} style={{zIndex: 1000}}>
                                        <Flex justify="center" align="center">
                                            <iframe
                                                src={item.url}
                                                title="Строй Family"
                                                height={600}
                                                allowFullScreen
                                                frameBorder="0"
                                                // allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                            ></iframe>
                                            <script src="https://player.vimeo.com/api/player.js"></script>
                                        </Flex>

                                    </Carousel.Slide>
                                )}
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                </Card.Section>

                <Card.Section className={classes.section} mt="md">
                    <Group justify="apart">
                        <Text fz="lg" fw={500}>
                            {title}
                        </Text>
                        <Badge size="sm" variant="light" c="red">
                            - <NumberFormatter value={5} suffix=" %" />
                        </Badge>
                    </Group>
                    <Text fz="sm" mt="xs">
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    <IconCircleCheck size={16} />
                                </ThemeIcon>
                            }
                        >
                            {options.map((option, i) => (
                                <List.Item key={i}>{option.opt}</List.Item>
                            ))}
                        </List>
                    </Text>
                </Card.Section>
                <Card.Section className={classes.section} mt="sm" >
                    <Group gap={30}>
                        <div>
                            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                                {price} ₽
                            </Text>
                            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                                проект под ключ
                            </Text>
                        </div>

                        <Button radius="xl" style={{ flex: 1 }}
                        onClick={() => callBackHandler(title)}
                        >
                            Хочу также
                        </Button>
                    </Group>
                </Card.Section>
            </Card>
        </Carousel.Slide>
    );
};
