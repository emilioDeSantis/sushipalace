// components/Reservation.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <>
        <div
            style={{
                // backgroundColor: "#222425",
                display: "flex",
                flexDirection: "column",
                // boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
                width: "100%",
                alignItems: "center",
                marginTop: "2rem",
            }}
        >
            <div
                style={{
                    paddingInline: "5vw",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "3rem",
                    width: "100%",
                    maxWidth: "52rem",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "6rem",
                        height: "6rem",
                        position: "relative",
                    }}
                >
                    {/* <Image
                        src="/logoglow.png"
                        layout="fill"
                        objectFit="cover"
                        alt="logo"
                    /> */}
                </div>
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        letterSpacing: "0.8em",
                        marginTop: "1rem",
                        textTransform: "uppercase",
                        color: '#8566DE',
                        // opacity: 0.4,
                        opacity: 0,

                    }}>Sushi Palace</p>
            </div>
        </div>
        
        <div
            style={{
                // backgroundColor: "#222425",
                display: "flex",
                flexDirection: "column",
                // boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
                width: "100%",
                alignItems: "center",
                marginTop: "2rem",
                position: "fixed",
                bottom: 0,
                zIndex: -1,
            }}
        >
            <div
                style={{
                    paddingInline: "5vw",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "3rem",
                    width: "100%",
                    maxWidth: "52rem",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "6rem",
                        height: "6rem",
                        position: "relative",
                    }}
                >
                    <Image
                        src="/logoglow.png"
                        layout="fill"
                        objectFit="cover"
                        alt="logo"
                    />
                </div>
                <p
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        letterSpacing: "0.8em",
                        marginTop: "1rem",
                        textTransform: "uppercase",
                        color: '#8566DE',
                        opacity: 0.4,

                    }}>Sushi Palace</p>
            </div>
        </div>
        </>
    );
};

export default Footer;
