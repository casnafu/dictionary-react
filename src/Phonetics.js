import React from "react";

export default function Phonetics(props) {
    return (
        <section>
            <a href={props.data.audio} target="_blank" rel="noreferrer"><i className="fas fa-volume-up"></i></a>
            {props.data.text}
        </section>
    )
}