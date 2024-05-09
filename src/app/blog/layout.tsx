// Blog Layout
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1>Welcome to the Blog</h1>

            {children}
        </>
    );
}
