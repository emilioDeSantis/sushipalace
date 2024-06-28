import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
    openGraph: {
        title: "Sushi Palace | Best Sushi Restaurant in Hollywood, CA",
        description:
            "Experience the finest sushi at Sushi Palace in Hollywood, CA. Enjoy our fresh and delicious sushi rolls, sashimi, and more in a vibrant atmosphere.",
        url: "https://www.sushipalace.com/",
        siteName: "sushipalace.com",
        images: [
            {
                url: "https://sushipalace-seven.vercel.app/og.png",
                width: 600,
                height: 900,
            },
        ],
        locale: "en_US",
        type: "website",
    },

    title: "Sushi Palace | Best Sushi Restaurant in Hollywood, CA",
    description: "Experience the finest sushi at Sushi Palace in Hollywood, CA. Enjoy our fresh and delicious sushi rolls, sashimi, and more in a vibrant atmosphere.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
