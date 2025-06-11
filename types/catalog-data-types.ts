export type CatalogSectionType =
    | "komplektuyshie"
    | "pvh-polotna"
    | "profili"
    | "montazhnie-raboti"
    | "trekovie-systemy"
    | "all"
    | "";

export type SubCatalogSectionComplectType =
    | "torcevie-zaglushki"
    | "platformy"
    | "obvod-dlya-trub"
    | "zakladnie"
    | "magnitnie-reshetki"
    | "polotna-bauf"
    | "polotna-msd"
    | "polotna-teqtum"
    | "tkanevie-polotna"
    | "polotna-lumfer"
    | "profili-po-tipu"
    | "profili-alform"
    | "profili-kraab"
    | "profili-flexy"
    | "profili-lumpfer"
    | "profili-bizon"
    | "profili-ioshka"
    | "trekovie-systemy-lumfer-track-23-48v"
    | "trekovie-systemy-lumfer-track-25-220v"
    | "trekovie-systemy-denkirs"
    | "trekovie-systemy-st-luce"
    | "";

export type SubCatalogSectionItemsComplectType =
    | "dlya-svetovoy-linii"
    | "dlya-karnizov"
    | "dlya-adapterov"
    | "pvh-plasticovy"
    | "konstrurcionny"
    | "tenevoy"
    | "paryashy"
    | "svetovie-liniy"
    | "karniz"
    | "adaptery"
    | "";

