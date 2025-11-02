import { Button, Flex, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

export function DividerComponent() {
    return (
        <div
            style={{
                position: "relative",
                height: "60px",
                marginTop: 0,
                marginBottom: "60px",
                zIndex: 150,
                background: "white",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    borderRadius: "0px 0px 30px 30px",
                    height: "30px",
                    marginBottom: "50px",
                    background: "#f1f3f5",
                    zIndex: 15,
                    width: "100%",
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    height: "30px",
                    width: "100%",
                    top: 10,
                    left: 0,
                    background: "white",
                    zIndex: 10,
                }}
            ></div>
            <div
                style={{
                    position: "relative",
                    top: 60,
                    borderRadius: "30px 30px 0px 0px",
                    height: "60px",
                    marginBottom: "50px",
                    background: "#f1f3f5",
                    zIndex: 15,
                    width: "100%",
                }}
            ></div>
        </div>
    );
}

export function DividerComponentConstrUp() {
    return (
        <div
            style={{
                position: "relative",
                height: "60px",
                marginTop: 0,
                marginBottom: "60px",
                zIndex: 15,
                background: "transparent",
            }}
        >
            {/* Градиент на весь контент */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",

                    zIndex: 5,
                }}
            ></div>

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    borderRadius: "0px 0px 30px 30px",
                    height: "30px",
                    marginBottom: "50px",
                    background: "#f1f3f5",
                    zIndex: 15,
                    width: "100%",
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    height: "30px",
                    width: "100%",
                    top: 10,
                    left: 0,
                    background: "white",
                    zIndex: 10,
                }}
            ></div>
        </div>
    );
}

type DividerComponentConstrDownType = {
    setHeight: (value: number) => void;
    height: number;
};

export const DividerComponentConstrDown: React.FC<DividerComponentConstrDownType> = ({ height, setHeight }) => {
        const theme = useMantineTheme();
        const md = theme.breakpoints.md;
        const matchMd = useMediaQuery(`(min-width: ${md})`);
    const onSetUnwrapHandler = () => {
        if (height < 8400  && matchMd  ) {
            setHeight(height + 1000)
        } 
        
        if (height < 14000 && !matchMd  ){
            setHeight(height + 1000)
        }
    };

    const onSetWrapHandler = () => {
        setHeight(1000)
    }

    return (
        <div
            style={{
                position: "relative",
                height: "180px",
                zIndex: 15,
                paddingTop: 100,
                background:
                    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255, 1) 100%)",
            }}
        >
            <Flex justify="center" gap={10}>
                <Button ta="center" onClick={onSetUnwrapHandler} radius="lg" size="md" variant="default">
                    Развернуть
                </Button>
                <Button ta="center" onClick={onSetWrapHandler} radius="lg" size="md" variant="default">
                    Свернуть
                </Button>
            </Flex>
        </div>
    );
};
