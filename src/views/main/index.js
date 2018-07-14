import React, { Component } from 'react';
import b_ from 'b_';
import './index.css';

const b = b_.with('main');

class Main extends Component {
    constructor(props) {
        super(props);
        this.title = 'Sample SPA to React + Redux';
    }

    render() {
        return (
            <div className={b()}>
                <header className={b('header')}>
                    <h1 className={b('title')}>{this.title}</h1>
                </header>
            </div>
        );
    }
}

export default Main;
