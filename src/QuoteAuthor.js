export default function QuoteAuthor({ author, containerStyle }) {
    return (
        <div className='quote-author' style={containerStyle}>
            <p id='author'>- {author}</p>
        </div>
    )
}