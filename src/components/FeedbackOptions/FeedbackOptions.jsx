import PropTypes from 'prop-types';
import { OptionsList, OptionsItem, Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <OptionsItem key={option}>
        <Button name={option} type="button" onClick={() => leaveFeedback(option)}>
            {option}
          </Button>
        </OptionsItem>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};