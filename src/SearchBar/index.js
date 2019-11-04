import React from 'react'
import PropTypes from 'prop-types'

function SearchBar({ query, onChange }) {
    return (
        <form className="search">
            <input
                type="text"
                className="search__input"
                value={ query }
                onChange={({ target }) => onChange(target.value)}
            />
        </form>
    )
}

SearchBar.propTypes = {
    query: PropTypes.string,
    onChange: PropTypes.func
}

export default SearchBar
