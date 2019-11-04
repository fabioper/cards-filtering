import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

function SearchBar({ query, onChange }) {
    return (
        <div className="search">
            <form className="search__form">
                <input
                    type="text"
                    className="search__input"
                    value={ query }
                    onChange={({ target }) => onChange(target.value)}
                />
            </form>
        </div>
    )
}

SearchBar.propTypes = {
    query: PropTypes.string,
    onChange: PropTypes.func
}

export default SearchBar
