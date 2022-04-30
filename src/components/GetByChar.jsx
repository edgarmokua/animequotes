import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import GetByCharDisplay from './GetByCharDisplay';
import{Form,Input,Button} from 'antd'

const GetByChar = () => {
    const [anime,setAnime] = useState([]);
    const [charName,setCharName] = useState('saitama');
    const fetchQuote = async() =>{
      return await fetch('https://animechan.vercel.app/api/quotes/character?name='+charName)
      .then(response => response.json());
    }
     
  useEffect(() => {
    async function fetchData(){
      setAnime(await fetchQuote());
    }
   fetchData();
  }, [])
    const filteredChar =  anime.map(inner => [inner].map((anime) =>
    <GetByCharDisplay key={uuidv4()} anime={anime}/>
    
    ));
    const submitAction = (e) => {
        e.preventDefault()
        setCharName(charName)
    async function fetchData(){
      setAnime(await fetchQuote());
    }
   fetchData();
      
        setCharName('')
       
         }
  return (
    <div>
         <Form onFinish ={submitAction}>
        <Input  style={{width: "40vw", marginBottom: 10}} placeholder="Anime Name" allowClear value={charName} onChange={(e) => setCharName(e.target.value)}/>
     <br/>
      <Button type="primary" onClick={submitAction} style={{width: "40vw", marginBottom: 10}} >Submit</Button>
        </Form>
        {filteredChar}
    </div>
  )
}

export default GetByChar