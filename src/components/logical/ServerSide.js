import React, { useEffect, useState, useContext } from "react";
const dataBase = [];
const colours = [
  "White",
  "Green",
  "Yellow",
  "Blue",
  "Cyan",
  "Pink",
  "Red",
  "Purple",
];
const cities = [
  "New York",
  "Washington",
  "Miami",
  "Seatle",
  "Boston",
  "Kansas",
  "Chicago",
  "San Francisco",
  "Detroit",
  "San Francisco",
];
const places = [
  "Square",
  "Mall",
  "House",
  "Sidewalk",
  "Hotel",
  "Hospital",
  "Appartment",
  "Transport",
];
const weathers = [
  "Sunny",
  "Sunny",
  "Sunny",
  "Sunny",
  "Sunny",
  "Sunny",
  "Sunny",
  "Sunny",
  "Rain",
  "Rain",
  "Rain",
  "Rain",
  "Tornado",
  "Winterstorm",
  "Winterstorm",
  "Hurricane",
  "Blizzard",
  "Cloudy",
  "Cloudy",
  "Cloudy",
];

export const LocalContext = React.createContext();

export const getColumnsTitle = (props) => {
  return [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "Date", text: "Date", sort: true },
    { dataField: "Color", text: "Color", sort: true },
    { dataField: "Quantity", text: "Quantity", sort: true },
    { dataField: "Intensity", text: "Intensity", sort: true },
    { dataField: "City", text: "City", sort: true },
    { dataField: "Place", text: "Place", sort: true },
    { dataField: "Weather", text: "Weather", sort: true },
  ];
};
export const InitializeData = (props) => {

  console.log('por que pasa por aca?')
  dataBase.length=0
  for (let i = 0; i < 100; i++) {
    const element = {
      id: i,
      Date: randomDate(),
      Color: randomColor(),
      Quantity: randomQuantity(),
      Intensity: randomIntensity(),
      City: randomCity(),
      Place: randomPlace(),
      Weather: randomWeather(),
    };

    dataBase.push(element);
  }
  console.log("TERMINNO");
  console.log(dataBase);
  return dataBase;
};

export const useServerSide = (props) => {
  return;
};

export const getFullData = (props) => {
  return dataBase;
};

export const GenerateNewData = (props) => {
  return InitializeData();
};

// The composition of the CONTEXT
const value = {
  InitializeData,
  getFullData,
  GenerateNewData,
  dataBase
};

function randomDate() {
  let startDate = new Date("2022-01-01");
  let endDate = new Date("2023-09-30");
  var start = startDate.getTime();
  var end = endDate.getTime();
  var randomTimestamp = Math.random() * (end - start) + start;
  var randomDate = new Date(randomTimestamp);
  randomDate = randomDate
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("/");
  return randomDate;
}

function randomColor() {
  let rndIndex = colours[parseInt(Math.random() * colours.length)];
  return rndIndex;
}

function randomQuantity() {
  let rndIndex = 1 + parseInt(Math.random() * 10);
  return rndIndex;
}

function randomCity() {
  let rndIndex = cities[parseInt(Math.random() * cities.length)];
  return rndIndex;
}

function randomIntensity() {
  let rndIndex = parseInt(Math.random() * 10000) / 100;
  return rndIndex;
}

function randomPlace() {
  let rndIndex = places[parseInt(Math.random() * places.length)];
  return rndIndex;
}

function randomWeather() {
  let rndIndex = weathers[parseInt(Math.random() * weathers.length)];
  return rndIndex;
}
