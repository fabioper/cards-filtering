import React, { useState, useEffect } from 'react'
import CardsList from './CardsList'
import SearchBar from './SearchBar'
import Modal from './Modal'

import api from './config'

async function getNews(callback, query) {
    const params = {
        country: 'br',
        apiKey: 'cad91b838deb423e88eb24107cb27bef',
        sortBy: 'publishedAt',
        pageSize: 6
    }
    if (query) { params.q = query }

    const response = await api.get('top-headlines', { params })

    callback(response.data.articles)
}

function App() {
    const [news, updateNews] = useState([])
    const [query, setQuery] = useState('')
    const [modalSelected, switchModal] = useState(false)

    const onQueryChange = value => setQuery(value)
    const handleSearch = event => {
        event.preventDefault()
        getNews(updateNews, query)
    }
    const handleModalClick = () => switchModal(false)

    useEffect(() => { getNews(updateNews) }, [])

    return (
        <>
            <div className="container">
                <SearchBar
                    query={query}
                    onChange={onQueryChange}
                    onSubmit={handleSearch}
                />
                <CardsList
                    cards={news}
                    openModal={() => switchModal(true)}
                />
            </div>

            { modalSelected && (
                <Modal className="modal">
                    <div className="modal__content">
                        <p>Tem certeza que deseja ir para a tela?</p>
                        <div className="modal__options">
                            <button className="modal__button modal__button--secondary" onClick={handleModalClick}>
                                Não
                            </button>
                            <button className="modal__button" onClick={handleModalClick}>
                                    Sim
                            </button>
                        </div>
                    </div>
                </Modal>
            ) }
        </>
    )
}

export default App
