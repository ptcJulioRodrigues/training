import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetch } from '../../actionsCreators/contacts';

export class Contacts extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatchFetch();
    }

    render() {
        return (
            <div className="Contacts">
                {this.props.contacts.length ?
                    this.props.contacts.map(contact => (
                        <div key={ contact.id} >
                            <span> {contact.id}</span>
                            <span> {contact.name}</span>
                            <span> {contact['phone-number']}</span>
                        </div>
                    )) :
                    <div>Loading contacts...</div>
                }
            </div>
        );
    }
}

Contacts.propTypes = {
    contacts: PropTypes.array,
    dispatchFetch: PropTypes.func
};

export const mapStateToProps = (state) => ({
    contacts: state.contacts
});

export const mapDispatchToProps = (dispatch) => {
    const dispatchFetch = () => { dispatch(fetch());};
    return { dispatchFetch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

