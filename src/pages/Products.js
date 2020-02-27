import React from 'react';
import ProductItem from "../Components/ProductItem";
import ProductsApi from "../Api/products";
import {Carousel} from 'react-bootstrap';
import img10 from '../img/img10.jpg';


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
                src={img10}
                alt="First slide"
                />
                <Carousel.Caption>
                <p className="text-dark"><b>New inspiration 2020!</b></p>
                <h2 className="text-dark"><b>MADE FOR YOU!</b></h2>
                <h4 className="text-dark"><b>20%-70%</b></h4>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <div className="section-title text-center">
                
                <h2><span className="dot"></span>
                    Trending Products</h2>
            </div>
            <div className="container">
            <div className="row">
           {this.state.products.map(product =>
            <div className={"col-6  col-md-3"} key={product.id}>
                <ProductItem product={product} />
            </div>
            )}
            </div>
            </div>
        </div>

        )
    }
}