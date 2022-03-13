import ReactDom from 'react-dom';
import React from 'react';
import App from "./App";
console.log("Hello React");
const name = "Truong Manucian";

const age = 20;

const hello =
    // <div style={{backgroundColor: 'red', padding: '20px'}}>
    //    <><h1>Name: {name} </h1><h2>Age: {age} </h2></>
    // </div>
ReactDom.render(<App/> ,document.getElementById('root'));