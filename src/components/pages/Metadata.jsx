import React from "react";
import { useParams } from "react-router";

export default function Metadata() {
    const {type, numbering} = useParams();

    return (
        <>
            {JSON.stringify({
                name: "Name",
                description: "Description",
                numbering: numbering,
                type: type
            })}
        </>
    )
}