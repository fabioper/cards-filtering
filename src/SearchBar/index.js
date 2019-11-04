import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import { ReactComponent as SearchIcon } from '../search-icon.svg'

function SearchBar({ query, onChange, onSubmit }) {
    return (
        <div className="search">
            <form className="search__form" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="search__input"
                    value={ query }
                    onChange={({ target }) => onChange(target.value)}
                />
                <button type="submit" className="search__button">
                    <SearchIcon/>
                </button>
            </form>
        </div>
    )
}

SearchBar.propTypes = {
    query: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
}

export default SearchBar
