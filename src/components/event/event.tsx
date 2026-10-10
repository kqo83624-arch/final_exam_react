function Event() {
//body\\
  const onClick = () => {
    console.log('a')
  }
  const onClickUse = (kenh:String) => {
    console.log(kenh)
  }
//body\\
  return (
    <>
        <button style={{width:100,height:50 }} 
            onClick={onClick}   
              
            onMouseEnter={()=>{     //lia chuot//
              console.log("lia chuot")
            }}
        >title</button>
        <button onClick={()=>onClickUse('vtv1')} style={{width:100,height:50,margin:30}}>vtv1</button>
        <button onClick={()=>onClickUse('vtv2')} style={{width:100,height:50,margin:30}}>vtv2</button>
    </>
  );
}

export default Event;