import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type Props = {};
const Header: FunctionComponent<Props> = ({}) => {
  return (
    <div className="nav">
      <div className="brand">
        <Link href="/">
          <img className="brand__logo" src="/static/logo.png" alt="logo" />
        </Link>

        <h3 className="brand__name">TechHive.IO: NextJs Static Starter Kit.</h3>
      </div>
    </div>
  );
};

export default Header;
