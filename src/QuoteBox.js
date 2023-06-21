import Buttons from "./Buttons"
import './App.css'
import QuoteText from "./QuoteText"
import QuoteAuthor from "./QuoteAuthor"
import { useState, useEffect } from 'react';

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];



export default function QuoteBox() {
    const [color, setColor] = useState('#333');
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const getQuotes = async () => {
      const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

      const response = await fetch(url);
      
      const data = await response.json();
      const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];

      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    };

    useEffect(() => {
      getQuotes();
    }, []);

    const containerStyle = {
      color: color,
      transition: 'color 1s ease' 
    };
  
    const containerBackground = {
      backgroundColor: color,
      transition: 'background-color 1s ease' 
    }
  
    useEffect(() => {
      document.body.style.backgroundColor = color;
      document.body.style.transition = 'background-color 1s ease';
      
    }, [color]);
  
    const randomColor = () => {
      let color = Math.floor(Math.random() * colors.length);
      return colors[color];
    };
    
    if (color === '#333') {
      setColor(randomColor());
    }
  
    /* When the New Quote button is pressed, the color of the background changes. */
    const changeColor = () => {
      setColor(randomColor());
    };    

    return (
            <div id='quote-box'>
                <QuoteText quoteText={quote} containerStyle={containerStyle} />
                <QuoteAuthor author={author} containerStyle={containerStyle} />
                <Buttons quoteText={quote} quoteAuthor={author} containerBackground={containerBackground} changeBackgroundColor={changeColor} changeQuote={getQuotes}/>
            </div>
    )
   
}