import { SubCatalogItemsType } from "@/types/catalog-data-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist/es/constants";

export interface Calculations {
    calculations: SubCatalogItemsType[];
    isOpen: boolean;
    isNotify: boolean;
}
const initialState = {
    calculations: [],
    isOpen: false,
    isNotify: false,
} satisfies Calculations as Calculations;

const clientSessionCalculationsSlice = createSlice({
    name: "clientSessionCalculations",
    initialState,
    reducers: {
        changeCalculations(state, action: PayloadAction<SubCatalogItemsType>) {
            state.calculations.push(action.payload);
        },
        changeCalculationAmount(state, action: PayloadAction<SubCatalogItemsType[]>) {
            state.calculations = [];
            state.calculations = action.payload;
        },
        clearAllCalculation(state) {
            state.calculations = [];
        },

        removeCertainPositionFromCalculation(state, action: PayloadAction<number>) {
            state.calculations.splice(action.payload, 1);
        },
        decrementCertainPositionFromCalculation(state, action: PayloadAction<SubCatalogItemsType[]>) {
            state.calculations = [];
            state.calculations = action.payload;
        },
        incrementCertainPositionFromCalculation(state, action: PayloadAction<SubCatalogItemsType[]>) {
            state.calculations = [];
            state.calculations = action.payload;
        },
        openCalculationsDrawer(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
        changeNotification(state, action: PayloadAction<boolean>) {
            state.isNotify = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => {
            return initialState;
        });
    },
});

export const {
    changeCalculations,
    openCalculationsDrawer,
    clearAllCalculation,
    changeCalculationAmount,
    removeCertainPositionFromCalculation,
    incrementCertainPositionFromCalculation,
    decrementCertainPositionFromCalculation,
    changeNotification,
} = clientSessionCalculationsSlice.actions;
export default clientSessionCalculationsSlice.reducer;
