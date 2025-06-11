import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist/es/constants";
import {
    CatalogSectionType,
    CatalogState,
    ItemPageType,
    SubCatalogSectionComplectType,
    SubCatalogSectionItemsComplectType,
} from "@/types/catalog-data-types";

const initialState = {
    catalogSection: "",
    subCatalogSectionComplect: "",
    subCatalogSectionItemsComplect: "",
    itemPage: "" as ItemPageType,
} satisfies CatalogState as CatalogState;

const catalogDataSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        changeCatalogSection(state, action: PayloadAction<CatalogSectionType>) {
            state.catalogSection = action.payload;
        },
        changeSubCatalogSectionComplect(state, action: PayloadAction<SubCatalogSectionComplectType>) {
            state.subCatalogSectionComplect = action.payload;
        },
        changeSubCatalogSectionItemsComplect(state, action: PayloadAction<SubCatalogSectionItemsComplectType>) {
            state.subCatalogSectionItemsComplect = action.payload;
        },
        changeItemPage(state, action: PayloadAction<ItemPageType>) {
            state.itemPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => {
            return initialState;
        });
    },
});

export const {
    changeCatalogSection,
    changeSubCatalogSectionComplect,
    changeSubCatalogSectionItemsComplect,
    changeItemPage,
} = catalogDataSlice.actions;
export default catalogDataSlice.reducer;
