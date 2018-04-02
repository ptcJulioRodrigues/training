import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card,  CardBody, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export class Notes extends Component {
    constructor(props) {
        super(props);
    }

    cardAllowDrop = (ev) => {
        if (ev.target.id.includes('lane-')) {
            ev.preventDefault();
        }
    };

    cardDrag = (ev) => {
        ev.dataTransfer.setData('text', ev.target.id);
    };

    cardDrop = (ev, el) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData('text');
        ev.target.appendChild(document.getElementById(data));
        //dispatch an edit cad
        ev.target.removeAttribute("ondragover");
    };


    cardCreator = (id, title) => {
        return (
            <Card id={`card-${id}`} draggable="true" onDragStart={this.cardDrag}>
                <CardBody>
                    <CardTitle> {title} </CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
        );
    };

    render() {
        const newCard = this.cardCreator;
        return (
            <Container className="Notes jumbotron">
                <Row>
                    <Col sm="4" md="4" id={'lane-todo'} onDrop={(ev) => this.cardDrop(ev, this)} onDragOver={this.cardAllowDrop}>
                        <h2> TODO </h2>
                        {newCard(1, 'TODO')}
                        {newCard(2, 'TODO')}
                    </Col>
                    <Col sm="4" md="4" id={'lane-in-progress'} onDrop={(ev) => this.cardDrop(ev, this)} onDragOver={this.cardAllowDrop}>
                        <h2> IN-PROGRESS </h2>
                        {newCard(4, 'INPROGRESS')}
                    </Col>
                    <Col sm="4" md="4" id={'lane-done'} onDrop={(ev) => this.cardDrop(ev, this)} onDragOver={this.cardAllowDrop}>
                        <h2> DONE </h2>
                        {newCard(3, 'DONE')}
                    </Col>
                </Row>
            </Container>
        );
    }
}

Notes.propTypes = {};

export default Notes;

