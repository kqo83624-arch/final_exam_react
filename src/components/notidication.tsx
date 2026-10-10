import { useState } from "react";

const Notification = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <button onClick={()=>{
        setIsShow(true)
      }}>notification</button>
      {
          isShow && (
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          )
      }
      
    </div>
  )
}

export default Notification;