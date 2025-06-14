"use client";
import { createTheme } from "@mantine/core";
import "./styles/local.fonts/FiraSansExtraCondensedLight.css";
import "./styles/local.fonts/FiraSansExtraCondensedRegular.css";
import "./styles/local.fonts/FiraSansExtraCondensedSemiBold.css";

import "./styles/local.fonts/TildaSansRegular.css";
import "./styles/local.fonts/TildaSansMedium.css";
import "./styles/local.fonts/TildaSansSemibold.css";

export const theme = createTheme({
    fontFamily: "TildaSansRegular, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    breakpoints: {
        xs: "30em",
        sm: "48em",
        md: "64em",
        lg: "74em",
        xl: "90em",
    },
});
