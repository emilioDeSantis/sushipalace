"use client";
import { useState, useRef, useEffect, FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DropdownMenuProps = {
    navLinks: { label: string; href: string }[];
};

const DropdownMenu: FC<DropdownMenuProps> = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                // alert('close')
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, []);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div style={{ position: "relative", }}>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                style={{
                    border: "none",
                    cursor: "pointer",
                    height: "3rem",
                    width: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    background: "none",
                    color: "black",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "2rem",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            transition: "top 0.2s ease, transform 0.4s ease",
                            position: "absolute",
                            height: "1px",
                            background: "white",
                            width: "100%",
                            transform: isOpen
                                ? "rotate(45deg)"
                                : "rotate(0deg)",
                            top: isOpen ? "0" : "-0.36rem",
                        }}
                    />
                    <div
                        style={{
                            transition: "0.2s ease",
                            height: "1px",
                            background: "white",
                            width: "100%",
                            opacity: isOpen ? 0 : 1,
                        }}
                    />
                    <div
                        style={{
                            transition: "top 0.2s ease, transform 0.4s ease",
                            position: "absolute",
                            height: "1px",
                            background: "white",
                            width: "100%",
                            transform: isOpen
                                ? "rotate(-45deg)"
                                : "rotate(0deg)",
                            top: isOpen ? "0" : "0.36rem",
                        }}
                    />
                </div>
            </button>
            <div
                style={{
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100vh",
                    transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
                    transition: "transform 0.3s ease, background 0.3s ease",
                    zIndex: -1,
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "1rem",
                    fontWeight: 300,
                    borderRadius: "none",
                    letterSpacing: "0.3em",
                    opacity: 1,
                    fontSize: "2rem", 
                    background: isOpen ? "#121415":'#020202',
                    // background: isOpen ? "#000000dd":'#020202',
                    // backdropFilter: "blur(30px)", 
                    // WebkitBackdropFilter: "blur(30px)",
                    textTransform: "uppercase",
                    color: "#F9361B",
                    gap: "1rem",
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        style={{
                            paddingInline: "5vw", 

                        }}
                    >
                        <div
                            className={link.href == pathname ? "" : "nav-link"}
                            style={
                                {
                                    // fontFamily: "Favorit",
                                }
                            }
                        >
                            {link.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
