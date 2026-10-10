import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router";
import { HomePage } from "./finnal_exam/pages/HomePage";
import { CategoryPage } from "./finnal_exam/pages/CategoryPage";
import { ProductPage } from "./finnal_exam/pages/ProductPage";
import "./App.css";

import adapterImg from "./finnal_exam/img/adapter.png";
import cableImg from "./finnal_exam/img/cap_chuyen.png";
import purifierImg from "./finnal_exam/img/may_loc.jpg";
import robotImg from "./finnal_exam/img/robot.jpg";

const API_CATEGORIES_URL =
  "https://my-json-server.typicode.com/nhannn87dn/ReactJs-Basic-Tutorials/categories";
const API_PRODUCTS_URL =
  "https://my-json-server.typicode.com/nhannn87dn/ReactJs-Basic-Tutorials/products";

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  categoryId?: number;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  description: string;
}

const FALLBACK_CATEGORIES: Category[] = [
  { id: 1, name: "Máy lọc không khí" },
  { id: 2, name: "Máy hút bụi" },
  { id: 3, name: "Cáp sạc" },
  { id: 4, name: "Adapter" },
  { id: 5, name: "Tai nghe" },
];

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Máy Lọc Không Khí Xiaomi Mi Air Purifier Gen 4 Pro",
    category: "Máy lọc không khí",
    categoryId: 1,
    price: 1150000,
    oldPrice: 1725000,
    discount: 33,
    image: purifierImg,
    description:
      "Hệ thống lọc không khí hiệu năng cao, làm sạch thông minh, kiểm soát mùi tốt và loại bỏ hoàn toàn các loại bụi mịn cứng đầu trong phòng ngủ, phòng khách.",
  },
  {
    id: 2,
    name: "Robot Hút Bụi Lau Nhà Xiaomi Roborock S7",
    category: "Máy hút bụi",
    categoryId: 2,
    price: 6550000,
    oldPrice: 7200000,
    discount: 9,
    image: robotImg,
    description:
      "Robot cao cấp hỗ trợ điều hướng sóng âm chuẩn xác cao, tự động nâng thảm thông minh kết hợp tính năng chà sàn rung lập tức dọn sạch mọi mảng bám.",
  },
  {
    id: 3,
    name: "Cáp chuyển đổi USB-C sang SD",
    category: "Cáp sạc",
    categoryId: 3,
    price: 790000,
    oldPrice: 1290000,
    discount: 38,
    image: cableImg,
    description:
      "Hỗ trợ đầu đọc dữ liệu tốc độ cực nhanh trực tiếp từ máy ảnh của bạn sang Macbook hoặc các dòng iPad trang bị cổng kết nối chuẩn USB Type-C.",
  },
  {
    id: 4,
    name: "Adapter sạc Apple Type C 20W",
    category: "Adapter",
    categoryId: 4,
    price: 520000,
    image: adapterImg,
    description:
      "Củ sạc chính hãng Apple chuẩn công suất sạc nhanh tốt nhất dành cho các dòng iPhone 12, 13, 14, 15 series và tối ưu nguồn điện pin sử dụng bền bỉ lâu dài.",
  },
];

const normalizeCategoryName = (value: unknown): string => {
  if (typeof value === "string") return value.trim();

  if (value && typeof value === "object") {
    const category = value as Record<string, unknown>;
    return String(
      category.name ??
        category.title ??
        category.label ??
        category.categoryName ??
        category.slug ??
        "",
    ).trim();
  }

  return "";
};

const normalizeCategories = (rawCategories: unknown): Category[] => {
  if (!Array.isArray(rawCategories)) {
    return FALLBACK_CATEGORIES;
  }

  const normalized = rawCategories
    .map((category, index) => {
      if (typeof category === "string") {
        return { id: index + 1, name: category.trim() };
      }

      if (category && typeof category === "object") {
        const data = category as Record<string, unknown>;
        const name = normalizeCategoryName(data);

        if (!name) return null;

        return {
          id: Number(data.id ?? index + 1),
          name,
        };
      }

      return null;
    })
    .filter((category): category is Category => Boolean(category));

  return normalized.length > 0 ? normalized : FALLBACK_CATEGORIES;
};

