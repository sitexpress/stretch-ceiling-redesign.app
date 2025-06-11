import React from "react";
import { BreadcrumbsComponent } from "@/components/Breadcrumbs/BreadcrumbsComponent";
import { catalogAndMobileMenuNavLinks } from "@/components/CatalogDashboard/Links/Links";
import { Container, Group, ScrollArea, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link";
import classes from "./CatalogDashboard.module.css";
import "../../styles/local.fonts/NautilusPompilius.css";
import { TitleComponent } from "./Title";
import Navbar from "./Navbar";

export default function CatalogDashboard({ layout, item }: { layout: React.ReactNode[]; item: React.ReactNode[] }) {
    return layout.length > 0 ? (
        <div className={classes.my_container}>
            <Navbar/>
            <div className={classes.my_workarea_wrapper}>
                <BreadcrumbsComponent />
                <Container fluid mb="100" pt="25">
                    <Title order={3} ta="center" mb="xl" className={classes.title}>
                        <TitleComponent />
                    </Title>
                    <SimpleGrid
                        cols={{ base: 2, sm: 3, md: 3, lg: 4, xl: 6 }}
                        spacing={{ base: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
                        verticalSpacing={{ base: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
                    >
                        {layout}
                    </SimpleGrid>
                </Container>
            </div>
        </div>
    ) : (
        layout.length === 0 && item.length > 0 && (
            <div className={classes.my_container}>
                <nav className={classes.navbar}>
                    <div className={classes.header}>
                        <Group justify="center">
                            <Link href="/catalog" className={classes.my_header_links}>
                                <Title order={3} ta="center">
                                    Каталог
                                </Title>
                            </Link>
                        </Group>
                    </div>
                    <ScrollArea className={classes.links}>
                        <div className={classes.linksInner}>{catalogAndMobileMenuNavLinks()}</div>
                    </ScrollArea>
                </nav>
                <div className={classes.my_workarea_wrapper}>


                    <BreadcrumbsComponent />
                    <Container fluid mb="100" pt="25">
                        <Title order={3} ta="center" mb="xl" pt="xs" pb="xs" className={classes.title}>
                            <TitleComponent />
                        </Title>
                        <SimpleGrid
                            cols={{ base: 1 }}
                        >
                            {item}
                        </SimpleGrid>
                    </Container>
                </div>
            </div>
        )
    );
}
