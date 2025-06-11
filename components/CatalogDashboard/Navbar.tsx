"use client"
import React from 'react'
import classes from "./CatalogDashboard.module.css";
import { Group, ScrollArea, Title } from '@mantine/core';
import Link from 'next/link';
import { catalogAndMobileMenuNavLinks } from './Links/Links';
export default function Navbar() {
  return (
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
  )
}
