import {productsData} from '../../assets/index'
import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Speaker #209",
    price: "3000",
    rating:2,
    categoryName: "speakers",      
    image:productsData[0].img.source
  },
  {
    _id: uuid(),
    title: "Headphones #304",
    price: "5000",
    rating:1,
    categoryName: "headphones",
    image:productsData[1].img.source
  },
  {
    _id: uuid(),
    title: "wireless Earphones #607",
    price: "1000",
    rating:3,
    categoryName: "wireless earphones",
    image:productsData[3].img.source
  },
  {
    _id: uuid(),
    title: "Phone case #902",
    price: "1000",
    rating:3,
    categoryName: "phone cases",
    image:productsData[2].img.source
  },
];