export type ItemPageType =
    // --- trekovie-systemy ---
    // Track 23
    | "lumfer-track-23-48v-cherny"
    | "block-pitania-track-23-100w-48v"
    | "block-pitania-track-23-200w-48v"
    | "priamoy-connector-track-23-200w-48v"
    | "gibkiy-connector-track-23-200w-48v"
    | "svetilnik-track-23-48V-18W-36-4000k"
    | "svetilnik-track-23-48V-10w-120-4000k-300x22x45mm"
    | "svetilnik-track-23-48V-20w-120-4000k-600x22x45mm"
    | "svetilnik-track-23-48V-30w-120-4000k-900x22x45mm"
    // Track 25
    | "lumfer-track-25-220V-cherny"
    | "connector-pitania-track-25-220v"
    | "priamoy-connector-track-25-220v"
    | "gibkiy-connector-track-25-220v"
    | "svetilnik-track-25-220V-9w-24-4000k-220x25x41mm"
    | "svetilnik-track-25-220V-9w-120-4000k-220x25x41mm"
    | "svetilnik-track-25-220V-18w-120-4000k-410x25x41mm"
    | "svetilnik-track-25-220V-27w-120-4000k-600x25x41mm"
    // Denkirs
    | "denkirs-tr1001-wh-bely-1m"
    | "denkirs-tr1001-bk-cherny-1m"
    | "denkirs-tr1002-wh-bely-2m"
    | "denkirs-tr1002-bk-cherny-2m"
    | "denkirs-tr1003-wh-bely-3m"
    | "denkirs-tr1003-bk-cherny-3m"
    | "torcevoi-provod-pitania-denkirs-tr1100-wh-bely"
    | "torcevoi-provod-pitania-denkirs-tr1100-bk-cherny"
    | "priamoy-connector-denkirs-tr1101-wh-bely"
    | "priamoy-connector-denkirs-tr1101-bk-cherny"
    | "l-connector-denkirs-TR1102-wh-bely"
    | "l-connector-denkirs-TR1102-bk-cherny"
    | "t-connector-denkirs-TR1103-wh-bely"
    | "t-connector-denkirs-TR1103-bk-cherny"
    | "x-connector-denkirs-TR1104-wh-bely"
    | "x-connector-denkirs-TR1104-bk-cherny"
    | "solid-koper-dk6452-bk-135мм-d60-220V-led-4000k-15w-ip20-cherny-aluminum"
    | "solid-koper-dk6451-bk-135мм-d60-220v-led-3000k-15w-ip20-cherny-aluminum"
    | "solid-koper-dk6453-bk-145мм-d60-220v-led-3000k-24w-ip20-cherny-aluminum"
    | "solid-koper-dk6454-bk-145мм-d60-220v-led-4000k-24w-ip20-cherny-aluminum"
    | "solid-koper-dk6202-bg-zolotoy-cherny-220v"
    | "solid-koper-dk6210-bg-zolotoy-cherny-220v"
    | "solid-koper-dk6060-bk-zolotoy-cherny-220v"
    | "solid-koper-dk6060-bk-zolotoy-bely-220v"

    // ST Luce
    | "shinoprovod-skyline-220-st-luce-1m-cherny"
    | "shinoprovod-skyline-220-st-luce-2m-cherny"
    | "shinoprovod-skyline-220-st-luce-3m-cherny"
    | "shinoprovod-skyline-220-st-luce-1m-bely"
    | "shinoprovod-skyline-220-st-luce-2m-bely"
    | "shinoprovod-skyline-220-st-luce-3m-bely"
    | "panel-upravlenia-skyline-220-st-luce-bely"
    | "panel-upravlenia-skyline-220-st-luce-cherny"
    | "panel-upravlenia-skyline-220-st-luce-mob-bely"
    | "panel-upravlenia-skyline-220-st-luce-mob-cherny"
    | "wifi-converter-dlya-220-st-luce-bely"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-465mm-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-wifi-ble-bely"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-465mm-wifi-ble-bely"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-nar-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-nar-wifi-ble-bely"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-moon-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-18w-2700-4500-6000-220mm-moon-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-27w-2700-4500-6000-220mm-moon-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-moon-wifi-ble-bely"
    | "svetilnik-skyline-220-led-18w-2700-4500-6000-220mm-moon-wifi-ble-bely"
    | "svetilnik-skyline-220-led-27w-2700-4500-6000-220mm-moon-wifi-ble-bely"
    | "skyline-220-s25-st-luce-2m-220v"
    | "svetilnik-skyline-220-led-18w-2700-6000-30.9cm-uglovoy-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-18w-2700-6000-30.9cm-uglovoy-wifi-ble-bely"
    | "svetilnik-skyline-220-led-10w-dvoinoi-stakan-2700-6000-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-10w-dvoinoi-stakan-2700-6000-wifi-ble-bely"
    | "svetilnik-skyline-220-led-9w-2700-6000-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-9w-2700-6000-wifi-ble-bely"
    | "svetilnik-skyline-220-led-18w-2700-6000-wifi-ble-cherny"
    | "svetilnik-skyline-220-led-18w-2700-6000-wifi-ble-bely"
    | "svetilnik-skyline-220-led-10w-400k-446-4000k-cherny"
    | "svetilnik-skyline-220-led-20w-400k-446-4000k-cherny"
    | "svetilnik-skyline-220-led-10w-400k-436-3000k-cherny"
    | "svetilnik-skyline-220-led-20w-400k-436-3000k-cherny"
    | "svetilnik-skyline-220-led-10w-400k-546-4000k-bely"
    | "svetilnik-skyline-220-led-20w-400k-546-4000k-bely"
    | "svetilnik-skyline-220-led-10w-400k-536-3000k-bely"
    | "svetilnik-skyline-220-led-20w-400k-536-3000k-bely"
    | "torcevaya-zaglushka-dlya-s25-st-luce-bely-2"
    | "vvod-pitaniya-220-st-luce-bely"
    | "vvod-pitaniya-220-st-luce-cherny"
    | "connector-uglovoy-220-st-luce-bely"
    | "connector-uglovoy-220-st-luce-cherny"
    | "connector-priamoy-220-st-luce-bely"
    | "connector-priamoy-220-st-luce-cherny"
    | "";

export interface CatalogState {
    catalogSection:
        | "komplektuyshie"
        | "pvh-polotna"
        | "profili"
        | "montazhnie-raboti"
        | "trekovie-systemy"
        | "all"
        | "";
    subCatalogSectionComplect:
        | "torcevie-zaglushki"
        | "platformy"
        | "obvod-dlya-trub"
        | "zakladnie"
        | "magnitnie-reshetki"
        | "polotna-bauf"
        | "polotna-msd"
        | "polotna-teqtum"
        | "tkanevie-polotna"
        | "polotna-lumfer"
        | "profili-po-tipu"
        | "profili-alform"
        | "profili-parsek"
        | "profili-kraab"
        | "profili-flexy"
        | "profili-lumpfer"
        | "profili-bizon"
        | "profili-ioshka"
        | "karnizy"
        | "trekovie-systemy-lumfer-track-23-48v"
        | "trekovie-systemy-lumfer-track-25-220v"
        | "trekovie-systemy-denkirs"
        | "trekovie-systemy-st-luce"
        | "";

