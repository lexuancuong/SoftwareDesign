import React from 'react'

class Modulus extends React.Component{
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
                    <h2>Modulus:</h2>
                    <label for='value-a'>A: </label>
                    <input type = 'text' name = 'valuea' onChange ={this.handleInputChange}></input>
                    <br></br>
                    <label for='value-b'>B: </label>
                    <input type = 'text' name = 'valueb' onChange ={this.handleInputChange}></input>
                </div>
                <br></br>
                <text id = 'txtResult'>Result is: {parseInt(this.state.valuea) % parseInt(this.state.valueb)}</text>
            </div>
        );
    }
}
export default Modulus;