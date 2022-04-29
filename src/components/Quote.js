import React,{useState,useEffect} from 'react';

const Quote = () => {
    const [quote,setQuote] = useState({
        anime: null,
        character: null,
        quote: null
      });
    
      const fetchQuote = async() =>{
        return await fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json());
      }
      const generate = async() =>{
        setQuote(await fetchQuote());
      }
      
    
     
    useEffect(() => {
      async function fetchData(){
        setQuote(await fetchQuote());
      }
     fetchData();
    }, [])
    
  return (
      <div>
    <div className='quote'>
       <div className='anime' title={quote.anime}>
            {quote.anime}
        </div>
        <blockquote>
       {quote.quote}
        </blockquote>
    <div className='character' title={quote.character}>{quote.character}</div>
    
    </div>
    <button onClick={generate}>Generate new Quote</button>
    </div>
  )
}

export default Quote