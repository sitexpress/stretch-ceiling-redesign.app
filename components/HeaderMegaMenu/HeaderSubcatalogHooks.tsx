import React from "react";
import classes from "@/components/HeaderMegaMenu/HeaderMegaMenu.module.css";
import { Flex, Group, HoverCard, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import {
    allCatalogData,
    denkirs_220vData,
    komplektuyshieCatalogData,
    lumferTrack_23_48vData,
    lumferTrack_25_220vData,
    magnitnieReshetkiData,
    montazhnieRabotiCatalogData,
    obvodDlyaTrubData,
    platformyData,
    polotnaBaufData,
    polotnaHaleadData,
    polotnaLumferData,
    polotnaMsdData,
    polotnaTeqtumData,
    profiliAlformData,
    profiliBizonData,
    profiliCatalogData,
    profiliFlexyData,
    profiliIoshkaData,
    profiliKraabData,
    profiliLumpferData,
    pvhPolotnaCatalogData,
    sT_Luce_220vData,
    svetilnikiCatalogData,
    tkaneviePolotnaData,
    torcevieZaglushkiData,
    zakladnieData,
    profilRaundCatalogData,
    raundTenevoiRadiusnyData,
    raundBlikPariashyData,
    raundDelitRazdelitelnyData,
    raundLineUniversalnyData,
} from "@/lib/data/localDataList";

export const SubCatalogs = (isHoverCardClose: boolean, setHoverCardClose: (value: boolean) => void) => {
    return {
        komplektuyshieCatalogDataSubCatalogsOne: (
            <>
                {/* torcevie-zaglushki */}
                {komplektuyshieCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 1 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {torcevieZaglushkiData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/torcevie-zaglushki/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {/* platformy */}
                {komplektuyshieCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 2 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {platformyData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/platformy/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {komplektuyshieCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 3 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {obvodDlyaTrubData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/obvod-dlya-trub/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        komplektuyshieCatalogDataSubCatalogsTwo: (
            <>
                {komplektuyshieCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 4 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {zakladnieData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/zakladnie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {/* platformy */}
                {komplektuyshieCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 5 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {magnitnieReshetkiData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/magnitnie-reshetki/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        komplektuyshieCatalogDataSubCatalogsThree: (
            <>
                {komplektuyshieCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 6 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {svetilnikiCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/svetilniki/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        profilRaundCatalogDataSubCatalogsOne: (
            <>
                {profilRaundCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 1 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {raundTenevoiRadiusnyData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/profil-raund-tenevoi-radiusny/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        profilRaundCatalogDataSubCatalogsTwo: (
            <>
                {profilRaundCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 2 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {raundBlikPariashyData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/profil-raund-blik-pariashy/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        profilRaundCatalogDataSubCatalogsThree: (
            <>
                {profilRaundCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 3 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {raundDelitRazdelitelnyData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/profil-raund-delit-razdelitelny/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        profilRaundCatalogDataSubCatalogsFour: (
            <>
                {profilRaundCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 4 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {raundLineUniversalnyData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profil-raund/profil-raund-line-universalny/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        profiliCatalogDataSubCatalogsOne: (
            <>
                {profiliCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 1 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliLumpferData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/profili-lumpfer/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 5 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliBizonData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/profili-bizon/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 6 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliIoshkaData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/profili-ioshka/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        profiliCatalogDataSubCatalogsTwo: (
            <>
                {profiliCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 2 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliKraabData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/profili-kraab/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        profiliCatalogDataSubCatalogsThree: (
            <>
                {profiliCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 3 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliFlexyData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/profili-flexy/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 4 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliAlformData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/profili/profili-alform/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        pvhPolotnaCatalogDataSubCatalogsOne: (
            <>
                {pvhPolotnaCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 1 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {polotnaBaufData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/polotna-bauf/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        pvhPolotnaCatalogDataSubCatalogsTwo: (
            <>
                {pvhPolotnaCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 2 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {polotnaMsdData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/polotna-msd/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {profiliCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 4 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {tkaneviePolotnaData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/komplektuyshie/tkanevie-polotna/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        pvhPolotnaCatalogDataSubCatalogsThree: (
            <>
                {pvhPolotnaCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 3 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {polotnaTeqtumData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/polotna-teqtum/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        pvhPolotnaCatalogDataSubCatalogsFour: (
            <>
                {pvhPolotnaCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 5 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {polotnaLumferData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/polotna-lumfer/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {pvhPolotnaCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 6 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {polotnaHaleadData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/pvh-polotna/polotna-halead/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        montazhnieRabotiCatalogDataSubCatalogsOne: (
            <>
                {allCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id === 4 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/montazhnie-raboti/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            <Text size="lg" fw={700} mt="sm" td="underline">
                                                {item.title}
                                            </Text>
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
                {montazhnieRabotiCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id < 15 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/montazhnie-raboti/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        montazhnieRabotiCatalogDataSubCatalogsTwo: (
            <>
                {montazhnieRabotiCatalogData.map(
                    (item: any, index: number) =>
                        item.title !== "img" &&
                        item.id > 15 && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/montazhnie-raboti/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        trekovieSystemyCatalogDataSubCatalogsOne: (
            <>
                <UnstyledButton
                    className={classes.subLink}
                    style={{
                        padding: "10px",
                        height: "100%",
                    }}
                >
                    <Link
                        href={`/catalog/trekovie-systemy/trekovie-systemy-lumfer-track-23-48v`}
                        style={{
                            color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                            textDecoration: "none",
                        }}
                        onClick={() => setHoverCardClose(true)}
                    >
                        <Group wrap="nowrap" align="flex-start">
                            <Flex justify="center" align="center">
                                <Text size="lg" fw={700} mt="sm" td="underline">
                                    LumFer Track 23 (48V)
                                </Text>
                            </Flex>
                        </Group>
                    </Link>
                </UnstyledButton>
                {lumferTrack_23_48vData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/trekovie-systemy/trekovie-systemy-lumfer-track-23-48v/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        trekovieSystemyCatalogDataSubCatalogsTwo: (
            <>
                <UnstyledButton
                    className={classes.subLink}
                    style={{
                        padding: "10px",
                        height: "100%",
                    }}
                >
                    <Link
                        href={`/catalog/trekovie-systemy/trekovie-systemy-lumfer-track-25-220v`}
                        style={{
                            color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                            textDecoration: "none",
                        }}
                        onClick={() => setHoverCardClose(true)}
                    >
                        <Group wrap="nowrap" align="flex-start">
                            <Flex justify="center" align="center">
                                <Text size="lg" fw={700} mt="sm" td="underline">
                                    LumFer Track 25 (220V)
                                </Text>
                            </Flex>
                        </Group>
                    </Link>
                </UnstyledButton>
                {lumferTrack_25_220vData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/trekovie-systemy/trekovie-systemy-lumfer-track-25-220v/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        trekovieSystemyCatalogDataSubCatalogsThree: (
            <>
                <UnstyledButton
                    className={classes.subLink}
                    style={{
                        padding: "10px",
                        height: "100%",
                    }}
                >
                    <Link
                        href={`/catalog/trekovie-systemy/trekovie-systemy-denkirs`}
                        style={{
                            color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                            textDecoration: "none",
                        }}
                        onClick={() => setHoverCardClose(true)}
                    >
                        <Group wrap="nowrap" align="flex-start">
                            <Flex justify="center" align="center">
                                <Text size="lg" fw={700} mt="sm" td="underline">
                                    Однофазная трековая система
                                </Text>
                            </Flex>
                        </Group>
                    </Link>
                </UnstyledButton>
                {denkirs_220vData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/trekovie-systemy/trekovie-systemy-denkirs/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
        trekovieSystemyCatalogDataSubCatalogsFour: (
            <>
                <UnstyledButton
                    className={classes.subLink}
                    style={{
                        padding: "10px",
                        height: "100%",
                    }}
                >
                    <Link
                        href={`/catalog/trekovie-systemy/trekovie-systemy-st-luce`}
                        style={{
                            color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                            textDecoration: "none",
                        }}
                        onClick={() => setHoverCardClose(true)}
                    >
                        <Group wrap="nowrap" align="flex-start">
                            <Flex justify="center" align="center">
                                <Text size="lg" fw={700} mt="sm" td="underline">
                                    ST Luce (220V)
                                </Text>
                            </Flex>
                        </Group>
                    </Link>
                </UnstyledButton>
                {sT_Luce_220vData.map(
                    (item: any, index: number) =>
                        item.title !== "img" && (
                            <UnstyledButton
                                key={index}
                                className={classes.subLink}
                                style={{
                                    padding: "5px",
                                    paddingLeft: "10px",
                                    height: "100%",
                                }}
                            >
                                <Link
                                    href={`/catalog/trekovie-systemy/trekovie-systemy-st-luce/${item?.link}`}
                                    style={{
                                        color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => setHoverCardClose(true)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Flex justify="center" align="center">
                                            {item.title.length > 30 ? (
                                                <HoverCard width={280} shadow="md">
                                                    <HoverCard.Target>
                                                        <Text size="sm" fw={500}>
                                                            {item.title.slice(0, 30)} ...
                                                        </Text>
                                                    </HoverCard.Target>
                                                    <HoverCard.Dropdown>
                                                        <Text size="sm" fw={500}>
                                                            {item.title}
                                                        </Text>
                                                    </HoverCard.Dropdown>
                                                </HoverCard>
                                            ) : (
                                                <Text size="sm" fw={500}>
                                                    {item.title}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Group>
                                </Link>
                            </UnstyledButton>
                        )
                )}
            </>
        ),
    };
};
