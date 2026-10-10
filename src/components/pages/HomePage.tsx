import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
        <div className={style.header}>
            <h2 className={style.fake}>Fake shop</h2>
            <p className={style.nav}>Home</p>
            <p className={style.nav}>categories</p>
            <p className={style.nav}>Products</p>
            <button className={style.ShopButton}>Shop</button>
        </div>

        <div className={style.categories}>
            <h2>Categories</h2>
        </div>

        <div className={style.products}>
            <h2>Products</h2>
        </div>

        <div className={style.footer}>
            <h2>Footer</h2>
        </div>  
    </>
  );
};

export default HomePage;