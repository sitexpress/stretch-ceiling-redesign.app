import { LoadingOverlay, Box } from "@mantine/core";
import React from "react";
export default function Loading() {
    return (
        <Box
            style={{
                position: "absolute",
                zIndex: 1001,
                height: "100%",
                width: "100%",
            }}
        >
            <LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 100 }} />
        </Box>
    );
}
