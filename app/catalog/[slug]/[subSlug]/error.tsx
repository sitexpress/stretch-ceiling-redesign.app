"use client"; // Error components must be Client Components
import React from "react";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 1002,
            }}
        >
            <h2>Над этой страницей мы пока работаем!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
