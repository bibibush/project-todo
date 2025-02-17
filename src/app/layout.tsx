import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "AMUSE TODOLIST",
};

export default async function RootLayout({
  children,
  signin,
}: Readonly<{
  children: React.ReactNode;
  signin: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    return (
      <html lang="ko">
        <body>{signin}</body>
      </html>
    );
  }

  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
