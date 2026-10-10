import {Header,WhatWeOffer, Products,Footer} from "./props";
import style from "./style.module.css";

function Main() {
return (
    <>  
        <div style={{ backgroundColor: "#f4f4f4" }}>
            <Header />
            <h1 className={style.h1}>What We Offer</h1>
            <WhatWeOffer />
            <div style={{ backgroundColor: "#f8f8f8" }}>
            </div>
            <h1 className={style.h1}>Product's List</h1>
            <Products />
        </div>
        <div className={style.footer}>
            <Footer />
        </div>
    </>
)
}

export default Main;