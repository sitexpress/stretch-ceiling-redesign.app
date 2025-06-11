import React from "react";
import { Card, Divider, Flex, Group, Image, NumberFormatter, Text, Table } from "@mantine/core";
import Link from "next/link";
import InputBtn from "../InputBtn/InputBtn";
import classes from "./CatalogBuilder.module.css";
import { AllCatalogType, CatalogType, SubCatalogItemsType } from "@/types/catalog-data-types";

export function allCatalogBuilder(catalogDataValue: AllCatalogType[]) {    
    return catalogDataValue.map(
        (item: AllCatalogType, index: number) =>
            item.id !== 0 && (
                <Link key={index} href={`/catalog/${item.link}`} className={classes.my_link}>
                    <Card radius="xl" className={classes.card} >
                        <Image
                            height="300px"
                            width="300px"
                            src={item.src ? item.src : "/images/catalog/placeholder-image.jpeg"}
                            fallbackSrc={"/images/catalog/placeholder-image.jpg"}
                            alt={``}
                            className={classes.img}
                        />
                    </Card>

                    <Text c="dimmed" className={classes.title} size="xs" tt="uppercase" fw={700} mt="xs" ta="center">
                        {item.title}
                    </Text>
                </Link>
            )
    );
}

export function catalogBuilder(catalogDataValue: CatalogType[], slug: string, prevRout?: string) {
    const href = prevRout ? `/catalog/${prevRout}/${slug}` : `/catalog/${slug}`;
    return catalogDataValue.map(
        (item: CatalogType, index: number) =>
            item.id !== 0 && (
                <Link key={index} href={`${href}/${item.link}`} className={classes.my_link}>
                    <Card className={classes.card}>
                        <Image
                            height="300px"
                            width="300px"
                            src={item.src ? item.src : "/images/catalog/placeholder-image.jpg"}
                            fallbackSrc={"/images/catalog/placeholder-image.jpg"}
                            radius="sm"
                            alt={``}
                            className={classes.img}
                        />
                    </Card>

                    <Text c="dimmed" className={classes.title} size="xs" tt="uppercase" fw={700} mt="xs" ta="center">
                        {item.title}
                    </Text>
                </Link>
            )
    );
}

