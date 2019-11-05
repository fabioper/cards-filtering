import React from 'react'
import Card from '../Card'
import PropTypes from 'prop-types'

function CardsList({ cards, openModal }) {
    return (
        <div className="cards-list">
            { cards.map((card, idx) => (
                <Card
                    key={idx}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.urlToImage}
                    url={card.url}
                    date={new Date(card.publishedAt).toLocaleDateString()}
                    openModal={openModal}
                />
            )) }
        </div>
    )
}

CardsList.propTypes = {
    cards: PropTypes.array,
    openModal: PropTypes.func
}

export default CardsList
