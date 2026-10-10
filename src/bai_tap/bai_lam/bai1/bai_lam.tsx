import "./lay_out5.css";
import SD from "./SD.png"
import Border from "./lay_out5_props";
import W from "./W.png"
import lighting from "./lighting.png"
import airpod from "./airpod.png"

function bai_lam() {
  return (<>
    <h2><b>Phụ kiện tương thích</b></h2>
    <div className="container">

      <div className="parent">
        <div className="item">
          <div>
            <Border name="-25%"/>
            <img src={SD} alt="" className="item_pic"/>
          </div>
          <h4>Cáp chuyển đổi USB-C sang SD</h4>
          <p><b className="gia">1.290.000đ</b> <del>790.000đ</del></p>
        </div>
      </div>

      <div className="parent">
        <div className="item">
          <img src={W} alt="" className="item_pic_2"/>
          <h4>Adater sạc Apple Type C 20W</h4>
          <p className="gia"><b>520.000đ</b></p>
        </div>
      </div>
      
      <div className="parent">
        <div className="item">
          <img src={lighting} alt="" className="item_pic_2" />
          <h4>Cáp sạc Lighting 2m</h4>
          <p className="gia"><b>840.200đ</b></p>
        </div>
      </div>
      
      <div className="parent">
        <div className="item">
          <Border name="-20%"/>
          <img src={airpod} alt="" className="item_pic"/>
          <h4>AirPods 3</h4>
          <p><b className="gia">890.000đ</b> <del>1.450.000đ</del></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default bai_lam;