// Blog Comment Page

import React from "react";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function page({
    params,
}: {
    params: {
        postid: string;
        commentid: string;
    };
}) {
    const random = getRandomInt(2);

    if (random === 1) {
        throw new Error("Error loading comment");
    }
    return (
        <div>
            <h1>
                Comment ID: {params.commentid} from blog post {params.postid}
            </h1>
        </div>
    );
}
