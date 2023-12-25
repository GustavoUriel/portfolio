import "bootstrap/dist/css/bootstrap.min.css";
import "../css/DBGenerateNewData.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import NavBarDB from "../components/NavBarDB";
import { Initialize, useServerSide, getFullData,GenerateNewData } from '../components/logical/ServerSide';


export default function DBGenerateNewData() {
    GenerateNewData()
    return (
        <div class="main">
            <div class="row">
                <div class="col-2">
                    <NavBarDB />
                </div>
                <div class="col-10">
                    <h1>New data generated!</h1>
                </div>
            </div>
        </div>
    )}    
