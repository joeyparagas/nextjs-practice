// Blog Post Page

import React from "react";
import { Metadata } from "next";
import Link from "next/link";

// Create type
type Props = {
    params: {
        postid: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Blog Post ${params.postid}`,
    };
};

export default function page({ params }: Props) {
    return (
        <div>
            <h1>Details Page {params.postid}</h1>
            <h2>
                <Link href="/blog">Back to Blog</Link>
            </h2>
            <Link href="/blog/1/comments/1">Comment Page 1</Link>
        </div>
    );
}
