import prisma from "@/lib/prisma";

export async function getAllCatalog() {
    return await prisma.allCatalog.findMany();
}
// Cat-1-------KomplektuyshieCatalog--------
export async function getKomplektuyshieCatalog() {
    return await prisma.komplektuyshieCatalog.findMany();
}
// Subcat-1.1---TorcevieZaglushki---
export async function getTorcevieZaglushki() {
    return await prisma.torcevieZaglushki.findMany();
}
// Subcat-1.1.1---dlyaSvetovoyLinii
export async function getDlyaSvetovoyLinii() {
    return await prisma.dlyaSvetovoyLinii.findMany();
}
// Subcat-1.1.2---dlyaKarnizov
export async function getDlyaKarnizov() {
    return await prisma.dlyaKarnizov.findMany();
}
// Subcat-1.1.3---dlyaAdapterov
export async function getDlyaAdapterov() {
    return await prisma.dlyaAdapterov.findMany();
}

// Subcat-1.2---Platformy---
export async function getPlatformy() {
    return await prisma.platformy.findMany();
}
// Subcat-1.3---ObvodDlyaTrub---
export async function getObvodDlyaTrub() {
    return await prisma.obvodDlyaTrub.findMany();
}
// Subcat-1.4---Zakladnie---
export async function getZakladnie() {
    return await prisma.zakladnie.findMany();
}
// Subcat-1.5---MagnitnieReshetki---
export async function getMagnitnieReshetki() {
    return await prisma.magnitnieReshetki.findMany();
}
// Subcat-1.6---svetilniki---
export async function getSvetilniki() {
    return await prisma.svetilnikiCatalog.findMany();
}

// // Subcat-1.6.1---svetilniki---

export async function getSvetilnikiSTLuce() {
    return await prisma.svetilnikiSTLuce.findMany();
}
export async function getSvetilnikiMaytoni() {
    return await prisma.svetilnikiMaytoni.findMany();
}
export async function getSvetilnikiTruEnergy() {
    return await prisma.svetilnikiTruEnergy.findMany();
}
export async function getLampaSimple() {
    return await prisma.lampaSimple.findMany();
}
export async function getSvetilnikGx() {
    return await prisma.svetilnikiGx.findMany();
}
export async function getDiodnayaLenta() {
    return await prisma.diodnayaLenta.findMany();
}
export async function getBlockiPitaniya() {
    return await prisma.blockiPitaniya.findMany();
}

// // Subcat-1.6.2---svetilniki---
// export async function getSvetilnikiMaytoni() {
//     return await prisma.SvetilnikiMaytoni.findMany();
// }

// // Subcat-1.6.3---svetilniki---
// export async function getSvetilnikiTruEnergy() {
//     return await prisma.SvetilnikiTruEnergy.findMany();
// }

// // Subcat-1.6.4---svetilniki---
// export async function getSvetilnikiGx() {
//     return await prisma.SvetilnikiGx.findMany();
// }

// // Subcat-1.6.5---svetilniki---
// export async function getLampaSimple() {
//     return await prisma.LampaSimple.findMany();
// }

// Cat-2-------pvhPolotnaCatalog--------
export async function getPvhPolotnaCatalog() {
    return await prisma.pvhPolotnaCatalog.findMany();
}
// Subcat-2.1---PolotnaBauf---
export async function getPolotnaBauf() {
    return await prisma.polotnaBauf.findMany();
}

// Subcat-2.2---PolotnaMsd---
export async function getPolotnaMsd() {
    return await prisma.polotnaMsd.findMany();
}
// Subcat-2.3---polotnaTeqtum---
export async function getPolotnaTeqtum() {
    return await prisma.polotnaTeqtum.findMany();
}
// Subcat-2.4---TkaneviePolotna---
export async function getTkaneviePolotna() {
    return await prisma.tkaneviePolotna.findMany();
}
// Subcat-2.5---PolotnaLumfer---
export async function getPolotnaLumfer() {
    return await prisma.polotnaLumfer.findMany();
}
// Subcat-2.6---PolotnaHalead---
export async function getPolotnaHalead() {
    return await prisma.polotnaHalead.findMany();
}

