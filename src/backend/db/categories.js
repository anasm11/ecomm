import { v4 as uuid } from "uuid";
import {categoriesData} from '../../assets/index'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "wireless earphones",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
      image:categoriesData[3].img.source
  },
  {
    _id: uuid(),
    categoryName: "headphones",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      image:categoriesData[1].img.source
    },
  {
    _id: uuid(),
    categoryName: "speakers",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image:categoriesData[0].img.source
    },
  {
    _id: uuid(),
    categoryName: "phone cases",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image:categoriesData[2].img.source
    },
];
