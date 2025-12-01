
export interface WhatWeDoItem {
  id: number;
  title: string;
  description: string;
  imagePath: string;
}

export const whatWeDoData: WhatWeDoItem[] = [
  {
    id: 1,
    title: 'Отели',
    description: 'Управление отелями в одном месте',
    imagePath: '/images/whatwedo/Hotels (1).webp',
  },
  {
    id: 2,
    title: 'Группы и компании',
    description: 'Управление сетями отелей',
    imagePath: '/images/whatwedo/Groups and chains.webp',
  },
  {
    id: 3,
    title: 'Хостелы',
    description: 'Управление хостелами',
    imagePath: '/images/whatwedo/Hostels (2).webp',
  },
  {
    id: 4,
    title: 'Альтернативное размещение',
    description: 'Управление альтернативными вариантами размещения',
    imagePath: '/images/whatwedo/Alternative accommodation.webp',
  },
];