/// <reference types="vite/client" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png" {
  const imageUrl: string;
  export default imageUrl;
}

declare module "*.jpg" {
  const imageUrl: string;
  export default imageUrl;
}
