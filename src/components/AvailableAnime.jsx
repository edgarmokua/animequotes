import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import AnimeDisplay from './AnimeDisplay';

const AvailableAnime = () => {
    const [anime,setAnime] = useState([]);
    const fetchQuote = async() =>{
      return await fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json());
    }
     
  useEffect(() => {
    async function fetchData(){
      setAnime(await fetchQuote());
    }
   fetchData();
  }, [])
    const animeList =  anime.map(inner => [inner].map((anime) =>
    <AnimeDisplay key={uuidv4()} anime={anime}/>
    
    ));
    
  return (
    <div>
        {animeList}
    </div>
  )
}

export default AvailableAnime