// Cat-3-------profiliCatalog--------
export async function getProfiliCatalog() {
    return await prisma.profiliCatalog.findMany();
}
// Subcat-3.1---ProfiliLumpfer---
export async function getProfiliLumpfer() {
    return await prisma.profiliLumpfer.findMany();
}
// Subcat-3.2---ProfiliKraab---
export async function getProfiliKraab() {
    return await prisma.profiliKraab.findMany();
}
// Subcat-3.3---ProfiliFlexy---
export async function getProfiliFlexy() {
    return await prisma.profiliFlexy.findMany();
}
// Subcat-3.4---ProfiliAlform---
export async function getProfiliAlform() {
    return await prisma.profiliAlform.findMany();
}
// Subcat-3.5---ProfiliBizon---
export async function getProfiliBizon() {
    return await prisma.profiliBizon.findMany();
}
// Subcat-3.6---ProfiliIoshka---
export async function getProfiliIoshka() {
    return await prisma.profiliIoshka.findMany();
}
// Subcat-3.7---ProfiliPoTipu---
export async function getProfiliPoTipu() {
    return await prisma.profiliPoTipu.findMany();
}

// Subcat-3.7.1---ProfiliPoTipu-Конструкционный--
export async function getProfiliPoTipuKonstrukcionny() {
    const profiliLumpfer = await prisma.profiliLumpfer.findMany({
        where: {
            byType: "Конструкционный",
        },
    });
    const profiliKraab = await prisma.profiliKraab.findMany({
        where: {
            byType: "Конструкционный",
        },
    });
    const profiliFlexy = await prisma.profiliFlexy.findMany({
        where: {
            byType: "Конструкционный",
        },
    });
    const profiliAlform = await prisma.profiliAlform.findMany({
        where: {
            byType: "Конструкционный",
        },
    });
    const profiliBizon = await prisma.profiliBizon.findMany({
        where: {
            byType: "Конструкционный",
        },
    });
    const profiliIoshka = await prisma.profiliIoshka.findMany({
        where: {
            byType: "Конструкционный",
        },
    });
    const profiliPoTipu = [
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
    ];
    return profiliPoTipu;
}
// Subcat-3.7.2---ProfiliPoTipu-Парящий профиль--
export async function getProfiliPoTipuPariashy() {
    const profiliLumpfer = await prisma.profiliLumpfer.findMany({
        where: {
            byType: "Парящий профиль",
        },
    });
    const profiliKraab = await prisma.profiliKraab.findMany({
        where: {
            byType: "Парящий профиль",
        },
    });
    const profiliFlexy = await prisma.profiliFlexy.findMany({
        where: {
            byType: "Парящий профиль",
        },
    });
    const profiliAlform = await prisma.profiliAlform.findMany({
        where: {
            byType: "Парящий профиль",
        },
    });
    const profiliBizon = await prisma.profiliBizon.findMany({
        where: {
            byType: "Парящий профиль",
        },
    });
    const profiliIoshka = await prisma.profiliIoshka.findMany({
        where: {
            byType: "Парящий профиль",
        },
    });
    const profiliPoTipu = [
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
    ];
    return profiliPoTipu;
}
// Subcat-3.7.3---ProfiliPoTipu-Карнизы--
export async function getProfiliPoTipuKarnizy() {
    const profiliLumpfer = await prisma.profiliLumpfer.findMany({
        where: {
            byType: "Карнизы",
        },
    });
    const profiliKraab = await prisma.profiliKraab.findMany({
        where: {
            byType: "Карнизы",
        },
    });
    const profiliFlexy = await prisma.profiliFlexy.findMany({
        where: {
            byType: "Карнизы",
        },
    });
    const profiliAlform = await prisma.profiliAlform.findMany({
        where: {
            byType: "Карнизы",
        },
    });
    const profiliBizon = await prisma.profiliBizon.findMany({
        where: {
            byType: "Карнизы",
        },
    });
    const profiliIoshka = await prisma.profiliIoshka.findMany({
        where: {
            byType: "Карнизы",
        },
    });
    const profiliPoTipu = [
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
    ];
    return profiliPoTipu;
}
// Subcat-3.7.4---ProfiliPoTipu-Теневой профиль--
export async function getProfiliPoTipuTenevoyProfil() {
    const profiliLumpfer = await prisma.profiliLumpfer.findMany({
        where: {
            byType: "Теневой профиль",
        },
    });
    const profiliKraab = await prisma.profiliKraab.findMany({
        where: {
            byType: "Теневой профиль",
        },
    });
    const profiliFlexy = await prisma.profiliFlexy.findMany({
        where: {
            byType: "Теневой профиль",
        },
    });
    const profiliAlform = await prisma.profiliAlform.findMany({
        where: {
            byType: "Теневой профиль",
        },
    });
    const profiliBizon = await prisma.profiliBizon.findMany({
        where: {
            byType: "Теневой профиль",
        },
    });
    const profiliIoshka = await prisma.profiliIoshka.findMany({
        where: {
            byType: "Теневой профиль",
        },
    });
    const profiliPoTipu = [
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
    ];
    return profiliPoTipu;
}
// Subcat-3.7.5---ProfiliPoTipu-Световая линия--
export async function getProfiliPoTipuSvetovayaLiniya() {
    const profiliLumpfer = await prisma.profiliLumpfer.findMany({
        where: {
            byType: "Световая линия",
        },
    });
    const profiliKraab = await prisma.profiliKraab.findMany({
        where: {
            byType: "Световая линия",
        },
    });
    const profiliFlexy = await prisma.profiliFlexy.findMany({
        where: {
            byType: "Световая линия",
        },
    });
    const profiliAlform = await prisma.profiliAlform.findMany({
        where: {
            byType: "Световая линия",
        },
    });
    const profiliBizon = await prisma.profiliBizon.findMany({
        where: {
            byType: "Световая линия",
        },
    });
    const profiliIoshka = await prisma.profiliIoshka.findMany({
        where: {
            byType: "Световая линия",
        },
    });
    const profiliPoTipu = [
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
    ];
    return profiliPoTipu;
}
// Subcat-3.7.5---ProfiliPoTipu-Адаптеры--
export async function getProfiliPoTipuAdaptery() {
    const profiliLumpfer = await prisma.profiliLumpfer.findMany({
        where: {
            byType: "Адаптеры",
        },
    });
    const profiliKraab = await prisma.profiliKraab.findMany({
        where: {
            byType: "Адаптеры",
        },
    });
    const profiliFlexy = await prisma.profiliFlexy.findMany({
        where: {
            byType: "Адаптеры",
        },
    });
    const profiliAlform = await prisma.profiliAlform.findMany({
        where: {
            byType: "Адаптеры",
        },
    });
    const profiliBizon = await prisma.profiliBizon.findMany({
        where: {
            byType: "Адаптеры",
        },
    });
    const profiliIoshka = await prisma.profiliIoshka.findMany({
        where: {
            byType: "Адаптеры",
        },
    });
    const profiliPoTipu = [
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
    ];
    return profiliPoTipu;
}
// Subcat-3.7.5---ProfiliPoTipu-ПВХ пластиковый--
export async function getProfiliPoTipuPVH() {
    const profiliLumpfer = await prisma.profiliLumpfer.findMany({
        where: {
            byType: "ПВХ пластиковый",
        },
    });
    const profiliKraab = await prisma.profiliKraab.findMany({
        where: {
            byType: "ПВХ пластиковый",
        },
    });
    const profiliFlexy = await prisma.profiliFlexy.findMany({
        where: {
            byType: "ПВХ пластиковый",
        },
    });
    const profiliAlform = await prisma.profiliAlform.findMany({
        where: {
            byType: "ПВХ пластиковый",
        },
    });
    const profiliBizon = await prisma.profiliBizon.findMany({
        where: {
            byType: "ПВХ пластиковый",
        },
    });
    const profiliIoshka = await prisma.profiliIoshka.findMany({
        where: {
            byType: "ПВХ пластиковый",
        },
    });
    const profiliPoTipu = [
        ...profiliLumpfer,
        ...profiliKraab,
        ...profiliFlexy,
        ...profiliAlform,
        ...profiliBizon,
        ...profiliIoshka,
    ];
    return profiliPoTipu;
}

