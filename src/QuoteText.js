export default function QuoteText({ containerStyle, quoteText }) {
    return (
        <>
        <div className='quote-text' style={containerStyle}>
        <i className="fa fa-quote-left"> </i>
        <span id="text" >{quoteText}</span>
        </div>
        </>
    )
}