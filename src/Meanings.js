import React from "react";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <h2>{props.data.partOfSpeech}</h2>
            {props.data.definitions.map((definitions, index) => {
                return (
                    <div key={index}>
                        <span>{definitions.definition}</span>
                        <hr />
                        <br />
                        <span><em>{definitions.example}</em></span>
                        <hr />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}