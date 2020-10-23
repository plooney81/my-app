import React from 'react';
import './App.css';
import Greeter from './components/Greeter';

const names = [
  'Nelson',
  'Atom',
  'Emmy',
  'Sadie',
  'Cici'
]

function App() {
  return (
    <div className="App">
        <h1 className="greeting">
          Hello React!
        </h1>
        {/* <Greeter/>
        <Greeter name="Ted"></Greeter> */}
        {names.map((name,index) => {
          return <Greeter key={index} id={index} name={name}/>
        })}
    </div>
  );
}

export default App;
