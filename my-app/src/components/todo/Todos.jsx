import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';

export class Todos extends Component {
    render() {
        return (
            <div className="Todos">
                {this.props.todos.map(id =>
                    <Todo key={id} id={id}/>
                )}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array
};

export const mapStateToProps = (state) => ({
    todos: Object.keys(state.todo)
});

export default connect(mapStateToProps)(Todos);


