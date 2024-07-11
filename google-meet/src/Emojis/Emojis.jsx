
import "./Emojis.css";

import { useState } from 'react';
const Emojis = () => {

    const [emoji, setEmoji] = useState("")
    //    const [skin, setSkin] = useState("")
    //    
    return (
        <div>
            <div className='emojis'>
                <h1 className='emoji-clicked'>{emoji}</h1>
                {/* <h5 className='skinText'>{skin}</h5> */}
                <button onClick={() => { setEmoji("💖") }} >💖</button>
                <button onClick={() => { setEmoji("👍") }} >👍</button>
                <button onClick={() => { setEmoji("🎉") }} >🎉</button>
                <button onClick={() => { setEmoji("👏") }} >👏</button>
                <button onClick={() => { setEmoji("😂") }} >😂</button>
                <button onClick={() => { setEmoji("😮") }} >😮</button>
                <button onClick={() => { setEmoji("😢") }} >😢</button>
                <button onClick={() => { setEmoji("🤔") }} >🤔</button>
                <button onClick={() => { setEmoji("👎") }} >👎</button>


            </div>
            {/* <button className='skin' onClick={()=>{setSkin("Skin tone")} }  >😶</button> */}
        </div>
    );
}

export default Emojis;


