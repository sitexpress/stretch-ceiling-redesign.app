"use client";
import React from "react";
import classes from "@/components/Portfolio/ImagePortfolioCardsGrid/ImagePortfolioCardsGrid.module.css";
import { Anchor, Avatar, Badge, Group, Table, Text, Title } from "@mantine/core";

const data = [
    {
        avatar: "images/team/5.jpg",
        name: "Анатолий",
        job: "Руководитель",
        email: "family.build@mail.ru",
        phone: "+7 (988) 189 65 30",
    },
    {
        avatar: "images/team/4.jpg",
        name: "Дмитрий",
        job: "Технолог",
        email: "family.build@mail.ru",
        phone: "+7 (918) 605 60 58",
    },
    {
        avatar: "images/team/1.jpg",
        name: "Виктор",
        job: "Ведущий специалист по техническому надзору",
        email: "-",
        phone: "-",
    },
    {
        avatar: "images/team/6.jpg",
        name: "Татьяна",
        job: "Менеджер",
        email: "-",
        phone: "-",
    },
    {
        avatar: "images/team/2.jpg",
        name: "Дмитрий",
        job: "Монтажник",
        email: "-",
        phone: "-",
    },
    {
        avatar: "images/team/3.jpg",
        name: "Елена",
        job: "Дизайнер",
        email: "-",
        phone: "-",
    },
    {
        avatar: "images/team/9.jpg",
        name: "Иван",
        job: "Монтажник",
        email: "-",
        phone: "-",
    },
    {
        avatar: "images/team/7.jpg",
        name: "Валентин",
        job: "Дизайнер по освещению",
        email: "-",
        phone: "-",
    },
];

const jobColors: Record<string, string> = {
    engineer: "blue",
    manager: "cyan",
    designer: "pink",
};

export default function UsersTable() {
    const rows = data.map((item, index) => (
        <Table.Tr key={index}>
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={30} src={item.avatar} radius={30} />
                    <Text fz="sm" fw={500}>
                        {item.name}
                    </Text>
                </Group>
            </Table.Td>

            <Table.Td>
                <Badge color={jobColors[item.job.toLowerCase()]} variant="light">
                    {item.job}
                </Badge>
            </Table.Td>
            <Table.Td>
                <Anchor component="button" size="sm">
                    {item.email}
                </Anchor>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.phone}</Text>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <Group justify="center" pl="20px" pt="sm"  bg="gray.1">
                <Title order={3} mt="sm" ta="center">
                    Коллектив:
                </Title>
            </Group>
            <Table.ScrollContainer minWidth={800} pl="xl" pr="xl"  bg="gray.1"> 
                <Table verticalSpacing="md" horizontalSpacing="xl">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Работник</Table.Th>
                            <Table.Th>Позиция</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Контактный телефон</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </div>
    );
}
