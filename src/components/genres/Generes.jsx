import React from 'react'
import "./style.scss"
import {  useSelector } from 'react-redux'

const Generes = ({data}) => {
     const {genres}=useSelector((state)=>state.home);
  return (
    <div className="genres">
        {data.map((g)=>{
            if(!genres[g]?.name) return;//if in case it is not available
            return(
                <div key={g} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Generes