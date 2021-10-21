import React, { useState } from "react";

function Search() {
    const [keyword, setKeyword] = useState(null);

    function trackSearch(event) {
        event.preventDefault();
        console.log(keyword)
    }

    function trackKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <form className="container-fluid" onSubmit={trackSearch}>
                <input
                    className="form-control search-input p-3 my-4"
                    placeholder="Try somenthing like... your favorite thing"
                    type="search"
                    autoFocus="on"
                    onChange={trackKeyword}
                />
            </form>
        </div>
    )
}

export default Search;