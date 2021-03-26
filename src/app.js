import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));






// class NewSyntax{
//     name="MIKE";
//     getGreeting = ()=>{ // This syntax is possible because of the plugin we installed plugin-proposal-class-properties
//         return `Hi my name is ${this.name}`;
//     }
// }

// const newsyntax = new NewSyntax();
// const getnewgreeting = newsyntax.getGreeting; 
// console.log(getnewgreeting());