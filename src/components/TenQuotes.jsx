import React,{useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import TenDisplay from './TenDisplay';

const TenQuotes = () => {
    const [quotes,setQuotes] = useState([]);
    const fetchQuote = async() =>{
      return await fetch('https://animechan.vercel.app/api/quotes')
      .then(response => response.json());
    }
    const generate = async() =>{
      setQuotes(await fetchQuote());
    }
    
  
   
  useEffect(() => {
    async function fetchData(){
      setQuotes(await fetchQuote());
    }
   fetchData();
  }, [])
    const quotesTen =  quotes.map(inner => [inner].map((quotes) =>
    <TenDisplay key={uuidv4()} quotes={quotes}/>
    
    ));
    
    
  return (
      <div>
   {quotesTen}
   <button onClick={generate}>Generate new Quote</button>
    </div>
  )
}

export default TenQuotes