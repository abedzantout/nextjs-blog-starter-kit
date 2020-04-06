import React, { FunctionComponent } from 'react';

type Props = {};
const Footer: FunctionComponent<Props> = ({}) => {
  return (
    <footer>
      <span className="dev-team">
        Created with <span className="dev-team__love"> ♥ </span> by{' '}
        <a href="https://www.techhive.io" target="_blank">
          TechHive.IO
        </a>{' '}
        2019.
      </span>
    </footer>
  );
};

export default Footer;
