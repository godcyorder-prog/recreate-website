import Link from "next/link";
import "./globals.css";
import MenuButton from "./menu-button";

export const metadata = {
  title: "Punch | Vehicle Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo">PUNCH</div>

          <nav>
            <a href="#overview">Overview</a>
            <a href="#design">Design</a>
            <a href="#safety">Safety</a>
            <a href="#technology">Technology</a>
            <a href="#performance">Performance</a>
          </nav>

          <MenuButton />
        </header>

        {children}

        <footer>
          <p>Vehicle Experience</p>
        </footer>
      </body>
    </html>
  );
}