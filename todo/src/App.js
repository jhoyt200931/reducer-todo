import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import styled from "styled-components";

const tasks = [


];

const Body = styled.div`
background-image: url('https://art.pixilart.com/11ffd7d4f80d82c.png');
height: 750px;
`;

const Title = styled.h2`
font-size: 2em;
margin: 50px 30%; 
`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor() {
  super();
  this.state = {
    tasks: tasks
  };
}

toggleDone = taskId => {
  this.setState({
    tasks: this.state.tasks.map(task => {
      if(taskId === task.id){
        return({
          ...task,
          completed: !task.completed
        })
      }
      return task;
    })
  });
}

addTask = taskName => {
  this.setState({
    tasks: [
      ...this.state.tasks,
      {
        name: taskName,
        id: Date.now(),
        completed: false
      }
    ]
  });
}

clear = () => {
  this.setState({
    tasks: this.state.tasks.filter(task => {
      return !task.completed;
    })
  })
}


  render() {
    return (
      <Body>
        <Title>Welcome to your Todo App!</Title>
        <TodoList tasks={this.state.tasks} addTask={this.addTask} toggleDone={this.toggleDone} clear={this.clear} />
      </Body>
    );
  }
}

export default App;
