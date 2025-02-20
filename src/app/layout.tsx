import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { auth } from "@/auth";
import ReactQueryProvider from "@/ReactQueryProvider";
import Header from "@/components/Header";

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
  const userName = session?.user?.name ?? "";
  if (!session) {
    return (
      <html lang="ko">
        <body>{signin}</body>
      </html>
    );
  }

  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <main
            className="h-screen p-3 opacity-90"
            style={{
              backgroundImage: "url(/hahoe.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <section className="flex flex-col items-center h-full">
              <Header userName={userName} />
              {children}
            </section>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
