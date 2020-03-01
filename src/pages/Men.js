import React from 'react';
import ProductI from "../Components/ProductI";
import ProductsApi from "../Api/products";
import {Carousel} from 'react-bootstrap';
import img10 from '../img/img10.jpg';


export default class Men extends React.Component{
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
        let namesList = this.state.products.filter((product) => {
            return product.price = 100 })

    return (
        <div>
            <div className="section-title text-center">
                
                <h2><span className="dot"></span>
                    Trending Products</h2>
            </div>
            <div className="container">
            <div className="row">
           {this.state.namesList.map(product =>
            <div className={"col-6  col-md-4 col-lg-3"} key={product.id}>
                <ProductI namesList={namesList} />
            </div>
            )}
            </div>
            </div>
        </div>

        )
    }
}