import React from 'react'
import FAQStyles from './FAQ.module.css';
import { useState } from 'react';
import { Images } from '../../../../Assets/ComponentImages';

const data = [
  {
    id: 1,
    question: 'What makes you eligible?',
    answer: 'With a Lifebank designer, it is a lot faster to determine your eligibility based on your financial history.'
  },
  {
    id: 2,
    question: 'What does Nerve use for credit scoring?',
    answer: ' '
  },
  {
    id: 3,
    question: 'How much can I borrow?',
    answer: ' '
  }
]

const FAQ = () => {

  const [selected, setSelected] = useState<number | null>(0);

  const toggle = (id: number) => {
    selected === id ? setSelected(null) : setSelected(id);
  }

  return (
    <div className={FAQStyles.faqcontainer}>
      
      <div className={FAQStyles.header}>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className={FAQStyles.wrapper}>
          <div className={FAQStyles.accordion}>
              {data.map((item) => (
                <div key={item.id} className={FAQStyles.item}>
                  <div className={FAQStyles.title} onClick={() => toggle(item.id)}>
                    <h5>{item.question}</h5>
                    <span>{selected === item.id ? <img src={Images.arrowup} alt="arrowup" /> :  <img src={Images.arrowdown} alt="arrowdown" />}</span>
                  </div>
                  <div className={selected === item.id ? `${FAQStyles.content} ${FAQStyles.show}` : FAQStyles.content}>
                    <p className={FAQStyles.answer}>{item.answer}</p>
                  </div>
                </div>
              ))}
          </div>
      </div>

    </div>
  )
}


export default FAQ;