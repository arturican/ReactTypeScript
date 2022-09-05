import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";

function App() {
    console.log("App rendering");
    return (
        <div>
            <TitleApp />
            <Rating />
            <Accordion />
            <Rating />
        </div>

    );
}
function TitleApp(){
    console.log("TitleApp rendering");
    return <>App component</>
}

function Rating() {
    console.log("Rating rendering");
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    );
}

function Star() {
    console.log("Star rendering");
    return (
        <div>star</div>
    );
}

export default App;
