"use client";
import React from "react";
import { Breadcrumbs, Group, Text } from "@mantine/core";
import { IconHomeFilled, IconHomeShare, IconHomeUp } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./BreadcrumbsComponent.module.css";
import { localDataList } from "@/lib/data/localDataList";

export function BreadcrumbsComponent() {
    const pathName = usePathname();
    const array = pathName.split("/");
    const uniqeArray = makeUniq(array);

    function makeUniq(arr: string[]) {
        let count = 0;

        return arr.reduce((acc: string[], currentValue: string) => {
            count++;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            acc.indexOf(currentValue) === -1 && count === 1
                ? acc.push("/")
                : acc.indexOf(currentValue) === -1 && count === 2
                  ? acc.push("catalog")
                  : acc.indexOf(currentValue) === -1 && count > 2 && acc.push(currentValue);
            return acc;
        }, []);
    }
    // console.log("pathName:", pathName);
    // console.log("uniqeArray:", uniqeArray);

    const crumbsMapped = uniqeArray.map((crumb, index, arr) => {
        const filtredCrumb = localDataList.filter((item) => item.link === crumb && item.title);

        return (
            <div key={index}>
                <Link
                    className={classes.link}
                    href={
                        crumb === "catalog"
                            ? "/catalog"
                            : index === 2
                              ? `/catalog/${crumb}`
                              : index === 3
                                ? `/catalog/${arr[2]}/${crumb}`
                                : index === 4
                                  ? `/catalog/${arr[2]}/${arr[3]}/${crumb}`
                                  : index === 5
                                    ? `/catalog/${arr[2]}/${arr[3]}/${arr[4]}/${crumb}`
                                    : "/"
                    }
                >
                    <Text c="dimmed" size="xs">
                        {/* {crumb === "/" ? <IconHomeUp /> : crumb === "catalog" ? "каталог" : crumb} */}
                        {crumb === "catalog" ? (
                            <Text c="blue.4" fw={700}>Каталог</Text>
                        ) : index === 2 ? (
                            <Text c="blue.4" fw={700}>{filtredCrumb[0].title}</Text>
                        ) : index === 3 ? (
                            <Text c="blue.4" fw={700}>{filtredCrumb[0].title}</Text>
                        ) : index === 4 ? (
                            <Text c="blue.4" fw={700}>{filtredCrumb[0].title}</Text>
                        ) : index === 5 ? (
                            <Text c="blue.4" fw={700}>{filtredCrumb[0].title}</Text>   
                        ) : (
                            <Text c="blue.4" fw={700}>На главную</Text>    
                            // <IconHomeShare />
                            // <IconHomeUp height={20} />
                        )}
                    </Text>
                </Link>
            </div>
        );
    });

    return (
   
            <Breadcrumbs
                style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "center" }}
                separator=">"
                separatorMargin="sm"
                className={classes.breadwrapper}
            >
                {crumbsMapped}
            </Breadcrumbs>
    );
}
