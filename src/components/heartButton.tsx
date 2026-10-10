import { useState } from "react";


const HeartButton = () => {
    const [isHeart, setIsHeart] = useState(false)
    console.log(isHeart)
    const toggleHeart = () => {
        setIsHeart(!isHeart)
    };
    return (
        <div> 
            <button onClick={()=>{
                setIsHeart(true)
            }} style={{color:"black"}}>♡</button>
            {
                /*IsHeart && (
                    
                )*/
            }
        </div>
        
    )
}

export default HeartButton;