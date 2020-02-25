import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Home.scss"
export default class Home extends React.Component {
    render() {
       return (
          <div className="home">
            <Carousel />
            <div className="home-content">
               <h1>Home Page..</h1>
            </div>
          </div>
       )
    }
}
