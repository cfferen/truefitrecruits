// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "TrueFit Recruits",
  description: "AI-assisted multi-sport recruiting platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* You’ll add Header/Footer/Nav later */}
        {children}
      </body>
    </html>
  );
}
