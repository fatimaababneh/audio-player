import React, { useEffect, useState } from "react";

export const Test = () => {
    const [count, setCount] = useState(null);
    console.log('in the root')
    useEffect(()=> {
            console.log('useeffect')
            console.log(count)
        },[count]);
        
    const StartPlaying = async() => {
        try {

        }
        catch(error){
            console.log(error, 'audio error')
        }
        }
    return(
        <div>
            {console.log('hi')}
            <button onClick={()=> setCount(count+1)}>+</button>
            {console.log(count)}
        </div>
    )
}