export function subCatalogBuilder(
    catalogDataValue: SubCatalogItemsType[],
    subSlug: string,
    prevRout?: string,
    prevPrevRout?: string
) {
    const href = prevPrevRout ? `/catalog/${prevPrevRout}/${prevRout}/${subSlug}` : `/catalog/${prevRout}/${subSlug}`;
    return subSlug === "montazhnie-raboti"
        ? catalogDataValue.map(
              (item: SubCatalogItemsType, index: number) =>
                  item.id !== 0 && (
                      <Flex
                          key={index}
                          justify="space-between"
                          direction="column"
                          align="flex-start"
                          className={item.element ? classes.calc_wrapper : ""}
                      >
                          <div className={classes.my_link}>
                              <Card radius="md" className={classes.mont_card}>
                                  <Image
                                      height="300px"
                                      width="300px"
                                      src={item.src ? item.src : "/images/catalog/placeholder-image.jpeg"}
                                      fallbackSrc={"/images/catalog/placeholder-image.jpg"}
                                      radius="sm"
                                      alt={``}
                                      className={classes.img}
                                  />
                              </Card>

                              <Text
                                  c="dimmed"
                                  className={classes.title}
                                  size="xs"
                                  tt="uppercase"
                                  fw={700}
                                  mt="xs"
                                  ta="center"
                              >
                                  {item.title}
                              </Text>
                              {item.byType && (
                                  <Text c="dimmed" size="xs" fw={500} mt="xs" ta="center">
                                      по типу: {item.byType}
                                  </Text>
                              )}
                          </div>
                          <Flex justify="end" direction="column" align="flex-start" w="auto" p={12}>
                              {item.element && (
                                  <Flex
                                      mih={10}
                                      justify="space-between"
                                      align="flex-start"
                                      direction="column"
                                      wrap="wrap"
                                  >
                                      {/* <Text size="sm" fw="500" ta="center" mt="md" c="dimmed">
                                          Цена:{" "}
                                          <NumberFormatter value={item.basePrice} suffix={` ₽/${item.measurement}`} />
                                      </Text> */}
                                      <Text size="sm" fw="500" ta="center" mt="md" c="dimmed">
                                          Монтаж:{" "}
                                          <NumberFormatter value={item.workPrice} suffix={` ₽/${item.measurement}`} />
                                      </Text>
                                      <Text size="sm" fw="500" c="green.6" ta="center" mt="md">
                                          Итого: <NumberFormatter value={item.basePrice + item.workPrice} suffix=" ₽" />
                                      </Text>
                                  </Flex>
                              )}

                              {item.element && <InputBtn subCatalogItems={item} />}
                          </Flex>
                      </Flex>
                  )
          )
        : catalogDataValue.map(
              (item: SubCatalogItemsType, index: number) =>
                  item.id !== 0 && (
                      <Flex
                          key={index}
                          justify="space-between"
                          direction="column"
                          align="flex-start"
                          className={item.element ? classes.calc_wrapper : ""}
                      >
                          <Link href={`${href}/${item.link}`} className={classes.my_link}>
                              <Card radius="md" className={prevPrevRout ? classes.calc_card : classes.card}>
                                  <Image
                                      height="300px"
                                      width="300px"
                                      src={item.src ? item.src : "/images/catalog/placeholder-image.jpeg"}
                                      fallbackSrc={"/images/catalog/placeholder-image.jpg"}
                                      radius="sm"
                                      alt={``}
                                      className={classes.img}
                                  />
                              </Card>

                              <Text
                                  c="dimmed"
                                  className={classes.title}
                                  size="xs"
                                  tt="uppercase"
                                  fw={700}
                                  mt="xs"
                                  ta="center"
                              >
                                  {item.title}
                              </Text>
                              {item.byType && (
                                  <Text c="dimmed" size="xs" fw={500} mt="xs" ta="center">
                                      по типу: {item.byType}
                                  </Text>
                              )}
                          </Link>
                          <Flex justify="end" direction="column" align="flex-start" w="auto" p={12}>
                              {item.element && (
                                  <Flex
                                      mih={10}
                                      justify="space-between"
                                      align="flex-start"
                                      direction="column"
                                      wrap="wrap"
                                  >
                                      <Text size="sm" fw="500" ta="center" mt="md" c="dimmed">
                                          {!!item.basePrice && (
                                              <>
                                                  Цена:{" "}
                                                  <NumberFormatter
                                                      value={item.basePrice}
                                                      suffix={` ₽/${item.measurement}`}
                                                  />
                                              </>
                                          )}
                                      </Text>
                                      <Text size="sm" fw="500" ta="center" mt="md" c="dimmed">
                                          {!!item.workPrice && (
                                              <>
                                                  Монтаж:{" "}
                                                  <NumberFormatter
                                                      value={item.workPrice}
                                                      suffix={` ₽/${item.measurement}`}
                                                  />
                                              </>
                                          )}
                                      </Text>
                                      <Text size="sm" fw="500" c="green.6" ta="center" mt="md">
                                          Итого: <NumberFormatter value={item.basePrice + item.workPrice} suffix=" ₽" />
                                      </Text>
                                  </Flex>
                              )}

                              {item.element && <InputBtn subCatalogItems={item} />}
                          </Flex>
                      </Flex>
                  )
          );
}

// Calculator
export function subSubCatalogBuilder(
    catalogDataValue: SubCatalogItemsType[],
    subSlug: string,
    prevRout?: string,
    prevPrevRout?: string
) {
    // const href = !!prevPrevRout ? `/catalog/${prevPrevRout}/${prevRout}/${subSlug}` : `/catalog/${prevRout}/${subSlug}`;
    return catalogDataValue.map(
        (item: SubCatalogItemsType, index: number) =>
            item.id !== 0 && (
                <Flex
                    key={index}
                    justify="space-between"
                    direction="column"
                    align="flex-start"
                    className={item.element ? classes.calc_wrapper : ""}
                >
                    <Link
                        href={`/catalog/${prevPrevRout}/${prevRout}/${subSlug}/${item.link}`}
                        className={classes.my_link}
                    >
                        <Card radius="md" className={classes.calc_card}>
                            <Image
                                height="300px"
                                width="300px"
                                src={item.src ? item.src : "/images/catalog/placeholder-image.jpeg"}
                                fallbackSrc={"/images/catalog/placeholder-image.jpg"}
                                // radius="sm"
                                alt={``}
                                className={classes.img}
                            />
                        </Card>

                        <Text
                            c="dimmed"
                            className={classes.title}
                            size="xs"
                            tt="uppercase"
                            fw={700}
                            mt="xs"
                            ta="center"
                        >
                            {item.title}
                        </Text>
                        {item.byType && (
                            <Text
                                c="dimmed"
                                className={classes.title}
                                size="xs"
                                tt="uppercase"
                                fw={700}
                                mt="xs"
                                ta="center"
                            >
                                По типу: {item.byType}
                            </Text>
                        )}
                    </Link>
                    <Flex justify="end" direction="column" align="flex-start" w="auto" p={12}>
                        {item.element && (
                            <Flex
                                mih={10}
                                justify="flex-start"
                                align="flex-start"
                                direction="column"
                                wrap="wrap"
                                p={10}
                            >
                                <Text size="sm" fw="500" ta="center" mt="md" c="dimmed">
                                    {!!item.basePrice && (
                                        <>
                                            Цена:{" "}
                                            <NumberFormatter value={item.basePrice} suffix={` ₽/${item.measurement}`} />
                                        </>
                                    )}
                                </Text>
                                <Text size="sm" fw="500" ta="center" mt="md" c="dimmed">
                                    Монтаж: <NumberFormatter value={item.workPrice} suffix={` ₽/${item.measurement}`} />
                                </Text>
                                <Text size="sm" fw="500" c="green.6" ta="center" mt="md">
                                    Итого: <NumberFormatter value={item.basePrice + item.workPrice} suffix=" ₽" />
                                </Text>
                            </Flex>
                        )}
                        {item.element && <InputBtn subCatalogItems={item} />}
                    </Flex>
                </Flex>
            )
    );
}

