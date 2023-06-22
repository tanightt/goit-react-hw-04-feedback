import { styled } from 'styled-components';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {' '}
      {options.map(item => {
        return (
          <FeedbackBtn
            key={item}
            type="button"
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </FeedbackBtn>
        );
      })}
    </ul>
  );
};

const FeedbackBtn = styled.button`
  width: 100px;
`;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
