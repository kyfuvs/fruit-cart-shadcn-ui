// my-next/src/app/fruits/MyProps.tsx
export interface MyProps {
    name: string;
    price: number;
    image: string;
    description: string;
    detail: {
      origin: string;
      year: string;
    };
  }
  

  //  {"id" : 1,
  //  "name" : "蘋果", 
  //  "price" : 5, 
  //  "image" : "apple.jpg",
  //  "description":"新鮮蘋果50克，一日一蘋果，醫生遠離我", 
  //  "detail":{"origin":"Japan", "year":"Nov,2023"}},