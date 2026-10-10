import React from "react";
import { Product } from "../../App";

interface HomePageProps {
  products: Product[];
  categories: string[];
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: string) => void;
  setCurrentPage?: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  categories,
  onSelectProduct,
  onSelectCategory,
}) => {
  return (
    <div className="home-page space-y-16 animate-fadeIn">
      {/* Khu vực Categories */}
      <section className="category-section text-center space-y-6">
        <h2 className="category-title text-3xl text-gray-700 tracking-wide font-medium">
          Categories
        </h2>
        <div className="category-list flex justify-center flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className="category-pill bg-white text-gray-600 border border-gray-200 px-6 py-2 rounded-full shadow-sm text-xs font-medium hover:text-[#ff6f00] hover:border-[#ff6f00] hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Khu vực Sản phẩm nổi bật */}
      <section className="featured-section space-y-10">
        <h2 className="featured-title text-3xl font-bold text-center text-gray-800 tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#ff6f00] after:mx-auto after:mt-3">
          Sản phẩm nổi bật
        </h2>
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="product-card bg-white border border-gray-100 rounded-3xl p-6 relative flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
              onClick={() => onSelectProduct(prod)}
            >
              {prod.discount && (
                <span className="discount-badge absolute top-4 right-4 bg-orange-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full z-10 shadow-sm">
                  -{prod.discount}%
                </span>
              )}

              <div className="product-image-wrap h-48 w-full flex items-center justify-center p-4 mb-6 bg-gray-50/50 rounded-2xl overflow-hidden relative">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="product-image max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="product-meta space-y-4 flex-grow flex flex-col justify-between">
                <h3 className="product-title text-sm font-semibold text-gray-800 group-hover:text-[#ff6f00] line-clamp-2 min-h-[40px] leading-relaxed transition-colors duration-300">
                  {prod.name}
                </h3>
                <div className="product-price-row pt-2 border-t border-gray-50">
                  <div className="flex items-baseline space-x-2">
                    <span className="product-price text-[#ff3d00] font-extrabold text-base tracking-tight">
                      {prod.price.toLocaleString("vi-VN")}đ
                    </span>
                    {prod.oldPrice && (
                      <span className="product-old-price text-gray-400 line-through text-xs font-normal">
                        {prod.oldPrice.toLocaleString("vi-VN")}đ
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
