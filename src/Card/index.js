import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

function Card({ title, description, date, url, openModal, imageUrl }) {
    const [isExpanded, expand] = useState(false)

    console.log(openModal)

    return (
        <article className="card">
            <header className="card__header">
                <h3 className="card__title">{title}</h3>
                <button
                    className="card__button card__button--secondary"
                    onClick={() => expand(!isExpanded)}>
                    { isExpanded ? 'Fechar detalhes' : 'Ver detalhes'}
                </button>
            </header>

            {
                isExpanded && (
                    <div className="card__body">
                        <div className="card__content">
                            <figure className="card__image-wrapper">
                                <img src={imageUrl} alt="" className="card__image"/>
                            </figure>
                            <p className="card__description">{description}</p>
                        </div>

                        <footer className="card__footer">
                            <small className="card__date">{date}</small>
                            <a href={url} className="card__source">Link da notícia</a>
                            <button
                                className="card__button"
                                onClick={() => openModal()}>
                                Ver mais
                            </button>
                        </footer>
                    </div>
                )
            }
        </article>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    openModal: PropTypes.func,
    imageUrl: PropTypes.string
}

export default Card
