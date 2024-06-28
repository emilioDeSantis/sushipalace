// components/Reservation.tsx
import React from "react";
import Link from "next/link";

const Reservation: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "#423F50",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
                width: "100%",
                alignItems: "center",
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
                }}
            >
                <p
                    style={{
                        fontSize: "1rem",
                        fontWeight: 300,
                        letterSpacing: "0.12em",
                        marginTop: "3.2rem",
                    }}
                >
                    Make a
                </p>
                <h1
                    style={{
                        fontSize: "2.4rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        marginTop: "0.4rem",
                    }}
                >
                    RESERVATION
                </h1>
                <a
                    href="https://www.opentable.com/r/sushi-palace-los-angeles?ref=1068"
                    className="reserve-button"
                    style={{
                        display: "flex",
                        paddingBlock: "0.8rem",
                        color: "black",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        fontSize: "1.2rem",
                        background: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "2.4rem",
                        maxWidth: "30rem",
                    }}
                >
                    Reserve a table
                </a>
                <h2
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        marginTop: "3.6rem",
                        lineHeight: 1.5,
                        textTransform: "uppercase",
                    }}
                >
                    HOURS OF OPERATION
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textTransform: "uppercase",
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        letterSpacing: "0.12em",
                        opacity: 0.8,
                        gap: "0.6rem",
                        marginTop: "1rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{}}>TUESDAY-SUNDAY</p>
                        <p style={{}}>12-10PM</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{}}>MONDAY</p>
                        <p style={{}}>CLOSED</p>
                    </div>
                </div>

                <h2
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        marginTop: "3.6rem",
                        lineHeight: 1.5,
                        textTransform: "uppercase",
                    }}
                >
                    Reservations
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textTransform: "uppercase",
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        letterSpacing: "0.12em",
                        opacity: 0.8,
                        gap: "0.6rem",
                        marginTop: "1rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{}}>Phone</p>
                        <p style={{}}>1-310-936-3366</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{}}>Email</p>
                        <p style={{ textTransform: "initial" }}>
                            reservations@sushipalace.com
                        </p>
                    </div>
                </div>
                <h2
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        marginTop: "3.6rem",
                        lineHeight: 1.5,
                        textTransform: "uppercase",
                    }}
                >
                    location
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textTransform: "uppercase",
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        letterSpacing: "0.12em",
                        opacity: 0.8,
                        gap: "0.6rem",
                        marginTop: "1rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <p style={{}}>6535 Melrose Ave, Los Angeles, CA </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
