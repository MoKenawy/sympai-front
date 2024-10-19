"use client";


import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";


export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full">
            <NextUIProvider>
                    <Suspense fallback={"Loading ..."}>
                        {children}
                    </Suspense>
            </NextUIProvider>
        </div>

    );
}
