import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
        modalRoot.style.background = 'rgba(0, 0, 0, 0.3)'
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
        modalRoot.style.background = 'none'
    }

    render() {
        return (
            ReactDOM.createPortal(this.props.children, this.el)
        )
    }
}

export default Modal
