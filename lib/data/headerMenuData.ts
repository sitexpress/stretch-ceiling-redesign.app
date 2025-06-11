// Types
// ----tabs----
import { catalogAndMobileMenuNavLinks } from "@/components/CatalogDashboard/Links/Links";
import { SubCatalogSectionComplectType } from "@/types/catalog-data-types";
import { ReactNode } from "react";

export type MenuType = {
    link: string;
    title: string;
    id: number;
    src: string;
};

export type TabsType = {
    меню: MenuType[];
    // каталог:AllCatalogType[]
    каталог: ReactNode;
};
// ---subcatalogtype----

export type SubCatalogComplectType = {
    id: number;
    title: string;
    src?: string;
    link: SubCatalogComplectType | "";
    dataType: string;
};
export type SubCatalogProfileType = {
    id: number;
    title: string;
    src?: string;
    link: SubCatalogSectionComplectType | "";
    dataType: string;
};
export type SubCatalogPvhType = {
    id: number;
    title: string;
    src?: string;
    link: SubCatalogSectionComplectType | "";
    dataType: string;
};

// Data
export const complectSubCatBlock1: SubCatalogComplectType[] = [
    {
        id: 0,
        title: "img",
        src: "/images/header-drop-down/sub-catalog/torcevaya-zaglushka-300x300.png",
        link: "",
        dataType: "img",
    },
    {
        id: 1,
        title: "ТОРЦЕВЫЕ ЗАГЛУШКИ",
        link: "",
        dataType: "heading",
    },
    {
        id: 2,
        title: "Для световой линии",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "Для ALU карниза",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "Для трековой системы",
        link: "",
        dataType: "text",
    },

    {
        id: 6,
        title: "Для мебели",
        link: "",
        dataType: "text",
    },
    {
        id: 7,
        title: "Для освещения",
        link: "",
        dataType: "text",
    },
];
export const complectSubCatBlock2: SubCatalogComplectType[] = [
    {
        id: 0,
        title: "img",
        src: "/images/header-drop-down/sub-catalog/termolokolca-300x300.jpg",
        link: "",
        dataType: "img",
    },

    {
        id: 2,
        title: "Термоквадраты",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "Термокольцо 4,5-100",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "Термокольцо 105-200",
        link: "",
        dataType: "text",
    },
    {
        id: 5,
        title: "Термокольцо 205-610",
        link: "",
        dataType: "text",
    },
];
export const complectSubCatBlock3: SubCatalogComplectType[] = [
    {
        id: 0,
        title: "img",
        src: "/images/header-drop-down/sub-catalog/magnitnie-reshetki-300x300.jpg",
        link: "",
        dataType: "img",
    },
    {
        id: 1,
        title: "МАГНИТНЫЕ РЕШЁТКИ",
        link: "",
        dataType: "heading",
    },
    {
        id: 2,
        title: "Круглые Ø 100",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "Круглые Ø 125",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "Круглые Ø 150",
        link: "",
        dataType: "text",
    },
    {
        id: 5,
        title: "Прямоуольные",
        link: "",
        dataType: "text",
    },
];
// -----------------------------------------------------------
export const profileSubCatBytype: SubCatalogProfileType[] = [
    {
        id: 1,
        title: "ПРОФИЛИ ПО ТИПУ",
        link: "profili-po-tipu",
        dataType: "heading",
    },
    {
        id: 2,
        title: "ПВХ пластиковый",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "Потолочный профиль",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "Профиль для ткани",
        link: "",
        dataType: "text",
    },
    {
        id: 5,
        title: "Разделительный",
        link: "",
        dataType: "text",
    },
    {
        id: 6,
        title: "Теневой профиль",
        link: "",
        dataType: "text",
    },
    {
        id: 7,
        title: "Парящий профиль",
        link: "",
        dataType: "text",
    },
    {
        id: 8,
        title: "Профиль для ткани",
        link: "",
        dataType: "text",
    },
    {
        id: 9,
        title: "Конструкционный",
        link: "",
        dataType: "text",
    },
    {
        id: 10,
        title: "Световые линии",
        link: "",
        dataType: "text",
    },
    {
        id: 11,
        title: "Профили для трека",
        link: "",
        dataType: "text",
    },
];
export const profileSubCatParsekKraabFlexy: SubCatalogProfileType[] = [
    {
        id: 2,
        title: "Карниз ПК-5",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "ПРОФИЛИ KRAAB",
        link: "profili-kraab",
        dataType: "heading",
    },
    {
        id: 4,
        title: "Потолочный EuroKraab",
        link: "",
        dataType: "text",
    },
    {
        id: 5,
        title: "Теневой EuroKraab",
        link: "",
        dataType: "text",
    },
    {
        id: 6,
        title: "Slott 80 | Черный",
        link: "",
        dataType: "text",
    },
    {
        id: 7,
        title: "Slott 40 | Черный",
        link: "",
        dataType: "text",
    },
    {
        id: 8,
        title: "ПРОФИЛИ FLEXY",
        link: "profili-flexy",
        dataType: "heading",
    },
];
export const profileSubCatLumfer: SubCatalogProfileType[] = [
    {
        id: 1,
        title: "ПРОФИЛЬ LUMFER",
        link: "profili-lumpfer",
        dataType: "heading",
    },
    {
        id: 2,
        title: "LumFer S25 для трека",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "LumFer SK01 Скрытый карниз",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "LumFer BP01 Безрамный",
        link: "",
        dataType: "text",
    },
    {
        id: 5,
        title: "LumFer SV | Cветлячок",
        link: "",
        dataType: "text",
    },
    {
        id: 6,
        title: "LumFer SK02 Скрытый карниз",
        link: "",
        dataType: "text",
    },
];
// -----------------------------------------------------------
export const pvhSubCatBlock1: SubCatalogPvhType[] = [
    {
        id: 1,
        title: "ПОЛОТНА BAUF",
        link: "polotna-bauf",
        dataType: "heading",
    },
    {
        id: 2,
        title: "BAUF 205",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "BAUF 230",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "BAUF 270",
        link: "",
        dataType: "text",
    },
    {
        id: 5,
        title: "ПОЛОТНА MSD",
        link: "polotna-msd",
        dataType: "heading",
    },
    {
        id: 6,
        title: "MSD Classic",
        link: "",
        dataType: "text",
    },
    {
        id: 7,
        title: "MSD Premium",
        link: "",
        dataType: "text",
    },
    {
        id: 8,
        title: "MSD Evolution",
        link: "",
        dataType: "text",
    },
    {
        id: 9,
        title: "ПОЛОТНА TEQTUM",
        link: "polotna-teqtum",
        dataType: "heading",
    },
    {
        id: 10,
        title: "Teqtum KM2",
        link: "",
        dataType: "text",
    },
    {
        id: 11,
        title: "Teqtum EURO",
        link: "",
        dataType: "text",
    },
];
export const pvhSubCatBlock2: SubCatalogPvhType[] = [
    {
        id: 2,
        title: "Galaxy Галактика",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "Butterfly (Бабочки)",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "Chanzhan (Шанжан)",
        link: "",
        dataType: "text",
    },
    {
        id: 5,
        title: "Dream (Кружочки) Lw6",
        link: "",
        dataType: "text",
    },
    {
        id: 6,
        title: "Dream (Кружочки) Lw6",
        link: "",
        dataType: "text",
    },
    {
        id: 7,
        title: "Lumfer 303-305 Mat_Raute",
        link: "",
        dataType: "text",
    },
    {
        id: 8,
        title: "ТКАНЕВЫЕ ПОЛОТНА",
        link: "tkanevie-polotna",
        dataType: "heading",
    },
    {
        id: 9,
        title: "Descor | D-Premium",
        link: "",
        dataType: "text",
    },
];
export const pvhSubCatBlock3: SubCatalogPvhType[] = [
    {
        id: 2,
        title: "Матовые полотна",
        link: "",
        dataType: "text",
    },
    {
        id: 3,
        title: "Сатиновые полотна",
        link: "",
        dataType: "text",
    },
    {
        id: 4,
        title: "Глянцевые полотна",
        link: "",
        dataType: "text",
    },
    {
        id: 6,
        title: "100 | Голубой",
        link: "",
        dataType: "text",
    },
    {
        id: 7,
        title: "110 | Голубой",
        link: "",
        dataType: "text",
    },
    {
        id: 8,
        title: "303 | Белый",
        link: "",
        dataType: "text",
    },
    {
        id: 9,
        title: "347 | Чёрный",
        link: "",
        dataType: "text",
    },
];
// -----------------------------------------------------------
export const tabs: TabsType = {
    меню: [
        { id: 1, link: "/", title: "Главная", src: "/images/catalog/" },
        { id: 2, link: "/portfolio", title: "Портфолио", src: "/images/catalog/" },
        { id: 3, link: "/about", title: "О нас", src: "/images/catalog/" },
        { id: 4, link: "/contacts", title: "Контакты", src: "/images/catalog/" },
    ],
    каталог: catalogAndMobileMenuNavLinks(),
};
