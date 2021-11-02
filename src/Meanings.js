import React from "react";
import Synonyms from "./Synonyms";


export default function Meanings(props) {
    return (
        <div className="Meanings my-4">
            <h2>{props.data.partOfSpeech}</h2>
            {props.data.definitions.map((definitions, index) => {
                return (
                    <div key={index}>
                        <span><p className="mb-2">{definitions.definition}</p></span>
                        <span><p className="mb-2">Example: <em>{definitions.example}</em></p></span>
                        <Synonyms data={definitions.synonyms} />
                    </div>
                )
            })}
        </div>
    )
}