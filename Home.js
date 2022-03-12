import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import poster1 from "../img/spider-man-no-way-home-imax-poster.png";
import poster2 from "../img/spider-man-no-way-home-posters.jpg";
import poster3 from "../img/spider-man-no-way-home-promotions-has-already-started-in-the-theatres-using-unofficial-posters001.jpg";

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel>
                    {/* <div className="d-none">
                        <Carousel.Item>
                            <div className="img w-100">
                                <img className="d-block w-100 bg-primary" src={poster1} alt="First slide" />
                            </div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="img">
                                <img className=" w-100 h-100 bg-danger" src={poster2} alt="Second slide" />
                            </div>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="img">
                                <img className="d-block w-100 bg-success" src={poster3} alt="Third slide" />
                            </div>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </div> */}
                    <Carousel.Item>
                        <div className="img">
                            <div className="pt-3 pb-4 text-center h-100">
                                <div className="mb-2">
                                    <span className="poster-frame-holder d-inline-block align-middle"></span>
                                    <img className="col-md-6 align-middle" src={poster1} alt="movie name" />
                                </div>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img">
                            <div className="pt-3 pb-4 text-center h-100">
                                <div className="mb-2">
                                    <span className="poster-frame-holder d-inline-block align-middle"></span>
                                    <img className="col-md-6 align-middle" src={poster2} alt="movie name" />
                                </div>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img">
                            <div className="pt-3 pb-4 text-center h-100">
                                <div className="mb-2">
                                    <span className="poster-frame-holder d-inline-block align-middle"></span>
                                    <img className="col-md-6 align-middle" src={poster3} alt="movie name" />
                                </div>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}
