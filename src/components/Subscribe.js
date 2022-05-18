import React, {Component} from 'react'

class Subscribe extends Component{
    constructor(){
        super();
        this.state = {
            email:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        console.log(e.target.value);
        this.setState({
            email:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.email == '')
          alert('Please enter email');
        else
        return true;
    }
    render(){
            return(
                <form onSubmit={this.handleSubmit} method="GET" action='#'>
                    <input type="email" onChange={this.handleChange} value={this.state.email}/>
                    <input type="submit" />
                </form>
         )
    }
}

export default Subscribe;