import "./bai_lam.css";
import h1 from "./h1.jpg"
import h2 from "./h2.jpg"
import h3 from "./h3.jpg"
import h4 from "./h4.jpg"

function Bai2() {
  return (<>
    <h1 className="tin"> <div className="tin_moi">TIN MỚI</div>
        <div className="xem_them"> <h4 className="xem">Xem thêm</h4></div>
    </h1>
    <div className="container">

      <div className="parent">
        <div className="item">
            <img src={h1} alt=""/>
          <h3>Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đề có màn hình super AMOLED 90Hz</h3>
          <p>140 lượt xem</p>
        </div>
      </div>

      <div className="parent">
        <div className="item">
          <img src={h2} alt="" />
          <h3>Google Pixel 5e dự kiến sẽ được ra mắt cùng thời điểm với Androif 12</h3>
          <p>127 lượt xem</p>
        </div>
      </div>
      
      <div className="parent">
        <div className="item">
          <img src={h3} alt="" />
          <h3>Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chop Snapdragon 720</h3>
          <p>55 lượt xem</p>
        </div>
      </div>
      
      <div className="parent">
        <div className="item">
          <img src={h4} alt="" />
          <h3>Galaxy A82 5G chuản bị ra mắt với chip Flagship và màn hình trược độc đáo, Samfans gom lúa đi là vừa</h3>
          <p>55 lượt xem</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Bai2;