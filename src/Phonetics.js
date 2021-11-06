import React from "react";

export default function Phonetics(props) {
    const audio = props.data.audio;
    function listenAudio() {
        new Audio(audio).play();
    }
    return (
        < section >
            <button className="px-1 bg-white border rounded-pill" onClick={listenAudio}><i className="fas fa-volume-up text-primary"></i></button>
            <span className="px-2">{props.data.text}</span>
        </section >
    )
}