import React from "react";
import { itemCatalogBuilder, subCatalogBuilder } from "@/components/CatalogBuilder/CatalogBuilder";
import CatalogDashboard from "@/components/CatalogDashboard/CatalogDashboard";
import {
    getBlockiPitaniya,
    getDenkirs_220v,
    getDiodnayaLenta,
    getDlyaAdapterov,
    getDlyaKarnizov,
    getDlyaSvetovoyLinii,
    getLampaSimple,
    getLumferTrack_23_48v,
    getLumferTrack_25_220v,
    getMagnitnieReshetki,
    getObvodDlyaTrub,
    getPlatformy,
    getPolotnaBauf,
    getPolotnaHalead,
    getPolotnaLumfer,
    getPolotnaMsd,
    getPolotnaTeqtum,
    getProfiliAlform,
    getProfiliBizon,
    getProfiliFlexy,
    getProfiliIoshka,
    getProfiliKraab,
    getProfiliLumpfer,
    // getProfiliPoTipu,
    getProfiliPoTipuAdaptery,
    getProfiliPoTipuKarnizy,
    getProfiliPoTipuKonstrukcionny,
    getProfiliPoTipuPariashy,
    getProfiliPoTipuPVH,
    getProfiliPoTipuSvetovayaLiniya,
    getProfiliPoTipuTenevoyProfil,
    getProfilRaundBlikPariashy,
    getProfilRaundDelitRazdelitelny,
    getProfilRaundLineUniversalny,
    getProfilRaundTenevoiRadiusny,
    getST_Luce_220v,
    getSvetilnikGx,
    getSvetilnikiMaytoni,
    getSvetilnikiSTLuce,
    getSvetilnikiTruEnergy,
    getTkaneviePolotna,
    // getTorcevieZaglushki,
    getZakladnie,
} from "@/api/catalog";

