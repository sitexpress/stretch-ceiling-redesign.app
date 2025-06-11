import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {PURGE} from "redux-persist/es/constants";

interface TabState {
     tab: "меню" |  "каталог"
}

const initialState = { tab: "меню" } satisfies TabState as TabState

const headerMenuTabDataSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        changeTab(state,action: PayloadAction<"меню" |  "каталог">) {
            state.tab = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => {
            return initialState;
        });
    },
})

export const {
    changeTab
} = headerMenuTabDataSlice.actions
export default headerMenuTabDataSlice.reducer
