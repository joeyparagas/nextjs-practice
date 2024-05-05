import React from "react";

export default function page({ params }: { params: { postid: string } }) {
    return (
        <div>
            <h1>Details Page {params.postid}</h1>
        </div>
    );
}
