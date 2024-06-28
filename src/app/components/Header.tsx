"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import useHideNavOnScroll from "../hooks/useHideNavOnScroll";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";

const Header: React.FC = () => {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const pathname = usePathname();

    const visible = useHideNavOnScroll();

    const links = [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Order", href: "https://food.google.com/chooseprovider?restaurantId=/g/11s4wxtznr&g2lbs=AOHF13lrzUBxThBincW6yis87SK8AemlCRvKdmDxEb_GNfKQxt72TGPwcqJ7c92s9MGvWoE5tw25-4Wpe-89MpaD1TTpIjk5-dBUwRsFGXeaGEJUMdZHtx0%3D&hl=en-US&gl=us&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=DNR9ZviqEP-i5NoP2Yu1gAc&ei=DNR9ZviqEP-i5NoP2Yu1gAc&opi=79508299&foub=mcpp&sei=Ca0zlz1gAFWsERPXyGffq6Ej&utm_campaign&utm_source=tactile&addressId=2790542920731612458&orderType=2&partnerId=11344137403575542233&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId" }, 
        { label: "Reserve", href: "https://www.opentable.com/r/sushi-palace-los-angeles?ref=1068", external: true },
        // { label: "Contact", href: "/contact" },

    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                position: "fixed",
                top: 0,
                transform: `translateY(${visible ? 0 : -4}rem)`,
                transition: "0.3s",
                zIndex: 1000,
                background: '#020202' ,
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    zIndex: 1000,
                    letterSpacing: "0.1em",
                    paddingInline: "5vw",
                }}
            >
                <Link href="/" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Logo />
                </Link>
                <nav
                    className="desktop"
                    style={{
                        gap: "2.4rem",
                        fontWeight: 300,
                        letterSpacing: "0.04em",
                        height: "4rem",
                        opacity: 1,
                    }}
                >
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            ref={(el) => {
                                linkRefs.current[index] = el;
                            }}
                            className={link.href == pathname ? "" : "nav-link"}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "0.3s",
                                fontWeight: 400,
                            }}
                            href={link.href}
                        >
                            <div>{link.label}</div>
                        </Link>
                    ))}
                </nav>
                <div className="mobile">
                    <DropdownMenu navLinks={links as { label: string; href: string }[]} />
                </div>
            </div>
        </div>
    );
};

export default Header;
