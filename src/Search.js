import React, { useState } from "react";
import Definition from "./Definition";
import axios from "axios";

function Search() {
    const [keyword, setKeyword] = useState(null);
    const [definition, setDefinition] = useState(null);

    function getResponse(response) {
        setDefinition(response.data[0]);
    }

    function trackSearch(event) {
        event.preventDefault();
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(url).then(getResponse);
    }

    function trackKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <form className="container-fluid" onSubmit={trackSearch}>
                <input
                    className="form-control search-input rounded-pill p-3 my-4"
                    placeholder="Try somenthing like... your favorite thing"
                    type="search"
                    autoFocus="on"
                    onChange={trackKeyword}
                />
            </form>
            <Definition data={definition} />
        </div>
    )
}

export default Search;