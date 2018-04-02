import React, { Component } from 'react';

export class Home extends Component {
    constructor(props) {
        super(props);
    }
    handleDragStart(e) {
        this.style.opacity = '0.4';  // this / e.target is the source node.
    }


    render() {
        return (
            <div className="home">
                <div class="column" draggable="true" onDragStart={() =>{this.style.opacity = '0.4';}}><header>A</header></div>
                <div class="column" draggable="true"><header>B</header></div>
                <div class="column" ><header>C</header></div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;

