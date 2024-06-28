// pages/index.tsx
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import LinkButton from "./components/LinkButton";
import Hero from "./components/Hero";
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: '#121415',
            }}
        >
            <div
            className="home-container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    paddingTop: "3rem",
                }}
            >
                <Hero />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                        paddingInline: "5vw",
                        zIndex: 3,
                    }}
                >
                    <LinkButton href="https://www.opentable.com/r/sushi-palace-los-angeles?ref=1068">Reserve a table</LinkButton>
                    <LinkButton href="https://food.google.com/chooseprovider?restaurantId=/g/11s4wxtznr&g2lbs=AOHF13lrzUBxThBincW6yis87SK8AemlCRvKdmDxEb_GNfKQxt72TGPwcqJ7c92s9MGvWoE5tw25-4Wpe-89MpaD1TTpIjk5-dBUwRsFGXeaGEJUMdZHtx0%3D&hl=en-US&gl=us&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=DNR9ZviqEP-i5NoP2Yu1gAc&ei=DNR9ZviqEP-i5NoP2Yu1gAc&opi=79508299&foub=mcpp&sei=Ca0zlz1gAFWsERPXyGffq6Ej&utm_campaign&utm_source=tactile&addressId=2790542920731612458&orderType=2&partnerId=11344137403575542233&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId">Order online</LinkButton>
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "2.4rem",
                }}
            >
                <div
                    style={{
                        width: "8rem",
                        borderTop: "0.3px solid #ffffff88",
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingInline: "5vw",
                    paddingBottom: "5rem",
                    width: "100%",
                    maxWidth: "52rem",
                }}
            >
                <h2
                    style={{
                        marginTop: "3.6rem",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize: "1.2rem",
                        letterSpacing: "0.52em",
                        lineHeight: 1.5,
                    }}
                >
                    The Art of Sushi Redefined
                </h2>

                <p
                    style={{
                        marginTop: "1.6rem",
                        fontWeight: 300,
                        letterSpacing: "0.06em",
                        opacity: 0.8,
                        lineHeight: 1.6,
                    }}
                >
                    {`Step into the allure of Sushi Palace, where Hollywood's elegance comes alive. Our intimate, dimly-lit ambiance, sets the perfect scene for a luxurious dining experience. Savor the artistry of our chefs, whose creations blend traditional techniques with innovative flavors. Join us for an unforgettable dining experience, right here in the heart of Hollywood.`}
                </p>
            </div>
            <Reservation />
            <div style={{
              height: '2.4rem',
            }}/>
            <Menu/>
        </main>
    );
}