    subCatalogSectionItemsComplect:
        | "dlya-svetovoy-linii"
        | "dlya-karnizov"
        | "dlya-adapterov"
        | "pvh-plasticovy"
        | "konstrurcionny"
        | "tenevoy"
        | "paryashy"
        | "svetovie-liniy"
        | "karniz"
        | "adaptery"
        | "";

    itemPage: // --- trekovie-systemy ---
    // Track 23
    | "lumfer-track-23-48v-cherny"
        | "block-pitania-track-23-100w-48v"
        | "block-pitania-track-23-200w-48v"
        | "priamoy-connector-track-23-200w-48v"
        | "gibkiy-connector-track-23-200w-48v"
        | "svetilnik-track-23-48V-18W-36-4000k"
        | "svetilnik-track-23-48V-10w-120-4000k-300x22x45mm"
        | "svetilnik-track-23-48V-20w-120-4000k-600x22x45mm"
        | "svetilnik-track-23-48V-30w-120-4000k-900x22x45mm"
        // Track 25
        | "lumfer-track-25-220V-cherny"
        | "connector-pitania-track-25-220v"
        | "priamoy-connector-track-25-220v"
        | "gibkiy-connector-track-25-220v"
        | "svetilnik-track-25-220V-9w-24-4000k-220x25x41mm"
        | "svetilnik-track-25-220V-9w-120-4000k-220x25x41mm"
        | "svetilnik-track-25-220V-18w-120-4000k-410x25x41mm"
        | "svetilnik-track-25-220V-27w-120-4000k-600x25x41mm"
        // Denkirs
        | "denkirs-tr1001-wh-bely-1m"
        | "denkirs-tr1001-bk-cherny-1m"
        | "denkirs-tr1002-wh-bely-2m"
        | "denkirs-tr1002-bk-cherny-2m"
        | "denkirs-tr1003-wh-bely-3m"
        | "denkirs-tr1003-bk-cherny-3m"
        | "torcevoi-provod-pitania-denkirs-tr1100-wh-bely"
        | "torcevoi-provod-pitania-denkirs-tr1100-bk-cherny"
        | "priamoy-connector-denkirs-tr1101-wh-bely"
        | "priamoy-connector-denkirs-tr1101-bk-cherny"
        | "l-connector-denkirs-TR1102-wh-bely"
        | "l-connector-denkirs-TR1102-bk-cherny"
        | "t-connector-denkirs-TR1103-wh-bely"
        | "t-connector-denkirs-TR1103-bk-cherny"
        | "x-connector-denkirs-TR1104-wh-bely"
        | "x-connector-denkirs-TR1104-bk-cherny"
        | "solid-koper-dk6452-bk-135мм-d60-220V-led-4000k-15w-ip20-cherny-aluminum"
        | "solid-koper-dk6451-bk-135мм-d60-220v-led-3000k-15w-ip20-cherny-aluminum"
        | "solid-koper-dk6453-bk-145мм-d60-220v-led-3000k-24w-ip20-cherny-aluminum"
        | "solid-koper-dk6454-bk-145мм-d60-220v-led-4000k-24w-ip20-cherny-aluminum"
        | "solid-koper-dk6202-bg-zolotoy-cherny-220v"
        | "solid-koper-dk6210-bg-zolotoy-cherny-220v"
        | "solid-koper-dk6060-bk-zolotoy-cherny-220v"
        | "solid-koper-dk6060-bk-zolotoy-bely-220v"
        // ST Luce
        | "shinoprovod-skyline-220-st-luce-1m-cherny"
        | "shinoprovod-skyline-220-st-luce-2m-cherny"
        | "shinoprovod-skyline-220-st-luce-3m-cherny"
        | "shinoprovod-skyline-220-st-luce-1m-bely"
        | "shinoprovod-skyline-220-st-luce-2m-bely"
        | "shinoprovod-skyline-220-st-luce-3m-bely"
        | "panel-upravlenia-skyline-220-st-luce-bely"
        | "panel-upravlenia-skyline-220-st-luce-cherny"
        | "panel-upravlenia-skyline-220-st-luce-mob-bely"
        | "panel-upravlenia-skyline-220-st-luce-mob-cherny"
        | "wifi-converter-dlya-220-st-luce-bely"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-465mm-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-wifi-ble-bely"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-465mm-wifi-ble-bely"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-nar-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-nar-wifi-ble-bely"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-moon-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-18w-2700-4500-6000-220mm-moon-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-27w-2700-4500-6000-220mm-moon-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-9w-2700-4500-6000-220mm-moon-wifi-ble-bely"
        | "svetilnik-skyline-220-led-18w-2700-4500-6000-220mm-moon-wifi-ble-bely"
        | "svetilnik-skyline-220-led-27w-2700-4500-6000-220mm-moon-wifi-ble-bely"
        | "skyline-220-s25-st-luce-2m-220v"
        | "svetilnik-skyline-220-led-18w-2700-6000-30.9cm-uglovoy-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-18w-2700-6000-30.9cm-uglovoy-wifi-ble-bely"
        | "svetilnik-skyline-220-led-10w-dvoinoi-stakan-2700-6000-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-10w-dvoinoi-stakan-2700-6000-wifi-ble-bely"
        | "svetilnik-skyline-220-led-9w-2700-6000-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-9w-2700-6000-wifi-ble-bely"
        | "svetilnik-skyline-220-led-18w-2700-6000-wifi-ble-cherny"
        | "svetilnik-skyline-220-led-18w-2700-6000-wifi-ble-bely"
        | "svetilnik-skyline-220-led-10w-400k-446-4000k-cherny"
        | "svetilnik-skyline-220-led-20w-400k-446-4000k-cherny"
        | "svetilnik-skyline-220-led-10w-400k-436-3000k-cherny"
        | "svetilnik-skyline-220-led-20w-400k-436-3000k-cherny"
        | "svetilnik-skyline-220-led-10w-400k-546-4000k-bely"
        | "svetilnik-skyline-220-led-20w-400k-546-4000k-bely"
        | "svetilnik-skyline-220-led-10w-400k-536-3000k-bely"
        | "svetilnik-skyline-220-led-20w-400k-536-3000k-bely"
        | "torcevaya-zaglushka-dlya-s25-st-luce-bely-2"
        | "vvod-pitaniya-220-st-luce-bely"
        | "vvod-pitaniya-220-st-luce-cherny"
        | "connector-uglovoy-220-st-luce-bely"
        | "connector-uglovoy-220-st-luce-cherny"
        | "connector-priamoy-220-st-luce-bely"
        | "connector-priamoy-220-st-luce-cherny"
        | "";
}

