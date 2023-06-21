import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good * 100) / totalFeedback) || 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} leaveFeedback={leaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
