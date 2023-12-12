import "./App.css";
import React, { Component } from "react";
import TodoItem from "./Components/TodoItem";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }

  inputChange = (e) => {
    //changing the value of input in state
    this.setState({ input: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    //if input is empty string
    if (this.state.input.length > 0) {
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
    }
  };

  updateItem = (newItem, i) => {
    // created a copy of todo list
    let array = this.state.todoList;
    // update
    array.splice(i, 1, newItem);
    // change state
    this.setState({
      todoList: array,
    });
  };

  deleteItem = (i) => {
    // created a copy of todo list
    let array = this.state.todoList;
    // update
    array.splice(i, 1);
    // change state
    this.setState({
      todoList: array,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1>To-Do List</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>A D D</button>
        </form>

        <h4>My Input: {this.state.input} </h4>

        <div className="todoList">
          <h2>L I S T  is here</h2>
          {this.state.todoList.length == 0 ? (
            <h4>List is Empty</h4>
          ) : (
            this.state.todoList.map((e, i) => {
              return (
                <TodoItem
                  e={e}
                  i={i}
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
}