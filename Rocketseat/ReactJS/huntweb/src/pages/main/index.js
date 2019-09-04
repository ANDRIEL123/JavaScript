import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
        productsInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        console.log(response.data)
        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo, page })

    }

    prevPage = () => {
        const { page, productsInfo } = this.state

        if (page === 1) return;

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state

        if (page === productInfo.pages) return;

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }


    render() {
        const { products, page } = this.state
        return (
            <div className='product-list'>
                {this.state.products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="#">Acessar</a>
                    </article>
                ))}
                <div className='actions'>
                    <button disable={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>

            </div>
        )
    }
}