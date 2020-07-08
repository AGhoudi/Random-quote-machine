import React from 'react';
import './QuoteBox.css';
import QuoteList from '../QuoteList/QuoteList';
import { colors } from '../QuoteList/store'

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        }
    }

    componentDidMount() {
        const color = colors.map(color => color);
        const index = Math.floor(((Math.random() * 10) + 1) - 1);
        this.setState({ color: color[index]})
    }

    render() {        
        return (
            <div className="quoteBox"  style={{backgroundColor: this.state.color}}>
                <QuoteList />
            </div>
        );
    }
}

export default QuoteBox;