import Navigation from "@/components/Navigation";
import "./globals.css";
import AOSInitializer from "../components/AOSInitializer";
import { ToastContainer, toast } from "react-toastify";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <AOSInitializer /> {/* Ovo sada radi */}
        <div id="page">
          <Navigation />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
