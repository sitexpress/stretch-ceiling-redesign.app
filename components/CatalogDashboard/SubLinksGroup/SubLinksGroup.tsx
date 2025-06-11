// "use client";
// import React from "react";
// // import { SubLinksItemsGroup } from "@/components/CatalogDashboard/SubLinksItemsGroup/SubLinksItemsGroup";
// import { CatalogItemType } from "@/lib/data/catalogData";
// import { useAppDispatch } from "@/lib/utilities/hooks/hooks";
// import {
//     changeCatalogSection,
//     changeSubCatalogSectionComplect,
//     changeSubCatalogSectionItemsComplect,
// } from "@/store/catalog-data-slice";
// import { Box, Collapse, Group, rem, Text, UnstyledButton } from "@mantine/core";
// import { IconChevronRight } from "@tabler/icons-react";
// import Link from "next/link";
// import { useState } from "react";
// import classes from "./SubLinksGroup.module.css";

// interface LinksGroupProps {
//     subLink: CatalogItemType;
//     link: string;
//     mode: "komplektuyshie" | "pvh-polotna" | "profili" | "trekovie-systemy";
//     closeDrawer?: () => void;
// }

// export function SubLinksGroup({ subLink, link, mode, closeDrawer }: LinksGroupProps) {
//     // const hasLinks = Array.isArray(links);
//     const [opened, setOpened] = useState(false);
//     const dispatch = useAppDispatch();

//     // const subCatalogItems =
//     //     mode === "torcevie-zaglushki"
//     //         ? torcevieZaglushkiData.map((item, index) => (
//                 //   <SubLinksItemsGroup
//                 //       key={index}
//                 //       subLink={subCatalogItems}
//                 //       // subOpened={subOpened}
//                 //       // setSubOpened={setSubOpened}
//                 //       link={link}
//                 //       closeDrawer={closeDrawer}
//                 //   />
//     //           ))
//     //         : subLink.map((subCatalogItems, index) => (
//     //               <SubLinksItemsGroup
//     //                   key={index}
//     //                   subLink={subCatalogItems}
//     //                   // subOpened={subOpened}
//     //                   // setSubOpened={setSubOpened}
//     //                   link={link}
//     //                   closeDrawer={closeDrawer}
//     //               />
//     //           ));

//     return (
//         <div>
//             <UnstyledButton
//                 onClick={() => {
//                     setOpened((o) => !o);
//                 }}
//                 className={classes.control}
//             >
//                 <Group justify="space-between" gap={0}>
//                     <Box ml="lg">
//                         <Text size="sm" fw={600}>
//                             <Link
//                                 href={`/catalog/${link}/${subLink.link}`}
//                                 onClick={() => {
//                                     setOpened((o) => o);
//                                     dispatch(changeSubCatalogSectionComplect(subLink.link));
//                                     dispatch(changeSubCatalogSectionItemsComplect(""));
//                                     dispatch(changeCatalogSection(""));
//                                     closeDrawer && closeDrawer();
//                                 }}
//                                 className={classes.my_link}
//                             >
//                                 {subLink.title}
//                             </Link>
//                         </Text>
//                     </Box>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "center",
//                             alignItems: "center",
//                         }}
//                     >
//                         <IconChevronRight
//                             className={classes.chevron}
//                             stroke={1.5}
//                             style={{
//                                 width: rem(16),
//                                 height: rem(16),
//                                 transform: opened ? "rotate(90deg)" : "none",
//                             }}
//                         />
//                     </div>
//                 </Group>
//             </UnstyledButton>
//             {/* <Collapse in={opened}>{subCatalog}</Collapse>
//             <Collapse in={opened}>{subCatalogItems}</Collapse> */}
//         </div>
//     );
// }
