import React from 'react';
import PropTypes from 'prop-types';
import { Buttons, ButtonsItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Buttons>
    {options.map(option => (
      <ButtonsItem
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </ButtonsItem>
    ))}
  </Buttons>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
