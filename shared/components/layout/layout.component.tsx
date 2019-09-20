import React, {FunctionComponent, Fragment, ReactNode} from 'react';
import './layout.component.css';
import {Tag} from '../../../interfaces/tag';
import Meta from '../meta';

type Props = {
    meta: Tag;
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
