import { Camera } from 'lucide-react';
const Ten = (props) => {
   console.log('props', props);
    return <button style={{border:'#ddd',fontFamily:'sans-serif',padding:props.padding,color:props.color,backgroundColor:props.backgroundColor,borderRadius:'2px',marginRight:"20px"}}>{props.name}</button>;
    <Camera/>
}

export default Ten;