import React from 'react';
import Arousel from '../Components/Carousel'
import Products from './Products'
import Men from './Men'



export default function Home(){
    return (
        <React.Fragment>
        <Arousel />
        <Products />
        </React.Fragment>
    )
}