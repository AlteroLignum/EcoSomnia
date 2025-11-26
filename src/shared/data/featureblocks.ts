// Data for the Feature Blocks section
export interface FeatureBlock {
  id: number;
  title: string;
  description: string;
  benefits: { icon: string; text: string }[];
  backgroundColor: string;
  imagePath: string;
  altText: string;
}

export const featureBlocksData: FeatureBlock[] = [
  {
    id: 1,
    title: 'Облачное приложение',
    description: 'Мы считаем, что вы должны быть свободны сосредоточиться на гостях, не беспокоясь о безопасности, простоях, трудоемких задачах для ИТ-отдела или задержках обновлений.',
    benefits: [
      { icon: 'refresh', text: 'Обновления платформы применяются мгновенно' },
      { icon: 'lock', text: 'Лучшая в своем классе безопасность' },
      { icon: 'device', text: 'Доступ в любое время, из любого места, с любого устройства' },
    ],
    backgroundColor: '#FAF8F5',
    imagePath: '/images/featureblocks/mews-cloud.webp',
    altText: 'Интерфейс дашборда с панелью управления',
  },
  {
    id: 2,
    title: 'Больше способов диверсифицировать доход',
    description: 'Ваш отель — это больше, чем просто спальни. Поэтому EcoSomnia дает вам больше возможностей генерировать доход, при этом экономя время и улучшая качество обслуживания гостей.',
    benefits: [
      { icon: 'calendar', text: 'Бронирования от часов до дней и месяцев' },
      { icon: 'car', text: 'Управление пространствами, такими как парковка или переговорные комнаты в вашей системе управления отелем' },
      { icon: 'chart', text: 'Реальные данные о том, когда и как гости используют такие услуги, как завтрак' },
    ],
    backgroundColor: '#F0F7FF',
    imagePath: '/images/featureblocks/revenue (1).webp',
    altText: 'Интерфейс бронирования пространства',
  },
  {
    id: 3,
    title: 'Легко выучить. Интуитивно понятно использовать.',
    description: 'Мы считаем, что технологии должны работать с вами, а не заставлять вас работать вокруг них. EcoSomnia настолько прост в использовании, что сотрудники могут освоить его за несколько дней, снимая (часть) стресса с текучести кадров.',
    benefits: [
      { icon: 'hand', text: 'Интуитивный интерфейс' },
      { icon: 'gear', text: 'Автоматизация' },
      { icon: 'grid', text: 'Интерактивные дашборды' },
    ],
    backgroundColor: '#F5F3FF',
    imagePath: '/images/featureblocks/mews-intuitive.webp',
    altText: 'Интерфейс управления номерами',
  },
  {
    id: 4,
    title: 'Встроенные платежи: бесшовно, безопасно, надежно',
    description: 'Предоставьте своим гостям и сотрудникам беспроблемный опыт оплаты. Как полностью встроенный процессинговый платежный платформенный сервис, EcoSomnia Payments позволяет гостям платить в любой момент - от бронирования, во время пребывания до выезда, и обеспечивает объединенное своевременное отчетность.',
    benefits: [
      { icon: 'payment', text: 'Все формы оплаты в одном месте' },
      { icon: 'shield', text: 'Надежная защита данных' },
      { icon: 'sync', text: 'Мгновенное подтверждение платежей' },
    ],
    backgroundColor: '#F0F9F5',
    imagePath: '/images/featureblocks/mews-payments.webp',
    altText: 'Композиция из двух карточек с финансовыми данными',
  },
];