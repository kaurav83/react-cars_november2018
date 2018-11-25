import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import Counter from './Counter/Counter';

class App extends Component {
  state = {
    cars: [
      {name: 'Audi', year: 2016},
      {name: 'Ford', year: 2010},
      {name: 'Mazda', year: 2012}
    ],
    titleSite: 'Mazdack',
    showCars: false
  }

  changeTitleHandle(newTitle) {
    this.setState({titleSite: newTitle})
  }

  onChangeName (name, elem)  {
    console.log(name, elem);
    const car = this.state.cars[elem];
    car.name = name;
    const carses = [...this.state.cars];
    carses[elem] = car;
    this.setState({
      cars: carses
    })
  }

  deleteHandler(index) {
    console.log(index)
    const carses = this.state.cars.concat();

    // удаляет 1 элемент по индексу
    carses.splice(index, 1);

    this.setState({cars: carses})    
  }


  render() {
    const car = this.state.cars;

    return (
      <div className="App">
        <h1>{this.state.titleSite}</h1>
        <Counter />
        <header className="App-header">
          { 
            car.map((item, index) => {
              return (
                <div key={index}>
                  <Car 
                    index={index}
                    car={item}
                    onChangeName={event => this.onChangeName(event.target.value, index)} 
                    onDeleteElem={this.deleteHandler.bind(this, index)}
                  />
                </div>
                
              )
            }) 
          }
        </header>
      </div>
    );
  }
}

export default App;