export type ProfiliByType =
    | "ПВХ пластиковый"
    | "Теневой профиль"
    | "Парящий профиль"
    | "Конструкционный"
    | "Световые линии"
    | "Карниз"
    | "Адаптеры"
    | "Адаптеры";

export type AllCatalogType = {
    id: number;
    title: string;
    link: string;
    src: string;
};

export type CatalogType = {
    id: number;
    title: string;
    link: string;
    src: string;
    dataType: string;
};

export type SubCatalogItemsType = {
    id: number;
    title: string;
    subtitle?: string;
    link: string;
    src?: string;
    src_1?: string;
    src_2?: string;
    src_3?: string;
    dataType: string;
    basePrice: number;
    workPrice: number;
    measurement: string;
    amount?: string | number;
    element: boolean;
    byType?: string;
};

// export type SubCatalogItemsType = {
//     id: string | number;
//     title: string;
//     subtitle?: string;
//     link: string;
//     src?: string;
//     src_1?: string;
//     src_2?: string;
//     src_3?: string;
//     dataType: string;
//     basePrice: number;
//     workPrice: number;
//     measurement: string;
//     amount?: string | number;
//     element: boolean;
//     byType?: string;
// };

// export type SubCatalogItemsDashType = {
//     id: number;
//     title: string;
//     subtitle?: string;
//     // price?: string | number;
//     link: string;
//     dataType: string;
//     src?: string;
//     src_1?: string;
//     src_2?: string;
//     src_3?: string;
//     // amount?: string | number;
//     basePrice: number;
//     workPrice: number;
//     measurement: string;
//     element: boolean;
//     byType?: string;
// };
