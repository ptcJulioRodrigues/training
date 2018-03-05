import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updateTodo as updateTodo } from '../../actionsCreators/todoActions';
import { connect } from 'react-redux';

export class Todo extends Component {
    onCheckboxChange(event) {
        const checked = event.target.checked;
        this.props.dispatchEdit(this.props.description, checked, this.props.id);
    }

    onTextareaChange(event) {
        const value = event.target.value;
        this.props.dispatchEdit(value, this.props.done, this.props.id);
    }

    render() {
        const {
            description,
            done
        } = this.props;
        return (
            <div className="todo">
                <h2>The todo</h2>
                <input type="checkbox" checked={done} onChange={this.onCheckboxChange.bind(this)} />
                <textarea value={description} onChange={this.onTextareaChange.bind(this)}/>
            </div>
        );
    }
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    done: PropTypes.bool
};

export const mapStateToProps = (state, ownProps) => ({
        done: state.todo[ownProps.id].done,
        description: state.todo[ownProps.id].description
});

export const mapDispatchToProps = (dispatch) => {
    const dispatchEdit = (description, done, id) => { dispatch(updateTodo(description, done, id));};
    return { dispatchEdit };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