const normalizeProducts = (rawProducts: unknown): Product[] => {
  if (!Array.isArray(rawProducts)) {
    return FALLBACK_PRODUCTS;
  }

  const items = rawProducts as Record<string, unknown>[];

  return items
    .map((item, index) => {
      const fallbackImage =
        [purifierImg, robotImg, cableImg, adapterImg][index % 4] ?? adapterImg;
      const id = Number(item.id ?? index + 1);
      const name = String(item.name ?? item.title ?? `Sản phẩm ${id}`).trim();
      const categoryName =
        normalizeCategoryName(
          item.category ??
            item.categoryName ??
            item.type ??
            item.kind ??
            "Khác",
        ) || "Khác";
      const price = Number(
        item.price ?? item.salePrice ?? item.finalPrice ?? 0,
      );
      const oldPrice = item.oldPrice ?? item.old_price ?? item.originalPrice;
      const discount = item.discount ?? item.discountPercent ?? item.sale;
      const images = Array.isArray(item.images)
        ? (item.images as unknown[])
        : [];
      const image = String(
        images[0] ?? item.image ?? item.thumbnail ?? item.img ?? fallbackImage,
      );
      const description = String(
        item.description ??
          item.content ??
          "Mô tả sản phẩm đang được cập nhật.",
      );
      const categoryObject =
        item.category && typeof item.category === "object"
          ? (item.category as Record<string, unknown>)
          : undefined;
      const categoryIdValue = Number(
        item.categoryId ??
          item.category_id ??
          categoryObject?.id ??
          item.id ??
          1,
      );

      return {
        id,
        name,
        category: categoryName,
        categoryId: Number.isFinite(categoryIdValue)
          ? categoryIdValue
          : undefined,
        price: Number.isFinite(price) ? price : 0,
        oldPrice:
          oldPrice !== undefined && oldPrice !== null
            ? Number(oldPrice)
            : undefined,
        discount:
          discount !== undefined && discount !== null
            ? Number(discount)
            : undefined,
        image,
        description,
      };
    })
    .filter((product) => Boolean(product.name));
};

const getCategoryNameById = (
  categories: Category[],
  id: string | undefined,
): string => {
  if (!id) return "Tất cả";
  const numericId = Number(id);

  if (!Number.isNaN(numericId)) {
    const matchedCategory = categories.find(
      (category) => category.id === numericId,
    );
    if (matchedCategory) return matchedCategory.name;
  }

  return "Tất cả";
};

