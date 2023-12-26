import React from "react";
import "../css/NavBarDB.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import WidgetUser from "components/WidgetUser.js";
import logo from "../img/pesos.png";
import InsertImage from "../components/InsertImage";

function NavBarDB() { return (

<div>
<div class="sidebar">
<Nav.Link as={Link} to="/Introduction">
Introduction
</Nav.Link>
<Nav.Link as={Link} to="/FrequentCharts">
Frequent Charts
</Nav.Link>
<Nav.Link as={Link} to="/IACharts">
IA Charts
</Nav.Link>
<Nav.Link as={Link} to="/ViewRawData">
View Raw Data
</Nav.Link>
<Nav.Link as={Link} to="/GenerateNewData">
Generate New Data
</Nav.Link>

</div>
</div>
    );
}
export default NavBarDB;
