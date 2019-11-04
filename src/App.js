import React, { useState, useEffect } from 'react'
import CardsList from './CardsList'
import SearchBar from './SearchBar'
import Modal from './Modal'

import api from './config'

async function getNews(callback, query = 'technology') {
    const response = await api.get('everything', {
        params: { q: query, apiKey: 'cad91b838deb423e88eb24107cb27bef' }
    })

    setTimeout(() => callback(response.data.articles), 500)
}

function App() {
    const [news, updateNews] = useState([])
    const [query, setQuery] = useState('')
    const [modalSelected, switchModal] = useState(false)

    const onQueryChange = value => setQuery(value)

    useEffect(() => {
        query ?
            getNews(updateNews, query) :
            getNews(updateNews)
    }, [query])

    return (
        <>
            <div className="container">
                <SearchBar
                    query={query}
                    onChange={onQueryChange}
                />
                <CardsList
                    cards={news}
                    openModal={() => switchModal(true)}
                />
            </div>

            {
                modalSelected && (
                    <Modal className="modal">
                        <button
                            className="modal__close"
                            onClick={() => switchModal(false)}>
                                Fechar
                        </button>
                        <div className="modal__content">
                            <p>Você confirma?</p>
                            <div className="modal__options">
                                <button
                                    className="modal__button modal__button--secondary"
                                    onClick={() => switchModal(false)}>
                                        Não
                                </button>
                                <button className="modal__button" onClick={() => switchModal(false)}>
                                    Sim
                                </button>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}

export default App
