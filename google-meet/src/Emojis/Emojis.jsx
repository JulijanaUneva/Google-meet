import React, {useState} from 'react';

import "./Emojis.css"; 

const Emojis = () => {
   
   const [emoji, setEmoji] = useState("")
   const [skin, setSkin] = useState("")
//    
    return (
        <div>
        <div className='emojis'>
            <h1 style={{position:"relative",top:"-75px",left:"-400px", fontSize:"60px"}}>
                {emoji}</h1>
            <h5 className='skinText'>{skin}</h5>
            <button onClick={()=>{setEmoji("💖")}} >💖</button>
            <button onClick={()=>{setEmoji("👍")}} >👍</button>
            <button onClick={()=>{setEmoji("🎉")}} >🎉</button>
            <button onClick={()=>{setEmoji("👏")}} >👏</button>
            <button onClick={()=>{setEmoji("😂")}} >😂</button>
            <button onClick={()=>{setEmoji("😮")}} >😮</button>
            <button onClick={()=>{setEmoji("😢")}} >😢</button>
            <button onClick={()=>{setEmoji("🤔")}} >🤔</button>
            <button onClick={()=>{setEmoji("👎")}} >👎</button>
            
            {/*
             <span style={{fontSize:"25px"}}>👍</span>
            <span style={{fontSize:"25px"}}>🎉</span>
            <span style={{fontSize:"25px"}}>👏</span>
            <span style={{fontSize:"25px"}}>😂</span>
            <span style={{fontSize:"25px"}}>😮</span>
            <span style={{fontSize:"25px"}}>😢</span> 
            <span style={{fontSize:"25px"}}>🤔</span> 
            <span style={{fontSize:"25px"}}>👎</span>      */}
        </div>
        {/* <button className='skin' onClick={()=>{setSkin("Skin tone")} }  >😶</button> */}
        </div>
    );
}

export default Emojis;
