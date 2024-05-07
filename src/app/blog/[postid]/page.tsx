import React from "react";
import { Metadata } from "next";

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
        </div>
    );
}
