import React, {FunctionComponent, Fragment, ReactNode} from 'react';
import './layout.component.css';
import {MetaTags} from '../../../interfaces/meta-tags';
import Meta from '../meta';

type Props = {
    metaTags: MetaTags;
    children: ReactNode;
}
const Layout: FunctionComponent<Props> = ({metaTags, children}) => {

    return (
        <Fragment>
            <Meta tags={metaTags}/>
            <div className="layout">
                <main>
                    {children}
                </main>
            </div>
        </Fragment>
    );
};

export default Layout;
