"use client";
import React from "react";
import { Provider } from "react-redux";
import { storePersist } from "@/store/store-persist";
import { persistStore } from "redux-persist";

persistStore(storePersist);
export default function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={storePersist}>{children}</Provider>;
}
