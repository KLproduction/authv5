import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { ReactQueryProvider } from "@/react-query/provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { SignInModel } from "@/components/auth/signInModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "auth-v5",
  description: "project based",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <NuqsAdapter>
          <ReactQueryProvider>
            <body className={inter.className}>
              <Navbar />
              <SignInModel />
              <Toaster />
              {children}
            </body>
          </ReactQueryProvider>
        </NuqsAdapter>
      </html>
    </SessionProvider>
  );
}
