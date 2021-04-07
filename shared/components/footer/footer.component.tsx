import React, { FunctionComponent } from 'react';

import styles from './footer.module.scss';

const pjson = require('../../../package.json');

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span className={styles.devTeam}>
        Created with <span className={styles.devTeam__love}> ♥ </span> by{' '}
        <a
          className={styles.link}
          href="https://www.techhive.io"
          target="_blank"
        >
          TechHive.IO
        </a>
        {' ' + year} - Version {pjson.version}
      </span>
    </footer>
  );
};

export default Footer;
