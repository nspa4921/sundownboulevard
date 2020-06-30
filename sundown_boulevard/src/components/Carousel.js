import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
    altText: 'Dish 1',
    caption: 'Dish 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https:\/\/www.themealdb.com\/images\/media\/meals\/sytuqu1511553755.jpg',
    altText: 'Dish 2',
    caption: 'Dish 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https:\/\/www.themealdb.com\/images\/media\/meals\/qqwypw1504642429.jpg',
    altText: 'Dish 3',
    caption: 'Dish 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Slider = () => <UncontrolledCarousel items={items} />;


export default Slider;