// Cat-4-------montazhnieRabotiCatalog--------
export async function getMontazhnieRabotiCatalog() {
    return await prisma.montazhnieRabotiCatalog.findMany();
}

// Cat-5-------trekovieSystemyCatalog--------
export async function getTrekovieSystemyCatalog() {
    return await prisma.trekovieSystemyCatalog.findMany();
}

// Subcat-5.1---LumferTrack_23_48v---
export async function getLumferTrack_23_48v() {
    return await prisma.lumferTrack_23_48v.findMany();
}
// Subcat-5.2---LumferTrack_25_220v---
export async function getLumferTrack_25_220v() {
    return await prisma.lumferTrack_25_220v.findMany();
}
// Subcat-5.3---Denkirs_220v---
export async function getDenkirs_220v() {
    return await prisma.denkirs_220v.findMany();
}
// Subcat-5.4---ST_Luce_220v---
export async function getST_Luce_220v() {
    return await prisma.sT_Luce_220v.findMany();
}

// Cat-6-------profilRaundCatalog--------
export async function getProfilRaundCatalog() {
    return await prisma.profilRaundCatalog.findMany();
}
export async function getProfilRaundTenevoiRadiusny() {
    return await prisma.raundTenevoiRadiusny.findMany();
}
export async function getProfilRaundBlikPariashy() {
    return await prisma.raundBlikPariashy.findMany();
}
export async function getProfilRaundDelitRazdelitelny() {
    return await prisma.raundDelitRazdelitelny.findMany();
}
export async function getProfilRaundLineUniversalny() {
    return await prisma.raundLineUniversalny.findMany();
}
