import { styled } from 'styled-components';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return Math.ceil((this.state.good * 100) / total);
  };

  render() {
    const total = this.countTotalFeedback();
    const totalPositive = this.countPositiveFeedbackPercentage(total);
    return (
      <Card>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={totalPositive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Card>
    );
  }
}

const Card = styled.div`
  padding-left: 30px;
`;
