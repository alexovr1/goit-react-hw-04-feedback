import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
// import { Item } from './FeedbackOptions.styled';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <List>
                {options &&
                    options.map(option => (
                        <li key={option}>
                            <button
                                type="button"
                                onClick={() => {
                                    onLeaveFeedback(option);
                                }}
                            >
                                {capitalize(option)}
                            </button>
                        </li>
                    ))}
            </List>
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};