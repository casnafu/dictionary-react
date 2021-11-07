import React from "react";

export default function Photos(props) {
    if (props.data) {
        return (
            <div className="Photos bg-white border-white shadow-sm rounded-3 my-4 p-4">
                <h4 className="m-2">Related images:</h4>
                <div className="row">
                    {props.data.map((photo, index) => {
                        return (
                            <div className="col-md-4">
                                <a href={photo.src.original} target="_blank" rel="noreferrer">
                                    <img src={photo.src.landscape} key={index} className="img-fluid m-2 border-3 rounded" alt="" />
                                </a>
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

// documentation: https://www.pexels.com/api/ //