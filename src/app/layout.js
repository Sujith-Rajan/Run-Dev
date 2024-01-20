import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import Devops from "../components/developerArea/Devops.jsx"
import { ThemeContextProvider } from "../context/ThemeContext.jsx";
import ThemeProvider from "../provider/ThemeProvider.jsx";
import AuthProvider from '../provider/AuthProvider.jsx'


const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Run Dev-blog",
    description: "free blog for relate tech",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={ubuntu.className}>
                <AuthProvider>
                <ThemeContextProvider>
                    <ThemeProvider>
                        <div className="container">
                            <div className="wrapper">
                                <Navbar/>
                                {children}
                                <Footer />
                                <Devops/>
                            </div>
                        </div>
                    </ThemeProvider>
                </ThemeContextProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
