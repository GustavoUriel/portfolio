import "bootstrap/dist/css/bootstrap.min.css";
import "../css/DBViewRawData.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import NavBarDB from "../components/NavBarDB";
import Table from "../components/Table";
import {
  Initialize,
  useServerSide,
  getFullData,
  GenerateNewData,
} from "../components/logical/ServerSide";

export default function ViewRawData() {
  return (
    <div class="main">
      <div class="row">
        <div class="col-2">
          <NavBarDB />
        </div>
        <div class="col-10">
          {getFullData().length == 0 ? (
            <h1>No data in the simulator. <br/> Please generate new data</h1>)
            : ( <div><Table /></div> )}
        </div>
      </div>
    </div>
  );
}

