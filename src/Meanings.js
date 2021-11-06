import React from "react";
import Synonyms from "./Synonyms";


export default function Meanings(props) {
    return (
        <div className="Meanings bg-white border-white shadow-sm rounded-3 my-4 p-4">
            <h2 className="fs-1 fw-normal">{props.data.partOfSpeech}</h2>
            {props.data.definitions.map((definitions, index) => {
                return (
                    <div key={index} className="m-2">
                        <span><p className="my-2 px-3 fs-5">{definitions.definition}</p></span>
                        <span><p className="px-4 text-muted fst-italic fs-6">{definitions.example}</p></span>
                        <Synonyms data={definitions.synonyms} />
                    </div>
                )
            })}
        </div>
    )
}