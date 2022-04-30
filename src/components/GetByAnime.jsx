import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import GetByAnimeDisplay from './GetByAnimeDisplay';
import{Form,Input,Button} from 'antd'

const GetByAnime = () => {
    const [anime,setAnime] = useState([]);
    const [animeName,setAnimeName] = useState('naruto');
    const fetchQuote = async() =>{
      return await fetch('https://animechan.vercel.app/api/quotes/anime?title='+animeName)
      .then(response => response.json());
    }
     
  useEffect(() => {
    async function fetchData(){
      setAnime(await fetchQuote());
    }
   fetchData();
  }, [])
    const filteredAnime =  anime.map(inner => [inner].map((anime) =>
    <GetByAnimeDisplay key={uuidv4()} anime={anime}/>
    
    ));
    const submitAction = (e) => {
        e.preventDefault()
        setAnimeName(animeName)
    async function fetchData(){
      setAnime(await fetchQuote());
    }
   fetchData();
      
        setAnimeName('')
       
         }
  return (
    <div>
        <Form onFinish ={submitAction}>
        <Input  style={{width: "40vw", marginBottom: 10}} placeholder="Anime Name" allowClear value={animeName} onChange={(e) => setAnimeName(e.target.value)}/>
     <br/>
      <Button type="primary" onClick={submitAction} style={{width: "40vw", marginBottom: 10}} >Submit</Button>
        </Form>
        {filteredAnime}
    </div>
  )
}

export default GetByAnime