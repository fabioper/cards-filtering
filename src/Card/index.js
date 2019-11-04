import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import { ReactComponent as LinkIcon } from '../link-icon.svg'
import { ReactComponent as ArrowIcon } from '../arrow_down.svg'

function Card({ title, description, date, url, openModal }) {
    const [isExpanded, expand] = useState(false)

    return (
        <article className="card">
            <header className="card__header">
                <h3 className="card__title">{title}</h3>
                <button
                    className="card__button card__button--secondary"
                    onClick={() => expand(!isExpanded)}>
                    {/* { isExpanded ?
                        'Ocultar detalhes da ação' :
                        'Ver detalhes da ação' } */}
                    { isExpanded ?
                        <>
                            Ocultar detalhes da ação
                            <ArrowIcon className="opened" />
                        </> :
                        <>
                            Ver detalhes da ação
                            <ArrowIcon />
                        </> }
                </button>
            </header>

            {
                isExpanded && (
                    <div className="card__body">
                        <div className="card__content">
                            <p className="card__description">{description}</p>
                            <button
                                className="card__button card__button--primary"
                                onClick={() => openModal()}>
                                Ver mais
                            </button>
                        </div>

                        <footer className="card__footer">
                            <small className="card__date">{date}</small>
                            <a href={url} className="card__source" title="Link da matéria">
                                <LinkIcon/>
                            </a>
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
