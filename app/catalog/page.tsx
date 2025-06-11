import React from "react";
import { allCatalogBuilder } from "@/components/CatalogBuilder/CatalogBuilder";
import CatalogDashboard from "@/components/CatalogDashboard/CatalogDashboard";
import { getAllCatalog } from "@/api/catalog";
import { SubCatalogItemsType } from "@/types/catalog-data-types";

export default async function Catalog({ params }: { params: { slug: string } }) {
    const allCatalog = await getAllCatalog();
    const mainMenu = allCatalogBuilder(allCatalog);
    const item: SubCatalogItemsType | [] = [];
    return (
        <div style={{ margin: "o auto", textAlign: "center" }}>
            <CatalogDashboard layout={mainMenu} item={item} />
        </div>
    );
}
