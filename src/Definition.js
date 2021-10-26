import React from "react";
import Meanings from "./Meanings";

export default function Definition(props) {
    if (props.data) {
        return (
            <div className="Definition">
                <h1>{props.data.word}</h1>
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