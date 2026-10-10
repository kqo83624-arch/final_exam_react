import React, { useState } from "react";
import {
  Heart,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { Product } from "../../App";

interface ProductPageProps {
  product: Product | null;
  defaultProduct: Product;
  onAddToCart: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  defaultProduct,
  onAddToCart,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const currentProduct = product || defaultProduct;

  return (
    <div className="product-page">
      <nav className="product-breadcrumb" aria-label="Breadcrumb">
        <span>Home</span>
        <span className="breadcrumb-divider">›</span>
        <span>Category</span>
        <span className="breadcrumb-divider">›</span>
        <span className="product-breadcrumb-current">
          {currentProduct.name}
        </span>
      </nav>

      <div className="product-detail">
        <div className="product-visual">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="product-detail-image"
          />
        </div>

        <section className="product-information">
          <span className="product-category-label">
            {currentProduct.category}
          </span>
          <h1 className="product-detail-title">{currentProduct.name}</h1>

          <div className="product-detail-prices">
            <span className="product-detail-price">
              {currentProduct.price.toLocaleString("vi-VN")}đ
            </span>
            {currentProduct.oldPrice && (
              <span className="product-detail-old-price">
                {currentProduct.oldPrice.toLocaleString("vi-VN")}đ
              </span>
            )}
          </div>

          <ul className="product-assurances">
            <li>
              <PackageCheck aria-hidden="true" />
              <span>
                <strong>Bộ sản phẩm gồm:</strong> Thiết bị, phụ kiện và hướng
                dẫn sử dụng
              </span>
            </li>
            <li>
              <ShieldCheck aria-hidden="true" />
              <span>
                <strong>Bảo hành:</strong> Chính hãng 12 tháng
              </span>
            </li>
            <li>
              <RefreshCw aria-hidden="true" />
              <span>
                <strong>Đổi trả:</strong> Hỗ trợ đổi mới trong 12 tháng
              </span>
            </li>
          </ul>

          <div className="product-actions">
            <button
              className="add-to-cart-button"
              onClick={onAddToCart}
              type="button"
            >
              <ShoppingCart aria-hidden="true" />
              Thêm giỏ hàng
            </button>
            <button
              aria-pressed={isFavorite}
              className={`favorite-button${isFavorite ? " is-favorite" : ""}`}
              onClick={() => setIsFavorite((favorite) => !favorite)}
              type="button"
            >
              <Heart aria-hidden="true" />
              {isFavorite ? "Đã yêu thích" : "Yêu thích"}
            </button>
          </div>

          <p className="product-contact-note">
            Hoặc gọi ngay để đặt mua: <a href="tel:19001080">1900 1080</a>
            <span> (8:00-20:00)</span>
          </p>
        </section>
      </div>
    </div>
  );
};
