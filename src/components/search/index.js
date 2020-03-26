import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../components/icon';
import { ReactComponent as SearchIcon } from '../../static/svg/search.svg';
import { DEFAULT_CITY } from '../../constants/index';

function Search({ setCity }) {
    const [search, setSearch] = useState('');
    const { push } = useHistory();
    const inputEl = useRef(null);
    const heightInput = 45;

    const handleSubmit = (event) => {
        // Prevent from form to submit
        event.preventDefault();

        // If search is empty then do nothing!
        if (search !== '') {
            // Push update search to URL
            push(`/${search}`);

            // Set the city to container
            setCity(search);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div
                className="relative w-full border border-gray-600 bg-white rounded-lg shadow-md"
                style={{ paddingLeft: heightInput, height: `${heightInput}px` }}
            >
                <input
                    className="w-full h-12 p-2 rounded-lg"
                    // Fix height of input so border stay visible
                    style={{ height: `${heightInput - 2}px` }}
                    ref={inputEl}
                    type="search"
                    id="location-search"
                    value={search}
                    placeholder={DEFAULT_CITY}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                ></input>

                <button
                    className="absolute top-0 bottom-0 left-0 flex h-full p-2 rounded-lg"
                    onClick={handleSubmit}
                >
                    <Icon
                        title="Search Icon"
                        Icon={SearchIcon}
                        width={30}
                        height={30}
                    />

                    <span className="sr-only">Search location forecast</span>
                </button>
            </div>
        </form>
    );
}

export default Search;
