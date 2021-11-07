import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";

function Search() {
    const [keyword, setKeyword] = useState("positivity");
    const [definition, setDefinition] = useState(null);
    const [photos, setPhotos] = useState(null);
    const [ready, setReady] = useState(false);

    function getResponse(response) {
        setDefinition(response.data[0]);
    }

    function getImg(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(url).then(getResponse);

        const pexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        const pexelsAPI = "563492ad6f917000010000013184da26ffc54dabac22f537cfd1cc8c";
        const headers = { Authorization: `Bearer ${pexelsAPI}` };

        axios.get(pexels, { headers: headers }).then(getImg)
    }

    function trackSearch(event) {
        event.preventDefault();
        search()
    }

    function trackKeyword(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setReady(true);
        search();
    }


    if (ready) {
        return (
            <div className="Search">
                <form className="container-fluid justify-content-center" onSubmit={trackSearch}>
                    <input
                        className="form-control search-input rounded-pill p-3 my-4"
                        placeholder="Try smth like... your favorite thing"
                        type="search"
                        autoFocus="on"
                        onChange={trackKeyword}
                    />
                </form>
                <Definition data={definition} />
                <Photos data={photos} />
            </div>
        )
    } else {
        load();
        return (
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
}


export default Search;

// documentation: https://dictionaryapi.dev/ //