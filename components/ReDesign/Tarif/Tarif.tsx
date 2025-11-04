import AnimateEnhanced from "@/components/Animate/Animate";
import { Container, Flex, Group, SimpleGrid, Text, Title } from "@mantine/core";
import { IconCookie, IconGauge, IconUser } from "@tabler/icons-react";
import { BadgeCard } from "./Cardio";
import classes from "./Tarif.module.css";

export const MOCKDATA = [
    {
        src: "./images/tarif/3.jpg",
        icon: IconGauge,
        title: "Ремонт под сдачу",
        description:
            "Повышает рыночную привлекательность помещения, что позволяет запросить более высокую арендную ставку.",
        description1:
            "Позволяет получить максимум отдачи: помещение становится более привлекательным для клиентов, что ведет к повышению арендного дохода и быстрой компенсации первоначальных вложений.",
    },
    {
        src: "./images/tarif/2.jpg",
        icon: IconUser,
        title: "Ремонт под продажу",
        description: "Ваш объект становится визуально привлекательнее для покупателей и выгодно отличается от других.",
        description1:
            "С помощью косметического ремонта, который требует минимальных вложений и выполняется в сжатые сроки.",
    },
    {
        src: "./images/tarif/1.jpg",
        icon: IconCookie,
        title: "Ремонт под ключ для себя",
        description:
            "Мы создадим пространство, которое будет работать именно на вас, учитывая все ваши привычки и пожелания.",
        description1: "Меняем не только внешний вид (перепланировка, интерьер), но и содержание и энергоэффективность.",
    },
];

interface FeatureProps {
    src: string;
    icon: React.FC<any>;
    title: string;
    description: string;
    description1: string;
}

export function Feature({ src, icon: Icon, title, description, description1 }: FeatureProps) {
    return <BadgeCard src={src} title={title} description={description} description1={description1} />;
}

export const Tarif = () => {
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Group bg="gray.1">
            <Container size="xl" className={classes.wrapper}>
                <AnimateEnhanced animation="slideInLeft" duration="1s" trigger="onScroll" threshold={0.2}>
                    <Title order={2} ta="center" className={classes.description} c="dark.5" mb={50}>
                        Наши{" "}
                        <Text component="span" inherit c="red.6">
                            тарифы
                        </Text>
                    </Title>
                </AnimateEnhanced>

                <SimpleGrid
                    mt={60}
                    cols={{ base: 1, sm: 2, md: 3 }}
                    spacing={{ base: "xl", md: 50 }}
                    verticalSpacing={{ base: "xl", md: 50 }}
                >
                    {features}
                </SimpleGrid>

                <Flex direction="column" mt="xl" p="sm"  style={{border: "1px solid #adb5bd", borderRadius:20}}>
                <Text size="xl"  ta="center">
                    С 2014 года мы создаем стильные и уютные интерьеры, преображая обычные помещения в пространства
                    вашей мечты. Выполняем ремонт любой сложности «под ключ»: от демонтажа и черновых работ до
                    разработки и изготовления мебели. Наши преимущества: Ремонт в новостройке: Примем квартиру от
                    застройщика, выявим все недочеты и учтем усадку дома, чтобы ваш ремонт оставался безупречным годами.
                </Text>
                <Text size="xl" mt="lg" ta="center">
                    Ремонт во вторичном жилье: Проведем аккуратный демонтаж без шума и пыли, с последующим вывозом
                    мусора.
                </Text>
                <Text size="xl" mt="lg" ta="center">
                    Выгодные цены: прямые договоры с поставщиками гарантируют лучшие цены на материалы и отсутствие
                    задержек.
                </Text>
                </Flex>


            </Container>
        </Group>
    );
};
