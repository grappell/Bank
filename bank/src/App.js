
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      regusers:[ 
	{
		name: 'Grayson',
		bankaccount: '1111',
		balance: 100000000,
    active:false
	},
	{
		name: 'Hari',
		bankaccount: '1112',
		balance: 10000,
    active:false
	},
	{
		name: 'Sam',
		bankaccount: '1113',
		balance: 1,
		active:false
	},
	{
		name: 'Larry',
		bankaccount: '1114',
		balance: 1,
    active:false
	},
	{
		name: 'Maya',
		bankaccount: '1115',
		balance: 1,
		active:false
	},
	{
		name: 'Jeffrey',
		bankaccount: '1116',
		balance: 1,
		active:false
	},
	{
		name: 'Bill Gates',
		bankaccount: '1117',
		balance: 1000000000000000000000000,
    active:false
	}],
  currentUser:{}
    }
  }
  render() {
    return (
      <div className="App">
        <h1> SAM & GRAYSON'S BANK</h1>
    <p> Give us your money and leave</p>
		<div id="centerme">
			 <input id = "bankaccount" placeholder="Please Enter Bank Acc Number"></input>
			 <input id = "username" placeholder="Please Enter Account Name"></input>
		<button id = "bankbutton" > SUBMIT </button>
		<div id="centerme2">
			<button id="createAcc"> CREATE AN ACCOUNT </button>
		</div>
		<div id="centerme">
			<h3 id="richest"></h3>
		</div>
    <div id = "money">
			<div id="centerButton">
      	<button id="rain" > MAKE IT RAIN</button>
			</div>
      <iframe id="rainGIF" src="https://giphy.com/embed/hrQnFqUKTXwSSvH8AI" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/leroypatterson-money-fall-make-it-rain-hrQnFqUKTXwSSvH8AI" > We make it rain</a></p>
        
    </div>
		
		</div>
   
      </div>
    );
  }
}

export default App;
