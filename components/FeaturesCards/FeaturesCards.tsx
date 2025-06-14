"use client";
import React from "react";
// import { catalogRTK } from "@/lib/data/catalogData";
import { Card, Container, Image, SimpleGrid, Text, Title } from "@mantine/core";
import classes from "./FeaturesCards.module.css";
import { allCatalogData } from "@/lib/data/localDataList";

export function FeaturesCards() {
    const features = allCatalogData.map((catalogItems: any, i: number) => (
        <div key={i}>
            <Card className={classes.card} radius="xl" padding="0" component="a" href={`/catalog/${catalogItems.link}`}>
                <Image
                    src={catalogItems.src}
                    width="200"
                    height="200"
                    alt={catalogItems.title}
                    className={classes.img_catalog}
                    // priority={true}
                />
            </Card>
            <Text fz="sm" c="dimmed" mt="sm" ta="center">
                {catalogItems.title}
            </Text>
        </div>
    ));

    return (
        <div className={classes.container}>
            <Title order={2} mt="sm" mb="xl" ta="center" className={classes.description} c="dark.5">
                Комплектующие для{" "}
                <Text component="span" inherit c="red.6">
                    дизайнеров
                </Text>{" "}
                и партнеров.
            </Title>

            <SimpleGrid cols={{ base: 2, xs: 3, sm: 3, md: 4, lg: 5, xl: 5 }} spacing="xl">
                {features}
            </SimpleGrid>
        </div>
    );
}
