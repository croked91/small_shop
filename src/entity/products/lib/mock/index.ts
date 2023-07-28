import asketa from 'shared/assets/images/products/asketa.png';
import lunar from 'shared/assets/images/products/lunar.png';
import menu from 'shared/assets/images/products/menu.png';
import menu2 from 'shared/assets/images/products/menu2.jpeg';
import nastan from 'shared/assets/images/products/nastan.png';
import nastan2 from 'shared/assets/images/products/nastan2.png';
import tatran from 'shared/assets/images/products/tatran.png';
import vilora from 'shared/assets/images/products/vilora.png';
import { IProduct } from '../../model/types';

export const productsList: IProduct[] = [
  {
    id: 1,
    title: 'Кровать TATRAN',
    description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
    imgUrls: [tatran]
  },
  {
    id: 2,
    title: 'Кресло VILORA',
    description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.',
    price: 21000,
    imgUrls: [vilora]
  },
  {
    id: 3,
    title: 'Стол MENU',
    description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
    price: 34000,
    imgUrls: [menu, menu2]
  },
  {
    id: 4,
    title: 'Диван ASKESTA',
    description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать.',
    price: 68000,
    imgUrls: [asketa]
  },
  {
    id: 5,
    title: 'Кресло LUNAR',
    description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки.',
    price: 40000,
    imgUrls: [lunar]
  },
  {
    id: 6,
    title: 'Шкаф Nastan',
    description: 'Мебель может быть оснащена разнообразными системами подсветки.',
    price: 80000,
    imgUrls: [nastan, nastan2]
  }
];
