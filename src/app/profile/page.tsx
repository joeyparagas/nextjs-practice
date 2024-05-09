// Profile Page

import React from "react";
import { Metadata } from "next";

// export const metadata:Metadata = {
//     title: "Profile Page",
// };
export const metadata: Metadata = {
    title: { absolute: "Absolute Profile Page" },
};

export default function page() {
    return (
        <div>
            <h1 className="text-9xl">Profile Page</h1>
        </div>
    );
}
