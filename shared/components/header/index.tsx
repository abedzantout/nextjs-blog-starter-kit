import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type Props = {}
const Header: FunctionComponent<Props> = ({}) => {
    return (
        <div className="nav">
            <Link href="/">
                <img className="logo" src="/static/logo.png" alt="logo"/>
            </Link>
            <style jsx>{`
                .nav { background-color: #ffffff; border-bottom: 1px solid #ececec; box-shadow: 0 2px 50px 0 rgba(0,0,0,0.16);}
                .logo { border-radius: 50%; width: 10rem; };
                .logo:hover { cursor: pointer; };
            `}</style>
        </div>
    );
};

export default Header;
