import "bootstrap/dist/css/bootstrap.min.css";
import "../css/DBIntroduction.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import NavBarDB from "../components/NavBarDB";
import { Initialize, useServerSide, getFullData,GenerateNewData } from '../components/logical/ServerSide';

export default function DBIntroduction() { 
let tempBase=[]
tempBase = getFullData()
return (
    <div className="main">
        <div className="row">
            <div className="col-2">
                <NavBarDB />
            </div>
            <div className=" col-8 textlefted">
           <h5>This is a simulator of intelligent processing data</h5>
           <p>The main goal is to find patterns in the huge volume of data <br/>
                that wouldn't be noticed without this thorough analysis. <br/> <br/>
                In order to be useful, the information needs to be presented in a clear  <br/>
                and simple fashion. In most cases, a graphical presentation <br/>
                using charts with lines, pies or bars is enough. Scatter plots and histograms   <br/>
                help to predict future changes and prevent them, or to detect alteration  <br/>
                in the expected pattern and learn the motives of those changes. <br/> <br/>
                The key is to know the data and to understand it, to be able to <br/> 
                generate the precise filtering and the relevant comparison to   <br/>
                <b>turn an unphantomable sea of data into a spring of knowledge</b> <br/> <br/>
                As far as this project is concerned, all the simulation stars from a random <br/>
                set of data, that needs to be generated each time that this single-page app loads. <br/>
                And it is not intended to produce any kind of valuabe information <br/>
                but to improve the skills of the author and to show a bit of his capabilities. <br/>
            </p></div>
        </div>
    </div>
)}