export function itemCatalogBuilder(itemValue: SubCatalogItemsType[]) {
    return itemValue.map(
        (item: SubCatalogItemsType, index: number) =>
            item.id !== 0 && (
                <Flex
                    key={index}
                    justify="center"
                    ta="center"
                    align="center"
                    direction="column"
                    w="100%"
                >
                    <Group style={{ width: "300px", height: "300px" }} justify="center">
                        <Image
                            src={item.src ? item.src : "/images/catalog/placeholder-image.jpeg"}
                            radius="md"
                            alt={``}
                            ta="center"
                            className={classes.img}
                        />
                    </Group>

                    <Flex justify="center" ta="center" align="center" direction="column">
                        <Flex
                            ta="center"
                            justify="center"
                            align="center"
                            direction="column"
                            p="20"
                        >
                            <Flex justify="center" ta="center" align="center" direction="column" w="auto">
                                <Text
                                    className={classes.title_last}
                                    size="lg"
                                    fw={700}
                                    ta="center"
                                    mb="xs"
                                    td="underline"
                                    // c="dimmed"
                                    fs="italic"
                                >
                                    Описание:
                                </Text>
                                <Text className={classes.subtitle} fw={500} ta="justify" fs="italic" w="auto">
                                    {item.subtitle}
                                </Text>
                            </Flex>

                            <Flex
                                justify="center"
                                ta="center"
                                align="center"
                                direction="column"
                                mt="50px"
                                p="40px"
                                style={{
                                    // boxShadow:
                                    //     "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                                    marginTop: "5px",
                                    borderTop: "1px solid lightGray",
                                    borderBottom: "1px solid lightGray",
                                    border: "1px solid lightGray",
                                    borderRadius: "40px",
                                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
                                    // borderRadius: "10px",
                                }}
                            >
                                {item.element && (
                                    <Flex
                                        c="green.6"
                                        gap="5px"
                                        direction="column"
                                        align="center"
                                        mb="xl"
                                    >
                                        <Group>
                                            {!!item.basePrice && (
                                                <>
                                                    <Text component="span" className={classes.price}>
                                                        Цена:{" "}
                                                    </Text>
                                                    <NumberFormatter
                                                        className={classes.price}
                                                        value={item.basePrice}
                                                        suffix=" ₽"
                                                    />
                                                </>
                                            )}
                                        </Group>

                                        <Group>
                                            {!!item.workPrice && (
                                                <>
                                                    <Text component="span" className={classes.price}>
                                                        Монтаж:{" "}
                                                    </Text>{" "}
                                                    <NumberFormatter
                                                        className={classes.price}
                                                        value={item.workPrice}
                                                        suffix=" ₽"
                                                    />
                                                </>
                                            )}
                                        </Group>

                                        <Group>
                                            <Text component="span" className={classes.price}>
                                                Итого:{" "}
                                            </Text>
                                            <NumberFormatter
                                                className={classes.price}
                                                value={item.basePrice + item.workPrice}
                                                suffix=" ₽"
                                            />
                                        </Group>
                                    </Flex>
                                )}
                                {item.element && <InputBtn subCatalogItems={item} />}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            )
    );
}
