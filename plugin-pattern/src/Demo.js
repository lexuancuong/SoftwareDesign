import React from 'react';
import Modulus from './external'


//Internal Plugin
//1.Addition Class 
class Addition extends React.Component{
    constructor(props){
        super(props);
        this.state = {valuea: 0, valueb:0};
    }
    handleInputChange = (event) =>{ 
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render(){
        return(
            <div>
                <div> 
                    <h2>Addition:</h2>
                    <label for='value-a'>A: </label>
                    <input type = 'text' name = 'valuea' onChange ={this.handleInputChange}></input>
                    <br></br>
                    <label for='value-b'>B: </label>
                    <input type = 'text' name = 'valueb' onChange ={this.handleInputChange}></input>
                </div>
                <br></br>
                <text id = 'txtResult'>Result is: {parseInt(this.state.valuea) + parseInt(this.state.valueb)}</text>
            </div>
        );
    }
}

//2.Substraction Class 
class Subtraction extends React.Component{
    constructor(props){
        super(props);
        this.state = {valuea: 0, valueb:0};
    }
    handleInputChange = (event) =>{ 
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render(){
        return(
            <div>
                <div> 
                    <h2>Subtraction:</h2>
                    <label for='value-a'>A: </label>
                    <input type = 'text' name = 'valuea' onChange ={this.handleInputChange}></input>
                    <br></br>
                    <label for='value-b'>B: </label>
                    <input type = 'text' name = 'valueb' onChange ={this.handleInputChange}></input>
                </div>
                <br></br>
                <text id = 'txtResult'>Result is: {parseInt(this.state.valuea) - parseInt(this.state.valueb)}</text>
            </div>
        );
    }
}

//3.Multiplication Class
class Multiplication extends React.Component{
    constructor(props){
        super(props);
        this.state = {valuea: 0, valueb:0};
    }
    handleInputChange = (event) =>{ 
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render(){
        return(
            <div>
                <div> 
                    <h2>Multiplication:</h2>
                    <label for='value-a'>A: </label>
                    <input type = 'text' name = 'valuea' onChange ={this.handleInputChange}></input>
                    <br></br>
                    <label for='value-b'>B: </label>
                    <input type = 'text' name = 'valueb' onChange ={this.handleInputChange}></input>
                </div>
                <br></br>
                <text id = 'txtResult'>Result is: {parseInt(this.state.valuea) * parseInt(this.state.valueb)}</text>
            </div>
        );
    }
}

//4. Division Class
class Division extends React.Component{
    constructor(props){
        super(props);
        this.state = {valuea: 0, valueb:0};
    }
    handleInputChange = (event) =>{ 
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render(){
        return(
            <div>
                <div> 
                    <h2>Division:</h2>
                    <label for='value-a'>A: </label>
                    <input type = 'text' name = 'valuea' onChange ={this.handleInputChange}></input>
                    <br></br>
                    <label for='value-b'>B: </label>
                    <input type = 'text' name = 'valueb' onChange ={this.handleInputChange}></input>
                </div>
                <br></br>
                <text id = 'txtResult'>Result is: {parseInt(this.state.valuea) / parseInt(this.state.valueb)}</text>
            </div>
        );
    }
}


function Solve($){
    if($.func == 'Addition'){
        return <Addition/>
    }
    else if($.func == 'Multiplication'){
        return <Multiplication/>
    }
    else if($.func == 'Subtraction'){
        return <Subtraction/>
    }
    else if($.func == 'Division'){
        return <Division/>
    }
    else if($.func == 'Modulus'){
        return <Modulus/>
    }
}
class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color:'red',
            plugin:'Addition'
        };
    }
    ChangeColor = () => {
        this.setState({color:'green'});
    }
    changeOption = () => {
        let text = this.refs.func.value;
        this.setState({plugin:text});
    }
    render(){
        return(
            <div> 
            <select ref='func' onChange = {this.changeOption}>
                <optgroup label = "Internal Plugin">
                    <option value='Addition'>Addition</option>
                    <option value='Subtraction'>Subtraction</option>
                    <option value='Multiplication'>Multiplication</option>
                    <option value='Division'>Division</option>
                </optgroup>
                <optgroup label = "External Plugin">
                    <option value='Modulus'>Modulus</option>
                </optgroup>
            </select>
            <Solve func = {this.state.plugin}/>
            </div>
        );
    }
}
export default Demo;