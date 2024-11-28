import React from 'react';

class MyFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      submittedValue: '',
    };
    console.log('Constructor: Компонент инициализирован');
  }

  componentDidMount() {
    console.log('componentDidMount: Компонент смонтирован');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Компонент обновлен');
    if (prevState.submittedValue !== this.state.submittedValue) {
      console.log('Предыдущее значение:', prevState.submittedValue);
      console.log('Новое значение:', this.state.submittedValue);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Компонент будет размонтирован');
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submittedValue: this.state.inputValue, inputValue: '' });
  };

  render() {
    console.log('render: Компонент рендерится');
    return (
      <div>
        <h1>Форма</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Введите текст"
          />
          <button type="submit">Отправить</button>
        </form>
        {this.state.submittedValue && (
          <p>Вы ввели: {this.state.submittedValue}</p>
        )}
      </div>
    );
  }
}

export default MyFormComponent;