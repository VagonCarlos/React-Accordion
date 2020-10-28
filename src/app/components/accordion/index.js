import React, { useState } from 'react';
import Styles from './style.module.scss';
import cx from 'classnames';

const source = [
  {
    question: '1. What business are you doing?',
    answer:
      'In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force.',
  },
  {
    question: '2. What hobby do you have?',
    answer: 'Haircut salons',
  },
  {
    question: '3. What sport do you like?',
    answer: 'Wakeboarding, Snowboarding, Skateboarding',
  },
  {
    question: '4. What your favorite football team?',
    answer: 'Barsa, Juventus, Dynamo',
  },
];

export const Accordion = (props) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className={Styles.accordion}>
      <h1>{props.title}</h1>
      {source.map((tab, index) => {
        const accordionCX = cx({
          [Styles['accordion-item']]: true,
          [Styles.selected]: activeItem === index,
        });
        return (
          <div
            key={index}
            className={accordionCX}
            onClick={() =>
              activeItem != index ? setActiveItem(index) : setActiveItem(null)
            }
          >
            <div className={Styles['accordion-question']}>
              <span>{tab.question}</span>
            </div>
            <p className={Styles['accordion-answer']}>{tab.answer}</p>
          </div>
        );
      })}
    </section>
  );
};

Accordion.defaultProps = {
  title: 'React Accordion',
};
