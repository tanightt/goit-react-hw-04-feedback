import { styled } from 'styled-components';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = key => {
    if (key === 'good') {
      setGood(prev => prev + 1);
    } else if (key === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (key === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    return Math.ceil((good * 100) / total);
  };

  const total = countTotalFeedback();
  const totalPositive = countPositiveFeedbackPercentage(total);

  return (
    <Card>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={totalPositive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Card>
  );
};

const Card = styled.div`
  padding-left: 30px;
`;
