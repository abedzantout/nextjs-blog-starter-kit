import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import { Tag } from '../../../interfaces/tag';
import Meta from '../meta';
import Header from '../header';
import Footer from '../footer';

type Props = {
    meta: Tag;
    children: ReactNode;
}
const Layout: FunctionComponent<Props> = ({meta, children}) => {

    return (
        <Fragment>
            <Meta tag={meta}/>
            <div className="header">
                <Header/>
            </div>
            <div className="layout">
                <main>
                    {children}
                </main>
            </div>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                html, body { height:100%; width:100%; font-family: 'Roboto', sans-serif; }
                body { margin: 0; padding: 0}
                .layout { padding: 2rem 2.5rem; }
            `}</style>

        </Fragment>
    );
};

export default Layout;
