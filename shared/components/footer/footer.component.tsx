import React, {FunctionComponent} from 'react';
import './footer.component.css';

type Props = {}
const Footer: FunctionComponent<Props> = ({}) => {
    return (
        <footer>
            <span className="dev-team">
                Created with <span className="dev-team__love"> ♥ </span> by TechHive.IO 2019.
            </span>
        </footer>
    );
};

export default Footer;
