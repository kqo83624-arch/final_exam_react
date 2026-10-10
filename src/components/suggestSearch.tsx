import { useState } from "react";

const SuggestSearch = () => {
  const [isShow, setIsShow] = useState(false)
  console.log(isShow)
  const toggleShow = () => {
    setIsShow(!isShow)
  };

return (
  <div>
    <h3 onClick={
      ()=>{setIsShow(true)}
    }>Input text</h3>
    {
      isShow && (
      <div>Tìm kiếm gần đây</div>
      )
    }
  </div>
)
}
export default SuggestSearch;