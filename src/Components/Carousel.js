import React from 'react';
import {Carousel,Button } from 'react-bootstrap';
import img5 from '../img/img5.jpg';
import img3 from '../img/img3.jpg';
import img8 from '../img/img8.jpg';

export default function Arousel() {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={img5}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="text-dark">First slide label</h3>
                <p className="text-dark"> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button variant="dark">Shop Women</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img8}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-dark">First slide label</h3>
                <p className="text-dark"> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button variant="dark">Shop Men</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-dark">First slide label</h3>
                <p className="text-dark"> Nulla vitae elit libero,</p>
                <Button variant="dark">Shop Kids</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

