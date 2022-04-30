import React from 'react'

const GetByCharDisplay = ({anime}) => {
  return (
    <div>
         <div className='quote'>
       <div className='anime' title={anime.anime}>
            {anime.anime}
        </div>
        <blockquote>
       {anime.quote}
        </blockquote>
    <div className='character' title={anime.character}>{anime.character}</div>

    </div>
    </div>
  )
}

export default GetByCharDisplay