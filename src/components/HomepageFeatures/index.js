import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Ptero Manager is easy to use and easy to setup. You can setup the bot in less than 5 minutes.
      </>
    ),
  },
  {
    title: 'Interacting with users',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Ptero Manager is a bot that interacts with users. You can use the bot to manage your Pterodactyl panel and relax
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Ptero Manager is secure. We use the latest security features to make sure your panel is safe.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
