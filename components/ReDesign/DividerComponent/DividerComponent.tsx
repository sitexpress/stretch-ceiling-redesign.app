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
                    borderRadius: "0px 0px 30px 30px",
                    height: "30px",
                    marginBottom: "50px",
                    background: "#f1f3f5",
                    zIndex: 15,
                    width: "100%",
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    height: "30px",
                    width: "100%",
                    top: 10,
                    left: 0,
                    background: "white",
                    zIndex: 10,
                }}
            ></div>
            <div
                style={{
                    position: "relative",
                    top: 60,
                    borderRadius: "30px 30px 0px 0px",
                    height: "60px",
                    // marginBottom: "50px",
                    background: "#f1f3f5",
                    zIndex: 15,
                    width: "100%",
                }}
            ></div>
        </div>
    );
}
