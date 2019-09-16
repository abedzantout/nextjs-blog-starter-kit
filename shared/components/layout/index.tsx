import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import Meta from '../meta';
import Header from '../header';

type Props = {
    meta: any;
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
                body { margin: 0; padding: 0}
            `}</style>
        </Fragment>
    );
};

export default Layout;
