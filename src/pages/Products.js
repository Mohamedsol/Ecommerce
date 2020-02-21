import React from 'react';
import ProductItem from "../Components/ProductItem";
import ProductsApi from "../Api/products";
import {Carousel} from 'react-bootstrap';
import img9 from '../img/img9.jpg';


export default class Products extends React.Component{
    state = {
        products:[],
    };
    componentDidMount(){
        ProductsApi.getAll()
        .then( data => {
            this.setState({
                products: data
            })
        });
    }
    render(){
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={img9}
                alt="First slide"
                />
                <Carousel.Caption>
                <p className="text-dark"><b>New inspiration 2020!</b></p>
                <h2 className="text-dark"><b>CLOTHING MADE FOR YOU!</b></h2>
                <h4 className="text-dark"><b>Trending from Men and Women style collection</b></h4>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <div className="container">
            <div className="row">
           {this.state.products.map(product =>
            <div className={"col-3"} key={product.id}>
                <ProductItem product={product} />
            </div>
            )}
            </div>
            </div>
        </div>

        )
    }
}