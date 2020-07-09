import React from 'react';
import './QuoteList.css';
import { quotes } from './store';
import Button from '../Button/Button';


class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        const text = quotes.map(quote => quote.text);
        const author = quotes.map(quote => quote.author);
        const index = Math.floor(((Math.random() * 20) + 1) - 1);
        this.setState({ 
            text: text[index],
            author: author[index]
        })
    }
    
    handleClick() {
        const text = quotes.map(quote => quote.text);
        const author = quotes.map(quote => quote.author);
        const index = Math.floor(((Math.random() * 20) + 1) - 1);
        this.setState({ 
            text: text[index],
            author: author[index]
        })
    }
    
    render() {
        
        return (
            <React.Fragment>
                <div className="contentBox">
                    <p className="text"> {this.state.text}</p>
                    <p className="author">&#10026; {this.state.author} &#10026;</p>
                </div>
                <div className="quoteButton">
                    <button className="nextQuote" onClick={this.handleClick}><span role="img" aria-label="Reflexive">&#129320;</span> Next Quote</button>
                </div>
                <div className="quoteButton">
                    <Button />
                </div>                                              
            </React.Fragment>
        );
    }
}

export default QuoteList;