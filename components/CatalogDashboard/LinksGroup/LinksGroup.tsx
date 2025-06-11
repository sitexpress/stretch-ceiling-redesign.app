"use client";
import React from "react";
// import { SubLinksGroup } from "@/components/CatalogDashboard/SubLinksGroup/SubLinksGroup";
import { Box, Collapse, Group, rem, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import classes from "./LinksGroup.module.css";
import {
    komplektuyshieCatalogData,
    profiliCatalogData,
    pvhPolotnaCatalogData,
    trekovieSystemyCatalogData,
    profilRaundCatalogData,
} from "@/lib/data/localDataList";
interface LinksGroupProps {
    title: string;
    link: string;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
    closeDrawer?: () => void;
}

export function LinksGroup({ title, link, initiallyOpened, closeDrawer, links }: LinksGroupProps) {
    const [opened, setOpened] = useState(initiallyOpened || false);
    let items: any = [];

    if (link === "komplektuyshie") {
        items.splice(0, items.length);
        items = komplektuyshieCatalogData.map(
            (subLink: any, index: number) =>
                subLink.title !== "img" && (
                    <Group key={index} gap={5} onClick={closeDrawer}>
                        <Box ml="xl" mb="xs">
                            <Text size="sm" fw={500}>
                                <Link
                                    href={`/catalog/komplektuyshie/${subLink.link}`}
                                    className={classes.my_link}
                                    onClick={() => setOpened(false)}
                                >
                                    {subLink.title}
                                </Link>
                            </Text>
                        </Box>
                    </Group>
                )
        );
    }

    if (link === "pvh-polotna") {
        items.splice(0, items.length);
        items = pvhPolotnaCatalogData.map(
            (subLink: any, index: number) =>
                subLink.title !== "img" && (
                    <Group key={index} gap={10} onClick={closeDrawer}>
                        <Box ml="xl" mb="xs">
                            <Text size="sm" fw={500}>
                                <Link href={`/catalog/pvh-polotna/${subLink.link}`} className={classes.my_link}>
                                    {subLink.title}
                                </Link>
                            </Text>
                        </Box>
                    </Group>
                )
        );
    }

    if (link === "profili") {
        items.splice(0, items.length);
        items = profiliCatalogData.map(
            (subLink: any, index: number) =>
                subLink.title !== "img" && (
                    <Group key={index} gap={5} onClick={closeDrawer}>
                        <Box ml="xl" mb="xs">
                            <Text size="sm" fw={500}>
                                <Link href={`/catalog/profili/${subLink.link}`} className={classes.my_link}>
                                    {subLink.title}
                                </Link>
                            </Text>
                        </Box>
                    </Group>
                )
        );
    }

    if (link === "trekovie-systemy") {
        items.splice(0, items.length);
        items = trekovieSystemyCatalogData.map(
            (subLink: any, index: number) =>
                subLink.title !== "img" && (
                    <Group key={index} gap={5} onClick={closeDrawer}>
                        <Box ml="xl" mb="xs">
                            <Text size="sm" fw={500}>
                                <Link href={`/catalog/trekovie-systemy/${subLink.link}`} className={classes.my_link}>
                                    {subLink.title}
                                </Link>
                            </Text>
                        </Box>
                    </Group>
                )
        );
    }

    // if (link === "montazhnie-raboti") {
    //     items.splice(0, items.length);
    //     items = montazhnieRabotiCatalogData.map(
    //         (subLink: any, index: number) =>
    //             subLink.title !== "img" && (
    //                 <Group key={index} gap={5} onClick={closeDrawer}>
    //                     <Box ml="xl" mb="xs">
    //                         <Text size="sm" fw={500}>
    //                             <Link href={`/catalog/montazhnie-raboti/${subLink.link}`} className={classes.my_link}>
    //                                 {subLink.title}
    //                             </Link>
    //                         </Text>
    //                     </Box>
    //                 </Group>
    //             )
    //     );
    // }

    if (link === "profil-raund") {
        items.splice(0, items.length);
        items = profilRaundCatalogData.map(
            (subLink: any, index: number) =>
                subLink.title !== "img" && (
                    <Group key={index} gap={5} onClick={closeDrawer}>
                        <Box ml="xl" mb="xs">
                            <Text size="sm" fw={500}>
                                <Link href={`/catalog/profil-raund/${subLink.link}`} className={classes.my_link}>
                                    {subLink.title}
                                </Link>
                            </Text>
                        </Box>
                    </Group>
                )
        );
    }

    return (
        <div>
            <UnstyledButton
                onClick={() => {
                    setOpened((o) => !o);
                }}
                className={classes.control}
            >
                <Group justify="space-between" gap={0}>
                    <Box ml="xs">
                        <Text size="md" fw={700}>
                            <Link
                                href={`/catalog/${link}`}
                                onClick={() => {
                                    setOpened((o) => o);
                                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                    closeDrawer && closeDrawer();
                                }}
                                className={classes.my_link}
                            >
                                {title}
                            </Link>
                        </Text>
                    </Box>
                    {link !== "montazhnie-raboti" && (
                        <IconChevronRight
                            className={classes.chevron}
                            stroke={1.5}
                            style={{
                                width: rem(16),
                                height: rem(16),
                                transform: opened ? "rotate(90deg)" : "none",
                            }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            <Collapse in={opened}>{items}</Collapse>
        </div>
    );
}

// -------------------------------------------------------------------------------------------------------------------


// "use client";
// import React from "react";
// import { SubLinksGroup } from "@/components/CatalogDashboard/SubLinksGroup/SubLinksGroup";
// import { catalogRTK } from "@/lib/data/catalogData";
// import { Box, Collapse, Group, rem, Text, UnstyledButton } from "@mantine/core";
// import { IconChevronRight } from "@tabler/icons-react";
// import Link from "next/link";
// import { useState } from "react";
// import classes from "./LinksGroup.module.css";

// interface LinksGroupProps {
//     title: string;
//     link: string;
//     initiallyOpened?: boolean;
//     links?: { label: string; link: string }[];
//     closeDrawer?: () => void;
// }

// export function LinksGroup({ title, link, initiallyOpened, closeDrawer, links }: LinksGroupProps) {
//     const [opened, setOpened] = useState(initiallyOpened || false);

//     const items = (
//         link === "komplektuyshie"
//             ? catalogRTK["komplektuyshie"]
//             : link === "pvh-polotna"
//               ? catalogRTK["pvh-polotna"]
//               : link === "profili"
//                 ? catalogRTK["profili"]
//                 : link === "montazhnie-raboti"
//                   ? catalogRTK["montazhnie-raboti"]
//                   : link === "trekovie-systemy"
//                     ? catalogRTK["trekovie-systemy"]
//                     : []
//     ).map((subcatalogArrays, index) =>
//         subcatalogArrays.map(
//             (subLink, index) =>
//                 subLink.id !== 0 && (
//                     <SubLinksGroup key={index} subLink={subLink} link={link} closeDrawer={closeDrawer} />
//                 )
//         )
//     );

//     return (
//         <div>
//             <UnstyledButton
//                 onClick={() => {
//                     setOpened((o) => !o);
//                 }}
//                 className={classes.control}
//             >
//                 <Group justify="space-between" gap={0}>
//                     <Box ml="xs">
//                         <Text size="md" fw={700}>
//                             <Link
//                                 href={`/catalog/${link}`}
//                                 onClick={() => {
//                                     setOpened((o) => o);
//                                     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//                                     closeDrawer && closeDrawer();
//                                 }}
//                                 className={classes.my_link}
//                             >
//                                 {title}
//                             </Link>
//                         </Text>
//                     </Box>
//                     <IconChevronRight
//                         className={classes.chevron}
//                         stroke={1.5}
//                         style={{
//                             width: rem(16),
//                             height: rem(16),
//                             transform: opened ? "rotate(90deg)" : "none",
//                         }}
//                     />
//                 </Group>
//             </UnstyledButton>
//             <Collapse in={opened}>{items}</Collapse>
//         </div>
//     );
// }

// if (link === "komplektuyshie") {
//     items.splice(0, items.length);
//     items = komplektuyshieCatalogData.map(
//         (subLink: any, index: number) =>
//             subLink.id !== 0 && (
//                 <SubLinksGroup key={index} subLink={subLink} link={link} closeDrawer={closeDrawer} mode="komplektuyshie" />
//             )
//     );
// }

// if (link === "pvh-polotna") {
//     items.splice(0, items.length);
//     items = pvhPolotnaCatalogData.map(
//         (subLink: any, index: number) =>
//             subLink.id !== 0 && (
//                 <SubLinksGroup key={index} subLink={subLink} link={link} closeDrawer={closeDrawer} mode="pvh-polotna"/>
//             )
//     );
// }

// if (link === "profili") {
//     items.splice(0, items.length);
//     items = profiliCatalogData.map(
//         (subLink: any, index: number) =>
//             subLink.id !== 0 && (
//                 <SubLinksGroup key={index} subLink={subLink} link={link} closeDrawer={closeDrawer} mode="profili"/>
//             )
//     );
// }

// if (link === "trekovie-systemy") {
//     items.splice(0, items.length);
//     items = trekovieSystemyCatalogData.map(
//         (subLink: any, index: number) =>
//             subLink.id !== 0 && (
//                 <SubLinksGroup key={index} subLink={subLink} link={link} closeDrawer={closeDrawer} mode="trekovie-systemy"/>
//             )
//     );
// }
