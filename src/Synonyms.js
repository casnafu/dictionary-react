import React from "react";

export default function Synonyms(props) {
    if (props.data) {
        return (
            <ul className="Synonyms list-inline">
                {props.data.map((synonym, index) => {
                    return (
                        <li key={index} className="list-inline-item bg-warning bg-opacity-10 my-1">{synonym}</li>
                    )
                })}
            </ul>
        )
    } else {
        return null;
    }
}