import React, { FunctionComponent } from 'react';

import styles from './footer.module.css';

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
        {' ' + year}
      </span>
    </footer>
  );
};

export default Footer;
