import { useState } from "react";
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  ChevronRight,
  Check,
  Star,
  Menu,
  X,
  ArrowRight,
  Play,
  Users,
  Target,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ─── shared palette ───────────────────────────────────── */
const c = {
  primary: "#6366f1",
  primaryDark: "#4f46e5",
  primaryLight: "#a5b4fc",
  dark: "#0f172a",
  darkAlt: "#1e293b",
  gray: "#64748b",
  grayLight: "#e2e8f0",
  white: "#ffffff",
  bg: "#f8fafc",
  bgAlt: "#ffffff",
  gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
  gradientDark: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
  shadow: "0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06)",
  shadowLg: "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px rgba(0,0,0,.05)",
  shadowXl: "0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px rgba(0,0,0,.04)",
  radius: "12px",
  radiusLg: "20px",
  radiusFull: "9999px",
  transition: "all .3s cubic-bezier(.4,0,.2,1)",
  maxW: "1200px",
};

/* ─── data ─────────────────────────────────────────────── */
const features = [
  {
    icon: Zap,
    title: "Tốc độ vượt trội",
    desc: "Ứng dụng load cực nhanh với kiến trúc modern và optimization liên tục.",
  },
  {
    icon: Shield,
    title: "Bảo mật tuyệt đối",
    desc: "Mã hóa end-to-end, xác thực 2 lớp và compliance với mọi tiêu chuẩn quốc tế.",
  },
  {
    icon: BarChart3,
    title: "Phân tích thông minh",
    desc: "Dashboard realtime với AI-powered insights giúp bạn ra quyết định nhanh hơn.",
  },
  {
    icon: Globe,
    title: "Phủ sóng toàn cầu",
    desc: "CDN 200+ locations trên toàn thế giới, đảm bảo trải nghiệm mượt mà ở mọi nơi.",
  },
  {
    icon: Users,
    title: "Đồng đội hiệu quả",
    desc: "Công cụ collaboration mạnh mẽ, giúp team làm việc cùng nhau dù ở bất kỳ đâu.",
  },
  {
    icon: Target,
    title: "Mục tiêu rõ ràng",
    desc: "OKR tracking, milestone management và báo cáo tự động để bạn không bỏ lỡ mục tiêu.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "0",
    desc: "Dành cho cá nhân bắt đầu",
    features: ["3 dự án", "1GB storage", "Email support", "Basic analytics"],
    btn: "Bắt đầu miễn phí",
    featured: false,
  },
  {
    name: "Pro",
    price: "299K",
    period: "/tháng",
    desc: "Dành cho freelancer & startup",
    features: [
      "Unlimited dự án",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "API access",
    ],
    btn: "Dùng thử 14 ngày",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    desc: "Dành cho doanh nghiệp lớn",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    btn: "Liên hệsales",
    featured: false,
  },
];

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "CTO at TechViet",
    content:
      "Sản phẩm thay đổi cách team mình làm việc. Hiệu suất tăng 3x chỉ sau 1 tháng sử dụng.",
    stars: 5,
  },
  {
    name: "Trần Thị B",
    role: "Founder at StartupHub",
    content:
      "Giao diện đẹp, dễ dùng và support team cực kỳ nhiệt tình. Recommend 100%!",
    stars: 5,
  },
  {
    name: "Lê Minh C",
    role: "PM at DevCorp",
    content:
      "Cuối cùng cũng tìm được tool phù hợp. Tính năng mạnh mà giá lại rất hợp lý.",
    stars: 5,
  },
];

