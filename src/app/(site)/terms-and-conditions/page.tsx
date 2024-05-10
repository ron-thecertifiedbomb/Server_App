'use client';
import React, { useReducer } from 'react';

import Accordion from '../components/Accordion/Accordion';
import Banner from '../components/Banner/Banner';
import { TermsAndConditonsContent } from '../utilities/data/termsandconditions/termsandconditions.';
import { reducer,termsSection } from '../utilities/reducers/accordionreducers';

const TermsAndCondition = () => {
  const initialState = termsSection;
  const [sectionState, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Banner title={'Terms and Conditions'} />
      <div className="container w-full m-auto mt-[47px] pl-[10px] pr-[10px] mb-[97px] max-w-[1197px]">
        <Accordion
          content={TermsAndConditonsContent.terms}
          selectedTitle={sectionState}
          dispatch={dispatch}
        />
      </div>
    </React.Fragment>
  );
};

export default TermsAndCondition;
