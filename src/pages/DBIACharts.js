import "bootstrap/dist/css/bootstrap.min.css";
import "../css/DBIACharts.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import NavBarDB from "../components/NavBarDB";
import { Initialize, useServerSide, getFullData,GenerateNewData } from '../components/logical/ServerSide';
import ReactEcharts from "echarts-for-react"; 



export default function IACharts() { 
    return (
    <div class="main">
        <div class="row">
            <div class="col-2">
                <NavBarDB />
            </div>
            <div class="col-10">
                <h1>Not yet implemented</h1>
            </div>
        </div>
    </div>
)}    
    



