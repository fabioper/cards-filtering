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
                    <Modal>
                        <button
                            className="close-modal"
                            onClick={() => switchModal(false)}>
                                Fechar modal
                        </button>
                        <h1>Hello</h1>
                    </Modal>
                )
            }
        </>
    )
}

export default App
