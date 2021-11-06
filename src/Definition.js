import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Definition(props) {
    if (props.data) {
        return (
            <div className="Definition">
                <div className="d-flex flex-row justify-content-center border-bottom py-2">
                    <h1>{props.data.word}</h1>
                    {props.data.phonetics.map((phonetic, index) => {
                        return (
                            <div key={index} className="Phonetics p-2 p-lg-3">
                                <Phonetics data={phonetic} />
                            </div>
                        )
                    })}
                </div>
                <div>
                    {props.data.meanings.map((meaning, index) => {
                        return (
                            <div key={index} className="Meanings my-1 p-2">
                                <Meanings data={meaning} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return null;
    }
}