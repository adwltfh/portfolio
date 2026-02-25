import { Inter } from "next/font/google";
import { ModalProvider } from "../contexts/ModalContext";
import ModalContainer from "../components/DraggableModal";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <div>{children}</div>
          <ModalContainer />
        </ModalProvider>
      </body>
    </html>
  );
}
