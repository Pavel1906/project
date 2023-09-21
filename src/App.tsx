import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/Main/Main";
import {Works} from "./layout/section/works/Works";
import {Skills} from "./layout/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #e91e63;
// `;
