import React from "react";

export default function page({
    params,
}: {
    params: {
        postid: string;
        commentid: string;
    };
}) {
    return (
        <div>
            <h1>
                Comment ID: {params.commentid} from blog post {params.postid}
            </h1>
        </div>
    );
}
