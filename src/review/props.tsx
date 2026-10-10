import style from "./style.module.css";
const What_We_Offer = [
    {
        id:1,
        title: "Lighting Upgrades",
        content: "Electrical panel maintenance...",
        image: 'review/lighting-upgrades-thumb-G3.jpg',
        more: "read more"
    },
    {
        id:2,
        title: "Electrical repairs",
        content: "Electrical repairs should always be handled by a professional electrician",
        image: 'review/electrical-repairs-thumb-G1.jpg',
        more: "read more"
    },
    {
        id:3,
        title: "Surge Protection",
        content: "An electrical surge can happen for a number of reasons, including lightning strikes.",
        image: 'review/surge-protection-thumb-G4.jpg',
        more: "read more"
    }
]

const products = [
  {
    id: 1,
    name: 'Máy Lọc Không Khí Xiaomi Mi Air Purifier Gen 4 Pro',
    image: 'review/may-loc-khong-khi-xiaomi-mi-air-purifier-gen-4-pro-thumbjpg.jpg',
    price: 1150000,
    oldPrice: 1725000,
    discount: 6
  },
  {
    id: 2,
    name: 'Robot Hút Bụi Lau Nhà Xiaomi Roborock S7',
    image: 'review/robot-hut-bui-lau-nha-xiaomi-roborock-s7-thumb.jpg',
    price: 6550000,
    discount: 6
  },
  {
    id: 3,
    name: 'Cáp chuyển đổi USB-C sang SD',
    image: 'review/cap-chuyen-doi-usb-c-sang-sd-thumb.png',
    price: 790000,
    oldPrice: 1290000,
    discount: 25
  },
  {
    id: 4,
    name: 'Adapter sạc Apple Type C 20W',
    image: 'review/adapter-sac-apple-type-c-20w-thumb.png',
    price: 520000
  }
];

const footer_content = [
  {
    id: 1,
    name: 'About Us',
  },
  {
    id: 2,
    name: 'Contact info',
  },
  {
    id: 3,
    name: 'Customer Service',
  },
  {
    id: 4,
    name: 'popular Tags',
  }
];
export const Header = () =>{
    return (
        <>
            <div className={style.head}>
                <h2 className={style.name}>Elecrician</h2>
                <p className={style.nav_link}>Home</p>
                <p className={style.nav_link}>Blog</p>
                <p className={style.nav_link}>Categary</p>
                <p className={style.nav_link}>Product</p>
                <p className={style.nav_link}>Login</p>
                <p className={style.nav_link}>Costomer</p>
                <div className={style.shop}>*shop*</div>
            </div>
        </>
    )
}

export const WhatWeOffer = () => {
    return (
        <>
        
            <div className={style.What_We_Offer}>
                {What_We_Offer.map((item) => (
                    <div className={style.item_title} key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h2 className={style.item}>{item.title} </h2>
                        <p className={style.item}>{item.content}</p>
                        <button className={style.item}>{item.more}</button>
                    </div>
                ))}
            </div>
        
        </>
    )            
}

export const Products = () => {
    return (
        <>
            <div className={style.product}>
                {products.map((product) => (
                    <div  key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p className={style.price}>${product.price.toLocaleString()} <del className={style.oldPrice}>{product.oldPrice?.toLocaleString()}</del></p>
                    </div>
                ))}
            </div>
        </>
    )
}

export const Footer = () => {
    return (
        <>
            <div className={style.container}>
                {footer_content.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}a</h2>
                        <h2>{item.name}</h2>
                        <h2>{item.name}</h2>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}