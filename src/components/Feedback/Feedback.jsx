import React, { Component } from "react";
import s from './Feedback.module.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    render() {
        return (
            <div className="s.items">
            <button type="button" className="s.item">
                Good
            </button>
            <button type="button" className="s.item">
                Neutral
            </button>
            <button type="button" className="s.item">
                Bad
            </button>
            </div>
        );        
    };
};

export default Feedback

