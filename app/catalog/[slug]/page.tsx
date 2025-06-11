import React from "react";
import { catalogBuilder, subCatalogBuilder } from "@/components/CatalogBuilder/CatalogBuilder";
import CatalogDashboard from "@/components/CatalogDashboard/CatalogDashboard";
import {
    getKomplektuyshieCatalog,
    getMontazhnieRabotiCatalog,
    getProfiliCatalog,
    getProfilRaundCatalog,
    getPvhPolotnaCatalog,
    getTrekovieSystemyCatalog,
} from "@/api/catalog";
import { SubCatalogItemsType } from "@/types/catalog-data-types";

export default async function SubCatalog({ params }: { params: { slug: string } }) {
    const komplektuyshieCatalog = await getKomplektuyshieCatalog();
    const pvhPolotnaCatalog = await getPvhPolotnaCatalog();
    const profiliCatalog = await getProfiliCatalog();
    const montazhnieRaboti = await getMontazhnieRabotiCatalog();
    const trekovieSystemyCatalog = await getTrekovieSystemyCatalog();
    const profilRaundCatalog = await getProfilRaundCatalog();

    const item: SubCatalogItemsType | [] = [];
    const mainMenu =
        params.slug == "komplektuyshie"
            ? catalogBuilder(komplektuyshieCatalog, "komplektuyshie")
            : params.slug == "pvh-polotna"
              ? catalogBuilder(pvhPolotnaCatalog, "pvh-polotna")
              : params.slug == "profili"
                ? catalogBuilder(profiliCatalog, "profili")
                : params.slug == "trekovie-systemy"
                  ? catalogBuilder(trekovieSystemyCatalog, "trekovie-systemy")
                  : params.slug == "profil-raund"
                    ? catalogBuilder(profilRaundCatalog, "profil-raund")
                    : params.slug == "montazhnie-raboti"
                      ? subCatalogBuilder(montazhnieRaboti, "montazhnie-raboti")
                      : [];

    return (
        <div>
            <CatalogDashboard layout={mainMenu} item={item} />
        </div>
    );
}
