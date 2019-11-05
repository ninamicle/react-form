import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      names: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var name = this.refs.name.value;
    console.log('hai scritto ' + name)
    //pulisco il form
    this.refs.name.value = '';
    let names = this.state.names.slice();
    names.push(name);
    this.setState ({names: names});
  }
  render(){
    let listaNomi = this.state.names.map((name, index) =>{
return(
  <li key={index}>{name}</li>
)
    });
    return(
      <div>
        <h1>Foglio iscrizioni</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Il tuo nome' ref='name'/>
          <input type='submit' value='Invia'/>
        </form>
        <div>
          <h2>Nomi gia iscritti:</h2>
          <ol>{listaNomi}</ol>
        </div>
      </div>
    )
  }
}

export default App;
