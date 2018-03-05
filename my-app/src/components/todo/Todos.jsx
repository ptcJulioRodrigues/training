import React, { Component } from 'react';
import Todo from './Todo';

export class Todos extends Component {

    render() {

        return (
            <div className="Todos">
                <h1>Todos List</h1>
                <Todo id={1}/>
                <Todo id={4}/>
            </div>
        );
    }
}

Todos.propTypes = {};

export default Todos;

