import React, { Component } from "react";

import { Child } from "./Child";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleClick = this.handleClick.bind(this); 
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount: Компонент смонтирован');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: Компонент был обновлён');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Компонент будет размонтирован');
  }

  handleClick(event) {
    event.preventDefault(); 
    console.log('Submitted name:', this.state.name); 
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Форма</h1>
        <form>
          <label>
            Вы ввели:
            <input 
              type="text" 
              value={this.state.name} 
              onChange={this.handleChange} 
            />
          </label>
          <button type="submit" onClick={this.handleClick}>Отправить</button>
        </form>
        {this.state.name && <p>Вы ввели: {this.state.name}</p>} 
        <Child name={this.state.name} age={25} isActive={true} /> 
      </div>
    );
  }
}

export default App;
