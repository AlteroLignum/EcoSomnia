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
    description: 'Мы считаем, что вы должны сосредоточиться на своих клиентах, не беспокоясь о безопасности вашей внутренней инфраструктуры, простоях, или задержках обновлений.',
    benefits: [
      { icon: 'refresh', text: 'Обновления платформы применяются мгновенно' },
      { icon: 'lock', text: 'Лучшая в безопасность в своем классе' },
      { icon: 'device', text: 'Доступ в любое время, из любого места, с любого устройства' },
    ],
    backgroundColor: '#FAF8F5',
    imagePath: '/images/featureblocks/mews-cloud.webp',
    altText: 'Интерфейс дашборда с панелью управления',
  },
  {
    id: 2,
    title: 'Больше способов диверсифицировать доход',
    description: 'Ваш отель — это больше, чем простые номера. Поэтому EcoSomnia дает вам много новых возможностей для получения дохода, при этом экономя время и улучшая качество обслуживания гостей.',
    benefits: [
      { icon: 'calendar', text: 'Бронирования от часов до дней и месяцев' },
      { icon: 'car', text: 'Управление площадями размещения, такими как парковка или переговорные комнаты в вашей системе управления отелем' },
      { icon: 'chart', text: 'Реальные данные о том, когда и как гости используют такие услуги, как паркинг, рестораны, и многое другое' },
    ],
    backgroundColor: '#F0F7FF',
    imagePath: '/images/featureblocks/revenue (1).webp',
    altText: 'Интерфейс бронирования пространства',
  },
  {
    id: 3,
    title: 'Легко выучить. Интуитивно понятно использовать.',
    description: 'Мы считаем, что технологии должны работать для вашей пользы, а не для вашего бескопойства EcoSomnia настолько прост в использовании, что сотрудники могут освоить его за несколько дней, снимая часть трудоемких задач с персонала.',
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
    title: 'Встроенные платежи: просто, безопасно, надежно',
    description: 'Предоставьте своим гостям и сотрудникам беспроблемный способ оплаты. Как полностью встроенный платежный платформенный сервис, EcoSomnia Payments позволяет гостям платить в любой момент - от бронирования, во время пребывания до выезда, и обеспечивает своевременную отчетность для бухгалтерии курорта.',
    benefits: [
      { icon: 'payment', text: 'Учет платежей в одном месте' },
      { icon: 'shield', text: 'Надежная защита данных' },
      { icon: 'sync', text: 'Мгновенное подтверждение платежей' },
    ],
    backgroundColor: '#F0F9F5',
    imagePath: '/images/featureblocks/mews-payments.webp',
    altText: 'Композиция из двух карточек с финансовыми данными',
  },
];