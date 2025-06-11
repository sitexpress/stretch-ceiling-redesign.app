// "use client";
// import React from "react";
// import { catalogRTK, SubCatalogType } from "@/lib/data/catalogData";
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
// import classes from "./SubLinksItemsGroup.module.css";

// interface LinksGroupProps {
//     subLink: SubCatalogType;
//     link: string;
//     closeDrawer?: () => void;
// }

// export function SubLinksItemsGroup({ subLink, link, closeDrawer }: LinksGroupProps) {
//     const [opened, setOpened] = useState(false);
//     const dispatch = useAppDispatch();

//     const subCatalogItems =
//         subLink.title === "ПВХ пластиковый"
//             ? subLink.subCatalogItems &&
//               catalogRTK["profili"][0].map(
//                   (profiliArr) =>
//                       profiliArr.subCatalogItems &&
//                       profiliArr.subCatalogItems.map(
//                           (profiliPoTipuItems, index) =>
//                               profiliPoTipuItems.byType === "ПВХ пластиковый" && (
//                                   <Link
//                                       onClick={closeDrawer}
//                                       className={classes.link}
//                                       href={`/catalog/profili/profili-po-tipu/${profiliArr.link}`}
//                                       key={index}
//                                       // onClick={(event) => event.preventDefault()}
//                                   >
//                                       {profiliPoTipuItems.title}
//                                   </Link>
//                               )
//                       )
//               )
//             : subLink.title === "Теневой профиль"
//               ? subLink.subCatalogItems &&
//                 catalogRTK["profili"][0].map(
//                     (profiliArr) =>
//                         profiliArr.subCatalogItems &&
//                         profiliArr.subCatalogItems.map(
//                             (profiliPoTipuItems, index) =>
//                                 profiliPoTipuItems.byType === "Теневой профиль" && (
//                                     <Link
//                                         onClick={closeDrawer}
//                                         className={classes.link}
//                                         href={`/catalog/profili/profili-po-tipu/${profiliArr.link}`}
//                                         key={index}
//                                         // onClick={(event) => event.preventDefault()}
//                                     >
//                                         {profiliPoTipuItems.title}
//                                     </Link>
//                                 )
//                         )
//                 )
//               : subLink.title === "Парящий профиль"
//                 ? subLink.subCatalogItems &&
//                   catalogRTK["profili"][0].map(
//                       (profiliArr) =>
//                           profiliArr.subCatalogItems &&
//                           profiliArr.subCatalogItems.map(
//                               (profiliPoTipuItems, index) =>
//                                   profiliPoTipuItems.byType === "Парящий профиль" && (
//                                       <Link
//                                           onClick={closeDrawer}
//                                           className={classes.link}
//                                           href={`/catalog/profili/profili-po-tipu/${profiliArr.link}`}
//                                           key={index}
//                                           // onClick={(event) => event.preventDefault()}
//                                       >
//                                           {profiliPoTipuItems.title}
//                                       </Link>
//                                   )
//                           )
//                   )
//                 : subLink.title === "Конструкционный"
//                   ? subLink.subCatalogItems &&
//                     catalogRTK["profili"][0].map(
//                         (profiliArr) =>
//                             profiliArr.subCatalogItems &&
//                             profiliArr.subCatalogItems.map(
//                                 (profiliPoTipuItems, index) =>
//                                     profiliPoTipuItems.byType === "Конструкционный" && (
//                                         <Link
//                                             onClick={closeDrawer}
//                                             className={classes.link}
//                                             href={`/catalog/profili/profili-po-tipu/${profiliArr.link}`}
//                                             key={index}
//                                             // onClick={(event) => event.preventDefault()}
//                                         >
//                                             {profiliPoTipuItems.title}
//                                         </Link>
//                                     )
//                             )
//                     )
//                   : subLink.title === "Световые линии"
//                     ? subLink.subCatalogItems &&
//                       catalogRTK["profili"][0].map(
//                           (profiliArr) =>
//                               profiliArr.subCatalogItems &&
//                               profiliArr.subCatalogItems.map(
//                                   (profiliPoTipuItems, index) =>
//                                       profiliPoTipuItems.byType === "Световые линии" && (
//                                           <Link
//                                               onClick={closeDrawer}
//                                               className={classes.link}
//                                               href={`/catalog/profili/profili-po-tipu/${profiliArr.link}`}
//                                               key={index}
//                                               // onClick={(event) => event.preventDefault()}
//                                           >
//                                               {profiliPoTipuItems.title}
//                                           </Link>
//                                       )
//                               )
//                       )
//                     : subLink.title === "Карниз"
//                       ? subLink.subCatalogItems &&
//                         catalogRTK["profili"][0].map(
//                             (profiliArr) =>
//                                 profiliArr.subCatalogItems &&
//                                 profiliArr.subCatalogItems.map(
//                                     (profiliPoTipuItems, index) =>
//                                         profiliPoTipuItems.byType === "Карниз" && (
//                                             <Link
//                                                 onClick={closeDrawer}
//                                                 className={classes.link}
//                                                 href={`/catalog/profili/profili-po-tipu/${profiliArr.link}`}
//                                                 key={index}
//                                                 // onClick={(event) => event.preventDefault()}
//                                             >
//                                                 {profiliPoTipuItems.title}
//                                             </Link>
//                                         )
//                                 )
//                         )
//                       : subLink.title === "Адаптеры" &&
//                         subLink.subCatalogItems &&
//                         catalogRTK["profili"][0].map(
//                             (profiliArr) =>
//                                 profiliArr.subCatalogItems &&
//                                 profiliArr.subCatalogItems.map(
//                                     (profiliPoTipuItems, index) =>
//                                         profiliPoTipuItems.byType === "Карниз" && (
//                                             <Link
//                                                 onClick={closeDrawer}
//                                                 className={classes.link}
//                                                 href={`/catalog/profili/profili-po-tipu/${profiliArr.link}`}
//                                                 key={index}
//                                                 // onClick={(event) => event.preventDefault()}
//                                             >
//                                                 {profiliPoTipuItems.title}
//                                             </Link>
//                                         )
//                                 )
//                         );

//     return (
//         <div>
//             <UnstyledButton
//                 onClick={() => {
//                     setOpened((o) => !o);
//                 }}
//                 className={classes.control}
//             >
//                 <Group justify="space-between" gap={0}>
//                     <Box ml="xl">
//                         <Text size="xs" fw={500}>
//                             <Link
//                                 href={`/catalog/profili/profili-po-tipu/${subLink.link}/`}
//                                 onClick={() => {
//                                     setOpened((o) => o);
//                                     dispatch(changeSubCatalogSectionItemsComplect(subLink.link));
//                                     dispatch(changeSubCatalogSectionComplect(""));
//                                     dispatch(changeCatalogSection(""));
//                                     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
//             <Collapse in={opened}>{subCatalogItems}</Collapse>
//         </div>
//     );
// }
