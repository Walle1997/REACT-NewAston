import React, { Component } from "react";

export class Child extends Component {
  render() {
    const { name, isActive } = this.props;
    return (
      <div>
        <h2>Дочерний компонент</h2>
        <p>Введено: {name}</p>
        <p>Активен: {isActive ? 'Да' : 'Нет'}</p>
      </div>
    );
  }
}