export default async function SubSubItemCatalog({ params }: { params: { subItemsSlug: string } }) {
    // TorcevieZaglushki
    const dlyaSvetovoyLinii = await getDlyaSvetovoyLinii();
    const dlyaKarnizov = await getDlyaKarnizov();
    const dlyaAdapterov = await getDlyaAdapterov();
    // komplektuyshie
    const platformy = await getPlatformy();
    const obvodDlyaTrub = await getObvodDlyaTrub();
    const zakladnie = await getZakladnie();
    const magnitnieReshetki = await getMagnitnieReshetki();
    // pvhPolotna
    const polotnaBauf = await getPolotnaBauf();
    const polotnaMsd = await getPolotnaMsd();
    const polotnaTeqtum = await getPolotnaTeqtum();
    const tkaneviePolotna = await getTkaneviePolotna();
    const polotnaLumfer = await getPolotnaLumfer();
    const polotnaHalead = await getPolotnaHalead();
    // profiliCatalog
    const profiliLumpfer = await getProfiliLumpfer();
    const profiliKraab = await getProfiliKraab();
    const profiliFlexy = await getProfiliFlexy();
    const profiliAlform = await getProfiliAlform();
    const profiliBizon = await getProfiliBizon();
    const profiliIoshka = await getProfiliIoshka();
    // profiliPoTipu
    const profiliPoTipuPVH = await getProfiliPoTipuPVH();
    const profiliPoTipuTenevoyProfil = await getProfiliPoTipuTenevoyProfil();
    const profiliPoTipuPariashy = await getProfiliPoTipuPariashy();
    const profiliPoTipuKonstrukcionny = await getProfiliPoTipuKonstrukcionny();
    const profiliPoTipuSvetovayaLiniya = await getProfiliPoTipuSvetovayaLiniya();
    const profiliPoTipuKarnizy = await getProfiliPoTipuKarnizy();
    const profiliPoTipuAdaptery = await getProfiliPoTipuAdaptery();
    // trekovieSystemy
    const lumferTrack_23_48v = await getLumferTrack_23_48v();
    const lumferTrack_25_220v = await getLumferTrack_25_220v();
    const denkirs_220v = await getDenkirs_220v();
    const sT_Luce_220v = await getST_Luce_220v();
    // catalog > komplektuyshie > svetilniki
    const svetilnikiSTLuce = await getSvetilnikiSTLuce();
    const svetilnikiMaytoni = await getSvetilnikiMaytoni();
    const svetilnikiTruEnergy = await getSvetilnikiTruEnergy();
    const lampaSimple = await getLampaSimple();
    const svetilnikGx = await getSvetilnikGx();
    const diodnayaLenta = await getDiodnayaLenta();
    const blockiPitaniya = await getBlockiPitaniya();
    // Профили RAUND
    const profilRaundTenevoiRadiusny = await getProfilRaundTenevoiRadiusny();
    const profilRaundBlikPariashy = await getProfilRaundBlikPariashy();
    const profilRaundDelitRazdelitelny = await getProfilRaundDelitRazdelitelny();
    const profilRaundLineUniversalny = await getProfilRaundLineUniversalny();

    const arrayOfItems = [
        // komplektuyshie
        ...platformy,
        ...obvodDlyaTrub,
        ...zakladnie,
        ...magnitnieReshetki,
        // pvhPolotna
        ...polotnaBauf,
        ...polotnaMsd,
        ...polotnaTeqtum,
        ...tkaneviePolotna,
        ...polotnaLumfer,
        ...polotnaHalead,
        //profili
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
        // ...profiliPoTipu,
        // profiliPoTi
        // ...profiliPoTipuKonstrukcionny,
        // ...profiliPoTipuPariashy,
        // ...profiliPoTipuKarnizy,
        // ...profiliPoTipuTenevoyProfil,
        // ...profiliPoTipuSvetovayaLiniya,
        // ...profiliPoTipuAdaptery,
        // ...profiliPoTipuPVH,
        // trekovie-systemy
        ...lumferTrack_23_48v,
        ...lumferTrack_25_220v,
        ...denkirs_220v,
        ...sT_Luce_220v,
        // // Профили RAUND
        ...profilRaundTenevoiRadiusny,
        ...profilRaundBlikPariashy,
        ...profilRaundDelitRazdelitelny,
        ...profilRaundLineUniversalny,
    ];
    const mappedItem = arrayOfItems.filter((item) => item.link === params.subItemsSlug);
    const item: React.ReactNode[] = itemCatalogBuilder(mappedItem);

    const mainMenu: React.ReactNode[] =
        // torcevieZaglushki
        params.subItemsSlug == "dlya-svetovoy-linii"
            ? subCatalogBuilder(dlyaSvetovoyLinii, params.subItemsSlug, "torcevie-zaglushki", "komplektuyshie")
            : params.subItemsSlug == "dlya-karnizov"
              ? subCatalogBuilder(dlyaKarnizov, params.subItemsSlug, "torcevie-zaglushki", "komplektuyshie")
              : params.subItemsSlug == "dlya-adapterov"
                ? subCatalogBuilder(dlyaAdapterov, params.subItemsSlug, "torcevie-zaglushki", "komplektuyshie")
                : // profiliPoTipu
                  params.subItemsSlug == "pvh-plasticovy"
                  ? subCatalogBuilder(profiliPoTipuPVH, params.subItemsSlug, "profili-po-tipu", "profili")
                  : params.subItemsSlug == "tenevoy"
                    ? subCatalogBuilder(profiliPoTipuTenevoyProfil, params.subItemsSlug, "profili-po-tipu", "profili")
                    : params.subItemsSlug == "paryashy"
                      ? subCatalogBuilder(profiliPoTipuPariashy, params.subItemsSlug, "profili-po-tipu", "profili")
                      : params.subItemsSlug == "konstrurcionny"
                        ? subCatalogBuilder(
                              profiliPoTipuKonstrukcionny,
                              params.subItemsSlug,
                              "profili-po-tipu",
                              "profili"
                          )
                        : params.subItemsSlug == "svetovie-liniy"
                          ? subCatalogBuilder(
                                profiliPoTipuSvetovayaLiniya,
                                params.subItemsSlug,
                                "profili-po-tipu",
                                "profili"
                            )
                          : params.subItemsSlug == "karniz"
                            ? subCatalogBuilder(profiliPoTipuKarnizy, params.subItemsSlug, "profili-po-tipu", "profili")
                            : params.subItemsSlug == "adaptery"
                              ? subCatalogBuilder(
                                    profiliPoTipuAdaptery,
                                    params.subItemsSlug,
                                    "profili-po-tipu",
                                    "profili"
                                )
                              : // catalog > komplektuyshie > svetilniki
                                params.subItemsSlug == "svetilniki-st-luce"
                                ? subCatalogBuilder(
                                      svetilnikiSTLuce,
                                      params.subItemsSlug,
                                      "svetilniki",
                                      "komplektuyshie"
                                  )
                                : params.subItemsSlug == "svetilniki-maytoni"
                                  ? subCatalogBuilder(
                                        svetilnikiMaytoni,
                                        params.subItemsSlug,
                                        "svetilniki",
                                        "komplektuyshie"
                                    )
                                  : params.subItemsSlug == "svetilniki-tru-energy"
                                    ? subCatalogBuilder(
                                          svetilnikiTruEnergy,
                                          params.subItemsSlug,
                                          "svetilniki",
                                          "komplektuyshie"
                                      )
                                    : params.subItemsSlug == "lampy-simple"
                                      ? subCatalogBuilder(
                                            lampaSimple,
                                            params.subItemsSlug,
                                            "svetilniki",
                                            "komplektuyshie"
                                        )
                                      : params.subItemsSlug == "svetilniki-gx"
                                        ? subCatalogBuilder(
                                              svetilnikGx,
                                              params.subItemsSlug,
                                              "svetilniki",
                                              "komplektuyshie"
                                          )
                                        : params.subItemsSlug == "diodnaya-lenta"
                                          ? subCatalogBuilder(
                                                diodnayaLenta,
                                                params.subItemsSlug,
                                                "svetilniki",
                                                "komplektuyshie"
                                            )
                                          : params.subItemsSlug == "blocki-pitaniya"
                                            ? subCatalogBuilder(
                                                  blockiPitaniya,
                                                  params.subItemsSlug,
                                                  "svetilniki",
                                                  "komplektuyshie"
                                              )
                                            : [];
    return (
        <div>
            <CatalogDashboard layout={mainMenu} item={item} />
        </div>
    );
}
