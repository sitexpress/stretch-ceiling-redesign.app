import React from "react";
import { catalogBuilder, subCatalogBuilder } from "@/components/CatalogBuilder/CatalogBuilder";
import CatalogDashboard from "@/components/CatalogDashboard/CatalogDashboard";
import {
    getDenkirs_220v,
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
    getProfiliPoTipu,
    getProfilRaundBlikPariashy,
    getProfilRaundDelitRazdelitelny,
    getProfilRaundLineUniversalny,
    getProfilRaundTenevoiRadiusny,
    getST_Luce_220v,
    getSvetilniki,
    getTkaneviePolotna,
    getTorcevieZaglushki,
    getZakladnie,
} from "@/api/catalog";
import { SubCatalogItemsType } from "@/types/catalog-data-types";

export default async function SubSubCatalog({ params }: { params: { subSlug: string } }) {
    // catalog > komplektuyshie
    const torcevieZaglushki = await getTorcevieZaglushki();
    const platformy = await getPlatformy();
    const obvodDlyaTrub = await getObvodDlyaTrub();
    const zakladnie = await getZakladnie();
    const magnitnieReshetki = await getMagnitnieReshetki();
    const svetilniki = await getSvetilniki();
    // catalog > pvhPolotna
    const polotnaBauf = await getPolotnaBauf();
    const polotnaMsd = await getPolotnaMsd();
    const polotnaTeqtum = await getPolotnaTeqtum();
    const tkaneviePolotna = await getTkaneviePolotna();
    const polotnaLumfer = await getPolotnaLumfer();
    const polotnaHalead = await getPolotnaHalead();
    // catalog > profiliCatalog
    const profiliLumpfer = await getProfiliLumpfer();
    const profiliKraab = await getProfiliKraab();
    const profiliFlexy = await getProfiliFlexy();
    const profiliAlform = await getProfiliAlform();
    const profiliBizon = await getProfiliBizon();
    const profiliIoshka = await getProfiliIoshka();
    const profiliPoTipu = await getProfiliPoTipu();
    // catalog > trekovieSystemy
    const lumferTrack_23_48v = await getLumferTrack_23_48v();
    const lumferTrack_25_220v = await getLumferTrack_25_220v();
    const denkirs_220v = await getDenkirs_220v();
    const sT_Luce_220v = await getST_Luce_220v();
    // catalog > profil-raund
    const profilRaundTenevoiRadiusny = await getProfilRaundTenevoiRadiusny();
    const profilRaundBlikPariashy = await getProfilRaundBlikPariashy();
    const profilRaundDelitRazdelitelny = await getProfilRaundDelitRazdelitelny();
    const profilRaundLineUniversalny = await getProfilRaundLineUniversalny();

    const item: SubCatalogItemsType | [] = [];

    const mainMenu =
        params.subSlug == "torcevie-zaglushki"
            ? catalogBuilder(torcevieZaglushki, "torcevie-zaglushki", "komplektuyshie")
            : // komplektuyshie
              params.subSlug == "platformy"
              ? subCatalogBuilder(platformy, "platformy", "komplektuyshie")
              : params.subSlug == "obvod-dlya-trub"
                ? subCatalogBuilder(obvodDlyaTrub, "obvod-dlya-trub", "komplektuyshie")
                : params.subSlug == "zakladnie"
                  ? subCatalogBuilder(zakladnie, "zakladnie", "komplektuyshie")
                  : params.subSlug == "magnitnie-reshetki"
                    ? subCatalogBuilder(magnitnieReshetki, "magnitnie-reshetki", "komplektuyshie")
                    : params.subSlug == "svetilniki"
                      ? catalogBuilder(svetilniki, "svetilniki", "komplektuyshie")
                      : // pvhPolotna
                        params.subSlug == "polotna-bauf"
                        ? subCatalogBuilder(polotnaBauf, "polotna-bauf", "pvh-polotna")
                        : params.subSlug == "polotna-msd"
                          ? subCatalogBuilder(polotnaMsd, "polotna-msd", "pvh-polotna")
                          : params.subSlug == "polotna-teqtum"
                            ? subCatalogBuilder(polotnaTeqtum, "polotna-teqtum", "pvh-polotna")
                            : params.subSlug == "tkanevie-polotna"
                              ? subCatalogBuilder(tkaneviePolotna, "tkanevie-polotna", "pvh-polotna")
                              : params.subSlug == "polotna-lumfer"
                                ? subCatalogBuilder(polotnaLumfer, "polotna-lumfer", "pvh-polotna")
                                : params.subSlug == "polotna-halead"
                                  ? subCatalogBuilder(polotnaHalead, "polotna-halead", "pvh-polotna")
                                  : //profili
                                    params.subSlug == "profili-lumpfer"
                                    ? subCatalogBuilder(profiliLumpfer, "profili-lumpfer", "profili")
                                    : params.subSlug == "profili-kraab"
                                      ? subCatalogBuilder(profiliKraab, "profili-kraab", "profili")
                                      : params.subSlug == "profili-flexy"
                                        ? subCatalogBuilder(profiliFlexy, "profili-flexy", "profili")
                                        : params.subSlug == "profili-alform"
                                          ? subCatalogBuilder(profiliAlform, "profili-alform", "profili")
                                          : params.subSlug == "profili-bizon"
                                            ? subCatalogBuilder(profiliBizon, "profili-bizon", "profili")
                                            : params.subSlug == "profili-ioshka"
                                              ? subCatalogBuilder(profiliIoshka, "profili-ioshka", "profili")
                                              : params.subSlug == "profili-po-tipu"
                                                ? catalogBuilder(profiliPoTipu, "profili-po-tipu", "profili")
                                                : // trekovieSystemy
                                                  params.subSlug == "trekovie-systemy-lumfer-track-23-48v"
                                                  ? subCatalogBuilder(
                                                        lumferTrack_23_48v,
                                                        "trekovie-systemy-lumfer-track-23-48v",
                                                        "trekovie-systemy"
                                                    )
                                                  : params.subSlug == "trekovie-systemy-lumfer-track-25-220v"
                                                    ? subCatalogBuilder(
                                                          lumferTrack_25_220v,
                                                          "trekovie-systemy-lumfer-track-25-220v",
                                                          "trekovie-systemy"
                                                      )
                                                    : params.subSlug == "trekovie-systemy-denkirs"
                                                      ? subCatalogBuilder(
                                                            denkirs_220v,
                                                            "trekovie-systemy-denkirs",
                                                            "trekovie-systemy"
                                                        )
                                                      : params.subSlug == "trekovie-systemy-st-luce"
                                                        ? subCatalogBuilder(
                                                              sT_Luce_220v,
                                                              "trekovie-systemy-st-luce",
                                                              "trekovie-systemy"
                                                          )
                                                        : // Профили RAUND
                                                          params.subSlug == "profil-raund-tenevoi-radiusny"
                                                          ? subCatalogBuilder(
                                                                profilRaundTenevoiRadiusny,
                                                                "profil-raund-tenevoi-radiusny",
                                                                "profil-raund"
                                                            )
                                                          : params.subSlug == "profil-raund-blik-pariashy"
                                                            ? subCatalogBuilder(
                                                                  profilRaundBlikPariashy,
                                                                  "profil-raund-blik-pariashy",
                                                                  "profil-raund"
                                                              )
                                                            : params.subSlug == "profil-raund-delit-razdelitelny"
                                                              ? subCatalogBuilder(
                                                                    profilRaundDelitRazdelitelny,
                                                                    "profil-raund-delit-razdelitelny",
                                                                    "profil-raund"
                                                                )
                                                              : params.subSlug == "profil-raund-line-universalny"
                                                                ? subCatalogBuilder(
                                                                      profilRaundLineUniversalny,
                                                                      "profil-raund-line-universalny",
                                                                      "profil-raund"
                                                                  )
                                                                : [];
    return <CatalogDashboard layout={mainMenu} item={item} />
}
