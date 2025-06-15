import { LoadingOverlay, Box } from "@mantine/core";
export default function Loading() {
    return (
        <Box
            style={{
                position: "absolute",
                zIndex: 1001,
                height: "100%",
                width: "100%",
                       background: "#f1f3f5",
            }}
        >
            <LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 100 }} />
        </Box>
    );
}
