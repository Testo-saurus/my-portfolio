"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";
import Navigation from "../components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Create context for modal state
const ModalContext = createContext<{
  isContactOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
} | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ModalContext.Provider
          value={{ isContactOpen, openContact, closeContact }}
        >
          <Navigation />
          {children}
          {/* Modal rendered at root level - not inside Navigation */}
          <Modal isOpen={isContactOpen} onClose={closeContact} />
        </ModalContext.Provider>
      </body>
    </html>
  );
}
