"use client";
import React from "react";
import { usePathname } from "next/navigation";
// import { localDataList } from "@/lib/data/localDataList";
import { localDataList } from "@/lib/data/localDataList";

export function TitleComponent() {
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

    const crumbsMapped = uniqeArray.map((crumb, index) => {
        const filtredCrumb = localDataList.filter((item) => item.link === crumb && item.title);

        return (
            <div key={index}>
                {crumb === "catalog"
                    ? "Каталог"
                    : index === 2
                      ? `${filtredCrumb[0].title}`
                      : index === 3
                        ? `${filtredCrumb[0].title}`
                        : index === 4
                          ? `${filtredCrumb[0].title}`
                          : index === 5
                            ? `${filtredCrumb[0].title}`
                            : ""}
            </div>
        );
    });

    return <>{crumbsMapped[crumbsMapped.length - 1]}</>;
}
