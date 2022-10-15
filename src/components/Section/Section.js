import PropTypes from 'prop-types';
import { Indent } from './Section.styled';

export const Section = props => {
    return (
        <Indent>
            <h2>{props.title}</h2>
            {props.children}
        </Indent>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};