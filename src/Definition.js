import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Definition(props) {
    if (props.data) {
        return (
            <div className="Definition">
                <h1>{props.data.word}</h1>
                {props.data.phonetics.map((phonetic, index) => {
                    return (
                        <div key={index}>
                            <Phonetics data={phonetic} />
                        </div>
                    )
                })}
                {props.data.meanings.map((meaning, index) => {
                    return (
                        <div key={index}>
                            <Meanings data={meaning} />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null;
    }
}