import { useEffect, useState } from "react";
import styles from "./FetchPosts.module.css";

type TProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const FetchPosts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    const FetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("<<=== 🚀 response ===>>", response);
        console.log("<<=== 🚀 data ===>>", data.products);
        if (response.status === 200) {
          setProducts(data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchPosts();
  }, []);

  console.log("<<=== 🚀 products ===>>", products);
  return (
    <>
        <div className={styles.title}>
            <h1>Danh sach bai viet (posts)</h1>
        </div>       
        <div className={styles.conten}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
        </div>
    </>
  );
};

export default FetchPosts;