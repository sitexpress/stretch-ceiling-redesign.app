import catalogDataSlice from "@/store/catalog-data-slice";
import clientSessionCalculationsSlice from "@/store/client-session-calculations-slice";
import headerMenuTabDataSlice from "@/store/header-menu-tab-data-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const tabDataPersistConfig = {
    key: "tabData",
    storage: storage,
    whiteList: ["tab"],
};

const catalogDataPersistConfig = {
    key: "catalogData",
    storage: storage,
    whiteList: ["catalogSection", "subCatalogSectionComplect", "subCatalogSectionItemsComplect", "itemPage"],
};

const clientSessionCalculationsPersistConfig = {
    key: "clientSessionCalculations",
    storage: storage,
    whiteList: ["calculations", "isOpen", "isNotify"],
};

const rootReducer = combineReducers({
    tabData: persistReducer(tabDataPersistConfig, headerMenuTabDataSlice),
    catalogData: persistReducer(catalogDataPersistConfig, catalogDataSlice),
    clientSessionCalculationsData: persistReducer(
        clientSessionCalculationsPersistConfig,
        clientSessionCalculationsSlice
    ),
});
export const storePersist = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof storePersist.getState>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storePersist.getState>;
export type AppDispatch = typeof storePersist.dispatch;
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
