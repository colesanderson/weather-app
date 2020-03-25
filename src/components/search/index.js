import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Search({ weather }) {
    const [search, setSearch] = useState('');
    const { push } = useHistory();
    const inputEl = useRef(null);

    const handleSearch = (event) => {
        // TODO
        event.preventDefault();

        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        // Prevent from form to submit
        event.preventDefault();

        // If search is empty then do nothing!
        if (search !== '') {
            // Push update search to URL
            push(`/${search}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputEl}
                type="search"
                id="location-search"
                name="q"
                value={search}
                placeholder="Vancouver"
                onChange={handleSearch}
            ></input>

            <button onClick={handleSubmit}>Search location forecast</button>
        </form>
    );
}

export default Search;
