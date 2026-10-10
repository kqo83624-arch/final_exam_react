const Border = (props) => {
    return (
        <>
            <p style={{zIndex:"2px",marginLeft:"120px",fontFamily:'sans-serif',color:'white',border:"2px solid #FF6700",backgroundColor:"#FF6700",borderRadius:"3px",textAlign:"center",width:"50px",marginTop:"1px",marginBottom:"5px",paddingBottom:"3px",paddingTop:"3px"}}>{props.name}</p>
        </>
        )
}

export default Border;