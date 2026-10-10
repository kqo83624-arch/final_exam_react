import "./bai3.css";
import camera from "./camera.png"
import battery from "./battery.png"
import backpack from "./backpack.png"
import shoes from "./shoes.png"
import mouse from "./mouse.png"
import bag from "./bag.png"
import volum from "./volum.png"
import black_shoes from "./black_shoes.png"
import Glasses from "./glasses.png";

function Bai3() {
  return (<>
    <div className="container">
        
        <div className="parent">
            <div className="item_head"><strong>TOP RATED PRODUCTS</strong></div>
            <div className="item">
                <img src={camera} alt="" />
                <div className="box">
                    <p>Porto Extended Camera</p>
                    <p>★★★★★</p>
                    <p><b>$49.00</b></p>
                </div>
            </div>
            <div className="item">
                <img src={backpack} alt="" />
                <div className="box">
                    <p>Blue BackPack</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
            </div>
            <div className="item">
                <img src={shoes} alt="" />
                <div className="box">
                    <p>Casual Blue Shoes</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
            </div>
        </div>
    

      <div className="parent">
        <div className="item_head"><strong>BEST SELLING PRODUCTS</strong></div>
        <div className="item">
          <img src={battery} alt="" />
                <div className="box">
                    <p>Battery Charger</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
        </div>
        <div className="item">
          <img src={mouse} alt="" />
                <div className="box">
                    <p>Computer Mouse</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
        </div>
        <div className="item">
          <img src={bag} alt="" />
                <div className="box">
                    <p>Casual Note Bag</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
        </div>
      </div>
      
      <div className="parent">
        <div className="item_head"><strong>LATEST PRODUCTS</strong></div>
        <div className="item">
          <img src={volum} alt="" />
                <div className="box">
                    <p>Ultimate 3D Bluetooth</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
        </div>
        <div className="item">
          <img src={black_shoes} alt="" />
                <div className="box">
                    <p>Brown-Black Men</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
        </div>
        <div className="item">
          <img src={Glasses} alt="" />
                <div className="box">
                    <p>Brown-Black Men Glasses</p>
                    <p>★★★★★</p>
                    <b>$49.00</b>
                </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Bai3;