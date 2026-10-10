import React, { useEffect, useState } from "react";
import { Product } from "../../App";

interface CategoryPageProps {
  products: Product[];
  categories: string[];
  onSelectProduct: (product: Product) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  products,
  categories,
  onSelectProduct,
  selectedCategory = "Tất cả",
  onSelectCategory,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>(selectedCategory);

  useEffect(() => {
    setSelectedCat(selectedCategory);
  }, [selectedCategory]);

  const filteredProducts =
    selectedCat === "Tất cả"
      ? products
      : products.filter((p) => p.category === selectedCat);

  const handleCategoryClick = (category: string) => {
    setSelectedCat(category);
    onSelectCategory?.(category);
  };

  return (
    <div className="category-page animate-fadeIn">
      <nav className="category-breadcrumb" aria-label="Breadcrumb">
        <span>Home</span>
        <span className="breadcrumb-divider">›</span>
        <span aria-current="page">Category</span>
      </nav>

      {/* Thanh bộ lọc bên trái (Sidebar) */}
      <div className="category-layout">
        <aside className="category-sidebar w-full md:w-1/4 space-y-6">
          <div className="category-filter-panel bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <h3 className="category-filter-title text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3 mb-4">
              Bộ lọc
            </h3>
            <ul className="category-filter-list space-y-2">
              <li>
                <button
                  aria-pressed={selectedCat === "Tất cả"}
                  onClick={() => handleCategoryClick("Tất cả")}
                  className={`category-filter-option ${selectedCat === "Tất cả" ? "is-active" : ""}`}
                >
                  Tất cả thiết bị
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    aria-pressed={selectedCat === cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`category-filter-option ${selectedCat === cat ? "is-active" : ""}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Danh sách hiển thị sản phẩm bên phải */}
        <section className="category-results flex-grow">
          <div className="category-results-header flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <h2 className="category-results-title text-2xl font-bold text-gray-800 tracking-tight">
              {selectedCat}
            </h2>
            <span className="category-result-count text-xs text-gray-400 font-medium">
              Tìm thấy {filteredProducts.length} sản phẩm
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="category-empty-state text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 italic text-sm">
                Hiện tại chưa có sản phẩm nào thuộc nhóm này.
              </p>
            </div>
          ) : (
            <div className="category-product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <article
                  key={prod.id}
                  className="category-product-card"
                  onClick={() => onSelectProduct(prod)}
                >
                  {prod.discount && (
                    <span className="category-discount-badge">
                      -{prod.discount}%
                    </span>
                  )}
                  <div className="category-product-image-wrap">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="category-product-image"
                    />
                  </div>
                  <div className="category-product-meta">
                    <span className="category-product-category">
                      {prod.category}
                    </span>
                    <h3 className="category-product-title">{prod.name}</h3>
                    <div className="category-product-prices">
                      <span className="category-product-price">
                        {prod.price.toLocaleString("vi-VN")}đ
                      </span>
                      {prod.oldPrice && (
                        <span className="category-product-old-price">
                          {prod.oldPrice.toLocaleString("vi-VN")}đ
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
