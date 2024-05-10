'use client';
import React, { useReducer } from 'react';

import Accordion from '../components/Accordion/Accordion';
import Banner from '../components/Banner/Banner';
import Label from '../components/Label/Label';
import { FAQsContent } from '../utilities/data/faqs/faqs';
import { faqsSection, reducer } from '../utilities/reducers/accordionreducers';

const Faqs = () => {
  const initialState = faqsSection;
  const [sectionState, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Banner title={'FAQs'} />
      <div className="container w-full m-auto mt-[47px] pl-[10px] pr-[10px] mb-[97px] max-w-[1197px]">
        <Label
          label={'Order Creation'}
          marginBottom={14}
          fontSize={'28px'}
          fontWeight={'700'}
          color={'#e60c2b'}
          mediaqueries={'faqs-title'}
        />
        <Accordion content={FAQsContent.legal} selectedTitle={sectionState} dispatch={dispatch} />
        <Label
          label={'Cancellation of Orders'}
          marginTop={36}
          marginBottom={14}
          fontSize={'28px'}
          fontWeight={'700'}
          color={'#e60c2b'}
          mediaqueries={'faqs-title'}
        />
        <Accordion
          content={FAQsContent.shipping}
          selectedTitle={sectionState}
          dispatch={dispatch}
        />
        <Label
          label={'Shipping and Delivery'}
          marginTop={36}
          marginBottom={14}
          fontSize={'28px'}
          fontWeight={'700'}
          color={'#e60c2b'}
          mediaqueries={'faqs-title'}
        />

        <Accordion
          content={FAQsContent.delivery}
          selectedTitle={sectionState}
          dispatch={dispatch}
        />
        <Label
          label={'Return/Refund'}
          marginTop={36}
          marginBottom={14}
          fontSize={'28px'}
          fontWeight={'700'}
          color={'#e60c2b'}
          mediaqueries={'faqs-title'}
        />
        <Accordion content={FAQsContent.refund} selectedTitle={sectionState} dispatch={dispatch} />
      </div>
    </React.Fragment>
  );
};

export default Faqs;
