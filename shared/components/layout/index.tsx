import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import Meta from '../meta';

type Props = {
    meta: any;
    children: ReactNode;
}
const Layout: FunctionComponent<Props> = ({meta, children}) => {

    return (
        <Fragment>
            <Meta tag={meta}/>
            <div className="layout">
                <main>
                    {children}
                </main>
            </div>
        </Fragment>
    );
};

export default Layout;
