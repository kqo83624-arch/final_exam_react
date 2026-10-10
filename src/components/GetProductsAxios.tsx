import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './GetProductsAxios.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface DummyApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const GetProductsAxios: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<DummyApiResponse>('https://dummyjson.com/products?limit=10&skip=0');
        setProducts(response.data.products);
      } catch (err: any) {
        setError(err.message || 'Đã có lỗi xảy ra khi tải dữ liệu từ DummyJSON!');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div className={`${styles.centered} ${styles.errorText}`}>Lỗi: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Danh Sách Sản Phẩm</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              
              <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <h4 className={styles.productTitle}>{product.title}</h4>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button className={styles.button}>Thêm vào giỏ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProductsAxios;
