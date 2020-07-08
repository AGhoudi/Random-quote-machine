import React from 'react';
import './QuoteList.css';
import { quotes } from './store';


class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            author: ''
        }
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
    
    render() {
        
        return (
            <React.Fragment>
                <p className="text"> {this.state.text}</p>
                <p className="author">&#10026; {this.state.author} &#10026;</p>                
            </React.Fragment>
        );
    }
}

export default QuoteList;