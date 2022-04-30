import React from 'react'

const TenDisplay = ({quotes}) => {
  return (
    <div>
         <div className='quote'>
       <div className='anime' title={quotes.anime}>
            {quotes.anime}
        </div>
        <blockquote>
       {quotes.quote}
        </blockquote>
    <div className='character' title={quotes.character}>{quotes.character}</div>
    
    </div>
    </div>
  )
}

export default TenDisplay