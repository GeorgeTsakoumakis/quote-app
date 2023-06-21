import './App.css'

export default function Buttons({ quoteText, quoteAuthor, changeBackgroundColor, containerBackground, changeQuote }) {
        
    return (
        <div className='buttons' >
            <a
            style={containerBackground}
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href={`https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`}
          >
                <i className="fa fa-twitter"></i>
            </a>
            <a
            style={containerBackground}
            className='button'
            id='tumblr-quote'
            title='Post this quote on tumblr!'
            target='_blank'
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quoteAuthor}&content=${quoteText}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} rel="noreferrer"
            >
                <i className='fa fa-tumblr'></i>
            </a>
            <a
            style={containerBackground}
            className='button'
            id='facebook-quote'
            title='Post this quote on facebook!'
            target='_blank'
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcodepen.io%2FfreeCodeCamp%2Fpen%2FyMgGjr&quote=${quoteText} - ${quoteAuthor}`} rel="noreferrer"
            >
                <i className='fa fa-facebook'></i>
            </a>
            <button 
            style={containerBackground}
            className='button'
            id='new-quote'
            onClick={() => {
                let content = document.querySelector('#text');
                let quotemark = document.querySelector('.fa-quote-left');
                let author = document.querySelector('#author');
                content.classList.add('hidden');
                quotemark.classList.add('hidden');
                author.classList.add('hidden');
                changeBackgroundColor();
                setTimeout(() => {
                    changeQuote(); // this is the function that changes the quote and author in the state
                    content.classList.remove('hidden');
                    quotemark.classList.remove('hidden');
                    author.classList.remove('hidden');
                    content.classList.add('visible');
                    quotemark.classList.add('visible');
                    author.classList.add('visible');
                }
                , 500);
            }}>New Quote</button>
        </div>
    )
}