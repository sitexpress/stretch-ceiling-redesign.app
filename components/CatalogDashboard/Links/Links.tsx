import React from "react";
import { LinksGroup } from "@/components/CatalogDashboard/LinksGroup/LinksGroup";
import { allCatalogData } from "@/lib/data/localDataList";
import { AllCatalogType } from "@/types/catalog-data-types";
import Image from "next/image";

export const catalogAndMobileMenuNavLinks = (closeDrawer?: () => void) =>
    allCatalogData.map((item: AllCatalogType, index: number) => {
        return item.link === "profil-raund" ? (
            <div key={index} style={{ position: "relative", marginBottom: "40px", paddingLeft: "10px", paddingRight: "10px" }}>
                <LinksGroup closeDrawer={closeDrawer} {...item} />
                <Image
                    width="100"
                    height="50"
                    src="/images/new-1.png"
                    alt="novinka"
                    style={{ position: "absolute", top: "0", right: "20%" }}
                />
            </div>
        ) : (
            <div key={index} style={{ marginBottom: "20px", paddingLeft: "10px", paddingRight: "10px"}}>
                <LinksGroup closeDrawer={closeDrawer} {...item} />
            </div>
        );
    });