export default function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS);
  const [categories, setCategories] = useState<Category[]>(FALLBACK_CATEGORIES);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryResult, productResult] = await Promise.allSettled([
          fetch(API_CATEGORIES_URL),
          fetch(API_PRODUCTS_URL),
        ]);

        if (categoryResult.status === "fulfilled" && categoryResult.value.ok) {
          const rawCategories = await categoryResult.value.json();
          setCategories(normalizeCategories(rawCategories));
        }

        if (productResult.status === "fulfilled" && productResult.value.ok) {
          const rawProducts = await productResult.value.json();
          setProducts(normalizeProducts(rawProducts));
        }
      } catch (error) {
        console.error("Fetch shop data failed", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  const handleSelectProduct = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const handleSelectCategory = (category: Category) => {
    navigate(`/category/${category.id}`);
  };

  return (
    <div className="app-shell min-h-screen flex flex-col font-sans bg-[#fcfcfc] text-gray-800">
      <header className="site-header bg-[#ff6f00] text-white px-12 py-3 flex justify-between items-center shadow-sm">
        <div
          className="site-logo text-2xl font-bold cursor-pointer tracking-wide"
          onClick={() => navigate("/")}
        >
          FakeShop
        </div>
        <nav className="site-nav flex items-center space-x-8 text-sm font-medium">
          <button
            onClick={() => navigate("/")}
            className="hover:opacity-80 transition"
          >
            Home
          </button>
          <button
            onClick={() => navigate(`/category/${categories[0]?.id ?? 1}`)}
            className="hover:opacity-80 transition"
          >
            Category
          </button>
          <button
            onClick={() => navigate(`/product/${products[0]?.id ?? 1}`)}
            className="hover:opacity-80 transition"
          >
            Product
          </button>
          <div className="cart-indicator bg-white text-[#ff6f00] px-2 py-0.5 rounded flex items-center space-x-1 font-bold text-xs">
            <span>🛒</span>
            <span>{cartCount}</span>
          </div>
        </nav>
      </header>

      <main className="app-main flex-grow max-w-6xl w-full mx-auto p-8">
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center text-sm font-medium text-gray-500">
            Đang tải dữ liệu từ API...
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  products={products}
                  categories={categories.map((category) => category.name)}
                  onSelectProduct={handleSelectProduct}
                  onSelectCategory={(categoryName) => {
                    const foundCategory = categories.find(
                      (category) => category.name === categoryName,
                    );
                    if (foundCategory) handleSelectCategory(foundCategory);
                  }}
                />
              }
            />
            <Route
              path="/category/:id"
              element={
                <CategoryRoute
                  products={products}
                  categories={categories}
                  onSelectProduct={handleSelectProduct}
                  onSelectCategory={handleSelectCategory}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductRoute
                  products={products}
                  onAddToCart={() => setCartCount((count) => count + 1)}
                />
              }
            />
          </Routes>
        )}
      </main>

      <footer className="site-footer bg-[#1a202c] text-gray-400 text-xs py-12 px-12 mt-16">
        <div className="footer-grid max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="footer-heading text-white font-bold mb-4 uppercase tracking-wider">
              About Us
            </h4>
            <p className="leading-relaxed text-gray-400">Electrician</p>
            <p className="leading-relaxed mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus.
            </p>
          </div>
          <div>
            <h4 className="footer-heading text-white font-bold mb-4 uppercase tracking-wider">
              Contact Info
            </h4>
            <p className="space-y-2">
              <span className="block">
                <strong>Address:</strong> 123 Street Name, City, England
              </span>
              <span className="block">
                <strong>Phone:</strong> (123) 456-7890
              </span>
              <span className="block">
                <strong>Email:</strong> mail@example.com
              </span>
            </p>
          </div>
          <div>
            <h4 className="footer-heading text-white font-bold mb-4 uppercase tracking-wider">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help & FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading text-white font-bold mb-4 uppercase tracking-wider">
              Popular Tags
            </h4>
            <div className="footer-tags flex flex-wrap gap-1.5">
              {["Bag", "Tech", "Smart", "Home", "Electronics"].map((tag) => (
                <span
                  key={tag}
                  className="footer-tag bg-[#2d3748] text-gray-400 px-2 py-1 rounded hover:bg-gray-600 cursor-pointer transition text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t border-gray-800 pt-6 text-center text-gray-500 text-[11px]">
          © Aptech eCommerce. 2026. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function CategoryRoute({
  products,
  categories,
  onSelectProduct,
  onSelectCategory,
}: {
  products: Product[];
  categories: Category[];
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: Category) => void;
}) {
  const { id } = useParams();
  const selectedCategoryName = id
    ? getCategoryNameById(categories, id)
    : "Tất cả";
  const selectedCategory = categories.find(
    (category) => category.name === selectedCategoryName,
  );

  const filteredProducts =
    selectedCategoryName === "Tất cả"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategoryName ||
            product.categoryId === selectedCategory?.id,
        );

  return (
    <CategoryPage
      products={filteredProducts}
      categories={categories.map((category) => category.name)}
      onSelectProduct={onSelectProduct}
      selectedCategory={selectedCategoryName}
      onSelectCategory={(categoryName) => {
        const foundCategory = categories.find(
          (category) => category.name === categoryName,
        );
        if (foundCategory) onSelectCategory(foundCategory);
      }}
    />
  );
}

function ProductRoute({
  products,
  onAddToCart,
}: {
  products: Product[];
  onAddToCart: () => void;
}) {
  const { id } = useParams();
  const selectedId = Number(id ?? 1);
  const product = products.find((item) => item.id === selectedId) ?? null;

  return (
    <ProductPage
      product={product}
      defaultProduct={products[0] ?? FALLBACK_PRODUCTS[0]}
      onAddToCart={onAddToCart}
    />
  );
}
