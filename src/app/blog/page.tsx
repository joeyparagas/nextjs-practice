// Blog Landing Page

import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "BlogList",
};

export default function page() {
    return (
        <div>
            <Link href="/">Home</Link>
            <br />
            <Link href="/blog/1">Blog post 1</Link>
            <br />
            <Link href="/blog/2" replace>
                Blog post 2
            </Link>

            <h1>Blog post 3</h1>
            <h1>Blog post 4</h1>
            <h1>Blog post 5</h1>
            <h1>Blog post 6</h1>
            <h1>Blog post 7</h1>
            <h1>Blog post 8</h1>
        </div>
    );
}
