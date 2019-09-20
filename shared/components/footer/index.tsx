import React, {FunctionComponent} from 'react';
import './styles.css';

type Props = {}
const Footer: FunctionComponent<Props> = ({}) => {
    return (
        <footer>
            <span className="dev-team">
                Created with ♥ by TechHive.IO 2019.
            </span>
        </footer>
    );
};

export default Footer;
