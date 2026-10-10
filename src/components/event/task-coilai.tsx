function Task1() {                                      

const EventHandingExample = (click:String) => {                                             
    console.log(click)
}                                                                   
const Button = ({name, onClick}: {name: String, onClick: ()=>void }) => {
    return (
        <>
            <button onClick={onClick}>{name}</button>
        </>
    )                                                
}                   

    return (                
        <>                  
            <button onClick={()=>EventHandingExample('đã thêm thành công')}>Thêm vào giỏ hàng</button>                      {/*task1*/}
            <button onClick={()=>EventHandingExample('NV sẽ gọi lại sớm')} style={{marginLeft:30}}>Gọi lại tư vấn</button>  {/*task1*/}
                            
            <button name="Login" >Login</button>                                 {/*task2*/}
            <button name="Logout">Logout</button>                               {/*task2*/}
        </> 
    );
}

export default Task1;
