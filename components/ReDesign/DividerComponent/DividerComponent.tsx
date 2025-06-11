import React from "react";

export default function DividerComponent() {
    return (
        <div
            style={{
                position: "relative",
                height: "60px",
                marginTop: 0,
                marginBottom: 60,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    borderRadius: 30,
                    height: "30px",
                    marginBottom: "50px",
                    background: "white",
                    zIndex: 15,
                    width: "100%",
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    height: "60px",
                    width: "100%",
                    top: 10,
                    left: 0,
                    background: "#e9ecef",
                    zIndex: 10,
                }}
            ></div>
            <div
                style={{
                    position: "relative",
                    top: 60,
                    borderRadius: 30,
                    height: "30px",
                    marginBottom: "50px",
                    background: "white",
                    zIndex: 15,
                    width: "100%",
                }}
            ></div>
        </div>
    );
}
