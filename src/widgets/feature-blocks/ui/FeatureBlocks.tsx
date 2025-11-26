import './FeatureBlocks.scss';
import { featureBlocksData } from '@/shared/data/featureblocks';
import Image from 'next/image';

// Mapping of icon names to actual icons
const getIcon = (iconName: string) => {
  const iconMap: Record<string, string> = {
    'refresh': '🔄',
    'lock': '🔒',
    'device': '📱',
    'calendar': '📅',
    'car': '🚗',
    'chart': '📊',
    'hand': '✋',
    'gear': '⚙️',
    'grid': '🌐',
    'payment': '💳',
    'shield': '🛡️',
    'sync': '🔄',
  };

  return iconMap[iconName] || '❓'; // Default to question mark if icon not found
};

const FeatureBlocks = () => {
  return (
    <section className="feature-blocks">
      <div className="feature-blocks__container">
        <h2 className="feature-blocks__title">Почему отельеры выбирают EcoSomnia</h2>
        <div className="feature-blocks__list">
          {featureBlocksData.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-blocks__item feature-blocks__item--${index % 2 === 0 ? 'even' : 'odd'}`}
              style={{ backgroundColor: feature.backgroundColor }}
            >
              <div className="feature-blocks__number">0{feature.id}</div>
              <div className="feature-blocks__content">
                <h3 className="feature-blocks__item-title">{feature.title}</h3>
                <p className="feature-blocks__item-description">{feature.description}</p>
                <ul className="feature-blocks__benefits">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="feature-blocks__benefit">
                      <span className="feature-blocks__benefit-icon">{getIcon(benefit.icon)}</span>
                      <span className="feature-blocks__benefit-text">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-blocks__image">
                <Image
                  src={feature.imagePath}
                  alt={feature.altText}
                  width={420}
                  height={380}
                  className="feature-blocks__image-content"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;