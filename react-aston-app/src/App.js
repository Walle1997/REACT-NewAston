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
    const isReactIncluded = this.state.name.toLowerCase().includes('реакт');
    return (
      <React.Fragment>
        <h1>Форма</h1>
        <form>
          <label>
            Имя:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              ref={(ref) => (this.inputRef = ref)} 
            />
          </label>
          <button 
            type="submit" 
            onClick={this.handleClick} 
            disabled={isReactIncluded} 
          >
            Отправить
          </button>
          <button type="button" onClick={this.handleFocusInput}>Фокус</button>
        </form>
        {this.state.name && <p>Вы ввели: {this.state.name}</p>}
        <Child name={this.state.name} age={21} isActive={true} />
        
       
        <ItemList items={this.state.items} />
      </React.Fragment>
    );
  }
}


const ItemList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li> 
    ))}
  </ul>
);