const stats = [
  { value: "10K+", label: "Người dùng" },
  { value: "50K+", label: "Dự án hoàn thành" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Đánh giá trung bình" },
];

/* ═══════════════════════════════════════════════════════ */
/*                     COMPONENTS                         */
/* ═══════════════════════════════════════════════════════ */

/* ── NAVBAR ────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });

  const links = ["Tính năng", "Bảng giá", "Đánh giá", "Liên hệ"];

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: scrolled ? "12px 0" : "20px 0",
    background: scrolled ? "rgba(255,255,255,.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(0,0,0,.06)" : "1px solid transparent",
    transition: c.transition,
  };

  return (
    <nav style={navStyle}>
      <div
        style={{
          maxWidth: c.maxW,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            fontWeight: 800,
            fontSize: 22,
            color: scrolled ? c.primary : c.white,
            transition: c.transition,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: scrolled ? c.gradient : "rgba(255,255,255,.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <Zap color="#fff" size={20} />
          </div>
          NovaTech
        </a>

        {/* desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: scrolled ? c.gray : "rgba(255,255,255,.8)",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                transition: c.transition,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? c.primary : c.white)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? c.gray : "rgba(255,255,255,.8)")
              }
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            style={{
              background: c.gradient,
              color: c.white,
              padding: "10px 24px",
              borderRadius: c.radiusFull,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              transition: c.transition,
              boxShadow: "0 4px 14px rgba(99,102,241,.4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-1px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Bắt đầu ngay
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: scrolled ? c.dark : c.white,
            cursor: "pointer",
            padding: 4,
          }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: c.white,
            borderBottom: `1px solid ${c.grayLight}`,
            boxShadow: c.shadowLg,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                color: c.dark,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            style={{
              background: c.gradient,
              color: c.white,
              padding: "12px 24px",
              borderRadius: c.radiusFull,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Bắt đầu ngay
          </a>
        </div>
      )}
    </nav>
  );
}

/* ── HERO ──────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: c.gradientDark,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(99,102,241,.15)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(168,85,247,.12)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          maxWidth: c.maxW,
          margin: "0 auto",
          padding: "140px 24px 80px",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: 60,
        }}
        className="hero-grid"
      >
        {/* left text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(99,102,241,.2)",
              border: "1px solid rgba(99,102,241,.3)",
              padding: "6px 16px",
              borderRadius: c.radiusFull,
              color: c.primaryLight,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            <Star size={14} fill="currentColor" /> Được 10,000+ người tin dùng
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              color: c.white,
              lineHeight: 1.1,
              margin: "0 0 24px",
            }}
          >
            Xây dựng tương lai
            <br />
            <span style={{ background: c.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              cùng NovaTech
            </span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.65)",
              lineHeight: 1.7,
              margin: "0 0 40px",
              maxWidth: 520,
            }}
          >
            Nền tảng giúp bạn quản lý dự án, phân tích dữ liệu và thúc đẩy
            tăng trưởng — tất cả trong một nơi duy nhất.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: c.white,
                color: c.primary,
                padding: "14px 32px",
                borderRadius: c.radiusFull,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                transition: c.transition,
                boxShadow: "0 4px 14px rgba(0,0,0,.2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Dùng thử miễn phí <ChevronRight size={18} />
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.2)",
                color: c.white,
                padding: "14px 32px",
                borderRadius: c.radiusFull,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 600,
                transition: c.transition,
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.08)")}
            >
              <Play size={16} fill="currentColor" /> Xem demo
            </a>
          </div>
        </div>

        {/* right visual */}
        <div className="hero-visual" style={{ flex: 1, minWidth: 0, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: 480,
              aspectRatio: "1",
              borderRadius: 32,
              background: "linear-gradient(135deg, rgba(99,102,241,.3) 0%, rgba(168,85,247,.3) 100%)",
              border: "1px solid rgba(255,255,255,.1)",
              backdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 30px 60px rgba(0,0,0,.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* floating cards */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "10%",
                background: "rgba(255,255,255,.12)",
                backdropFilter: "blur(10px)",
                borderRadius: 16,
                padding: "16px 20px",
                border: "1px solid rgba(255,255,255,.15)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(99,102,241,.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <TrendingUp color="#fff" size={18} />
                </div>
                <div>
                  <div style={{ color: c.white, fontWeight: 700, fontSize: 18 }}>+127%</div>
                  <div style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>Revenue growth</div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "18%",
                right: "8%",
                background: "rgba(255,255,255,.12)",
                backdropFilter: "blur(10px)",
                borderRadius: 16,
                padding: "16px 20px",
                border: "1px solid rgba(255,255,255,.15)",
                animation: "float 6s ease-in-out infinite 2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(34,197,94,.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Shield color="#fff" size={18} />
                </div>
                <div>
                  <div style={{ color: c.white, fontWeight: 700, fontSize: 18 }}>Secure</div>
                  <div style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>SSL & 2FA</div>
                </div>
              </div>
            </div>

            <Zap size={80} color="rgba(255,255,255,.15)" />
          </div>
        </div>
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @media (max-width: 768px) {
          .hero-visual { display: none !important; }
          .hero-grid { flex-direction: column !important; text-align: center; padding-top: 120px !important; }
          .hero-grid a { margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </section>
  );
}

/* ── STATS ─────────────────────────────────────────────── */
function Stats() {
  return (
    <section
      style={{
        background: c.white,
        padding: "60px 24px",
        borderBottom: `1px solid ${c.grayLight}`,
      }}
    >
      <div
        style={{
          maxWidth: c.maxW,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
        className="stats-grid"
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, fontWeight: 900, color: c.primary, lineHeight: 1.2 }}>
              {s.value}
            </div>
            <div style={{ fontSize: 15, color: c.gray, marginTop: 4, fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

/* ── FEATURES ──────────────────────────────────────────── */
function Features() {
  return (
    <section
      id="tính năng"
      style={{ padding: "100px 24px", background: c.bg }}
    >
      <div style={{ maxWidth: c.maxW, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(99,102,241,.1)",
              color: c.primary,
              padding: "6px 16px",
              borderRadius: c.radiusFull,
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 16,
            }}
          >
            Tính năng
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: c.dark,
              margin: "0 0 16px",
            }}
          >
            Mọi thứ bạn cần,{" "}
            <span style={{ color: c.primary }}>trong một nơi</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: c.gray,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Được thiết kế để giúp bạn làm việc thông minh hơn, không phải làm nhiều hơn.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="features-grid"
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: c.white,
                borderRadius: c.radiusLg,
                padding: 36,
                border: `1px solid ${c.grayLight}`,
                transition: c.transition,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = c.shadowXl;
                e.currentTarget.style.borderColor = c.primaryLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = c.grayLight;
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(99,102,241,.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <f.icon size={24} color={c.primary} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: c.dark,
                  margin: "0 0 10px",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 15, color: c.gray, lineHeight: 1.65, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

/* ── PRICING ───────────────────────────────────────────── */
function Pricing() {
  return (
    <section
      id="bảng giá"
      style={{ padding: "100px 24px", background: c.white }}
    >
      <div style={{ maxWidth: c.maxW, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(99,102,241,.1)",
              color: c.primary,
              padding: "6px 16px",
              borderRadius: c.radiusFull,
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 16,
            }}
          >
            Bảng giá
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: c.dark,
              margin: "0 0 16px",
            }}
          >
            Đầu tư xứng đáng,{" "}
            <span style={{ color: c.primary }}>không phí ẩn</span>
          </h2>
          <p style={{ fontSize: 17, color: c.gray, maxWidth: 480, margin: "0 auto" }}>
            Chọn gói phù hợp với bạn. Nâng cấp bất cứ lúc nào.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {plans.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.featured ? c.gradientDark : c.bgAlt,
                borderRadius: c.radiusLg,
                padding: 40,
                border: p.featured ? "2px solid rgba(99,102,241,.5)" : `1px solid ${c.grayLight}`,
                position: "relative",
                transition: c.transition,
                transform: p.featured ? "scale(1.04)" : "none",
                boxShadow: p.featured ? "0 25px 50px rgba(99,102,241,.2)" : c.shadow,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = p.featured ? "scale(1.06)" : "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = p.featured ? "scale(1.04)" : "none")}
            >
              {p.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: c.gradient,
                    color: c.white,
                    padding: "4px 18px",
                    borderRadius: c.radiusFull,
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  Phổ biến nhất
                </div>
              )}

              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: p.featured ? c.primaryLight : c.primary,
                  marginBottom: 8,
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 900,
                    color: p.featured ? c.white : c.dark,
                  }}
                >
                  {p.price}
                </span>
                {p.period && (
                  <span
                    style={{
                      fontSize: 15,
                      color: p.featured ? "rgba(255,255,255,.5)" : c.gray,
                    }}
                  >
                    {p.period}
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: p.featured ? "rgba(255,255,255,.6)" : c.gray,
                  margin: "0 0 28px",
                }}
              >
                {p.desc}
              </p>

              <div
                style={{
                  borderTop: `1px solid ${p.featured ? "rgba(255,255,255,.1)" : c.grayLight}`,
                  paddingTop: 24,
                  marginBottom: 28,
                }}
              >
                {p.features.map((feat) => (
                  <div
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                      fontSize: 14,
                      color: p.featured ? "rgba(255,255,255,.8)" : c.darkAlt,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: p.featured
                          ? "rgba(99,102,241,.3)"
                          : "rgba(99,102,241,.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} color={p.featured ? c.primaryLight : c.primary} strokeWidth={3} />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>

              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 24px",
                  borderRadius: c.radiusFull,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  transition: c.transition,
                  ...(p.featured
                    ? {
                        background: c.white,
                        color: c.primary,
                        boxShadow: "0 4px 14px rgba(0,0,0,.2)",
                      }
                    : {
                        background: c.primary,
                        color: c.white,
                        boxShadow: "0 4px 14px rgba(99,102,241,.4)",
                      }),
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {p.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 400px; margin: 0 auto; }
          .pricing-grid > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ── TESTIMONIALS ──────────────────────────────────────── */
function Testimonials() {
  return (
    <section
      id="đánh giá"
      style={{ padding: "100px 24px", background: c.bg }}
    >
      <div style={{ maxWidth: c.maxW, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(99,102,241,.1)",
              color: c.primary,
              padding: "6px 16px",
              borderRadius: c.radiusFull,
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 16,
            }}
          >
            Đánh giá
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: c.dark,
              margin: "0 0 16px",
            }}
          >
            Được yêu thích bởi{" "}
            <span style={{ color: c.primary }}>hàng nghìn người</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: c.white,
                borderRadius: c.radiusLg,
                padding: 36,
                border: `1px solid ${c.grayLight}`,
                transition: c.transition,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = c.shadowXl;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#facc15" color="#facc15" />
                ))}
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: c.darkAlt,
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                  fontStyle: "italic",
                }}
              >
                "{t.content}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: c.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: c.white,
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: c.dark }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 13, color: c.gray }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

/* ── CTA ───────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ padding: "100px 24px", background: c.gradientDark, position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background: "rgba(99,102,241,.15)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: c.white,
            margin: "0 0 20px",
            lineHeight: 1.2,
          }}
        >
          Sẵn sàng bắt đầu hành trình?
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,.65)",
            margin: "0 0 40px",
            lineHeight: 1.6,
          }}
        >
          Tham gia cùng 10,000+ người dùng đang sử dụng NovaTech để xây dựng sản phẩm tuyệt vời.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: c.white,
              color: c.primary,
              padding: "16px 36px",
              borderRadius: c.radiusFull,
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 700,
              transition: c.transition,
              boxShadow: "0 4px 20px rgba(0,0,0,.2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Bắt đầu miễn phí <ArrowRight size={18} />
          </a>
        </div>
        <p
          style={{
            marginTop: 20,
            fontSize: 13,
            color: "rgba(255,255,255,.4)",
          }}
        >
          Không cần thẻ tín dụng • Hủy bất cứ lúc nào
        </p>
      </div>
    </section>
  );
}

/* ── FOOTER ────────────────────────────────────────────── */
function Footer() {
  const cols = [
    { title: "Sản phẩm", links: ["Tính năng", "Bảng giá", "API", "Tài liệu"] },
    { title: "Công ty", links: ["Về chúng tôi", "Blog", "Tuyển dụng", "Press kit"] },
    { title: "Hỗ trợ", links: ["Help center", "Community", "Status", "Liên hệ"] },
  ];

  return (
    <footer
      id="liên hệ"
      style={{
        background: c.dark,
        color: "rgba(255,255,255,.7)",
        padding: "80px 24px 40px",
      }}
    >
      <div style={{ maxWidth: c.maxW, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: 48,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* brand */}
          <div>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 22,
                color: c.white,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: c.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap color="#fff" size={20} />
              </div>
              NovaTech
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280, margin: "0 0 20px" }}>
              Nền tảng công nghệ giúp bạn xây dựng và quản lý dự án hiệu quả hơn mỗi ngày.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={14} /> hello@novatech.vn
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={14} /> +84 123 456 789
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={14} /> TP. Hồ Chí Minh, Việt Nam
              </span>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: c.white,
                  marginBottom: 20,
                }}
              >
                {col.title}
              </h4>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,.5)",
                    textDecoration: "none",
                    fontSize: 14,
                    marginBottom: 12,
                    transition: c.transition,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = c.white)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.35)" }}>
            © 2026 NovaTech. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(255,255,255,.35)",
                  textDecoration: "none",
                  fontSize: 13,
                  transition: c.transition,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*                     APP                                */
/* ═══════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; -webkit-font-smoothing: antialiased; }
      `}</style>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
