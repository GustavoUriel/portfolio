import "bootstrap/dist/css/bootstrap.min.css";
import "../css/DBFrequentCharts.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import NavBarDB from "../components/NavBarDB";
import { Initialize, useServerSide, getFullData,GenerateNewData } from '../components/logical/ServerSide';
import ReactEcharts from "echarts-for-react"; 




export default function FrequentCharts() { 
    var data = getFullData()
    var data1 = data.filter((item) => item.Weather == 'Sunny').map(({Date, Quantity,Intensity}) => ({x: Date, y:Intensity}));
    var data2 = data.filter((item) => item.Weather == 'Rain').map(({Date, Quantity,Intensity}) => ({x: Date, y:Intensity}));
    var data3 = data.filter((item) => item.Weather == 'Tornado').map(({Date, Quantity,Intensity}) => ({x: Date, y:Intensity}));
    var data4 = data.filter((item) => item.Weather == 'Winterstorm').map(({Date, Quantity,Intensity}) => ({x: Date, y:Intensity}));
    var data5 = data.filter((item) => item.Weather == 'Hurricane').map(({Date, Quantity,Intensity}) => ({x: Date, y:Intensity}));
    var data6 = data.filter((item) => item.Weather == 'Blizzard').map(({Date, Quantity,Intensity}) => ({x: Date, y:Intensity}));
    var data7 = data.filter((item) => item.Weather == 'Cloudy').map(({Date, Quantity,Intensity}) => ({x: Date, y:Intensity}));
console.log(data);

const option1 = {
  xAxis: {
    type: 'category',
    data: ['Sunny', 'Cloudy', 'Rain', 'Tornado', 'Winterstorm', 'Hurricane', 'Blizzard']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [data1.length, data7.length, data2.length, data3.length, data4.length, data5.length, data6.length],
      type: 'bar'
    }
  ]
}; 

const option1a = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}; 

const  option2 = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Gradient Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Blue', 'Yellow', 'Cyan', 'Red', 'Green']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {    
        data: data.map(function (item) {
          return item[1];
        })    }
  ],
  yAxis:    {},
  visualMap: {
    top: 50,
    right: 10,
    pieces: [
      {        gt: 0,        lte: 50,        color: '#93CE07'      },
      {        gt: 50,        lte: 100,        color: '#FBDB0F'      },
      {        gt: 100,        lte: 150,        color: '#FC7D02'      },
      {        gt: 150,        lte: 200,        color: '#FD0100'      },
      {        gt: 200,        lte: 300,        color: '#AA069F'      },
      {        gt: 300,        color: '#AC3B2A'      }
    ],
    outOfRange: {      color: '#999'    }
  },
  series: {
    name: 'Quantity',
    type: 'line',
    data: data.map(function (item) {
      return item[3];
    }),
    markLine: {
      silent: true,
      lineStyle: {
        color: '#333'
      },
      data: [
        {          yAxis: 50        },
        {          yAxis: 100        },
        {          yAxis: 150        },
        {          yAxis: 200        },
        {          yAxis: 300        }
      ]}

 }

 }




const  option2a = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      text: 'Gradient Stacked Area Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: '#008811'
        },
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: '#2200ff'
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: '#ffff00'
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: '#ff8811'
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          opacity: 0.8,
          color: '#ff00ff'
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
};


  return (
  <div class="main">
      <div class="row">
          <div class="col-2">
              <NavBarDB />
          </div>
          <div class="col-10">
              <ReactEcharts option={option1} />
              <ReactEcharts option={option2a} />
          </div>
      </div>
  </div>
)}    