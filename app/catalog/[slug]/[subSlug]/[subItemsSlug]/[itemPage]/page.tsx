import React from "react";
import { itemCatalogBuilder } from "@/components/CatalogBuilder/CatalogBuilder";
import CatalogDashboard from "@/components/CatalogDashboard/CatalogDashboard";
import {
    getBlockiPitaniya,
    getDiodnayaLenta,
    getDlyaAdapterov,
    getDlyaKarnizov,
    getDlyaSvetovoyLinii,
    getLampaSimple,
    getProfiliPoTipuAdaptery,
    getProfiliPoTipuKarnizy,
    getProfiliPoTipuKonstrukcionny,
    getProfiliPoTipuPariashy,
    getProfiliPoTipuPVH,
    getProfiliPoTipuSvetovayaLiniya,
    getProfiliPoTipuTenevoyProfil,
    getSvetilnikGx,
    getSvetilnikiMaytoni,
    getSvetilnikiSTLuce,
    getSvetilnikiTruEnergy,
} from "@/api/catalog";

export default async function ItemPage({ params }: { params: { itemPage: string } }) {
    // catalog > komplektuyshie > torcevieZaglushki
    const dlyaSvetovoyLinii = await getDlyaSvetovoyLinii();
    const dlyaKarnizov = await getDlyaKarnizov();
    const dlyaAdapterov = await getDlyaAdapterov();
    // catalog > profiliCatalog > profiliPoTipu
    const profiliPoTipuPVH = await getProfiliPoTipuPVH();
    const profiliPoTipuTenevoyProfil = await getProfiliPoTipuTenevoyProfil();
    const profiliPoTipuPariashy = await getProfiliPoTipuPariashy();
    const profiliPoTipuKonstrukcionny = await getProfiliPoTipuKonstrukcionny();
    const profiliPoTipuSvetovayaLiniya = await getProfiliPoTipuSvetovayaLiniya();
    const profiliPoTipuKarnizy = await getProfiliPoTipuKarnizy();
    const profiliPoTipuAdaptery = await getProfiliPoTipuAdaptery();
    // catalog > komplektuyshie > svetilniki
    const svetilnikiSTLuce = await getSvetilnikiSTLuce();
    const svetilnikiMaytoni = await getSvetilnikiMaytoni();
    const svetilnikiTruEnergy = await getSvetilnikiTruEnergy();
    const lampaSimple = await getLampaSimple();
    const svetilnikGx = await getSvetilnikGx();
    const diodnayaLenta = await getDiodnayaLenta();
    const blockiPitaniya = await getBlockiPitaniya();

    const arr = [
        // catalog > komplektuyshie > torcevieZaglushki
        ...dlyaSvetovoyLinii,
        ...dlyaKarnizov,
        ...dlyaAdapterov,
        // catalog > profiliCatalog > profiliPoTipu
        ...profiliPoTipuPVH,
        ...profiliPoTipuTenevoyProfil,
        ...profiliPoTipuPariashy,
        ...profiliPoTipuKonstrukcionny,
        ...profiliPoTipuSvetovayaLiniya,
        ...profiliPoTipuKarnizy,
        ...profiliPoTipuAdaptery,
        // catalog > komplektuyshie > svetilniki
        ...svetilnikiSTLuce,
        ...svetilnikiMaytoni,
        ...svetilnikiTruEnergy,
        ...lampaSimple,
        ...svetilnikGx,
        ...diodnayaLenta,
        ...blockiPitaniya,
    ];
    const mappedItem = arr.filter((item) => item.link === params.itemPage);

    const item = itemCatalogBuilder(mappedItem);
    const mainMenu: React.ReactNode[] = [];
    return (
        <div>
            <CatalogDashboard layout={mainMenu} item={item} />
        </div>
    );
}
